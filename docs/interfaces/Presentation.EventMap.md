[shimo-js-sdk - v1.2.18](/README.md) / [Presentation](/modules/Presentation.md) / EventMap

# Interface: EventMap

[Presentation](/modules/Presentation.md).EventMap

## Table of contents

### Properties

- [error](/interfaces/Presentation.EventMap.md#error)
- [saveStatusChanged](/interfaces/Presentation.EventMap.md#savestatuschanged)

## Properties

### error

• **error**: `Object`

错误

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data?` | `any` | 错误信息 |
| `code` | `number` | 错误码 |

#### Defined in

[src/types/Presentation.ts:7](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Presentation.ts#L7)

___

### saveStatusChanged

• **saveStatusChanged**: `Object`

保存状态改变时触发

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"error"`` \| ``"saving"`` \| ``"saved"`` |

#### Defined in

[src/types/Presentation.ts:16](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Presentation.ts#L16)
