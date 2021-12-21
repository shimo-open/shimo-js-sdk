import {
  BaseEditor,
  EventMap as BaseEventMap,
  MouseMovePayload
} from './BaseEditor'

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
}

/** 单元格值类型 */
export type CellValue = string | number | boolean | null

export interface Editor extends BaseEditor<EventMap> {
  /**
   * 展示评论侧边栏
   * @since PD2.10
   */
  showComments: (this: Editor, options: {}) => Promise<void>
  /** 关闭评论侧边栏 */
  hideComments: (this: Editor, options: {}) => Promise<void>
  /** 展示历史侧边栏 */
  showHistory: (this: Editor, options: {}) => Promise<void>
  /** 关闭历史侧边栏 */
  hideHistory: (this: Editor, options: {}) => Promise<void>
  /** 展示锁定侧边栏 */
  showLocks: (this: Editor, options: {}) => Promise<void>
  /** 关闭锁定侧边栏 */
  hideLocks: (this: Editor, options: {}) => Promise<void>
  /** 创建版本 */
  createRevision: (this: Editor, options: {}) => Promise<void>
  /** 进入演示模式 */
  startDemonstration: (this: Editor, options: {}) => Promise<void>
  /** 离开演示模式 */
  endDemonstration: (this: Editor, options: {}) => Promise<void>
  /** 打印 */
  print: (this: Editor, options: {}) => Promise<void>
  /** 创建单元格锁定 */
  addRangeLock: (
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
  ) => Promise<void>
  /** 创建工作表锁定 */
  addSheetLock: (
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
  ) => Promise<void>
  /** 删除指定范围内的所有单元格锁定 */
  removeRangeLocksInRanges: (
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
  ) => Promise<void>
  /** 删除工作表锁定 */
  removeSheetLock: (
    this: Editor,
    options: {
      /**
       * 工作表id
       * @default 默认当前工作表id
       */
      sheetId?: string
    }
  ) => Promise<void>

  /** 获取当前激活sheet的id */
  getActiveSheetId: () => Promise<string>

  /** 获取所有工作表的id */
  getSheetIds: () => Promise<string[]>

  /** 根据工作表 index 获取工作表 ID */
  getSheetIdByIndex: (options: { index: number }) => Promise<string>

  /** 获取指定工作表行数量 */
  getRowCount: (options: {
    /**
     * 工作表 ID
     * @default 默认当前工作表 ID
     */
    sheetId?: string
  }) => Promise<number>

  /** 获取指定工作表列数量 */
  getColumnCount: (options: {
    /**
     * 工作表 ID
     * @default 默认当前工作表 ID
     */ sheetId?: string
  }) => Promise<number>

  getCellValue: (options: {
    /**
     * 工作表 ID
     * @default 默认当前工作表 ID
     * */
    sheetId?: string
    /** 行index */
    row: number
    /** 列index */
    column: number
  }) => Promise<CellValue>

  /** 获取工作表指定范围内的单元格的值 */
  getRangeValues: (options: {
    /**
     * 工作表 ID
     * @default 默认当前工作表 ID
     */
    sheetId?: string
    /**
     * 单元格范围
     * @default 默认当前选中范围
     */ range?: Range[]
  }) => Promise<CellValue[][]>

  /**
   * 指定工作表是否可见，不传值为当前工作表
   */
  isSheetVisible: (options?: { sheetId?: string }) => Promise<boolean>

  /**
   * 设置表格标题，仅用于 UI 展示数据，不触发保存操作
   */
  setTitle: (title: string) => Promise<void>
}
