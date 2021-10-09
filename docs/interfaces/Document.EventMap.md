[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Document](../modules/Document.md) / EventMap

# Interface: EventMap

[Document](../modules/Document.md).EventMap

## Table of contents

### Properties

- [changeTitle](Document.EventMap.md#changetitle)
- [error](Document.EventMap.md#error)
- [saveStatusDidChange](Document.EventMap.md#savestatusdidchange)

## Properties

### changeTitle

• **changeTitle**: `Object`

标题发生变更

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | 新的标题 |

#### Defined in

[src/types/Document.ts:24](https://github.com/shimohq/shimo-js-sdk/blob/42e1df1/src/types/Document.ts#L24)

___

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | 错误码 |
| `data?` | `unknown` | 错误信息 |

#### Defined in

[src/types/Document.ts:14](https://github.com/shimohq/shimo-js-sdk/blob/42e1df1/src/types/Document.ts#L14)

___

### saveStatusDidChange

• **saveStatusDidChange**: `Object`

保存状态发生变更

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Defined in

[src/types/Document.ts:7](https://github.com/shimohq/shimo-js-sdk/blob/42e1df1/src/types/Document.ts#L7)
