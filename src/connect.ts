import { ShimoSDK, ShimoSDKOptions } from './ShimoSDK'

export type ConnectOptions = ShimoSDKOptions

/**
 * 初始化 SDK，返回 Promise，当 ReadState 变为 Ready 或 Failed 时，Promise 将被 resolve。
 * Promise resovled 不代表编辑器已经完整加载完毕，只代表 SDK 已经准备好了。
 * 同时 Promise 一直 pending 也不代表编辑器加载失败，只代表无法通过 SDK 和编辑器交互。
 * 比如受浏览器限制无法发出 postMessage() 时，Promise 将会一直 pending。
 */
export async function connect(options: ConnectOptions): Promise<ShimoSDK> {
  try {
    const sdk = new ShimoSDK(options)
    await sdk.init()
    return sdk
  } catch (e) {
    console.log('Failed to init ShimoSDK', {
      error: e,
      options
    })
    throw e
  }
}
