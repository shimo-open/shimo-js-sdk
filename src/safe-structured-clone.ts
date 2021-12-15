import isPlainObject from 'is-plain-obj'

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
    value instanceof ArrayBuffer ||
    value instanceof RegExp ||
    value instanceof Map ||
    value instanceof Set ||
    value instanceof DataView ||
    value instanceof File ||
    value instanceof FileList ||
    value instanceof Blob ||
    value instanceof ImageBitmap ||
    value instanceof ImageData ||
    value instanceof Boolean ||
    value instanceof String
  ) {
    return value
  }

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
