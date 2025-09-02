[shimo-js-sdk](/README.md) / [Exports](/modules.md) / BaseEditor

# Interface: BaseEditor<T\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` = { [K: string]: `any`;  } |

## Hierarchy

- **`BaseEditor`**

  ↳ [`Editor`](/interfaces/DocumentPro.Editor.md)

  ↳ [`Editor`](/interfaces/Document.Editor.md)

  ↳ [`Editor`](/interfaces/Spreadsheet.Editor.md)

  ↳ [`Editor`](/interfaces/Presentation.Editor.md)

  ↳ [`Editor`](/interfaces/Table.Editor.md)

  ↳ [`Editor`](/interfaces/Form.Editor.md)

  ↳ [`Editor`](/interfaces/Flowchart.Editor.md)

## Table of contents

### Methods

- [on](/interfaces/BaseEditor.md#on)
- [off](/interfaces/BaseEditor.md#off)
- [setTitle](/interfaces/BaseEditor.md#settitle)

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

#### Defined in

[src/types/BaseEditor.ts:37](https://github.com/byte9527/shimo-js-sdk/blob/8fa8b89/src/types/BaseEditor.ts#L37)

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

#### Defined in

[src/types/BaseEditor.ts:42](https://github.com/byte9527/shimo-js-sdk/blob/8fa8b89/src/types/BaseEditor.ts#L42)

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

[src/types/BaseEditor.ts:47](https://github.com/byte9527/shimo-js-sdk/blob/8fa8b89/src/types/BaseEditor.ts#L47)
