import 'core-js/features/promise'
import 'core-js/features/url'
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
   */
  getSignature: () => Promise<string>

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
}

export async function connect(options: ConnectOptions): Promise<ShimoSDK> {
  window.addEventListener('message', messageHandler)

  const ee: ShimoSDK = new TinyEmitter() as any
  // 用来发 editor 的事件
  const editorEvent = new TinyEmitter()

  const iframe = document.createElement('iframe')
  iframe.style.border = 'none'
  iframe.style.overflow = 'hidden'

  const url = new URL(options.endpoint)
  url.pathname = `${url.pathname}/shimo-files/${options.fileId}`.replace(
    /\/+/g,
    '/'
  )

  const targetOrigin = url.origin

  forIn(options.params, (v, k) => {
    url.searchParams.append(k, v)
  })

  url.searchParams.append('appId', options.appId)
  url.searchParams.append('token', options.token)
  url.searchParams.append('signature', await options.getSignature())

  iframe.src = url.toString()

  options.container.appendChild(iframe)

  const p = new Promise<ShimoSDK>((resolve) => {
    ee.once(SDKMessageEvent.ReadyState, (state: ReadyState) => {
      if (state === ReadyState.Ready) {
        resolve(ee)
      }
    })
  })

  ee.disconnect = () => {
    if (iframe.parentElement instanceof HTMLElement) {
      iframe.parentElement.removeChild(iframe)
    }
    window.removeEventListener('message', messageHandler)
  }

  return await p.catch((err) => {
    window.removeEventListener('message', messageHandler)
    throw err
  })

  function messageHandler(msg: MessageEvent) {
    if (typeof msg.data !== 'object' || msg.data == null) {
      ee.emit(Event.Error, new Error(`unexpected message data: ${msg.data}`))
      return
    }

    const data: Message = msg.data

    switch (data.event) {
      case SDKMessageEvent.ReadyState: {
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

          if (ee.fileType === FileType.DocumentPro) {
            ee.documentPro = p as DocumentPro.Editor
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
    iframe.contentWindow?.postMessage(msg, targetOrigin)
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
