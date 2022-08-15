[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [DocumentPro](../modules/DocumentPro.md) / Editor

# Interface: Editor

[DocumentPro](../modules/DocumentPro.md).Editor

## Hierarchy

- `BaseEditor`<[`EventMap`](DocumentPro.EventMap.md)\>

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

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.text` | `string` | 评论内容  **`since`** PD2.10 |

#### Returns

`Promise`<{ `text`: `string`  }\>

#### Defined in

[src/types/DocumentPro.ts:210](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L210)

___

### addPageNum

▸ **addPageNum**(`options`): `Promise`<`void`\>

添加页码

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.alignment?` | [`HorizontalAlignment`](../modules/DocumentPro.md#horizontalalignment) | 页码的对齐方式  **`default`** 1 |
| `options.position` | [`DocumentPos`](../modules/DocumentPro.md#documentpos) | 页码的插入位置  **`since`** PD2.10 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:346](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L346)

___

### createRevision

▸ **createRevision**(`options`): `Promise`<`void`\>

创建版本

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.name` | `string` | 版本名 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:450](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L450)

___

### getComment

▸ **getComment**(`options`): `Promise`<{ `commentId`: `string` ; `includeChapterTitle?`: `boolean`  }\>

获取单条评论

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentId` | `string` | 评论ID  **`since`** PD2.10 |
| `options.includeChapterTitle?` | `boolean` | 包含对应的标题信息 |

#### Returns

`Promise`<{ `commentId`: `string` ; `includeChapterTitle?`: `boolean`  }\>

#### Defined in

[src/types/DocumentPro.ts:181](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L181)

___

### getCommentBySelection

▸ **getCommentBySelection**(`options`): `Promise`<`void`\>

获取一个选区已存在的评论

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:205](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L205)

___

### getComments

▸ **getComments**(`options`): `Promise`<{ `includeChapterTitle?`: `boolean`  }\>

获取所有评论

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.includeChapterTitle?` | `boolean` | 包含对应的标题信息  **`since`** PD2.10  **`default`** false |

#### Returns

`Promise`<{ `includeChapterTitle?`: `boolean`  }\>

#### Defined in

[src/types/DocumentPro.ts:159](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L159)

___

### getSelectedText

▸ **getSelectedText**(`options`): `Promise`<`void`\>

获取选区文本

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:322](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L322)

___

### goToComment

▸ **goToComment**(`options`): `Promise`<`void`\>

跳转到评论所在位置

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentId` | `string` | 评论ID  **`since`** PD2.10 |
| `options.shouldScrollToComment?` | `boolean` | 是否滚动到评论所在位置  **`default`** true |
| `options.shouldSelectComment?` | `boolean` | 是否需要选中评论正文  **`default`** false |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:298](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L298)

___

### goToPage

▸ **goToPage**(`options`): `Promise`<`void`\>

跳转页面

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.pageNum` | `number` | 页码  **`since`** PD2.10 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:327](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L327)

___

### goToTop

▸ **goToTop**(`options`): `Promise`<`void`\>

跳到文档顶部

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:341](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L341)

___

### hideHistory

▸ **hideHistory**(`options`): `Promise`<`void`\>

关闭历史版本预览

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:460](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L460)

___

### hideToc

▸ **hideToc**(`options`): `Promise`<`void`\>

隐藏文档结构图

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:385](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L385)

___

### off

▸ **off**<`K`\>(`event`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `handler` | `EventCallback` |

#### Returns

`void`

#### Inherited from

BaseEditor.off

#### Defined in

[src/types/BaseEditor.ts:11](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/BaseEditor.ts#L11)

___

### on

▸ **on**<`K`\>(`event`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `handler` | `EventCallback` |

#### Returns

`void`

#### Inherited from

BaseEditor.on

#### Defined in

[src/types/BaseEditor.ts:10](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/BaseEditor.ts#L10)

___

### print

▸ **print**(`options`): `Promise`<`void`\>

打印

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.pageNums` | `number`[] | 页码列表  **`since`** PD2.10 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:434](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L434)

___

### printAll

▸ **printAll**(`options`): `Promise`<`void`\>

打印所有页面

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:448](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L448)

___

### removeAllPageNums

▸ **removeAllPageNums**(`options`): `Promise`<`void`\>

删除所有页码

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:365](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L365)

___

### removeComment

▸ **removeComment**(`options`): `Promise`<`void`\>

删除评论

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentId` | `string` | 评论ID  **`since`** PD2.10 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:254](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L254)

___

### removeReply

▸ **removeReply**(`options`): `Promise`<`void`\>

删除回复

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentDataId` | `string` | 回复数据的ID  **`since`** PD2.10 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:268](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L268)

___

### replyComment

▸ **replyComment**(`options`): `Promise`<{ `commentId`: `string` ; `text`: `string`  }\>

添加回复

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentId` | `string` | 评论ID  **`since`** PD2.10 |
| `options.text` | `string` | 回复内容 |

#### Returns

`Promise`<{ `commentId`: `string` ; `text`: `string`  }\>

#### Defined in

[src/types/DocumentPro.ts:230](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L230)

___

### setBold

▸ **setBold**(`options`): `Promise`<`void`\>

设置加粗

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.isBold?` | `boolean` | 是否加粗  **`since`** PD2.10  **`default`** false |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:404](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L404)

___

### setItalic

▸ **setItalic**(`options`): `Promise`<`void`\>

设置斜体

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.isItalic?` | `boolean` | 是否斜体  **`since`** PD2.10  **`default`** false |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:419](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L419)

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

#### Defined in

[src/types/DocumentPro.ts:465](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L465)

___

### showHistory

▸ **showHistory**(`options`): `Promise`<`void`\>

预览历史版本

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:458](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L458)

___

### showToc

▸ **showToc**(`options`): `Promise`<`void`\>

显示文档结构

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.shouldDisableCache?` | `boolean` | 禁用文档结构图的默认缓存  **`since`** PD2.10  **`default`** true |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:370](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L370)

___

### updateComment

▸ **updateComment**(`options`): `Promise`<`void`\>

更新评论或回复

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentDataId` | `string` | 评论数据或回复数据的ID  **`since`** PD2.10 |
| `options.text` | `string` | 评论内容 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:282](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L282)

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

[src/types/DocumentPro.ts:470](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L470)

___

### zoom

▸ **zoom**(`options`): `Promise`<`void`\>

文档缩放

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.percent` | `number` | 缩放百分比  **`since`** PD2.10 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:390](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/DocumentPro.ts#L390)
