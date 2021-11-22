[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Presentation](../modules/Presentation.md) / Editor

# Interface: Editor

[Presentation](../modules/Presentation.md).Editor

## Hierarchy

- `BaseEditor`<[`EventMap`](Presentation.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [endDemonstration](Presentation.Editor.md#enddemonstration)
- [hideHistory](Presentation.Editor.md#hidehistory)
- [off](Presentation.Editor.md#off)
- [on](Presentation.Editor.md#on)
- [showHistory](Presentation.Editor.md#showhistory)
- [startDemonstration](Presentation.Editor.md#startdemonstration)

## Methods

### endDemonstration

▸ **endDemonstration**(`options`): `Promise`<`void`\>

结束本地演示

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:26](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/types/Presentation.ts#L26)

___

### hideHistory

▸ **hideHistory**(`options`): `Promise`<`void`\>

隐藏历史

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:22](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/types/Presentation.ts#L22)

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

[src/types/BaseEditor.ts:26](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/types/BaseEditor.ts#L26)

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

[src/types/BaseEditor.ts:25](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/types/BaseEditor.ts#L25)

___

### showHistory

▸ **showHistory**(`options`): `Promise`<`void`\>

显示历史

**`since`** PD2.10

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:20](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/types/Presentation.ts#L20)

___

### startDemonstration

▸ **startDemonstration**(`options`): `Promise`<`void`\>

开始本地演示

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:24](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/types/Presentation.ts#L24)
