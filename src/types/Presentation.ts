import { BaseEditor } from './BaseEditor'

export interface EventMap {
  /**
   * 错误
   */
  error: {
    /** 错误信息 */
    data?: any
    /** 错误码 */
    code: number
  }
  /**
   * 保存状态改变时触发
   */
  saveStatusChanged: {
    status?: 'saving' | 'saved' | 'error'
  }
}

export interface Editor extends BaseEditor<EventMap> {
  /**
   * 显示历史
   */
  showHistory: () => Promise<void>
  /** 
    隐藏历史 
  */
  hideHistory: () => Promise<void>
  /** 
    开始本地演示 
  */
  startDemonstration: () => Promise<void>
  /** 
    结束本地演示 
  */
  endDemonstration: () => Promise<void>
  /**
   * 创建版本
   * @since co-1.5
   */
  createRevision: () => Promise<void>
  /**
   * 导出
   * @param type image：导出图片，imagePdf: 导出pdf
   * @since co-1.5
   */
  export: (type: 'image' | 'imagePdf') => Promise<void>
  /**
   * 打印
   * @since co-1.5
   */
  print: () => Promise<void>
}
