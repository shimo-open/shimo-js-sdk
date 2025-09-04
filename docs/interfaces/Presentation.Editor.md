[shimo-js-sdk - v1.2.12](/README.md) / [Presentation](/modules/Presentation.md) / Editor

# Interface: Editor

[Presentation](/modules/Presentation.md).Editor

## Hierarchy

- [`BaseEditor`](/interfaces/BaseEditor.md)<[`EventMap`](/interfaces/Presentation.EventMap.md)\>

  ↳ **`Editor`**

## Table of contents

### Methods

- [on](/interfaces/Presentation.Editor.md#on)
- [off](/interfaces/Presentation.Editor.md#off)
- [setTitle](/interfaces/Presentation.Editor.md#settitle)
- [showHistory](/interfaces/Presentation.Editor.md#showhistory)
- [hideHistory](/interfaces/Presentation.Editor.md#hidehistory)
- [startDemonstration](/interfaces/Presentation.Editor.md#startdemonstration)
- [endDemonstration](/interfaces/Presentation.Editor.md#enddemonstration)
- [createRevision](/interfaces/Presentation.Editor.md#createrevision)
- [export](/interfaces/Presentation.Editor.md#export)
- [print](/interfaces/Presentation.Editor.md#print)

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

[src/types/BaseEditor.ts:37](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L37)

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

[src/types/BaseEditor.ts:42](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L42)

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

[src/types/BaseEditor.ts:47](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L47)

___

### showHistory

▸ **showHistory**(): `Promise`<`void`\>

显示历史

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:25](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/Presentation.ts#L25)

___

### hideHistory

▸ **hideHistory**(): `Promise`<`void`\>

隐藏历史

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:29](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/Presentation.ts#L29)

___

### startDemonstration

▸ **startDemonstration**(): `Promise`<`void`\>

开始本地演示

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:33](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/Presentation.ts#L33)

___

### endDemonstration

▸ **endDemonstration**(): `Promise`<`void`\>

结束本地演示

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:37](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/Presentation.ts#L37)

___

### createRevision

▸ **createRevision**(): `Promise`<`void`\>

创建版本

**`since`** co-1.5

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:42](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/Presentation.ts#L42)

___

### export

▸ **export**(`type`): `Promise`<`void`\>

导出

**`since`** co-1.5

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | ``"image"`` \| ``"imagePdf"`` | image：导出图片，imagePdf: 导出pdf |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:48](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/Presentation.ts#L48)

___

### print

▸ **print**(): `Promise`<`void`\>

打印

**`since`** co-1.5

#### Returns

`Promise`<`void`\>

#### Defined in

[src/types/Presentation.ts:53](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/Presentation.ts#L53)
