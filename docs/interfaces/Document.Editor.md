[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Document](../modules/Document.md) / Editor

# Interface: Editor

[Document](../modules/Document.md).Editor

## Hierarchy

- `BaseEditor`<[`EventMap`](Document.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [createRevision](Document.Editor.md#createrevision)
- [endDemonstration](Document.Editor.md#enddemonstration)
- [hideComments](Document.Editor.md#hidecomments)
- [hideDiscussion](Document.Editor.md#hidediscussion)
- [hideHistory](Document.Editor.md#hidehistory)
- [hideRevision](Document.Editor.md#hiderevision)
- [hideToc](Document.Editor.md#hidetoc)
- [insertExternalApp](Document.Editor.md#insertexternalapp)
- [off](Document.Editor.md#off)
- [on](Document.Editor.md#on)
- [print](Document.Editor.md#print)
- [setTitle](Document.Editor.md#settitle)
- [showComments](Document.Editor.md#showcomments)
- [showDiscussion](Document.Editor.md#showdiscussion)
- [showHistory](Document.Editor.md#showhistory)
- [showRevision](Document.Editor.md#showrevision)
- [showToc](Document.Editor.md#showtoc)
- [startDemonstration](Document.Editor.md#startdemonstration)

## Methods

### createRevision

▸ **createRevision**(`options?`): `Promise`<``null`` \| `DocumentErrorMessage`\>

创建版本

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<``null`` \| `DocumentErrorMessage`\>

#### Defined in

[src/types/Document.ts:75](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/Document.ts#L75)

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

[src/types/Document.ts:85](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/Document.ts#L85)

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

[src/types/Document.ts:101](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/Document.ts#L101)

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

[src/types/Document.ts:60](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/Document.ts#L60)

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

[src/types/Document.ts:40](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/Document.ts#L40)

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

[src/types/Document.ts:50](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/Document.ts#L50)

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

[src/types/Document.ts:70](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/Document.ts#L70)

___

### insertExternalApp

▸ **insertExternalApp**(`url`): `Promise`<``null`` \| `DocumentErrorMessage`\>

插入第三方应用，是否可用受版本限制。

**`since`** 22.6.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<``null`` \| `DocumentErrorMessage`\>

#### Defined in

[src/types/Document.ts:106](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/Document.ts#L106)

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

BaseEditor.off

#### Defined in

[src/types/BaseEditor.ts:31](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/BaseEditor.ts#L31)

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

BaseEditor.on

#### Defined in

[src/types/BaseEditor.ts:26](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/BaseEditor.ts#L26)

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

[src/types/Document.ts:90](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/Document.ts#L90)

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

BaseEditor.setTitle

#### Defined in

[src/types/BaseEditor.ts:36](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/BaseEditor.ts#L36)

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

[src/types/Document.ts:96](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/Document.ts#L96)

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

[src/types/Document.ts:55](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/Document.ts#L55)

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

[src/types/Document.ts:35](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/Document.ts#L35)

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

[src/types/Document.ts:45](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/Document.ts#L45)

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

[src/types/Document.ts:65](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/Document.ts#L65)

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

[src/types/Document.ts:80](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/Document.ts#L80)
