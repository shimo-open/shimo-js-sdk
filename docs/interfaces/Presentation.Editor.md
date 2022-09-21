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
- [setTitle](Presentation.Editor.md#settitle)
- [showHistory](Presentation.Editor.md#showhistory)
- [startDemonstration](Presentation.Editor.md#startdemonstration)

## Methods

### endDemonstration

▸ **endDemonstration**(`options?`): `Promise`<`void`\>

结束本地演示

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:23](https://github.com/shimohq/shimo-js-sdk/blob/203a7cb/src/types/Presentation.ts#L23)

___

### hideHistory

▸ **hideHistory**(`options?`): `Promise`<`void`\>

隐藏历史

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:19](https://github.com/shimohq/shimo-js-sdk/blob/203a7cb/src/types/Presentation.ts#L19)

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

[src/types/BaseEditor.ts:31](https://github.com/shimohq/shimo-js-sdk/blob/203a7cb/src/types/BaseEditor.ts#L31)

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

[src/types/BaseEditor.ts:26](https://github.com/shimohq/shimo-js-sdk/blob/203a7cb/src/types/BaseEditor.ts#L26)

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

[src/types/BaseEditor.ts:36](https://github.com/shimohq/shimo-js-sdk/blob/203a7cb/src/types/BaseEditor.ts#L36)

___

### showHistory

▸ **showHistory**(`options?`): `Promise`<`void`\>

显示历史

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:17](https://github.com/shimohq/shimo-js-sdk/blob/203a7cb/src/types/Presentation.ts#L17)

___

### startDemonstration

▸ **startDemonstration**(`options?`): `Promise`<`void`\>

开始本地演示

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:21](https://github.com/shimohq/shimo-js-sdk/blob/203a7cb/src/types/Presentation.ts#L21)
