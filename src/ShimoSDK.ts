import 'core-js/features/promise'
import 'core-js/features/url'
import 'core-js/features/array/includes'
import 'core-js/features/object/assign'
import 'proxy-polyfill'
import {
  ShimoBroadcastChannel,
  ShimoMessageEvent,
  isShimoMessageEventLike,
  ShimoMessageEventLike
} from 'shimo-broadcast-channel'
import { StartParams } from 'shimo-startparams'
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
  SDKEvent
} from 'shimo-js-sdk-shared'
import ExpireSet from 'expire-set'

import {
  Document,
  DocumentPro,
  Presentation,
  Spreadsheet,
  Table,
  Form
} from '.'
import { assert } from './assert'
import { BaseEditor } from './types/BaseEditor'

const globalThis = getGlobal()
const AUD = 'smjssdk'
const SM_PARAMS_KEY = 'smParams'
const SUPPORTED_LANGUAGES = ['zh-CN', 'en', 'ja']

export const MessageEvent = InvokeMethod

export class ShimoSDK extends TinyEmitter {
  /**
   * 编辑器页面对应的 iframe 元素。需要注意调整父元素大小来控制 iframe 大小。
   */
  element: HTMLIFrameElement
  readonly uuid: string

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
   * 专业幻灯片编辑器实例
   * @deprecated - 用 `sdk.getEditor<T>()` 替代
   */
  presentation?: Presentation.Editor

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

  private _fileType: FileType = FileType.Unknown
  private readonly messageHandler: (
    evt: globalThis.MessageEvent
  ) => void = () => undefined

  /**
   * 内部 event emitter，比如用来中转 editor 事件
   */
  private readonly emitter: TinyEmitter = new TinyEmitter()

  private channel: ShimoBroadcastChannel
  private readonly connectOptions: ShimoSDKOptions
  private _readyState: ReadyState = ReadyState.Loading
  private editor: any
  private readonly startParams: StartParams
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

  private readonly onViewportResize: () => void

  constructor(options: ShimoSDKOptions) {
    super()

    this.connectOptions = options
    this.uuid = uuid()

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
        // 将消息转入 ShimoBroadcastChannel 处理
        const data = evt.data
        if (isShimoMessageEventLike(data) && this.shouldHandleMessage(data)) {
          this.handledMessageCache.add(data.id)
          this.channel
            .distributeMessage(evt.data as ShimoMessageEvent)
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

  getEditor<
    T extends
      | BaseEditor
      | Document.Editor
      | DocumentPro.Editor
      | Presentation.Editor
      | Spreadsheet.Editor
      | Form.Editor
      | Table.Editor = BaseEditor
  >(): T {
    return this.editor as T
  }

  /**
   * 更新鉴权 signature 和 token
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
      { audience: AUD }
    )
  }

  disconnect() {
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

    this.editor = this.initEditor()

    /**
     * 等待编辑器 ReadyState 变化回调
     */
    await new Promise((resolve, reject) => {
      const readyStateHandler = async (payload: {
        state: ReadyState
        error?: Error | string
        fileType: FileType
      }) => {
        const { state, error, fileType } = payload

        this._readyState = state

        if (fileType && this._fileType === FileType.Unknown) {
          this._fileType = fileType
        }

        let done = false

        if (error) {
          done = true
          reject(typeof error === 'string' ? new Error(error) : error)
        } else if (state === ReadyState.Ready) {
          done = true
          resolve(undefined)
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
      case FileType.Presentation:
        this.presentation = this.editor as Presentation.Editor
        break
      case FileType.Table:
        this.table = this.editor as Table.Editor
        break
      case FileType.Form:
        this.form = this.editor as Form.Editor
    }
  }

  private async initIframe() {
    const options = this.connectOptions

    const iframe = document.createElement('iframe')
    iframe.style.border = 'none'
    iframe.style.overflow = 'hidden'
    iframe.style.width = '100%'
    iframe.style.height = '100%'

    if ('allow' in iframe) {
      iframe.allow =
        this.connectOptions.allowPolicy ??
        'fullscreen *;clipboard-read *;clipboard-write *;'
    } else {
      iframe.allowFullscreen = true
    }

    const url = this.endpoint
    url.pathname = `${url.pathname}/collab-files/${assert<string>(
      options.fileId,
      notEmptyString,
      `"fileId" is missing or empty: ${options.fileId}`
    )}`.replace(/\/+/g, '/')

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

    if (options.showLoadingEffect) {
      url.searchParams.set('loadingEffect', 'true')
    }

    // 设置当前编辑器语言
    if (
      typeof options.lang === 'string' &&
      SUPPORTED_LANGUAGES.includes(options.lang)
    ) {
      url.searchParams.set('lang', options.lang)
    }

    url.searchParams.set('jsver', process.env.VERSION ?? '')

    const token = assert<string>(
      options.token,
      notEmptyString,
      `"token" is missing or empty: "${options.token}"`
    )

    const signature = assert<string>(
      options.signature,
      notEmptyString,
      `"signature" is missing or empty: "${options.signature}"`
    )

    url.searchParams.set('token', token)
    url.searchParams.set('signature', signature)
    url.searchParams.set('uuid', this.uuid)

    iframe.src = url.toString()

    return iframe
  }

  private initChannel() {
    const channel = (this.channel = new ShimoBroadcastChannel({
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
        (evt: ShimoMessageEvent) => {
          this.element?.contentWindow?.postMessage(evt, '*')
        },
        { audience: '*' }
      )
    }

    channel.on(
      'message',
      (msg: ShimoMessageEvent) => {
        const data = msg.data as any
        /**
         * 监听 ReadyState 变更
         */
        if (data?.event === InvokeMethod.ReadyState) {
          this.emit(Event.ReadyState, data.payload)
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
          const v = this.connectOptions[k as keyof typeof this.connectOptions]
          opts[k] = v
          // 函数用 boolean 标记有设置值
          if (typeof v === 'function') {
            opts[`has${k[0].toUpperCase()}${k.slice(1)}`] = true
          }
        })

        opts.apiAdaptor = this.apiAdaptor
        opts.apiAdaptorContext = this.apiAdaptorContext

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
        this.emit(event, ...args)
      },
      { audience: AUD }
    )

    /**
     * 监听编辑器相关的事件，将事件转入编辑器事件监听器
     */
    channel.addInvokeHandler(
      InvokeMethod.DispatchEditorEvent,
      async (event: string, payload: unknown) => {
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
      async (fileId: string, info?: GenerateUrlInfo) => {
        if (typeof this.connectOptions.generateUrl !== 'function') {
          throw new Error(`"${ContainerMethod.GenerateUrl}" not found`)
        }
        return await Promise.resolve(
          this.connectOptions.generateUrl(fileId, info)
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
      }
    }

    // 通过 Proxy 代理 API 调用
    const p = new Proxy(inst, {
      get: (target, prop) => {
        if (Object.prototype.hasOwnProperty.call(target, prop) === true) {
          return (target as any)[prop]
        }

        if (typeof prop === 'string') {
          return async (...args: unknown[]) =>
            await this.channel.invoke(
              InvokeMethod.InvokeEditorMethod,
              [prop, args],
              {
                audience: AUD
              }
            )
        } else {
          return (target as any)[prop]
        }
      }
    })

    return p
  }

  private shouldHandleMessage(evt: ShimoMessageEventLike): boolean {
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
}

function notEmptyString(input?: string): boolean {
  return typeof input === 'string' && input.trim().length > 0
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
  [ContainerMethod.GetFileInfoFromUrl]?: (
    url: string
  ) => Promise<
    | {
        /**
         * 文件 ID
         */
        fileId: string
        /**
         * 文件对应的类型
         */
        type: string
      }
    | undefined
  >
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
   * ShimoSDK 状态变化事件
   */
  ReadyState = 'readyState',

  /**
   * 编辑器事件
   */
  EditorEvent = 'editorEvent'
}

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
 * ShimoSDK 初始化参数
 */
export interface ShimoSDKOptions
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
   * 添加到 iframe URLSearchParams 的参数列表
   */
  params?: {
    [key: string]: string
  }

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
   * 目前支持的语言取值：
   * 1. zh-CN（简体中文）
   * 2. en（英文）
   * 3. ja（日文）
   */
  lang?: 'zh-CN' | 'en' | 'ja'

  /**
   * 是否禁用提及的浮动卡片组件
   */
  disableMentionCards?: DisableMentionCards

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
  plugins?: Spreadsheet.PluginOptions

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
   * 是否显示内置的加载动画，只在静态资源加载到编辑器渲染这个阶段显示
   */
  showLoadingEffect?: boolean

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
}
