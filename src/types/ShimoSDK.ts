import { TinyEmitter } from 'tiny-emitter'
import * as DocumentPro from './DocumentPro'

export declare class ShimoSDK extends TinyEmitter {
  /**
   * 石墨文件的类型
   */
  fileType: FileType

  /**
   * 销毁 iframe 并释放资源
   */
  disconnect: () => void

  /**
   * 传统文档编辑器实例
   */
  documentPro?: DocumentPro.Editor;

  [key: string]: any
}

export enum Event {
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
  event: string
  body: any
  error?: Error
}

export enum MessageEvent {
  MethodCallback = 'methodCallback',
  MethodCall = 'methodCall',
  Error = 'error',
  ReadyState = 'readyState',
  EditorEvent = 'editorEvent'
}

export enum ReadyState {
  Ready = 'ready'
}

/**
 * 石墨文档类型
 */
export enum FileType {
  /**
   * 传统文档
   */
  DocumentPro = 'documentPro'
}

/**
 * 事件回调函数
 */
export type EventCallback = (...args: any[]) => any
