[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [DocumentPro](../modules/DocumentPro.md) / EventMap

# Interface: EventMap

[DocumentPro](../modules/DocumentPro.md).EventMap

## Table of contents

### Properties

- [commentClicked](DocumentPro.EventMap.md#commentclicked)
- [documentChanged](DocumentPro.EventMap.md#documentchanged)
- [documentRecalculated](DocumentPro.EventMap.md#documentrecalculated)
- [error](DocumentPro.EventMap.md#error)
- [saveStatusChanged](DocumentPro.EventMap.md#savestatuschanged)
- [selectionEnded](DocumentPro.EventMap.md#selectionended)

## Properties

### commentClicked

• **commentClicked**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `commentIds?` | `string`[] | 所有被点击的评论ID列表  **`since`** PD2.10 |

#### Defined in

[src/types/DocumentPro.ts:89](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/types/DocumentPro.ts#L89)

___

### documentChanged

• **documentChanged**: `Object`

#### Defined in

[src/types/DocumentPro.ts:88](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/types/DocumentPro.ts#L88)

___

### documentRecalculated

• **documentRecalculated**: `Object`

#### Defined in

[src/types/DocumentPro.ts:96](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/types/DocumentPro.ts#L96)

___

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | 错误码 |
| `data?` | `any` | 错误信息 |

#### Defined in

[src/types/DocumentPro.ts:100](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/types/DocumentPro.ts#L100)

___

### saveStatusChanged

• **saveStatusChanged**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Defined in

[src/types/DocumentPro.ts:97](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/types/DocumentPro.ts#L97)

___

### selectionEnded

• **selectionEnded**: `Object`

#### Defined in

[src/types/DocumentPro.ts:87](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/types/DocumentPro.ts#L87)
