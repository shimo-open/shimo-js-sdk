import { BaseEditor } from './BaseEditor'

export interface EventMap {
  /**
   * 保存状态发生变更
   */
  saveStatusDidChange: {
    /**
     * @since PD2.10
     */
    status?: 'saving' | 'saved' | 'error'
  }

  error: {
    /** 错误信息 */
    data?: unknown
    /** 错误码 */
    code: number
  }
}

export interface Editor extends BaseEditor<EventMap> {
  /**
   * 显示版本侧边栏
   */
  showRevision: (this: Editor, options: {}) => Promise<void>
  /**
   * 隐藏版本侧边栏
   */
  hideRevision: (this: Editor, options: {}) => Promise<void>
  /**
   * 创建版本
   */
  createRevision: (this: Editor, options: {}) => Promise<void>
}
