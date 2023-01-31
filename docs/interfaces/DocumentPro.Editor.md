[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [DocumentPro](../modules/DocumentPro.md) / Editor

# Interface: Editor

[DocumentPro](../modules/DocumentPro.md).Editor

## Hierarchy

- [`BaseEditor`](BaseEditor.md)<[`EventMap`](DocumentPro.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [addComment](DocumentPro.Editor.md#addcomment)
- [addPageNum](DocumentPro.Editor.md#addpagenum)
- [createRevision](DocumentPro.Editor.md#createrevision)
- [getComment](DocumentPro.Editor.md#getcomment)
- [getCommentBySelection](DocumentPro.Editor.md#getcommentbyselection)
- [getComments](DocumentPro.Editor.md#getcomments)
- [getSelectedText](DocumentPro.Editor.md#getselectedtext)
- [goToComment](DocumentPro.Editor.md#gotocomment)
- [goToPage](DocumentPro.Editor.md#gotopage)
- [goToTop](DocumentPro.Editor.md#gototop)
- [hideHistory](DocumentPro.Editor.md#hidehistory)
- [hideToc](DocumentPro.Editor.md#hidetoc)
- [off](DocumentPro.Editor.md#off)
- [on](DocumentPro.Editor.md#on)
- [print](DocumentPro.Editor.md#print)
- [printAll](DocumentPro.Editor.md#printall)
- [removeAllPageNums](DocumentPro.Editor.md#removeallpagenums)
- [removeComment](DocumentPro.Editor.md#removecomment)
- [removeReply](DocumentPro.Editor.md#removereply)
- [replyComment](DocumentPro.Editor.md#replycomment)
- [setBold](DocumentPro.Editor.md#setbold)
- [setItalic](DocumentPro.Editor.md#setitalic)
- [setTitle](DocumentPro.Editor.md#settitle)
- [showHistory](DocumentPro.Editor.md#showhistory)
- [showToc](DocumentPro.Editor.md#showtoc)
- [updateComment](DocumentPro.Editor.md#updatecomment)
- [updateSignature](DocumentPro.Editor.md#updatesignature)
- [zoom](DocumentPro.Editor.md#zoom)

## Methods

### addComment

▸ **addComment**(`options`): `Promise`<{ `text`: `string`  }\>

添加评论

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.text` | `string` | 评论内容  **`since`** 22.2.1 |

#### Returns

`Promise`<{ `text`: `string`  }\>

#### Defined in

[src/types/DocumentPro.ts:199](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L199)

___

### addPageNum

▸ **addPageNum**(`options`): `Promise`<`void`\>

添加页码

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.alignment?` | [`HorizontalAlignment`](../modules/DocumentPro.md#horizontalalignment) | 页码的对齐方式  **`default`** 1 |
| `options.position` | [`DocumentPos`](../modules/DocumentPro.md#documentpos) | 页码的插入位置  **`since`** 22.2.1 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:314](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L314)

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

[src/types/DocumentPro.ts:403](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L403)

___

### getComment

▸ **getComment**(`options`): `Promise`<{ `commentId`: `string` ; `includeChapterTitle?`: `boolean`  }\>

获取单条评论

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentId` | `string` | 评论ID  **`since`** 22.2.1 |
| `options.includeChapterTitle?` | `boolean` | 包含对应的标题信息 |

#### Returns

`Promise`<{ `commentId`: `string` ; `includeChapterTitle?`: `boolean`  }\>

#### Defined in

[src/types/DocumentPro.ts:173](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L173)

___

### getCommentBySelection

▸ **getCommentBySelection**(`options?`): `Promise`<`void`\>

获取一个选区已存在的评论

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:194](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L194)

___

### getComments

▸ **getComments**(`options`): `Promise`<{ `includeChapterTitle?`: `boolean`  }\>

获取所有评论

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.includeChapterTitle?` | `boolean` | 包含对应的标题信息  **`since`** 22.2.1  **`default`** false |

#### Returns

`Promise`<{ `includeChapterTitle?`: `boolean`  }\>

#### Defined in

[src/types/DocumentPro.ts:154](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L154)

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

[src/types/DocumentPro.ts:293](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L293)

___

### goToComment

▸ **goToComment**(`options`): `Promise`<`void`\>

跳转到评论所在位置

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentId` | `string` | 评论ID  **`since`** 22.2.1 |
| `options.shouldScrollToComment?` | `boolean` | 是否滚动到评论所在位置  **`default`** true |
| `options.shouldSelectComment?` | `boolean` | 是否需要选中评论正文  **`default`** false |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:272](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L272)

___

### goToPage

▸ **goToPage**(`options`): `Promise`<`void`\>

跳转页面

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.pageNum` | `number` | 页码  **`since`** 22.2.1 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:298](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L298)

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

[src/types/DocumentPro.ts:309](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L309)

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

[src/types/DocumentPro.ts:407](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L407)

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

[src/types/DocumentPro.ts:350](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L350)

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

[BaseEditor](BaseEditor.md).[off](BaseEditor.md#off)

#### Defined in

[src/types/BaseEditor.ts:31](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/BaseEditor.ts#L31)

___

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

[BaseEditor](BaseEditor.md).[on](BaseEditor.md#on)

#### Defined in

[src/types/BaseEditor.ts:26](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/BaseEditor.ts#L26)

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

[src/types/DocumentPro.ts:389](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L389)

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

[src/types/DocumentPro.ts:399](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L399)

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

[src/types/DocumentPro.ts:330](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L330)

___

### removeComment

▸ **removeComment**(`options`): `Promise`<`void`\>

删除评论

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentId` | `string` | 评论ID  **`since`** 22.2.1 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:237](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L237)

___

### removeReply

▸ **removeReply**(`options`): `Promise`<`void`\>

删除回复

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentDataId` | `string` | 回复数据的ID  **`since`** 22.2.1 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:248](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L248)

___

### replyComment

▸ **replyComment**(`options`): `Promise`<{ `commentId`: `string` ; `text`: `string`  }\>

添加回复

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentId` | `string` | 评论ID  **`since`** 22.2.1 |
| `options.text` | `string` | 回复内容 |

#### Returns

`Promise`<{ `commentId`: `string` ; `text`: `string`  }\>

#### Defined in

[src/types/DocumentPro.ts:216](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L216)

___

### setBold

▸ **setBold**(`options`): `Promise`<`void`\>

设置加粗

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.isBold?` | `boolean` | 是否加粗  **`since`** 22.2.1  **`default`** false |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:369](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L369)

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

[src/types/DocumentPro.ts:384](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L384)

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

[BaseEditor](BaseEditor.md).[setTitle](BaseEditor.md#settitle)

#### Defined in

[src/types/BaseEditor.ts:36](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/BaseEditor.ts#L36)

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

[src/types/DocumentPro.ts:405](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L405)

___

### showToc

▸ **showToc**(`options`): `Promise`<`void`\>

显示文档结构

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.shouldDisableCache?` | `boolean` | 禁用文档结构图的默认缓存  **`since`** 22.2.1  **`default`** true |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:335](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L335)

___

### updateComment

▸ **updateComment**(`options`): `Promise`<`void`\>

更新评论或回复

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentDataId` | `string` | 评论数据或回复数据的ID  **`since`** 22.2.1 |
| `options.text` | `string` | 评论内容 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:259](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L259)

___

### updateSignature

▸ **updateSignature**(`payload`): `Promise`<`void`\>

更新签名图片

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`UpdateSignaturePayload`](DocumentPro.UpdateSignaturePayload.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:412](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L412)

___

### zoom

▸ **zoom**(`options`): `Promise`<`void`\>

文档缩放

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.percent` | `number` | 缩放百分比  **`since`** 22.2.1 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:355](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/DocumentPro.ts#L355)
