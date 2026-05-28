# API

## 方法

### 方法列表

| 方法                                                                | 说明                                 |
| ------------------------------------------------------------------- | ------------------------------------ |
| [sdk.title.addChangedListener](#sdktitleaddchangedlistenerlistener) | 监听标题变化（PC only，`co-1.8+`）   |
| [sdk.title.setTitle](#sdktitlesettitletitle)                        | 设置标题（PC only，`co-1.8+`）       |
| [sdk.history.show](#sdkhistoryshow)                                 | 显示历史（PC only，`co-1.8+`）       |
| [sdk.history.hide](#sdkhistoryhide)                                 | 隐藏历史（PC only，`co-1.8+`）       |
| [sdk.comments.show](#sdkcommentsshowtype)                           | 显示评论（PC only，`co-1.8+`）       |
| [sdk.comments.hide](#sdkcommentshidetype)                           | 隐藏评论（PC only，`co-1.8+`）       |
| [sdk.discussion.show](#sdkdiscussionshow)                           | 显示讨论（PC only，`co-1.8+`）       |
| [sdk.discussion.hide](#sdkdiscussionhide)                           | 隐藏讨论（PC only，`co-1.8+`）       |
| [sdk.version](#sdkversion)                                          | 版本能力（PC only，`co-1.8+`）       |
| [sdk.presentation.start](#sdkpresentationstartindex)                | 启动演示（PC only，`co-1.8+`）       |
| [sdk.selection](#sdkselection)                                      | 选区能力（PC only，`co-1.8+`）       |
| [sdk.selection.range](#sdkselectionrange)                           | 选区范围能力（PC only，`co-1.8+`）   |
| [sdk.search](#sdksearch)                                            | 搜索与替换（PC only，`co-1.8+`）     |
| [sdk.TOCs](#sdktocs)                                                | 目录能力（PC only，`co-1.8+`）       |
| [sdk.sidebar](#sdksidebar)                                          | 侧边栏能力（PC only，`co-1.8+`）     |
| [sdk.collaborator.show](#sdkcollaboratorshow)                       | 显示编写者信息（PC only，`co-1.8+`） |
| [sdk.collaborator.hide](#sdkcollaboratorhide)                       | 隐藏编写者信息（PC only，`co-1.8+`） |
| [sdk.externalApp.insert](#sdkexternalappinserturl-params)           | 插入第三方应用（PC only，`co-1.8+`） |
| [sdk.tables](#sdktables)                                            | 表格集合能力（PC only，`co-1.8+`）   |
| [sdk.tables.item](#sdktablesitem)                                   | 单个表格能力（PC only，`co-1.8+`）   |
| [sdk.tables.cell](#sdktablescell)                                   | 表格单元格能力（PC only，`co-1.8+`） |
| [sdk.tables.range](#sdktablesrange)                                 | 表格范围能力（PC only，`co-1.8+`）   |
| [sdk.settings](#sdksettings)                                        | 文档设置能力（PC only，`co-1.8+`）   |
| [sdk.batchChanges](#sdkbatchchangescallback)                        | 批量变更（PC only，`co-1.8+`）       |
| [sdk.print](#sdkprint)                                              | 打印（PC only，`co-1.8+`）           |

### API 调用方式

```typescript
const sdk = await connect(options)

await sdk.title?.setTitle('Weekly Report')
await sdk.comments?.show('list')
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
| `sdk.getEditor().showToc()`                       | 显示目录       | `sdk.TOCs?.show()`                      |
| `sdk.getEditor().hideToc()`                       | 隐藏目录       | `sdk.TOCs?.hide()`                      |
| `sdk.getEditor().createRevision(options?)`        | 创建版本       | `sdk.version?.createRevision(options?)` |
| `sdk.getEditor().endDemonstration()`              | 退出演示       | `sdk.presentation?.quit()`              |
| `sdk.getEditor().print()`                         | 打印           | `sdk.print?.()`                         |
| `sdk.getEditor().showCollaborator()`              | 显示编写者信息 | `sdk.collaborator?.show()`              |
| `sdk.getEditor().hideCollaborator()`              | 隐藏编写者信息 | `sdk.collaborator?.hide()`              |
| `sdk.getEditor().insertExternalApp(url, params?)` | 插入第三方应用 | `sdk.externalApp?.insert(url, params?)` |

### 新增 API 方法

以下方法为本次补充的根级 API 调用方式。

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

### sdk.selection.range

#### 说明

`sdk.selection.getRange()` 或 `sdk.selection.getWholeRange()` 返回的范围对象能力。

#### 类型定义

```typescript
range.start: number
range.end: number
range.isCaret: boolean
range.getText(): Promise<string>
range.getHtml(): Promise<string>
range.setText(text: string): Promise<void>
range.setHtml(html: string): Promise<void>
range.getBounding(): Promise<DocsRangeBounding | null>
range.setStyle(style: DocsTextStyle): Promise<void>
range.continueWriting(
  content: string,
  type: DocsContinueWritingType,
  abort?: () => void
): Promise<boolean>
range.setListStyle(style: DocsListStyle): Promise<void>
range.insertLink(
  href: string,
  text: string,
  viewType: 'link' | 'card' | 'preview'
): Promise<void>
range.insertImage(data: File | string): Promise<void>
range.insertAttachment(
  data: File,
  viewType: 'link' | 'card' | 'preview'
): Promise<void>
range.setParagraphType(type: DocsParagraphType): Promise<void>
range.clearStyle(): Promise<void>
range.clearContent(): Promise<void>
range.clearAll(): Promise<void>
range.insertHorizontalRule(): Promise<void>
range.insertQuote(): Promise<void>
```

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

### sdk.TOCs

#### 说明

文档目录能力。

#### 类型定义

```typescript
sdk.TOCs?.getOpen(): Promise<boolean>
sdk.TOCs?.show(): Promise<void>
sdk.TOCs?.hide(): Promise<void>
sdk.TOCs?.setOpen(isOpen: boolean): Promise<void>
sdk.TOCs?.getAll(): Promise<DocsTOCItem[]>
sdk.TOCs?.getOne(id: string): Promise<DocsTOCItem | null>
sdk.TOCs?.deleteAll(): Promise<boolean>
sdk.TOCs?.deleteOne(id: string): Promise<boolean>
sdk.TOCs?.add(item: Omit<DocsTOCItem, 'id'>): Promise<boolean>
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

### sdk.tables.item

#### 说明

`sdk.tables.getAll()` 或 `sdk.tables.getOne()` 返回的表格对象能力。

#### 类型定义

```typescript
table.tableId: string
table.insertRows(
  index: number,
  count: number,
  placement?: 'before' | 'after'
): Promise<void>
table.insertColumns(
  index: number,
  count: number,
  placement?: 'before' | 'after'
): Promise<void>
table.deleteRows(index: number, count: number): Promise<void>
table.deleteColumns(index: number, count: number): Promise<void>
table.setRowHeight(index: number, height: number): Promise<void>
table.setColumnWidth(index: number, width: number): Promise<void>
table.setFullscreen(status: boolean): Promise<void>
table.getCell(row: number, column: number): Promise<DocsTableCellFacade | null>
table.getRange(
  selection: DocsTableSelection
): Promise<DocsTableRangeFacade | null>
```

#### 相关类型

- [DocsTableFacade](#docstablefacade)
- [DocsTableCellFacade](#docstablecellfacade)
- [DocsTableSelection](#docstableselection)
- [DocsTableRangeFacade](#docstablerangefacade)

---

### sdk.tables.cell

#### 说明

文档表格单元格能力。

#### 类型定义

```typescript
cell.tableId: string
cell.row: number
cell.column: number
cell.setFormula(
  formula: 'sum' | 'average',
  ranges: DocsTableSelection[]
): Promise<void>
cell.removeFormula(): Promise<void>
cell.setStyle(style: DocsTableCellStyle): Promise<void>
cell.clearStyle(): Promise<void>
```

#### 相关类型

- [DocsTableCellFacade](#docstablecellfacade)
- [DocsTableSelection](#docstableselection)
- [DocsTableCellStyle](#docstablecellstyle)

---

### sdk.tables.range

#### 说明

文档表格范围能力。

#### 类型定义

```typescript
range.tableId: string
range.selection: DocsTableSelection
range.setStyle(style: DocsTableCellStyle): Promise<void>
range.clearStyle(): Promise<void>
range.setSpan(): Promise<void>
range.removeSpan(): Promise<void>
```

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

---
