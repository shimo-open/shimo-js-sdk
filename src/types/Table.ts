import { BaseEditor } from './BaseEditor'

export interface EventMap {
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
  showRevision: (options?: {}) => Promise<void>
  /**
   * 隐藏版本侧边栏
   */
  hideRevision: (options?: {}) => Promise<void>
  /**
   * 创建版本
   */
  createRevision: (options?: {}) => Promise<void>
}

export interface PluginOptions {
  // 隐藏引用数据表
  CombineTables?: boolean
  BaseVersion?: {
    // 隐藏版本分享按钮
    shareVersion?: boolean
  }
  FieldOptions?: {
    // 禁用关连引用 & 关联公式
    disableRefField?: boolean
    // 禁用关联引用「从其他表格选择」
    disableExternalRefTable?: boolean
  }
  Collaboration?: {
    // 传 true 表示：无权限或被删除时，不弹石墨默认的弹窗而是抛出事件
    // 通过监听 editor 实例上的 error 事件接收具体 code -- 无权限： 8001, 文件被删除：8002
    customNoAccessTips?: boolean
  }
  // 禁用视图分享
  ShareView?: boolean
  // 说明页 & 列/视图/表上的说明
  Description?: {
    // 是否禁用说明页，禁用后将不初始化并创建隐藏入口
    disableGuidePage: boolean
  }
}
