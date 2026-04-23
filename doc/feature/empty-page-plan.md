# 缺省页功能细化方案 (shimo-js-sdk 侧)

> 所在分支：`feature-empty-page`
>
> 关联仓库：`suite-components`（组件层）、`lizard-service-iframe-sdk`（iframe 运行时层）
>
> 本文档为**对外 SDK 层**的细化方案，描述宿主配置、透传协议、事件桥接、类型导出与文档更新。

---

## 1. 目标

把 iframe 侧的缺省页能力开放给宿主接入方，保证：

- 宿主可通过 `connect({ emptyPage })` 一行配置启用/关闭
- 支持按场景精细控制
- 可监听展示事件与按钮动作
- 与现有 `getCredentials` / `refreshCredentialsInterval` 协作处理 token 过期
- 向后兼容，不破坏 `ConnectOptions` 现有 API

---

## 2. 场景与 scene 枚举

与 `lizard-service-iframe-sdk` 侧保持字符串字面量完全一致：

```ts
export type EmptyPageScene =
  | 'file-open-failed'
  | 'no-permission'
  | 'network-error'
  | 'token-expired'
```

**归属约定（已定）**：分阶段沉淀到 `shimo-js-sdk-shared`。

- P1~P4 实施阶段：两侧（iframe、shimo-js-sdk）在本地 `src/types/EmptyPage.ts` 中手工保持字面量一致，通过本文档和 code review 约束
- 联调稳定后：在 `shimo-js-sdk-shared` 中 `export const EMPTY_PAGE_SCENES` 常量与 `EMPTY_PAGE_EVENTS` 事件名常量，两侧随下一版本同步升级依赖，替换本地字面量

此策略避免 shared 包发版成为主路径阻塞，同时最终归位到正确的契约层。

---

## 3. 公开 API 设计

### 3.1 `OfficeSDKOptions` / `ConnectOptions` 扩展

新增字段（**全部可选**，保证向后兼容）：

```ts
// src/OfficeSDK.ts 中的 OfficeSDKOptions
export interface OfficeSDKOptions {
  // ...existing fields...

  /**
   * 缺省页配置。传 true 等价于 { enabled: true }；传 false 等价于 { enabled: false }。
   * 未配置时，默认启用全部 scenes。
   */
  emptyPage?: boolean | EmptyPageOptions
}

export interface EmptyPageOptions {
  /** 总开关，默认 true */
  enabled?: boolean
  /** 启用的场景白名单，未指定则全部启用 */
  scenes?: EmptyPageScene[]
  /**
   * 是否把缺省页按钮动作委托给宿主处理。
   * - 传 boolean：统一覆盖所有 scene
   * - 传对象：按 scene 精细控制
   * - 默认值（按 scene 区分）：
   *   - 'file-open-failed': false  —— iframe 内置"重试"
   *   - 'no-permission':    false  —— 仅展示，不提供动作按钮（或"返回"）
   *   - 'network-error':    false  —— iframe 内置"重新加载"
   *   - 'token-expired':    true   —— 必须外抛给宿主，由业务决定登录/刷新逻辑
   */
  delegateActions?: boolean | Partial<Record<EmptyPageScene, boolean>>
  /**
   * token 过期场景的定制策略：
   * - 'refresh-first'（默认）：先走一次 getCredentials 刷新，失败再展示缺省页
   *   - 仅在宿主传了 getCredentials 时生效
   *   - 最多重试 1 次，避免白屏与死循环
   *   - 刷新调用 5s 超时按失败处理
   * - 'show-immediately'：立即展示，不做刷新尝试
   *
   * 未传 getCredentials 时，无论配置如何都按 'show-immediately' 执行。
   */
  tokenExpiredStrategy?: 'refresh-first' | 'show-immediately'
}
```

### 3.2 事件订阅

在现有 `Event` 枚举 / `on()` 上新增：

| 事件名            | 触发时机                       | payload                                       |
| ----------------- | ------------------------------ | --------------------------------------------- |
| `emptyPageShown`  | iframe 内展示缺省页时          | `{ scene, reason?, httpStatus?, retryable? }` |
| `emptyPageAction` | 用户点击缺省页按钮（delegate） | `{ scene, action: 'primary' \| 'secondary' }` |
| `emptyPageHidden` | 缺省页隐藏                     | `{ scene }`                                   |

`reason` 为 scene 内部的子类型字符串（如 `file-open-failed` 下的 `'file-not-found' | 'file-deleted' | 'file-load-failed' | 'unknown'`），用于承载 HTTP 细节而不膨胀 scene 枚举。

使用方式保持与现有事件一致：

```ts
sdk.on('emptyPageShown', ({ scene }) => {
  /* ... */
})
```

---

## 4. 配置透传链路

```
connect({ emptyPage })  →  iframe URL query / postMessage init
                       ↘
                         OfficeSDK 在 channel 建立后向 iframe 推送
                       ↗
lizard-service-iframe-sdk 读取 window.__RUNTIME_ENV__.EMPTY_PAGE
```

具体改造点：

1. **`src/OfficeSDK.ts`**
   - `OfficeSDKOptions` 新增 `emptyPage`
   - 归一化：`true` → `{ enabled: true }`；`false` → `{ enabled: false }`；对象保留
   - 在现有向 iframe 注入 runtime 配置的地方（与 `apiAdaptor / startParams` 同级）带上 `emptyPage`
2. **channel 事件中转**
   - 监听 iframe `dispatchEditorEvent` 中 `emptyPageShown / emptyPageAction / emptyPageHidden`
   - 通过 `this.emit(event, payload)` 外抛
3. **连接阶段的兜底**
   - `connect()` 自身异常（iframe 无法加载、超时）本仓库已有默认错误外抛机制，本次**不改动**；这部分缺省页由宿主自己处理或后续扩展

---

## 5. 与 credential 刷新的协同（token-expired 专项）

现状：`connect({ getCredentials, refreshCredentialsInterval })` 已经负责定时刷新。

新增策略（已确定）：

- `tokenExpiredStrategy: 'refresh-first'`（默认）
  - 仅当宿主传了 `getCredentials` 时生效
  - iframe 收到 401 后**先**调用一次凭证刷新（5s 超时，最多重试 1 次）
    - 刷新成功且后续请求恢复 → 不展示缺省页
    - 刷新失败或仍 401 → 展示 `token-expired` 缺省页
  - SDK 侧仅负责事件中转，不做额外包装
- `tokenExpiredStrategy: 'show-immediately'`
  - iframe 立即展示缺省页，不做刷新尝试
  - 由于 `token-expired` 默认 `delegateActions: true`，按钮动作会通过 `emptyPageAction` 外抛给宿主
  - 宿主在回调中自行调用 `sdk.setCredentials()` 或发起重新登录
- **降级规则**：未传 `getCredentials` 时，无论配置是 `refresh-first` 还是未配置，均按 `show-immediately` 执行——否则没有刷新手段会卡死

文档里要明确：**无论哪种策略，`setCredentials` 成功后 iframe 不会自动隐藏缺省页**（为避免状态错乱），由宿主根据业务决定是否 `location.reload()` 或重新 `connect()`。

---

## 6. 类型与导出

新增文件：

```
src/types/EmptyPage.ts    # EmptyPageScene / EmptyPageOptions / event payload
```

在 `src/index.ts` 中 re-export：

```ts
export type {
  EmptyPageScene,
  EmptyPageOptions,
  EmptyPageShownPayload,
  EmptyPageActionPayload
} from './types/EmptyPage'
```

这样 TypeScript 宿主可以直接：

```ts
import { connect, EmptyPageScene } from 'shimo-js-sdk'
```

---

## 7. TypeDoc / 文档更新

- `docs/interfaces/ConnectOptions.md`：新增 `emptyPage` 条目
- 新增 `docs/interfaces/EmptyPageOptions.md`（由 TypeDoc 自动生成）
- `README.md` 新增一节"### 缺省页 (Empty Page)"，包含：
  - 开关与默认行为
  - 4 种场景的触发说明
  - 配置示例
  - 与 `getCredentials` 的协作说明
  - 事件订阅示例
  - 与 `showLoading` / `showLoadingEffect` 的区别
- `preversion` 脚本已配置 `npm run docs`，发版时自动同步

README 示例草稿：

```ts
import { connect, EmptyPageScene } from 'shimo-js-sdk'

const sdk = await connect({
  // ...其他配置
  emptyPage: {
    enabled: true,
    scenes: [
      'file-open-failed',
      'no-permission',
      'network-error',
      'token-expired'
    ],
    delegateActions: true,
    tokenExpiredStrategy: 'refresh-first'
  }
})

sdk.on('emptyPageShown', ({ scene, reason }) => {
  console.log('empty page shown:', scene, reason)
})

sdk.on('emptyPageAction', async ({ scene, action }) => {
  if (scene === 'token-expired' && action === 'primary') {
    const { signature, token } = await fetchNewCredentials()
    await sdk.setCredentials({ signature, token })
  }
})
```

---

## 8. 版本与兼容性

- 本次变更属于**纯增量**能力，`ConnectOptions` 所有新字段可选，现有宿主升级后行为不变（默认启用缺省页不会影响成功流程，只在原本会报错时显示友好页面）
- 需要文档里明确：**本 SDK 版本要求 iframe 资源服务版本 ≥ x.y.z**（与 `lizard-service-iframe-sdk` 发版对齐后补充）
- 建议版本号：`2.1.0`（minor 升级，新增 feature）

---

## 9. 测试计划

本仓库以契约测试为主：

- 类型层面：`tsc --noEmit` 确认 `ConnectOptions` 归一化逻辑无 as / any
- 行为层面：在 `__tests__/`（如需新增）模拟 channel 事件，验证：
  - `emptyPageShown / emptyPageAction / emptyPageHidden` 能被 `sdk.on(...)` 正确接收
  - `emptyPage: false` 时不应将配置注入 iframe runtime env
  - `emptyPage: true`、对象、未传三种形式归一化结果一致
- 联调：与 `lizard-service-iframe-sdk` 的 `feature/empty-page` 分支配套测试全部 4 种 scene

---

## 10. 分阶段交付

| 阶段 | 产出                                                                                    | 依赖                                     |
| ---- | --------------------------------------------------------------------------------------- | ---------------------------------------- |
| P0   | 本方案文档（当前）                                                                      | 无                                       |
| P1   | 新增 `src/types/EmptyPage.ts`、`OfficeSDKOptions.emptyPage` 归一化                      | 无                                       |
| P2   | channel 事件中转 + `sdk.on('emptyPageShown' \| 'emptyPageAction' \| 'emptyPageHidden')` | iframe 侧 P4 完成                        |
| P3   | README + TypeDoc 更新                                                                   | P1/P2                                    |
| P4   | 联调 + 发版                                                                             | iframe + suite-components 均已发预发版本 |

---

## 11. 已确定的关键决策

| 事项                     | 决策                                                              | 说明                                                             |
| ------------------------ | ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| scene 常量归属           | 分阶段沉淀到 `shimo-js-sdk-shared`                                | 实施期两侧本地字面量，联调稳定后再抽包，不阻塞主路径             |
| token-expired 默认策略   | `refresh-first`，最多重试 1 次，5s 超时                           | 未传 `getCredentials` 时降级为 `show-immediately`，避免死循环    |
| `delegateActions` 默认值 | 按 scene 区分：`token-expired` 默认 `true`，其他默认 `false`      | 类型升级为 `boolean \| Partial<Record<EmptyPageScene, boolean>>` |
| 404 是否独立 scene       | **不独立**，用 `reason` 字段表达子类型                            | 保持 scene 粒度稳定，HTTP 细节由 reason 承载                     |
| 事件命名                 | `camelCase`，与 `saveStatusChanged / editForbiddenConfirmed` 对齐 | `emptyPageShown / emptyPageAction / emptyPageHidden`             |
| `emptyPage` 默认值       | 未配置时启用全部 scene                                            | 向后兼容：原本会白屏/报错的场景变为友好页面，不影响成功流程      |

---

## 12. 关联分支

- `shimo-js-sdk` — `feature-empty-page`（当前）
- `lizard-service-iframe-sdk` — `feature-empty-page`（见其 `doc/feature/empty-page-plan.md`）
- `suite-components` — 进行中的 `suite-components-empty-page` 包扩展（需新增 preset：`file-open-failed` / `network-error` / `token-expired`，保留现有 `no-permission`）
