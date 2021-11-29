[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Spreadsheet](../modules/Spreadsheet.md) / EventMap

# Interface: EventMap

[Spreadsheet](../modules/Spreadsheet.md).EventMap

## Table of contents

### Properties

- [error](Spreadsheet.EventMap.md#error)
- [saveStatusChanged](Spreadsheet.EventMap.md#savestatuschanged)

## Properties

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | 错误码 |
| `data?` | `any` | 错误信息 |

#### Defined in

[src/types/Spreadsheet.ts:33](https://github.com/shimohq/shimo-js-sdk/blob/f4ed478/src/types/Spreadsheet.ts#L33)

___

### saveStatusChanged

• **saveStatusChanged**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Defined in

[src/types/Spreadsheet.ts:30](https://github.com/shimohq/shimo-js-sdk/blob/f4ed478/src/types/Spreadsheet.ts#L30)
