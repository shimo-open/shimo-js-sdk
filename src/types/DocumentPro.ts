import { MouseMovePayload } from 'shimo-js-sdk-shared'
import { BaseEditor, EventMap as BaseEventMap } from './BaseEditor'

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

/**
 * 文档位置
 * 0 - 正文
 * 1 - 页眉
 * 2 - 页脚
 */
export type DocumentPos = 0 | 1 | 2

/**
 * 水平对齐方式
 * 0 - 右对齐
 * 1 - 左对齐
 * 2 - 居中对齐
 */
export type HorizontalAlignment = 0 | 1 | 2

/** 事件名 */
export type Events =
  | 'selectionEnded'
  | 'documentChanged'
  | 'commentClicked'
  | 'FullRecalculated'

export interface EventMap extends BaseEventMap {
  selectionEnded: {}
  documentChanged: {}
  commentClicked: {
    /**
     * 所有被点击的评论ID列表
     * @since 22.2.1
     */
    commentIds?: string[]
  }
  documentRecalculated: {}

  error: {
    /** 错误信息 */
    data?: any
    /** 错误码 */
    code: number
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

  /**
   * 请求打开签名组件
   */
  showSignatureComponent: {
    /**
     * 签名图片的宽高比
     */
    aspectRatio: number
    /**
     * 该签名图片的唯一 ID，用于在 `updateSignature()` 时指定想更新的签名组件
     */
    id: string
  }
}

export interface UpdateSignaturePayload {
  /**
   * 待更新的签名图片，需要是 data:<media type>;base64,<base64 data> 的格式，传 null 则清除签名图片。
   * Ref: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs
   */
  url: string | null

  /**
   * 待更新的签名图片 ID，用于指定更新的签名组件，需要和 `showSignatureComponent` 事件中的 `id` 一致。
   */
  id: string
}

export interface Editor extends BaseEditor<EventMap> {
  /**
   * 获取所有评论
   * @since 22.2.1
   */
  getComments: (options: {
    /**
     * 包含对应的标题信息
     * @default false
     */
    includeChapterTitle?: boolean
  }) => Promise<DocumentProComment[]>
  /**
   * 获取单条评论
   * @since 22.2.1
   */
  getComment: (options: {
    /**
     * 评论ID
     */
    commentId: string
    /** 包含对应的标题信息 */
    includeChapterTitle?: boolean
  }) => Promise<DocumentProComment>
  /**
   * 获取一个选区已存在的评论
   * @since 22.2.1
   * @returns 评论 ID
   */
  getCommentBySelection: (options?: {}) => Promise<string>
  /**
   * 添加评论
   * @since 22.2.1
   */
  addComment: (options: {
    /**
     * 评论内容
     */
    text: string
  }) => Promise<DocumentProComment>
  /**
   * 添加回复
   * @since 22.2.1
   */
  replyComment: (options: {
    /**
     * 评论ID
     */
    commentId: string
    /** 回复内容 */
    text: string
  }) => Promise<DocumentProCommentData>
  /**
   * 删除评论
   * @since 22.2.1
   */
  removeComment: (options: {
    /**
     * 评论ID
     */
    commentId: string
  }) => Promise<void>
  /**
   * 删除回复
   * @since 22.2.1
   */
  removeReply: (options: {
    /**
     * 回复数据的ID
     */
    commentDataId: string
  }) => Promise<void>
  /**
   * 更新评论或回复
   * @since 22.2.1
   */
  updateComment: (options: {
    /**
     * 评论数据或回复数据的ID
     */
    commentDataId: string
    /** 评论内容 */
    text: string
  }) => Promise<void>
  /**
   * 跳转到评论所在位置
   * @since 22.2.1
   */
  goToComment: (options: {
    /**
     * 评论ID
     */
    commentId: string
    /**
     * 是否滚动到评论所在位置
     * @default true
     */
    shouldScrollToComment?: boolean
    /**
     * 是否需要选中评论正文
     * @default false
     */
    shouldSelectComment?: boolean
  }) => Promise<void>
  /**
   * 获取选区文本
   * @since 22.2.1
   */
  getSelectedText: (options?: {}) => Promise<void>
  /**
   * 跳转页面
   * @since 22.2.1
   */
  goToPage: (options: {
    /**
     * 页码
     */
    pageNum: number
  }) => Promise<void>
  /**
   * 跳到文档顶部
   * @since 22.2.1
   */
  goToTop: (options?: {}) => Promise<void>
  /**
   * 添加页码
   * @since 22.2.1
   */
  addPageNum: (options: {
    /**
     * 页码的插入位置
     */
    position: DocumentPos
    /**
     * 页码的对齐方式
     * @default 1
     */
    alignment?: HorizontalAlignment
  }) => Promise<void>
  /**
   * 删除所有页码
   * @since 22.2.1
   */
  removeAllPageNums: (options?: {}) => Promise<void>
  /**
   * 显示文档结构
   * @since 22.2.1
   */
  showToc: (
    this: Editor,
    options: {
      /**
       * 禁用文档结构图的默认缓存
       * @default true
       */
      shouldDisableCache?: boolean
    }
  ) => Promise<void>
  /**
   * 隐藏文档结构图
   * @since 22.2.1
   */
  hideToc: (options?: {}) => Promise<void>
  /**
   * 文档缩放
   * @since 22.2.1
   */
  zoom: (
    this: Editor,
    options: {
      /**
       * 缩放百分比
       */
      percent: number
    }
  ) => Promise<void>
  /**
   * 设置加粗
   * @since 22.2.1
   */
  setBold: (
    this: Editor,
    options: {
      /**
       * 是否加粗
       * @default false
       */
      isBold?: boolean
    }
  ) => Promise<void>
  /**
   * 设置斜体
   * @since 22.2.1
   */
  setItalic: (options: { isItalic?: boolean }) => Promise<void>
  /**
   * 打印
   * @since 22.2.1
   */
  print: (options: {
    /**
     * 页码列表
     */
    pageNums: number[]
  }) => Promise<void>
  /**
   * 打印所有页面
   * @since 22.2.1
   */
  printAll: (options?: {}) => Promise<void>
  /**
   * 创建版本
   */
  createRevision: (options?: { name: string }) => Promise<void>
  /** 预览历史版本 */
  showHistory: (options?: {}) => Promise<void>
  /** 关闭历史版本预览 */
  hideHistory: (options?: {}) => Promise<void>
  /**
   * 更新签名图片
   */
  updateSignature: (payload: UpdateSignaturePayload) => Promise<void>
  /**
   * 导出
   * @param type image：导出图片，imagePdf: 导出pdf
   * @since co-1.5
   */
  export: (type: 'image' | 'imagePdf') => Promise<void>
}

export interface DocumentProComment {
  id: string
  /**
   * 评论对应的文本
   */
  quoteText: string
  /**
   * 评论的数据
   */
  data: DocumentProCommentData
  title?: string
  /**
   * 评论的位置
   */
  startInfo: {
    x: number
    y: number
    pageNum: number
  }
  /**
   * timestamp string
   */
  createTime: string
  /**
   * timestamp string
   */
  lastUpdateTime: string
}

export interface DocumentProCommentData {
  id: string
  userId: string
  userName: string
  text: string
  createTime: string
  /**
   * timestamp string
   */
  lastUpdateTime: ''
  /**
   * 该条评论的回复
   */
  replies: DocumentProCommentData[]
}
