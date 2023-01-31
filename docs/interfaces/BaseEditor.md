[shimo-js-sdk](../README.md) / [Exports](../modules.md) / BaseEditor

# Interface: BaseEditor<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` = { [K: string]: `any`;  } |

## Hierarchy

- **`BaseEditor`**

  ↳ [`Editor`](DocumentPro.Editor.md)

  ↳ [`Editor`](Document.Editor.md)

  ↳ [`Editor`](Spreadsheet.Editor.md)

  ↳ [`Editor`](Presentation.Editor.md)

  ↳ [`Editor`](Table.Editor.md)

  ↳ [`Editor`](Form.Editor.md)

## Table of contents

### Methods

- [off](BaseEditor.md#off)
- [on](BaseEditor.md#on)
- [setTitle](BaseEditor.md#settitle)

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

#### Defined in

[src/types/BaseEditor.ts:31](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/BaseEditor.ts#L31)

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

#### Defined in

[src/types/BaseEditor.ts:26](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/BaseEditor.ts#L26)

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

[src/types/BaseEditor.ts:36](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/types/BaseEditor.ts#L36)
