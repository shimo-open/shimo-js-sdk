[shimo-js-sdk - v1.2.18](/README.md) / [Form](/modules/Form.md) / Editor

# Interface: Editor

[Form](/modules/Form.md).Editor

## Hierarchy

- [`BaseEditor`](/interfaces/BaseEditor.md)<[`EventMap`](/interfaces/Form.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [on](/interfaces/Form.Editor.md#on)
- [off](/interfaces/Form.Editor.md#off)
- [setTitle](/interfaces/Form.Editor.md#settitle)
- [getCollaborators](/interfaces/Form.Editor.md#getcollaborators)

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

[src/types/BaseEditor.ts:58](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L58)

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

[src/types/BaseEditor.ts:63](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L63)

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

[src/types/BaseEditor.ts:68](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L68)

___

### getCollaborators

▸ **getCollaborators**(): `Collaborator`[]

获取当前协作者列表

#### Returns

`Collaborator`[]

#### Inherited from

[BaseEditor](/interfaces/BaseEditor.md).[getCollaborators](/interfaces/BaseEditor.md#getcollaborators)

#### Defined in

[src/types/BaseEditor.ts:73](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L73)
