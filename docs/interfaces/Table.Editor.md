[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Table](../modules/Table.md) / Editor

# Interface: Editor

[Table](../modules/Table.md).Editor

## Hierarchy

- `BaseEditor`<[`EventMap`](Table.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [createRevision](Table.Editor.md#createrevision)
- [hideRevision](Table.Editor.md#hiderevision)
- [off](Table.Editor.md#off)
- [on](Table.Editor.md#on)
- [setTitle](Table.Editor.md#settitle)
- [showRevision](Table.Editor.md#showrevision)

## Methods

### createRevision

▸ **createRevision**(`options`): `Promise`<`void`\>

创建版本

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Table.ts:34](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Table.ts#L34)

___

### hideRevision

▸ **hideRevision**(`options`): `Promise`<`void`\>

隐藏版本侧边栏

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Table.ts:30](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Table.ts#L30)

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

[src/types/BaseEditor.ts:11](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/BaseEditor.ts#L11)

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

[src/types/BaseEditor.ts:10](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/BaseEditor.ts#L10)

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

[src/types/Table.ts:39](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Table.ts#L39)

___

### showRevision

▸ **showRevision**(`options`): `Promise`<`void`\>

显示版本侧边栏

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Table.ts:26](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Table.ts#L26)
