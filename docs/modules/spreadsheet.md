[shimo-js-sdk](../README.md) / [Exports](../modules.md) / Spreadsheet

# Namespace: Spreadsheet

## Table of contents

### Interfaces

- [DepartmentPermission](../interfaces/spreadsheet.departmentpermission.md)
- [Editor](../interfaces/spreadsheet.editor.md)
- [EventMap](../interfaces/spreadsheet.eventmap.md)
- [Range](../interfaces/spreadsheet.range.md)
- [UserPermission](../interfaces/spreadsheet.userpermission.md)

### Type aliases

- [CellValue](spreadsheet.md#cellvalue)
- [PermissionLevel](spreadsheet.md#permissionlevel)

## Type aliases

### CellValue

Ƭ **CellValue**: `string` \| `number` \| `boolean` \| ``null``

单元格值类型

#### Defined in

src/types/Spreadsheet.ts:42

___

### PermissionLevel

Ƭ **PermissionLevel**: ``0`` \| ``1`` \| ``2``

锁定权限等级
0 - 可编辑
1 - 只能查看
2 - 禁止查看

#### Defined in

src/types/Spreadsheet.ts:17
