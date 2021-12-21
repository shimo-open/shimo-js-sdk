import {
  BaseEditor,
  EventMap as BaseEventMap,
  MouseMovePayload
} from './BaseEditor'

export interface EventMap extends BaseEventMap {
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

  /**
   * 标题发生变更
   */
  titleChange: {
    /**
     * 新的标题
     */
    title: string
  }

  /**
   * 鼠标移动事件
   */
  MouseMove: MouseMovePayload

  /**
   * 垂直滚动事件
   */
  VerticalScroll: MouseMovePayload

  /**
   * 水平滚动事件
   */
  HorizontalScroll: MouseMovePayload
}

export interface Editor extends BaseEditor<EventMap> {
  /**
   * 显示历史侧边栏
   * @since PD2.10
   */
  showHistory: (this: Editor, options: {}) => Promise<void>
  /**
   * 隐藏历史侧边栏
   * @since PD2.10
   */
  hideHistory: (this: Editor, options: {}) => Promise<void>
  /**
   * 显示版本侧边栏
   * @since PD2.10
   */
  showRevision: (this: Editor, options: {}) => Promise<void>
  /**
   * 隐藏版本侧边栏
   * @since PD2.10
   */
  hideRevision: (this: Editor, options: {}) => Promise<void>
  /**
   * 显示讨论侧边栏
   * @since PD2.10
   */
  showDiscussion: (this: Editor, options: {}) => Promise<void>
  /**
   * 隐藏讨论侧边栏
   * @since PD2.10
   */
  hideDiscussion: (this: Editor, options: {}) => Promise<void>
  /**
   * 显示目录
   * @since PD2.10
   */
  showToc: (this: Editor, options: {}) => Promise<void>
  /**
   * 隐藏目录
   * @since PD2.10
   */
  hideToc: (this: Editor, options: {}) => Promise<void>
  /**
   * 创建版本
   * @since PD2.10
   */
  createRevision: (this: Editor, options: {}) => Promise<void>
  /**
   * 进入演示模式
   * @since PD2.10
   */
  startDemonstration: (this: Editor, options: {}) => Promise<void>
  /**
   * 退出演示模式
   * @since PD2.10
   */
  endDemonstration: (this: Editor, options: {}) => Promise<void>
  /**
   * 打印
   * @since PD2.10
   */
  print: (this: Editor, options: {}) => Promise<void>

  /**
   * 设置文档标题
   */
  setTitle: (title: string) => Promise<void>
}
