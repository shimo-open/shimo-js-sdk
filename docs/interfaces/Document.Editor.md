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
- [hideDiscussion](Document.Editor.md#hidediscussion)
- [hideHistory](Document.Editor.md#hidehistory)
- [hideRevision](Document.Editor.md#hiderevision)
- [hideToc](Document.Editor.md#hidetoc)
- [off](Document.Editor.md#off)
- [on](Document.Editor.md#on)
- [print](Document.Editor.md#print)
- [setTitle](Document.Editor.md#settitle)
- [showDiscussion](Document.Editor.md#showdiscussion)
- [showHistory](Document.Editor.md#showhistory)
- [showRevision](Document.Editor.md#showrevision)
- [showToc](Document.Editor.md#showtoc)
- [startDemonstration](Document.Editor.md#startdemonstration)

## Methods

### createRevision

▸ **createRevision**(`options`): `Promise`<`void`\>

创建版本

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Document.ts:77](https://github.com/shimohq/shimo-js-sdk/blob/e9f3299/src/types/Document.ts#L77)

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

[src/types/Document.ts:87](https://github.com/shimohq/shimo-js-sdk/blob/e9f3299/src/types/Document.ts#L87)

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

[src/types/Document.ts:62](https://github.com/shimohq/shimo-js-sdk/blob/e9f3299/src/types/Document.ts#L62)

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

[src/types/Document.ts:42](https://github.com/shimohq/shimo-js-sdk/blob/e9f3299/src/types/Document.ts#L42)

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

[src/types/Document.ts:52](https://github.com/shimohq/shimo-js-sdk/blob/e9f3299/src/types/Document.ts#L52)

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

[src/types/Document.ts:72](https://github.com/shimohq/shimo-js-sdk/blob/e9f3299/src/types/Document.ts#L72)

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

[src/types/BaseEditor.ts:11](https://github.com/shimohq/shimo-js-sdk/blob/e9f3299/src/types/BaseEditor.ts#L11)

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

[src/types/BaseEditor.ts:10](https://github.com/shimohq/shimo-js-sdk/blob/e9f3299/src/types/BaseEditor.ts#L10)

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

[src/types/Document.ts:92](https://github.com/shimohq/shimo-js-sdk/blob/e9f3299/src/types/Document.ts#L92)

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

[src/types/Document.ts:97](https://github.com/shimohq/shimo-js-sdk/blob/e9f3299/src/types/Document.ts#L97)

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

[src/types/Document.ts:57](https://github.com/shimohq/shimo-js-sdk/blob/e9f3299/src/types/Document.ts#L57)

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

[src/types/Document.ts:37](https://github.com/shimohq/shimo-js-sdk/blob/e9f3299/src/types/Document.ts#L37)

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

[src/types/Document.ts:47](https://github.com/shimohq/shimo-js-sdk/blob/e9f3299/src/types/Document.ts#L47)

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

[src/types/Document.ts:67](https://github.com/shimohq/shimo-js-sdk/blob/e9f3299/src/types/Document.ts#L67)

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

[src/types/Document.ts:82](https://github.com/shimohq/shimo-js-sdk/blob/e9f3299/src/types/Document.ts#L82)
