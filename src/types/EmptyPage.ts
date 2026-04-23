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
 * 宿主通过 `connect({ emptyPage })` 传入的配置。所有字段均可选。
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
   * 是否把缺省页按钮动作委托给宿主处理。
   * - 传 boolean：统一覆盖所有 scene
   * - 传对象：按 scene 精细控制
   * - 默认值按 scene 区分：
   *    - `file-open-failed`: false —— iframe 内置"重试"
   *    - `no-permission`:    false —— 仅展示，不提供动作按钮
   *    - `network-error`:    false —— iframe 内置"重新加载"
   *    - `token-expired`:    true  —— 必须外抛给宿主，由业务决定登录/刷新逻辑
   */
  delegateActions?: boolean | Partial<Record<EmptyPageScene, boolean>>

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
}

/**
 * 归一化后的缺省页配置，透传给 iframe 使用。
 * 所有字段都是必填且完整填充，iframe 侧不需要再补默认值。
 */
export interface NormalizedEmptyPageOptions {
  enabled: boolean
  scenes: EmptyPageScene[]
  delegateActions: Record<EmptyPageScene, boolean>
  tokenExpiredStrategy: TokenExpiredStrategy
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
 * `emptyPageAction` 事件 payload，只有 `delegateActions` 为 true 的 scene 才会触发。
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

const DEFAULT_DELEGATE_ACTIONS: Record<EmptyPageScene, boolean> = {
  'file-open-failed': false,
  'no-permission': false,
  'network-error': false,
  'token-expired': true
}

function resolveDelegateActions(
  input: EmptyPageOptions['delegateActions']
): Record<EmptyPageScene, boolean> {
  if (typeof input === 'boolean') {
    return {
      'file-open-failed': input,
      'no-permission': input,
      'network-error': input,
      'token-expired': input
    }
  }

  if (input && typeof input === 'object') {
    return {
      'file-open-failed':
        typeof input['file-open-failed'] === 'boolean'
          ? input['file-open-failed']
          : DEFAULT_DELEGATE_ACTIONS['file-open-failed'],
      'no-permission':
        typeof input['no-permission'] === 'boolean'
          ? input['no-permission']
          : DEFAULT_DELEGATE_ACTIONS['no-permission'],
      'network-error':
        typeof input['network-error'] === 'boolean'
          ? input['network-error']
          : DEFAULT_DELEGATE_ACTIONS['network-error'],
      'token-expired':
        typeof input['token-expired'] === 'boolean'
          ? input['token-expired']
          : DEFAULT_DELEGATE_ACTIONS['token-expired']
    }
  }

  return { ...DEFAULT_DELEGATE_ACTIONS }
}

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

/**
 * 把宿主传入的 `emptyPage` 配置归一化成完整对象。
 *
 * - 未传 / undefined：启用全部 scene，使用默认 delegateActions / tokenExpiredStrategy
 * - 传 true：等价于 `{ enabled: true }`，其余使用默认值
 * - 传 false：等价于 `{ enabled: false }`，但其余字段仍填充默认以保证形状一致
 * - 传对象：按字段覆盖，未覆盖部分使用默认
 *
 * 归一化后的结果里 `delegateActions` 始终是完整的 `Record<EmptyPageScene, boolean>`，
 * 避免 iframe 侧再做默认值计算。
 */
export function normalizeEmptyPageOptions(
  input?: boolean | EmptyPageOptions
): NormalizedEmptyPageOptions {
  if (input === false) {
    return {
      enabled: false,
      scenes: [...ALL_EMPTY_PAGE_SCENES],
      delegateActions: { ...DEFAULT_DELEGATE_ACTIONS },
      tokenExpiredStrategy: 'refresh-first'
    }
  }

  if (input === true || input === undefined) {
    return {
      enabled: true,
      scenes: [...ALL_EMPTY_PAGE_SCENES],
      delegateActions: { ...DEFAULT_DELEGATE_ACTIONS },
      tokenExpiredStrategy: 'refresh-first'
    }
  }

  return {
    enabled: typeof input.enabled === 'boolean' ? input.enabled : true,
    scenes: resolveScenes(input.scenes),
    delegateActions: resolveDelegateActions(input.delegateActions),
    tokenExpiredStrategy: resolveTokenExpiredStrategy(
      input.tokenExpiredStrategy
    )
  }
}
