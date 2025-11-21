[shimo-js-sdk - v1.2.17](/README.md) / [Table](/modules/Table.md) / Editor

# Interface: Editor

[Table](/modules/Table.md).Editor

## Hierarchy

- [`BaseEditor`](/interfaces/BaseEditor.md)<[`EventMap`](/interfaces/Table.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [on](/interfaces/Table.Editor.md#on)
- [off](/interfaces/Table.Editor.md#off)
- [setTitle](/interfaces/Table.Editor.md#settitle)
- [getCollaborators](/interfaces/Table.Editor.md#getcollaborators)
- [showRevision](/interfaces/Table.Editor.md#showrevision)
- [hideRevision](/interfaces/Table.Editor.md#hiderevision)
- [createRevision](/interfaces/Table.Editor.md#createrevision)

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

___

### showRevision

▸ **showRevision**(`options?`): `Promise`<`void`\>

显示版本侧边栏

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Table.ts:16](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Table.ts#L16)

___

### hideRevision

▸ **hideRevision**(`options?`): `Promise`<`void`\>

隐藏版本侧边栏

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Table.ts:20](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Table.ts#L20)

___

### createRevision

▸ **createRevision**(`options?`): `Promise`<`void`\>

创建版本

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Table.ts:24](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/Table.ts#L24)
