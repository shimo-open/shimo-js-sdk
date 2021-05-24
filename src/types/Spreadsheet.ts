import { BaseEditor } from './BaseEditor'

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

export interface EventMap {
  saveStatusChanged: {
    status?: 'saving' | 'saved' | 'error'
  }
  error: {
    /** 错误信息 */
    data?: any
    /** 错误码 */
    code: number
  }
}

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
}
