import { TinyEmitter } from 'tiny-emitter'
import * as DocumentPro from './DocumentPro'
import * as Document from './Document'
import * as Spreadsheet from './Spreadsheet'
import * as Presentation from './Presentation'
import * as Table from './Table'

export declare class ShimoSDK extends TinyEmitter {
  /**
   * 石墨文件的类型
   */
  fileType: FileType

  /**
   * iframe 元素
   */
  element: HTMLIFrameElement

  /**
   * 销毁 iframe 并释放资源
   */
  disconnect: () => void

  /**
   * 传统文档编辑器实例
   */
  documentPro?: DocumentPro.Editor

  /**
   * 轻文档编辑器实例
   */
  document?: Document.Editor

  /**
   * 表格编辑器实例
   */
  spreadsheet?: Spreadsheet.Editor

  /**
   * 专业幻灯片编辑器实例
   */
  presentation?: Presentation.Editor

  /**
   * 应用表格编辑器实例
   */
  table?: Table.Editor

  /**
   * 设置石墨用的鉴权签名
   */
  setSignature: (signature: string) => void

  /**
   * 设置您系统的鉴权 token
   */
  setToken: (token: string) => void

  /**
   * 获取性能信息片段列表，由于性能标记是分段的、异步的，因此每次调用时获取的列表有可能不一致
   */
  getPerformanceEntries: () => Promise<PerformanceEntry[]>;

  [key: string]: any
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

export enum MessageEvent {
  SDKInit = 'SDKInit',
  MethodCallback = 'methodCallback',
  MethodCall = 'methodCall',
  Error = 'error',
  ReadyState = 'readyState',
  EditorEvent = 'editorEvent',
  SetCredentials = 'setCredentials',
  RequestPerformanceEntries = 'RequestPerformanceEntries',
  ResponsePerformanceEntries = 'ResponsePerformanceEntries'
}

export enum ReadyState {
  LoadingEditor = 'loadingEditor',
  Ready = 'ready',
  Failed = 'failed'
}

/**
 * 石墨文档类型
 */
export enum FileType {
  /**
   * 传统文档
   */
  DocumentPro = 'documentPro',

  /**
   * 轻文档
   */
  Document = 'document',

  /**
   * 表格
   */
  Spreadsheet = 'spreadsheet',

  /**
   * 专业幻灯片
   */
  Presentation = 'presentation',
  /**
   * 应用表格
   */
  Table = 'table'
}

/**
 * 事件回调函数
 */
export type EventCallback = (...args: any[]) => any

/**
 * 性能信息
 */
export interface PerformanceEntry {
  /**
   * 性能信息片段的标记，如 "sdk_initialized"、"editor_render_end"
   */
  mark: string

  /**
   * 性能信息片段的标记时间，以毫秒为单位
   */
  timestamp: number
}
