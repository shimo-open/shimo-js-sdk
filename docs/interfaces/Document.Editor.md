[shimo-js-sdk - v1.2.18](/README.md) / [Document](/modules/Document.md) / Editor

# Interface: Editor

[Document](/modules/Document.md).Editor

## Hierarchy

- [`BaseEditor`](/interfaces/BaseEditor.md)<[`EventMap`](/interfaces/Document.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [on](/interfaces/Document.Editor.md#on)
- [off](/interfaces/Document.Editor.md#off)
- [getCollaborators](/interfaces/Document.Editor.md#getcollaborators)
- [showHistory](/interfaces/Document.Editor.md#showhistory)
- [hideHistory](/interfaces/Document.Editor.md#hidehistory)
- [showRevision](/interfaces/Document.Editor.md#showrevision)
- [hideRevision](/interfaces/Document.Editor.md#hiderevision)
- [showDiscussion](/interfaces/Document.Editor.md#showdiscussion)
- [hideDiscussion](/interfaces/Document.Editor.md#hidediscussion)
- [showToc](/interfaces/Document.Editor.md#showtoc)
- [hideToc](/interfaces/Document.Editor.md#hidetoc)
- [createRevision](/interfaces/Document.Editor.md#createrevision)
- [startDemonstration](/interfaces/Document.Editor.md#startdemonstration)
- [endDemonstration](/interfaces/Document.Editor.md#enddemonstration)
- [print](/interfaces/Document.Editor.md#print)
- [showComments](/interfaces/Document.Editor.md#showcomments)
- [hideComments](/interfaces/Document.Editor.md#hidecomments)
- [showCollaborator](/interfaces/Document.Editor.md#showcollaborator)
- [hideCollaborator](/interfaces/Document.Editor.md#hidecollaborator)
- [isSidebarVisible](/interfaces/Document.Editor.md#issidebarvisible)
- [showComment](/interfaces/Document.Editor.md#showcomment)
- [hideComment](/interfaces/Document.Editor.md#hidecomment)
- [startFollowMode](/interfaces/Document.Editor.md#startfollowmode)
- [getTitle](/interfaces/Document.Editor.md#gettitle)
- [setTitle](/interfaces/Document.Editor.md#settitle)
- [insertExternalApp](/interfaces/Document.Editor.md#insertexternalapp)
- [insertLinkCard](/interfaces/Document.Editor.md#insertlinkcard)
- [insertLink](/interfaces/Document.Editor.md#insertlink)
- [getMarkdownFromSelection](/interfaces/Document.Editor.md#getmarkdownfromselection)
- [insertMarkdown](/interfaces/Document.Editor.md#insertmarkdown)

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

[src/types/BaseEditor.ts:58](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L58)

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

[src/types/BaseEditor.ts:63](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L63)

___

### getCollaborators

▸ **getCollaborators**(): `Collaborator`[]

获取当前协作者列表

#### Returns

`Collaborator`[]

#### Inherited from

[BaseEditor](/interfaces/BaseEditor.md).[getCollaborators](/interfaces/BaseEditor.md#getcollaborators)

#### Defined in

[src/types/BaseEditor.ts:73](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L73)

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

[src/types/Document.ts:41](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L41)

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

[src/types/Document.ts:46](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L46)

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

[src/types/Document.ts:51](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L51)

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

[src/types/Document.ts:56](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L56)

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

[src/types/Document.ts:61](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L61)

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

[src/types/Document.ts:66](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L66)

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

[src/types/Document.ts:71](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L71)

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

[src/types/Document.ts:76](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L76)

___

### createRevision

▸ **createRevision**(`options?`): `Promise`<``null`` \| [`DocumentErrorMessage`](/interfaces/Document.DocumentErrorMessage.md)\>

创建版本

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<``null`` \| [`DocumentErrorMessage`](/interfaces/Document.DocumentErrorMessage.md)\>

#### Defined in

[src/types/Document.ts:81](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L81)

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

[src/types/Document.ts:86](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L86)

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

[src/types/Document.ts:91](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L91)

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

[src/types/Document.ts:96](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L96)

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

[src/types/Document.ts:102](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L102)

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

[src/types/Document.ts:107](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L107)

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

[src/types/Document.ts:112](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L112)

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

[src/types/Document.ts:117](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L117)

___

### isSidebarVisible

▸ **isSidebarVisible**(): `Promise`<`boolean`\>

获取侧边栏显示隐藏状态

**`since`** 24.11.1

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/types/Document.ts:122](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L122)

___

### showComment

▸ **showComment**(): `Promise`<`void`\>

显示评论侧边栏

**`since`** 24.11.1

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:127](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L127)

___

### hideComment

▸ **hideComment**(): `Promise`<`void`\>

隐藏评论侧边栏

**`since`** 24.11.1

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:132](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L132)

___

### startFollowMode

▸ **startFollowMode**(): `Promise`<`void`\>

开始跟随模式

**`since`** 24.11.1

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:137](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L137)

___

### getTitle

▸ **getTitle**(): `Promise`<`string`\>

获取文档标题

**`since`** 24.11.1

#### Returns

`Promise`<`string`\>

#### Defined in

[src/types/Document.ts:142](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L142)

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

[BaseEditor](/interfaces/BaseEditor.md).[setTitle](/interfaces/BaseEditor.md#settitle)

#### Defined in

[src/types/Document.ts:147](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L147)

___

### insertExternalApp

▸ **insertExternalApp**(`url`, `params`): `Promise`<``null`` \| [`DocumentErrorMessage`](/interfaces/Document.DocumentErrorMessage.md)\>

插入第三方应用

**`since`** 22.6.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `params` | [`ExternalAppParams`](/interfaces/Document.ExternalAppParams.md) |

#### Returns

`Promise`<``null`` \| [`DocumentErrorMessage`](/interfaces/Document.DocumentErrorMessage.md)\>

#### Defined in

[src/types/Document.ts:152](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L152)

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

[src/types/Document.ts:160](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L160)

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

[src/types/Document.ts:165](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L165)

___

### getMarkdownFromSelection

▸ **getMarkdownFromSelection**(): `Promise`<`string`\>

获取选区内容的 Markdown 格式

**`since`** 24.11.1

#### Returns

`Promise`<`string`\>

#### Defined in

[src/types/Document.ts:170](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L170)

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

[src/types/Document.ts:175](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Document.ts#L175)
