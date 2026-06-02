import 'core-js/features/promise'
import 'core-js/features/url'
import 'core-js/features/array/includes'
import 'core-js/features/object/assign'
import 'proxy-polyfill'
import {
  OfficeSDKBroadcastChannel,
  OfficeSDKMessageEvent,
  isOfficeSDKMessageEventLike,
  OfficeSDKEventLike
} from 'officesdk-broadcast-channel'
import { StartParams } from 'weboffice-startparams'
import { v4 as uuid } from 'uuid'
import { TinyEmitter } from 'tiny-emitter'
import getGlobal from 'globalthis/polyfill'
import {
  ContainerMethod,
  ContainerRect,
  DisableMentionCards,
  FileType,
  InvokeMethod,
  MouseMovePayload,
  ReadyState,
  PerformanceEntry,
  DeviceMode,
  GenerateUrlHandler,
  GenerateUrlInfo,
  APIAdaptor,
  RequestContext,
  SDKEvent,
  ShowToastOptions,
  Credentials
} from 'weboffice-js-sdk-shared'
import ExpireSet from 'expire-set'

import {
  Document,
  DocumentPro,
  Presentation,
  Spreadsheet,
  Table,
  Form,
  Flowchart
} from '.'
import { assert } from './assert'
import {
  EmptyPageOptions,
  NormalizedEmptyPageOptions,
  normalizeEmptyPageOptions
} from './types/EmptyPage'
import {
  BaseEditor,
  Collaborator,
  CollaboratorsChangedPayload
} from './types/BaseEditor'
import {
  SlashMenuButton,
  SlashMenuEntry,
  SlashMenuOptions
} from './types/SlashMenu'
import {
  applyHeaderBarsChanged,
  ensureHeaderBarsTitleChangeSubscription,
  getHeaderBarsCommandRef,
  HEADER_BARS_CHANGED_EVENT,
  HEADER_BARS_METHOD,
  initHeaderBarsFacade,
  setHeaderBarsVisible,
  syncHeaderBarsCommands,
  syncHeaderBarsVisible
} from './OfficeSDK.headerBars'
import { buildRootFacadeState } from './OfficeSDK.facade'
import type {
  CollaboratorFacade,
  CommentsFacade,
  ContentFacade,
  DiscussionFacade,
  DocsSearchFacade,
  DocsSelectionFacade,
  DocsSettingsFacade,
  DocsSidebarFacade,
  DocsTOCsFacade,
  DocsTablesFacade,
  ExternalAppFacade,
  HistoryFacade,
  LocksFacade,
  MentionFacade,
  PresentationEventSubscriptionFacade,
  PresentationFacade,
  PresentationSelectionFacade,
  PresentationSlidesFacade,
  PresentationTextFacade,
  PresentationZoomFacade,
  SheetChartsFacade,
  SheetSelectionsFacade,
  SheetWorkbookFacade,
  SheetWorksheetFacade,
  TitleFacade,
  VersionFacade
} from './OfficeSDK.facade.types'
import type {
  HeaderBarsChangedPayload,
  HeaderBarsCommandRef,
  HeaderBarsCommandState,
  HeaderBarsFacade,
  HeaderBarsTitleChangeHandler
} from './OfficeSDK.headerBars'

export * from './OfficeSDK.facade.types'
export * from './OfficeSDK.headerBars'

const globalThis = getGlobal()
const AUD = 'smjssdk'
const SM_PARAMS_KEY = 'smParams'
const LOADING_OPTIONS_KEY = 'loadingOptions'
const LEGACY_LANGUAGE_MAP = {
  en: 'en-US',
  ja: 'ja-JP'
} as const
const SUPPORTED_LANGUAGES = [
  'zh-CN',
  'zh-TW',
  'en-US',
  'ja-JP',
  'ko-KR',
  'es-ES',
  'pt-PT',
  'de-DE',
  'fr-FR',
  'it-IT',
  'ru-RU',
  'id-ID',
  'vi-VN',
  'th-TH',
  'ms-MY',
  'ar-SA'
] as const
type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]
type LegacyLanguage = keyof typeof LEGACY_LANGUAGE_MAP
const EDITOR_FACADE_CALLBACK_METHOD = 'editorFacade.handleCallback'
const SLASH_MENU_METHOD = {
  handleButtonClick: 'slashMenu.handleButtonClick'
} as const
const PRELOAD_MESSAGE_TYPE = {
  READY: 'SDK_PRELOAD_READY',
  INIT: 'SDK_PRELOAD_INIT',
  ACK: 'SDK_PRELOAD_ACK',
  DONE: 'SDK_PRELOAD_DONE',
  ERROR: 'SDK_PRELOAD_ERROR'
} as const

type EditorFacadeCallback = (...args: unknown[]) => unknown | Promise<unknown>

interface SerializedSlashMenuButton extends Omit<SlashMenuButton, 'callback'> {
  callbackId?: string
}

interface SerializedSlashMenuEntry extends Omit<SlashMenuEntry, 'children'> {
  children?: SerializedSlashMenuItem[]
}

type SerializedSlashMenuItem =
  | SerializedSlashMenuButton
  | SerializedSlashMenuEntry

interface SerializedSlashMenuOptions {
  entries: SerializedSlashMenuItem[]
}

/**
 * 兼容旧版语言缩写，并统一映射为标准语言代码。
 */
function normalizeLanguage(lang: string): SupportedLanguage | undefined {
  const normalized = LEGACY_LANGUAGE_MAP[lang as LegacyLanguage] ?? lang

  if ((SUPPORTED_LANGUAGES as readonly string[]).includes(normalized)) {
    return normalized as SupportedLanguage
  }

  return undefined
}

function isSlashMenuEntry(
  item: SlashMenuEntry | SlashMenuButton
): item is SlashMenuEntry {
  return item.type === 'entry'
}

export const MessageEvent = InvokeMethod

export class OfficeSDK extends TinyEmitter {
  /**
   * 编辑器页面对应的 iframe 元素。需要注意调整父元素大小来控制 iframe 大小。
   */
  element: HTMLIFrameElement
  readonly uuid: string
  readonly userUuid?: string

  /**
   * 传统文档编辑器实例
   * @deprecated - 用 `sdk.getEditor<T>()` 替代
   */
  documentPro?: DocumentPro.Editor

  /**
   * 轻文档编辑器实例
   * @deprecated - 用 `sdk.getEditor<T>()` 替代
   */
  document?: Document.Editor

  /**
   * 表格编辑器实例
   * @deprecated - 用 `sdk.getEditor<T>()` 替代
   */
  spreadsheet?: Spreadsheet.Editor

  /**
   * 当前套件支持的标题能力。
   */
  title?: TitleFacade

  /**
   * 当前套件支持的历史能力。
   */
  history?: HistoryFacade

  /**
   * 当前套件支持的评论能力。
   */
  comments?: CommentsFacade

  /**
   * 当前套件支持的讨论能力。
   */
  discussion?: DiscussionFacade

  /**
   * 当前套件支持的编写者侧边栏能力。
   */
  collaborator?: CollaboratorFacade

  /**
   * 当前套件支持的第三方应用插入能力。
   */
  externalApp?: ExternalAppFacade

  /**
   * 当前套件支持的锁定能力。
   */
  locks?: LocksFacade

  /**
   * 当前套件支持的提及定位能力。
   */
  mention?: MentionFacade

  /**
   * 当前套件支持的内容写入能力。
   */
  content?: ContentFacade

  /**
   * 当前套件支持的版本能力。
   */
  version?: VersionFacade

  /**
   * 当前套件支持的演示能力。
   */
  presentation?: PresentationFacade

  /**
   * 当前套件支持的选区能力。
   */
  selection?: DocsSelectionFacade | PresentationSelectionFacade

  /**
   * 当前套件支持的搜索能力。
   */
  search?: DocsSearchFacade

  /**
   * 当前套件支持的目录能力。
   */
  TOCs?: DocsTOCsFacade

  /**
   * 当前套件支持的侧边栏能力。
   */
  sidebar?: DocsSidebarFacade

  /**
   * 当前套件支持的表格集合能力。
   */
  tables?: DocsTablesFacade

  /**
   * 当前套件支持的设置能力。
   */
  settings?: DocsSettingsFacade

  /**
   * 当前套件支持的工作簿能力。
   */
  workbook?: SheetWorkbookFacade

  /**
   * 当前套件支持的当前工作表能力。
   */
  activeSheet?: SheetWorksheetFacade

  /**
   * 当前套件支持的图表能力。
   */
  charts?: SheetChartsFacade

  /**
   * 当前套件支持的多选区能力。
   */
  selections?: SheetSelectionsFacade

  /**
   * 当前套件支持的幻灯片集合能力。
   */
  slides?: PresentationSlidesFacade

  /**
   * 当前套件支持的文本能力。
   */
  text?: PresentationTextFacade

  /**
   * 当前套件支持的缩放能力。
   */
  zoom?: PresentationZoomFacade

  /**
   * 当前套件支持的事件订阅能力。
   */
  eventSubscription?: PresentationEventSubscriptionFacade

  /**
   * 当前套件支持的批量变更能力。
   */
  batchChanges?: <T>(callback: () => T | Promise<T>) => Promise<Awaited<T>>

  /**
   * 当前套件支持的导出能力。
   */
  export?: (type: string) => Promise<void>

  /**
   * 当前套件支持的打印能力。
   */
  print?: () => Promise<void>

  /**
   * 当前套件支持的聚焦能力。
   */
  setFocus?: (isFocus: boolean) => Promise<void>

  /**
   * 应用表格编辑器实例
   * @deprecated - 用 `sdk.getEditor<T>()` 替代
   */
  table?: Table.Editor

  /**
   * 表单编辑器实例
   * @deprecated - 用 `sdk.getEditor<T>()` 替代
   */
  form?: Form.Editor

  /**
   * 图谱编辑器实例
   * @deprecated - 用 `sdk.getEditor<T>()` 替代
   */
  flowchart?: Flowchart.Editor
  readonly headerBars: HeaderBarsFacade

  private _fileType: FileType = FileType.Unknown
  private readonly messageHandler: (evt: globalThis.MessageEvent) => void =
    () => undefined

  /**
   * 内部 event emitter，比如用来中转 editor 事件
   */
  private readonly emitter: TinyEmitter = new TinyEmitter()

  private channel: OfficeSDKBroadcastChannel
  private readonly connectOptions: OfficeSDKOptions
  private _readyState: ReadyState = ReadyState.Loading
  private editor: any
  private readonly startParams: StartParams
  private collaborators: Collaborator[] = []
  private readonly apiAdaptor: string
  private readonly apiAdaptorContext: string
  private readonly handledMessageCache: ExpireSet<string>
  /**
   * 消息过期时间，单位毫秒，默认 5 分钟
   */
  private readonly messageExpires: number
  /**
   * SDK 服务器的地址
   */
  private readonly endpoint: URL
  private readonly sameOrigin: boolean
  private headerBarsVisible = true

  private readonly headerBarsCommands = new Map<
    string,
    HeaderBarsCommandState
  >()

  private readonly headerBarsCommandOverrides = new Map<
    string,
    (() => void | Promise<void>) | undefined
  >()

  private readonly slashMenuCallbacks = new Map<string, () => void>()
  private readonly editorFacadeCallbacks = new Map<
    string,
    EditorFacadeCallback
  >()

  private readonly headerBarsCommandRefs = new Map<
    string,
    HeaderBarsCommandRef
  >()

  private headerBarsTitleChangeHandler?: HeaderBarsTitleChangeHandler
  private headerBarsTitleChangeSubscribed = false

  private readonly onViewportResize: () => void

  /**
   * 归一化后的缺省页配置，构造时一次算完，后续仅读取。
   */
  private readonly normalizedEmptyPage: NormalizedEmptyPageOptions
  private readonly preloadAckTimeoutMs = 2000
  private readonly preloadDoneTimeoutMs = 8000
  private readonly preloadReadyTimeoutMs = 3000

  constructor(options: OfficeSDKOptions) {
    super()

    this.connectOptions = options
    this.uuid = uuid()
    this.userUuid = options.userUuid
    this.normalizedEmptyPage = normalizeEmptyPageOptions(options.emptyPage)

    assert<HTMLElement>(
      options.container,
      (input) => input instanceof HTMLElement,
      `container is not an HTMLElement: "${String(options.container)}"`
    )
    assert<HTMLElement>(
      options.container,
      (input: HTMLElement) =>
        !['iframe', 'frame', 'embed', 'object'].includes(
          input.tagName.toLowerCase()
        ),
      `invalid container element type: "${options.container.tagName}"，DIV are recommended.`
    )

    try {
      this.endpoint = new URL(options.endpoint)
    } catch (e) {
      throw new Error(`invalid endpoint: "${options.endpoint}"`)
    }
    this.sameOrigin = this.endpoint.origin === globalThis.location.origin

    if (/\/sdk\/v2\/*/i.test(this.endpoint.pathname) === false) {
      console.warn(
        `Generally the endpoint should end with "/sdk/v2", please make sure it is correct: "${this.endpoint.toString()}"`
      )
    }

    this.apiAdaptor = options.apiAdaptor ? options.apiAdaptor.toString() : ''
    this.apiAdaptorContext = options.apiAdaptorContext
      ? JSON.stringify(options.apiAdaptorContext)
      : ''

    try {
      this.startParams = new StartParams(
        options.smParams ??
          new URLSearchParams(globalThis.location?.search).get(SM_PARAMS_KEY) ??
          ''
      )
    } catch (e) {
      this.startParams = new StartParams()
    }

    if (typeof options.debug === 'boolean') {
      this.startParams.debug = this.connectOptions.debug
    }

    this.onViewportResize = () => {
      ;(async () => {
        await this.channel.postMessage({
          event: SDKEvent.ViewportResize,
          payload: this.getContainerRect()
        })
      })().catch((err) => {
        this.emit(
          'error',
          new Error(`Failed to emit resize event: ${String(err)}`)
        )
      })
    }

    this.initChannel()
    this.headerBars = this.initHeaderBarsFacade()

    let messageExpires = options.messageExpires
    if (typeof messageExpires !== 'number') {
      messageExpires = 60 * 5 * 1000
    }
    this.messageExpires = assert(
      messageExpires,
      (input) => !isNaN(input) && input > 0,
      `"messageExpires" is not an valid number: "${messageExpires}"`
    )
    this.handledMessageCache = new ExpireSet<string>(messageExpires)

    if (!this.sameOrigin) {
      // 注册可以反注册的函数
      this.messageHandler = (evt: globalThis.MessageEvent) => {
        // 将消息转入 OfficeSDKBroadcastChannel 处理
        const data = evt.data
        if (
          isOfficeSDKMessageEventLike(data) &&
          this.shouldHandleMessage(data)
        ) {
          this.handledMessageCache.add(data.id)
          this.channel
            .distributeMessage(evt.data as OfficeSDKMessageEvent)
            .catch((err: Error) => {
              this.emit('error', err)
            })
        }
      }
    }
  }

  get fileType() {
    return this._fileType
  }

  get readyState() {
    return this._readyState
  }

  /**
   * 判断当前实例是否应该向 iframe 暴露 slashMenu。
   * 输入：无，读取当前文件类型与 startParams.type 提示。
   * 输出：仅在明确是 docs，或尚未拿到文件类型且没有明确非 docs 提示时返回 true。
   */
  private shouldExposeSlashMenu() {
    if (!this.connectOptions.slashMenu) {
      return false
    }

    if (this.fileType === FileType.Document) {
      return true
    }

    if (this.fileType !== FileType.Unknown) {
      return false
    }

    const hintedType = this.getSlashMenuTypeHint()
    if (typeof hintedType !== 'string') {
      return true
    }

    return ['doc', 'docs', 'document'].includes(hintedType)
  }

  /**
   * 从 startParams 中提取文件类型提示。
   * 输入：无。
   * 输出：标准化后的 type 字符串；若未配置则返回 undefined。
   */
  private getSlashMenuTypeHint() {
    const type = (this.startParams as Record<string, unknown>).type
    if (typeof type !== 'string') {
      return undefined
    }

    const normalized = type.trim().toLowerCase()
    return normalized || undefined
  }

  /**
   * 将宿主传入的 slashMenu 转成可跨 iframe 传输的纯数据结构。
   * 输入：当前实例上的 `OfficeSDKOptions.slashMenu`。
   * 输出：去除真实函数、附带 callbackId 的 slashMenu 配置；不适用时返回 undefined。
   */
  private createSerializedSlashMenu(): SerializedSlashMenuOptions | undefined {
    this.slashMenuCallbacks.clear()

    if (!this.shouldExposeSlashMenu()) {
      return undefined
    }

    const { slashMenu } = this.connectOptions
    if (!slashMenu || !Array.isArray(slashMenu.entries)) {
      return undefined
    }

    return {
      entries: this.serializeSlashMenuItems(slashMenu.entries, ['entries'])
    }
  }

  /**
   * 递归序列化 slashMenu 菜单项，并登记 button callback。
   * 输入：菜单项数组与当前递归路径。
   * 输出：仅包含结构化克隆安全字段的菜单项数组。
   */
  private serializeSlashMenuItems(
    items: Array<SlashMenuEntry | SlashMenuButton>,
    path: string[]
  ): SerializedSlashMenuItem[] {
    return items.map((item, index) => {
      const nextPath = [...path, `${index}`, item.name]
      if (isSlashMenuEntry(item)) {
        return {
          ...item,
          children: item.children
            ? this.serializeSlashMenuItems(item.children, nextPath)
            : undefined
        }
      }

      const callbackId = this.registerSlashMenuCallback(nextPath, item.callback)
      const serializedItem: SerializedSlashMenuButton = {
        name: item.name,
        type: item.type,
        disabled: item.disabled,
        label: item.label,
        icon: item.icon
      }

      if (callbackId) {
        serializedItem.callbackId = callbackId
      }

      return serializedItem
    })
  }

  /**
   * 为 slashMenu button callback 生成稳定 id 并注册到内存表。
   * 输入：菜单路径与可选 callback。
   * 输出：注册后的 callbackId；若未提供 callback 则返回 undefined。
   */
  private registerSlashMenuCallback(path: string[], callback?: () => void) {
    if (typeof callback !== 'function') {
      return undefined
    }

    const callbackId = `slash-menu:${path.join(':')}`
    this.slashMenuCallbacks.set(callbackId, callback)
    return callbackId
  }

  getEditor<
    T extends
      | BaseEditor
      | Document.Editor
      | DocumentPro.Editor
      | Presentation.Editor
      | Spreadsheet.Editor
      | Form.Editor
      | Flowchart.Editor
      | Table.Editor = BaseEditor
  >(): T {
    return this.editor as T
  }

  /**
   * 更新鉴权 signature 和 token
   * @deprecated - 用 `OfficeSDKOptions.getCredentials()` 替代
   */
  async setCredentials(payload: { signature: string; token: string }) {
    await this.channel.invoke(InvokeMethod.SetCredentials, [payload], {
      audience: AUD
    })
  }

  /**
   * 设置石墨的鉴权 signature。用于实时更新鉴权信息，优化用户出现因长时间放置，鉴权失败而引起的体验问题。
   * @deprecated - 用 `sdk.setCredentials()` 替代
   */
  async setSignature(signature: string) {
    await this.channel.invoke(InvokeMethod.SetCredentials, [{ signature }], {
      audience: AUD
    })
  }

  /**
   * 设置您系统的鉴权 token。用于实时更新鉴权信息，优化用户出现因长时间放置，鉴权失败而引起的体验问题。
   * @deprecated - 用 `sdk.setCredentials()` 替代
   */
  async setToken(token: string) {
    await this.channel.invoke(InvokeMethod.SetCredentials, [{ token }], {
      audience: AUD
    })
  }

  /**
   * 获取性能信息片段列表，由于性能标记是分段的、异步的，因此每次调用时获取的列表有可能不一致
   */
  async getPerformanceEntries(): Promise<PerformanceEntry[]> {
    return await this.channel.invoke(
      InvokeMethod.RequestPerformanceEntries,
      [],
      {
        audience: AUD
      }
    )
  }

  disconnect() {
    this.slashMenuCallbacks.clear()
    this.editorFacadeCallbacks.clear()
    if (this.element?.parentElement instanceof HTMLElement) {
      this.element.parentElement.removeChild(this.element)
    }
    window.removeEventListener('message', this.messageHandler)
    if (window.visualViewport) {
      window.visualViewport.removeEventListener('resize', this.onViewportResize)
    } else {
      window.removeEventListener('resize', this.onViewportResize)
    }
  }

  /**
   * 初始化 SDK，返回 Promise，当 ReadState 变为 Ready 或 Failed 时，Promise 将被 resolve。
   * Promise resovled 不代表编辑器已经完整加载完毕，只代表 SDK 已经准备好了。
   * 同时 Promise 一直 pending 也不代表编辑器加载失败，只代表无法通过 SDK 和编辑器交互。
   * 比如受浏览器限制无法发出 postMessage() 时，Promise 将会一直 pending。
   */
  async init() {
    if (this._readyState !== ReadyState.Loading) {
      return
    }

    this._readyState = ReadyState.LoadingEditor

    if (!this.sameOrigin) {
      window.addEventListener('message', this.messageHandler)
    }

    this.element = await this.initIframe()

    this.connectOptions.container.appendChild(this.element)
    await this.runPreloadHandshake()

    this.editor = this.initEditor()

    /**
     * 等待编辑器 ReadyState 变化回调
     */
    await new Promise<void>((resolve, reject) => {
      let done = false
      const readyStateHandler = (payload: ReadyStateEvent) => {
        const { state, error, fileType } = payload

        this._readyState = state

        if (fileType && this._fileType === FileType.Unknown) {
          this._fileType = fileType
        }

        if (error) {
          done = true
          reject(typeof error === 'string' ? new Error(error) : error)
        } else if (state === ReadyState.Ready) {
          done = true
          resolve()
        }

        if (done) {
          this.off(Event.ReadyState, readyStateHandler)
        }
      }

      this.on(Event.ReadyState, readyStateHandler)
    })

    switch (this.fileType) {
      case FileType.Document:
        this.document = this.editor as Document.Editor
        break
      case FileType.DocumentPro:
        this.documentPro = this.editor as DocumentPro.Editor
        break
      case FileType.Spreadsheet:
        this.spreadsheet = this.editor as Spreadsheet.Editor
        break
      case FileType.Table:
        this.table = this.editor as Table.Editor
        break
      case FileType.Form:
        this.form = this.editor as Form.Editor
        break
      case FileType.Flowchart:
        this.flowchart = this.editor as Flowchart.Editor
    }

    this.installRootFacade()
  }

  /**
   * 等待 SDK 进入 Ready 状态。若已 ready，则直接返回。
   */
  async ready() {
    if (this.readyState === ReadyState.Ready) {
      return
    }
    await this.init()
  }

  private async initIframe() {
    const options = this.connectOptions

    const iframe = document.createElement('iframe')
    iframe.style.border = 'none'
    iframe.style.overflow = 'hidden'
    iframe.style.width = '100%'
    iframe.style.height = '100%'
    // 解决页面出现滚动条 & 顶部被截断的问题
    iframe.style.display = 'block'

    if ('allow' in iframe) {
      iframe.allow =
        this.connectOptions.allowPolicy ??
        'fullscreen *;clipboard-read *;clipboard-write *;'
    } else {
      ;(iframe as any).allowFullscreen = true
    }

    const url = this.endpoint
    url.pathname = `${url.pathname}/api/${assert<string>(
      options.fileId,
      notEmptyString,
      `"fileId" is missing or empty: ${options.fileId}`
    )}/preload`.replace(/\/+/g, '/')

    const params = options.params
    if (params) {
      Object.keys(params).forEach((key) => {
        url.searchParams.set(key, params[key])
      })
    }

    if (typeof options.deviceMode === 'string') {
      url.searchParams.set('deviceMode', options.deviceMode.trim())
    }

    url.searchParams.set(SM_PARAMS_KEY, this.startParams.toString())

    if (options.showLoadingEffect || options.showLoading) {
      url.searchParams.set('loadingEffect', 'true')
      if (options.loadingOptions) {
        url.searchParams.set(
          LOADING_OPTIONS_KEY,
          JSON.stringify(options.loadingOptions)
        )
      }
    }

    // 设置当前编辑器语言
    if (typeof options.lang === 'string') {
      const normalizedLang = normalizeLanguage(options.lang)
      if (normalizedLang) {
        url.searchParams.set('lang', normalizedLang)
      }
    }

    url.searchParams.set('jsver', process.env.VERSION ?? '')

    assert<string>(
      options.token,
      notEmptyString,
      `"token" is missing or empty: "${options.token}"`
    )

    assert<string>(
      options.signature,
      notEmptyString,
      `"signature" is missing or empty: "${options.signature}"`
    )
    url.searchParams.set('uuid', this.uuid)
    this.userUuid && url.searchParams.set('userUuid', this.userUuid)

    iframe.src = url.toString()

    return iframe
  }

  private async runPreloadHandshake() {
    const token = this.connectOptions.token
    const signature = this.connectOptions.signature
    const fileGuid = this.connectOptions.fileId
    const requestId = uuid()

    type PreloadMessage = {
      type?: string
      requestId?: string
      payload?: {
        token?: string
        signature?: string
        fileGuid?: string
        mode?: 'edit' | 'preview'
      }
      error?: {
        code?: string
        message?: string
      }
    }

    let readyResolved = false
    let ackResolved = false
    let doneResolved = false
    let ackTimer: ReturnType<typeof setTimeout> | null = null
    let doneTimer: ReturnType<typeof setTimeout> | null = null

    await new Promise<void>((resolve, reject) => {
      const cleanup = () => {
        if (ackTimer) {
          clearTimeout(ackTimer)
          ackTimer = null
        }
        if (doneTimer) {
          clearTimeout(doneTimer)
          doneTimer = null
        }
        window.removeEventListener('message', handleMessage)
      }

      const sendInit = () => {
        this.element?.contentWindow?.postMessage(
          {
            type: PRELOAD_MESSAGE_TYPE.INIT,
            requestId,
            ts: Date.now(),
            payload: {
              token,
              signature,
              fileGuid,
              mode: this.connectOptions.mode
            }
          },
          '*'
        )
      }

      const handleMessage = (event: MessageEvent) => {
        const data = event.data as PreloadMessage
        if (
          !data ||
          typeof data !== 'object' ||
          typeof data.type !== 'string'
        ) {
          return
        }

        if (data.type === PRELOAD_MESSAGE_TYPE.READY && !readyResolved) {
          readyResolved = true
          sendInit()
          ackTimer = setTimeout(() => {
            sendInit()
            doneTimer = setTimeout(() => {
              cleanup()
              reject(new Error('preload init timeout'))
            }, this.preloadDoneTimeoutMs)
          }, this.preloadAckTimeoutMs)
          return
        }

        if (data.requestId !== requestId) {
          return
        }

        if (data.type === PRELOAD_MESSAGE_TYPE.ACK) {
          ackResolved = true
          if (ackTimer) {
            clearTimeout(ackTimer)
            ackTimer = null
          }
          if (!doneTimer) {
            doneTimer = setTimeout(() => {
              cleanup()
              reject(new Error('preload done timeout'))
            }, this.preloadDoneTimeoutMs)
          }
          return
        }

        if (data.type === PRELOAD_MESSAGE_TYPE.DONE) {
          doneResolved = true
          cleanup()
          resolve()
          return
        }

        if (data.type === PRELOAD_MESSAGE_TYPE.ERROR) {
          cleanup()
          reject(
            new Error(
              data.error?.message || data.error?.code || 'preload init failed'
            )
          )
        }
      }

      window.addEventListener('message', handleMessage)

      setTimeout(() => {
        if (!readyResolved && !ackResolved && !doneResolved) {
          cleanup()
          reject(new Error('preload ready timeout'))
        }
      }, this.preloadReadyTimeoutMs)
    })
  }

  private initChannel() {
    const channel = (this.channel = new OfficeSDKBroadcastChannel({
      channelId: this.startParams.channelId,
      debug: this.connectOptions.debug,
      autoStructuredClone: true,
      debugNamespace: 'SM_SDK_CHAN'
    }))

    if (!this.startParams.channelId) {
      this.startParams.channelId = channel.id
    }

    channel.on('error', (err: Error) => {
      this.emit('error', err)
    })

    channel.on('messageError', (err: Error) => {
      this.emit('error', err)
    })

    /**
     * 非 same origin 时，用不了 broadcast channel，需要在 postMessage 时，将消息转到 iframe
     */
    if (!this.sameOrigin) {
      channel.on(
        'postMessage',
        (evt: OfficeSDKMessageEvent) => {
          this.element?.contentWindow?.postMessage(evt, '*')
        },
        { audience: '*' }
      )
    }

    channel.on(
      'message',
      (msg: OfficeSDKMessageEvent) => {
        const data = msg.data as any
        /**
         * 监听 ReadyState 变更
         */
        if (data?.event === InvokeMethod.ReadyState) {
          this.emit(Event.ReadyState, data.payload)
        } else if (data?.event === EDITOR_RENDERED_EVENT) {
          this.emit(Event.EditorRendered, data.payload)
        }
      },
      { audience: AUD }
    )

    /**
     * 处理错误事件
     */
    channel.addInvokeHandler(
      InvokeMethod.Error,
      (payload: unknown) => {
        this.emit(Event.Error, payload)
      },
      { audience: AUD }
    )

    /**
     * 初始化编辑器，请求配置
     */
    channel.addInvokeHandler(
      InvokeMethod.SDKInit,
      async () => {
        const opts: Record<string, unknown> = {}

        Object.keys(this.connectOptions).forEach((k) => {
          if (k === 'slashMenu') {
            return
          }
          const v = this.connectOptions[k as keyof typeof this.connectOptions]
          opts[k] = v
          // 函数用 boolean 标记有设置值
          if (typeof v === 'function') {
            opts[`has${k[0].toUpperCase()}${k.slice(1)}`] = true
          }
        })

        const slashMenu = this.createSerializedSlashMenu()
        if (slashMenu) {
          opts.slashMenu = slashMenu
        }

        opts.apiAdaptor = this.apiAdaptor
        opts.apiAdaptorContext = this.apiAdaptorContext
        // 归一化后的缺省页配置。iframe 侧（lizard-service-iframe-sdk）直接消费，
        // 不需要再 fallback 默认值。未来如需扩展字段，在 normalizeEmptyPageOptions 内统一处理。
        opts.emptyPage = this.normalizedEmptyPage

        return {
          ...opts,
          uuid: this.uuid
        }
      },
      { audience: AUD }
    )

    /**
     * 监听 SDK 相关的事件，将事件转入 SDK 事件监听器
     */
    channel.addInvokeHandler(
      InvokeMethod.DispatchSDKEvent,
      async (event: string, args: unknown[]) => {
        if (event === HEADER_BARS_CHANGED_EVENT) {
          this.applyHeaderBarsChanged(args[0] as HeaderBarsChangedPayload)
        }
        this.emit(event, ...args)
      },
      { audience: AUD }
    )

    channel.addInvokeHandler(
      HEADER_BARS_METHOD.handleCommandClick,
      async (id: string) => {
        const handler = this.headerBarsCommandOverrides.get(id)
        if (typeof handler !== 'function') {
          return false
        }
        await handler()
        return true
      },
      { audience: AUD }
    )

    channel.addInvokeHandler(
      SLASH_MENU_METHOD.handleButtonClick,
      async (callbackId: string) => {
        const handler = this.slashMenuCallbacks.get(callbackId)
        if (typeof handler !== 'function') {
          console.error(`[slashMenu] callback not found: ${String(callbackId)}`)
          return false
        }
        await Promise.resolve(handler())
        return true
      },
      { audience: AUD }
    )

    channel.addInvokeHandler(
      EDITOR_FACADE_CALLBACK_METHOD,
      async (callbackId: string, args: unknown[] = []) => {
        const handler = this.editorFacadeCallbacks.get(callbackId)
        if (typeof handler !== 'function') {
          console.error(
            `[editorFacade] callback not found: ${String(callbackId)}`
          )
          return undefined
        }
        return await Promise.resolve(handler(...args))
      },
      { audience: AUD }
    )

    /**
     * 监听编辑器相关的事件，将事件转入编辑器事件监听器
     */
    channel.addInvokeHandler(
      InvokeMethod.DispatchEditorEvent,
      async (event: string, payload: unknown) => {
        if (event === 'collaboratorsChanged') {
          this.updateCollaborators(payload)
        }
        // 缺省页事件是 SDK 级事件，即使走了 editor 通道也直接外抛到 SDK 实例，
        // 方便宿主通过 `sdk.on('emptyPageShown', ...)` 订阅。
        // 同时仍保留 emitter.emit，避免破坏 editor.on 的订阅路径。
        if (isEmptyPageEvent(event)) {
          this.emit(event, payload)
        }
        this.emitter.emit(event, payload)
      },
      { audience: AUD }
    )

    this.bindContainerMethodHandlers()

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', this.onViewportResize)
    } else {
      window.addEventListener('resize', this.onViewportResize)
    }
  }

  /**
   * 初始化处理编辑器需要容器返回数据的方法
   */
  private bindContainerMethodHandlers() {
    const channel = this.channel

    channel.addInvokeHandler(
      ContainerMethod.GenerateUrl,
      async (
        fileId: string,
        info?: GenerateUrlInfo,
        smParams?: Record<string, any>
      ) => {
        if (typeof this.connectOptions.generateUrl !== 'function') {
          throw new Error(`"${ContainerMethod.GenerateUrl}" not found`)
        }
        return await Promise.resolve(
          this.connectOptions.generateUrl(fileId, info, smParams)
        )
      },
      { audience: AUD }
    )

    channel.addInvokeHandler(
      ContainerMethod.HandleCustomTask,
      async (taskId: string) => {
        if (typeof this.connectOptions.handleCustomTask !== 'function') {
          throw new Error(`"${ContainerMethod.HandleCustomTask}" not found`)
        }
        return await Promise.resolve(
          this.connectOptions.handleCustomTask(taskId)
        )
      },
      { audience: AUD }
    )

    channel.addInvokeHandler(
      ContainerMethod.OpenLink,
      async (url: string, target?: string) => {
        if (typeof this.connectOptions.openLink !== 'function') {
          throw new Error(`"${ContainerMethod.OpenLink}" not found`)
        }
        this.connectOptions.openLink(url, target)
      },
      { audience: AUD }
    )

    channel.addInvokeHandler(
      ContainerMethod.GetFileInfoFromUrl,
      async (url: string) => {
        // 20240607 钟立和卢阳改了 sdk-iframe-assets 的 parseUrl 函数之后，getFileInfoFromUrl 现在必须由用户提供
        if (typeof this.connectOptions.getFileInfoFromUrl !== 'function') {
          throw new Error(
            `"${ContainerMethod.GetFileInfoFromUrl}" not a function`
          )
        }
        return await this.connectOptions.getFileInfoFromUrl(url)
      },
      { audience: AUD }
    )

    channel.addInvokeHandler(
      ContainerMethod.MentionClickHandlerForMobile,
      async (payload: MouseMovePayload) => {
        if (
          typeof this.connectOptions.mentionClickHandlerForMobile !== 'function'
        ) {
          throw new Error(
            `"${ContainerMethod.MentionClickHandlerForMobile}" not found`
          )
        }

        if (typeof payload === 'object' && payload != null) {
          const rect = this.element.getBoundingClientRect()
          payload.x += rect.x
          payload.y += rect.y

          if (payload.isMention) {
            payload.mentionInfo.left += rect.x
            payload.mentionInfo.top += rect.y
          }
        }
        this.connectOptions.mentionClickHandlerForMobile(payload)
      },
      { audience: AUD }
    )

    channel.addInvokeHandler(
      ContainerMethod.GetContainerRect,
      async () => this.getContainerRect(),
      { audience: AUD }
    )
    channel.addInvokeHandler(
      ContainerMethod.ShowToast,
      async (options: ShowToastOptions) => {
        this.connectOptions.showToast?.(options)
      },
      { audience: AUD }
    )
    channel.addInvokeHandler(
      ContainerMethod.GetCredentials,
      async () => {
        return await this.connectOptions.getCredentials?.()
      },
      { audience: AUD }
    )
  }

  private initHeaderBarsFacade(): HeaderBarsFacade {
    return initHeaderBarsFacade({
      getVisibleState: () => this.headerBarsVisible,
      setVisibleState: (visible: boolean) => {
        this.headerBarsVisible = visible
      },
      getCommandsMap: () => this.headerBarsCommands,
      getOverridesMap: () => this.headerBarsCommandOverrides,
      getRefsMap: () => this.headerBarsCommandRefs,
      getTitleHandler: () => this.headerBarsTitleChangeHandler,
      setTitleHandler: (handler: HeaderBarsTitleChangeHandler | undefined) => {
        this.headerBarsTitleChangeHandler = handler
      },
      isTitleSubscribed: () => this.headerBarsTitleChangeSubscribed,
      setTitleSubscribed: (subscribed: boolean) => {
        this.headerBarsTitleChangeSubscribed = subscribed
      },
      invokeHeaderBars: this.invokeHeaderBars.bind(this),
      emitHeaderBarsError: (message: string, err: unknown) => {
        this.emit(
          Event.Error,
          err instanceof Error ? err : new Error(`${message}: ${String(err)}`)
        )
      },
      onInternalTitleChange: (listener: (title: unknown) => void) => {
        this.emitter.on('titleChange', listener)
      },
      subscribeEditorTitleChange: async () => {
        await this.channel.invoke(
          InvokeMethod.ListenEditorEvent,
          ['titleChange'],
          {
            audience: AUD
          }
        )
      }
    })
  }

  /**
   * 订阅 iframe 侧 titleChange 事件，并在宿主设置了 headerBars.onTitleChange 时转发标题值。
   * 输入：无。
   * 输出：监听建立成功后返回 Promise<void>；重复调用只会订阅一次。
   */
  private async ensureHeaderBarsTitleChangeSubscription(): Promise<void> {
    await ensureHeaderBarsTitleChangeSubscription(this.createHeaderBarsHost())
  }

  private async invokeHeaderBars<T>(
    method: string,
    payload?: Record<string, unknown>
  ): Promise<T> {
    const args = payload === undefined ? [] : [payload]
    return await this.channel.invoke(method as any, args, {
      audience: AUD
    })
  }

  private syncHeaderBarsCommands(commands: HeaderBarsCommandState[]) {
    syncHeaderBarsCommands(this.createHeaderBarsHost(), commands)
  }

  private createHeaderBarsHost() {
    return {
      getVisibleState: () => this.headerBarsVisible,
      setVisibleState: (visible: boolean) => {
        this.headerBarsVisible = visible
      },
      getCommandsMap: () => this.headerBarsCommands,
      getOverridesMap: () => this.headerBarsCommandOverrides,
      getRefsMap: () => this.headerBarsCommandRefs,
      getTitleHandler: () => this.headerBarsTitleChangeHandler,
      setTitleHandler: (handler: HeaderBarsTitleChangeHandler | undefined) => {
        this.headerBarsTitleChangeHandler = handler
      },
      isTitleSubscribed: () => this.headerBarsTitleChangeSubscribed,
      setTitleSubscribed: (subscribed: boolean) => {
        this.headerBarsTitleChangeSubscribed = subscribed
      },
      invokeHeaderBars: this.invokeHeaderBars.bind(this),
      emitHeaderBarsError: (message: string, err: unknown) => {
        this.emit(
          Event.Error,
          err instanceof Error ? err : new Error(`${message}: ${String(err)}`)
        )
      },
      onInternalTitleChange: (listener: (title: unknown) => void) => {
        this.emitter.on('titleChange', listener)
      },
      subscribeEditorTitleChange: async () => {
        await this.channel.invoke(
          InvokeMethod.ListenEditorEvent,
          ['titleChange'],
          {
            audience: AUD
          }
        )
      }
    }
  }

  private applyHeaderBarsChanged(payload?: HeaderBarsChangedPayload) {
    applyHeaderBarsChanged(this.createHeaderBarsHost(), payload)
  }

  private async syncHeaderBarsVisible() {
    return await syncHeaderBarsVisible(this.createHeaderBarsHost())
  }

  private async setHeaderBarsVisible(visible: boolean) {
    await setHeaderBarsVisible(this.createHeaderBarsHost(), visible)
  }

  private getHeaderBarsCommandRef(id: string): HeaderBarsCommandRef {
    return getHeaderBarsCommandRef(this.createHeaderBarsHost(), id)
  }

  /**
   * 注册一个可供 iframe 侧反向调用的 facade callback。
   * 输入：宿主侧 callback。
   * 输出：供跨窗协议使用的 callbackId。
   */
  private registerEditorFacadeCallback(callback: EditorFacadeCallback) {
    const callbackId = `editor-facade:${uuid()}`
    this.editorFacadeCallbacks.set(callbackId, callback)
    return callbackId
  }

  /**
   * 注销已注册的 facade callback。
   * 输入：callbackId。
   * 输出：无。
   */
  private unregisterEditorFacadeCallback(callbackId: string) {
    this.editorFacadeCallbacks.delete(callbackId)
  }

  /**
   * 创建基于 method-path 的模块 facade。
   * 输入：模块前缀与少量自定义实现覆盖。
   * 输出：其余方法按 `${prefix}.${method}` 自动桥接。
   */
  private createEditorFacadeModule<T extends object>(
    prefix: string,
    overrides: Partial<T>
  ): T {
    return new Proxy(overrides as T, {
      get: (target, prop) => {
        if (typeof prop !== 'string') {
          return undefined
        }
        if (Object.prototype.hasOwnProperty.call(target, prop)) {
          return target[prop as keyof T]
        }
        return async (...args: unknown[]) =>
          await this.invokeEditorFacade(`${prefix}.${prop}`, args)
      }
    })
  }

  /**
   * 为 value-based locator 创建本地对象 facade。
   * 输入：method-path 前缀、locator 和静态属性。
   * 输出：支持继续远程调用的本地 facade。
   */
  private createValueObjectFacade<T extends object>(
    prefix: string,
    locator: Record<string, unknown>,
    staticFields: Partial<T>
  ): T {
    return new Proxy(staticFields as T, {
      get: (target, prop) => {
        if (typeof prop !== 'string') {
          return undefined
        }
        if (Object.prototype.hasOwnProperty.call(target, prop)) {
          return target[prop as keyof T]
        }
        return async (...args: unknown[]) =>
          await this.invokeEditorFacade(`${prefix}.${prop}`, [locator, ...args])
      }
    })
  }

  /**
   * 注册一个基于 callback 协议的 listener。
   * 输入：注册方法名与监听器。
   * 输出：供宿主侧取消注册的函数。
   */
  private registerEditorFacadeListener<T>(
    method: string,
    listener: (payload: T) => void
  ): () => void {
    const callbackId = this.registerEditorFacadeCallback(async (payload: T) =>
      listener(payload)
    )
    this.invokeEditorFacade(method, [callbackId]).catch((err: unknown) => {
      this.emit(
        Event.Error,
        err instanceof Error
          ? err
          : new Error(`register editor facade listener failed: ${String(err)}`)
      )
    })
    return () => {
      this.unregisterEditorFacadeCallback(callbackId)
    }
  }

  private installRootFacade() {
    this.clearRootFacade()
    Object.assign(
      this,
      buildRootFacadeState({
        fileType: this.fileType,
        invokeEditorFacade: this.invokeEditorFacade.bind(this),
        listenEditorEvent: this.listenEditorEvent.bind(this),
        createEditorFacadeModule: this.createEditorFacadeModule.bind(this),
        createValueObjectFacade: this.createValueObjectFacade.bind(this),
        registerEditorFacadeListener:
          this.registerEditorFacadeListener.bind(this),
        registerEditorFacadeCallback:
          this.registerEditorFacadeCallback.bind(this),
        unregisterEditorFacadeCallback:
          this.unregisterEditorFacadeCallback.bind(this)
      })
    )
  }

  /**
   * 重置根级能力命名空间，避免不同套件间字段残留。
   * 输入：无。
   * 输出：将所有 facade 字段置空。
   */
  private clearRootFacade() {
    this.title = undefined
    this.history = undefined
    this.comments = undefined
    this.locks = undefined
    this.mention = undefined
    this.content = undefined
    this.version = undefined
    this.presentation = undefined
    this.selection = undefined
    this.search = undefined
    this.TOCs = undefined
    this.sidebar = undefined
    this.tables = undefined
    this.settings = undefined
    this.workbook = undefined
    this.activeSheet = undefined
    this.charts = undefined
    this.selections = undefined
    this.slides = undefined
    this.text = undefined
    this.zoom = undefined
    this.eventSubscription = undefined
    this.batchChanges = undefined
    this.export = undefined
    this.print = undefined
    this.setFocus = undefined
  }

  /**
   * 调用显式 editor facade method-path。
   * 输入：method-path 与参数数组。
   * 输出：返回 iframe 侧序列化结果。
   */
  private async invokeEditorFacade<T>(
    method: string,
    args: unknown[] = []
  ): Promise<T> {
    return await this.channel.invoke(
      InvokeMethod.InvokeEditorMethod,
      [method, args],
      {
        audience: AUD
      }
    )
  }

  /**
   * 为结构化 facade 建立 editor 事件监听，并返回取消监听函数。
   * 输入：事件名与监听器。
   * 输出：返回一个可取消当前监听的函数。
   */
  private listenEditorEvent<T>(
    event: string,
    listener: (payload: T) => void
  ): () => void {
    this.emitter.on(event, listener as EventCallback)
    this.channel
      .invoke(InvokeMethod.ListenEditorEvent, [event], {
        audience: AUD
      })
      .catch((err: unknown) => {
        this.emit(
          Event.Error,
          err instanceof Error
            ? err
            : new Error(`listen editor event failed: ${String(err)}`)
        )
      })
    return () => {
      this.emitter.off(event, listener as EventCallback)
    }
  }

  private initEditor() {
    const adjustEventName = (event: string): string => {
      // 兼容旧事件名
      if (event === 'saveStatusDidChange') {
        return 'saveStatusChanged'
      }
      return event
    }

    const inst = {
      on: async (event: string, callback: EventCallback) => {
        event = adjustEventName(event)
        this.emitter.on(event, callback)

        await this.channel.invoke(InvokeMethod.ListenEditorEvent, [event], {
          audience: AUD
        })
      },

      off: (event: string, callback: EventCallback) => {
        event = adjustEventName(event)
        this.emitter.off(event, callback)
      },

      getCollaborators: () => [...this.collaborators]
    }

    // 创建嵌套 Proxy 以支持多层级调用
    const createNestedProxy = (path: string[] = []): any => {
      const proxyFunc = function () {}
      return new Proxy(proxyFunc, {
        get: (target, prop) => {
          // 如果是根级别的预定义方法（on/off），直接返回
          if (
            path.length === 0 &&
            Object.prototype.hasOwnProperty.call(inst, prop)
          ) {
            return (inst as any)[prop]
          }

          // 对于函数的内置属性（如 call、apply、bind 等）
          // 返回原函数的对应属性，这样编译后的代码才能正常工作
          // 例如：editor.test() 编译后变成 editor.test.call()
          if (
            typeof prop === 'string' &&
            ['call', 'apply', 'bind'].includes(prop)
          ) {
            return (target as any)[prop]
          }

          // 对于其他属性，返回新的嵌套 Proxy
          if (typeof prop === 'string') {
            return createNestedProxy([...path, prop])
          }

          return undefined
        },
        apply: (_target, _thisArg, args: unknown[]) => {
          // 当作为函数调用时，将完整路径和参数发送给编辑器
          if (path.length > 0) {
            return this.channel.invoke(
              InvokeMethod.InvokeEditorMethod,
              [path.join('.'), args],
              {
                audience: AUD
              }
            )
          }
        }
      })
    }

    const p = createNestedProxy()

    return p
  }

  private shouldHandleMessage(evt: OfficeSDKEventLike): boolean {
    if (
      // 不是当前 channel 的消息
      evt.channelId !== this.channel.id ||
      // 消息已经过期
      /* eslint-disable-next-line @typescript-eslint/restrict-plus-operands */
      evt.time + this.messageExpires < Date.now() ||
      // 已经处理过
      this.handledMessageCache.has(evt.context.messageId)
    ) {
      return false
    }

    return true
  }

  private getContainerRect() {
    const rect = this.element.getBoundingClientRect()
    const payload: ContainerRect = {
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      top: rect.top,
      left: rect.left,
      bottom: rect.bottom,
      right: rect.right,
      scrollTop: document.scrollingElement?.scrollTop,
      visualViewport: {}
    }

    if (window.visualViewport) {
      payload.visualViewport = {
        width: window.visualViewport.width,
        height: window.visualViewport.height,
        offsetLeft: window.visualViewport.offsetLeft,
        offsetTop: window.visualViewport.offsetTop,
        pageLeft: window.visualViewport.pageLeft,
        pageTop: window.visualViewport.pageTop,
        scale: window.visualViewport.scale
      }
    }

    return payload
  }

  private updateCollaborators(payload: unknown) {
    if (
      payload &&
      typeof payload === 'object' &&
      Array.isArray(
        (payload as Partial<CollaboratorsChangedPayload>).collaborators
      )
    ) {
      const data = payload as CollaboratorsChangedPayload
      this.collaborators = [...data.collaborators]
    }
  }
}

function notEmptyString(input?: string): boolean {
  return typeof input === 'string' && input.trim().length > 0
}

const EMPTY_PAGE_EVENTS = new Set<string>([
  'emptyPageShown',
  'emptyPageAction',
  'emptyPageHidden'
])

function isEmptyPageEvent(event: string): boolean {
  return EMPTY_PAGE_EVENTS.has(event)
}

/**
 * 需要容器提供给编辑器使用的方法
 */
export interface ContainerMethods {
  /**
   * 获取容器尺寸等信息
   */
  [ContainerMethod.GetContainerRect]?: () => ContainerRect

  /**
   * 处理石墨文档内点击链接事件
   */
  [ContainerMethod.OpenLink]?: (
    /**
     * 目标链接
     */
    url: string,

    /**
     * 意义和 window.open 的第二个参数一样，属于石墨建议的值，具体是否需要使用请接入方自行判断。
     */
    target?: string
  ) => void

  /**
   * 生成插入到石墨文档中的链接，用于处理 @ 文件等功能需要插入的链接
   */
  [ContainerMethod.GenerateUrl]?: GenerateUrlHandler

  /**
   * 用于移动端处理 @ 点击事件
   */
  [ContainerMethod.MentionClickHandlerForMobile]?: (
    payload: MouseMovePayload
  ) => void

  /**
   * 用于从客户业务 URL 中获取对应的文件 ID，供编辑器使用。
   */
  [ContainerMethod.GetFileInfoFromUrl]?: (url: string) => Promise<
    | {
        /**
         * 文件 ID
         */
        fileId: string
      }
    | undefined
  >

  /**
   * 用于显示客户自定义toast。
   */
  [ContainerMethod.ShowToast]?: (options: ShowToastOptions) => Promise<void>

  /**
   * 通知用户执行自定义操作，操作由用户自定义按钮触发
   */
  [ContainerMethod.HandleCustomTask]?: (taskId: string) => Promise<void>
  /**
   * 请求容器获取鉴权信息
   * @returns {Credentials} 鉴权信息
   */
  [ContainerMethod.GetCredentials]: () => Promise<Credentials>
}

export enum Event {
  /**
   * SDK 初始化事件，用于内部逻辑
   */
  SDKInit = 'SDKInit',

  /**
   * 错误事件，包含编辑器抛出的错误
   */
  Error = 'error',

  /**
   * OfficeSDK 状态变化事件
   */
  ReadyState = 'readyState',

  /**
   * 编辑器真正完成"首屏渲染"的信号。
   *
   * 由 iframe 内编辑器在自身渲染稳定后通过 channel 发送，SDK 侧转发为本事件。
   * 宿主可按需监听它来区分 SDK Ready 与编辑器视觉首屏完成。
   */
  EditorRendered = 'editorRendered',

  /**
   * 编辑器事件
   */
  EditorEvent = 'editorEvent'
}

/**
 * iframe 内侧用来上报"编辑器已完成首屏渲染"的 channel 事件名。
 *
 * 与 `InvokeMethod.ReadyState` 的枚举值保持在同一命名空间，但不入 shared 包，
 * 以免跨端版本耦合。iframe 侧约定写字符串即可。
 */
export const EDITOR_RENDERED_EVENT = 'editorRendered'

export interface Message {
  uuid?: string
  event: string
  body: any
  error?: Error
}

export interface MessageEventPayload {
  event: InvokeMethod
  data: unknown[]
}

export interface ContainerMethodPayload {
  method: ContainerMethod
  args: unknown[]
}

export interface ReadyStateEvent {
  state: ReadyState
  fileType: FileType
  error?: Error | string
}

/**
 * 事件回调函数
 */
export type EventCallback = (...args: any[]) => any

/**
 * SDK toast 文案配置，值仅允许字符串或嵌套对象。
 */
export interface SDKToastOptions {
  [key: string]: string | SDKToastOptions | undefined
}

/**
 * iframe 内置加载页配置，只支持可序列化字段。
 */
export interface LoadingOptions {
  /**
   * 自定义加载页 Logo。传字符串时作为图片 URL / dataURL 使用；
   * 传 false 时隐藏 Logo；不传时使用 iframe 内默认石墨 Logo。
   */
  logo?: string | false
  /**
   * 自定义加载页提示文案。不传时使用 iframe 内默认文案。
   */
  tip?: string
}

/**
 * OfficeSDK 初始化参数
 */
export interface OfficeSDKOptions
  extends Omit<ContainerMethods, 'getContainerRect'> {
  /**
   * 石墨 SDK 服务器地址
   */
  endpoint: string

  /**
   * 您要打开的文档 ID
   */
  fileId: string

  /**
   * 用于石墨 SDK 鉴权用的签名
   */
  signature: string

  /**
   * iframe 挂载的目标容器
   */
  container: HTMLElement

  /**
   * 用于您系统鉴权使用的 token
   */
  token: string

  /**
   * 刷新鉴权信息的间隔时间，单位为毫秒
   */
  refreshCredentialsInterval: number

  /**
   * 添加到 iframe URLSearchParams 的参数列表
   */
  params?: {
    [key: string]: string
  }

  /**
   * 当前打开模式。`preview` 用于预览态，其余场景默认按 `edit` 处理。
   */
  mode?: 'edit' | 'preview'

  /**
   * 石墨 SDK URL 参数 url?smParams={params}，用于传递石墨 SDK 内部需要的参数。
   */
  smParams?:
    | string
    | Record<string, unknown>
    | Array<string | Record<string, unknown>>

  /**
   * 指定石墨 SDK 编辑器界面语言，添加到 iframe URLSearchParams 的参数列表。
   * 若未指定，则 iframe 使用服务器设置的默认语言。
   *
   * 目前支持的标准语言取值：
   * 1. zh-CN（简体中文）
   * 2. zh-TW（繁体中文）
   * 3. en-US（英文）
   * 4. ja-JP（日文）
   * 5. ko-KR（韩文）
   * 6. es-ES（西班牙语）
   * 7. pt-PT（葡萄牙语）
   * 8. de-DE（德语）
   * 9. fr-FR（法语）
   * 10. it-IT（意大利语）
   * 11. ru-RU（俄语）
   * 12. id-ID（印尼语）
   * 13. vi-VN（越南语）
   * 14. th-TH（泰语）
   * 15. ms-MY（马来语）
   * 16. ar-SA（阿拉伯语）
   *
   * 为兼容旧版写法，仍接受 en、ja，传入后会自动映射为 en-US、ja-JP。
   */
  lang?:
    | 'zh-CN'
    | 'zh-TW'
    | 'en-US'
    | 'ja-JP'
    | 'ko-KR'
    | 'es-ES'
    | 'pt-PT'
    | 'de-DE'
    | 'fr-FR'
    | 'it-IT'
    | 'ru-RU'
    | 'id-ID'
    | 'vi-VN'
    | 'th-TH'
    | 'ms-MY'
    | 'ar-SA'
    | 'en'
    | 'ja'

  /**
   * 是否禁用提及的浮动卡片组件
   */
  disableMentionCards?: DisableMentionCards

  /**
   * 用于覆盖编辑器内部分 toast 文案。
   * 支持套件类型：form、documentPro、presentation、spreadsheet、table（仅对支持 ui 配置的套件生效）。
   * 当前已文档化支持字段：ui.toast.tips.edit.noPermission。
   * 其他字段暂不作为稳定公共 API 承诺。
   */
  ui?: {
    toast?: SDKToastOptions
  }

  /**
   * 用于控制 iframe feature policy (https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Feature-Policy) 。
   * 会覆盖默认的 policy，因此使用时需要注意把需要的 policy 写完整。
   */
  allowPolicy?: string

  /**
   * 是否开启调试模式，true 会通过 console 打印一些信息
   */
  debug?: boolean

  /**
   * 编辑器插件配置，不是所有类型的套件都支持，以套件是否提供 PluginOptions 为准
   */
  plugins?: Spreadsheet.PluginOptions | Table.PluginOptions

  /**
   * iframe postMessage 的目标 origin，默认是当前页面的 location.origin。
   * @deprecated
   */
  targetOrigin?: string

  /**
   * 使用什么设备类型模式，会直接影响功能和样式，不传值或空字符串则默认用 user-agent 自动判断。受版本限制，不是所有类型都支持。
   */
  deviceMode?: DeviceMode

  /**
   * 是否禁用默认的签名组件，以支持自定义签名组件。受版本限制，部分版本的特定类型文档才支持。
   */
  disableSignatureComponent?: boolean

  /**
   * 控制 headerbar 组件是否展示，false 表示隐藏。
   */
  headerBarsVisible?: boolean

  /**
   * docs 斜杠菜单配置。
   * 仅 docs 文件类型生效；`button.callback` 实际运行在宿主页，
   * 会在 iframe 内点击菜单按钮后通过 postMessage/channel 回调触发。
   */
  slashMenu?: SlashMenuOptions

  /**
   * 是否显示内置的加载动画，只在静态资源加载到编辑器渲染这个阶段显示
   */
  showLoadingEffect?: boolean

  /**
   * 是否启用 iframe 内置默认加载页，默认 false。
   * 隐藏后接入方可自定义外部 loading。
   */
  showLoading?: boolean

  /**
   * iframe 内置加载页配置。仅在 `showLoading === true`
   * 或 `showLoadingEffect === true` 时透传给 iframe。
   */
  loadingOptions?: LoadingOptions

  /**
   * 用于在编辑器发起 API 请求时，对请求参数进行修改的函数。详细用法见文档。
   */
  apiAdaptor?: APIAdaptor

  /**
   * 用于在编辑器发起 API 请求时，对请求参数进行修改的函数时传入的上下文数据。
   */
  apiAdaptorContext?: RequestContext

  /**
   * 用于判断通信消息过期时间，过期后的消息会被抛弃，默认 5 分钟。
   */
  messageExpires?: number

  /**
   * 加密后的用户id
   */
  userUuid?: string

  /**
   * 缺省页（Empty Page）配置。
   * - 不传或传 `true`：启用默认缺省页能力（有内置图片与默认文案，**无按钮**）
   * - 传 `false`：完全关闭
   * - 传对象：精细控制启用的 scene、token 过期策略，以及每个 scene 的
   *   文案/按钮自定义（`overrides`）。默认不渲染任何按钮，宿主需要按钮时必须
   *   在 `overrides[scene].primary/secondary` 里显式配置 label，点击统一触发
   *   `emptyPageAction` 事件由宿主处理。
   *
   * 相关事件：`emptyPageShown` / `emptyPageAction` / `emptyPageHidden`。
   * 详见 `./types/EmptyPage.ts`。
   */
  emptyPage?: boolean | EmptyPageOptions
}
