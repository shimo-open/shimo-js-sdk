import { MouseMovePayload } from 'shimo-js-sdk-shared'
import { BaseEditor, EventMap as BaseEventMap } from './BaseEditor'

interface DocumentErrorMessage {
  message: string
}

export interface EventMap extends BaseEventMap {
  /**
   * 标题发生变更
   */
  titleChange: string

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
   * @since 22.2.1
   */
  showHistory: (this: Editor, options: {}) => Promise<void>
  /**
   * 隐藏历史侧边栏
   * @since 22.2.1
   */
  hideHistory: (this: Editor, options: {}) => Promise<void>
  /**
   * 显示版本侧边栏
   * @since 22.2.1
   */
  showRevision: (this: Editor, options: {}) => Promise<void>
  /**
   * 隐藏版本侧边栏
   * @since 22.2.1
   */
  hideRevision: (this: Editor, options: {}) => Promise<void>
  /**
   * 显示讨论侧边栏
   * @since 22.2.1
   */
  showDiscussion: (this: Editor, options: {}) => Promise<void>
  /**
   * 隐藏讨论侧边栏
   * @since 22.2.1
   */
  hideDiscussion: (this: Editor, options: {}) => Promise<void>
  /**
   * 显示目录
   * @since 22.2.1
   */
  showToc: (this: Editor, options: {}) => Promise<void>
  /**
   * 隐藏目录
   * @since 22.2.1
   */
  hideToc: (this: Editor, options: {}) => Promise<void>
  /**
   * 创建版本
   * @since 22.2.1
   */
  createRevision: (
    this: Editor,
    options: {}
  ) => Promise<null | DocumentErrorMessage>
  /**
   * 进入演示模式
   * @since 22.2.1
   */
  startDemonstration: (this: Editor, options: {}) => Promise<void>
  /**
   * 退出演示模式
   * @since 22.2.1
   */
  endDemonstration: (this: Editor, options: {}) => Promise<void>
  /**
   * 打印
   * @since 22.2.1
   */
  print: (this: Editor, options: {}) => Promise<void>

  /**
   * 显示评论侧边栏
   * @since 22.6.1
   */
  showComments: (this: Editor, options: {}) => Promise<void>
  /**
   * 隐藏评论侧边栏
   * @since 22.6.1
   */
  hideComments: (this: Editor, options: {}) => Promise<void>
  /**
   * 插入第三方应用，是否可用受版本限制。
   * @since 22.6.1
   */
  insertExternalApp: (
    this: Editor,
    options: { url: string }
  ) => Promise<null | DocumentErrorMessage>
}
