/**
 * 缺省页能力的对外契约类型。
 *
 * 关于 scene 枚举归属（已确定）：
 *   P1~P4 实施期，两侧（shimo-js-sdk 与 lizard-service-iframe-sdk）在本地 types
 *   文件里手工保持字面量一致；联调稳定后沉淀到 `shimo-js-sdk-shared` 的常量中。
 */

/**
 * 缺省页场景枚举，必须与 `lizard-service-iframe-sdk` 侧完全一致。
 */
export type EmptyPageScene =
  | 'file-open-failed'
  | 'no-permission'
  | 'network-error'
  | 'token-expired'

/**
 * `file-open-failed` 下可细分的子原因，承载 HTTP 协议级差异；
 * 保持 scene 枚举粒度稳定，细节通过 reason 下钻。
 */
export type FileOpenFailedReason =
  | 'file-not-found'
  | 'file-deleted'
  | 'file-load-failed'
  | 'unknown'

export type TokenExpiredStrategy = 'refresh-first' | 'show-immediately'

/**
 * 单个按钮的自定义。点击后统一触发 `emptyPageAction` 事件，
 * 宿主监听事件后自行决定后续行为（重登 / 重试 / 隐藏等）。
 */
export interface EmptyPageActionOverride {
  /** 按钮文案。必填。 */
  label: string
}

/**
 * 单个 scene 的文案/按钮自定义。未提供的字段走内置默认（文案走默认，按钮不渲染）。
 */
export interface EmptyPageContentOverride {
  /** 覆盖标题。 */
  title?: string
  /** 覆盖描述。 */
  description?: string
  /** 主按钮。不传则不渲染主按钮。 */
  primary?: EmptyPageActionOverride
  /** 次按钮。不传则不渲染次按钮。 */
  secondary?: EmptyPageActionOverride
}

/**
 * 宿主通过 `connect({ emptyPage })` 传入的配置。所有字段均可选。
 *
 * 默认行为：
 * - 图片 / 文案（title / description）均内置，宿主无需传
 * - **默认不渲染任何按钮**。如需按钮，必须在 `overrides[scene].primary/secondary`
 *   里显式配置 label。按钮点击统一触发 `emptyPageAction` 事件。
 */
export interface EmptyPageOptions {
  /**
   * 总开关，默认 true。
   */
  enabled?: boolean

  /**
   * 启用的场景白名单。未指定时全部启用。
   */
  scenes?: EmptyPageScene[]

  /**
   * token 过期场景的定制策略：
   * - `refresh-first`（默认）：先走一次 getCredentials 刷新，失败再展示缺省页
   *   - 仅在宿主传了 `getCredentials` 时生效
   *   - 最多重试 1 次，5s 超时按失败处理
   * - `show-immediately`：立即展示，不做刷新尝试
   *
   * 未传 `getCredentials` 时，无论配置如何都按 `show-immediately` 执行。
   */
  tokenExpiredStrategy?: TokenExpiredStrategy

  /**
   * 按 scene 自定义文案和按钮。未配置 scene 走默认行为（默认文案 + 无按钮）。
   */
  overrides?: Partial<Record<EmptyPageScene, EmptyPageContentOverride>>
}

/**
 * 归一化后的缺省页配置，透传给 iframe 使用。
 * 所有基础字段都是必填且完整填充，iframe 侧不需要再补默认值。
 * `overrides` 保持稀疏（仅携带宿主显式传入的字段），避免透传多余数据。
 */
export interface NormalizedEmptyPageOptions {
  enabled: boolean
  scenes: EmptyPageScene[]
  tokenExpiredStrategy: TokenExpiredStrategy
  overrides: Partial<Record<EmptyPageScene, EmptyPageContentOverride>>
}

/**
 * `emptyPageShown` 事件 payload。
 */
export interface EmptyPageShownPayload {
  scene: EmptyPageScene
  /**
   * scene 内的子类型（如 FileOpenFailedReason），宿主可用于定制文案或埋点。
   */
  reason?: FileOpenFailedReason | string
  httpStatus?: number
  retryable?: boolean
}

/**
 * `emptyPageAction` 事件 payload，按钮被点击时触发。
 * 宿主根据 scene + action 决定业务行为（重登 / 重试 / 隐藏等）。
 */
export interface EmptyPageActionPayload {
  scene: EmptyPageScene
  action: 'primary' | 'secondary'
}

/**
 * `emptyPageHidden` 事件 payload。
 */
export interface EmptyPageHiddenPayload {
  scene: EmptyPageScene
}

/**
 * 完整的 scene 列表，用于作为默认值与合法性校验。
 */
export const ALL_EMPTY_PAGE_SCENES: EmptyPageScene[] = [
  'file-open-failed',
  'no-permission',
  'network-error',
  'token-expired'
]

function resolveScenes(input: EmptyPageScene[] | undefined): EmptyPageScene[] {
  if (!Array.isArray(input)) {
    return [...ALL_EMPTY_PAGE_SCENES]
  }

  const filtered: EmptyPageScene[] = []
  for (const scene of input) {
    if (ALL_EMPTY_PAGE_SCENES.includes(scene)) {
      filtered.push(scene)
    }
  }

  if (filtered.length === 0) {
    return [...ALL_EMPTY_PAGE_SCENES]
  }

  return filtered
}

function resolveTokenExpiredStrategy(
  input: TokenExpiredStrategy | undefined
): TokenExpiredStrategy {
  if (input === 'show-immediately') {
    return 'show-immediately'
  }
  return 'refresh-first'
}

function pickString(value: unknown): string | undefined {
  return typeof value === 'string' && value.length > 0 ? value : undefined
}

function resolveAction(
  input: EmptyPageActionOverride | undefined
): EmptyPageActionOverride | undefined {
  if (!input || typeof input !== 'object') {
    return undefined
  }
  const label = pickString(input.label)
  if (!label) {
    return undefined
  }
  return { label }
}

function resolveContentOverride(
  input: EmptyPageContentOverride | undefined
): EmptyPageContentOverride | undefined {
  if (!input || typeof input !== 'object') {
    return undefined
  }

  const result: EmptyPageContentOverride = {}
  const title = pickString(input.title)
  if (title) {
    result.title = title
  }
  const description = pickString(input.description)
  if (description) {
    result.description = description
  }
  const primary = resolveAction(input.primary)
  if (primary) {
    result.primary = primary
  }
  const secondary = resolveAction(input.secondary)
  if (secondary) {
    result.secondary = secondary
  }

  // 全部字段都缺失时视为"未配置"，让消费侧走默认分支
  if (
    result.title === undefined &&
    result.description === undefined &&
    result.primary === undefined &&
    result.secondary === undefined
  ) {
    return undefined
  }

  return result
}

function resolveOverrides(
  input: EmptyPageOptions['overrides']
): Partial<Record<EmptyPageScene, EmptyPageContentOverride>> {
  if (!input || typeof input !== 'object') {
    return {}
  }

  const result: Partial<Record<EmptyPageScene, EmptyPageContentOverride>> = {}
  for (const scene of ALL_EMPTY_PAGE_SCENES) {
    const resolved = resolveContentOverride(input[scene])
    if (resolved) {
      result[scene] = resolved
    }
  }
  return result
}

/**
 * 把宿主传入的 `emptyPage` 配置归一化成完整对象。
 *
 * - 未传 / undefined：启用全部 scene，使用默认 tokenExpiredStrategy，不携带 overrides
 * - 传 true：等价于 `{ enabled: true }`
 * - 传 false：等价于 `{ enabled: false }`，其余字段仍填充默认以保证形状一致
 * - 传对象：按字段覆盖，未覆盖部分使用默认
 */
export function normalizeEmptyPageOptions(
  input?: boolean | EmptyPageOptions
): NormalizedEmptyPageOptions {
  if (input === false) {
    return {
      enabled: false,
      scenes: [...ALL_EMPTY_PAGE_SCENES],
      tokenExpiredStrategy: 'refresh-first',
      overrides: {}
    }
  }

  if (input === true || input === undefined) {
    return {
      enabled: true,
      scenes: [...ALL_EMPTY_PAGE_SCENES],
      tokenExpiredStrategy: 'refresh-first',
      overrides: {}
    }
  }

  return {
    enabled: typeof input.enabled === 'boolean' ? input.enabled : true,
    scenes: resolveScenes(input.scenes),
    tokenExpiredStrategy: resolveTokenExpiredStrategy(
      input.tokenExpiredStrategy
    ),
    overrides: resolveOverrides(input.overrides)
  }
}
