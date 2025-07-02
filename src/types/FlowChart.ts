import { BaseEditor } from './BaseEditor'

export interface EventMap {
  error: {
    /** 错误信息 */
    data?: any
    /** 错误码 */
    code: number
  }
}

export interface Editor extends BaseEditor<EventMap> {}
