[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [DocumentPro](../modules/documentpro.md) / Editor

# Interface: Editor

[DocumentPro](../modules/documentpro.md).Editor

## Hierarchy

- `BaseEditor`<[`EventMap`](documentpro.eventmap.md)\>

  ↳ **`Editor`**

## Table of contents

### Properties

- [addComment](documentpro.editor.md#addcomment)
- [addPageNum](documentpro.editor.md#addpagenum)
- [createRevision](documentpro.editor.md#createrevision)
- [getComment](documentpro.editor.md#getcomment)
- [getCommentBySelection](documentpro.editor.md#getcommentbyselection)
- [getComments](documentpro.editor.md#getcomments)
- [getSelectedText](documentpro.editor.md#getselectedtext)
- [goToComment](documentpro.editor.md#gotocomment)
- [goToPage](documentpro.editor.md#gotopage)
- [goToTop](documentpro.editor.md#gototop)
- [hideHistory](documentpro.editor.md#hidehistory)
- [hideToc](documentpro.editor.md#hidetoc)
- [off](documentpro.editor.md#off)
- [on](documentpro.editor.md#on)
- [print](documentpro.editor.md#print)
- [printAll](documentpro.editor.md#printall)
- [removeAllPageNums](documentpro.editor.md#removeallpagenums)
- [removeComment](documentpro.editor.md#removecomment)
- [removeReply](documentpro.editor.md#removereply)
- [replyComment](documentpro.editor.md#replycomment)
- [setBold](documentpro.editor.md#setbold)
- [setItalic](documentpro.editor.md#setitalic)
- [showHistory](documentpro.editor.md#showhistory)
- [showToc](documentpro.editor.md#showtoc)
- [updateComment](documentpro.editor.md#updatecomment)
- [zoom](documentpro.editor.md#zoom)

## Properties

### addComment

• **addComment**: (`options`: { `text`: `string`  }) => `Promise`<`Object`\>

#### Type declaration

▸ (`options`): `Promise`<`Object`\>

添加评论

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.text` | `string` | 评论内容  **`since`** PD2.10 |

##### Returns

`Promise`<`Object`\>

#### Defined in

src/types/DocumentPro.ts:164

___

### addPageNum

• **addPageNum**: (`options`: { `alignment?`: ``0`` \| ``1`` \| ``2`` ; `position`: [`DocumentPos`](../modules/documentpro.md#documentpos)  }) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

添加页码

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.alignment?` | ``0`` \| ``1`` \| ``2`` | 页码的对齐方式  **`default`** 1 |
| `options.position` | [`DocumentPos`](../modules/documentpro.md#documentpos) | 页码的插入位置  **`since`** PD2.10 |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:300

___

### createRevision

• **createRevision**: (`options`: { `name`: `string`  }) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

创建版本

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.name` | `string` | 版本名 |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:404

___

### getComment

• **getComment**: (`options`: { `commentId`: `string` ; `includeChapterTitle?`: `boolean`  }) => `Promise`<`Object`\>

#### Type declaration

▸ (`options`): `Promise`<`Object`\>

获取单条评论

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentId` | `string` | 评论ID  **`since`** PD2.10 |
| `options.includeChapterTitle?` | `boolean` | 包含对应的标题信息 |

##### Returns

`Promise`<`Object`\>

#### Defined in

src/types/DocumentPro.ts:135

___

### getCommentBySelection

• **getCommentBySelection**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

获取一个选区已存在的评论

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:159

___

### getComments

• **getComments**: (`options`: { `includeChapterTitle?`: `boolean`  }) => `Promise`<`Object`\>

#### Type declaration

▸ (`options`): `Promise`<`Object`\>

获取所有评论

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.includeChapterTitle?` | `boolean` | 包含对应的标题信息  **`since`** PD2.10  **`default`** false |

##### Returns

`Promise`<`Object`\>

#### Defined in

src/types/DocumentPro.ts:113

___

### getSelectedText

• **getSelectedText**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

获取选区文本

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:276

___

### goToComment

• **goToComment**: (`options`: { `commentId`: `string` ; `shouldScrollToComment?`: `boolean` ; `shouldSelectComment?`: `boolean`  }) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

跳转到评论所在位置

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentId` | `string` | 评论ID  **`since`** PD2.10 |
| `options.shouldScrollToComment?` | `boolean` | 是否滚动到评论所在位置  **`default`** true |
| `options.shouldSelectComment?` | `boolean` | 是否需要选中评论正文  **`default`** false |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:252

___

### goToPage

• **goToPage**: (`options`: { `pageNum`: `number`  }) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

跳转页面

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.pageNum` | `number` | 页码  **`since`** PD2.10 |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:281

___

### goToTop

• **goToTop**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

跳到文档顶部

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:295

___

### hideHistory

• **hideHistory**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

关闭历史版本预览

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:414

___

### hideToc

• **hideToc**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

隐藏文档结构图

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:339

___

### off

• **off**: <K\>(`event`: `K`, `handler`: `EventCallback`) => `void`

#### Type declaration

▸ <`K`\>(`event`, `handler`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"error"`` \| ``"selectionEnded"`` \| ``"documentChanged"`` \| ``"commentClicked"`` \| ``"documentRecalculated"`` \| ``"saveStatusChanged"`` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `handler` | `EventCallback` |

##### Returns

`void`

#### Inherited from

BaseEditor.off

#### Defined in

src/types/BaseEditor.ts:11

___

### on

• **on**: <K\>(`event`: `K`, `handler`: `EventCallback`) => `void`

#### Type declaration

▸ <`K`\>(`event`, `handler`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"error"`` \| ``"selectionEnded"`` \| ``"documentChanged"`` \| ``"commentClicked"`` \| ``"documentRecalculated"`` \| ``"saveStatusChanged"`` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `K` |
| `handler` | `EventCallback` |

##### Returns

`void`

#### Inherited from

BaseEditor.on

#### Defined in

src/types/BaseEditor.ts:10

___

### print

• **print**: (`options`: { `pageNums`: `number`[]  }) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

打印

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.pageNums` | `number`[] | 页码列表  **`since`** PD2.10 |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:388

___

### printAll

• **printAll**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

打印所有页面

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:402

___

### removeAllPageNums

• **removeAllPageNums**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

删除所有页码

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:319

___

### removeComment

• **removeComment**: (`options`: { `commentId`: `string`  }) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

删除评论

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentId` | `string` | 评论ID  **`since`** PD2.10 |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:208

___

### removeReply

• **removeReply**: (`options`: { `commentDataId`: `string`  }) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

删除回复

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentDataId` | `string` | 回复数据的ID  **`since`** PD2.10 |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:222

___

### replyComment

• **replyComment**: (`options`: { `commentId`: `string` ; `text`: `string`  }) => `Promise`<`Object`\>

#### Type declaration

▸ (`options`): `Promise`<`Object`\>

添加回复

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentId` | `string` | 评论ID  **`since`** PD2.10 |
| `options.text` | `string` | 回复内容 |

##### Returns

`Promise`<`Object`\>

#### Defined in

src/types/DocumentPro.ts:184

___

### setBold

• **setBold**: (`options`: { `isBold?`: `boolean`  }) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

设置加粗

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.isBold?` | `boolean` | 是否加粗  **`since`** PD2.10  **`default`** false |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:358

___

### setItalic

• **setItalic**: (`options`: { `isItalic?`: `boolean`  }) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

设置斜体

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.isItalic?` | `boolean` | 是否斜体  **`since`** PD2.10  **`default`** false |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:373

___

### showHistory

• **showHistory**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

预览历史版本

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:412

___

### showToc

• **showToc**: (`options`: { `shouldDisableCache?`: `boolean`  }) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

显示文档结构

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.shouldDisableCache?` | `boolean` | 禁用文档结构图的默认缓存  **`since`** PD2.10  **`default`** true |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:324

___

### updateComment

• **updateComment**: (`options`: { `commentDataId`: `string` ; `text`: `string`  }) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

更新评论或回复

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentDataId` | `string` | 评论数据或回复数据的ID  **`since`** PD2.10 |
| `options.text` | `string` | 评论内容 |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:236

___

### zoom

• **zoom**: (`options`: { `percent`: `number`  }) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

文档缩放

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.percent` | `number` | 缩放百分比  **`since`** PD2.10 |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/DocumentPro.ts:344
