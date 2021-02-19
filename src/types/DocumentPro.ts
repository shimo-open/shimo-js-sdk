import { EventCallback } from './ShimoSDK'

/**
 * 评论
 */
export interface Comment {
  /**
   * 评论的 ID
   */
  id: string

  /**
   * 评论数据
   */
  data: CommentData

  /**
   * 评论引用的的文本
   */
  quoteText: string

  /**
   * 评论对应的标题信息
   */
  title: string
}

/**
 * 评论数据
 */
export interface CommentData {
  /**
   * 评论数据的 ID
   */
  id: string

  /**
   * 评论的创建时间
   */
  createTime: string

  /**
   * 评论的更新时间
   */
  lastUpdateTime: string

  /**
   * 创建评论的用户 ID
   */
  userId: string

  /**
   * 创建评论的用户名
   */
  userName: string

  /**
   * 评论的所有回复
   */
  replies: CommentData[]
}

export interface Editor {
  on: (event: Event, callback: EventCallback) => void
  once: (event: Event, callback: EventCallback) => void
  off: (event: Event, callback?: EventCallback) => void

  /**
   * 获取评论列表
   *
   * @param isChapterTitleRequired 是否包含对应的标题信息
   */
  getCommentList: (isChapterTitleRequired?: boolean) => Promise<Comment[]>

  /**
   * 获取单个评论
   *
   * @param commentId 目标评论的 ID
   * @param isChapterTitleRequired 是否包含对应的标题信息
   *
   */
  getCommnet: (
    commentId: string,
    isChapterTitleRequired?: boolean
  ) => Promise<Comment>

  /**
   * 添加评论
   *
   * @param commentText 评论的内容
   */
  addComment: (commentText: string) => Promise<Comment>

  /**
   * 添加回复
   *
   * @param commentId 回复的评论 ID
   * @param replyText 回复的内容
   */
  replyComment: (commentId: string, replyText: string) => Promise<CommentData>

  /**
   * 删除评论
   *
   * @param commentId 待删除的评论 ID
   */
  removeComment: (commentId: string) => Promise<void>

  /**
   * 删除回复
   *
   * @param commentDataId 待删除的回复 ID
   */
  removeReply: (commentDataId: string) => Promise<void>

  /**
   * 编辑评论或回复
   *
   * @param commentDetailId 待更新的评论或回复 ID
   * @param newCommentText 评论或回复的新内容
   */
  editComment: (
    commentDetailId: string,
    newCommentText: string
  ) => Promise<void>

  /**
   * 跳转到评论所在的位置
   *
   * @param commentId 目标评论的 ID
   */
  goToComment: (commentId: string) => Promise<void>

  /**
   * 获取选取文本
   */
  getSelectedText: () => Promise<string>

  /**
   * 监听事件
   *
   * @param eventName 事件名
   * @param callback 回调函数
   */
  attachEvent: (eventName: string, callback: EventCallback) => Promise<void>

  /**
   * 卸载事件监听回调函数
   *
   * @param eventName 事件名
   * @param [callback] 回调函数，可选，不传入时则卸载该事件的所有回调函数
   */
  detachEvent: (eventName: string, callback?: EventCallback) => Promise<void>

  /**
   * 跳转到指定页面
   *
   * @param pageNum 目标页码，从 0 开始计算。
   */
  goToPage: (pageNum: number) => Promise<void>

  /**
   * 添加页码
   *
   * @param documentPosition 页码插入位置
   * @param [align] 对齐方式
   */
  addPageNum: (
    documentPosition: PageNumPosition,
    align?: PageNumAlignment
  ) => Promise<void>

  /**
   * 设置加粗
   *
   * @param isBold true - 加粗，false - 取消加粗
   */
  setBold: (isBold: boolean) => Promise<void>

  /**
   * 设置斜体
   *
   * @param isItalic true - 斜体，false - 取消斜体
   */
  setItalic: (isItalic: boolean) => Promise<void>
}

/**
 * 页码插入位置
 */
export enum PageNumPosition {
  /**
   * 正文
   */
  Normal = 0,

  /**
   * 页眉
   */
  Header = 1,

  /**
   * 页脚
   */
  Footer = 2
}

/**
 * 页码对齐方式
 */
export enum PageNumAlignment {
  /**
   * 右对齐
   */
  Right = 0,

  /**
   * 左对齐
   */
  Left = 1,

  /**
   * 居中对齐
   */
  Center = 2
}

export enum Events {
  /**
   * 选中结束事件
   */
  SelectionEnded = 'SelectionEnded',

  /**
   * 文档修改事件
   */
  DocumentChanged = 'DocumentChanged'
}
