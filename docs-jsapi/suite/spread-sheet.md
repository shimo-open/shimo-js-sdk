# API

## 方法

### 方法列表

| 方法                                                                             | 说明                                   |
| -------------------------------------------------------------------------------- | -------------------------------------- |
| [sdk.history.show](#sdkhistoryshow)                                              | 显示历史（PC only，`co-1.8+`）         |
| [sdk.history.hide](#sdkhistoryhide)                                              | 隐藏历史（PC only，`co-1.8+`）         |
| [sdk.comments.show](#sdkcommentsshowtype)                                        | 显示评论（PC only，`co-1.8+`）         |
| [sdk.comments.hide](#sdkcommentshidetype)                                        | 隐藏评论（PC only，`co-1.8+`）         |
| [sdk.locks](#sdklocks)                                                           | 锁定能力（PC only，`co-1.8+`）         |
| [sdk.mention.locateCellByGuid](#sdkmentionlocatecellbyguidguid-notificationtype) | 按通知定位单元格（PC only，`co-1.8+`） |
| [sdk.content.setContent](#sdkcontentsetcontentcontent)                           | 设置内容（PC only，`co-1.8+`）         |
| [sdk.version.createRevision](#sdkversioncreaterevisionoptions)                   | 创建版本（PC only，`co-1.8+`）         |
| [sdk.presentation](#sdkpresentation)                                             | 演示模式能力（PC only，`co-1.8+`）     |
| [sdk.workbook](#sdkworkbook)                                                     | 工作簿能力（PC only，`co-1.8+`）       |
| [sdk.activeSheet](#sdkactivesheet)                                               | 当前工作表能力（PC only，`co-1.8+`）   |
| [sdk.sheet.range](#sdksheetrange)                                                | 工作表范围能力（PC only，`co-1.8+`）   |
| [sdk.sheet.cell](#sdksheetcell)                                                  | 工作表单元格能力（PC only，`co-1.8+`） |
| [sdk.charts](#sdkcharts)                                                         | 图表能力（PC only，`co-1.8+`）         |
| [sdk.selections](#sdkselections)                                                 | 多选区能力（PC only，`co-1.8+`）       |
| [sdk.batchChanges](#sdkbatchchangescallback)                                     | 批量变更（PC only，`co-1.8+`）         |
| [sdk.print](#sdkprint)                                                           | 打印（PC only，`co-1.8+`）             |
| [sdk.export](#sdkexporttype)                                                     | 导出（PC only，`co-1.8+`）             |
| [sdk.setFocus](#sdksetfocusisfocus)                                              | 设置聚焦状态（PC only，`co-1.8+`）     |

### facade 调用方式

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

### 旧方法兼容

以下旧方法调用方式继续保留说明；如存在根级 facade，优先使用新写法。

| 旧方法                                                      | 说明             | 推荐新写法                                               |
| ----------------------------------------------------------- | ---------------- | -------------------------------------------------------- |
| `sdk.getEditor().showHistory()`                             | 显示历史侧边栏   | `sdk.history?.show()`                                    |
| `sdk.getEditor().hideHistory()`                             | 隐藏历史侧边栏   | `sdk.history?.hide()`                                    |
| `sdk.getEditor().showComments()`                            | 显示评论侧边栏   | `sdk.comments?.show()`                                   |
| `sdk.getEditor().hideComments()`                            | 隐藏评论侧边栏   | `sdk.comments?.hide()`                                   |
| `sdk.getEditor().showLocks()`                               | 显示锁定侧边栏   | `sdk.locks?.show()`                                      |
| `sdk.getEditor().hideLocks()`                               | 隐藏锁定侧边栏   | `sdk.locks?.hide()`                                      |
| `sdk.getEditor().addRangeLock(options)`                     | 创建单元格锁定   | `sdk.locks?.addRangeLock(options)`                       |
| `sdk.getEditor().addSheetLock(options)`                     | 创建工作表锁定   | `sdk.locks?.addSheetLock(options)`                       |
| `sdk.getEditor().removeRangeLocksInRanges(options)`         | 删除范围锁定     | `sdk.locks?.removeRangeLocksInRanges(options)`           |
| `sdk.getEditor().removeSheetLock(options)`                  | 删除工作表锁定   | `sdk.locks?.removeSheetLock(options)`                    |
| `sdk.getEditor().locateCellByGuid(guid, notificationType?)` | 按通知定位单元格 | `sdk.mention?.locateCellByGuid(guid, notificationType?)` |
| `sdk.getEditor().setContent(content)`                       | 设置内容         | `sdk.content?.setContent(content)`                       |
| `sdk.getEditor().createRevision(options?)`                  | 创建版本         | `sdk.version?.createRevision(options?)`                  |
| `sdk.getEditor().startDemonstration()`                      | 启动演示         | `sdk.presentation?.start(index?)`                        |
| `sdk.getEditor().endDemonstration()`                        | 退出演示         | `sdk.presentation?.quit()`                               |

### 新增 facade 方法

以下方法为本次补充的根级 facade 调用方式。

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
sdk.content?.setContent(content: Content): Promise<void>
```

#### 相关类型

- [Content](#content)

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
sdk.presentation?.start(index?: number): Promise<void>
sdk.presentation?.quit(): Promise<void>
```

---

### sdk.workbook

#### 说明

工作簿能力。

#### 类型定义

```typescript
sdk.workbook?.getWorksheets(): Promise<SheetWorksheetFacade[]>
sdk.workbook?.getWorksheetById(
  sheetId: string
): Promise<SheetWorksheetFacade | null>
sdk.workbook?.getActiveWorksheet(): Promise<SheetWorksheetFacade>
sdk.workbook?.setActiveWorksheet(sheetId: string): Promise<void>
sdk.workbook?.save(): Promise<EditorSaveResult>
sdk.workbook?.addWorksheet(name?: string, index?: number): Promise<void>
sdk.workbook?.deleteWorksheet(sheetId: string): Promise<void>
sdk.workbook?.moveWorksheet(sheetId: string, index: number): Promise<void>
```

#### 相关类型

- [SheetWorksheetFacade](#sheetworksheetfacade)
- [EditorSaveResult](#editorsaveresult)

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
sdk.activeSheet?.getSelections(): Promise<SheetSelection[] | null>
sdk.activeSheet?.getRange(value: SheetRangeValue): Promise<SheetRangeFacade | null>
sdk.activeSheet?.addRangeListener(
  listener: (value: { sheet: string; ranges: SheetRangeValue[] | null }) => void
): (() => void) | undefined
sdk.activeSheet?.getBounding(
  range: SheetRangeValue
): Promise<{ left: number; top: number; width: number; height: number } | null>
sdk.activeSheet?.locateCell(row: number, column: number): Promise<void>
sdk.activeSheet?.getCell(
  row: number,
  column: number
): Promise<SheetCellFacade | null>
sdk.activeSheet?.getActiveCell(): Promise<SheetCellFacade | null>
sdk.activeSheet?.setActiveCell(options: {
  row: number
  column: number
}): Promise<void>
sdk.activeSheet?.search(
  text: string,
  range?: SheetRangeValue | SheetRangeValue[]
): Promise<void>
sdk.activeSheet?.cancelSearch(): Promise<void>
sdk.activeSheet?.paste(params: ClipboardPasteParams): Promise<void>
sdk.activeSheet?.getViewportSize(): Promise<{ width: number; height: number }>
sdk.activeSheet?.endEdit(): Promise<void>
sdk.activeSheet?.addRows(index: number, count: number): Promise<void>
sdk.activeSheet?.addColumns(index: number, count: number): Promise<void>
sdk.activeSheet?.deleteRows(index: number, count: number): Promise<void>
sdk.activeSheet?.deleteColumns(index: number, count: number): Promise<void>
sdk.activeSheet?.appendData(
  data: SheetWritableCellData[][],
  axis?: SheetAppendDataAxis
): Promise<void>
sdk.activeSheet?.setRowsHeight(
  data: Array<{ row: number; height: number }>
): Promise<void>
sdk.activeSheet?.setColumnsWidth(
  data: Array<{ column: number; width: number }>
): Promise<void>
sdk.activeSheet?.setRowsVisible(rows: number[], visible: boolean): Promise<void>
sdk.activeSheet?.setColumnsVisible(
  columns: number[],
  visible: boolean
): Promise<void>
sdk.activeSheet?.setFrozenRowCount(count: number): Promise<void>
sdk.activeSheet?.setFrozenColumnCount(count: number): Promise<void>
sdk.activeSheet?.setTabColor(color: string): Promise<void>
sdk.activeSheet?.rename(name: string): Promise<void>
sdk.activeSheet?.setVisible(visible: boolean): Promise<void>
```

#### 相关类型

- [SheetSelection](#sheetselection)
- [SheetRangeValue](#sheetrangevalue)
- [SheetRangeFacade](#sheetrangefacade)
- [SheetCellFacade](#sheetcellfacade)
- [ClipboardPasteParams](#clipboardpasteparams)
- [SheetWritableCellData](#sheetwritablecelldata)
- [SheetAppendDataAxis](#sheetappenddataaxis)

---

### sdk.sheet.range

#### 说明

`sdk.activeSheet.getRange()` 返回的范围对象能力。

#### 类型定义

```typescript
range.getText(format?: 'plain' | 'matrix'): Promise<string | string[][]>
range.setText(text: SheetRangeText): Promise<void>
range.getHtml(): Promise<string>
range.setHtml(html: string): Promise<void>
range.getValue(): Promise<(SheetCellValue | null)[][]>
range.setValue(values: (SheetWritableCellValue | null)[][]): Promise<void>
range.getData(): Promise<SheetCellData[][]>
range.getFormula(): Promise<(string | null)[][]>
range.setFormula(formula: (string | null)[][]): Promise<void>
range.setData(data: SheetWritableCellData[][]): Promise<void>
range.setSpan(): Promise<void>
range.removeSpan(): Promise<void>
range.getSpans(): Promise<SheetCellRange[] | null>
range.clearContent(): Promise<void>
range.clearStyle(): Promise<void>
range.clearAll(): Promise<void>
```

#### 相关类型

- [SheetRangeFacade](#sheetrangefacade)
- [SheetRangeText](#sheetrangetext)
- [SheetCellValue](#sheetcellvalue)
- [SheetWritableCellValue](#sheetwritablecellvalue)
- [SheetCellData](#sheetcelldata)
- [SheetWritableCellData](#sheetwritablecelldata)
- [SheetCellRange](#sheetcellrange)

---

### sdk.sheet.cell

#### 说明

`sdk.activeSheet.getCell()` 或 `sdk.activeSheet.getActiveCell()` 返回的单元格对象能力。

#### 类型定义

```typescript
cell.getCellText(): Promise<string>
cell.setCellText(text: string): Promise<void>
cell.getCellValue(): Promise<SheetCellValue | null>
cell.getCellData(): Promise<SheetCellData>
cell.getCellFormula(): Promise<string | null>
cell.setCellFormula(formula: string): Promise<void>
cell.setCellValue(value: SheetWritableCellValue | null): Promise<void>
cell.setCellData(data: SheetWritableCellData): Promise<void>
cell.setCheckbox(checked: boolean): Promise<void>
cell.setScore(score: 0 | 1 | 2 | 3 | 4 | 5): Promise<void>
cell.setProgress(progress: number): Promise<void>
cell.insertImage(data: File | string): Promise<void>
cell.insertMention(userId: number, userName: string): Promise<void>
cell.insertAttachmentLink(data: File): Promise<void>
cell.clearContent(): Promise<void>
cell.clearStyle(): Promise<void>
cell.clearAll(): Promise<void>
```

#### 相关类型

- [SheetCellFacade](#sheetcellfacade)
- [SheetCellValue](#sheetcellvalue)
- [SheetCellData](#sheetcelldata)
- [SheetWritableCellValue](#sheetwritablecellvalue)
- [SheetWritableCellData](#sheetwritablecelldata)

---

### sdk.charts

#### 说明

图表能力。

#### 类型定义

```typescript
sdk.charts?.addChartFromSelection(
  params?: AddChartFromSelectionParams
): Promise<AddChartFromSelectionResult | undefined>
```

#### 相关类型

- [AddChartFromSelectionParams](#addchartfromselectionparams)
- [AddChartFromSelectionResult](#addchartfromselectionresult)

---

### sdk.selections

#### 说明

多选区能力。

#### 类型定义

```typescript
sdk.selections?.getAll(): Promise<SheetRangeValue[]>
```

#### 相关类型

- [SheetRangeValue](#sheetrangevalue)

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

## 类型定义

### Content

```typescript
type Content = string | ArrayBuffer | object
```

### EditorSaveResult

```typescript
interface EditorSaveResult {
  status: 0 | 1 | 2
}
```

### SheetRangeFacade

```typescript
interface SheetRangeFacade {
  row: number
  column: number
  rowCount: number
  columnCount: number
}
```

### SheetWorksheetFacade

```typescript
interface SheetWorksheetFacade {
  id: string
  name?: string
}
```

### SheetCellFacade

```typescript
interface SheetCellFacade {
  row: number
  column: number
}
```

### SheetSelection

```typescript
interface SheetSelection {
  getRange(value?: SheetRangeValue): SheetRangeFacade | null
  setRange(value: SheetRangeValue | null): Promise<void>
}
```

### SheetRangeValue

```typescript
type SheetRangeValue =
  | {
      type: 'cells'
      row: number
      rowCount: number
      column: number
      columnCount: number
    }
  | {
      type: 'rows'
      row: number
      rowCount: number
    }
  | {
      type: 'columns'
      column: number
      columnCount: number
    }
  | {
      type: 'sheet'
    }
```

### ClipboardPasteParams

```typescript
interface ClipboardPasteParams {
  html: string
  text: string
  base64File?: string
  removeTrailingEmptyRows?: boolean
  removeTrailingEmptyColumns?: boolean
}
```

### SheetAppendDataAxis

```typescript
type SheetAppendDataAxis = 'row' | 'column'
```

### SheetRangeText

```typescript
type SheetRangeText = string | string[][]
```

### SheetCellValue

```typescript
type SheetCellValue =
  | { type: 'primitive'; value: string | number | boolean }
  | { type: 'date'; value: number }
  | { type: 'calcError'; value: { error: string } }
```

### SheetWritableCellValue

```typescript
type SheetWritableCellValue =
  | { type: 'primitive'; value: string | number | boolean }
  | { type: 'date'; value: number }
```

### SheetCellRange

```typescript
type SheetCellRange = {
  row: number
  rowCount: number
  column: number
  columnCount: number
}
```

### SheetCellData

```typescript
interface SheetCellData {
  value: SheetCellValue | null
  formula: string | null
  text: string
  format?: string
  span?: SheetCellRange
  color?: string
  background?: string
  fontFamily?: string
  fontSize?: number
}
```

### SheetWritableCellMeta

```typescript
interface SheetWritableCellMeta {
  color?: string
  background?: string
  fontFamily?: string
  fontSize?: number
}
```

### SheetWritableCellData

```typescript
type SheetWritableCellData =
  | ({
      value: string | number | boolean | Date | null
    } & SheetWritableCellMeta)
  | ({
      formula: string | null
      quotePrefix?: boolean
    } & SheetWritableCellMeta)
  | ({
      text: string | null
    } & SheetWritableCellMeta)
```

### AddChartFromSelectionParams

```typescript
type AddChartFromSelectionParams = {
  chartType?: string
  series?: {
    orientation?: 'auto' | 'horizontal' | 'vertical'
    trimPaddings?: boolean
    firstAs?: 'auto' | 'seriesLabel' | 'categoryLabel' | 'none'
  }
  recommendationMode?: 'builtin' | 'external'
}
```

### AddChartFromSelectionResult

```typescript
interface AddChartFromSelectionResult {
  chartId: string
  chartType: string
}
```

---

## 注意事项

- 本页仅描述根级 facade 的调用方式
- 本页新增接口均为 `PC only`
- 本页新增接口均需 `co-1.8+`
- `sdk.presentation?.start(index?)` 当前表格侧按无参启动演示处理，不承诺 `index` 生效
