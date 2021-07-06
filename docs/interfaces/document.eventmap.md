[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Document](../modules/document.md) / EventMap

# Interface: EventMap

[Document](../modules/document.md).EventMap

## Table of contents

### Properties

- [error](document.eventmap.md#error)
- [saveStatusDidChange](document.eventmap.md#savestatusdidchange)

## Properties

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | 错误码 |
| `data?` | `unknown` | 错误信息 |

#### Defined in

src/types/Document.ts:10

___

### saveStatusDidChange

• **saveStatusDidChange**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Defined in

src/types/Document.ts:4
