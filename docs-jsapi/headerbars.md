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
| [sdk.headerBars.commandRef.active](#sdkheaderbarscommandrefactive)                 | 设置命令激活状态（PC only，`co-1.8+`）     |
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

### 全量 Command ID

当前 `HeaderBars` 中可操作的命令 id 分为两类：

- 内置 command id：由 `suite-components-header-bar` 内置定义，可用于 `getCommand(id)`、`addCommand(..., posCommand)` 等场景
- 自定义 command id：由接入方在 `addCommand()` 时自行定义

#### 内置 command id 一览

以下列表基于 `suite-components/packages/suite-components-header-bar/src/HeaderBar/types.ts`、`schema.ts` 与测试用例整理。

##### 结构类 command

| Command ID      | 说明             | 补充说明                 |
| --------------- | ---------------- | ------------------------ |
| `left-section`  | 左侧区域容器命令 | 结构占位命令             |
| `right-section` | 右侧区域容器命令 | 结构占位命令             |
| `more-menus`    | 更多菜单入口命令 | 用于承载 `more` 区域命令 |

##### 顶栏主命令

| Command ID           | 说明               | 补充说明                                            |
| -------------------- | ------------------ | --------------------------------------------------- |
| `logo`               | 品牌 Logo 命令     | 支持通过 `src` 修改图标地址                         |
| `title`              | 标题命令           | 支持 `editable`；不支持通过 `label` 修改文案        |
| `save-status`        | 保存状态命令       | 不支持通过 `label` 修改文案                         |
| `collaborators`      | 协作者命令         | 用于展示协作者头像与当前用户入口                    |
| `history`            | 历史入口命令       | 支持默认图标；可通过 `label` 改写文案               |
| `follow`             | 跟随入口命令       | 支持默认图标                                        |
| `favorite`           | 收藏命令           | 默认归属 `more` 菜单                                |
| `rename`             | 重命名命令         | 常用于文件名相关操作                                |
| `move`               | 移动命令           | 常用于文件移动操作                                  |
| `download`           | 下载入口命令       | 常用于作为 `addCommand(..., posCommand)` 的参考锚点 |
| `print`              | 打印命令           | 默认归属 `more` 菜单                                |
| `save-template`      | 另存为模板命令     | 由类型定义提供                                      |
| `save-version`       | 保存版本命令       | 默认归属 `more` 菜单                                |
| `show`               | 演示设置命令       | 可展开默认二级菜单                                  |
| `show-ppt`           | 演示入口命令       | 可展开默认二级菜单                                  |
| `add-comment`        | 添加评论命令       | 默认归属 `more` 菜单                                |
| `view-comment`       | 查看评论命令       | 默认归属 `more` 菜单                                |
| `view-history`       | 查看历史命令       | 默认归属 `more` 菜单                                |
| `view-comment-list`  | 查看评论列表命令   | 默认归属 `more` 菜单                                |
| `view-locked-sheets` | 查看锁定工作表命令 | 默认归属 `more` 菜单                                |
| `file-info`          | 文件信息命令       | 由类型定义提供                                      |
| `toggle-comments`    | 显示/隐藏评论命令  | 常作为显示设置子命令                                |
| `toggle-menu`        | 显示/隐藏菜单命令  | 可展开默认二级菜单                                  |
| `toggle-toc`         | 显示/隐藏目录命令  | 常用于通过 `active` 控制激活状态                    |
| `toggle-writer`      | 显示/隐藏作者命令  | 常作为显示设置子命令                                |

##### 下载相关子命令

| Command ID       | 说明            | 补充说明                         |
| ---------------- | --------------- | -------------------------------- |
| `down-image`     | 下载为图片      | 可由 `downloadTemplate` 自动展开 |
| `down-word`      | 下载为 Word     | 可由 `downloadTemplate` 自动展开 |
| `down-pdf`       | 下载为 PDF      | 可由 `downloadTemplate` 自动展开 |
| `down-markdown`  | 下载为 Markdown | 可由 `downloadTemplate` 自动展开 |
| `down-wps`       | 下载为 WPS      | 可由 `downloadTemplate` 自动展开 |
| `down-image-pdf` | 下载为长图 PDF  | 可由 `downloadTemplate` 自动展开 |
| `down-excel`     | 下载为 Excel    | 可由 `downloadTemplate` 自动展开 |
| `down-pptx`      | 下载为 PPTX     | 可由 `downloadTemplate` 自动展开 |
| `down-xmind`     | 下载为 XMind    | 可由 `downloadTemplate` 自动展开 |

##### 演示与显示类二级命令

| Command ID              | 说明           | 补充说明                |
| ----------------------- | -------------- | ----------------------- |
| `show-ppt-start`        | 从头开始播放   | `show-ppt` 的默认子命令 |
| `show-ppt-current`      | 从当前页播放   | `show-ppt` 的默认子命令 |
| `show-ppt-speaker-view` | 打开演讲者视图 | `show-ppt` 的默认子命令 |

##### 补充说明

- `download` 在传入 `downloadTemplate` 时，会自动展开内置下载子命令
- `show` 在 `menuContext === 'document'` 时，会默认展开 `toggle-comments`、`toggle-menu`、`toggle-writer`
- `toggle-menu` 默认会再展开 `toggle-comments`、`toggle-toc`、`toggle-writer`
- `show-ppt` 默认会展开 `show-ppt-start`、`show-ppt-current`、`show-ppt-speaker-view`

##### 示例中已出现但当前类型字面量未纳入的命令

| Command ID | 说明     | 补充说明                                                                                                |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------- |
| `share`    | 分享命令 | `README` 与测试中有使用，但当前 `HeaderBarCommandId` 类型里被注释掉，接入时建议以运行时实际支持情况为准 |

#### 自定义 command id

接入方通过 `sdk.headerBars.addCommand()` 插入命令时，`command.id` 可自定义，例如：

```typescript
await sdk.headerBars.addCommand(
  {
    id: 'custom-export',
    section: 'more',
    label: '导出'
  },
  'download'
)
```

此时：

- `custom-export` 就是接入方自定义的 command id
- 后续可通过 `sdk.headerBars.getCommand('custom-export')` 获取并更新该命令
- `download` 是内置 command id，这里仅作为插入定位锚点使用

#### 使用建议

- 需要插入自定义命令时，优先使用稳定的内置 command id 作为 `posCommand`
- 需要精确确认当前视图实际返回了哪些命令时，建议运行 `await sdk.headerBars.listViewCommands()`
- 如果 iframe 后续新增内置命令，返回结果可能比本节列出的列表更多，应以运行时返回为准

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

### sdk.headerBars.commandRef.active

#### 说明

命令激活状态属性。

#### 类型定义

```typescript
command.active: boolean
```

#### 说明补充

- getter 从本地 cache 读取当前激活状态
- setter 会先更新本地 cache，再异步触发 iframe 侧 `headerBars.setCommandActive`

#### 示例

```typescript
const sdk = await connect(options)

const command = sdk.headerBars.getCommand('toggle-toc')
command.active = true
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
  active?: boolean
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
  active: boolean
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
- `command.visible`、`command.disabled`、`command.active`、`command.src`、`command.label`、`command.editable` 的属性写入均为异步触发 iframe 更新；如需更严格状态对齐，建议结合 `listViewCommands()` 或 `getState()` 做结果确认
