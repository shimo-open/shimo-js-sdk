[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Table](../modules/Table.md) / EventMap

# Interface: EventMap

[Table](../modules/Table.md).EventMap

## Table of contents

### Properties

- [error](Table.EventMap.md#error)
- [saveStatusDidChange](Table.EventMap.md#savestatusdidchange)

## Properties

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | 错误码 |
| `data?` | `unknown` | 错误信息 |

#### Defined in

[src/types/Table.ts:14](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/types/Table.ts#L14)

___

### saveStatusDidChange

• **saveStatusDidChange**: `Object`

保存状态发生变更

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Defined in

[src/types/Table.ts:7](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/types/Table.ts#L7)
