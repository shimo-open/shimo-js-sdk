# Editor Facade API

## 调用方式

根级 facade 直接挂载在 `OfficeSDK` 实例上。除原有 `title` / `comments` / `history` / `presentation` 等根级能力外，当前实现还会按文件类型暴露结构化模块，例如：

- docs：`sdk.selection`、`sdk.search`、`sdk.sidebar`、`sdk.outline`、`sdk.tables`、`sdk.settings`、`sdk.batchChanges`
- sheet：`sdk.workbook`、`sdk.activeSheet`、`sdk.charts`、`sdk.batchChanges`、`sdk.print`、`sdk.export`、`sdk.setFocus`
- presentation：`sdk.slides`、`sdk.selection`、`sdk.text`、`sdk.zoom`、`sdk.eventSubscription`、`sdk.batchChanges`、`sdk.print`、`sdk.export`

对象型能力（如 range / cell / slide / textRange）通过 value-based locator 在宿主侧重建本地 facade，不直接暴露 iframe 内部对象引用。

根级 `sdk.presentation` 仍然只表示“演示模式能力”，不承载 docs / sheet / presentation 文件类型层级语义。

以下新增 API 均为 `PC only`。

## 文档映射

以下映射以 `AI 编辑器能力 API 说明.md` 以及 `docs.d.ts`、`sheet.d.ts`、`presentation.d.ts` 的命名层级为基线。宿主侧 facade 公开结构不少于文档基线；对象型子能力通过 value-based locator 回传，并在宿主侧重建本地 facade。

| 套件         | 文档 API 基线                                        | 当前 facade 模块                                                                                                     | 兼容旧入口 / iframe receiver path                                       |
| ------------ | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| docs         | `ready`                                              | `sdk.ready()`                                                                                                        | 旧 `sdk.ready()`；receiver `ready`                                      |
| docs         | `selection / selection.range`                        | `sdk.selection`、`range.getText()` 等                                                                                | 兼容旧动态 proxy；receiver `selection.*`、`selection.range.*`           |
| docs         | `settings`                                           | `sdk.settings`                                                                                                       | receiver `settings.*`                                                   |
| docs         | `comments`                                           | `sdk.comments`                                                                                                       | 旧根级 `comments`；receiver `comments.*`                                |
| docs         | `search`                                             | `sdk.search`                                                                                                         | receiver `search.*`                                                     |
| docs         | `title`                                              | `sdk.title`                                                                                                          | 旧根级 `title`；receiver `title.*`                                      |
| docs         | `outline`                                            | `sdk.outline`（兼容 `sdk.TOCs`）                                                                                     | receiver `outline.*`（兼容别名 `sdk.TOCs`）                             |
| docs         | `sidebar`                                            | `sdk.sidebar`                                                                                                        | receiver `sidebar.*`                                                    |
| docs         | `tables`                                             | `sdk.tables`                                                                                                         | receiver `tables.*`、`tables.item.*`、`tables.cell.*`、`tables.range.*` |
| docs         | `presentation`                                       | `sdk.presentation`                                                                                                   | 旧根级 `presentation`；receiver `presentation.*`                        |
| docs         | `batchChanges`                                       | `sdk.batchChanges()`                                                                                                 | receiver `batchChanges` + `editorFacade.handleCallback`                 |
| sheet        | `comments`                                           | `sdk.comments`                                                                                                       | 旧根级 `comments`；receiver `comments.*`                                |
| sheet        | `charts`                                             | `sdk.charts`                                                                                                         | receiver `charts.*`                                                     |
| sheet        | `activeSheet / activeSheet.range / activeSheet.cell` | `sdk.activeSheet`                                                                                                    | receiver `sheet.worksheet.*`、`sheet.range.*`、`sheet.cell.*`           |
| sheet        | `workbook`                                           | `sdk.workbook`                                                                                                       | receiver `workbook.*`                                                   |
| sheet        | `batchChanges`                                       | `sdk.batchChanges()`                                                                                                 | receiver `batchChanges` + `editorFacade.handleCallback`                 |
| sheet        | `print`                                              | `sdk.print()`                                                                                                        | receiver `print`                                                        |
| sheet        | `setFocus`                                           | `sdk.setFocus()`                                                                                                     | receiver `setFocus`                                                     |
| sheet        | 已承接补充                                           | `sdk.selections / sdk.history / sdk.locks / sdk.presentation / sdk.mention / sdk.content / sdk.export / sdk.version` | 旧根级 facade + receiver 对应 path                                      |
| presentation | `ready`                                              | `sdk.ready()`                                                                                                        | 旧 `sdk.ready()`；receiver `ready`                                      |
| presentation | `slides / slides.slide`                              | `sdk.slides`                                                                                                         | receiver `slides.*`、`slides.slide.*`                                   |
| presentation | `selection / selection.textRange`                    | `sdk.selection`                                                                                                      | receiver `selection.*`、`selection.textRange.*`                         |
| presentation | `text`                                               | `sdk.text`                                                                                                           | receiver `text.*`                                                       |
| presentation | `zoom`                                               | `sdk.zoom`                                                                                                           | receiver `zoom.*`                                                       |
| presentation | `comments`                                           | `sdk.comments`                                                                                                       | 旧根级 `comments`；receiver `comments.*`                                |
| presentation | `eventSubscription`                                  | `sdk.eventSubscription`                                                                                              | receiver `eventSubscription.*`                                          |
| presentation | `presentation`                                       | `sdk.presentation`                                                                                                   | 旧根级 `presentation`；receiver `presentation.*`                        |
| presentation | `export / print`                                     | `sdk.export()`、`sdk.print()`                                                                                        | receiver `export`、`print`                                              |
| presentation | `batchChanges`                                       | `sdk.batchChanges()`                                                                                                 | receiver `batchChanges` + `editorFacade.handleCallback`                 |

说明：

- 旧 `sdk.getEditor()` 扁平 API 仍然保留，用作兼容层。
- 对象型能力通过 value-based locator 回传，再由宿主重建本地 facade。
- 部分额外已承接能力，如 `history / locks / mention / content / version`，仍继续挂在根级 facade。

```typescript
const sdk = await connect(options)

await sdk.title?.setTitle('Weekly Report')
await sdk.comments?.show()
await sdk.history?.show()
await sdk.presentation?.start()
```

## 新旧兼容

旧的 `sdk.getEditor()` 调用方式仍可兼容，新增能力推荐优先使用根级 facade。

```typescript
const sdk = await connect(options)

// 旧写法
await sdk.getEditor().setTitle?.('Weekly Report')
await sdk.getEditor().showHistory?.()

// 新写法
await sdk.title?.setTitle('Weekly Report')
await sdk.history?.show()
```

## 方法列表

| 方法                                                     | 说明                         | 平台      |
| -------------------------------------------------------- | ---------------------------- | --------- |
| `sdk.title?.addChangedListener(listener)`                | 监听标题变化                 | `PC only` |
| `sdk.title?.setTitle(title)`                             | 设置标题                     | `PC only` |
| `sdk.comments?.show(type?)`                              | 显示评论                     | `PC only` |
| `sdk.comments?.hide(type?)`                              | 隐藏评论                     | `PC only` |
| `sdk.history?.show()`                                    | 显示历史                     | `PC only` |
| `sdk.history?.hide()`                                    | 隐藏历史                     | `PC only` |
| `sdk.locks?.show()`                                      | 显示锁定侧边栏               | `PC only` |
| `sdk.locks?.hide()`                                      | 隐藏锁定侧边栏               | `PC only` |
| `sdk.locks?.addRangeLock(options)`                       | 创建单元格锁定               | `PC only` |
| `sdk.locks?.addSheetLock(options)`                       | 创建工作表锁定               | `PC only` |
| `sdk.locks?.removeRangeLocksInRanges(options)`           | 删除范围锁定                 | `PC only` |
| `sdk.locks?.removeSheetLock(options)`                    | 删除工作表锁定               | `PC only` |
| `sdk.mention?.locateCellByGuid(guid, notificationType?)` | 按通知定位单元格             | `PC only` |
| `sdk.content?.setContent(content)`                       | 设置内容                     | `PC only` |
| `sdk.version?.createRevision(options?)`                  | 创建版本                     | `PC only` |
| `sdk.presentation?.start(index?)`                        | 启动演示                     | `PC only` |
| `sdk.presentation?.quit()`                               | 退出演示                     | `PC only` |
| `sdk.presentation?.startFromCurrent()`                   | 从当前页开始演示             | `PC only` |
| `sdk.presentation?.startRemoteLive()`                    | 启动远程演示                 | `PC only` |
| `sdk.presentation?.startSpeakerView()`                   | 启动演讲者视图               | `PC only` |
| `sdk.selection?.*`                                       | docs / presentation 选区能力 | `PC only` |
| `sdk.search?.*`                                          | docs 搜索与替换              | `PC only` |
| `sdk.outline?.*`                                         | docs 目录能力                | `PC only` |
| `sdk.TOCs?.*`                                            | docs 目录能力（兼容别名）    | `PC only` |
| `sdk.sidebar?.*`                                         | docs 侧边栏能力              | `PC only` |
| `sdk.tables?.*`                                          | docs 表格能力                | `PC only` |
| `sdk.settings?.*`                                        | docs 设置能力                | `PC only` |
| `sdk.workbook?.*`                                        | sheet 工作簿能力             | `PC only` |
| `sdk.activeSheet?.*`                                     | sheet 当前工作表能力         | `PC only` |
| `sdk.charts?.*`                                          | sheet 图表能力               | `PC only` |
| `sdk.selections?.*`                                      | sheet 多选区能力             | `PC only` |
| `sdk.slides?.*`                                          | presentation 幻灯片能力      | `PC only` |
| `sdk.text?.*`                                            | presentation 文本格式能力    | `PC only` |
| `sdk.zoom?.*`                                            | presentation 缩放能力        | `PC only` |
| `sdk.eventSubscription?.*`                               | presentation 事件订阅能力    | `PC only` |
| `sdk.batchChanges?.(callback)`                           | 批量变更能力                 | `PC only` |
| `sdk.print?.()`                                          | 打印能力                     | `PC only` |
| `sdk.export?.(type)`                                     | 导出能力                     | `PC only` |
| `sdk.setFocus?.(isFocus)`                                | 聚焦能力                     | `PC only` |

## 套件支持

### document

已支持：

- `sdk.title?.addChangedListener(listener)`
- `sdk.title?.setTitle(title)`
- `sdk.comments?.show(type?)`
- `sdk.comments?.hide(type?)`
- `sdk.presentation?.start(index?)`
- `sdk.selection?.*`
- `sdk.search?.*`
- `sdk.outline?.*`
- `sdk.TOCs?.*`（兼容别名）
- `sdk.sidebar?.*`
- `sdk.tables?.*`
- `sdk.settings?.*`
- `sdk.batchChanges?.(callback)`

未支持：

- `sdk.presentation?.quit()`
- `sdk.presentation?.startFromCurrent()`
- `sdk.presentation?.startRemoteLive()`
- `sdk.presentation?.startSpeakerView()`

### spread-sheet

已支持：

- `sdk.history?.show()`
- `sdk.history?.hide()`
- `sdk.comments?.show(type?)`
- `sdk.comments?.hide(type?)`
- `sdk.locks?.show()`
- `sdk.locks?.hide()`
- `sdk.locks?.addRangeLock(options)`
- `sdk.locks?.addSheetLock(options)`
- `sdk.locks?.removeRangeLocksInRanges(options)`
- `sdk.locks?.removeSheetLock(options)`
- `sdk.mention?.locateCellByGuid(guid, notificationType?)`
- `sdk.content?.setContent(content)`
- `sdk.version?.createRevision(options?)`
- `sdk.presentation?.start(index?)`
- `sdk.presentation?.quit()`
- `sdk.workbook?.*`
- `sdk.activeSheet?.*`
- `sdk.charts?.*`
- `sdk.selections?.*`
- `sdk.batchChanges?.(callback)`
- `sdk.print?.()`
- `sdk.export?.(type)`
- `sdk.setFocus?.(isFocus)`

说明：

- `sdk.presentation?.start(index?)` 当前表格侧按无参启动演示处理，不承诺 `index` 生效

### presentation

已支持：

- `sdk.history?.show()`
- `sdk.history?.hide()`
- `sdk.comments?.show(type?)`
- `sdk.comments?.hide(type?)`
- `sdk.version?.createRevision(options?)`
- `sdk.presentation?.start(index?)`
- `sdk.presentation?.quit()`
- `sdk.presentation?.startFromCurrent()`
- `sdk.presentation?.startSpeakerView()`
- `sdk.slides?.*`
- `sdk.selection?.*`
- `sdk.text?.*`
- `sdk.zoom?.*`
- `sdk.eventSubscription?.*`
- `sdk.batchChanges?.(callback)`
- `sdk.print?.()`
- `sdk.export?.(type)`

未支持：

- `sdk.presentation?.startRemoteLive()`
