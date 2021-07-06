[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Spreadsheet](../modules/spreadsheet.md) / EventMap

# Interface: EventMap

[Spreadsheet](../modules/spreadsheet.md).EventMap

## Table of contents

### Properties

- [error](spreadsheet.eventmap.md#error)
- [saveStatusChanged](spreadsheet.eventmap.md#savestatuschanged)

## Properties

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | 错误码 |
| `data?` | `any` | 错误信息 |

#### Defined in

src/types/Spreadsheet.ts:33

___

### saveStatusChanged

• **saveStatusChanged**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Defined in

src/types/Spreadsheet.ts:30
