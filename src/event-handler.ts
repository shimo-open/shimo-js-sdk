import { TinyEmitter } from 'tiny-emitter'
import { ShimoSDK } from './types/ShimoSDK'
import { assert } from './assert'
import { MouseMovePayload } from './types/BaseEditor'

export function emit(
  emitter: TinyEmitter,
  sdk: ShimoSDK,
  eventName: unknown,
  value?: MouseMovePayload
): void {
  const name = assert<string>(
    eventName,
    (v) => typeof v === 'string',
    'eventName must be a string'
  )

  // 填补 iframe 在 parent 的 offset
  if (
    name === 'MouseMove' ||
    name === 'VerticalScroll' ||
    name === 'HorizontalScroll'
  ) {
    if (typeof value === 'object' && value != null) {
      const rect = sdk.element.getBoundingClientRect()
      value.x += rect.x
      value.y += rect.y

      if (value.isMention) {
        value.mentionInfo.left += rect.x
        value.mentionInfo.top += rect.y
      }
    }
  }

  emitter.emit(name, value)
}
