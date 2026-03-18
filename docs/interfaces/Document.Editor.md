[shimo-js-sdk - v1.2.26](../README.md) / [Document](../modules/Document.md) / Editor

# Interface: Editor

[Document](../modules/Document.md).Editor

## Hierarchy

- [`BaseEditor`](BaseEditor.md)<[`EventMap`](Document.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [on](Document.Editor.md#on)
- [off](Document.Editor.md#off)
- [getCollaborators](Document.Editor.md#getcollaborators)
- [showHistory](Document.Editor.md#showhistory)
- [hideHistory](Document.Editor.md#hidehistory)
- [showRevision](Document.Editor.md#showrevision)
- [hideRevision](Document.Editor.md#hiderevision)
- [showDiscussion](Document.Editor.md#showdiscussion)
- [hideDiscussion](Document.Editor.md#hidediscussion)
- [showToc](Document.Editor.md#showtoc)
- [hideToc](Document.Editor.md#hidetoc)
- [createRevision](Document.Editor.md#createrevision)
- [startDemonstration](Document.Editor.md#startdemonstration)
- [endDemonstration](Document.Editor.md#enddemonstration)
- [print](Document.Editor.md#print)
- [showComments](Document.Editor.md#showcomments)
- [hideComments](Document.Editor.md#hidecomments)
- [showCollaborator](Document.Editor.md#showcollaborator)
- [hideCollaborator](Document.Editor.md#hidecollaborator)
- [isSidebarVisible](Document.Editor.md#issidebarvisible)
- [showComment](Document.Editor.md#showcomment)
- [hideComment](Document.Editor.md#hidecomment)
- [startFollowMode](Document.Editor.md#startfollowmode)
- [getTitle](Document.Editor.md#gettitle)
- [setTitle](Document.Editor.md#settitle)
- [insertExternalApp](Document.Editor.md#insertexternalapp)
- [insertLinkCard](Document.Editor.md#insertlinkcard)
- [insertLink](Document.Editor.md#insertlink)
- [getMarkdownFromSelection](Document.Editor.md#getmarkdownfromselection)
- [insertMarkdown](Document.Editor.md#insertmarkdown)

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

[BaseEditor](BaseEditor.md).[on](BaseEditor.md#on)

#### Defined in

[src/types/BaseEditor.ts:68](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/BaseEditor.ts#L68)

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

[src/types/BaseEditor.ts:73](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/BaseEditor.ts#L73)

___

### getCollaborators

▸ **getCollaborators**(): `Collaborator`[]

获取当前协作者列表

#### Returns

`Collaborator`[]

#### Inherited from

[BaseEditor](BaseEditor.md).[getCollaborators](BaseEditor.md#getcollaborators)

#### Defined in

[src/types/BaseEditor.ts:83](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/BaseEditor.ts#L83)

___

### showHistory

▸ **showHistory**(`options?`): `Promise`<`void`\>

显示历史侧边栏

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:41](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L41)

___

### hideHistory

▸ **hideHistory**(`options?`): `Promise`<`void`\>

隐藏历史侧边栏

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:46](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L46)

___

### showRevision

▸ **showRevision**(`options?`): `Promise`<`void`\>

显示版本侧边栏

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:51](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L51)

___

### hideRevision

▸ **hideRevision**(`options?`): `Promise`<`void`\>

隐藏版本侧边栏

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:56](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L56)

___

### showDiscussion

▸ **showDiscussion**(`options?`): `Promise`<`void`\>

显示讨论侧边栏

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:61](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L61)

___

### hideDiscussion

▸ **hideDiscussion**(`options?`): `Promise`<`void`\>

隐藏讨论侧边栏

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:66](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L66)

___

### showToc

▸ **showToc**(`options?`): `Promise`<`void`\>

显示目录

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:71](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L71)

___

### hideToc

▸ **hideToc**(`options?`): `Promise`<`void`\>

隐藏目录

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:76](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L76)

___

### createRevision

▸ **createRevision**(`options?`): `Promise`<``null`` \| [`DocumentErrorMessage`](Document.DocumentErrorMessage.md)\>

创建版本

**`since`** 22.2.1

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.name?` | `string` | 版本名称，since co-1.6 |

#### Returns

`Promise`<``null`` \| [`DocumentErrorMessage`](Document.DocumentErrorMessage.md)\>

#### Defined in

[src/types/Document.ts:82](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L82)

___

### startDemonstration

▸ **startDemonstration**(`options?`): `Promise`<`void`\>

进入演示模式

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:89](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L89)

___

### endDemonstration

▸ **endDemonstration**(`options?`): `Promise`<`void`\>

退出演示模式

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:94](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L94)

___

### print

▸ **print**(`options?`): `Promise`<`void`\>

打印

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:99](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L99)

___

### showComments

▸ **showComments**(`options?`): `Promise`<`void`\>

显示评论侧边栏

**`since`** 22.6.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:105](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L105)

___

### hideComments

▸ **hideComments**(`options?`): `Promise`<`void`\>

隐藏评论侧边栏

**`since`** 22.6.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:110](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L110)

___

### showCollaborator

▸ **showCollaborator**(`options?`): `Promise`<`void`\>

显示编写者信息

**`since`** 24.11.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:115](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L115)

___

### hideCollaborator

▸ **hideCollaborator**(`options?`): `Promise`<`void`\>

隐藏编写者信息

**`since`** 24.11.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:120](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L120)

___

### isSidebarVisible

▸ **isSidebarVisible**(): `Promise`<`boolean`\>

获取侧边栏显示隐藏状态

**`since`** 24.11.1

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/types/Document.ts:125](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L125)

___

### showComment

▸ **showComment**(): `Promise`<`void`\>

显示评论侧边栏

**`since`** 24.11.1

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:130](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L130)

___

### hideComment

▸ **hideComment**(): `Promise`<`void`\>

隐藏评论侧边栏

**`since`** 24.11.1

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:135](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L135)

___

### startFollowMode

▸ **startFollowMode**(): `Promise`<`void`\>

开始跟随模式

**`since`** 24.11.1

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:140](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L140)

___

### getTitle

▸ **getTitle**(): `Promise`<`string`\>

获取文档标题

**`since`** 24.11.1

#### Returns

`Promise`<`string`\>

#### Defined in

[src/types/Document.ts:145](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L145)

___

### setTitle

▸ **setTitle**(`value`): `Promise`<`void`\>

设置文档标题

**`since`** 24.11.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`Promise`<`void`\>

#### Overrides

[BaseEditor](BaseEditor.md).[setTitle](BaseEditor.md#settitle)

#### Defined in

[src/types/Document.ts:150](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L150)

___

### insertExternalApp

▸ **insertExternalApp**(`url`, `params`): `Promise`<``null`` \| [`DocumentErrorMessage`](Document.DocumentErrorMessage.md)\>

插入第三方应用

**`since`** 22.6.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `params` | [`ExternalAppParams`](Document.ExternalAppParams.md) |

#### Returns

`Promise`<``null`` \| [`DocumentErrorMessage`](Document.DocumentErrorMessage.md)\>

#### Defined in

[src/types/Document.ts:155](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L155)

___

### insertLinkCard

▸ **insertLinkCard**(`url`, `title`): `Promise`<`void`\>

插入链接卡片

**`since`** 24.11.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `title` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:163](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L163)

___

### insertLink

▸ **insertLink**(`url`, `text`): `Promise`<`void`\>

插入链接

**`since`** 24.11.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `text` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:168](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L168)

___

### getMarkdownFromSelection

▸ **getMarkdownFromSelection**(): `Promise`<`string`\>

获取选区内容的 Markdown 格式

**`since`** 24.11.1

#### Returns

`Promise`<`string`\>

#### Defined in

[src/types/Document.ts:173](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L173)

___

### insertMarkdown

▸ **insertMarkdown**(`content`): `Promise`<`void`\>

插入 Markdown 内容

**`since`** 24.11.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:178](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L178)
