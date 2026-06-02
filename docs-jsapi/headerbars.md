# API

## HeaderBars

`HeaderBars` 用于控制编辑器顶部栏的显示状态，以及对顶部栏命令进行插入、查询和局部更新。

它适用于以下场景：

- 统一控制顶部栏显示 / 隐藏
- 在现有命令前后插入自定义按钮
- 动态更新命令的显示状态、禁用状态、图标和文案
- 监听标题变化，并将宿主侧逻辑与顶部栏联动

### 界面示意

![image.png](https://api.apifox.com/api/v1/projects/6748269/resources/660638/image-preview)

上图为 `HeaderBars` 的典型效果示意。接入方可以基于根级 `sdk.headerBars`：

- 控制整个顶部栏显示状态
- 插入自定义命令
- 获取指定命令引用，并继续修改其状态

## 方法

### 方法列表

以下 `headerBars` API 使用 `OfficeSDK` 根级 `sdk.headerBars` 调用，均为 `PC only`，并且需 `co-1.8+`。

| 方法                                                                               | 说明                                       |
| ---------------------------------------------------------------------------------- | ------------------------------------------ |
| [sdk.headerBars.visible](#sdkheaderbarsvisible)                                    | 顶栏显示状态（PC only，`co-1.8+`）         |
| [sdk.headerBars.onTitleChange](#sdkheaderbarsontitlechange)                        | 标题变更监听（PC only，`co-1.8+`）         |
| [sdk.headerBars.getVisible](#sdkheaderbarsgetvisible)                              | 获取顶栏显示状态（PC only，`co-1.8+`）     |
| [sdk.headerBars.setVisible](#sdkheaderbarssetvisiblevisible)                       | 设置顶栏显示状态（PC only，`co-1.8+`）     |
| [sdk.headerBars.addCommand](#sdkheaderbarsaddcommandcommand-poscommand-pos)        | 插入顶栏命令（PC only，`co-1.8+`）         |
| [sdk.headerBars.getCommand](#sdkheaderbarsgetcommandid)                            | 获取命令引用（PC only，`co-1.8+`）         |
| [sdk.headerBars.listViewCommands](#sdkheaderbarslistviewcommands)                  | 获取当前顶栏命令列表（PC only，`co-1.8+`） |
| [sdk.headerBars.commandRef.visible](#sdkheaderbarscommandrefvisible)               | 设置命令显示状态（PC only，`co-1.8+`）     |
| [sdk.headerBars.commandRef.disabled](#sdkheaderbarscommandrefdisabled)             | 设置命令禁用状态（PC only，`co-1.8+`）     |
| [sdk.headerBars.commandRef.src](#sdkheaderbarscommandrefsrc)                       | 设置命令图标地址（PC only，`co-1.8+`）     |
| [sdk.headerBars.commandRef.label](#sdkheaderbarscommandreflabel)                   | 设置命令文案（PC only，`co-1.8+`）         |
| [sdk.headerBars.commandRef.editable](#sdkheaderbarscommandrefeditable)             | 设置命令可编辑状态（PC only，`co-1.8+`）   |
| [sdk.headerBars.commandRef.onCommandClick](#sdkheaderbarscommandrefoncommandclick) | 设置命令点击回调（PC only，`co-1.8+`）     |
| [sdk.headerBars.commandRef.getState](#sdkheaderbarscommandrefgetstate)             | 获取命令当前状态（PC only，`co-1.8+`）     |

### 能力概览

`sdk.headerBars` 主要提供两层能力：

- 顶栏级能力：控制整个顶部栏的显示状态，以及监听标题变化
- 命令级能力：插入命令、获取命令引用，并更新命令属性

可以简单理解为：

- `sdk.headerBars.*`：控制整个顶部栏
- `sdk.headerBars.getCommand(id)` 返回的 `commandRef`：控制单个命令

### API 调用方式

```typescript
const sdk = await connect(options)

await sdk.headerBars.setVisible(true)

await sdk.headerBars.addCommand(
  {
    id: 'custom-export',
    section: 'more',
    label: '导出',
    visible: true,
    onClick: async () => {
      console.log('custom-export clicked')
    }
  },
  'download'
)

const command = sdk.headerBars.getCommand('custom-export')
command.visible = true
command.disabled = false
```

### 使用流程

典型接入流程如下：

1. 通过 `connect(options)` 获取 `sdk`
2. 使用 `sdk.headerBars.setVisible(...)` 控制顶栏整体显示状态
3. 使用 `sdk.headerBars.addCommand(...)` 插入自定义命令
4. 使用 `sdk.headerBars.getCommand(id)` 获取命令引用
5. 通过 `commandRef.visible / disabled / label / src / editable / onCommandClick` 调整命令行为

如果需要获取当前顶栏实际命令列表，可再调用：

- `sdk.headerBars.listViewCommands()`

### 新旧兼容

```typescript
const sdk = await connect(options)

// headerBars 为根级新增 API
await sdk.headerBars.setVisible(true)
const command = sdk.headerBars.getCommand('custom-export')
command.onCommandClick = async () => {
  console.log('clicked')
}
```

### 适用说明

`headerBars` 与各套件中的正文能力不同，它不属于 `sdk.getEditor()` 的旧扁平 API 分组，而是直接挂在 `OfficeSDK` 根级实例上的公共扩展能力：

```typescript
const sdk = await connect(options)

// 推荐写法
await sdk.headerBars.setVisible(true)
```

### sdk.headerBars.visible

#### 说明

顶栏显示状态属性。

#### 类型定义

```typescript
sdk.headerBars.visible: boolean
```

#### 说明补充

- 读取时返回 SDK 本地缓存的显示状态
- 写入时会异步触发 `sdk.headerBars.setVisible(visible)`
- 如果业务需要等待 iframe 侧完成更新，优先使用 `await sdk.headerBars.setVisible(...)`

#### 示例

```typescript
const sdk = await connect(options)

sdk.headerBars.visible = false
sdk.headerBars.visible = true
```

---

### sdk.headerBars.onTitleChange

#### 说明

监听顶栏标题变化。

#### 类型定义

```typescript
sdk.headerBars.onTitleChange?: HeaderBarsTitleChangeHandler
```

#### 相关类型

- [HeaderBarsTitleChangeHandler](#headerbarstitlechangehandler)

#### 示例

```typescript
const sdk = await connect(options)

sdk.headerBars.onTitleChange = (title) => {
  console.log('title changed:', title)
}
```

---

### sdk.headerBars.getVisible()

#### 说明

获取顶栏当前显示状态。

#### 类型定义

```typescript
sdk.headerBars.getVisible(): Promise<boolean>
```

#### 示例

```typescript
const sdk = await connect(options)

const visible = await sdk.headerBars.getVisible()
console.log(visible)
```

---

### sdk.headerBars.setVisible(visible)

#### 说明

设置顶栏显示状态。

#### 类型定义

```typescript
sdk.headerBars.setVisible(visible: boolean): Promise<void>
```

#### 参数

- `visible`: 目标显示状态

#### 示例

```typescript
const sdk = await connect(options)

await sdk.headerBars.setVisible(true)
await sdk.headerBars.setVisible(false)
```

---

### sdk.headerBars.addCommand(command, posCommand, pos?)

#### 说明

向顶栏插入一个命令。通常用于在现有命令前后增加接入方自定义操作。

#### 类型定义

```typescript
sdk.headerBars.addCommand(
  command: HeaderBarsCommandDefinition,
  posCommand: string,
  pos?: HeaderBarsCommandInsertPosition
): Promise<boolean>
```

#### 参数

- `command`: 待插入的命令定义
- `posCommand`: 参考命令 id
- `pos`: 插入位置，默认 `after`

#### 返回值

- `boolean`：是否插入成功

#### 相关类型

- [HeaderBarsCommandDefinition](#headerbarscommanddefinition)
- [HeaderBarsCommandInsertPosition](#headerbarscommandinsertposition)

#### 示例

```typescript
const sdk = await connect(options)

await sdk.headerBars.addCommand(
  {
    id: 'custom-export',
    section: 'more',
    label: '导出',
    visible: true,
    onClick: async () => {
      console.log('custom-export clicked')
    }
  },
  'download',
  'after'
)
```

---

### sdk.headerBars.getCommand(id)

#### 说明

获取一个命令引用对象。获取后可以继续通过属性方式更新该命令状态。

#### 类型定义

```typescript
sdk.headerBars.getCommand(id: string): HeaderBarsCommandRef
```

#### 参数

- `id`: 命令 id

#### 返回值

- `HeaderBarsCommandRef`：命令引用对象

#### 相关类型

- [HeaderBarsCommandRef](#headerbarscommandref)

#### 示例

```typescript
const sdk = await connect(options)

const command = sdk.headerBars.getCommand('custom-export')
console.log(command.id)
```

---

### sdk.headerBars.listViewCommands()

#### 说明

获取当前顶栏命令列表，并刷新本地缓存。适合在批量更新后重新获取最新视图状态。

#### 类型定义

```typescript
sdk.headerBars.listViewCommands(): Promise<HeaderBarsCommandState[]>
```

#### 返回值

- `HeaderBarsCommandState[]`：当前视图中的命令列表

#### 相关类型

- [HeaderBarsCommandState](#headerbarscommandstate)

#### 示例

```typescript
const sdk = await connect(options)

const commands = await sdk.headerBars.listViewCommands()
console.log(commands)
```

---

### sdk.headerBars.commandRef.visible

#### 说明

命令显示状态属性。

#### 类型定义

```typescript
command.visible: boolean
```

#### 说明补充

- 写入时会先更新本地缓存，再异步调用 iframe 侧更新

#### 示例

```typescript
const sdk = await connect(options)

const command = sdk.headerBars.getCommand('custom-export')
command.visible = true
```

---

### sdk.headerBars.commandRef.disabled

#### 说明

命令禁用状态属性。

#### 类型定义

```typescript
command.disabled: boolean
```

#### 说明补充

- 写入时会先更新本地缓存，再异步调用 iframe 侧更新

#### 示例

```typescript
const sdk = await connect(options)

const command = sdk.headerBars.getCommand('custom-export')
command.disabled = false
```

---

### sdk.headerBars.commandRef.src

#### 说明

命令图标地址属性。

#### 类型定义

```typescript
command.src?: string
```

#### 说明补充

- 仅当赋值为字符串时才会触发更新

#### 示例

```typescript
const sdk = await connect(options)

const command = sdk.headerBars.getCommand('logo')
command.src = 'https://cdn.example.com/logo.png'
```

---

### sdk.headerBars.commandRef.label

#### 说明

命令文案属性。

#### 类型定义

```typescript
command.label?: string
```

#### 说明补充

- 仅当赋值为字符串时才会触发更新
- `title`、`save-status` 命令不支持通过此属性修改文案

#### 示例

```typescript
const sdk = await connect(options)

const command = sdk.headerBars.getCommand('history')
command.label = '历史记录'
```

---

### sdk.headerBars.commandRef.editable

#### 说明

命令可编辑状态属性。

#### 类型定义

```typescript
command.editable?: boolean
```

#### 说明补充

- 当前仅 `title` 命令支持设置 `editable`

#### 示例

```typescript
const sdk = await connect(options)

const titleCommand = sdk.headerBars.getCommand('title')
titleCommand.editable = true
```

---

### sdk.headerBars.commandRef.onCommandClick

#### 说明

命令点击回调属性。

#### 类型定义

```typescript
command.onCommandClick?: () => void | Promise<void>
```

#### 说明补充

- 赋值后会启用宿主侧点击回调桥接
- 当 iframe 侧触发该命令点击时，SDK 会在宿主侧执行此回调

#### 示例

```typescript
const sdk = await connect(options)

const command = sdk.headerBars.getCommand('custom-export')
command.onCommandClick = async () => {
  console.log('custom-export clicked')
}
```

---

### sdk.headerBars.commandRef.getState()

#### 说明

获取命令当前缓存状态。

#### 类型定义

```typescript
command.getState(): HeaderBarsCommandState | undefined
```

#### 返回值

- `HeaderBarsCommandState | undefined`：当前命令状态；若本地尚未拉取到命令，可能返回 `undefined`

#### 相关类型

- [HeaderBarsCommandState](#headerbarscommandstate)

#### 示例

```typescript
const sdk = await connect(options)

const command = sdk.headerBars.getCommand('custom-export')
console.log(command.getState())
```

---

## 类型定义

### HeaderBarsTitleChangeHandler

```typescript
type HeaderBarsTitleChangeHandler = (title: string) => void | Promise<void>
```

### HeaderBarsCommandType

```typescript
type HeaderBarsCommandType = 'action' | 'structural'
```

### HeaderBarsCommandInsertPosition

```typescript
type HeaderBarsCommandInsertPosition = 'before' | 'after'
```

### HeaderBarsCommandDefinition

```typescript
interface HeaderBarsCommandDefinition {
  id: string
  section?: string
  order?: number
  label?: string
  visible?: boolean
  disabled?: boolean
  editable?: boolean
  type?: HeaderBarsCommandType
  renderType?: string
  src?: string
  onClick?: () => void | Promise<void>
}
```

用于定义插入到顶部栏中的命令初始状态。

### HeaderBarsCommandState

```typescript
interface HeaderBarsCommandState extends HeaderBarsCommandDefinition {
  type: HeaderBarsCommandType
}
```

表示顶部栏中某个命令的当前状态快照。

### HeaderBarsCommandRef

```typescript
interface HeaderBarsCommandRef {
  readonly id: string
  visible: boolean
  disabled: boolean
  src?: string
  label?: string
  editable?: boolean
  onCommandClick?: () => void | Promise<void>
  getState: () => HeaderBarsCommandState | undefined
}
```

表示通过 `sdk.headerBars.getCommand(id)` 获取到的命令引用对象，可继续对单个命令做局部更新。

### HeaderBarsChangedPayload

```typescript
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

---

## 注意事项

- 本页仅描述根级 `sdk.headerBars` 的调用方式
- 本页新增接口均为 `PC only`
- 本页新增接口均需 `co-1.8+`
- `sdk.headerBars` 不属于 `sdk.getEditor()` 的旧扁平方法分组
- `command.label` 当前不支持修改 `title`、`save-status`
- `command.editable` 当前仅支持 `title`
- `command.visible`、`command.disabled`、`command.src`、`command.label`、`command.editable` 的属性写入均为异步触发 iframe 更新；如需更严格状态对齐，建议结合 `listViewCommands()` 或 `getState()` 做结果确认
