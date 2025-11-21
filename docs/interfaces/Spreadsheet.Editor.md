[shimo-js-sdk - v1.2.17](/README.md) / [Spreadsheet](/modules/Spreadsheet.md) / Editor

# Interface: Editor

[Spreadsheet](/modules/Spreadsheet.md).Editor

## Hierarchy

- [`BaseEditor`](/interfaces/BaseEditor.md)<[`EventMap`](/interfaces/Spreadsheet.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [on](/interfaces/Spreadsheet.Editor.md#on)
- [off](/interfaces/Spreadsheet.Editor.md#off)
- [setTitle](/interfaces/Spreadsheet.Editor.md#settitle)
- [getCollaborators](/interfaces/Spreadsheet.Editor.md#getcollaborators)
- [showComments](/interfaces/Spreadsheet.Editor.md#showcomments)
- [hideComments](/interfaces/Spreadsheet.Editor.md#hidecomments)
- [showHistory](/interfaces/Spreadsheet.Editor.md#showhistory)
- [hideHistory](/interfaces/Spreadsheet.Editor.md#hidehistory)
- [showLocks](/interfaces/Spreadsheet.Editor.md#showlocks)
- [hideLocks](/interfaces/Spreadsheet.Editor.md#hidelocks)
- [createRevision](/interfaces/Spreadsheet.Editor.md#createrevision)
- [startDemonstration](/interfaces/Spreadsheet.Editor.md#startdemonstration)
- [endDemonstration](/interfaces/Spreadsheet.Editor.md#enddemonstration)
- [print](/interfaces/Spreadsheet.Editor.md#print)
- [addRangeLock](/interfaces/Spreadsheet.Editor.md#addrangelock)
- [addSheetLock](/interfaces/Spreadsheet.Editor.md#addsheetlock)
- [removeRangeLocksInRanges](/interfaces/Spreadsheet.Editor.md#removerangelocksinranges)
- [removeSheetLock](/interfaces/Spreadsheet.Editor.md#removesheetlock)
- [getActiveSheetId](/interfaces/Spreadsheet.Editor.md#getactivesheetid)
- [getSheetIds](/interfaces/Spreadsheet.Editor.md#getsheetids)
- [getSheetIdByIndex](/interfaces/Spreadsheet.Editor.md#getsheetidbyindex)
- [getRangeValues](/interfaces/Spreadsheet.Editor.md#getrangevalues)
- [getCellValue](/interfaces/Spreadsheet.Editor.md#getcellvalue)
- [getRowCount](/interfaces/Spreadsheet.Editor.md#getrowcount)
- [getColumnCount](/interfaces/Spreadsheet.Editor.md#getcolumncount)
- [isSheetVisible](/interfaces/Spreadsheet.Editor.md#issheetvisible)
- [updateRuntimeEnv](/interfaces/Spreadsheet.Editor.md#updateruntimeenv)
- [setContent](/interfaces/Spreadsheet.Editor.md#setcontent)
- [setFocus](/interfaces/Spreadsheet.Editor.md#setfocus)
- [exportCsv](/interfaces/Spreadsheet.Editor.md#exportcsv)
- [search](/interfaces/Spreadsheet.Editor.md#search)
- [locateCell](/interfaces/Spreadsheet.Editor.md#locatecell)
- [cancelSearchHighlights](/interfaces/Spreadsheet.Editor.md#cancelsearchhighlights)
- [locateCellByGuid](/interfaces/Spreadsheet.Editor.md#locatecellbyguid)
- [setActiveSheet](/interfaces/Spreadsheet.Editor.md#setactivesheet)
- [getSheetList](/interfaces/Spreadsheet.Editor.md#getsheetlist)
- [getSelections](/interfaces/Spreadsheet.Editor.md#getselections)
- [getRangeData](/interfaces/Spreadsheet.Editor.md#getrangedata)
- [paste](/interfaces/Spreadsheet.Editor.md#paste)
- [getViewportSize](/interfaces/Spreadsheet.Editor.md#getviewportsize)
- [export](/interfaces/Spreadsheet.Editor.md#export)

## Methods

### on

▸ **on**<`K`\>(`event`, `handler`): `void`

监听事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `handler` | (`payload`: `T`[`K`]) => `void` |

#### Returns

`void`

#### Inherited from

[BaseEditor](/interfaces/BaseEditor.md).[on](/interfaces/BaseEditor.md#on)

#### Defined in

[src/types/BaseEditor.ts:58](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L58)

___

### off

▸ **off**<`K`\>(`event`, `handler?`): `void`

取消监听事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `handler?` | (`payload`: `T`[`K`]) => `void` |

#### Returns

`void`

#### Inherited from

[BaseEditor](/interfaces/BaseEditor.md).[off](/interfaces/BaseEditor.md#off)

#### Defined in

[src/types/BaseEditor.ts:63](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L63)

___

### setTitle

▸ **setTitle**(`title`): `Promise`<`void`\>

设置文档标题

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[BaseEditor](/interfaces/BaseEditor.md).[setTitle](/interfaces/BaseEditor.md#settitle)

#### Defined in

[src/types/BaseEditor.ts:68](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L68)

___

### getCollaborators

▸ **getCollaborators**(): `Collaborator`[]

获取当前协作者列表

#### Returns

`Collaborator`[]

#### Inherited from

[BaseEditor](/interfaces/BaseEditor.md).[getCollaborators](/interfaces/BaseEditor.md#getcollaborators)

#### Defined in

[src/types/BaseEditor.ts:73](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L73)

___

### showComments

▸ **showComments**(): `Promise`<`void`\>

展示评论侧边栏

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:143](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L143)

___

### hideComments

▸ **hideComments**(): `Promise`<`void`\>

关闭评论侧边栏

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:148](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L148)

___

### showHistory

▸ **showHistory**(): `Promise`<`void`\>

展示历史侧边栏

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:153](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L153)

___

### hideHistory

▸ **hideHistory**(): `Promise`<`void`\>

关闭历史侧边栏

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:158](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L158)

___

### showLocks

▸ **showLocks**(): `Promise`<`void`\>

展示锁定侧边栏

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:163](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L163)

___

### hideLocks

▸ **hideLocks**(): `Promise`<`void`\>

关闭锁定侧边栏

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:168](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L168)

___

### createRevision

▸ **createRevision**(): `Promise`<`void`\>

创建版本

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:173](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L173)

___

### startDemonstration

▸ **startDemonstration**(): `Promise`<`void`\>

进入演示模式

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:178](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L178)

___

### endDemonstration

▸ **endDemonstration**(): `Promise`<`void`\>

离开演示模式

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:183](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L183)

___

### print

▸ **print**(): `Promise`<`void`\>

打印

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:188](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L188)

___

### addRangeLock

▸ **addRangeLock**(`options`): `Promise`<`void`\>

创建单元格锁定

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.userPermissions` | [`UserPermission`](/interfaces/Spreadsheet.UserPermission.md) | 用户id对应的权限 |
| `options.ranges?` | [`Range`](/interfaces/Spreadsheet.Range.md)[] | 单元格范围  **`default`** 默认当前选中区域范围 |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |
| `options.description?` | `string` | 对该锁定的描述 |
| `options.departmentPermissions?` | [`DepartmentPermission`](/interfaces/Spreadsheet.DepartmentPermission.md) | 部门id对应的权限 |
| `options.visitorPermission?` | [`PermissionLevel`](/modules/Spreadsheet.md#permissionlevel) | 其他访问者的权限  **`default`** 1 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:193](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L193)

___

### addSheetLock

▸ **addSheetLock**(`options`): `Promise`<`void`\>

创建工作表锁定

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.userPermissions` | [`UserPermission`](/interfaces/Spreadsheet.UserPermission.md) | 用户id对应的权限 |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |
| `options.description?` | `string` | 对该锁定的描述 |
| `options.departmentPermissions?` | [`DepartmentPermission`](/interfaces/Spreadsheet.DepartmentPermission.md) | 部门id对应的权限 |
| `options.visitorPermission?` | [`PermissionLevel`](/modules/Spreadsheet.md#permissionlevel) | 其他访问者的权限  **`default`** 1 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:223](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L223)

___

### removeRangeLocksInRanges

▸ **removeRangeLocksInRanges**(`options`): `Promise`<`void`\>

删除指定范围内的所有单元格锁定

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |
| `options.ranges?` | [`Range`](/interfaces/Spreadsheet.Range.md)[] | 单元格范围  **`default`** 默认当前选中区域范围 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:248](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L248)

___

### removeSheetLock

▸ **removeSheetLock**(`options`): `Promise`<`void`\>

删除工作表锁定

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |
| `options.preview?` | `undefined` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:267](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L267)

___

### getActiveSheetId

▸ **getActiveSheetId**(): `Promise`<`string`\>

获取当前激活sheet的id

**`since`** PD2.10

#### Returns

`Promise`<`string`\>

#### Defined in

[src/types/Spreadsheet.ts:282](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L282)

___

### getSheetIds

▸ **getSheetIds**(): `Promise`<`string`[]\>

获取所有工作表的id

**`since`** PD2.10

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/types/Spreadsheet.ts:287](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L287)

___

### getSheetIdByIndex

▸ **getSheetIdByIndex**(`options`): `Promise`<`string`\>

根据工作表index获取工作表id

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.index` | `number` | 工作表index（从0开始） |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/types/Spreadsheet.ts:292](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L292)

___

### getRangeValues

▸ **getRangeValues**(`options`): `Promise`<[`CellValue`](/modules/Spreadsheet.md#cellvalue)[][]\>

获取工作表指定范围内的单元格的值

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |
| `options.range?` | [`Range`](/interfaces/Spreadsheet.Range.md)[] | 单元格范围  **`default`** 默认当前选中范围 |

#### Returns

`Promise`<[`CellValue`](/modules/Spreadsheet.md#cellvalue)[][]\>

#### Defined in

[src/types/Spreadsheet.ts:303](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L303)

___

### getCellValue

▸ **getCellValue**(`options`): `Promise`<[`CellValue`](/modules/Spreadsheet.md#cellvalue)\>

获取指定单元格的值

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |
| `options.row` | `number` | 行index（从0开始） |
| `options.column` | `number` | 列index（从0开始） |

#### Returns

`Promise`<[`CellValue`](/modules/Spreadsheet.md#cellvalue)\>

#### Defined in

[src/types/Spreadsheet.ts:322](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L322)

___

### getRowCount

▸ **getRowCount**(`options`): `Promise`<`number`\>

获取指定工作表行数量

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/types/Spreadsheet.ts:340](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L340)

___

### getColumnCount

▸ **getColumnCount**(`options`): `Promise`<`number`\>

获取指定工作表列数量

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/types/Spreadsheet.ts:354](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L354)

___

### isSheetVisible

▸ **isSheetVisible**(`options`): `Promise`<`boolean`\>

获取指定工作表是否可见

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/types/Spreadsheet.ts:368](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L368)

___

### updateRuntimeEnv

▸ **updateRuntimeEnv**(`options`): `Promise`<`void`\>

更新环境变量

**`since`** PD3.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.env` | `Object` | 要更新的环境变量 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:382](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L382)

___

### setContent

▸ **setContent**(`options`): `Promise`<`void`\>

设置文件内容

**`since`** PD3.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.content` | `any` | 要设置的文件内容，会替换当前内容，实际类型接受 string \| Delta |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:393](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L393)

___

### setFocus

▸ **setFocus**(`options`): `Promise`<`void`\>

设置聚焦状态

**`since`** PD3.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.isFocus?` | `boolean` | 设置表格聚焦状态  **`default`** true |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:404](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L404)

___

### exportCsv

▸ **exportCsv**(): `Promise`<`void`\>

导出csv

**`since`** pd-3.12

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:418](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L418)

___

### search

▸ **search**(`options`): `Promise`<[`SearchMatch`](/modules/Spreadsheet.md#searchmatch)[]\>

查找表格内容并高亮

**`since`** co-1.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.text` | `string` | 要查找的内容 |
| `options.range?` | [`Range`](/interfaces/Spreadsheet.Range.md) \| [`Range`](/interfaces/Spreadsheet.Range.md)[] | 查找的范围  **`default`** 默认当前选中的范围 |

#### Returns

`Promise`<[`SearchMatch`](/modules/Spreadsheet.md#searchmatch)[]\>

#### Defined in

[src/types/Spreadsheet.ts:423](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L423)

___

### locateCell

▸ **locateCell**(`options`): `Promise`<`void`\>

定位单元格

**`since`** co-1.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.row` | `number` | 要定位的单元格行坐标 |
| `options.column` | `number` | 要定位的单元格列坐标 |
| `options.sheetId?` | `string` | 要定位的工作表id  **`default`** 默认当前激活工作表id |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:439](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L439)

___

### cancelSearchHighlights

▸ **cancelSearchHighlights**(): `Promise`<`void`\>

取消搜索高亮

**`since`** co-1.0

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:457](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L457)

___

### locateCellByGuid

▸ **locateCellByGuid**(`options`): `Promise`<`void`\>

通过通知的guid定位单元格

**`since`** co-1.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.notificationType` | [`NotificationType`](/modules/Spreadsheet.md#notificationtype) | 通知类型 |
| `options.guid` | `string` | 锚点guid |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:462](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L462)

___

### setActiveSheet

▸ **setActiveSheet**(`options`): `Promise`<`void`\>

设置激活工作表

**`since`** co-1.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.sheetId` | `string` | 要激活的工作表id |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:475](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L475)

___

### getSheetList

▸ **getSheetList**(): `Promise`<{ `name`: `string` ; `id`: `string`  }[]\>

获取工作表列表信息

**`since`** co-1.0

#### Returns

`Promise`<{ `name`: `string` ; `id`: `string`  }[]\>

#### Defined in

[src/types/Spreadsheet.ts:486](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L486)

___

### getSelections

▸ **getSelections**(): `Promise`<[`Range`](/interfaces/Spreadsheet.Range.md)[]\>

获取当前表格选中的范围

**`since`** co-1.0

#### Returns

`Promise`<[`Range`](/interfaces/Spreadsheet.Range.md)[]\>

#### Defined in

[src/types/Spreadsheet.ts:491](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L491)

___

### getRangeData

▸ **getRangeData**(`options`): `Promise`<[`RangeData`](/modules/Spreadsheet.md#rangedata)[][]\>

获取工作表指定范围内的单元格的数据

**`since`** co-1.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.range?` | [`Range`](/interfaces/Spreadsheet.Range.md) | 范围  **`default`** 默认当前选中的范围 |

#### Returns

`Promise`<[`RangeData`](/modules/Spreadsheet.md#rangedata)[][]\>

#### Defined in

[src/types/Spreadsheet.ts:496](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L496)

___

### paste

▸ **paste**(`options`): `Promise`<`void`\>

粘贴内容

**`since`** co-1.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.html` | `string` | 从剪切板获取的text/html |
| `options.text` | `string` | 从剪切板获取的text/plain |
| `options.base64File?` | `string` | 从剪切板获取的file, 由于postMessage传输的限制，File对象需转成base64 |
| `options.removeTrailingEmptyRows?` | `boolean` | 是否删除末尾空白行 |
| `options.removeTrailingEmptyCols?` | `boolean` | 是否删除末尾空白列 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:510](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L510)

___

### getViewportSize

▸ **getViewportSize**(): `Promise`<{ `width`: `number` ; `height`: `number`  }\>

获取表格视图区域大小

**`since`** co-1.0

#### Returns

`Promise`<{ `width`: `number` ; `height`: `number`  }\>

#### Defined in

[src/types/Spreadsheet.ts:529](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L529)

___

### export

▸ **export**(`type`): `Promise`<`void`\>

导出

**`since`** co-1.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"image"`` \| ``"imagePdf"`` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:534](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L534)
