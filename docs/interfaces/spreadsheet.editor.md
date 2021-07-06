[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Spreadsheet](../modules/spreadsheet.md) / Editor

# Interface: Editor

[Spreadsheet](../modules/spreadsheet.md).Editor

## Hierarchy

- `BaseEditor`<[`EventMap`](spreadsheet.eventmap.md)\>

  ↳ **`Editor`**

## Table of contents

### Properties

- [addRangeLock](spreadsheet.editor.md#addrangelock)
- [addSheetLock](spreadsheet.editor.md#addsheetlock)
- [createRevision](spreadsheet.editor.md#createrevision)
- [endDemonstration](spreadsheet.editor.md#enddemonstration)
- [getActiveSheetId](spreadsheet.editor.md#getactivesheetid)
- [getCellValue](spreadsheet.editor.md#getcellvalue)
- [getColumnCount](spreadsheet.editor.md#getcolumncount)
- [getRangeValues](spreadsheet.editor.md#getrangevalues)
- [getRowCount](spreadsheet.editor.md#getrowcount)
- [getSheetIdByIndex](spreadsheet.editor.md#getsheetidbyindex)
- [getSheetIds](spreadsheet.editor.md#getsheetids)
- [hideComments](spreadsheet.editor.md#hidecomments)
- [hideHistory](spreadsheet.editor.md#hidehistory)
- [hideLocks](spreadsheet.editor.md#hidelocks)
- [isSheetVisible](spreadsheet.editor.md#issheetvisible)
- [off](spreadsheet.editor.md#off)
- [on](spreadsheet.editor.md#on)
- [print](spreadsheet.editor.md#print)
- [removeRangeLocksInRanges](spreadsheet.editor.md#removerangelocksinranges)
- [removeSheetLock](spreadsheet.editor.md#removesheetlock)
- [showComments](spreadsheet.editor.md#showcomments)
- [showHistory](spreadsheet.editor.md#showhistory)
- [showLocks](spreadsheet.editor.md#showlocks)
- [startDemonstration](spreadsheet.editor.md#startdemonstration)

## Properties

### addRangeLock

• **addRangeLock**: (`options`: { `departmentPermissions?`: [`DepartmentPermission`](spreadsheet.departmentpermission.md) ; `description?`: `string` ; `ranges?`: [`Range`](spreadsheet.range.md)[] ; `sheetId?`: `string` ; `userPermissions`: [`UserPermission`](spreadsheet.userpermission.md) ; `visitorPermission?`: ``0`` \| ``1`` \| ``2``  }) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

创建单元格锁定

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.departmentPermissions?` | [`DepartmentPermission`](spreadsheet.departmentpermission.md) | 部门id对应的权限 |
| `options.description?` | `string` | 对该锁定的描述 |
| `options.ranges?` | [`Range`](spreadsheet.range.md)[] | 单元格范围  **`default`** 默认当前选中区域范围 |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |
| `options.userPermissions` | [`UserPermission`](spreadsheet.userpermission.md) | 用户id对应的权限 |
| `options.visitorPermission?` | ``0`` \| ``1`` \| ``2`` | 其他访问者的权限  **`default`** 1 |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Spreadsheet.ts:69

___

### addSheetLock

• **addSheetLock**: (`options`: { `departmentPermissions?`: [`DepartmentPermission`](spreadsheet.departmentpermission.md) ; `description?`: `string` ; `sheetId?`: `string` ; `userPermissions`: [`UserPermission`](spreadsheet.userpermission.md) ; `visitorPermission?`: ``0`` \| ``1`` \| ``2``  }) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

创建工作表锁定

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.departmentPermissions?` | [`DepartmentPermission`](spreadsheet.departmentpermission.md) | 部门id对应的权限 |
| `options.description?` | `string` | 对该锁定的描述 |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |
| `options.userPermissions` | [`UserPermission`](spreadsheet.userpermission.md) | 用户id对应的权限 |
| `options.visitorPermission?` | ``0`` \| ``1`` \| ``2`` | 其他访问者的权限  **`default`** 1 |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Spreadsheet.ts:96

___

### createRevision

• **createRevision**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

创建版本

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Spreadsheet.ts:61

___

### endDemonstration

• **endDemonstration**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

离开演示模式

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Spreadsheet.ts:65

___

### getActiveSheetId

• **getActiveSheetId**: () => `Promise`<`string`\>

#### Type declaration

▸ (): `Promise`<`string`\>

获取当前激活sheet的id

##### Returns

`Promise`<`string`\>

#### Defined in

src/types/Spreadsheet.ts:146

___

### getCellValue

• **getCellValue**: (`options`: { `column`: `number` ; `row`: `number` ; `sheetId?`: `string`  }) => `Promise`<[`CellValue`](../modules/spreadsheet.md#cellvalue)\>

#### Type declaration

▸ (`options`): `Promise`<[`CellValue`](../modules/spreadsheet.md#cellvalue)\>

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.column` | `number` | 列index |
| `options.row` | `number` | 行index |
| `options.sheetId?` | `string` | 工作表 ID  **`default`** 默认当前工作表 ID |

##### Returns

`Promise`<[`CellValue`](../modules/spreadsheet.md#cellvalue)\>

#### Defined in

src/types/Spreadsheet.ts:171

___

### getColumnCount

• **getColumnCount**: (`options`: { `sheetId?`: `string`  }) => `Promise`<`number`\>

#### Type declaration

▸ (`options`): `Promise`<`number`\>

获取指定工作表列数量

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.sheetId?` | `string` | 工作表 ID  **`default`** 默认当前工作表 ID |

##### Returns

`Promise`<`number`\>

#### Defined in

src/types/Spreadsheet.ts:164

___

### getRangeValues

• **getRangeValues**: (`options`: { `range?`: [`Range`](spreadsheet.range.md)[] ; `sheetId?`: `string`  }) => `Promise`<[`CellValue`](../modules/spreadsheet.md#cellvalue)[][]\>

#### Type declaration

▸ (`options`): `Promise`<[`CellValue`](../modules/spreadsheet.md#cellvalue)[][]\>

获取工作表指定范围内的单元格的值

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.range?` | [`Range`](spreadsheet.range.md)[] | 单元格范围  **`default`** 默认当前选中范围 |
| `options.sheetId?` | `string` | 工作表 ID  **`default`** 默认当前工作表 ID |

##### Returns

`Promise`<[`CellValue`](../modules/spreadsheet.md#cellvalue)[][]\>

#### Defined in

src/types/Spreadsheet.ts:184

___

### getRowCount

• **getRowCount**: (`options`: { `sheetId?`: `string`  }) => `Promise`<`number`\>

#### Type declaration

▸ (`options`): `Promise`<`number`\>

获取指定工作表行数量

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.sheetId?` | `string` | 工作表 ID  **`default`** 默认当前工作表 ID |

##### Returns

`Promise`<`number`\>

#### Defined in

src/types/Spreadsheet.ts:155

___

### getSheetIdByIndex

• **getSheetIdByIndex**: (`options`: { `index`: `number`  }) => `Promise`<`string`\>

#### Type declaration

▸ (`options`): `Promise`<`string`\>

根据工作表 index 获取工作表 ID

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.index` | `number` |

##### Returns

`Promise`<`string`\>

#### Defined in

src/types/Spreadsheet.ts:152

___

### getSheetIds

• **getSheetIds**: () => `Promise`<`string`[]\>

#### Type declaration

▸ (): `Promise`<`string`[]\>

获取所有工作表的id

##### Returns

`Promise`<`string`[]\>

#### Defined in

src/types/Spreadsheet.ts:149

___

### hideComments

• **hideComments**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

关闭评论侧边栏

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Spreadsheet.ts:51

___

### hideHistory

• **hideHistory**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

关闭历史侧边栏

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Spreadsheet.ts:55

___

### hideLocks

• **hideLocks**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

关闭锁定侧边栏

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Spreadsheet.ts:59

___

### isSheetVisible

• **isSheetVisible**: (`options?`: { `sheetId?`: `string`  }) => `Promise`<`boolean`\>

#### Type declaration

▸ (`options?`): `Promise`<`boolean`\>

指定工作表是否可见，不传值为当前工作表

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.sheetId?` | `string` |

##### Returns

`Promise`<`boolean`\>

#### Defined in

src/types/Spreadsheet.ts:199

___

### off

• **off**: <K\>(`event`: `K`, `handler`: `EventCallback`) => `void`

#### Type declaration

▸ <`K`\>(`event`, `handler`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"error"`` \| ``"saveStatusChanged"`` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `handler` | `EventCallback` |

##### Returns

`void`

#### Inherited from

BaseEditor.off

#### Defined in

src/types/BaseEditor.ts:11

___

### on

• **on**: <K\>(`event`: `K`, `handler`: `EventCallback`) => `void`

#### Type declaration

▸ <`K`\>(`event`, `handler`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"error"`` \| ``"saveStatusChanged"`` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `handler` | `EventCallback` |

##### Returns

`void`

#### Inherited from

BaseEditor.on

#### Defined in

src/types/BaseEditor.ts:10

___

### print

• **print**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

打印

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Spreadsheet.ts:67

___

### removeRangeLocksInRanges

• **removeRangeLocksInRanges**: (`options`: { `ranges?`: [`Range`](spreadsheet.range.md)[] ; `sheetId?`: `string`  }) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

删除指定范围内的所有单元格锁定

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.ranges?` | [`Range`](spreadsheet.range.md)[] | 单元格范围  **`default`** 默认当前选中区域范围 |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Spreadsheet.ts:118

___

### removeSheetLock

• **removeSheetLock**: (`options`: { `sheetId?`: `string`  }) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

删除工作表锁定

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.sheetId?` | `string` | 工作表id  **`default`** 默认当前工作表id |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Spreadsheet.ts:134

___

### showComments

• **showComments**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

展示评论侧边栏

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Spreadsheet.ts:49

___

### showHistory

• **showHistory**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

展示历史侧边栏

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Spreadsheet.ts:53

___

### showLocks

• **showLocks**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

展示锁定侧边栏

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Spreadsheet.ts:57

___

### startDemonstration

• **startDemonstration**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

进入演示模式

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Spreadsheet.ts:63
