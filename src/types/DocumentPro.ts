import {
  BaseEditor,
  EventMap as BaseEventMap,
  MouseMovePayload
} from './BaseEditor'

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
     * @since PD2.10
     */
    commentIds?: string[]
  }
  documentRecalculated: {}
  saveStatusChanged: {
    status?: 'saving' | 'saved' | 'error'
  }
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
     * 该签名图片的唯一 ID，用于在 updateSignature() 时指定想更新的签名组件
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
   * 待更新的签名图片 ID，用于指定更新的签名组件，需要和 showSignatureComponent 中的一致。
   */
  id: string
}

export interface Editor extends BaseEditor<EventMap> {
  /**
   * 获取所有评论
   * @since PD2.10
   */
  getComments: (
    this: Editor,
    options: {
      /**
       * 包含对应的标题信息
       * @since PD2.10
       * @default false
       */
      includeChapterTitle?: boolean
    }
  ) => Promise<{
    /**
     * 包含对应的标题信息
     * @since PD2.10
     * @default false
     */
    includeChapterTitle?: boolean
  }>
  /**
   * 获取单条评论
   * @since PD2.10
   */
  getComment: (
    this: Editor,
    options: {
      /**
       * 评论ID
       * @since PD2.10
       */
      commentId: string
      /** 包含对应的标题信息 */
      includeChapterTitle?: boolean
    }
  ) => Promise<{
    /**
     * 评论ID
     * @since PD2.10
     */
    commentId: string
    /** 包含对应的标题信息 */
    includeChapterTitle?: boolean
  }>
  /**
   * 获取一个选区已存在的评论
   * @since PD2.10
   */
  getCommentBySelection: (this: Editor, options: {}) => Promise<void>
  /**
   * 添加评论
   * @since PD2.10
   */
  addComment: (
    this: Editor,
    options: {
      /**
       * 评论内容
       * @since PD2.10
       */
      text: string
    }
  ) => Promise<{
    /**
     * 评论内容
     * @since PD2.10
     */
    text: string
  }>
  /**
   * 添加回复
   * @since PD2.10
   */
  replyComment: (
    this: Editor,
    options: {
      /**
       * 评论ID
       * @since PD2.10
       */
      commentId: string
      /** 回复内容 */
      text: string
    }
  ) => Promise<{
    /**
     * 评论ID
     * @since PD2.10
     */
    commentId: string
    /** 回复内容 */
    text: string
  }>
  /**
   * 删除评论
   * @since PD2.10
   */
  removeComment: (
    this: Editor,
    options: {
      /**
       * 评论ID
       * @since PD2.10
       */
      commentId: string
    }
  ) => Promise<void>
  /**
   * 删除回复
   * @since PD2.10
   */
  removeReply: (
    this: Editor,
    options: {
      /**
       * 回复数据的ID
       * @since PD2.10
       */
      commentDataId: string
    }
  ) => Promise<void>
  /**
   * 更新评论或回复
   * @since PD2.10
   */
  updateComment: (
    this: Editor,
    options: {
      /**
       * 评论数据或回复数据的ID
       * @since PD2.10
       */
      commentDataId: string
      /** 评论内容 */
      text: string
    }
  ) => Promise<void>
  /**
   * 跳转到评论所在位置
   * @since PD2.10
   */
  goToComment: (
    this: Editor,
    options: {
      /**
       * 评论ID
       * @since PD2.10
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
    }
  ) => Promise<void>
  /**
   * 获取选区文本
   * @since PD2.10
   */
  getSelectedText: (this: Editor, options: {}) => Promise<void>
  /**
   * 跳转页面
   * @since PD2.10
   */
  goToPage: (
    this: Editor,
    options: {
      /**
       * 页码
       * @since PD2.10
       */
      pageNum: number
    }
  ) => Promise<void>
  /**
   * 跳到文档顶部
   * @since PD2.10
   */
  goToTop: (this: Editor, options: {}) => Promise<void>
  /**
   * 添加页码
   * @since PD2.10
   */
  addPageNum: (
    this: Editor,
    options: {
      /**
       * 页码的插入位置
       * @since PD2.10
       */
      position: DocumentPos
      /**
       * 页码的对齐方式
       * @default 1
       */
      alignment?: HorizontalAlignment
    }
  ) => Promise<void>
  /**
   * 删除所有页码
   * @since PD2.10
   */
  removeAllPageNums: (this: Editor, options: {}) => Promise<void>
  /**
   * 显示文档结构
   * @since PD2.10
   */
  showToc: (
    this: Editor,
    options: {
      /**
       * 禁用文档结构图的默认缓存
       * @since PD2.10
       * @default true
       */
      shouldDisableCache?: boolean
    }
  ) => Promise<void>
  /**
   * 隐藏文档结构图
   * @since PD2.10
   */
  hideToc: (this: Editor, options: {}) => Promise<void>
  /**
   * 文档缩放
   * @since PD2.10
   */
  zoom: (
    this: Editor,
    options: {
      /**
       * 缩放百分比
       * @since PD2.10
       */
      percent: number
    }
  ) => Promise<void>
  /**
   * 设置加粗
   * @since PD2.10
   */
  setBold: (
    this: Editor,
    options: {
      /**
       * 是否加粗
       * @since PD2.10
       * @default false
       */
      isBold?: boolean
    }
  ) => Promise<void>
  /**
   * 设置斜体
   * @since PD2.10
   */
  setItalic: (
    this: Editor,
    options: {
      /**
       * 是否斜体
       * @since PD2.10
       * @default false
       */
      isItalic?: boolean
    }
  ) => Promise<void>
  /**
   * 打印
   * @since PD2.10
   */
  print: (
    this: Editor,
    options: {
      /**
       * 页码列表
       * @since PD2.10
       */
      pageNums: number[]
    }
  ) => Promise<void>
  /**
   * 打印所有页面
   * @since PD2.10
   */
  printAll: (this: Editor, options: {}) => Promise<void>
  /** 创建版本 */
  createRevision: (
    this: Editor,
    options: {
      /** 版本名 */
      name: string
    }
  ) => Promise<void>
  /** 预览历史版本 */
  showHistory: (this: Editor, options: {}) => Promise<void>
  /** 关闭历史版本预览 */
  hideHistory: (this: Editor, options: {}) => Promise<void>

  /**
   * 设置文档标题
   */
  setTitle: (title: string) => Promise<void>

  /**
   * 更新签名图片
   */
  updateSignature: (payload: UpdateSignaturePayload) => Promise<void>
}
