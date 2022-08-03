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
  showHistory: (this: Editor, options: {}) => Promise<void>
  /** 隐藏历史 */
  hideHistory: (this: Editor, options: {}) => Promise<void>
  /** 开始本地演示 */
  startDemonstration: (this: Editor, options: {}) => Promise<void>
  /** 结束本地演示 */
  endDemonstration: (this: Editor, options: {}) => Promise<void>
}
