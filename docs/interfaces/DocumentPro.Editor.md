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
- [showHistory](DocumentPro.Editor.md#showhistory)
- [showToc](DocumentPro.Editor.md#showtoc)
- [updateComment](DocumentPro.Editor.md#updatecomment)
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

[src/types/DocumentPro.ts:183](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L183)

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

[src/types/DocumentPro.ts:319](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L319)

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

[src/types/DocumentPro.ts:423](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L423)

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

[src/types/DocumentPro.ts:154](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L154)

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

[src/types/DocumentPro.ts:178](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L178)

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

[src/types/DocumentPro.ts:132](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L132)

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

[src/types/DocumentPro.ts:295](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L295)

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

[src/types/DocumentPro.ts:271](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L271)

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

[src/types/DocumentPro.ts:300](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L300)

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

[src/types/DocumentPro.ts:314](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L314)

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

[src/types/DocumentPro.ts:433](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L433)

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

[src/types/DocumentPro.ts:358](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L358)

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

[src/types/BaseEditor.ts:11](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/BaseEditor.ts#L11)

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

[src/types/BaseEditor.ts:10](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/BaseEditor.ts#L10)

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

[src/types/DocumentPro.ts:407](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L407)

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

[src/types/DocumentPro.ts:421](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L421)

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

[src/types/DocumentPro.ts:338](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L338)

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

[src/types/DocumentPro.ts:227](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L227)

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

[src/types/DocumentPro.ts:241](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L241)

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

[src/types/DocumentPro.ts:203](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L203)

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

[src/types/DocumentPro.ts:377](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L377)

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

[src/types/DocumentPro.ts:392](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L392)

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

[src/types/DocumentPro.ts:431](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L431)

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

[src/types/DocumentPro.ts:343](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L343)

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

[src/types/DocumentPro.ts:255](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L255)

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

[src/types/DocumentPro.ts:363](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/DocumentPro.ts#L363)
