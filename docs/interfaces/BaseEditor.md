[shimo-js-sdk - v1.2.23](../README.md) / BaseEditor

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

  ↳ [`Editor`](Flowchart.Editor.md)

## Table of contents

### Methods

- [on](BaseEditor.md#on)
- [off](BaseEditor.md#off)
- [setTitle](BaseEditor.md#settitle)
- [getCollaborators](BaseEditor.md#getcollaborators)

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

[src/types/BaseEditor.ts:58](https://github.com/shimo-open/shimo-js-sdk/blob/d40b879/src/types/BaseEditor.ts#L58)

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

[src/types/BaseEditor.ts:63](https://github.com/shimo-open/shimo-js-sdk/blob/d40b879/src/types/BaseEditor.ts#L63)

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

[src/types/BaseEditor.ts:68](https://github.com/shimo-open/shimo-js-sdk/blob/d40b879/src/types/BaseEditor.ts#L68)

___

### getCollaborators

▸ **getCollaborators**(): `Collaborator`[]

获取当前协作者列表

#### Returns

`Collaborator`[]

#### Defined in

[src/types/BaseEditor.ts:73](https://github.com/shimo-open/shimo-js-sdk/blob/d40b879/src/types/BaseEditor.ts#L73)
