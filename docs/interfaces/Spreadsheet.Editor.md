[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Spreadsheet](../modules/Spreadsheet.md) / Editor

# Interface: Editor

[Spreadsheet](../modules/Spreadsheet.md).Editor

## Hierarchy

- `BaseEditor`<[`EventMap`](Spreadsheet.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [addRangeLock](Spreadsheet.Editor.md#addrangelock)
- [addSheetLock](Spreadsheet.Editor.md#addsheetlock)
- [createRevision](Spreadsheet.Editor.md#createrevision)
- [endDemonstration](Spreadsheet.Editor.md#enddemonstration)
- [getActiveSheetId](Spreadsheet.Editor.md#getactivesheetid)
- [getCellValue](Spreadsheet.Editor.md#getcellvalue)
- [getColumnCount](Spreadsheet.Editor.md#getcolumncount)
- [getRangeValues](Spreadsheet.Editor.md#getrangevalues)
- [getRowCount](Spreadsheet.Editor.md#getrowcount)
- [getSheetIdByIndex](Spreadsheet.Editor.md#getsheetidbyindex)
- [getSheetIds](Spreadsheet.Editor.md#getsheetids)
- [hideComments](Spreadsheet.Editor.md#hidecomments)
- [hideHistory](Spreadsheet.Editor.md#hidehistory)
- [hideLocks](Spreadsheet.Editor.md#hidelocks)
- [isSheetVisible](Spreadsheet.Editor.md#issheetvisible)
- [off](Spreadsheet.Editor.md#off)
- [on](Spreadsheet.Editor.md#on)
- [print](Spreadsheet.Editor.md#print)
- [removeRangeLocksInRanges](Spreadsheet.Editor.md#removerangelocksinranges)
- [removeSheetLock](Spreadsheet.Editor.md#removesheetlock)
- [setTitle](Spreadsheet.Editor.md#settitle)
- [showComments](Spreadsheet.Editor.md#showcomments)
- [showHistory](Spreadsheet.Editor.md#showhistory)
- [showLocks](Spreadsheet.Editor.md#showlocks)
- [startDemonstration](Spreadsheet.Editor.md#startdemonstration)

## Methods

### addRangeLock

▸ **addRangeLock**(`options`): `Promise`<`void`\>

创建单元格锁定

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

[src/types/Spreadsheet.ts:88](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L88)

___

### addSheetLock

▸ **addSheetLock**(`options`): `Promise`<`void`\>

创建工作表锁定

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

[src/types/Spreadsheet.ts:115](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L115)

___

### createRevision

▸ **createRevision**(`options`): `Promise`<`void`\>

创建版本

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:80](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L80)

___

### endDemonstration

▸ **endDemonstration**(`options`): `Promise`<`void`\>

离开演示模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:84](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L84)

___

### getActiveSheetId

▸ **getActiveSheetId**(): `Promise`<`string`\>

获取当前激活sheet的id

#### Returns

`Promise`<`string`\>

#### Defined in

[src/types/Spreadsheet.ts:165](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L165)

___

### getCellValue

▸ **getCellValue**(`options`): `Promise`<[`CellValue`](../modules/Spreadsheet.md#cellvalue)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.column` | `number` | 列index |
| `options.row` | `number` | 行index |
| `options.sheetId?` | `string` | 工作表 ID  **`default`** 默认当前工作表 ID |

#### Returns

`Promise`<[`CellValue`](../modules/Spreadsheet.md#cellvalue)\>

#### Defined in

[src/types/Spreadsheet.ts:190](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L190)

___

### getColumnCount

▸ **getColumnCount**(`options`): `Promise`<`number`\>

获取指定工作表列数量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.sheetId?` | `string` | 工作表 ID  **`default`** 默认当前工作表 ID |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/types/Spreadsheet.ts:183](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L183)

___

### getRangeValues

▸ **getRangeValues**(`options`): `Promise`<[`CellValue`](../modules/Spreadsheet.md#cellvalue)[][]\>

获取工作表指定范围内的单元格的值

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.range?` | [`Range`](Spreadsheet.Range.md)[] | 单元格范围  **`default`** 默认当前选中范围 |
| `options.sheetId?` | `string` | 工作表 ID  **`default`** 默认当前工作表 ID |

#### Returns

`Promise`<[`CellValue`](../modules/Spreadsheet.md#cellvalue)[][]\>

#### Defined in

[src/types/Spreadsheet.ts:203](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L203)

___

### getRowCount

▸ **getRowCount**(`options`): `Promise`<`number`\>

获取指定工作表行数量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.sheetId?` | `string` | 工作表 ID  **`default`** 默认当前工作表 ID |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/types/Spreadsheet.ts:174](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L174)

___

### getSheetIdByIndex

▸ **getSheetIdByIndex**(`options`): `Promise`<`string`\>

根据工作表 index 获取工作表 ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.index` | `number` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/types/Spreadsheet.ts:171](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L171)

___

### getSheetIds

▸ **getSheetIds**(): `Promise`<`string`[]\>

获取所有工作表的id

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/types/Spreadsheet.ts:168](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L168)

___

### hideComments

▸ **hideComments**(`options`): `Promise`<`void`\>

关闭评论侧边栏

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:70](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L70)

___

### hideHistory

▸ **hideHistory**(`options`): `Promise`<`void`\>

关闭历史侧边栏

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:74](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L74)

___

### hideLocks

▸ **hideLocks**(`options`): `Promise`<`void`\>

关闭锁定侧边栏

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:78](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L78)

___

### isSheetVisible

▸ **isSheetVisible**(`options?`): `Promise`<`boolean`\>

指定工作表是否可见，不传值为当前工作表

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.sheetId?` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/types/Spreadsheet.ts:218](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L218)

___

### off

▸ **off**<`K`\>(`event`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `handler` | `EventCallback` |

#### Returns

`void`

#### Inherited from

BaseEditor.off

#### Defined in

[src/types/BaseEditor.ts:11](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/BaseEditor.ts#L11)

___

### on

▸ **on**<`K`\>(`event`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `handler` | `EventCallback` |

#### Returns

`void`

#### Inherited from

BaseEditor.on

#### Defined in

[src/types/BaseEditor.ts:10](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/BaseEditor.ts#L10)

___

### print

▸ **print**(`options`): `Promise`<`void`\>

打印

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:86](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L86)

___

### removeRangeLocksInRanges

▸ **removeRangeLocksInRanges**(`options`): `Promise`<`void`\>

删除指定范围内的所有单元格锁定

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.ranges?` | [`Range`](Spreadsheet.Range.md)[] | 单元格范围  **`default`** 默认当前选中区域范围 |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:137](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L137)

___

### removeSheetLock

▸ **removeSheetLock**(`options`): `Promise`<`void`\>

删除工作表锁定

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:153](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L153)

___

### setTitle

▸ **setTitle**(`title`): `Promise`<`void`\>

设置表格标题，仅用于 UI 展示数据，不触发保存操作

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:223](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L223)

___

### showComments

▸ **showComments**(`options`): `Promise`<`void`\>

展示评论侧边栏

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:68](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L68)

___

### showHistory

▸ **showHistory**(`options`): `Promise`<`void`\>

展示历史侧边栏

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:72](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L72)

___

### showLocks

▸ **showLocks**(`options`): `Promise`<`void`\>

展示锁定侧边栏

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:76](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L76)

___

### startDemonstration

▸ **startDemonstration**(`options`): `Promise`<`void`\>

进入演示模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:82](https://github.com/shimohq/shimo-js-sdk/blob/1f0e6fa/src/types/Spreadsheet.ts#L82)
