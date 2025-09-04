[shimo-js-sdk - v1.2.10](/README.md) / [Flowchart](/modules/Flowchart.md) / Editor

# Interface: Editor

[Flowchart](/modules/Flowchart.md).Editor

## Hierarchy

- [`BaseEditor`](/interfaces/BaseEditor.md)<[`EventMap`](/interfaces/Flowchart.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [on](/interfaces/Flowchart.Editor.md#on)
- [off](/interfaces/Flowchart.Editor.md#off)
- [setTitle](/interfaces/Flowchart.Editor.md#settitle)

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

[src/types/BaseEditor.ts:37](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L37)

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

[src/types/BaseEditor.ts:42](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L42)

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

[src/types/BaseEditor.ts:47](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L47)
