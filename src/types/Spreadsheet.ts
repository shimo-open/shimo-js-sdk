import { MouseMovePayload } from 'shimo-js-sdk-shared'
import { BaseEditor, EventMap as BaseEventMap } from './BaseEditor'

/** 表格范围 */
export interface Range {
  row: number
  column: number
  rowCount: number
  columnCount: number
}

/**
 * 锁定权限等级
 * 0 - 可编辑
 * 1 - 只能查看
 * 2 - 禁止查看
 */
export type PermissionLevel = 0 | 1 | 2

/** 用户ID对应的权限等级 */
export interface UserPermission {
  [userId: number]: PermissionLevel
}

/** 部门ID对应的权限等级 */
export interface DepartmentPermission {
  [departmentId: number]: PermissionLevel
}

export interface EventMap extends BaseEventMap {
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
}

/** 查找结果 */
export type SearchMatch = {
  /**
   * 单元格所在行号
   */
  row: number
  /**
   * 单元格所在列号
   */
  column: number
  /**
   * 单元格的text
   */
  text: string
  /**
   * 是否是链接单元格
   */
  isLinkCell?: boolean
}

/** 通知类型,由服务端事件推送，参见https://open.shimo.im/docs/04service-callback/push-message(https://open.shimo.im/docs/04service-callback/push-message) */
/**
 * comment - 评论
 * mention_at - 提及
 * date_mention - 日期提醒
 */
export type NotificationType = 'comment' | 'mention_at' | 'date_mention'

/** 单元格数据信息 */
export type RangeData = {
  /**
   * 单元格数据
   */
  value: CellValue
  /**
   * 单元格格式
   */
  format: string | undefined
  /**
   * 合并单元格范围
   */
  span: Range | undefined
  /**
   * 单元格格式类型
   */
  formatCategory: FormatCategory
  /**
   * 单元格数字精度
   */
  precision: number | undefined
}

/**
 * 单元格格式类型
 * auto - 常规
 * text - 纯文本
 * number - 数字
 * percent - 百分比
 * currency - 货币
 * accounting - 会计
 * date - 日期
 * time - 时间
 * fraction - 分数
 * scientific - 科学计数
 * special - 特殊
 * custom - 自定义
 */
export type FormatCategory =
  | 'auto' /** 常规 */
  | 'text' /** 纯文本 */
  | 'number' /** 数字 */
  | 'percent' /** 百分比 */
  | 'currency' /** 货币 */
  | 'accounting' /** 会计 */
  | 'date' /** 日期 */
  | 'time' /** 时间 */
  | 'fraction' /** 分数 */
  | 'scientific' /** 科学计数 */
  | 'special' /** 特殊 */
  | 'custom' /** 自定义 */

/** 单元格值类型 */
export type CellValue = string | number | boolean | null

export interface Editor extends BaseEditor<EventMap> {
  /**
   * 展示评论侧边栏
   * @since PD2.10
   */
  showComments(this: Editor): Promise<void>
  /**
   * 关闭评论侧边栏
   * @since PD2.10
   */
  hideComments(this: Editor): Promise<void>
  /**
   * 展示历史侧边栏
   * @since PD2.10
   */
  showHistory(this: Editor): Promise<void>
  /**
   * 关闭历史侧边栏
   * @since PD2.10
   */
  hideHistory(this: Editor): Promise<void>
  /**
   * 展示锁定侧边栏
   * @since PD2.10
   */
  showLocks(this: Editor): Promise<void>
  /**
   * 关闭锁定侧边栏
   * @since PD2.10
   */
  hideLocks(this: Editor): Promise<void>
  /**
   * 创建版本
   * @since PD2.10
   */
  createRevision(this: Editor): Promise<void>
  /**
   * 进入演示模式
   * @since PD2.10
   */
  startDemonstration(this: Editor): Promise<void>
  /**
   * 离开演示模式
   * @since PD2.10
   */
  endDemonstration(this: Editor): Promise<void>
  /**
   * 打印
   * @since PD2.10
   */
  print(this: Editor): Promise<void>
  /**
   * 创建单元格锁定
   * @since PD2.10
   */
  addRangeLock(
    this: Editor,
    options: {
      /** 用户id对应的权限 */
      userPermissions: UserPermission
      /**
       * 单元格范围
       * @default 默认当前选中区域范围
       */
      ranges?: Range[]
      /**
       * 工作表id
       * @default 默认当前工作表id
       */
      sheetId?: string
      /** 对该锁定的描述 */
      description?: string
      /** 部门id对应的权限 */
      departmentPermissions?: DepartmentPermission
      /**
       * 其他访问者的权限
       * @default 1
       */
      visitorPermission?: PermissionLevel
    }
  ): Promise<void>
  /**
   * 创建工作表锁定
   * @since PD2.10
   */
  addSheetLock(
    this: Editor,
    options: {
      /** 用户id对应的权限 */
      userPermissions: UserPermission
      /**
       * 工作表id
       * @default 默认当前工作表id
       */
      sheetId?: string
      /** 对该锁定的描述 */
      description?: string
      /** 部门id对应的权限 */
      departmentPermissions?: DepartmentPermission
      /**
       * 其他访问者的权限
       * @default 1
       */
      visitorPermission?: PermissionLevel
    }
  ): Promise<void>
  /**
   * 删除指定范围内的所有单元格锁定
   * @since PD2.10
   */
  removeRangeLocksInRanges(
    this: Editor,
    options: {
      /**
       * 工作表id
       * @default 默认当前工作表id
       */
      sheetId?: string
      /**
       * 单元格范围
       * @default 默认当前选中区域范围
       */
      ranges?: Range[]
    }
  ): Promise<void>
  /**
   * 删除工作表锁定
   * @since PD2.10
   */
  removeSheetLock(
    this: Editor,
    options: {
      /**
       * 工作表id
       * @default 默认当前工作表id
       */
      sheetId?: string
      preview?: undefined
    }
  ): Promise<void>
  /**
   * 获取当前激活sheet的id
   * @since PD2.10
   */
  getActiveSheetId(this: Editor): Promise<string>
  /**
   * 获取所有工作表的id
   * @since PD2.10
   */
  getSheetIds(this: Editor): Promise<string[]>
  /**
   * 根据工作表index获取工作表id
   * @since PD2.10
   */
  getSheetIdByIndex(
    this: Editor,
    options: {
      /** 工作表index（从0开始） */
      index: number
    }
  ): Promise<string>
  /**
   * 获取工作表指定范围内的单元格的值
   * @since PD2.10
   */
  getRangeValues(
    this: Editor,
    options: {
      /**
       * 工作表id
       * @default 默认当前工作表id
       */
      sheetId?: string
      /**
       * 单元格范围
       * @default 默认当前选中范围
       */
      range?: Range[]
    }
  ): Promise<CellValue[][]>
  /**
   * 获取指定单元格的值
   * @since PD2.10
   */
  getCellValue(
    this: Editor,
    options: {
      /**
       * 工作表id
       * @default 默认当前工作表id
       */
      sheetId?: string
      /** 行index（从0开始） */
      row: number
      /** 列index（从0开始） */
      column: number
    }
  ): Promise<CellValue>
  /**
   * 获取指定工作表行数量
   * @since PD2.10
   */
  getRowCount(
    this: Editor,
    options: {
      /**
       * 工作表id
       * @default 默认当前工作表id
       */
      sheetId?: string
    }
  ): Promise<number>
  /**
   * 获取指定工作表列数量
   * @since PD2.10
   */
  getColumnCount(
    this: Editor,
    options: {
      /**
       * 工作表id
       * @default 默认当前工作表id
       */
      sheetId?: string
    }
  ): Promise<number>
  /**
   * 获取指定工作表是否可见
   * @since PD2.10
   */
  isSheetVisible(
    this: Editor,
    options: {
      /**
       * 工作表id
       * @default 默认当前工作表id
       */
      sheetId?: string
    }
  ): Promise<boolean>
  /**
   * 更新环境变量
   * @since PD3.4
   */
  updateRuntimeEnv(
    this: Editor,
    options: {
      /** 要更新的环境变量 */
      env: { [key: string]: any }
    }
  ): Promise<void>
  /**
   * 设置文件内容
   * @since PD3.4
   */
  setContent(
    this: Editor,
    options: {
      /** 要设置的文件内容，会替换当前内容，实际类型接受 string | Delta */
      content: any
    }
  ): Promise<void>
  /**
   * 设置聚焦状态
   * @since PD3.4
   */
  setFocus(
    this: Editor,
    options: {
      /**
       * 设置表格聚焦状态
       * @default true
       */
      isFocus?: boolean
    }
  ): Promise<void>
  /**
   * 导出csv
   * @since pd-3.12
   */
  exportCsv(this: Editor): Promise<void>
  /**
   * 查找表格内容并高亮
   * @since co-1.0
   */
  search(
    this: Editor,
    options: {
      /** 要查找的内容 */
      text: string
      /**
       * 查找的范围
       * @default 默认当前选中的范围
       */
      range?: Range | Range[]
    }
  ): Promise<SearchMatch[]>
  /**
   * 定位单元格
   * @since co-1.0
   */
  locateCell(
    this: Editor,
    options: {
      /** 要定位的单元格行坐标 */
      row: number
      /** 要定位的单元格列坐标 */
      column: number
      /**
       * 要定位的工作表id
       * @default 默认当前激活工作表id
       */
      sheetId?: string
    }
  ): Promise<void>
  /**
   * 取消搜索高亮
   * @since co-1.0
   */
  cancelSearchHighlights(this: Editor): Promise<void>
  /**
   * 通过通知的guid定位单元格
   * @since co-1.0
   */
  locateCellByGuid(
    this: Editor,
    options: {
      /** 通知类型 */
      notificationType: NotificationType
      /** 锚点guid */
      guid: string
    }
  ): Promise<void>
  /**
   * 设置激活工作表
   * @since co-1.0
   */
  setActiveSheet(
    this: Editor,
    options: {
      /** 要激活的工作表id */
      sheetId: string
    }
  ): Promise<void>
  /**
   * 获取工作表列表信息
   * @since co-1.0
   */
  getSheetList(this: Editor): Promise<{ name: string; id: string }[]>
  /**
   * 获取当前表格选中的范围
   * @since co-1.0
   */
  getSelections(this: Editor): Promise<Range[]>
  /**
   * 获取工作表指定范围内的单元格的数据
   * @since co-1.0
   */
  getRangeData(
    this: Editor,
    options: {
      /**
       * 范围
       * @default 默认当前选中的范围
       */
      range?: Range
    }
  ): Promise<RangeData[][]>
  /**
   * 粘贴内容
   * @since co-1.0
   */
  paste(
    this: Editor,
    options: {
      /** 从剪切板获取的text/html */
      html: string
      /** 从剪切板获取的text/plain */
      text: string
      /** 从剪切板获取的file, 由于postMessage传输的限制，File对象需转成base64 */
      base64File?: string
      /** 是否删除末尾空白行 */
      removeTrailingEmptyRows?: boolean
      /** 是否删除末尾空白列 */
      removeTrailingEmptyCols?: boolean
    }
  ): Promise<void>
}

/**
 * 控制插件是否开启，无特殊说明默认都是 true。某些插件设置为 false 后，可能影响数据呈现。
 * 受后端服务版本影响，不是所有插件都可用，请以实际部署版本为准。
 */
export interface PluginOptions {
  /**
   * 附件 (附件 / 云文件)
   */
  Attachment?: boolean

  /**
   * 高亮行列
   */
  HighlightPosition?: boolean

  /**
   * 计算选项
   */
  CalcOption?: boolean

  /**
   * 单元格历史
   */
  CellHistory?: boolean

  /**
   * 图表
   */
  ChartV2?: boolean

  /**
   * 任务清单
   */
  CheckList?: boolean

  /**
   * 清除重复项
   */
  ClearRepeat?: boolean

  /**
   * 合并工作表 (合并工作表依赖跨表格引用，如果跨表格引用设置为不可见，合并工作表也会不可见)
   */
  CombineSheets?: boolean

  /**
   * 评论
   */
  Comment?: boolean

  /**
   * 条件格式
   */
  ConditionalFormat?: boolean

  /**
   * 复制为图片
   */
  CopyAsImage?: boolean

  /*
   * 定义名称
   */
  CustomNames?: boolean

  /*
   * 数据验证
   */
  DataValidation?: boolean

  /*
   * 文件瘦身
   */
  FileSlimming?: boolean

  /*
   * 历史模块
   */
  HistorySidebar?: boolean

  /*
   * 独立视图
   */
  IndependentViewport?: boolean

  /*
   * 分组
   */
  Outline?: boolean

  /*
   * 数据透视表
   */
  PivotTable?: boolean

  /*
   * 备注
   */
  Remarks?: boolean

  /*
   * 套用表格样式
   */
  SheetStyles?: boolean

  /*
   * 切片器 (切片器依赖套用表格样式 / 数据透视表创建，如果设置表格样式 / 数据透视表为不显示，切片器也会不显示)
   */
  Slicer?: boolean

  /*
   * 分列
   */
  SplitColumns?: boolean

  /*
   * 图片权限设置，默认 false
   */
  ImagePermission?: boolean

  /*
   * 获取指向此选区的链接
   */
  CopyRangeLink?: boolean

  /*
   * 复制视图链接以分享
   */
  CopyViewportLink?: boolean

  /*
   * 跨表格引用
   */
  ImportFormula?: boolean

  /*
   * 批量锁定
   */
  BatchLock?: boolean

  /*
   * @人/文件
   */
  Mention?: boolean

  /*
   * 日期提醒
   */
  DateMention?: boolean

  /*
   * 锁定
   */
  Lock?: boolean
  /*
   * PC端sheet栏
   */
  SheetTab?: boolean
  /*
   * 移动端sheet栏
   */
  MobileSheetTab?: boolean
  /*
   * PC端工具栏
   */
  Toolbar?: boolean
  /*
   * 移动端工具栏
   */
  MobileToolbar?: boolean
  /*
   * fx栏
   */
  FxEditor?: boolean
}
