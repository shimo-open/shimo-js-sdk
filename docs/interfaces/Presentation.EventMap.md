[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Presentation](../modules/Presentation.md) / EventMap

# Interface: EventMap

[Presentation](../modules/Presentation.md).EventMap

## Table of contents

### Properties

- [error](Presentation.EventMap.md#error)
- [saveStatusChanged](Presentation.EventMap.md#savestatuschanged)

## Properties

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | 错误码 |
| `data?` | `any` | 错误信息 |

#### Defined in

[src/types/Presentation.ts:7](https://github.com/shimohq/shimo-js-sdk/blob/ef32014/src/types/Presentation.ts#L7)

___

### saveStatusChanged

• **saveStatusChanged**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Defined in

[src/types/Presentation.ts:4](https://github.com/shimohq/shimo-js-sdk/blob/ef32014/src/types/Presentation.ts#L4)
