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

▸ **addComment**(`options`): `Promise`<`Object`\>

添加评论

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.text` | `string` | 评论内容  **`since`** PD2.10 |

#### Returns

`Promise`<`Object`\>

#### Defined in

[src/types/DocumentPro.ts:164](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L164)

___

### addPageNum

▸ **addPageNum**(`options`): `Promise`<`void`\>

添加页码

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.alignment?` | ``0`` \| ``1`` \| ``2`` | 页码的对齐方式  **`default`** 1 |
| `options.position` | [`DocumentPos`](../modules/DocumentPro.md#documentpos) | 页码的插入位置  **`since`** PD2.10 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/DocumentPro.ts:300](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L300)

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

[src/types/DocumentPro.ts:404](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L404)

___

### getComment

▸ **getComment**(`options`): `Promise`<`Object`\>

获取单条评论

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentId` | `string` | 评论ID  **`since`** PD2.10 |
| `options.includeChapterTitle?` | `boolean` | 包含对应的标题信息 |

#### Returns

`Promise`<`Object`\>

#### Defined in

[src/types/DocumentPro.ts:135](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L135)

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

[src/types/DocumentPro.ts:159](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L159)

___

### getComments

▸ **getComments**(`options`): `Promise`<`Object`\>

获取所有评论

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.includeChapterTitle?` | `boolean` | 包含对应的标题信息  **`since`** PD2.10  **`default`** false |

#### Returns

`Promise`<`Object`\>

#### Defined in

[src/types/DocumentPro.ts:113](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L113)

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

[src/types/DocumentPro.ts:276](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L276)

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

[src/types/DocumentPro.ts:252](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L252)

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

[src/types/DocumentPro.ts:281](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L281)

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

[src/types/DocumentPro.ts:295](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L295)

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

[src/types/DocumentPro.ts:414](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L414)

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

[src/types/DocumentPro.ts:339](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L339)

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

[src/types/BaseEditor.ts:11](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/BaseEditor.ts#L11)

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

[src/types/BaseEditor.ts:10](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/BaseEditor.ts#L10)

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

[src/types/DocumentPro.ts:388](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L388)

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

[src/types/DocumentPro.ts:402](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L402)

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

[src/types/DocumentPro.ts:319](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L319)

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

[src/types/DocumentPro.ts:208](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L208)

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

[src/types/DocumentPro.ts:222](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L222)

___

### replyComment

▸ **replyComment**(`options`): `Promise`<`Object`\>

添加回复

**`since`** PD2.10

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.commentId` | `string` | 评论ID  **`since`** PD2.10 |
| `options.text` | `string` | 回复内容 |

#### Returns

`Promise`<`Object`\>

#### Defined in

[src/types/DocumentPro.ts:184](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L184)

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

[src/types/DocumentPro.ts:358](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L358)

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

[src/types/DocumentPro.ts:373](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L373)

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

[src/types/DocumentPro.ts:412](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L412)

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

[src/types/DocumentPro.ts:324](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L324)

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

[src/types/DocumentPro.ts:236](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L236)

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

[src/types/DocumentPro.ts:344](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/DocumentPro.ts#L344)
