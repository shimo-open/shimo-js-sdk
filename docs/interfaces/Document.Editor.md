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

▸ **createRevision**(`options`): `Promise`<``null`` \| `errorMessage`\>

创建版本

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<``null`` \| `errorMessage`\>

#### Defined in

[src/types/Document.ts:104](https://github.com/shimohq/shimo-js-sdk/blob/901dedd/src/types/Document.ts#L104)

___

### endDemonstration

▸ **endDemonstration**(`options`): `Promise`<`void`\>

退出演示模式

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:114](https://github.com/shimohq/shimo-js-sdk/blob/901dedd/src/types/Document.ts#L114)

___

### hideComments

▸ **hideComments**(`options`): `Promise`<`void`\>

隐藏评论侧边栏

**`since`** PD3.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:135](https://github.com/shimohq/shimo-js-sdk/blob/901dedd/src/types/Document.ts#L135)

___

### hideDiscussion

▸ **hideDiscussion**(`options`): `Promise`<`void`\>

隐藏讨论侧边栏

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:89](https://github.com/shimohq/shimo-js-sdk/blob/901dedd/src/types/Document.ts#L89)

___

### hideHistory

▸ **hideHistory**(`options`): `Promise`<`void`\>

隐藏历史侧边栏

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:69](https://github.com/shimohq/shimo-js-sdk/blob/901dedd/src/types/Document.ts#L69)

___

### hideRevision

▸ **hideRevision**(`options`): `Promise`<`void`\>

隐藏版本侧边栏

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:79](https://github.com/shimohq/shimo-js-sdk/blob/901dedd/src/types/Document.ts#L79)

___

### hideToc

▸ **hideToc**(`options`): `Promise`<`void`\>

隐藏目录

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:99](https://github.com/shimohq/shimo-js-sdk/blob/901dedd/src/types/Document.ts#L99)

___

### insertExternalApp

▸ **insertExternalApp**(`options`): `Promise`<``null`` \| `errorMessage`\>

插入第三方应用

**`since`** PD3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.url` | `string` |

#### Returns

`Promise`<``null`` \| `errorMessage`\>

#### Defined in

[src/types/Document.ts:140](https://github.com/shimohq/shimo-js-sdk/blob/901dedd/src/types/Document.ts#L140)

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

[src/types/BaseEditor.ts:11](https://github.com/shimohq/shimo-js-sdk/blob/901dedd/src/types/BaseEditor.ts#L11)

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

[src/types/BaseEditor.ts:10](https://github.com/shimohq/shimo-js-sdk/blob/901dedd/src/types/BaseEditor.ts#L10)

___

### print

▸ **print**(`options`): `Promise`<`void`\>

打印

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:119](https://github.com/shimohq/shimo-js-sdk/blob/901dedd/src/types/Document.ts#L119)

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

[src/types/Document.ts:124](https://github.com/shimohq/shimo-js-sdk/blob/901dedd/src/types/Document.ts#L124)

___

### showComments

▸ **showComments**(`options`): `Promise`<`void`\>

显示评论侧边栏

**`since`** PD3.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:130](https://github.com/shimohq/shimo-js-sdk/blob/901dedd/src/types/Document.ts#L130)

___

### showDiscussion

▸ **showDiscussion**(`options`): `Promise`<`void`\>

显示讨论侧边栏

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:84](https://github.com/shimohq/shimo-js-sdk/blob/901dedd/src/types/Document.ts#L84)

___

### showHistory

▸ **showHistory**(`options`): `Promise`<`void`\>

显示历史侧边栏

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:64](https://github.com/shimohq/shimo-js-sdk/blob/901dedd/src/types/Document.ts#L64)

___

### showRevision

▸ **showRevision**(`options`): `Promise`<`void`\>

显示版本侧边栏

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:74](https://github.com/shimohq/shimo-js-sdk/blob/901dedd/src/types/Document.ts#L74)

___

### showToc

▸ **showToc**(`options`): `Promise`<`void`\>

显示目录

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:94](https://github.com/shimohq/shimo-js-sdk/blob/901dedd/src/types/Document.ts#L94)

___

### startDemonstration

▸ **startDemonstration**(`options`): `Promise`<`void`\>

进入演示模式

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:109](https://github.com/shimohq/shimo-js-sdk/blob/901dedd/src/types/Document.ts#L109)
