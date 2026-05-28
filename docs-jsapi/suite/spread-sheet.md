# API

## 方法

### 调用方式

以下新增 API 均为 `PC only`。

```typescript
const sdk = await connect(options)

await sdk.history?.show()
const sheets = await sdk.workbook?.getWorksheets()
const activeSheet = await sdk.workbook?.getActiveWorksheet()
await activeSheet?.locateCell(1, 1)
```

### 新旧兼容

```typescript
const sdk = await connect(options)

// 旧写法
await sdk.getEditor().showHistory?.()

// 新写法
await sdk.history?.show()
```

### 方法列表

| 方法                                                                             | 说明             | 平台      |
| -------------------------------------------------------------------------------- | ---------------- | --------- |
| [sdk.history.show](#sdkhistoryshow)                                              | 显示历史         | `PC only` |
| [sdk.history.hide](#sdkhistoryhide)                                              | 隐藏历史         | `PC only` |
| [sdk.comments.show](#sdkcommentsshowtype)                                        | 显示评论         | `PC only` |
| [sdk.comments.hide](#sdkcommentshidetype)                                        | 隐藏评论         | `PC only` |
| [sdk.locks](#sdklocks)                                                           | 锁定能力         | `PC only` |
| [sdk.mention.locateCellByGuid](#sdkmentionlocatecellbyguidguid-notificationtype) | 按通知定位单元格 | `PC only` |
| [sdk.content.setContent](#sdkcontentsetcontentcontent)                           | 设置内容         | `PC only` |
| [sdk.version.createRevision](#sdkversioncreaterevisionoptions)                   | 创建版本         | `PC only` |
| [sdk.presentation](#sdkpresentation)                                             | 演示模式能力     | `PC only` |
| [sdk.workbook](#sdkworkbook)                                                     | 工作簿能力       | `PC only` |
| [sdk.activeSheet](#sdkactivesheet)                                               | 当前工作表能力   | `PC only` |
| [sdk.sheet.range](#sdksheetrange)                                                | 工作表范围能力   | `PC only` |
| [sdk.sheet.cell](#sdksheetcell)                                                  | 工作表单元格能力 | `PC only` |
| [sdk.charts](#sdkcharts)                                                         | 图表能力         | `PC only` |
| [sdk.selections](#sdkselections)                                                 | 多选区能力       | `PC only` |
| [sdk.batchChanges](#sdkbatchchangescallback)                                     | 批量变更         | `PC only` |
| [sdk.print](#sdkprint)                                                           | 打印             | `PC only` |
| [sdk.export](#sdkexporttype)                                                     | 导出             | `PC only` |
| [sdk.setFocus](#sdksetfocusisfocus)                                              | 设置聚焦状态     | `PC only` |

---

### sdk.history.show()

#### 说明

显示表格历史侧边栏。

#### 类型定义

```typescript
sdk.history?.show(): Promise<void>
```

---

### sdk.history.hide()

#### 说明

隐藏表格历史侧边栏。

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

---

### sdk.comments.hide(type?)

#### 说明

隐藏评论能力入口。

#### 类型定义

```typescript
sdk.comments?.hide(type?: 'list' | 'card'): Promise<void>
```

---

### sdk.locks

#### 说明

表格锁定能力。

#### 类型定义

```typescript
sdk.locks?.show()
sdk.locks?.hide()
sdk.locks?.addRangeLock(options)
sdk.locks?.addSheetLock(options)
sdk.locks?.removeRangeLocksInRanges(options)
sdk.locks?.removeSheetLock(options)
```

---

### sdk.mention.locateCellByGuid(guid, notificationType?)

#### 说明

根据通知 guid 定位到对应单元格。

#### 类型定义

```typescript
sdk.mention?.locateCellByGuid(
  guid: string,
  notificationType?: string
): Promise<void>
```

---

### sdk.content.setContent(content)

#### 说明

设置表格内容。

#### 类型定义

```typescript
sdk.content?.setContent(content: unknown): Promise<void>
```

---

### sdk.version.createRevision(options?)

#### 说明

创建表格版本。

#### 类型定义

```typescript
sdk.version?.createRevision(options?: { name?: string }): Promise<void>
```

---

### sdk.presentation

#### 说明

表格演示模式能力。

#### 类型定义

```typescript
sdk.presentation?.start(index?)
sdk.presentation?.quit()
```

---

### sdk.workbook

#### 说明

工作簿能力。

#### 类型定义

```typescript
sdk.workbook?.getWorksheets()
sdk.workbook?.getWorksheetById(sheetId)
sdk.workbook?.getActiveWorksheet()
sdk.workbook?.setActiveWorksheet(sheetId)
sdk.workbook?.save()
sdk.workbook?.addWorksheet(name?, index?)
sdk.workbook?.deleteWorksheet(sheetId)
sdk.workbook?.moveWorksheet(sheetId, index)
```

#### 示例

```typescript
const sdk = await connect(options)

const sheets = await sdk.workbook?.getWorksheets()
const activeSheet = await sdk.workbook?.getActiveWorksheet()
await sdk.workbook?.setActiveWorksheet('sheet-id')
```

---

### sdk.activeSheet

#### 说明

当前工作表能力。

#### 类型定义

```typescript
sdk.activeSheet?.getSelections()
sdk.activeSheet?.getRange(value)
sdk.activeSheet?.addRangeListener(listener)
sdk.activeSheet?.getBounding(range)
sdk.activeSheet?.locateCell(row, column)
sdk.activeSheet?.getCell(row, column)
sdk.activeSheet?.getActiveCell()
sdk.activeSheet?.setActiveCell({ row, column })
sdk.activeSheet?.search(text, range?)
sdk.activeSheet?.cancelSearch()
sdk.activeSheet?.paste(params)
sdk.activeSheet?.getViewportSize()
sdk.activeSheet?.endEdit()
sdk.activeSheet?.addRows(index, count)
sdk.activeSheet?.addColumns(index, count)
sdk.activeSheet?.deleteRows(index, count)
sdk.activeSheet?.deleteColumns(index, count)
sdk.activeSheet?.appendData(data, axis?)
sdk.activeSheet?.setRowsHeight(data)
sdk.activeSheet?.setColumnsWidth(data)
sdk.activeSheet?.setRowsVisible(rows, visible)
sdk.activeSheet?.setColumnsVisible(columns, visible)
sdk.activeSheet?.setFrozenRowCount(count)
sdk.activeSheet?.setFrozenColumnCount(count)
sdk.activeSheet?.setTabColor(color)
sdk.activeSheet?.rename(name)
sdk.activeSheet?.setVisible(visible)
```

---

### sdk.sheet.range

#### 说明

`sdk.activeSheet.getRange()` 返回的范围对象能力。

#### 类型定义

```typescript
range.getText(format?)
range.setText(text)
range.getHtml()
range.setHtml(html)
range.getValue()
range.setValue(values)
range.getData()
range.getFormula()
range.setFormula(formula)
range.setData(data)
range.setSpan()
range.removeSpan()
range.getSpans()
range.clearContent()
range.clearStyle()
range.clearAll()
```

---

### sdk.sheet.cell

#### 说明

`sdk.activeSheet.getCell()` 或 `sdk.activeSheet.getActiveCell()` 返回的单元格对象能力。

#### 类型定义

```typescript
cell.getCellText()
cell.setCellText(text)
cell.getCellValue()
cell.getCellData()
cell.getCellFormula()
cell.setCellFormula(formula)
cell.setCellValue(value)
cell.setCellData(data)
cell.setCheckbox(checked)
cell.setScore(score)
cell.setProgress(progress)
cell.insertImage(data)
cell.insertMention(userId, userName)
cell.insertAttachmentLink(data)
cell.clearContent()
cell.clearStyle()
cell.clearAll()
```

---

### sdk.charts

#### 说明

图表能力。

#### 类型定义

```typescript
sdk.charts?.addChartFromSelection(params?)
```

---

### sdk.selections

#### 说明

多选区能力。

#### 类型定义

```typescript
sdk.selections?.getAll()
```

---

### sdk.batchChanges(callback)

#### 说明

将一组表格变更放在同一个批处理中执行。

#### 类型定义

```typescript
sdk.batchChanges?.<T>(callback: () => T | Promise<T>): Promise<Awaited<T>>
```

---

### sdk.print

#### 说明

打印表格。

#### 类型定义

```typescript
sdk.print?.(): Promise<void>
```

---

### sdk.export(type)

#### 说明

导出表格。

#### 类型定义

```typescript
sdk.export?.(type: string): Promise<void>
```

---

### sdk.setFocus(isFocus)

#### 说明

设置表格聚焦状态。

#### 类型定义

```typescript
sdk.setFocus?.(isFocus: boolean): Promise<void>
```

---

## 兼容说明

- 本页仅描述根级 facade 的调用方式
- 本页新增接口均为 `PC only`
- `sdk.presentation?.start(index?)` 当前表格侧按无参启动演示处理，不承诺 `index` 生效
