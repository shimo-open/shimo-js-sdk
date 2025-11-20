[shimo-js-sdk - v1.2.16](/README.md) / [DocumentPro](/modules/DocumentPro.md) / DocumentProComment

# Interface: DocumentProComment

[DocumentPro](/modules/DocumentPro.md).DocumentProComment

## Table of contents

### Properties

- [id](/interfaces/DocumentPro.DocumentProComment.md#id)
- [quoteText](/interfaces/DocumentPro.DocumentProComment.md#quotetext)
- [data](/interfaces/DocumentPro.DocumentProComment.md#data)
- [title](/interfaces/DocumentPro.DocumentProComment.md#title)
- [startInfo](/interfaces/DocumentPro.DocumentProComment.md#startinfo)
- [createTime](/interfaces/DocumentPro.DocumentProComment.md#createtime)
- [lastUpdateTime](/interfaces/DocumentPro.DocumentProComment.md#lastupdatetime)

## Properties

### id

• **id**: `string`

#### Defined in

[src/types/DocumentPro.ts:380](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L380)

___

### quoteText

• **quoteText**: `string`

评论对应的文本

#### Defined in

[src/types/DocumentPro.ts:384](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L384)

___

### data

• **data**: [`DocumentProCommentData`](/interfaces/DocumentPro.DocumentProCommentData.md)

评论的数据

#### Defined in

[src/types/DocumentPro.ts:388](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L388)

___

### title

• `Optional` **title**: `string`

#### Defined in

[src/types/DocumentPro.ts:389](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L389)

___

### startInfo

• **startInfo**: `Object`

评论的位置

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `pageNum` | `number` |

#### Defined in

[src/types/DocumentPro.ts:393](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L393)

___

### createTime

• **createTime**: `string`

timestamp string

#### Defined in

[src/types/DocumentPro.ts:401](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L401)

___

### lastUpdateTime

• **lastUpdateTime**: `string`

timestamp string

#### Defined in

[src/types/DocumentPro.ts:405](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L405)
