# API

## 方法

### 调用方式

以下新增 API 均为 `PC only`。

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

### 方法列表

| 方法                                                                | 说明           | 平台      |
| ------------------------------------------------------------------- | -------------- | --------- |
| [sdk.title.addChangedListener](#sdktitleaddchangedlistenerlistener) | 监听标题变化   | `PC only` |
| [sdk.title.setTitle](#sdktitlesettitletitle)                        | 设置标题       | `PC only` |
| [sdk.comments.show](#sdkcommentsshowtype)                           | 显示评论       | `PC only` |
| [sdk.comments.hide](#sdkcommentshidetype)                           | 隐藏评论       | `PC only` |
| [sdk.presentation.start](#sdkpresentationstartindex)                | 启动演示       | `PC only` |
| [sdk.selection](#sdkselection)                                      | 选区能力       | `PC only` |
| [sdk.selection.range](#sdkselectionrange)                           | 选区范围能力   | `PC only` |
| [sdk.search](#sdksearch)                                            | 搜索与替换     | `PC only` |
| [sdk.TOCs](#sdktocs)                                                | 目录能力       | `PC only` |
| [sdk.sidebar](#sdksidebar)                                          | 侧边栏能力     | `PC only` |
| [sdk.tables](#sdktables)                                            | 表格集合能力   | `PC only` |
| [sdk.tables.item](#sdktablesitem)                                   | 单个表格能力   | `PC only` |
| [sdk.tables.cell](#sdktablescell)                                   | 表格单元格能力 | `PC only` |
| [sdk.tables.range](#sdktablesrange)                                 | 表格范围能力   | `PC only` |
| [sdk.settings](#sdksettings)                                        | 文档设置能力   | `PC only` |
| [sdk.batchChanges](#sdkbatchchangescallback)                        | 批量变更       | `PC only` |

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

### sdk.selection

#### 说明

文档选区能力。

#### 类型定义

```typescript
sdk.selection?.getRange(value?)
sdk.selection?.setRange(value)
sdk.selection?.addRangeListener(listener)
sdk.selection?.getWholeRange()
sdk.selection?.insertText(text)
sdk.selection?.insertHtml(html)
sdk.selection?.insertTable(rowCount, columnCount)
sdk.selection?.insertCodeBlock(options?)
```

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
range.start
range.end
range.isCaret
range.getText()
range.getHtml()
range.setText(text)
range.setHtml(html)
range.getBounding()
range.setStyle(style)
range.continueWriting(content, type, abort?)
range.setListStyle(style)
range.insertLink(href, text, viewType)
range.insertImage(data)
range.insertAttachment(data, viewType)
range.setParagraphType(type)
range.clearStyle()
range.clearContent()
range.clearAll()
range.insertHorizontalRule()
range.insertQuote()
```

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
sdk.search?.findOne(params)
sdk.search?.findAll(params)
sdk.search?.replaceOne(id, params)
sdk.search?.replaceAll(params)
sdk.search?.clear()
```

---

### sdk.TOCs

#### 说明

文档目录能力。

#### 类型定义

```typescript
sdk.TOCs?.getOpen()
sdk.TOCs?.setOpen(isOpen)
sdk.TOCs?.getAll()
sdk.TOCs?.getOne(id)
sdk.TOCs?.deleteAll()
sdk.TOCs?.deleteOne(id)
sdk.TOCs?.add(item)
```

---

### sdk.sidebar

#### 说明

文档侧边栏能力。

#### 类型定义

```typescript
sdk.sidebar?.show(tab?)
sdk.sidebar?.close()
sdk.sidebar?.getState()
```

---

### sdk.tables

#### 说明

文档内表格集合能力。

#### 类型定义

```typescript
sdk.tables?.getAll()
sdk.tables?.getOne(tableId)
sdk.tables?.deleteOne(tableId)
```

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
table.tableId
table.insertRows(index, count, placement?)
table.insertColumns(index, count, placement?)
table.deleteRows(index, count)
table.deleteColumns(index, count)
table.setRowHeight(index, height)
table.setColumnWidth(index, width)
table.setFullscreen(status)
table.getCell(row, column)
table.getRange(selection)
```

---

### sdk.tables.cell

#### 说明

文档表格单元格能力。

#### 类型定义

```typescript
cell.tableId
cell.row
cell.column
cell.setFormula(formula, ranges)
cell.removeFormula()
cell.setStyle(style)
cell.clearStyle()
```

---

### sdk.tables.range

#### 说明

文档表格范围能力。

#### 类型定义

```typescript
range.tableId
range.selection
range.setStyle(style)
range.clearStyle()
range.setSpan()
range.removeSpan()
```

---

### sdk.settings

#### 说明

文档设置能力。

#### 类型定义

```typescript
sdk.settings?.getPageWidth()
sdk.settings?.setPageWidth(width)
sdk.settings?.getDefaultStyle()
sdk.settings?.setDefaultStyle(style)
```

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

## 兼容说明

- 本页仅描述根级 facade 的调用方式
- 本页新增接口均为 `PC only`
- `document` 当前只支持 `sdk.presentation?.start(index?)`
- 以下方法当前未在 `document` 套件承接：
  - `sdk.presentation?.quit()`
  - `sdk.presentation?.startFromCurrent()`
  - `sdk.presentation?.startRemoteLive()`
  - `sdk.presentation?.startSpeakerView()`
