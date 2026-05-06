# HeaderBars API 文档

> 所在分支：`feat-headerbars`
>
> 本文档基于当前分支源码整理，用于对齐 `shimo-js-sdk` 侧已经暴露的 `headerBars` 能力，以及 iframe 侧需要承接的 method contract。

---

## 1. 概览

`headerBars` 的公开入口为：

```ts
const sdk = await connect(options)

sdk.headerBars
```

当前能力分为四类：

- 顶栏显示控制
- command 增查与状态控制
- 标题编辑相关
- iframe 与宿主之间的点击回调桥接

源码入口：

- facade 定义：`src/OfficeSDK.ts` 中 `HeaderBarsFacade`
- facade 初始化：`src/OfficeSDK.ts` 中 `initHeaderBarsFacade()`
- 底层 method 常量：`src/OfficeSDK.ts` 中 `HEADER_BARS_METHOD`

---

## 2. 公开 API

### 2.1 `sdk.headerBars.visible`

```ts
visible: boolean
```

用途：

- 直接读写 headerbars 显示状态

行为说明：

- getter 返回 SDK 当前缓存的 `headerBarsVisible`
- setter 会异步调用 `headerBars.setVisible`
- 如果业务需要严格等待 iframe 侧完成更新，应优先使用 `await sdk.headerBars.setVisible(...)`

示例：

```ts
sdk.headerBars.visible = false
sdk.headerBars.visible = true
```

### 2.2 `sdk.headerBars.getVisible()`

```ts
getVisible(): Promise<boolean>
```

用途：

- 主动从 iframe 同步当前 headerbars 显示状态

返回值：

- `Promise<boolean>`

示例：

```ts
const visible = await sdk.headerBars.getVisible()
```

### 2.3 `sdk.headerBars.setVisible(visible)`

```ts
setVisible(visible: boolean): Promise<void>
```

参数：

- `visible`: `true` 表示显示，`false` 表示隐藏

用途：

- 显式设置 headerbars 的显示状态

示例：

```ts
await sdk.headerBars.setVisible(true)
await sdk.headerBars.setVisible(false)
```

### 2.4 `sdk.headerBars.addCommand(command, posCommand, pos?)`

```ts
addCommand(
  command: HeaderBarsCommandDefinition,
  posCommand: string,
  pos?: 'before' | 'after'
): Promise<boolean>
```

用途：

- 在指定已有 command 的前面或后面插入一个自定义 command

参数：

- `command`: 新增 command 的定义
- `posCommand`: 参照 command 的 id
- `pos`: 插入位置，默认 `'after'`

返回值：

- `Promise<boolean>`
- `true` 表示插入成功
- `false` 表示插入失败

`HeaderBarsCommandDefinition` 结构：

```ts
interface HeaderBarsCommandDefinition {
  id: string
  section?: string
  order?: number
  label?: string
  visible?: boolean
  disabled?: boolean
  type?: 'action' | 'structural'
  renderType?: string
  src?: string
  onClick?: () => void | Promise<void>
}
```

字段说明：

- `id`: command 唯一标识
- `section`: 所属分组
- `order`: 排序字段
- `label`: 展示文案
- `visible`: 初始显示状态
- `disabled`: 初始禁用状态
- `type`: command 类型
- `renderType`: 渲染类型，当前仅透传
- `src`: 资源地址，当前仅透传
- `onClick`: 宿主侧点击处理函数

注意事项：

- `onClick` 不会直接传给 iframe
- SDK 会先调用 `headerBars.addCommand`
- 如果插入成功且 `onClick` 存在，SDK 会继续调用 `headerBars.setCommandCallbackEnabled` 开启点击桥接

示例：

```ts
await sdk.headerBars.addCommand(
  {
    id: 'custom-export',
    section: 'more',
    label: 'Export',
    onClick: async () => {
      console.log('custom export clicked')
    }
  },
  'download',
  'after'
)
```

### 2.5 `sdk.headerBars.getCommand(id)`

```ts
getCommand(id: string): HeaderBarsCommandRef
```

用途：

- 获取某个 command 的引用对象，用于后续修改状态或挂载点击处理

参数：

- `id`: command id

返回值：

- `HeaderBarsCommandRef`

注意事项：

- 即使当前本地 cache 里还没有这个 command，SDK 也会先返回一个 ref
- 如果本地不存在该 command，SDK 会异步触发一次 `headerBars.getCommand`
- 因此 `getState()` 在初始阶段可能返回 `undefined`

示例：

```ts
const command = sdk.headerBars.getCommand('custom-export')
```

### 2.6 `sdk.headerBars.listViewCommands()`

```ts
listViewCommands(): Promise<HeaderBarsCommandState[]>
```

用途：

- 拉取当前视图中全部 command 状态

返回值：

- `Promise<HeaderBarsCommandState[]>`

副作用：

- SDK 会用返回结果刷新本地 command cache

`HeaderBarsCommandState` 结构：

```ts
interface HeaderBarsCommandState extends HeaderBarsCommandDefinition {
  type: 'action' | 'structural'
}
```

示例：

```ts
const commands = await sdk.headerBars.listViewCommands()
```

### 2.7 `sdk.headerBars.setTitleDraft(title)`

```ts
setTitleDraft(title: string): Promise<void>
```

用途：

- 设置标题草稿态

参数：

- `title`: draft title

示例：

```ts
await sdk.headerBars.setTitleDraft('Draft Title')
```

### 2.8 `sdk.headerBars.confirmTitleChange(title)`

```ts
confirmTitleChange(title: string): Promise<void>
```

用途：

- 确认标题修改

参数：

- `title`: final title

示例：

```ts
await sdk.headerBars.confirmTitleChange('Final Title')
```

---

## 3. `HeaderBarsCommandRef`

`sdk.headerBars.getCommand(id)` 返回 `HeaderBarsCommandRef`。

```ts
interface HeaderBarsCommandRef {
  readonly id: string
  visible: boolean
  disabled: boolean
  onCommandClick?: () => void | Promise<void>
  getState: () => HeaderBarsCommandState | undefined
}
```

### 3.1 `commandRef.id`

```ts
readonly id: string
```

用途：

- 当前 command 的唯一标识

### 3.2 `commandRef.visible`

```ts
visible: boolean
```

用途：

- 读写 command 显隐状态

行为说明：

- getter 从本地 cache 读取
- setter 会先更新本地 cache，再异步调用 `headerBars.setCommandVisible`

示例：

```ts
const command = sdk.headerBars.getCommand('custom-export')
command.visible = true
command.visible = false
```

### 3.3 `commandRef.disabled`

```ts
disabled: boolean
```

用途：

- 读写 command 禁用状态

行为说明：

- getter 从本地 cache 读取
- setter 会先更新本地 cache，再异步调用 `headerBars.setCommandDisabled`

示例：

```ts
const command = sdk.headerBars.getCommand('custom-export')
command.disabled = true
command.disabled = false
```

### 3.4 `commandRef.onCommandClick`

```ts
onCommandClick?: () => void | Promise<void>
```

用途：

- 覆盖 command 点击回调

行为说明：

- setter 会把 handler 存入 SDK 本地 override map
- 然后异步调用 `headerBars.setCommandCallbackEnabled`
- 当 iframe 触发 `headerBars.handleCommandClick(id)` 时，SDK 会在宿主侧执行该 handler

示例：

```ts
const command = sdk.headerBars.getCommand('custom-export')

command.onCommandClick = async () => {
  console.log('clicked')
}
```

### 3.5 `commandRef.getState()`

```ts
getState(): HeaderBarsCommandState | undefined
```

用途：

- 读取 SDK 当前缓存中的 command state

注意事项：

- 这是本地 cache，不是强一致远端状态
- 若该 command 尚未被 `listViewCommands()`、`headerBars:changed` 或 `getCommand()` 拉取到，则可能返回 `undefined`

示例：

```ts
const command = sdk.headerBars.getCommand('custom-export')
const state = command.getState()
```

---

## 4. 底层 method contract

当前分支里 `headerBars` 相关 method 常量如下：

```ts
const HEADER_BARS_METHOD = {
  getVisible: 'headerBars.getVisible',
  setVisible: 'headerBars.setVisible',
  addCommand: 'headerBars.addCommand',
  getCommand: 'headerBars.getCommand',
  setCommandVisible: 'headerBars.setCommandVisible',
  setCommandDisabled: 'headerBars.setCommandDisabled',
  setCommandCallbackEnabled: 'headerBars.setCommandCallbackEnabled',
  setTitleDraft: 'headerBars.setTitleDraft',
  confirmTitleChange: 'headerBars.confirmTitleChange',
  listViewCommands: 'headerBars.listViewCommands',
  handleCommandClick: 'headerBars.handleCommandClick'
} as const
```

### 4.1 SDK facade 与底层 method 映射

| SDK API                                | iframe method                          |
| -------------------------------------- | -------------------------------------- |
| `getVisible()`                         | `headerBars.getVisible`                |
| `setVisible(visible)`                  | `headerBars.setVisible`                |
| `addCommand(command, posCommand, pos)` | `headerBars.addCommand`                |
| `getCommand(id)`                       | `headerBars.getCommand`                |
| `listViewCommands()`                   | `headerBars.listViewCommands`          |
| `setTitleDraft(title)`                 | `headerBars.setTitleDraft`             |
| `confirmTitleChange(title)`            | `headerBars.confirmTitleChange`        |
| `commandRef.visible = next`            | `headerBars.setCommandVisible`         |
| `commandRef.disabled = next`           | `headerBars.setCommandDisabled`        |
| `commandRef.onCommandClick = handler`  | `headerBars.setCommandCallbackEnabled` |
| iframe 通知宿主执行点击回调            | `headerBars.handleCommandClick`        |

### 4.2 各 method 的参数与返回值

`headerBars.getVisible`

```ts
type Request = undefined

type Response = {
  visible: boolean
}
```

`headerBars.setVisible`

```ts
type Request = {
  visible: boolean
}

type Response = undefined
```

`headerBars.addCommand`

```ts
type Request = {
  command: Omit<HeaderBarsCommandDefinition, 'onClick'>
  posCommand: string
  pos: 'before' | 'after'
}

type Response = boolean
```

`headerBars.getCommand`

```ts
type Request = {
  id: string
}

type Response = {
  command: HeaderBarsCommandState | null
}
```

`headerBars.listViewCommands`

```ts
type Request = undefined

type Response = HeaderBarsCommandState[]
```

`headerBars.setCommandVisible`

```ts
type Request = {
  id: string
  visible: boolean
}

type Response = undefined
```

`headerBars.setCommandDisabled`

```ts
type Request = {
  id: string
  disabled: boolean
}

type Response = undefined
```

`headerBars.setCommandCallbackEnabled`

```ts
type Request = {
  id: string
  enabled: boolean
}

type Response = undefined
```

`headerBars.setTitleDraft`

```ts
type Request = {
  title: string
}

type Response = undefined
```

`headerBars.confirmTitleChange`

```ts
type Request = {
  title: string
}

type Response = undefined
```

`headerBars.handleCommandClick`

```ts
type Request = {
  id: string
}

type Response = boolean
```

补充说明：

- `handleCommandClick` 是 iframe 主动调 SDK 的 invoke handler
- SDK 侧如果找到对应 handler，会执行后返回 `true`
- 若没有 handler，则返回 `false`

---

## 5. 事件与状态同步

### 5.1 `headerBars:changed`

当前 SDK 会监听 `headerBars:changed` 事件，并消费其中的 `snapshot` 来刷新本地状态。

payload 结构：

```ts
interface HeaderBarsChangedPayload {
  reason?: string
  commandId?: string
  version?: number
  snapshot?: {
    visible: boolean
    commands: HeaderBarsCommandState[]
  }
}
```

当前 SDK 实际使用字段：

- `snapshot.visible`
- `snapshot.commands`

当前未使用但预留字段：

- `reason`
- `commandId`
- `version`

### 5.2 状态同步路径

当前同步方式有两类：

1. 主动拉取

- `sdk.headerBars.getVisible()`
- `sdk.headerBars.listViewCommands()`
- `sdk.headerBars.getCommand(id)` 的懒拉取

2. 被动同步

- iframe 通过 `headerBars:changed` 推送整包 snapshot

---

## 6. 初始化配置

`connect(options)` 当前支持：

```ts
interface OfficeSDKOptions {
  headerBarsVisible?: boolean
}
```

含义：

- 控制 headerbar 组件初始是否展示
- `false` 表示隐藏

示例：

```ts
const sdk = await connect({
  headerBarsVisible: false
})
```

---

## 7. 使用示例

```ts
const sdk = await connect({
  headerBarsVisible: true
})

await sdk.headerBars.setVisible(true)

await sdk.headerBars.addCommand(
  {
    id: 'custom-export',
    section: 'more',
    label: 'Export',
    onClick: async () => {
      console.log('custom export clicked')
    }
  },
  'download',
  'after'
)

const command = sdk.headerBars.getCommand('custom-export')
command.visible = true
command.disabled = false

const commands = await sdk.headerBars.listViewCommands()
console.log(commands)

await sdk.headerBars.setTitleDraft('Draft Title')
await sdk.headerBars.confirmTitleChange('Final Title')
```

---

## 8. 当前限制与注意事项

- 当前没有 `removeCommand` API
- 当前没有整对象级别的 `updateCommand` API
- `getCommand(id)` 返回的是 ref，不保证远端状态已同步完成
- `getState()` 只读本地 cache，不是强一致接口
- `visible` / `disabled` / `onCommandClick` 的属性写入都是异步 side effect
- 属性 setter 失败时不会自动回滚本地状态，错误通过 SDK 的错误事件上抛
- `addCommand()` 里 `onClick` 仅用于宿主侧回调覆盖，不属于直接透传字段

---

## 9. 建议的 iframe 对齐要求

为了让当前 SDK API 行为稳定，iframe 侧建议满足以下约束：

- `headerBars:changed` 尽量携带完整 `snapshot`
- `listViewCommands()` 返回值中的 `id` 必须稳定
- `getCommand(id)` 查无结果时返回 `{ command: null }`
- `setCommandCallbackEnabled` 仅负责开启或关闭点击桥接，不负责保存 handler
- 用户点击 command 且已开启桥接时，调用 `headerBars.handleCommandClick(id)`

---

## 10. 参考源码位置

- `src/OfficeSDK.ts`
- `README.md` 中 `HeaderBars 使用说明`
- `docs/interfaces/HeaderBarsFacade.md`
- `docs/interfaces/HeaderBarsCommandDefinition.md`
- `docs/interfaces/HeaderBarsCommandRef.md`
- `docs/interfaces/HeaderBarsCommandState.md`
