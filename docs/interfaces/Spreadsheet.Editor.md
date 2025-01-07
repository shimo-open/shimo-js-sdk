[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Spreadsheet](../modules/Spreadsheet.md) / Editor

# Interface: Editor

[Spreadsheet](../modules/Spreadsheet.md).Editor

## Hierarchy

- [`BaseEditor`](BaseEditor.md)<[`EventMap`](Spreadsheet.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [addRangeLock](Spreadsheet.Editor.md#addrangelock)
- [addSheetLock](Spreadsheet.Editor.md#addsheetlock)
- [cancelSearchHighlights](Spreadsheet.Editor.md#cancelsearchhighlights)
- [createRevision](Spreadsheet.Editor.md#createrevision)
- [endDemonstration](Spreadsheet.Editor.md#enddemonstration)
- [exportCsv](Spreadsheet.Editor.md#exportcsv)
- [getActiveSheetId](Spreadsheet.Editor.md#getactivesheetid)
- [getCellValue](Spreadsheet.Editor.md#getcellvalue)
- [getColumnCount](Spreadsheet.Editor.md#getcolumncount)
- [getRangeData](Spreadsheet.Editor.md#getrangedata)
- [getRangeValues](Spreadsheet.Editor.md#getrangevalues)
- [getRowCount](Spreadsheet.Editor.md#getrowcount)
- [getSelections](Spreadsheet.Editor.md#getselections)
- [getSheetIdByIndex](Spreadsheet.Editor.md#getsheetidbyindex)
- [getSheetIds](Spreadsheet.Editor.md#getsheetids)
- [getSheetList](Spreadsheet.Editor.md#getsheetlist)
- [hideComments](Spreadsheet.Editor.md#hidecomments)
- [hideHistory](Spreadsheet.Editor.md#hidehistory)
- [hideLocks](Spreadsheet.Editor.md#hidelocks)
- [isSheetVisible](Spreadsheet.Editor.md#issheetvisible)
- [locateCell](Spreadsheet.Editor.md#locatecell)
- [locateCellByGuid](Spreadsheet.Editor.md#locatecellbyguid)
- [off](Spreadsheet.Editor.md#off)
- [on](Spreadsheet.Editor.md#on)
- [paste](Spreadsheet.Editor.md#paste)
- [print](Spreadsheet.Editor.md#print)
- [removeRangeLocksInRanges](Spreadsheet.Editor.md#removerangelocksinranges)
- [removeSheetLock](Spreadsheet.Editor.md#removesheetlock)
- [search](Spreadsheet.Editor.md#search)
- [setActiveSheet](Spreadsheet.Editor.md#setactivesheet)
- [setContent](Spreadsheet.Editor.md#setcontent)
- [setFocus](Spreadsheet.Editor.md#setfocus)
- [setTitle](Spreadsheet.Editor.md#settitle)
- [showComments](Spreadsheet.Editor.md#showcomments)
- [showHistory](Spreadsheet.Editor.md#showhistory)
- [showLocks](Spreadsheet.Editor.md#showlocks)
- [startDemonstration](Spreadsheet.Editor.md#startdemonstration)
- [updateRuntimeEnv](Spreadsheet.Editor.md#updateruntimeenv)

## Methods

### addRangeLock

▸ **addRangeLock**(`options`): `Promise`<`void`\>

创建单元格锁定

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.departmentPermissions?` | [`DepartmentPermission`](Spreadsheet.DepartmentPermission.md) | 部门id对应的权限 |
| `options.description?` | `string` | 对该锁定的描述 |
| `options.ranges?` | [`Range`](Spreadsheet.Range.md)[] | 单元格范围  **`default`** 默认当前选中区域范围 |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |
| `options.userPermissions` | [`UserPermission`](Spreadsheet.UserPermission.md) | 用户id对应的权限 |
| `options.visitorPermission?` | [`PermissionLevel`](../modules/Spreadsheet.md#permissionlevel) | 其他访问者的权限  **`default`** 1 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:193](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L193)

___

### addSheetLock

▸ **addSheetLock**(`options`): `Promise`<`void`\>

创建工作表锁定

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.departmentPermissions?` | [`DepartmentPermission`](Spreadsheet.DepartmentPermission.md) | 部门id对应的权限 |
| `options.description?` | `string` | 对该锁定的描述 |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |
| `options.userPermissions` | [`UserPermission`](Spreadsheet.UserPermission.md) | 用户id对应的权限 |
| `options.visitorPermission?` | [`PermissionLevel`](../modules/Spreadsheet.md#permissionlevel) | 其他访问者的权限  **`default`** 1 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:223](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L223)

___

### cancelSearchHighlights

▸ **cancelSearchHighlights**(): `Promise`<`void`\>

取消搜索高亮

**`since`** co-1.0

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:457](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L457)

___

### createRevision

▸ **createRevision**(): `Promise`<`void`\>

创建版本

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:173](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L173)

___

### endDemonstration

▸ **endDemonstration**(): `Promise`<`void`\>

离开演示模式

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:183](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L183)

___

### exportCsv

▸ **exportCsv**(): `Promise`<`void`\>

导出csv

**`since`** pd-3.12

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:418](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L418)

___

### getActiveSheetId

▸ **getActiveSheetId**(): `Promise`<`string`\>

获取当前激活sheet的id

**`since`** PD2.10

#### Returns

`Promise`<`string`\>

#### Defined in

[src/types/Spreadsheet.ts:282](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L282)

___

### getCellValue

▸ **getCellValue**(`options`): `Promise`<[`CellValue`](../modules/Spreadsheet.md#cellvalue)\>

获取指定单元格的值

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.column` | `number` | 列index（从0开始） |
| `options.row` | `number` | 行index（从0开始） |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |

#### Returns

`Promise`<[`CellValue`](../modules/Spreadsheet.md#cellvalue)\>

#### Defined in

[src/types/Spreadsheet.ts:322](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L322)

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

[src/types/Spreadsheet.ts:354](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L354)

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

[src/types/Spreadsheet.ts:496](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L496)

___

### getRangeValues

▸ **getRangeValues**(`options`): `Promise`<[`CellValue`](../modules/Spreadsheet.md#cellvalue)[][]\>

获取工作表指定范围内的单元格的值

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.range?` | [`Range`](Spreadsheet.Range.md)[] | 单元格范围  **`default`** 默认当前选中范围 |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |

#### Returns

`Promise`<[`CellValue`](../modules/Spreadsheet.md#cellvalue)[][]\>

#### Defined in

[src/types/Spreadsheet.ts:303](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L303)

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

[src/types/Spreadsheet.ts:340](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L340)

___

### getSelections

▸ **getSelections**(): `Promise`<[`Range`](Spreadsheet.Range.md)[]\>

获取当前表格选中的范围

**`since`** co-1.0

#### Returns

`Promise`<[`Range`](Spreadsheet.Range.md)[]\>

#### Defined in

[src/types/Spreadsheet.ts:491](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L491)

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

[src/types/Spreadsheet.ts:292](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L292)

___

### getSheetIds

▸ **getSheetIds**(): `Promise`<`string`[]\>

获取所有工作表的id

**`since`** PD2.10

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/types/Spreadsheet.ts:287](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L287)

___

### getSheetList

▸ **getSheetList**(): `Promise`<{ `id`: `string` ; `name`: `string`  }[]\>

获取工作表列表信息

**`since`** co-1.0

#### Returns

`Promise`<{ `id`: `string` ; `name`: `string`  }[]\>

#### Defined in

[src/types/Spreadsheet.ts:486](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L486)

___

### hideComments

▸ **hideComments**(): `Promise`<`void`\>

关闭评论侧边栏

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:148](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L148)

___

### hideHistory

▸ **hideHistory**(): `Promise`<`void`\>

关闭历史侧边栏

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:158](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L158)

___

### hideLocks

▸ **hideLocks**(): `Promise`<`void`\>

关闭锁定侧边栏

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:168](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L168)

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

[src/types/Spreadsheet.ts:368](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L368)

___

### locateCell

▸ **locateCell**(`options`): `Promise`<`void`\>

定位单元格

**`since`** co-1.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.column` | `number` | 要定位的单元格列坐标 |
| `options.row` | `number` | 要定位的单元格行坐标 |
| `options.sheetId?` | `string` | 要定位的工作表id  **`default`** 默认当前激活工作表id |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:439](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L439)

___

### locateCellByGuid

▸ **locateCellByGuid**(`options`): `Promise`<`void`\>

通过通知的guid定位单元格

**`since`** co-1.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.guid` | `string` | 锚点guid |
| `options.notificationType` | [`NotificationType`](../modules/Spreadsheet.md#notificationtype) | 通知类型 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:462](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L462)

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

[src/types/BaseEditor.ts:42](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/BaseEditor.ts#L42)

___

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

[src/types/BaseEditor.ts:37](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/BaseEditor.ts#L37)

___

### paste

▸ **paste**(`options`): `Promise`<`void`\>

粘贴内容

**`since`** co-1.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.base64File?` | `string` | 从剪切板获取的file, 由于postMessage传输的限制，File对象需转成base64 |
| `options.html` | `string` | 从剪切板获取的text/html |
| `options.text` | `string` | 从剪切板获取的text/plain |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:510](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L510)

___

### print

▸ **print**(): `Promise`<`void`\>

打印

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:188](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L188)

___

### removeRangeLocksInRanges

▸ **removeRangeLocksInRanges**(`options`): `Promise`<`void`\>

删除指定范围内的所有单元格锁定

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.ranges?` | [`Range`](Spreadsheet.Range.md)[] | 单元格范围  **`default`** 默认当前选中区域范围 |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:248](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L248)

___

### removeSheetLock

▸ **removeSheetLock**(`options`): `Promise`<`void`\>

删除工作表锁定

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.preview?` | `undefined` | - |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:267](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L267)

___

### search

▸ **search**(`options`): `Promise`<[`SearchMatch`](../modules/Spreadsheet.md#searchmatch)[]\>

查找表格内容并高亮

**`since`** co-1.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.range?` | [`Range`](Spreadsheet.Range.md) \| [`Range`](Spreadsheet.Range.md)[] | 查找的范围  **`default`** 默认当前选中的范围 |
| `options.text` | `string` | 要查找的内容 |

#### Returns

`Promise`<[`SearchMatch`](../modules/Spreadsheet.md#searchmatch)[]\>

#### Defined in

[src/types/Spreadsheet.ts:423](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L423)

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

[src/types/Spreadsheet.ts:475](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L475)

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

[src/types/Spreadsheet.ts:393](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L393)

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

[src/types/Spreadsheet.ts:404](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L404)

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

[src/types/BaseEditor.ts:47](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/BaseEditor.ts#L47)

___

### showComments

▸ **showComments**(): `Promise`<`void`\>

展示评论侧边栏

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:143](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L143)

___

### showHistory

▸ **showHistory**(): `Promise`<`void`\>

展示历史侧边栏

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:153](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L153)

___

### showLocks

▸ **showLocks**(): `Promise`<`void`\>

展示锁定侧边栏

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:163](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L163)

___

### startDemonstration

▸ **startDemonstration**(): `Promise`<`void`\>

进入演示模式

**`since`** PD2.10

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:178](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L178)

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

[src/types/Spreadsheet.ts:382](https://github.com/shimo-open/shimo-js-sdk/blob/24e3167/src/types/Spreadsheet.ts#L382)
