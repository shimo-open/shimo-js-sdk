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

[src/types/Spreadsheet.ts:82](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L82)

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

[src/types/Spreadsheet.ts:106](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L106)

___

### createRevision

▸ **createRevision**(`options?`): `Promise`<`void`\>

创建版本

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:74](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L74)

___

### endDemonstration

▸ **endDemonstration**(`options?`): `Promise`<`void`\>

离开演示模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:78](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L78)

___

### getActiveSheetId

▸ **getActiveSheetId**(): `Promise`<`string`\>

获取当前激活sheet的id

#### Returns

`Promise`<`string`\>

#### Defined in

[src/types/Spreadsheet.ts:147](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L147)

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

[src/types/Spreadsheet.ts:172](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L172)

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

[src/types/Spreadsheet.ts:165](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L165)

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

[src/types/Spreadsheet.ts:185](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L185)

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

[src/types/Spreadsheet.ts:156](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L156)

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

[src/types/Spreadsheet.ts:153](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L153)

___

### getSheetIds

▸ **getSheetIds**(): `Promise`<`string`[]\>

获取所有工作表的id

#### Returns

`Promise`<`string`[]\>

#### Defined in

[src/types/Spreadsheet.ts:150](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L150)

___

### hideComments

▸ **hideComments**(`options?`): `Promise`<`void`\>

关闭评论侧边栏

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:64](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L64)

___

### hideHistory

▸ **hideHistory**(`options?`): `Promise`<`void`\>

关闭历史侧边栏

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:68](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L68)

___

### hideLocks

▸ **hideLocks**(`options?`): `Promise`<`void`\>

关闭锁定侧边栏

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:72](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L72)

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

[src/types/Spreadsheet.ts:200](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L200)

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

[src/types/BaseEditor.ts:42](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/BaseEditor.ts#L42)

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

[src/types/BaseEditor.ts:37](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/BaseEditor.ts#L37)

___

### print

▸ **print**(`options?`): `Promise`<`void`\>

打印

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:80](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L80)

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

[src/types/Spreadsheet.ts:125](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L125)

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

[src/types/Spreadsheet.ts:138](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L138)

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

[src/types/BaseEditor.ts:47](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/BaseEditor.ts#L47)

___

### showComments

▸ **showComments**(`options?`): `Promise`<`void`\>

展示评论侧边栏

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:62](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L62)

___

### showHistory

▸ **showHistory**(`options?`): `Promise`<`void`\>

展示历史侧边栏

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:66](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L66)

___

### showLocks

▸ **showLocks**(`options?`): `Promise`<`void`\>

展示锁定侧边栏

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:70](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L70)

___

### startDemonstration

▸ **startDemonstration**(`options?`): `Promise`<`void`\>

进入演示模式

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Spreadsheet.ts:76](https://github.com/shimohq/shimo-js-sdk/blob/f17c766/src/types/Spreadsheet.ts#L76)
