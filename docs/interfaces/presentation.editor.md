[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Presentation](../modules/presentation.md) / Editor

# Interface: Editor

[Presentation](../modules/presentation.md).Editor

## Hierarchy

- `BaseEditor`<[`EventMap`](presentation.eventmap.md)\>

  ↳ **`Editor`**

## Table of contents

### Properties

- [endDemonstration](presentation.editor.md#enddemonstration)
- [hideHistory](presentation.editor.md#hidehistory)
- [off](presentation.editor.md#off)
- [on](presentation.editor.md#on)
- [showHistory](presentation.editor.md#showhistory)
- [startDemonstration](presentation.editor.md#startdemonstration)

## Properties

### endDemonstration

• **endDemonstration**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

结束本地演示

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Presentation.ts:26

___

### hideHistory

• **hideHistory**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

隐藏历史

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Presentation.ts:22

___

### off

• **off**: <K\>(`event`: `K`, `handler`: `EventCallback`) => `void`

#### Type declaration

▸ <`K`\>(`event`, `handler`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"error"`` \| ``"saveStatusChanged"`` |

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
| `K` | extends ``"error"`` \| ``"saveStatusChanged"`` |

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

### showHistory

• **showHistory**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

显示历史

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Presentation.ts:20

___

### startDemonstration

• **startDemonstration**: (`options`: {}) => `Promise`<`void`\>

#### Type declaration

▸ (`options`): `Promise`<`void`\>

开始本地演示

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

##### Returns

`Promise`<`void`\>

#### Defined in

src/types/Presentation.ts:24
