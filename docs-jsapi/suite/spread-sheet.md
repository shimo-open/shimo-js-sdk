# API

## 方法

### 方法列表

| 方法                                                  | 说明                               |
| ----------------------------------------------------- | ---------------------------------- |
| [showComments](#showcomments)                         | 展示评论侧边栏                     |
| [hideComments](#hidecomments)                         | 关闭评论侧边栏                     |
| [showHistory](#showhistory)                           | 展示历史侧边栏                     |
| [hideHistory](#hidehistory)                           | 关闭历史侧边栏                     |
| [showLocks](#showlocks)                               | 展示锁定侧边栏                     |
| [hideLocks](#hidelocks)                               | 关闭锁定侧边栏                     |
| [createRevision](#createrevision)                     | 创建版本                           |
| [startDemonstration](#startdemonstration)             | 进入演示模式                       |
| [endDemonstration](#enddemonstration)                 | 离开演示模式                       |
| [print](#print)                                       | 打印                               |
| [addRangeLock](#addrangelock)                         | 创建单元格锁定                     |
| [addSheetLock](#addsheetlock)                         | 创建工作表锁定                     |
| [removeRangeLocksInRanges](#removerangelocksinranges) | 删除指定范围内的所有单元格锁定     |
| [removeSheetLock](#removesheetlock)                   | 删除工作表锁定                     |
| [getActiveSheetId](#getactivesheetid)                 | 获取当前激活 sheet 的 id           |
| [getSheetIds](#getsheetids)                           | 获取所有工作表的 id                |
| [getSheetIdByIndex](#getsheetidbyindex)               | 根据工作表 index 获取工作表 id     |
| [getRangeValues](#getrangevalues)                     | 获取工作表指定范围内的单元格的值   |
| [getCellValue](#getcellvalue)                         | 获取指定单元格的值                 |
| [getRowCount](#getrowcount)                           | 获取指定工作表行数量               |
| [getColumnCount](#getcolumncount)                     | 获取指定工作表列数量               |
| [isSheetVisible](#issheetvisible)                     | 获取指定工作表是否可见             |
| [updateRuntimeEnv](#updateruntimeenv)                 | 更新环境变量                       |
| [setContent](#setcontent)                             | 设置文件内容                       |
| [setFocus](#setfocus)                                 | 设置聚焦状态                       |
| [exportCsv](#exportcsv)                               | 导出 csv                           |
| [search](#search)                                     | 查找表格内容并高亮                 |
| [locateCell](#locatecell)                             | 定位单元格                         |
| [cancelSearchHighlights](#cancelsearchhighlights)     | 取消搜索高亮                       |
| [locateCellByGuid](#locatecellbyguid)                 | 通过通知的 guid 定位单元格         |
| [setActiveSheet](#setactivesheet)                     | 设置激活工作表                     |
| [getSheetList](#getsheetlist)                         | 获取工作表列表信息                 |
| [getSelections](#getselections)                       | 获取当前表格选中的范围             |
| [getRangeData](#getrangedata)                         | 获取工作表指定范围内的单元格的数据 |
| [paste](#paste)                                       | 粘贴内容                           |
| [getViewportSize](#getviewportsize)                   | 获取表格视图区域大小               |
| [export](#export)                                     | 导出                               |

---

### showComments

#### 说明

展示评论侧边栏，用于查看和管理表格中的评论。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
showComments(): Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.showComments()
```

---

### hideComments

#### 说明

关闭评论侧边栏。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
hideComments(): Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.hideComments()
```

---

### showHistory

#### 说明

展示历史侧边栏，查看表格的历史版本。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
showHistory(): Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.showHistory()
```

---

### hideHistory

#### 说明

关闭历史侧边栏。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
hideHistory(): Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.hideHistory()
```

---

### showLocks

#### 说明

展示锁定侧边栏，查看和管理表格的锁定设置。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
showLocks(): Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.showLocks()
```

---

### hideLocks

#### 说明

关闭锁定侧边栏。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
hideLocks(): Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.hideLocks()
```

---

### createRevision

#### 说明

创建表格版本，保存当前状态为版本快照。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
createRevision(): Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.createRevision()
console.log('版本创建成功')
```

---

### startDemonstration

#### 说明

进入演示模式，开始表格演示。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
startDemonstration(): Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.startDemonstration()
```

---

### endDemonstration

#### 说明

离开演示模式，结束表格演示。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
endDemonstration(): Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.endDemonstration()
```

---

### print

#### 说明

打印表格。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
print(): Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.print()
```

---

### addRangeLock

#### 说明

创建单元格范围锁定，限制指定用户或部门对特定单元格的访问权限。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
addRangeLock(options: {
  userPermissions: UserPermission
  ranges?: Range[]
  sheetId?: string
  description?: string
  departmentPermissions?: DepartmentPermission
  visitorPermission?: PermissionLevel
}): Promise<void>
```

#### 参数

- `userPermissions`: 用户 id 对应的权限
- `ranges`: 单元格范围（默认当前选中区域范围）
- `sheetId`: 工作表 id（默认当前工作表 id）
- `description`: 对该锁定的描述
- `departmentPermissions`: 部门 id 对应的权限
- `visitorPermission`: 其他访问者的权限（默认为 1）

#### 示例

```javascript
const editor = sdk.getEditor()

// 创建单元格锁定
await editor.addRangeLock({
  userPermissions: {
    123: 0, // 用户123可编辑
    456: 1 // 用户456只能查看
  },
  ranges: [{ row: 0, column: 0, rowCount: 5, columnCount: 3 }],
  description: '重要数据区域',
  visitorPermission: 1 // 其他访问者只能查看
})
```

---

### addSheetLock

#### 说明

创建工作表锁定，限制对整个工作表的访问权限。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
addSheetLock(options: {
  userPermissions: UserPermission
  sheetId?: string
  description?: string
  departmentPermissions?: DepartmentPermission
  visitorPermission?: PermissionLevel
}): Promise<void>
```

#### 参数

- `userPermissions`: 用户 id 对应的权限
- `sheetId`: 工作表 id（默认当前工作表 id）
- `description`: 对该锁定的描述
- `departmentPermissions`: 部门 id 对应的权限
- `visitorPermission`: 其他访问者的权限（默认为 1）

#### 示例

```javascript
const editor = sdk.getEditor()

// 创建工作表锁定
await editor.addSheetLock({
  userPermissions: {
    123: 0, // 用户123可编辑
    456: 2 // 用户456禁止查看
  },
  description: '财务数据工作表',
  visitorPermission: 2 // 其他访问者禁止查看
})
```

---

### removeRangeLocksInRanges

#### 说明

删除指定范围内的所有单元格锁定。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
removeRangeLocksInRanges(options: {
  sheetId?: string
  ranges?: Range[]
}): Promise<void>
```

#### 参数

- `sheetId`: 工作表 id（默认当前工作表 id）
- `ranges`: 单元格范围（默认当前选中区域范围）

#### 示例

```javascript
const editor = sdk.getEditor()

// 删除指定范围的锁定
await editor.removeRangeLocksInRanges({
  ranges: [{ row: 0, column: 0, rowCount: 5, columnCount: 3 }]
})
```

---

### removeSheetLock

#### 说明

删除工作表锁定。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
removeSheetLock(options: {
  sheetId?: string
}): Promise<void>
```

#### 参数

- `sheetId`: 工作表 id（默认当前工作表 id）

#### 示例

```javascript
const editor = sdk.getEditor()

// 删除工作表锁定
await editor.removeSheetLock()
```

---

### getActiveSheetId

#### 说明

获取当前激活工作表的 ID。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
getActiveSheetId(): Promise<string>
```

#### 示例

```javascript
const editor = sdk.getEditor()

const activeSheetId = await editor.getActiveSheetId()
console.log('当前激活的工作表ID:', activeSheetId)
```

---

### getSheetIds

#### 说明

获取所有工作表的 ID 列表。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
getSheetIds(): Promise<string[]>
```

#### 示例

```javascript
const editor = sdk.getEditor()

const sheetIds = await editor.getSheetIds()
console.log('所有工作表ID:', sheetIds)
```

---

### getSheetIdByIndex

#### 说明

根据工作表索引获取工作表 ID。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
getSheetIdByIndex(options: {
  index: number
}): Promise<string>
```

#### 参数

- `index`: 工作表索引（从 0 开始）

#### 示例

```javascript
const editor = sdk.getEditor()

// 获取第一个工作表的ID
const sheetId = await editor.getSheetIdByIndex({
  index: 0
})
console.log('第一个工作表ID:', sheetId)
```

---

### getRangeValues

#### 说明

获取工作表指定范围内单元格的值。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
getRangeValues(options: {
  sheetId?: string
  range?: Range[]
}): Promise<CellValue[][]>
```

#### 参数

- `sheetId`: 工作表 id（默认当前工作表 id）
- `range`: 单元格范围（默认当前选中范围）

#### 示例

```javascript
const editor = sdk.getEditor()

// 获取A1:C5范围的值
const values = await editor.getRangeValues({
  range: [{ row: 0, column: 0, rowCount: 5, columnCount: 3 }]
})

console.log('单元格值:', values)
// 输出: [['A1值', 'B1值', 'C1值'], ['A2值', 'B2值', 'C2值'], ...]
```

---

### getCellValue

#### 说明

获取指定单元格的值。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
getCellValue(options: {
  sheetId?: string
  row: number
  column: number
}): Promise<CellValue>
```

#### 参数

- `sheetId`: 工作表 id（默认当前工作表 id）
- `row`: 行索引（从 0 开始）
- `column`: 列索引（从 0 开始）

#### 示例

```javascript
const editor = sdk.getEditor()

// 获取A1单元格的值
const value = await editor.getCellValue({
  row: 0,
  column: 0
})

console.log('A1单元格的值:', value)
```

---

### getRowCount

#### 说明

获取指定工作表的行数量。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
getRowCount(options: {
  sheetId?: string
}): Promise<number>
```

#### 参数

- `sheetId`: 工作表 id（默认当前工作表 id）

#### 示例

```javascript
const editor = sdk.getEditor()

const rowCount = await editor.getRowCount()
console.log('当前工作表行数:', rowCount)
```

---

### getColumnCount

#### 说明

获取指定工作表的列数量。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
getColumnCount(options: {
  sheetId?: string
}): Promise<number>
```

#### 参数

- `sheetId`: 工作表 id（默认当前工作表 id）

#### 示例

```javascript
const editor = sdk.getEditor()

const columnCount = await editor.getColumnCount()
console.log('当前工作表列数:', columnCount)
```

---

### isSheetVisible

#### 说明

获取指定工作表是否可见。

_自 PD2.10 版本开始支持_

#### 类型定义

```typescript
isSheetVisible(options: {
  sheetId?: string
}): Promise<boolean>
```

#### 参数

- `sheetId`: 工作表 id（默认当前工作表 id）

#### 示例

```javascript
const editor = sdk.getEditor()

const isVisible = await editor.isSheetVisible()
console.log('当前工作表是否可见:', isVisible)
```

---

### updateRuntimeEnv

#### 说明

更新表格的运行时环境变量。

_自 PD3.4 版本开始支持_

#### 类型定义

```typescript
updateRuntimeEnv(options: {
  env: { [key: string]: any }
}): Promise<void>
```

#### 参数

- `env`: 要更新的环境变量对象

#### 示例

```javascript
const editor = sdk.getEditor()

// 更新环境变量
await editor.updateRuntimeEnv({
  env: {
    API_URL: 'https://api.example.com',
    VERSION: '1.0.0',
    DEBUG: true
  }
})
```

---

### setContent

#### 说明

设置表格文件内容，会替换当前内容。

_自 PD3.4 版本开始支持_

#### 类型定义

```typescript
setContent(options: {
  content: any
}): Promise<void>
```

#### 参数

- `content`: 要设置的文件内容，实际类型接受 string | Delta

#### 示例

```javascript
const editor = sdk.getEditor()

// 设置新的表格内容
await editor.setContent({
  content: newSpreadsheetData
})
```

---

### setFocus

#### 说明

设置表格的聚焦状态。

_自 PD3.4 版本开始支持_

#### 类型定义

```typescript
setFocus(options: {
  isFocus?: boolean
}): Promise<void>
```

#### 参数

- `isFocus`: 设置表格聚焦状态（默认为 true）

#### 示例

```javascript
const editor = sdk.getEditor()

// 聚焦表格
await editor.setFocus({ isFocus: true })

// 取消聚焦
await editor.setFocus({ isFocus: false })
```

---

### exportCsv

#### 说明

导出表格为 CSV 格式。

_自 pd-3.12 版本开始支持_

#### 类型定义

```typescript
exportCsv(): Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()

// 导出为CSV
await editor.exportCsv()
```

---

### search

#### 说明

在表格中查找指定内容并高亮显示。

_自 co-1.0 版本开始支持_

#### 类型定义

```typescript
search(options: {
  text: string
  range?: Range | Range[]
}): Promise<SearchMatch[]>
```

#### 参数

- `text`: 要查找的内容
- `range`: 查找的范围（默认当前选中的范围）

#### 示例

```javascript
const editor = sdk.getEditor()

// 搜索包含"总计"的单元格
const matches = await editor.search({
  text: '总计',
  range: { row: 0, column: 0, rowCount: 100, columnCount: 10 }
})

matches.forEach((match) => {
  console.log(
    `找到匹配项: 行${match.row + 1}, 列${match.column + 1}, 内容: ${match.text}`
  )
})
```

---

### locateCell

#### 说明

定位到指定的单元格。

_自 co-1.0 版本开始支持_

#### 类型定义

```typescript
locateCell(options: {
  row: number
  column: number
  sheetId?: string
}): Promise<void>
```

#### 参数

- `row`: 要定位的单元格行坐标
- `column`: 要定位的单元格列坐标
- `sheetId`: 要定位的工作表 id（默认当前激活工作表 id）

#### 示例

```javascript
const editor = sdk.getEditor()

// 定位到A1单元格
await editor.locateCell({
  row: 0,
  column: 0
})

// 定位到指定工作表的B5单元格
await editor.locateCell({
  row: 4,
  column: 1,
  sheetId: 'sheet-123'
})
```

---

### cancelSearchHighlights

#### 说明

取消搜索高亮显示。

_自 co-1.0 版本开始支持_

#### 类型定义

```typescript
cancelSearchHighlights(): Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()

// 取消搜索高亮
await editor.cancelSearchHighlights()
```

---

### locateCellByGuid

#### 说明

通过通知的 GUID 定位单元格，主要用于处理@提及等通知。

_自 co-1.0 版本开始支持_

#### 类型定义

```typescript
locateCellByGuid(options: {
  notificationType: NotificationType
  guid: string
}): Promise<void>
```

#### 参数

- `notificationType`: 通知类型（'comment' | 'mention_at' | 'date_mention'）
- `guid`: 锚点 GUID

#### 示例

```javascript
const editor = sdk.getEditor()

// 通过@提及的GUID定位单元格
await editor.locateCellByGuid({
  notificationType: 'mention_at',
  guid: 'mention-guid-123'
})
```

---

### setActiveSheet

#### 说明

设置激活的工作表。

_自 co-1.0 版本开始支持_

#### 类型定义

```typescript
setActiveSheet(options: {
  sheetId: string
}): Promise<void>
```

#### 参数

- `sheetId`: 要激活的工作表 ID

#### 示例

```javascript
const editor = sdk.getEditor()

// 激活指定工作表
await editor.setActiveSheet({
  sheetId: 'sheet-456'
})
```

---

### getSheetList

#### 说明

获取工作表列表信息，包含名称和 ID。

_自 co-1.0 版本开始支持_

#### 类型定义

```typescript
getSheetList(): Promise<{ name: string; id: string }[]>
```

#### 示例

```javascript
const editor = sdk.getEditor()

const sheetList = await editor.getSheetList()
sheetList.forEach((sheet) => {
  console.log(`工作表: ${sheet.name}, ID: ${sheet.id}`)
})
```

---

### getSelections

#### 说明

获取当前表格选中的范围。

_自 co-1.0 版本开始支持_

#### 类型定义

```typescript
getSelections(): Promise<Range[]>
```

#### 示例

```javascript
const editor = sdk.getEditor()

const selections = await editor.getSelections()
selections.forEach((range) => {
  console.log(
    `选中范围: 行${range.row + 1}-${range.row + range.rowCount}, 列${
      range.column + 1
    }-${range.column + range.columnCount}`
  )
})
```

---

### getRangeData

#### 说明

获取工作表指定范围内单元格的完整数据信息，包括值、格式等。

_自 co-1.0 版本开始支持_

#### 类型定义

```typescript
getRangeData(options: {
  range?: Range
}): Promise<RangeData[][]>
```

#### 参数

- `range`: 范围（默认当前选中的范围）

#### 示例

```javascript
const editor = sdk.getEditor()

// 获取A1:C3范围的完整数据
const rangeData = await editor.getRangeData({
  range: { row: 0, column: 0, rowCount: 3, columnCount: 3 }
})

rangeData.forEach((rowData, rowIndex) => {
  rowData.forEach((cellData, colIndex) => {
    console.log(`单元格 (${rowIndex + 1}, ${colIndex + 1}):`)
    console.log('  值:', cellData.value)
    console.log('  格式:', cellData.format)
    console.log('  格式类型:', cellData.formatCategory)
  })
})
```

---

### paste

#### 说明

将剪贴板内容粘贴到表格中。

_自 co-1.0 版本开始支持_

#### 类型定义

```typescript
paste(options: {
  html: string
  text: string
  base64File?: string
  removeTrailingEmptyRows?: boolean
  removeTrailingEmptyCols?: boolean
}): Promise<void>
```

#### 参数

- `html`: 从剪贴板获取的 text/html
- `text`: 从剪贴板获取的 text/plain
- `base64File`: 从剪贴板获取的文件（转换为 base64）
- `removeTrailingEmptyRows`: 是否删除末尾空白行
- `removeTrailingEmptyCols`: 是否删除末尾空白列

#### 示例

```javascript
const editor = sdk.getEditor()

// 粘贴文本内容
await editor.paste({
  html: '<table><tr><td>数据1</td><td>数据2</td></tr></table>',
  text: '数据1\t数据2',
  removeTrailingEmptyRows: true,
  removeTrailingEmptyCols: true
})
```

---

### getViewportSize

#### 说明

获取表格视图区域的大小。

_自 co-1.0 版本开始支持_

#### 类型定义

```typescript
getViewportSize(): Promise<{ width: number; height: number }>
```

#### 示例

```javascript
const editor = sdk.getEditor()

const viewportSize = await editor.getViewportSize()
console.log(`表格视图大小: ${viewportSize.width} x ${viewportSize.height}`)
```

---

### export

#### 说明

导出表格为指定格式。

_自 co-1.5 版本开始支持_

#### 类型定义

```typescript
export(type: 'image' | 'imagePdf'): Promise<void>
```

#### 参数

- `type`: 导出类型
  - `'image'`: 导出为图片
  - `'imagePdf'`: 导出为 PDF

#### 示例

```javascript
const editor = sdk.getEditor()

// 导出为图片
await editor.export('image')

// 导出为PDF
await editor.export('imagePdf')
```

---

# EventMap

## 事件列表

| 事件名                                | 说明         | 载荷类型                       |
| ------------------------------------- | ------------ | ------------------------------ |
| [error](#error)                       | 错误事件     | `{ data?: any, code: number }` |
| [MouseMove](#mousemove)               | 鼠标移动事件 | `MouseMovePayload`             |
| [VerticalScroll](#verticalscroll)     | 垂直滚动事件 | `MouseMovePayload`             |
| [HorizontalScroll](#horizontalscroll) | 水平滚动事件 | `MouseMovePayload`             |

---

## error

### 说明

当表格编辑器发生错误时触发此事件。

### 类型定义

```typescript
error: {
  data?: any
  code: number
}
```

### 示例

```javascript
const editor = sdk.getEditor()

editor.on('error', (payload) => {
  console.error('表格编辑器发生错误:')
  console.error('错误代码:', payload.code)
  console.error('错误详情:', payload.data)

  // 根据错误码进行不同处理
  switch (payload.code) {
    case 403:
      console.error('权限不足')
      break
    case 500:
      console.error('服务器内部错误')
      break
    default:
      console.error('未知错误')
  }
})
```

---

## MouseMove

### 说明

当鼠标在表格中移动时触发此事件。

### 类型定义

```typescript
MouseMove: MouseMovePayload
```

### 示例

```javascript
const editor = sdk.getEditor()

editor.on('MouseMove', (payload) => {
  console.log('鼠标移动:', payload)
  // 可以用于实现鼠标位置跟踪等功能
})
```

---

## VerticalScroll

### 说明

当表格发生垂直滚动时触发此事件。

### 类型定义

```typescript
VerticalScroll: MouseMovePayload
```

### 示例

```javascript
const editor = sdk.getEditor()

editor.on('VerticalScroll', (payload) => {
  console.log('垂直滚动:', payload)
  // 可以用于同步滚动位置等功能
})
```

---

## HorizontalScroll

### 说明

当表格发生水平滚动时触发此事件。

### 类型定义

```typescript
HorizontalScroll: MouseMovePayload
```

### 示例

```javascript
const editor = sdk.getEditor()

editor.on('HorizontalScroll', (payload) => {
  console.log('水平滚动:', payload)
  // 可以用于同步滚动位置等功能
})
```
