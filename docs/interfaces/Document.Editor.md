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

[src/types/Document.ts:96](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Document.ts#L96)

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

[src/types/Document.ts:106](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Document.ts#L106)

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

[src/types/Document.ts:81](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Document.ts#L81)

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

[src/types/Document.ts:61](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Document.ts#L61)

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

[src/types/Document.ts:71](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Document.ts#L71)

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

[src/types/Document.ts:91](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Document.ts#L91)

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

[src/types/BaseEditor.ts:11](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/BaseEditor.ts#L11)

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

[src/types/BaseEditor.ts:10](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/BaseEditor.ts#L10)

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

[src/types/Document.ts:111](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Document.ts#L111)

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

[src/types/Document.ts:116](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Document.ts#L116)

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

[src/types/Document.ts:76](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Document.ts#L76)

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

[src/types/Document.ts:56](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Document.ts#L56)

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

[src/types/Document.ts:66](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Document.ts#L66)

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

[src/types/Document.ts:86](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Document.ts#L86)

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

[src/types/Document.ts:101](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Document.ts#L101)
