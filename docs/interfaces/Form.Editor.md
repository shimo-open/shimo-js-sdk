[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Form](../modules/Form.md) / Editor

# Interface: Editor

[Form](../modules/Form.md).Editor

## Hierarchy

- `BaseEditor`<[`EventMap`](Form.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [off](Form.Editor.md#off)
- [on](Form.Editor.md#on)
- [setTitle](Form.Editor.md#settitle)

## Methods

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

[src/types/BaseEditor.ts:31](https://github.com/shimohq/shimo-js-sdk/blob/9389d1f/src/types/BaseEditor.ts#L31)

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

[src/types/BaseEditor.ts:26](https://github.com/shimohq/shimo-js-sdk/blob/9389d1f/src/types/BaseEditor.ts#L26)

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

[src/types/BaseEditor.ts:36](https://github.com/shimohq/shimo-js-sdk/blob/9389d1f/src/types/BaseEditor.ts#L36)
