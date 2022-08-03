export interface EventMap {
  /**
   * 保存状态发生变更
   */
  saveStatusDidChange: {
    /**
     * @since 22.2.1
     */
    status?: 'saving' | 'saved' | 'error'
  }
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
}
