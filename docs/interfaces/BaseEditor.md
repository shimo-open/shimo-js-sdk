[shimo-js-sdk - v1.2.16](/README.md) / BaseEditor

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
- [getCollaborators](/interfaces/BaseEditor.md#getcollaborators)

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

#### Defined in

[src/types/BaseEditor.ts:68](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L68)

___

### getCollaborators

▸ **getCollaborators**(): `Collaborator`[]

获取当前协作者列表

#### Returns

`Collaborator`[]

#### Defined in

[src/types/BaseEditor.ts:73](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L73)
