# API

## 方法

### 方法列表

| 方法                                                                         | 说明                                           |
| ---------------------------------------------------------------------------- | ---------------------------------------------- |
| [sdk.title.addChangedListener](#sdktitleaddchangedlistenerlistener)          | 监听标题变化（PC only，`co-1.8+`）             |
| [sdk.title.setTitle](#sdktitlesettitletitle)                                 | 设置标题（PC only，`co-1.8+`）                 |
| [sdk.branding.getEditorFooterLogo](#sdkbrandinggeteditorfooterlogo)          | 获取编辑器底栏 Logo 配置（PC only，`co-1.8+`） |
| [sdk.branding.setEditorFooterLogoSrc](#sdkbrandingseteditorfooterlogosrcsrc) | 设置编辑器底栏 Logo（PC only，`co-1.8+`）      |
| [sdk.history.show](#sdkhistoryshow)                                          | 显示历史（PC only，`co-1.8+`）                 |
| [sdk.history.hide](#sdkhistoryhide)                                          | 隐藏历史（PC only，`co-1.8+`）                 |
| [sdk.comments.show](#sdkcommentsshowtype)                                    | 显示评论（PC only，`co-1.8+`）                 |
| [sdk.comments.hide](#sdkcommentshidetype)                                    | 隐藏评论（PC only，`co-1.8+`）                 |
| [sdk.discussion.show](#sdkdiscussionshow)                                    | 显示讨论（PC only，`co-1.8+`）                 |
| [sdk.discussion.hide](#sdkdiscussionhide)                                    | 隐藏讨论（PC only，`co-1.8+`）                 |
| [sdk.version](#sdkversion)                                                   | 版本能力（PC only，`co-1.8+`）                 |
| [sdk.presentation.start](#sdkpresentationstartindex)                         | 启动演示（PC only，`co-1.8+`）                 |
| [sdk.selection](#sdkselection)                                               | 选区能力（PC only，`co-1.8+`）                 |
| [range: DocsRangeFacade](#sdkselectionrange)                                 | 选区范围对象能力（PC only，`co-1.8+`）         |
| [sdk.search](#sdksearch)                                                     | 搜索与替换（PC only，`co-1.8+`）               |
| [sdk.outline](#sdkoutline)                                                   | 目录能力（PC only，`co-1.8+`）                 |
| [sdk.sidebar](#sdksidebar)                                                   | 侧边栏能力（PC only，`co-1.8+`）               |
| [sdk.collaborator.show](#sdkcollaboratorshow)                                | 显示编写者信息（PC only，`co-1.8+`）           |
| [sdk.collaborator.hide](#sdkcollaboratorhide)                                | 隐藏编写者信息（PC only，`co-1.8+`）           |
| [sdk.externalApp.insert](#sdkexternalappinserturl-params)                    | 插入第三方应用（PC only，`co-1.8+`）           |
| [sdk.tables](#sdktables)                                                     | 表格集合能力（PC only，`co-1.8+`）             |
| [table: DocsTableFacade](#sdktablesitem)                                     | 单个表格对象能力（PC only，`co-1.8+`）         |
| [cell: DocsTableCellFacade](#sdktablescell)                                  | 表格单元格对象能力（PC only，`co-1.8+`）       |
| [range: DocsTableRangeFacade](#sdktablesrange)                               | 表格范围对象能力（PC only，`co-1.8+`）         |
| [sdk.settings](#sdksettings)                                                 | 文档设置能力（PC only，`co-1.8+`）             |
| [sdk.batchChanges](#sdkbatchchangescallback)                                 | 批量变更（PC only，`co-1.8+`）                 |
| [sdk.print](#sdkprint)                                                       | 打印（PC only，`co-1.8+`）                     |

### API 调用方式

```typescript
const sdk = await connect(options)

await sdk.title?.setTitle('Weekly Report')
await sdk.comments?.show('list')
await sdk.branding.setEditorFooterLogoSrc('https://cdn.example.com/brand.svg')
const range = await sdk.selection?.getRange()
await range?.setText('Hello')
```

### 新旧兼容

```typescript
const sdk = await connect(options)

// 旧写法
await sdk.getEditor().setTitle?.('Weekly Report')

// 新写法
await sdk.title?.setTitle('Weekly Report')
```

### 旧方法兼容

以下旧方法调用方式继续保留说明；如存在根级 facade，优先使用新写法。

| 旧方法                                            | 说明           | 推荐新写法                              |
| ------------------------------------------------- | -------------- | --------------------------------------- |
| `sdk.getEditor().setTitle(title)`                 | 设置文档标题   | `sdk.title?.setTitle(title)`            |
| `sdk.getEditor().showComments()`                  | 显示评论侧边栏 | `sdk.comments?.show()`                  |
| `sdk.getEditor().hideComments()`                  | 隐藏评论侧边栏 | `sdk.comments?.hide()`                  |
| `sdk.getEditor().startDemonstration()`            | 启动演示       | `sdk.presentation?.start(index?)`       |
| `sdk.getEditor().showHistory()`                   | 显示历史侧边栏 | `sdk.history?.show()`                   |
| `sdk.getEditor().hideHistory()`                   | 隐藏历史侧边栏 | `sdk.history?.hide()`                   |
| `sdk.getEditor().showRevision()`                  | 显示版本侧边栏 | `sdk.version?.show?.()`                 |
| `sdk.getEditor().hideRevision()`                  | 隐藏版本侧边栏 | `sdk.version?.hide?.()`                 |
| `sdk.getEditor().showDiscussion()`                | 显示讨论侧边栏 | `sdk.discussion?.show()`                |
| `sdk.getEditor().hideDiscussion()`                | 隐藏讨论侧边栏 | `sdk.discussion?.hide()`                |
| `sdk.getEditor().showToc()`                       | 显示目录       | `sdk.outline?.show()`                   |
| `sdk.getEditor().hideToc()`                       | 隐藏目录       | `sdk.outline?.hide()`                   |
| `sdk.getEditor().createRevision(options?)`        | 创建版本       | `sdk.version?.createRevision(options?)` |
| `sdk.getEditor().endDemonstration()`              | 退出演示       | `sdk.presentation?.quit()`              |
| `sdk.getEditor().print()`                         | 打印           | `sdk.print?.()`                         |
| `sdk.getEditor().showCollaborator()`              | 显示编写者信息 | `sdk.collaborator?.show()`              |
| `sdk.getEditor().hideCollaborator()`              | 隐藏编写者信息 | `sdk.collaborator?.hide()`              |
| `sdk.getEditor().insertExternalApp(url, params?)` | 插入第三方应用 | `sdk.externalApp?.insert(url, params?)` |

### 新增 API 方法

以下方法为本次补充的根级 API 调用方式。

### sdk.branding.getEditorFooterLogo()

#### 说明

获取当前编辑器底栏 Logo 的品牌配置。当前没有可用配置时返回 `undefined`。

#### 类型定义

```typescript
sdk.branding.getEditorFooterLogo(): Promise<SDKBrandConfig | undefined>
```

#### 相关类型

- [SDKBrandConfig](#sdkbrandconfig)
- [SDKBrandMode](#sdkbrandmode)
- [SDKBrandSource](#sdkbrandsource)

---

### sdk.branding.setEditorFooterLogoSrc(src)

#### 说明

设置当前编辑器底栏 Logo 的图片地址。Logo 自定义权限由 iframe 的 checkpoint mode 校验。

#### 类型定义

```typescript
sdk.branding.setEditorFooterLogoSrc(src: string): Promise<void>
```

#### 参数

- `src`: 新的 Logo 图片地址

#### 返回值

- `Promise<void>`：设置成功后完成；如果 iframe 拒绝修改或调用失败，Promise 会被拒绝

---

### sdk.title.addChangedListener(listener)

#### 说明

监听文档标题变化。

#### 类型定义

```typescript
sdk.title?.addChangedListener(
  listener: (title: string) => void
): (() => void) | undefined
```

#### 参数

- `listener`: 标题变化时触发的回调函数

#### 返回值

- `() => void`：取消监听函数

---

### sdk.title.setTitle(title)

#### 说明

设置当前文档标题。

#### 类型定义

```typescript
sdk.title?.setTitle(title: string): Promise<void>
```

#### 参数

- `title`: 要设置的新标题

---

### sdk.history.show()

#### 说明

显示文档历史侧边栏。

#### 类型定义

```typescript
sdk.history?.show(): Promise<void>
```

---

### sdk.history.hide()

#### 说明

隐藏文档历史侧边栏。

#### 类型定义

```typescript
sdk.history?.hide(): Promise<void>
```

---

### sdk.comments.show(type?)

#### 说明

显示评论能力入口。

#### 类型定义

```typescript
sdk.comments?.show(type?: 'list' | 'card'): Promise<void>
```

#### 参数

- `type`: 可选的评论展示类型

---

### sdk.comments.hide(type?)

#### 说明

隐藏评论能力入口。

#### 类型定义

```typescript
sdk.comments?.hide(type?: 'list' | 'card'): Promise<void>
```

#### 参数

- `type`: 可选的评论展示类型

---

### sdk.discussion.show()

#### 说明

显示文档讨论侧边栏。

#### 类型定义

```typescript
sdk.discussion?.show(): Promise<void>
```

---

### sdk.discussion.hide()

#### 说明

隐藏文档讨论侧边栏。

#### 类型定义

```typescript
sdk.discussion?.hide(): Promise<void>
```

---

### sdk.version

#### 说明

文档版本能力。

#### 类型定义

```typescript
sdk.version?.show?.(): Promise<void>
sdk.version?.hide?.(): Promise<void>
sdk.version?.createRevision(
  options?: RevisionCreateOptions
): Promise<void | null | DocumentErrorMessage>
```

#### 相关类型

- [RevisionCreateOptions](#revisioncreateoptions)
- [DocumentErrorMessage](#documenterrormessage)

---

### sdk.presentation.start(index?)

#### 说明

启动文档演示模式。

#### 类型定义

```typescript
sdk.presentation?.start(index?: number): Promise<void>
```

#### 参数

- `index`: 可选的起始位置参数

---

### sdk.presentation.quit()

#### 说明

退出文档演示模式。

#### 类型定义

```typescript
sdk.presentation?.quit(): Promise<void>
```

---

### sdk.selection

#### 说明

文档选区能力。

#### 类型定义

```typescript
sdk.selection?.getRange(value?: DocsRangeValue): Promise<DocsRangeFacade | null>
sdk.selection?.setRange(value: DocsRangeValue | null): Promise<void>
sdk.selection?.addRangeListener(
  listener: (value: DocsRangeValue | null) => void
): (() => void) | undefined
sdk.selection?.getWholeRange(): Promise<DocsRangeFacade | null>
sdk.selection?.insertText(text: string): Promise<DocsRangeValue>
sdk.selection?.insertHtml(html: string): Promise<DocsRangeValue>
sdk.selection?.insertTable(
  rowCount: number,
  columnCount: number
): Promise<{ tableId: string }>
sdk.selection?.insertCodeBlock(options?: DocsCodeBlockInsertOptions): Promise<void>
```

#### 相关类型

- [DocsRangeValue](#docsrangevalue)
- [DocsRangeFacade](#docsrangefacade)
- [DocsCodeBlockInsertOptions](#docscodeblockinsertoptions)

#### 示例

```typescript
const sdk = await connect(options)

const range = await sdk.selection?.getRange()
await sdk.selection?.insertText('Hello')
```

---

<h3 id="sdkselectionrange">range: DocsRangeFacade</h3>

#### 说明

通过 `const range = await sdk.selection?.getRange()` 或 `const range = await sdk.selection?.getWholeRange()` 获取 `range: DocsRangeFacade`，再调用其上的实例 API。

#### API 一览表

| API                                                                                                           | 说明         |
| ------------------------------------------------------------------------------------------------------------- | ------------ |
| `range.start: number`                                                                                         | 起始位置     |
| `range.end: number`                                                                                           | 结束位置     |
| `range.isCaret: boolean`                                                                                      | 是否为光标   |
| `range.getText(): Promise<string>`                                                                            | 获取文本     |
| `range.getHtml(): Promise<string>`                                                                            | 获取 HTML    |
| `range.setText(text: string): Promise<void>`                                                                  | 设置文本     |
| `range.setHtml(html: string): Promise<void>`                                                                  | 设置 HTML    |
| `range.getBounding(): Promise<DocsRangeBounding \| null>`                                                     | 获取选区位置 |
| `range.setStyle(style: DocsTextStyle): Promise<void>`                                                         | 设置文本样式 |
| `range.continueWriting(content: string, type: DocsContinueWritingType, abort?: () => void): Promise<boolean>` | 续写内容     |
| `range.setListStyle(style: DocsListStyle): Promise<void>`                                                     | 设置列表样式 |
| `range.insertLink(href: string, text: string, viewType: 'link' \| 'card' \| 'preview'): Promise<void>`        | 插入链接     |
| `range.insertImage(data: File \| string): Promise<void>`                                                      | 插入图片     |
| `range.insertAttachment(data: File, viewType: 'link' \| 'card' \| 'preview'): Promise<void>`                  | 插入附件     |
| `range.setParagraphType(type: DocsParagraphType): Promise<void>`                                              | 设置段落类型 |
| `range.clearStyle(): Promise<void>`                                                                           | 清除样式     |
| `range.clearContent(): Promise<void>`                                                                         | 清除内容     |
| `range.clearAll(): Promise<void>`                                                                             | 清除全部     |
| `range.insertHorizontalRule(): Promise<void>`                                                                 | 插入分割线   |
| `range.insertQuote(): Promise<void>`                                                                          | 插入引用     |

#### 逐条类型定义

#### range.start

```typescript
range.start: number
```

功能说明：表示当前选区的起始位置。

#### range.end

```typescript
range.end: number
```

功能说明：表示当前选区的结束位置。

#### range.isCaret

```typescript
range.isCaret: boolean
```

功能说明：表示当前选区是否为单一光标位置。

#### range.getText()

```typescript
range.getText(): Promise<string>
```

功能说明：获取当前选区内的纯文本内容。

#### range.getHtml()

```typescript
range.getHtml(): Promise<string>
```

功能说明：获取当前选区内的 HTML 内容。

#### range.setText(text)

```typescript
range.setText(text: string): Promise<void>
```

功能说明：将当前选区内容替换为指定文本。

#### range.setHtml(html)

```typescript
range.setHtml(html: string): Promise<void>
```

功能说明：将当前选区内容替换为指定 HTML。

#### range.getBounding()

```typescript
range.getBounding(): Promise<DocsRangeBounding | null>
```

功能说明：获取当前选区在页面中的位置信息。

#### range.setStyle(style)

```typescript
range.setStyle(style: DocsTextStyle): Promise<void>
```

功能说明：为当前选区应用文本样式。

#### range.continueWriting(content, type, abort?)

```typescript
range.continueWriting(
  content: string,
  type: DocsContinueWritingType,
  abort?: () => void
): Promise<boolean>
```

功能说明：基于给定内容和续写类型继续生成内容。

#### range.setListStyle(style)

```typescript
range.setListStyle(style: DocsListStyle): Promise<void>
```

功能说明：设置当前选区的列表样式。

#### range.insertLink(href, text, viewType)

```typescript
range.insertLink(
  href: string,
  text: string,
  viewType: 'link' | 'card' | 'preview'
): Promise<void>
```

功能说明：在当前选区插入链接内容。

#### range.insertImage(data)

```typescript
range.insertImage(data: File | string): Promise<void>
```

功能说明：在当前选区插入图片。

#### range.insertAttachment(data, viewType)

```typescript
range.insertAttachment(
  data: File,
  viewType: 'link' | 'card' | 'preview'
): Promise<void>
```

功能说明：在当前选区插入附件。

#### range.setParagraphType(type)

```typescript
range.setParagraphType(type: DocsParagraphType): Promise<void>
```

功能说明：设置当前选区所在段落的类型。

#### range.clearStyle()

```typescript
range.clearStyle(): Promise<void>
```

功能说明：清除当前选区的样式。

#### range.clearContent()

```typescript
range.clearContent(): Promise<void>
```

功能说明：清除当前选区的内容。

#### range.clearAll()

```typescript
range.clearAll(): Promise<void>
```

功能说明：清除当前选区的内容和样式。

#### range.insertHorizontalRule()

```typescript
range.insertHorizontalRule(): Promise<void>
```

功能说明：在当前选区插入分割线。

#### range.insertQuote()

```typescript
range.insertQuote(): Promise<void>
```

功能说明：在当前选区插入引用块。

#### 相关类型

- [DocsRangeBounding](#docsrangebounding)
- [DocsTextStyle](#docstextstyle)
- [DocsContinueWritingType](#docscontinuewritingtype)
- [DocsListStyle](#docsliststyle)
- [DocsParagraphType](#docsparagraphtype)

#### 示例

```typescript
const sdk = await connect(options)

const range = await sdk.selection?.getWholeRange()
console.log(await range?.getText())
await range?.setText('Updated text')
```

---

### sdk.search

#### 说明

搜索与替换能力。

#### 类型定义

```typescript
sdk.search?.findOne(params: DocsSearchParams): Promise<DocsSearchResult | null>
sdk.search?.findAll(params: DocsSearchParams): Promise<DocsSearchResult[] | null>
sdk.search?.replaceOne(
  id: string,
  params: DocsReplaceParams
): Promise<DocsReplaceResult | null>
sdk.search?.replaceAll(params: DocsReplaceParams): Promise<void>
sdk.search?.clear(): Promise<void>
```

#### 相关类型

- [DocsSearchParams](#docssearchparams)
- [DocsSearchResult](#docssearchresult)
- [DocsReplaceParams](#docsreplaceparams)
- [DocsReplaceResult](#docsreplaceresult)

---

### sdk.outline

#### 说明

文档目录能力。

#### 类型定义

```typescript
sdk.outline?.getOpen(): Promise<boolean>
sdk.outline?.show(): Promise<void>
sdk.outline?.hide(): Promise<void>
sdk.outline?.setOpen(isOpen: boolean): Promise<void>
sdk.outline?.getAll(): Promise<DocsTOCItem[]>
sdk.outline?.getOne(id: string): Promise<DocsTOCItem | null>
sdk.outline?.deleteAll(): Promise<boolean>
sdk.outline?.deleteOne(id: string): Promise<boolean>
sdk.outline?.add(item: Omit<DocsTOCItem, 'id'>): Promise<boolean>
```

#### 相关类型

- [DocsTOCItem](#docstocitem)

---

### sdk.sidebar

#### 说明

文档侧边栏能力。

#### 类型定义

```typescript
sdk.sidebar?.show(tab?: string): Promise<void>
sdk.sidebar?.close(): Promise<void>
sdk.sidebar?.getState(): Promise<DocsSidebarState>
```

#### 相关类型

- [DocsSidebarState](#docssidebarstate)

---

### sdk.collaborator.show()

#### 说明

显示编写者信息侧边栏。

#### 类型定义

```typescript
sdk.collaborator?.show(): Promise<void>
```

---

### sdk.collaborator.hide()

#### 说明

隐藏编写者信息侧边栏。

#### 类型定义

```typescript
sdk.collaborator?.hide(): Promise<void>
```

---

### sdk.externalApp.insert(url, params?)

#### 说明

向文档中插入第三方应用。

#### 类型定义

```typescript
sdk.externalApp?.insert(
  url: string,
  params?: ExternalAppParams
): Promise<null | DocumentErrorMessage>
```

#### 参数

- `url`: 第三方应用地址
- `params`: 可选的应用展示参数

#### 相关类型

- [ExternalAppParams](#externalappparams)
- [DocumentErrorMessage](#documenterrormessage)

---

### sdk.tables

#### 说明

文档内表格集合能力。

#### 类型定义

```typescript
sdk.tables?.getAll(): Promise<DocsTableFacade[]>
sdk.tables?.getOne(tableId: string): Promise<DocsTableFacade | null>
sdk.tables?.deleteOne(tableId: string): Promise<boolean>
```

#### 相关类型

- [DocsTableFacade](#docstablefacade)

#### 示例

```typescript
const sdk = await connect(options)

const tables = await sdk.tables?.getAll()
const table = await sdk.tables?.getOne('table-id')
```

---

<h3 id="sdktablesitem">table: DocsTableFacade</h3>

#### 说明

先通过 `const table = await sdk.tables?.getOne(tableId)` 或 `const tables = await sdk.tables?.getAll()` 获取 `table: DocsTableFacade`，再调用其上的实例 API。

#### API 一览表

| API                                                                                                 | 说明       |
| --------------------------------------------------------------------------------------------------- | ---------- |
| `table.tableId: string`                                                                             | 表格 ID    |
| `table.insertRows(index: number, count: number, placement?: 'before' \| 'after'): Promise<void>`    | 插入行     |
| `table.insertColumns(index: number, count: number, placement?: 'before' \| 'after'): Promise<void>` | 插入列     |
| `table.deleteRows(index: number, count: number): Promise<void>`                                     | 删除行     |
| `table.deleteColumns(index: number, count: number): Promise<void>`                                  | 删除列     |
| `table.setRowHeight(index: number, height: number): Promise<void>`                                  | 设置行高   |
| `table.setColumnWidth(index: number, width: number): Promise<void>`                                 | 设置列宽   |
| `table.setFullscreen(status: boolean): Promise<void>`                                               | 设置全屏   |
| `table.getCell(row: number, column: number): Promise<DocsTableCellFacade \| null>`                  | 获取单元格 |
| `table.getRange(selection: DocsTableSelection): Promise<DocsTableRangeFacade \| null>`              | 获取范围   |

#### 逐条类型定义

#### table.tableId

```typescript
table.tableId: string
```

功能说明：表示当前表格对象对应的表格 ID。

#### table.insertRows(index, count, placement?)

```typescript
table.insertRows(
  index: number,
  count: number,
  placement?: 'before' | 'after'
): Promise<void>
```

功能说明：在指定位置前后插入若干行。

#### table.insertColumns(index, count, placement?)

```typescript
table.insertColumns(
  index: number,
  count: number,
  placement?: 'before' | 'after'
): Promise<void>
```

功能说明：在指定位置前后插入若干列。

#### table.deleteRows(index, count)

```typescript
table.deleteRows(index: number, count: number): Promise<void>
```

功能说明：从表格中删除指定数量的行。

#### table.deleteColumns(index, count)

```typescript
table.deleteColumns(index: number, count: number): Promise<void>
```

功能说明：从表格中删除指定数量的列。

#### table.setRowHeight(index, height)

```typescript
table.setRowHeight(index: number, height: number): Promise<void>
```

功能说明：设置指定行的行高。

#### table.setColumnWidth(index, width)

```typescript
table.setColumnWidth(index: number, width: number): Promise<void>
```

功能说明：设置指定列的列宽。

#### table.setFullscreen(status)

```typescript
table.setFullscreen(status: boolean): Promise<void>
```

功能说明：切换当前表格的全屏状态。

#### table.getCell(row, column)

```typescript
table.getCell(row: number, column: number): Promise<DocsTableCellFacade | null>
```

功能说明：获取指定行列位置的单元格对象。

#### table.getRange(selection)

```typescript
table.getRange(
  selection: DocsTableSelection
): Promise<DocsTableRangeFacade | null>
```

功能说明：根据表格选择范围获取范围对象。

#### 相关类型

- [DocsTableFacade](#docstablefacade)
- [DocsTableCellFacade](#docstablecellfacade)
- [DocsTableSelection](#docstableselection)
- [DocsTableRangeFacade](#docstablerangefacade)

---

<h3 id="sdktablescell">cell: DocsTableCellFacade</h3>

#### 说明

通过 `const cell = await table?.getCell(row, column)` 获取 `cell: DocsTableCellFacade`，再调用其上的实例 API。

#### API 一览表

| API                                                                                         | 说明           |
| ------------------------------------------------------------------------------------------- | -------------- |
| `cell.tableId: string`                                                                      | 表格 ID        |
| `cell.row: number`                                                                          | 行号           |
| `cell.column: number`                                                                       | 列号           |
| `cell.setFormula(formula: 'sum' \| 'average', ranges: DocsTableSelection[]): Promise<void>` | 设置公式       |
| `cell.removeFormula(): Promise<void>`                                                       | 移除公式       |
| `cell.setStyle(style: DocsTableCellStyle): Promise<void>`                                   | 设置单元格样式 |
| `cell.clearStyle(): Promise<void>`                                                          | 清除单元格样式 |

#### 逐条类型定义

#### cell.tableId

```typescript
cell.tableId: string
```

功能说明：表示当前单元格所属的表格 ID。

#### cell.row

```typescript
cell.row: number
```

功能说明：表示当前单元格所在的行号。

#### cell.column

```typescript
cell.column: number
```

功能说明：表示当前单元格所在的列号。

#### cell.setFormula(formula, ranges)

```typescript
cell.setFormula(
  formula: 'sum' | 'average',
  ranges: DocsTableSelection[]
): Promise<void>
```

功能说明：为当前单元格设置聚合公式。

#### cell.removeFormula()

```typescript
cell.removeFormula(): Promise<void>
```

功能说明：移除当前单元格上的公式。

#### cell.setStyle(style)

```typescript
cell.setStyle(style: DocsTableCellStyle): Promise<void>
```

功能说明：设置当前单元格样式。

#### cell.clearStyle()

```typescript
cell.clearStyle(): Promise<void>
```

功能说明：清除当前单元格样式。

#### 相关类型

- [DocsTableCellFacade](#docstablecellfacade)
- [DocsTableSelection](#docstableselection)
- [DocsTableCellStyle](#docstablecellstyle)

---

<h3 id="sdktablesrange">range: DocsTableRangeFacade</h3>

#### 说明

通过 `const range = await table?.getRange(selection)` 获取 `range: DocsTableRangeFacade`，再调用其上的实例 API。

#### API 一览表

| API                                                        | 说明         |
| ---------------------------------------------------------- | ------------ |
| `range.tableId: string`                                    | 表格 ID      |
| `range.selection: DocsTableSelection`                      | 范围选择     |
| `range.setStyle(style: DocsTableCellStyle): Promise<void>` | 设置范围样式 |
| `range.clearStyle(): Promise<void>`                        | 清除范围样式 |
| `range.setSpan(): Promise<void>`                           | 合并单元格   |
| `range.removeSpan(): Promise<void>`                        | 取消合并     |

#### 逐条类型定义

#### range.tableId

```typescript
range.tableId: string
```

功能说明：表示当前表格范围所属的表格 ID。

#### range.selection

```typescript
range.selection: DocsTableSelection
```

功能说明：表示当前表格范围的选择区域。

#### range.setStyle(style)

```typescript
range.setStyle(style: DocsTableCellStyle): Promise<void>
```

功能说明：设置当前表格范围的样式。

#### range.clearStyle()

```typescript
range.clearStyle(): Promise<void>
```

功能说明：清除当前表格范围的样式。

#### range.setSpan()

```typescript
range.setSpan(): Promise<void>
```

功能说明：将当前表格范围合并为单元格区域。

#### range.removeSpan()

```typescript
range.removeSpan(): Promise<void>
```

功能说明：取消当前表格范围的合并状态。

#### 相关类型

- [DocsTableRangeFacade](#docstablerangefacade)
- [DocsTableSelection](#docstableselection)
- [DocsTableCellStyle](#docstablecellstyle)

---

### sdk.settings

#### 说明

文档设置能力。

#### 类型定义

```typescript
sdk.settings?.getPageWidth(): Promise<DocsPageWidth>
sdk.settings?.setPageWidth(width: DocsPageWidth): Promise<void>
sdk.settings?.getDefaultStyle(): Promise<DocsDefaultStyle>
sdk.settings?.setDefaultStyle(style: Partial<DocsDefaultStyle>): Promise<void>
```

#### 相关类型

- [DocsPageWidth](#docspagewidth)
- [DocsDefaultStyle](#docsdefaultstyle)

---

### sdk.batchChanges(callback)

#### 说明

将一组文档变更放在同一个批处理中执行。

#### 类型定义

```typescript
sdk.batchChanges?.<T>(callback: () => T | Promise<T>): Promise<Awaited<T>>
```

#### 示例

```typescript
const sdk = await connect(options)

await sdk.batchChanges?.(async () => {
  await sdk.title?.setTitle('Batch Title')
  await sdk.comments?.show()
})
```

---

### sdk.print

#### 说明

打印文档。

#### 类型定义

```typescript
sdk.print?.(): Promise<void>
```

---

## 类型定义

### DocumentErrorMessage

```typescript
interface DocumentErrorMessage {
  message: string
}
```

### RevisionCreateOptions

```typescript
interface RevisionCreateOptions {
  name?: string
}
```

### ExternalAppParams

```typescript
interface ExternalAppParams {
  title?: string
  width?: number | string
  height?: number
}
```

### DocsRangeValue

```typescript
interface DocsRangeValue {
  start: number
  end: number
}
```

### DocsRangeFacade

```typescript
interface DocsRangeFacade {
  start: number
  end: number
  isCaret: boolean
}
```

### DocsRangeBounding

```typescript
interface DocsRangeBounding {
  top: number
  right: number
  bottom: number
  left: number
  start: number
  end: number
}
```

### DocsContinueWritingType

```typescript
type DocsContinueWritingType = 'text' | 'html' | 'markdown'
```

### DocsTextStyle

```typescript
interface DocsTextStyle {
  bold?: boolean
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  color?: string
  backgroundColor?: string
  fontFamily?: string
  fontSize?: number
}
```

### DocsListStyle

```typescript
type DocsListStyle =
  | { type: 'none' }
  | { type: 'ordered'; style?: 'decimal' | 'lower-alpha' | 'lower-roman' }
  | { type: 'bullet'; style?: 'disc' | 'circle' | 'square' }
  | { type: 'task' }
```

### DocsParagraphType

```typescript
type DocsParagraphType =
  | 'paragraph'
  | 'title'
  | 'subtitle'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
```

### DocsCodeBlockInsertOptions

```typescript
interface DocsCodeBlockInsertOptions {
  attrs?: {
    language?: string
    wordWrap?: boolean
  }
  content?: Array<{
    element: 'paragraph'
    attrs: {
      direction?: 'ltr' | 'rtl'
      lineHeight?: string
      textIndent?: string
      alignment?: 'start' | 'end' | 'center' | 'justify'
      indent?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
    } | null
    content: Array<{
      element: 'text'
      text: string
    }>
  }>
}
```

### DocsSearchParams

```typescript
interface DocsSearchParams {
  content: string
  highlight?: boolean
  caseSensitive?: boolean
  wholeWord?: boolean
  useRegex?: boolean
  searchDirection?: 'forward' | 'backward'
  range?: DocsRangeValue
}
```

### DocsSearchResult

```typescript
interface DocsSearchResult {
  keyword: string
  id: string
  range: DocsRangeValue
  isProtected?: boolean
}
```

### DocsReplaceParams

```typescript
interface DocsReplaceParams {
  value: string
}
```

### DocsReplaceResult

```typescript
interface DocsReplaceResult {
  id: string
  oldValue: string
}
```

### DocsTOCItem

```typescript
interface DocsTOCItem {
  id: string
  level: string
  text: string
  pos: number
  nodeType: string
  leadingSymbol: string | null
}
```

### DocsSidebarState

```typescript
interface DocsSidebarState {
  visible: boolean
  selectedTab: string
}
```

### DocsTableFacade

```typescript
interface DocsTableFacade {
  tableId: string
}
```

### DocsTableCellFacade

```typescript
interface DocsTableCellFacade {
  tableId: string
  row: number
  column: number
}
```

### DocsTableRangeFacade

```typescript
interface DocsTableRangeFacade {
  tableId: string
  selection: DocsTableSelection
}
```

### DocsTableSelection

```typescript
interface DocsTableSelection {
  row: number
  column: number
  rowCount: number
  columnCount: number
}
```

### DocsTableCellStyle

```typescript
type DocsTableCellStyle = DocsTextStyle & {
  align?: 'left' | 'center' | 'right' | 'justify'
  vertical?: 'top' | 'middle' | 'bottom'
}
```

### DocsPageWidth

```typescript
type DocsPageWidth = 'standard' | 'wide' | 'full'
```

### DocsDefaultStyle

```typescript
interface DocsDefaultStyle {
  color: string
  fontSize: string
  fontFamily: string
  lineSpacing: string
}
```

### SDKBrandConfig

```typescript
interface SDKBrandConfig {
  mode: SDKBrandMode
  customAddress?: string
  source: SDKBrandSource
}
```

- `mode`: iframe 返回的品牌模式标识
- `customAddress`: 当前自定义 Logo 图片地址
- `source`: iframe 返回的品牌来源标识

### SDKBrandMode

```typescript
type SDKBrandMode = '0' | '1' | '2'
```

### SDKBrandSource

```typescript
type SDKBrandSource = 0 | 1 | 2 | 3
```

## 注意事项

- `sdk.branding` 是根级 API，没有对应的旧 `sdk.getEditor()` 方法
- Logo 自定义权限由 iframe 的 checkpoint mode 校验；没有权限或调用失败时，`setEditorFooterLogoSrc()` 会拒绝 Promise
- `getEditorFooterLogo()` 在当前编辑器没有可用配置时返回 `undefined`
- `sdk.headerBars.getCommand('logo').src` 修改的是 HeaderBars Logo，不是编辑器底栏 Logo

---
