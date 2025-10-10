[shimo-js-sdk - v1.2.12](/README.md) / [Document](/modules/Document.md) / Editor

# Interface: Editor

[Document](/modules/Document.md).Editor

## Hierarchy

- [`BaseEditor`](/interfaces/BaseEditor.md)<[`EventMap`](/interfaces/Document.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [on](/interfaces/Document.Editor.md#on)
- [off](/interfaces/Document.Editor.md#off)
- [setTitle](/interfaces/Document.Editor.md#settitle)
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
- [insertExternalApp](/interfaces/Document.Editor.md#insertexternalapp)
- [showCollaborator](/interfaces/Document.Editor.md#showcollaborator)
- [hideCollaborator](/interfaces/Document.Editor.md#hidecollaborator)

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

[src/types/BaseEditor.ts:37](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L37)

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

[src/types/BaseEditor.ts:42](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L42)

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

[src/types/BaseEditor.ts:47](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L47)

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

[src/types/Document.ts:35](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/Document.ts#L35)

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

[src/types/Document.ts:40](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/Document.ts#L40)

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

[src/types/Document.ts:45](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/Document.ts#L45)

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

[src/types/Document.ts:50](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/Document.ts#L50)

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

[src/types/Document.ts:55](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/Document.ts#L55)

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

[src/types/Document.ts:60](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/Document.ts#L60)

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

[src/types/Document.ts:65](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/Document.ts#L65)

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

[src/types/Document.ts:70](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/Document.ts#L70)

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

[src/types/Document.ts:75](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/Document.ts#L75)

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

[src/types/Document.ts:80](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/Document.ts#L80)

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

[src/types/Document.ts:85](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/Document.ts#L85)

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

[src/types/Document.ts:90](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/Document.ts#L90)

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

[src/types/Document.ts:96](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/Document.ts#L96)

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

[src/types/Document.ts:101](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/Document.ts#L101)

___

### insertExternalApp

▸ **insertExternalApp**(`url`): `Promise`<``null`` \| [`DocumentErrorMessage`](/interfaces/Document.DocumentErrorMessage.md)\>

插入第三方应用，是否可用受版本限制。

**`since`** 22.6.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<``null`` \| [`DocumentErrorMessage`](/interfaces/Document.DocumentErrorMessage.md)\>

#### Defined in

[src/types/Document.ts:106](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/Document.ts#L106)

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

[src/types/Document.ts:111](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/Document.ts#L111)

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

[src/types/Document.ts:116](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/Document.ts#L116)
