export interface Collaborator {
  id: number | string
  name?: string
  avatar?: string
  color?: string
  [key: string]: unknown
}

export interface CollaboratorsChangedPayload {
  type: 'snapshot' | 'enter' | 'leave'
  collaborators: Collaborator[]
  enterUsers?: Collaborator[]
  leaveUsers?: Collaborator[]
  raw?: unknown
}

export interface EventMap {
  /**
   * 保存状态发生变更
   */
  saveStatusChanged: {
    /**
     * @since 22.2.1
     */
    status?: 'saving' | 'saved' | 'error'
  }

  /**
   * 保存状态发生变更
   * @deprecated - use saveStatusChanged
   */
  saveStatusDidChange: {
    /**
     * @since 22.2.1
     */
    status?: 'saving' | 'saved' | 'error'
  }

  /**
   * 用于类似表格打开定位到当前 tab 的用途。事件触发时，替换当前的 url 的 search params 参数，在初始化 JS SDK 时传入。
   */
  paramsChanged: {
    params: string
  }

  /**
   * 协作者列表发生变更
   */
  collaboratorsChanged: CollaboratorsChangedPayload
}

export interface BaseEditor<
  T extends { [K: string]: any } = { [K: string]: any }
> {
  /**
   * 监听事件
   */
  on: <K extends keyof T>(event: K, handler: (payload: T[K]) => void) => void

  /**
   * 取消监听事件
   */
  off: <K extends keyof T>(event: K, handler?: (payload: T[K]) => void) => void

  /**
   * 设置文档标题
   */
  setTitle: (title: string) => Promise<void>

  /**
   * 获取当前协作者列表
   */
  getCollaborators: () => Collaborator[]
}
