export interface EventMap {
  [key: string]: any
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
