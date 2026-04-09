[shimo-js-sdk - v1.2.27](../README.md) / [Spreadsheet](../modules/Spreadsheet.md) / Editor

# Interface: Editor

[Spreadsheet](../modules/Spreadsheet.md).Editor

## Hierarchy

- [`BaseEditor`](BaseEditor.md)<[`EventMap`](Spreadsheet.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [on](Spreadsheet.Editor.md#on)
- [off](Spreadsheet.Editor.md#off)
- [setTitle](Spreadsheet.Editor.md#settitle)
- [getCollaborators](Spreadsheet.Editor.md#getcollaborators)
- [showComments](Spreadsheet.Editor.md#showcomments)
- [hideComments](Spreadsheet.Editor.md#hidecomments)
- [showHistory](Spreadsheet.Editor.md#showhistory)
- [hideHistory](Spreadsheet.Editor.md#hidehistory)
- [showLocks](Spreadsheet.Editor.md#showlocks)
- [hideLocks](Spreadsheet.Editor.md#hidelocks)
- [createRevision](Spreadsheet.Editor.md#createrevision)
- [startDemonstration](Spreadsheet.Editor.md#startdemonstration)
- [endDemonstration](Spreadsheet.Editor.md#enddemonstration)
- [print](Spreadsheet.Editor.md#print)
- [addRangeLock](Spreadsheet.Editor.md#addrangelock)
- [addSheetLock](Spreadsheet.Editor.md#addsheetlock)
- [removeRangeLocksInRanges](Spreadsheet.Editor.md#removerangelocksinranges)
- [removeSheetLock](Spreadsheet.Editor.md#removesheetlock)
- [getActiveSheetId](Spreadsheet.Editor.md#getactivesheetid)
- [getSheetIds](Spreadsheet.Editor.md#getsheetids)
- [getSheetIdByIndex](Spreadsheet.Editor.md#getsheetidbyindex)
- [getRangeValues](Spreadsheet.Editor.md#getrangevalues)
- [getCellValue](Spreadsheet.Editor.md#getcellvalue)
- [getRowCount](Spreadsheet.Editor.md#getrowcount)
- [getColumnCount](Spreadsheet.Editor.md#getcolumncount)
- [isSheetVisible](Spreadsheet.Editor.md#issheetvisible)
- [updateRuntimeEnv](Spreadsheet.Editor.md#updateruntimeenv)
- [setContent](Spreadsheet.Editor.md#setcontent)
- [setFocus](Spreadsheet.Editor.md#setfocus)
- [exportCsv](Spreadsheet.Editor.md#exportcsv)
- [search](Spreadsheet.Editor.md#search)
- [locateCell](Spreadsheet.Editor.md#locatecell)
- [cancelSearchHighlights](Spreadsheet.Editor.md#cancelsearchhighlights)
- [locateCellByGuid](Spreadsheet.Editor.md#locatecellbyguid)
- [setActiveSheet](Spreadsheet.Editor.md#setactivesheet)
- [getSheetList](Spreadsheet.Editor.md#getsheetlist)
- [getSelections](Spreadsheet.Editor.md#getselections)
- [getRangeData](Spreadsheet.Editor.md#getrangedata)
- [paste](Spreadsheet.Editor.md#paste)
- [getViewportSize](Spreadsheet.Editor.md#getviewportsize)
- [export](Spreadsheet.Editor.md#export)

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

[BaseEditor](BaseEditor.md).[on](BaseEditor.md#on)

#### Defined in

[src/types/BaseEditor.ts:68](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/BaseEditor.ts#L68)

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

[BaseEditor](BaseEditor.md).[off](BaseEditor.md#off)

#### Defined in

[src/types/BaseEditor.ts:73](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/BaseEditor.ts#L73)

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

[BaseEditor](BaseEditor.md).[setTitle](BaseEditor.md#settitle)

#### Defined in

[src/types/BaseEditor.ts:78](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/BaseEditor.ts#L78)

___

### getCollaborators

▸ **getCollaborators**(): `Collaborator`[]

获取当前协作者列表

#### Returns

`Collaborator`[]

#### Inherited from

[BaseEditor](BaseEditor.md).[getCollaborators](BaseEditor.md#getcollaborators)

#### Defined in

[src/types/BaseEditor.ts:83](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/BaseEditor.ts#L83)

___

### showComments

▸ **showComments**(): `Promise`<`void`\>

展示评论侧边栏

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:143](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L143)

___

### hideComments

▸ **hideComments**(): `Promise`<`void`\>

关闭评论侧边栏

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:148](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L148)

___

### showHistory

▸ **showHistory**(): `Promise`<`void`\>

展示历史侧边栏

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:153](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L153)

___

### hideHistory

▸ **hideHistory**(): `Promise`<`void`\>

关闭历史侧边栏

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:158](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L158)

___

### showLocks

▸ **showLocks**(): `Promise`<`void`\>

展示锁定侧边栏

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:163](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L163)

___

### hideLocks

▸ **hideLocks**(): `Promise`<`void`\>

关闭锁定侧边栏

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:168](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L168)

___

### createRevision

▸ **createRevision**(`options?`): `Promise`<`void`\>

创建版本

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.name?` | `string` | 版本名称，since co-1.6 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:174](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L174)

___

### startDemonstration

▸ **startDemonstration**(): `Promise`<`void`\>

进入演示模式

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:179](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L179)

___

### endDemonstration

▸ **endDemonstration**(): `Promise`<`void`\>

离开演示模式

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:184](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L184)

___

### print

▸ **print**(): `Promise`<`void`\>

打印

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:189](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L189)

___

### addRangeLock

▸ **addRangeLock**(`options`): `Promise`<`void`\>

创建单元格锁定

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.userPermissions` | [`UserPermission`](Spreadsheet.UserPermission.md) | 用户id对应的权限 |
| `options.ranges?` | [`Range`](Spreadsheet.Range.md)[] | 单元格范围  **`default`** 默认当前选中区域范围 |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |
| `options.description?` | `string` | 对该锁定的描述 |
| `options.departmentPermissions?` | [`DepartmentPermission`](Spreadsheet.DepartmentPermission.md) | 部门id对应的权限 |
| `options.visitorPermission?` | [`PermissionLevel`](../modules/Spreadsheet.md#permissionlevel) | 其他访问者的权限  **`default`** 1 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:194](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L194)

___

### addSheetLock

▸ **addSheetLock**(`options`): `Promise`<`void`\>

创建工作表锁定

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.userPermissions` | [`UserPermission`](Spreadsheet.UserPermission.md) | 用户id对应的权限 |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |
| `options.description?` | `string` | 对该锁定的描述 |
| `options.departmentPermissions?` | [`DepartmentPermission`](Spreadsheet.DepartmentPermission.md) | 部门id对应的权限 |
| `options.visitorPermission?` | [`PermissionLevel`](../modules/Spreadsheet.md#permissionlevel) | 其他访问者的权限  **`default`** 1 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:224](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L224)

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
| `options.ranges?` | [`Range`](Spreadsheet.Range.md)[] | 单元格范围  **`default`** 默认当前选中区域范围 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:249](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L249)

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

[src/types/Spreadsheet.ts:268](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L268)

___

### getActiveSheetId

▸ **getActiveSheetId**(): `Promise`<`string`\>

获取当前激活sheet的id

**`since`** PD2.10

#### Returns

`Promise`<`string`\>

#### Defined in

[src/types/Spreadsheet.ts:283](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L283)

___

### getSheetIds

▸ **getSheetIds**(): `Promise`<`string`[]\>

获取所有工作表的id

**`since`** PD2.10

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/types/Spreadsheet.ts:288](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L288)

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

[src/types/Spreadsheet.ts:293](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L293)

___

### getRangeValues

▸ **getRangeValues**(`options`): `Promise`<[`CellValue`](../modules/Spreadsheet.md#cellvalue)[][]\>

获取工作表指定范围内的单元格的值

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |
| `options.range?` | [`Range`](Spreadsheet.Range.md)[] | 单元格范围  **`default`** 默认当前选中范围 |

#### Returns

`Promise`<[`CellValue`](../modules/Spreadsheet.md#cellvalue)[][]\>

#### Defined in

[src/types/Spreadsheet.ts:304](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L304)

___

### getCellValue

▸ **getCellValue**(`options`): `Promise`<[`CellValue`](../modules/Spreadsheet.md#cellvalue)\>

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

`Promise`<[`CellValue`](../modules/Spreadsheet.md#cellvalue)\>

#### Defined in

[src/types/Spreadsheet.ts:323](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L323)

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

[src/types/Spreadsheet.ts:341](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L341)

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

[src/types/Spreadsheet.ts:355](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L355)

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

[src/types/Spreadsheet.ts:369](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L369)

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

[src/types/Spreadsheet.ts:383](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L383)

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

[src/types/Spreadsheet.ts:394](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L394)

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

[src/types/Spreadsheet.ts:405](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L405)

___

### exportCsv

▸ **exportCsv**(): `Promise`<`void`\>

导出csv

**`since`** pd-3.12

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:419](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L419)

___

### search

▸ **search**(`options`): `Promise`<[`SearchMatch`](../modules/Spreadsheet.md#searchmatch)[]\>

查找表格内容并高亮

**`since`** co-1.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.text` | `string` | 要查找的内容 |
| `options.range?` | [`Range`](Spreadsheet.Range.md) \| [`Range`](Spreadsheet.Range.md)[] | 查找的范围  **`default`** 默认当前选中的范围 |

#### Returns

`Promise`<[`SearchMatch`](../modules/Spreadsheet.md#searchmatch)[]\>

#### Defined in

[src/types/Spreadsheet.ts:424](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L424)

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

[src/types/Spreadsheet.ts:440](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L440)

___

### cancelSearchHighlights

▸ **cancelSearchHighlights**(): `Promise`<`void`\>

取消搜索高亮

**`since`** co-1.0

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:458](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L458)

___

### locateCellByGuid

▸ **locateCellByGuid**(`options`): `Promise`<`void`\>

通过通知的guid定位单元格

**`since`** co-1.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.notificationType` | [`NotificationType`](../modules/Spreadsheet.md#notificationtype) | 通知类型 |
| `options.guid` | `string` | 锚点guid |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:463](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L463)

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

[src/types/Spreadsheet.ts:476](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L476)

___

### getSheetList

▸ **getSheetList**(): `Promise`<{ `name`: `string` ; `id`: `string`  }[]\>

获取工作表列表信息

**`since`** co-1.0

#### Returns

`Promise`<{ `name`: `string` ; `id`: `string`  }[]\>

#### Defined in

[src/types/Spreadsheet.ts:487](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L487)

___

### getSelections

▸ **getSelections**(): `Promise`<[`Range`](Spreadsheet.Range.md)[]\>

获取当前表格选中的范围

**`since`** co-1.0

#### Returns

`Promise`<[`Range`](Spreadsheet.Range.md)[]\>

#### Defined in

[src/types/Spreadsheet.ts:492](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L492)

___

### getRangeData

▸ **getRangeData**(`options`): `Promise`<[`RangeData`](../modules/Spreadsheet.md#rangedata)[][]\>

获取工作表指定范围内的单元格的数据

**`since`** co-1.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.range?` | [`Range`](Spreadsheet.Range.md) | 范围  **`default`** 默认当前选中的范围 |

#### Returns

`Promise`<[`RangeData`](../modules/Spreadsheet.md#rangedata)[][]\>

#### Defined in

[src/types/Spreadsheet.ts:497](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L497)

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

[src/types/Spreadsheet.ts:511](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L511)

___

### getViewportSize

▸ **getViewportSize**(): `Promise`<{ `width`: `number` ; `height`: `number`  }\>

获取表格视图区域大小

**`since`** co-1.0

#### Returns

`Promise`<{ `width`: `number` ; `height`: `number`  }\>

#### Defined in

[src/types/Spreadsheet.ts:530](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L530)

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

[src/types/Spreadsheet.ts:535](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Spreadsheet.ts#L535)
