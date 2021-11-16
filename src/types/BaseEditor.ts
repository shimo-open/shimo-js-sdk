export interface EventMap {
  [key: string]: any

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

export interface BaseEditor<
  EventMap extends { [K: string]: any } = { [K: string]: any }
> {
  // type preserve hack
  // __eventMap?: EventMap
  on: <K extends keyof EventMap>(event: K, handler: EventCallback) => void
  off: <K extends keyof EventMap>(event: K, handler: EventCallback) => void
}

export type EventCallback = <K extends keyof EventMap>(
  payload: EventMap[K]
) => void

/**
 * 用户 hover 在 at 上时，at 在该行信息
 */
export interface LineInfo {
  /**
   * @ 在该行的顶点 x 坐标
   */
  left: number
  /**
   * @ 在该行的顶点 y 坐标
   */
  top: number
  /**
   * @ 在该行的宽度
   */
  width: number
  /**
   * @ 在该行的高度
   */
  height: number
}

/**
 * 用户 hover 在 at 上时，at 涉及的 user id 或 file id 信息
 */
export interface MentionInfo extends LineInfo {
  /**
   * 用户 ID
   */
  userId?: number
  /**
   * 文件 ID
   */
  fileId?: string
}

/**
 * 鼠标事件相关的信息
 */
export interface MouseMovePayload {
  x: number
  y: number

  /**
   * 光标所在位置是否是一个 @ 元素
   */
  isMention: boolean
  mentionInfo: MentionInfo
}
