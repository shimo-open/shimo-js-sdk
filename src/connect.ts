import 'core-js/features/promise'
import 'core-js/features/url'
import 'core-js/features/array/includes'
import 'proxy-polyfill'
import { TinyEmitter } from 'tiny-emitter'
import forIn from 'lodash.forin'
import {
  Message,
  ShimoSDK,
  MessageEvent as SDKMessageEvent,
  ReadyState,
  FileType,
  Event,
  EventCallback
} from './types/ShimoSDK'
import * as DocumentPro from './types/DocumentPro'
import * as Document from './types/Document'
import * as Spreadsheet from './types/Spreadsheet'
import * as Presentation from './types/Presentation'

const SM_PARAMS_KEY = 'smParams'

export interface ConnectOptions {
  /**
   * Shimo App ID
   */
  appId: string

  /**
   * The endpoint of Shimo server
   */
  endpoint: string

  /**
   * The file ID
   */
  fileId: string

  /**
   * App signaure generator
   * @deprecated use sdk.setSignature() instead
   */
  getSignature?: () => Promise<string>

  /**
   * App signaure
   */
  signature?: string

  /**
   * The HTML element that iframe will be attached to
   */
  container: HTMLElement

  /**
   * User authorization token
   */
  token: string

  /**
   * Params for requesting editor page
   */
  params?: {
    [key: string]: string
  }

  /**
   * 石墨 SDK URL 参数 url?smParams={params}，用于传递石墨 SDK 内部需要的参数
   */
  smParams?: string

  /**
   * 生成插入到石墨文档中的链接，用于处理 @ 文件等功能需要插入的链接
   */
  generateUrl?: (
    /**
     * 文档相关联的 file ID
     */
    fileId: string,

    /**
     * 需要附加到生成的链接中的参数，比如 http://domain/files/1?sdk_params=<params>
     */
    params: string
  ) => string

  /**
   * 处理石墨文档内点击链接事件
   */
  openLink?: (
    /**
     * 目标链接
     */
    url: string,

    /**
     * 意义和 window.open 的第二个参数一样，属于石墨建议的值，具体是否需要使用请接入方自行判断。
     */
    target?: string
  ) => void
}

function assert<T>(
  input: any,
  condition: (input: any) => boolean,
  message: string
): T {
  if (condition(input)) {
    return input
  }

  throw new Error(message)
}

function notEmptyString(input?: string): boolean {
  return typeof input === 'string' && input.trim().length > 0
}

async function getSignature(
  signature?: string,
  getter?: () => Promise<string>
): Promise<string | null> {
  if (typeof signature === 'string') {
    return signature
  }

  if (typeof getter === 'function') {
    return await getter()
  }

  return null
}

export async function connect(options: ConnectOptions): Promise<ShimoSDK> {
  const ee: ShimoSDK = new TinyEmitter() as any
  window.addEventListener('message', messageHandler)

  // 用来发 editor 的事件
  const editorEvent = new TinyEmitter()

  let targetOrigin = ''
  let iframe: HTMLIFrameElement | undefined

  return await init().catch((err) => {
    window.removeEventListener('message', messageHandler)
    throw err
  })

  async function init() {
    iframe = document.createElement('iframe')
    iframe.style.border = 'none'
    iframe.style.overflow = 'hidden'
    iframe.allow = 'fullscreen'
    iframe.allowFullscreen = true

    const url = new URL(options.endpoint)
    url.pathname = `${url.pathname}/shimo-files/${assert<string>(
      options.fileId,
      notEmptyString,
      `"fileId" is missing or empty`
    )}`.replace(/\/+/g, '/')

    targetOrigin = url.origin

    forIn(options.params, (v, k) => {
      url.searchParams.append(k, v)
    })

    if (typeof options.smParams === 'string') {
      url.searchParams.append(SM_PARAMS_KEY, options.smParams)
    } else {
      const params = new URLSearchParams(location.search).get(SM_PARAMS_KEY)
      if (typeof params === 'string') {
        url.searchParams.append(SM_PARAMS_KEY, params)
      }
    }

    url.searchParams.append('jsver', process.env.VERSION ?? '')

    let token = assert<string>(
      options.token,
      notEmptyString,
      `"token" is missing or empty`
    )
    let signature = assert<string>(
      await getSignature(options.signature, options.getSignature),
      notEmptyString,
      `"signature" is missing or empty`
    )

    url.searchParams.append(
      'appId',
      assert<string>(
        options.appId,
        notEmptyString,
        `"appId" is missing or empty`
      )
    )
    url.searchParams.append('token', token)
    url.searchParams.append('signature', signature)

    iframe.src = url.toString()

    assert<HTMLElement>(
      options.container,
      (input) => input instanceof HTMLElement,
      `container is not a HTMLElement: ${String(options.container)}`
    ).appendChild(iframe)

    ee.disconnect = () => {
      if (iframe?.parentElement instanceof HTMLElement) {
        iframe.parentElement.removeChild(iframe)
      }
      window.removeEventListener('message', messageHandler)
    }

    ee.setSignature = (sig: string) => {
      signature = sig

      postMessage({
        event: SDKMessageEvent.SetCredentials,
        body: {
          signature,
          token
        }
      })
    }

    ee.setToken = (tk: string) => {
      token = tk

      postMessage({
        event: SDKMessageEvent.SetCredentials,
        body: {
          signature,
          token
        }
      })
    }

    await new Promise<void>((resolve, reject) => {
      const cb = (state: ReadyState, error?: Error) => {
        if (state === ReadyState.Ready) {
          ee.off(Event.ReadyState, cb)
          resolve()
        } else if (state === ReadyState.Failed) {
          ee.off(Event.ReadyState, cb)
          reject(error)
        }
      }
      ee.on(Event.ReadyState, cb)
    })

    return ee
  }

  function messageHandler(msg: MessageEvent) {
    if (typeof msg.data !== 'object' || msg.data == null) {
      ee.emit(Event.Error, new Error(`unexpected message data: ${msg.data}`))
      return
    }

    const data: Message = msg.data

    switch (data.event) {
      case SDKMessageEvent.ReadyState: {
        if (data.body.state === ReadyState.Failed) {
          ee.emit(Event.ReadyState, data.body.state, data.body.error)
          break
        }

        if (data.body.state === ReadyState.Ready) {
          ee.fileType = data.body.fileType

          const p = bindEditorAPIs(ee, editorEvent) as unknown

          switch (ee.fileType) {
            case FileType.Document:
              ee.document = p as Document.Editor
              break
            case FileType.DocumentPro:
              ee.documentPro = p as DocumentPro.Editor
              break
            case FileType.Spreadsheet:
              ee.spreadsheet = p as Spreadsheet.Editor
              break
            case FileType.Presentation:
              ee.presentation = p as Presentation.Editor
              break
          }
        }

        ee.emit(Event.ReadyState, data.body.state)
        break
      }

      case SDKMessageEvent.Error:
        ee.emit(Event.Error, data.error)
        break

      case SDKMessageEvent.EditorEvent:
        editorEvent.emit(data.body.editorEvent, data.body.value)
        break

      case SDKMessageEvent.MethodCallback:
        if (typeof data.body.methodCallId !== 'string') {
          ee.emit(
            Event.Error,
            new Error(`unknown method callback id: ${data.body.methodCallId}`)
          )
        } else {
          ee.emit(data.body.methodCallId, data)
        }
        break

      case SDKMessageEvent.MethodCall: {
        if (!data.body || typeof data.body.methodCallId !== 'string') {
          ee.emit(Event.Error, 'failed to invoke method')
          return
        }

        const method: 'openLink' | 'generateUrl' = data.body.method
        const { methodCallId, args } = data.body

        let value: unknown
        // eslint-disable-next-line no-undef-init
        let error: Error | undefined = undefined

        try {
          if (!['openLink', 'generateUrl', 'parseUrl'].includes(method)) {
            throw new Error(`unknown method: ${method}`)
          }
          value = options[method]?.apply(this, args)
        } catch (e) {
          error = e
        }

        postMessage({
          event: SDKMessageEvent.MethodCallback,
          body: {
            methodCallId,
            value
          },
          error
        })

        break
      }

      default: {
        if (data.error != null) {
          ee.emit(Event.Error, data.error)
        } else {
          ee.emit(
            Event.Error,
            new Error(`unknown event message: ${JSON.stringify(data)}`)
          )
        }
      }
    }
  }

  function postMessage(msg: Message) {
    iframe?.contentWindow?.postMessage(msg, targetOrigin)
  }

  function bindEditorAPIs(sdk: TinyEmitter, editorEvent: TinyEmitter) {
    const inst = {
      on(event: string, callback: EventCallback) {
        editorEvent.on(event, callback)

        // 通知 iframe 发事件消息
        postMessage({
          event: SDKMessageEvent.EditorEvent,
          body: {
            editorEvent: event
          }
        })
      },

      once(event: string, callback: EventCallback) {
        editorEvent.once(event, callback)

        // 通知 iframe 发事件消息
        postMessage({
          event: SDKMessageEvent.EditorEvent,
          body: {
            eventName: event
          }
        })
      },

      off(event: string, callback: EventCallback) {
        editorEvent.off(event, callback)
      }
    }

    // 通过 Proxy 代理 API 调用
    const p = new Proxy(inst, {
      get(target, prop) {
        if (Object.prototype.hasOwnProperty.call(target, prop) === true) {
          return (target as any)[prop]
        }

        return async function methodCaller(...args: any[]) {
          return await new Promise((resolve, reject) => {
            const id = `${Date.now()}-${Math.round(Math.random() * 1000)}`

            ee.once(id, (data: Message) => {
              if (data.error != null) {
                reject(data.error)
              } else {
                resolve(data.body.value)
              }
            })

            postMessage({
              event: SDKMessageEvent.MethodCall,
              body: {
                methodCallId: id,
                method: prop,
                args
              }
            })
          })
        }
      }
    })

    return p
  }
}
