[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [DocumentPro](../modules/documentpro.md) / EventMap

# Interface: EventMap

[DocumentPro](../modules/documentpro.md).EventMap

## Table of contents

### Properties

- [commentClicked](documentpro.eventmap.md#commentclicked)
- [documentChanged](documentpro.eventmap.md#documentchanged)
- [documentRecalculated](documentpro.eventmap.md#documentrecalculated)
- [error](documentpro.eventmap.md#error)
- [saveStatusChanged](documentpro.eventmap.md#savestatuschanged)
- [selectionEnded](documentpro.eventmap.md#selectionended)

## Properties

### commentClicked

• **commentClicked**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `commentIds?` | `string`[] | 所有被点击的评论ID列表  **`since`** PD2.10 |

#### Defined in

src/types/DocumentPro.ts:89

___

### documentChanged

• **documentChanged**: `Object`

#### Defined in

src/types/DocumentPro.ts:88

___

### documentRecalculated

• **documentRecalculated**: `Object`

#### Defined in

src/types/DocumentPro.ts:96

___

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | 错误码 |
| `data?` | `any` | 错误信息 |

#### Defined in

src/types/DocumentPro.ts:100

___

### saveStatusChanged

• **saveStatusChanged**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Defined in

src/types/DocumentPro.ts:97

___

### selectionEnded

• **selectionEnded**: `Object`

#### Defined in

src/types/DocumentPro.ts:87
