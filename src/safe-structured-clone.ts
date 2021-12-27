import isPlainObject from 'is-plain-obj'

function isInstanceOf(target: unknown, prototype: any): boolean {
  try {
    return target instanceof prototype
  } catch (e) {
    return false
  }
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
 */
export function clone(value: unknown): unknown {
  if (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    typeof value === 'undefined' ||
    value === null ||
    value instanceof Date ||
    value instanceof RegExp ||
    value instanceof Boolean ||
    value instanceof String
  ) {
    return value
  }

  try {
    // 有些浏览器不支持这些对象
    for (const proto of [
      window.ArrayBuffer,
      window.Map,
      window.Set,
      window.DataView,
      window.File,
      window.FileList,
      window.Blob,
      window.ImageBitmap,
      window.ImageData
    ]) {
      if (isInstanceOf(value, proto)) {
        return value
      }
    }
  } catch (e) {}

  if (isPlainObject(value)) {
    const val = value as Record<string, unknown>
    const obj: Record<string, unknown> = {}
    for (const key in val) {
      if (Object.prototype.hasOwnProperty.call(val, key)) {
        obj[key] = clone(val[key])
      }
    }

    return obj
  }

  if (Array.isArray(value)) {
    return value.map(clone)
  }

  // TypedArray
  try {
    if (value instanceof Object.getPrototypeOf(Uint8Array)) {
      return value
    }
  } catch (e) {}

  // 保留字段信息用于 debug
  return `[unsupported ${String(value)}]`
}
