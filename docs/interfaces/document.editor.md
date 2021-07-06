[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Document](../modules/document.md) / Editor

# Interface: Editor

[Document](../modules/document.md).Editor

## Hierarchy

- `BaseEditor`<[`EventMap`](document.eventmap.md)\>

  ↳ **`Editor`**

## Table of contents

### Properties

- [createRevision](document.editor.md#createrevision)
- [endDemonstration](document.editor.md#enddemonstration)
- [hideDiscussion](document.editor.md#hidediscussion)
- [hideHistory](document.editor.md#hidehistory)
- [hideRevision](document.editor.md#hiderevision)
- [hideToc](document.editor.md#hidetoc)
- [off](document.editor.md#off)
- [on](document.editor.md#on)
- [print](document.editor.md#print)
- [showDiscussion](document.editor.md#showdiscussion)
- [showHistory](document.editor.md#showhistory)
- [showRevision](document.editor.md#showrevision)
- [showToc](document.editor.md#showtoc)
- [startDemonstration](document.editor.md#startdemonstration)

## Properties

### createRevision

• **createRevision**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

创建版本

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Document.ts:63

___

### endDemonstration

• **endDemonstration**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

退出演示模式

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Document.ts:73

___

### hideDiscussion

• **hideDiscussion**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

隐藏讨论侧边栏

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Document.ts:48

___

### hideHistory

• **hideHistory**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

隐藏历史侧边栏

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Document.ts:28

___

### hideRevision

• **hideRevision**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

隐藏版本侧边栏

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Document.ts:38

___

### hideToc

• **hideToc**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

隐藏目录

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Document.ts:58

___

### off

• **off**: <K\>(`event`: `K`, `handler`: `EventCallback`) => `void`

#### Type declaration

▸ <`K`\>(`event`, `handler`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"error"`` \| ``"saveStatusDidChange"`` |

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
| `K` | extends ``"error"`` \| ``"saveStatusDidChange"`` |

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

• **print**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

打印

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Document.ts:78

___

### showDiscussion

• **showDiscussion**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

显示讨论侧边栏

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Document.ts:43

___

### showHistory

• **showHistory**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

显示历史侧边栏

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Document.ts:23

___

### showRevision

• **showRevision**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

显示版本侧边栏

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Document.ts:33

___

### showToc

• **showToc**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

显示目录

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Document.ts:53

___

### startDemonstration

• **startDemonstration**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

进入演示模式

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Document.ts:68
