[shimo-js-sdk - v1.2.10](/README.md) / [DocumentPro](/modules/DocumentPro.md) / Editor

# Interface: Editor

[DocumentPro](/modules/DocumentPro.md).Editor

## Hierarchy

- [`BaseEditor`](/interfaces/BaseEditor.md)<[`EventMap`](/interfaces/DocumentPro.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [on](/interfaces/DocumentPro.Editor.md#on)
- [off](/interfaces/DocumentPro.Editor.md#off)
- [setTitle](/interfaces/DocumentPro.Editor.md#settitle)
- [getComments](/interfaces/DocumentPro.Editor.md#getcomments)
- [getComment](/interfaces/DocumentPro.Editor.md#getcomment)
- [getCommentBySelection](/interfaces/DocumentPro.Editor.md#getcommentbyselection)
- [addComment](/interfaces/DocumentPro.Editor.md#addcomment)
- [replyComment](/interfaces/DocumentPro.Editor.md#replycomment)
- [removeComment](/interfaces/DocumentPro.Editor.md#removecomment)
- [removeReply](/interfaces/DocumentPro.Editor.md#removereply)
- [updateComment](/interfaces/DocumentPro.Editor.md#updatecomment)
- [goToComment](/interfaces/DocumentPro.Editor.md#gotocomment)
- [getSelectedText](/interfaces/DocumentPro.Editor.md#getselectedtext)
- [goToPage](/interfaces/DocumentPro.Editor.md#gotopage)
- [goToTop](/interfaces/DocumentPro.Editor.md#gototop)
- [addPageNum](/interfaces/DocumentPro.Editor.md#addpagenum)
- [removeAllPageNums](/interfaces/DocumentPro.Editor.md#removeallpagenums)
- [showToc](/interfaces/DocumentPro.Editor.md#showtoc)
- [hideToc](/interfaces/DocumentPro.Editor.md#hidetoc)
- [zoom](/interfaces/DocumentPro.Editor.md#zoom)
- [setBold](/interfaces/DocumentPro.Editor.md#setbold)
- [setItalic](/interfaces/DocumentPro.Editor.md#setitalic)
- [print](/interfaces/DocumentPro.Editor.md#print)
- [printAll](/interfaces/DocumentPro.Editor.md#printall)
- [createRevision](/interfaces/DocumentPro.Editor.md#createrevision)
- [showHistory](/interfaces/DocumentPro.Editor.md#showhistory)
- [hideHistory](/interfaces/DocumentPro.Editor.md#hidehistory)
- [updateSignature](/interfaces/DocumentPro.Editor.md#updatesignature)
- [export](/interfaces/DocumentPro.Editor.md#export)

## Methods

### on

▸ **on**<`K`\>(`event`, `handler`): `void`

监听事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `handler` | (`payload`: `T`[`K`]) => `void` |

#### Returns

`void`

#### Inherited from

[BaseEditor](/interfaces/BaseEditor.md).[on](/interfaces/BaseEditor.md#on)

#### Defined in

[src/types/BaseEditor.ts:37](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L37)

___

### off

▸ **off**<`K`\>(`event`, `handler?`): `void`

取消监听事件

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `handler?` | (`payload`: `T`[`K`]) => `void` |

#### Returns

`void`

#### Inherited from

[BaseEditor](/interfaces/BaseEditor.md).[off](/interfaces/BaseEditor.md#off)

#### Defined in

[src/types/BaseEditor.ts:42](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L42)

___

### setTitle

▸ **setTitle**(`title`): `Promise`<`void`\>

设置文档标题

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[BaseEditor](/interfaces/BaseEditor.md).[setTitle](/interfaces/BaseEditor.md#settitle)

#### Defined in

[src/types/BaseEditor.ts:47](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L47)

___

### getComments

▸ **getComments**(`options`): `Promise`<[`DocumentProComment`](/interfaces/DocumentPro.DocumentProComment.md)[]\>

获取所有评论

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.includeChapterTitle?` | `boolean` | 包含对应的标题信息  **`default`** false |

#### Returns

`Promise`<[`DocumentProComment`](/interfaces/DocumentPro.DocumentProComment.md)[]\>

#### Defined in

[src/types/DocumentPro.ts:154](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L154)

___

### getComment

▸ **getComment**(`options`): `Promise`<[`DocumentProComment`](/interfaces/DocumentPro.DocumentProComment.md)\>

获取单条评论

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentId` | `string` | 评论ID |
| `options.includeChapterTitle?` | `boolean` | 包含对应的标题信息 |

#### Returns

`Promise`<[`DocumentProComment`](/interfaces/DocumentPro.DocumentProComment.md)\>

#### Defined in

[src/types/DocumentPro.ts:165](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L165)

___

### getCommentBySelection

▸ **getCommentBySelection**(`options?`): `Promise`<`string`\>

获取一个选区已存在的评论

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`string`\>

评论 ID

#### Defined in

[src/types/DocumentPro.ts:178](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L178)

___

### addComment

▸ **addComment**(`options`): `Promise`<[`DocumentProComment`](/interfaces/DocumentPro.DocumentProComment.md)\>

添加评论

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.text` | `string` | 评论内容 |

#### Returns

`Promise`<[`DocumentProComment`](/interfaces/DocumentPro.DocumentProComment.md)\>

#### Defined in

[src/types/DocumentPro.ts:183](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L183)

___

### replyComment

▸ **replyComment**(`options`): `Promise`<[`DocumentProCommentData`](/interfaces/DocumentPro.DocumentProCommentData.md)\>

添加回复

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentId` | `string` | 评论ID |
| `options.text` | `string` | 回复内容 |

#### Returns

`Promise`<[`DocumentProCommentData`](/interfaces/DocumentPro.DocumentProCommentData.md)\>

#### Defined in

[src/types/DocumentPro.ts:193](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L193)

___

### removeComment

▸ **removeComment**(`options`): `Promise`<`void`\>

删除评论

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentId` | `string` | 评论ID |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:205](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L205)

___

### removeReply

▸ **removeReply**(`options`): `Promise`<`void`\>

删除回复

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentDataId` | `string` | 回复数据的ID |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:215](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L215)

___

### updateComment

▸ **updateComment**(`options`): `Promise`<`void`\>

更新评论或回复

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentDataId` | `string` | 评论数据或回复数据的ID |
| `options.text` | `string` | 评论内容 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:225](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L225)

___

### goToComment

▸ **goToComment**(`options`): `Promise`<`void`\>

跳转到评论所在位置

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentId` | `string` | 评论ID |
| `options.shouldScrollToComment?` | `boolean` | 是否滚动到评论所在位置  **`default`** true |
| `options.shouldSelectComment?` | `boolean` | 是否需要选中评论正文  **`default`** false |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:237](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L237)

___

### getSelectedText

▸ **getSelectedText**(`options?`): `Promise`<`void`\>

获取选区文本

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:257](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L257)

___

### goToPage

▸ **goToPage**(`options`): `Promise`<`void`\>

跳转页面

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.pageNum` | `number` | 页码 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:262](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L262)

___

### goToTop

▸ **goToTop**(`options?`): `Promise`<`void`\>

跳到文档顶部

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:272](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L272)

___

### addPageNum

▸ **addPageNum**(`options`): `Promise`<`void`\>

添加页码

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.position` | [`DocumentPos`](/modules/DocumentPro.md#documentpos) | 页码的插入位置 |
| `options.alignment?` | [`HorizontalAlignment`](/modules/DocumentPro.md#horizontalalignment) | 页码的对齐方式  **`default`** 1 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:277](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L277)

___

### removeAllPageNums

▸ **removeAllPageNums**(`options?`): `Promise`<`void`\>

删除所有页码

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:292](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L292)

___

### showToc

▸ **showToc**(`options`): `Promise`<`void`\>

显示文档结构

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.shouldDisableCache?` | `boolean` | 禁用文档结构图的默认缓存  **`default`** true |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:297](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L297)

___

### hideToc

▸ **hideToc**(`options?`): `Promise`<`void`\>

隐藏文档结构图

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:311](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L311)

___

### zoom

▸ **zoom**(`options`): `Promise`<`void`\>

文档缩放

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.percent` | `number` | 缩放百分比 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:316](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L316)

___

### setBold

▸ **setBold**(`options`): `Promise`<`void`\>

设置加粗

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.isBold?` | `boolean` | 是否加粗  **`default`** false |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:329](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L329)

___

### setItalic

▸ **setItalic**(`options`): `Promise`<`void`\>

设置斜体

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.isItalic?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:343](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L343)

___

### print

▸ **print**(`options`): `Promise`<`void`\>

打印

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.pageNums` | `number`[] | 页码列表 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:348](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L348)

___

### printAll

▸ **printAll**(`options?`): `Promise`<`void`\>

打印所有页面

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:358](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L358)

___

### createRevision

▸ **createRevision**(`options?`): `Promise`<`void`\>

创建版本

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.name` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:362](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L362)

___

### showHistory

▸ **showHistory**(`options?`): `Promise`<`void`\>

预览历史版本

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:364](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L364)

___

### hideHistory

▸ **hideHistory**(`options?`): `Promise`<`void`\>

关闭历史版本预览

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:366](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L366)

___

### updateSignature

▸ **updateSignature**(`payload`): `Promise`<`void`\>

更新签名图片

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`UpdateSignaturePayload`](/interfaces/DocumentPro.UpdateSignaturePayload.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:370](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L370)

___

### export

▸ **export**(`type`): `Promise`<`void`\>

导出

**`since`** co-1.5

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"image"`` \| ``"imagePdf"`` | image：导出图片，imagePdf: 导出pdf |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:376](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L376)
