[shimo-js-sdk](../README.md) / [Exports](../modules.md) / Spreadsheet

# Namespace: Spreadsheet

## Table of contents

### Interfaces

- [DepartmentPermission](../interfaces/Spreadsheet.DepartmentPermission.md)
- [Editor](../interfaces/Spreadsheet.Editor.md)
- [EventMap](../interfaces/Spreadsheet.EventMap.md)
- [PluginOptions](../interfaces/Spreadsheet.PluginOptions.md)
- [Range](../interfaces/Spreadsheet.Range.md)
- [UserPermission](../interfaces/Spreadsheet.UserPermission.md)

### Type aliases

- [CellValue](Spreadsheet.md#cellvalue)
- [FormatCategory](Spreadsheet.md#formatcategory)
- [NotificationType](Spreadsheet.md#notificationtype)
- [PermissionLevel](Spreadsheet.md#permissionlevel)
- [RangeData](Spreadsheet.md#rangedata)
- [SearchMatch](Spreadsheet.md#searchmatch)

## Type aliases

### CellValue

Ƭ **CellValue**: `string` \| `number` \| `boolean` \| ``null``

单元格值类型

#### Defined in

[src/types/Spreadsheet.ts:136](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L136)

___

### FormatCategory

Ƭ **FormatCategory**: ``"auto"`` \| ``"text"`` \| ``"number"`` \| ``"percent"`` \| ``"currency"`` \| ``"accounting"`` \| ``"date"`` \| ``"time"`` \| ``"fraction"`` \| ``"scientific"`` \| ``"special"`` \| ``"custom"``

单元格格式类型
auto - 常规
text - 纯文本
number - 数字
percent - 百分比
currency - 货币
accounting - 会计
date - 日期
time - 时间
fraction - 分数
scientific - 科学计数
special - 特殊
custom - 自定义

#### Defined in

[src/types/Spreadsheet.ts:121](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L121)

___

### NotificationType

Ƭ **NotificationType**: ``"comment"`` \| ``"mention_at"`` \| ``"date_mention"``

comment - 评论
mention_at - 提及
date_mention - 日期提醒

#### Defined in

[src/types/Spreadsheet.ts:80](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L80)

___

### PermissionLevel

Ƭ **PermissionLevel**: ``0`` \| ``1`` \| ``2``

锁定权限等级
0 - 可编辑
1 - 只能查看
2 - 禁止查看

#### Defined in

[src/types/Spreadsheet.ts:18](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L18)

___

### RangeData

Ƭ **RangeData**: `Object`

单元格数据信息

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `format` | `string` \| `undefined` | 单元格格式 |
| `formatCategory` | [`FormatCategory`](Spreadsheet.md#formatcategory) | 单元格格式类型 |
| `precision` | `number` \| `undefined` | 单元格数字精度 |
| `span` | [`Range`](../interfaces/Spreadsheet.Range.md) \| `undefined` | 合并单元格范围 |
| `value` | [`CellValue`](Spreadsheet.md#cellvalue) | 单元格数据 |

#### Defined in

[src/types/Spreadsheet.ts:83](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L83)

___

### SearchMatch

Ƭ **SearchMatch**: `Object`

查找结果

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `column` | `number` | 单元格所在列号 |
| `isLinkCell?` | `boolean` | 是否是链接单元格 |
| `row` | `number` | 单元格所在行号 |
| `text` | `string` | 单元格的text |

#### Defined in

[src/types/Spreadsheet.ts:55](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L55)
