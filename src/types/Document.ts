import { MouseMovePayload } from 'shimo-js-sdk-shared'
import { BaseEditor, EventMap as BaseEventMap } from './BaseEditor'

export interface DocumentErrorMessage {
  message: string
}

export interface ExternalAppParams {
  title?: string
  width?: number | string
  height?: number
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
  showHistory: (options?: {}) => Promise<void>
  /**
   * 隐藏历史侧边栏
   * @since 22.2.1
   */
  hideHistory: (options?: {}) => Promise<void>
  /**
   * 显示版本侧边栏
   * @since 22.2.1
   */
  showRevision: (options?: {}) => Promise<void>
  /**
   * 隐藏版本侧边栏
   * @since 22.2.1
   */
  hideRevision: (options?: {}) => Promise<void>
  /**
   * 显示讨论侧边栏
   * @since 22.2.1
   */
  showDiscussion: (options?: {}) => Promise<void>
  /**
   * 隐藏讨论侧边栏
   * @since 22.2.1
   */
  hideDiscussion: (options?: {}) => Promise<void>
  /**
   * 显示目录
   * @since 22.2.1
   */
  showToc: (options?: {}) => Promise<void>
  /**
   * 隐藏目录
   * @since 22.2.1
   */
  hideToc: (options?: {}) => Promise<void>
  /**
   * 创建版本
   * @since 22.2.1
   */
  createRevision: (options?: {}) => Promise<null | DocumentErrorMessage>
  /**
   * 进入演示模式
   * @since 22.2.1
   */
  startDemonstration: (options?: {}) => Promise<void>
  /**
   * 退出演示模式
   * @since 22.2.1
   */
  endDemonstration: (options?: {}) => Promise<void>
  /**
   * 打印
   * @since 22.2.1
   */
  print: (options?: {}) => Promise<void>

  /**
   * 显示评论侧边栏
   * @since 22.6.1
   */
  showComments: (options?: {}) => Promise<void>
  /**
   * 隐藏评论侧边栏
   * @since 22.6.1
   */
  hideComments: (options?: {}) => Promise<void>
  /**
   * 显示编写者信息
   * @since 24.11.1
   */
  showCollaborator: (options?: {}) => Promise<void>
  /**
   * 隐藏编写者信息
   * @since 24.11.1
   */
  hideCollaborator: (options?: {}) => Promise<void>
  /**
   * 获取侧边栏显示隐藏状态
   * @since 24.11.1
   */
  isSidebarVisible: () => Promise<boolean>
  /**
   * 显示评论侧边栏
   * @since 24.11.1
   */
  showComment: () => Promise<void>
  /**
   * 隐藏评论侧边栏
   * @since 24.11.1
   */
  hideComment: () => Promise<void>
  /**
   * 开始跟随模式
   * @since 24.11.1
   */
  startFollowMode: () => Promise<void>
  /**
   * 获取文档标题
   * @since 24.11.1
   */
  getTitle: () => Promise<string>
  /**
   * 设置文档标题
   * @since 24.11.1
   */
  setTitle: (value: string) => Promise<void>
  /**
   * 插入第三方应用
   * @since 22.6.1
   */
  insertExternalApp: (
    url: string,
    params: ExternalAppParams
  ) => Promise<null | DocumentErrorMessage>
  /**
   * 插入链接卡片
   * @since 24.11.1
   */
  insertLinkCard: (url: string, title: string) => Promise<void>
  /**
   * 插入链接
   * @since 24.11.1
   */
  insertLink: (url: string, text: string) => Promise<void>
  /**
   * 获取选区内容的 Markdown 格式
   * @since 24.11.1
   */
  getMarkdownFromSelection: () => Promise<string>
  /**
   * 插入 Markdown 内容
   * @since 24.11.1
   */
  insertMarkdown: (content: string) => Promise<void>
}
