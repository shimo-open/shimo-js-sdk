[shimo-js-sdk](/README.md) / [Exports](/modules.md) / [Presentation](/modules/Presentation.md) / Editor

# Interface: Editor

[Presentation](/modules/Presentation.md).Editor

## Hierarchy

- [`BaseEditor`](/interfaces/BaseEditor.md)<[`EventMap`](/interfaces/Presentation.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [createRevision](/interfaces/Presentation.Editor.md#createrevision)
- [endDemonstration](/interfaces/Presentation.Editor.md#enddemonstration)
- [export](/interfaces/Presentation.Editor.md#export)
- [hideHistory](/interfaces/Presentation.Editor.md#hidehistory)
- [off](/interfaces/Presentation.Editor.md#off)
- [on](/interfaces/Presentation.Editor.md#on)
- [print](/interfaces/Presentation.Editor.md#print)
- [setTitle](/interfaces/Presentation.Editor.md#settitle)
- [showHistory](/interfaces/Presentation.Editor.md#showhistory)
- [startDemonstration](/interfaces/Presentation.Editor.md#startdemonstration)

## Methods

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

[src/types/Presentation.ts:25](https://github.com/byte9527/shimo-js-sdk/blob/2387f1f/src/types/Presentation.ts#L25)

___

### endDemonstration

▸ **endDemonstration**(`options?`): `Promise`<`void`\>

结束本地演示

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:23](https://github.com/byte9527/shimo-js-sdk/blob/2387f1f/src/types/Presentation.ts#L23)

___

### export

▸ **export**(`type`): `Promise`<`void`\>

导出

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"image"`` \| ``"imagePdf"`` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:27](https://github.com/byte9527/shimo-js-sdk/blob/2387f1f/src/types/Presentation.ts#L27)

___

### hideHistory

▸ **hideHistory**(`options?`): `Promise`<`void`\>

隐藏历史

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:19](https://github.com/byte9527/shimo-js-sdk/blob/2387f1f/src/types/Presentation.ts#L19)

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

[src/types/BaseEditor.ts:42](https://github.com/byte9527/shimo-js-sdk/blob/2387f1f/src/types/BaseEditor.ts#L42)

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

[BaseEditor](/interfaces/BaseEditor.md).[on](/interfaces/BaseEditor.md#on)

#### Defined in

[src/types/BaseEditor.ts:37](https://github.com/byte9527/shimo-js-sdk/blob/2387f1f/src/types/BaseEditor.ts#L37)

___

### print

▸ **print**(`options?`): `Promise`<`void`\>

打印

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:29](https://github.com/byte9527/shimo-js-sdk/blob/2387f1f/src/types/Presentation.ts#L29)

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

[src/types/BaseEditor.ts:47](https://github.com/byte9527/shimo-js-sdk/blob/2387f1f/src/types/BaseEditor.ts#L47)

___

### showHistory

▸ **showHistory**(`options?`): `Promise`<`void`\>

显示历史

**`since`** 22.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:17](https://github.com/byte9527/shimo-js-sdk/blob/2387f1f/src/types/Presentation.ts#L17)

___

### startDemonstration

▸ **startDemonstration**(`options?`): `Promise`<`void`\>

开始本地演示

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:21](https://github.com/byte9527/shimo-js-sdk/blob/2387f1f/src/types/Presentation.ts#L21)
