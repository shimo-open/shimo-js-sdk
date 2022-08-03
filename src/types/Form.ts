import { BaseEditor } from './BaseEditor'

export interface EventMap {
  error: {
    /** 错误信息 */
    data?: unknown
    /** 错误码 */
    code: number
  }

  /**
   * 标题发生变更
   */
  titleChange: string
}

export interface Editor extends BaseEditor<EventMap> {}
