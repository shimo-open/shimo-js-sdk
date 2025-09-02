import { BaseEditor } from './BaseEditor'

export interface EventMap {
  error: {
    /** 错误信息 */
    data?: any
    /** 错误码 */
    code: number
  }
}

export interface Editor extends BaseEditor<EventMap> {
  /**
   * 显示历史
   * @since 22.2.1
   */
  showHistory: (options?: {}) => Promise<void>
  /** 隐藏历史 */
  hideHistory: (options?: {}) => Promise<void>
  /** 开始本地演示 */
  startDemonstration: (options?: {}) => Promise<void>
  /** 结束本地演示 */
  endDemonstration: (options?: {}) => Promise<void>
  /** 创建版本 */
  createRevision: (options?: {}) => Promise<void>
  /** 导出 */
  export: (type: 'image' | 'imagePdf') => Promise<void>
  /** 打印 */
  print: (options?: {}) => Promise<void>
}
