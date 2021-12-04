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

[src/types/Table.ts:34](https://github.com/shimohq/shimo-js-sdk/blob/a9f5498/src/types/Table.ts#L34)

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

[src/types/Table.ts:30](https://github.com/shimohq/shimo-js-sdk/blob/a9f5498/src/types/Table.ts#L30)

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

[src/types/BaseEditor.ts:26](https://github.com/shimohq/shimo-js-sdk/blob/a9f5498/src/types/BaseEditor.ts#L26)

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

[src/types/BaseEditor.ts:25](https://github.com/shimohq/shimo-js-sdk/blob/a9f5498/src/types/BaseEditor.ts#L25)

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

[src/types/Table.ts:26](https://github.com/shimohq/shimo-js-sdk/blob/a9f5498/src/types/Table.ts#L26)
