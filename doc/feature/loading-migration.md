# showLoading 接入 suite-components-loading 迁移说明

> 关联方案：`doc/feature/empty-page-plan.md` 第五章 "shimo-js-sdk 侧改造"。
> 关联 PR：TBD（suite 新包 0.0.x 发布后合入）。

## 概述

`shimo-js-sdk` 原本在 `src/assets/loading.ts` 里内联 SVG，在 `OfficeSDK` 里直接操作 DOM、写死遮罩样式。此次改造把视觉与 DOM 行为下沉到 `@shimo/suite-components-loading/renderer`（纯 DOM 子入口，不带 React），并顺势补齐了时机、超时、清理三件事。

## 变更点

### 1. 依赖 & 私有字段

- 新增 peer：`@shimo/suite-components-loading`（通过子入口 `@shimo/suite-components-loading/renderer` 引入，不引入 React 运行时）
- 删除：`src/assets/loading.ts`、`setupLoadingOverlay` / `removeLoadingOverlay` / `ensureLoadingStyle` 三个私有方法、`loadingOverlay` 字段
- 新增字段：`loadingHandle` / `loadingTimeoutTimer` / `pendingReadyStateHandler` / `pendingInitReject`

### 2. 新增选项

```ts
interface OfficeSDKOptions {
  // ...existing
  /**
   * 自定义 showLoading 遮罩视觉。保留未设即走默认。
   */
  loadingOptions?: Partial<LoadingRendererOptions>
  /**
   * 加载超时毫秒数，默认 30_000。
   * 到点后会 reject init() Promise 并撤遮罩，避免永恒转圈。
   * 传 0 可禁用。
   */
  loadingTimeout?: number
}
```

### 3. 时机调整

- **开启点前移**：loading 遮罩改在 `new OfficeSDK()` 构造末尾就挂上，消除"点开业务按钮 → 等若干毫秒才出现 loading"的撕裂感
- **关闭依赖新事件**：新增本地 `Event.EditorRendered`，由 iframe 侧 `setRendered()` 触发。遮罩以 `EditorRendered || Failed || timeout` 为关闭判据；`ReadyState.Ready` 作为兜底
- **disconnect 清理**：主动撤遮罩、清 timeout、reject 进行中的 init、解绑 ReadyState 监听，不再泄漏

## 使用者视角的影响

- `showLoading: true` 的调用方**无需任何改动**，默认视觉会切到新包样式（遮罩 + 内置石墨 Logo + spinner + 文案）
- 期望保持原先"轻量白底"的调用方，可通过 `loadingOptions: { theme: 'light' }` 保留；新增 tip、size、zIndex、logo 透出
- 自定义品牌 Logo：`loadingOptions: { logo: 'https://cdn.example.com/brand.svg' }`；传 `false` 则完全隐藏 Logo 区域
- 任何依赖"Ready 事件 = loading 消失"的集成方，请配合升级 `lizard-service-iframe-sdk` 到带 `setRendered()` 的版本；否则仍会走 `Ready` 兜底关闭路径，**不会**影响现有用户

## 兼容性

- 旧版 iframe（没有 `setRendered`）：`Ready` 兜底仍在，行为与改动前一致，只是视觉变成了 suite 统一样式
- 旧版业务接入 `showLoading: false`：不受影响，不挂遮罩
