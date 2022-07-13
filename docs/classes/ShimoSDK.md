[shimo-js-sdk](../README.md) / [Exports](../modules.md) / ShimoSDK

# Class: ShimoSDK

## Hierarchy

- `TinyEmitter`

  ↳ **`ShimoSDK`**

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ShimoSDK.md#constructor)

### Properties

- [disconnect](ShimoSDK.md#disconnect)
- [document](ShimoSDK.md#document)
- [documentPro](ShimoSDK.md#documentpro)
- [element](ShimoSDK.md#element)
- [fileType](ShimoSDK.md#filetype)
- [getPerformanceEntries](ShimoSDK.md#getperformanceentries)
- [presentation](ShimoSDK.md#presentation)
- [setSignature](ShimoSDK.md#setsignature)
- [setToken](ShimoSDK.md#settoken)
- [spreadsheet](ShimoSDK.md#spreadsheet)
- [table](ShimoSDK.md#table)

### Methods

- [emit](ShimoSDK.md#emit)
- [off](ShimoSDK.md#off)
- [on](ShimoSDK.md#on)
- [once](ShimoSDK.md#once)

## Constructors

### constructor

• **new ShimoSDK**()

#### Inherited from

TinyEmitter.constructor

## Properties

### disconnect

• **disconnect**: () => `void`

#### Type declaration

▸ (): `void`

销毁 iframe 并释放资源

##### Returns

`void`

#### Defined in

[src/types/ShimoSDK.ts:22](https://github.com/shimohq/shimo-js-sdk/blob/24329bf/src/types/ShimoSDK.ts#L22)

___

### document

• `Optional` **document**: [`Editor`](../interfaces/Document.Editor.md)

轻文档编辑器实例

#### Defined in

[src/types/ShimoSDK.ts:32](https://github.com/shimohq/shimo-js-sdk/blob/24329bf/src/types/ShimoSDK.ts#L32)

___

### documentPro

• `Optional` **documentPro**: [`Editor`](../interfaces/DocumentPro.Editor.md)

传统文档编辑器实例

#### Defined in

[src/types/ShimoSDK.ts:27](https://github.com/shimohq/shimo-js-sdk/blob/24329bf/src/types/ShimoSDK.ts#L27)

___

### element

• **element**: `HTMLIFrameElement`

iframe 元素

#### Defined in

[src/types/ShimoSDK.ts:17](https://github.com/shimohq/shimo-js-sdk/blob/24329bf/src/types/ShimoSDK.ts#L17)

___

### fileType

• **fileType**: [`FileType`](../enums/FileType.md)

石墨文件的类型

#### Defined in

[src/types/ShimoSDK.ts:12](https://github.com/shimohq/shimo-js-sdk/blob/24329bf/src/types/ShimoSDK.ts#L12)

___

### getPerformanceEntries

• **getPerformanceEntries**: () => `Promise`<[`PerformanceEntry`](../interfaces/PerformanceEntry.md)[]\>

#### Type declaration

▸ (): `Promise`<[`PerformanceEntry`](../interfaces/PerformanceEntry.md)[]\>

获取性能信息片段列表，由于性能标记是分段的、异步的，因此每次调用时获取的列表有可能不一致

##### Returns

`Promise`<[`PerformanceEntry`](../interfaces/PerformanceEntry.md)[]\>

#### Defined in

[src/types/ShimoSDK.ts:62](https://github.com/shimohq/shimo-js-sdk/blob/24329bf/src/types/ShimoSDK.ts#L62)

___

### presentation

• `Optional` **presentation**: [`Editor`](../interfaces/Presentation.Editor.md)

专业幻灯片编辑器实例

#### Defined in

[src/types/ShimoSDK.ts:42](https://github.com/shimohq/shimo-js-sdk/blob/24329bf/src/types/ShimoSDK.ts#L42)

___

### setSignature

• **setSignature**: (`signature`: `string`) => `void`

#### Type declaration

▸ (`signature`): `void`

设置石墨用的鉴权签名

##### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |

##### Returns

`void`

#### Defined in

[src/types/ShimoSDK.ts:52](https://github.com/shimohq/shimo-js-sdk/blob/24329bf/src/types/ShimoSDK.ts#L52)

___

### setToken

• **setToken**: (`token`: `string`) => `void`

#### Type declaration

▸ (`token`): `void`

设置您系统的鉴权 token

##### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

##### Returns

`void`

#### Defined in

[src/types/ShimoSDK.ts:57](https://github.com/shimohq/shimo-js-sdk/blob/24329bf/src/types/ShimoSDK.ts#L57)

___

### spreadsheet

• `Optional` **spreadsheet**: [`Editor`](../interfaces/Spreadsheet.Editor.md)

表格编辑器实例

#### Defined in

[src/types/ShimoSDK.ts:37](https://github.com/shimohq/shimo-js-sdk/blob/24329bf/src/types/ShimoSDK.ts#L37)

___

### table

• `Optional` **table**: [`Editor`](../interfaces/Table.Editor.md)

应用表格编辑器实例

#### Defined in

[src/types/ShimoSDK.ts:47](https://github.com/shimohq/shimo-js-sdk/blob/24329bf/src/types/ShimoSDK.ts#L47)

## Methods

### emit

▸ **emit**(`event`, ...`args`): [`ShimoSDK`](ShimoSDK.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `...args` | `any`[] |

#### Returns

[`ShimoSDK`](ShimoSDK.md)

#### Inherited from

TinyEmitter.emit

#### Defined in

node_modules/tiny-emitter/index.d.ts:4

___

### off

▸ **off**(`event`, `callback?`): [`ShimoSDK`](ShimoSDK.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback?` | `Function` |

#### Returns

[`ShimoSDK`](ShimoSDK.md)

#### Inherited from

TinyEmitter.off

#### Defined in

node_modules/tiny-emitter/index.d.ts:5

___

### on

▸ **on**(`event`, `callback`, `ctx?`): [`ShimoSDK`](ShimoSDK.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Function` |
| `ctx?` | `any` |

#### Returns

[`ShimoSDK`](ShimoSDK.md)

#### Inherited from

TinyEmitter.on

#### Defined in

node_modules/tiny-emitter/index.d.ts:2

___

### once

▸ **once**(`event`, `callback`, `ctx?`): [`ShimoSDK`](ShimoSDK.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Function` |
| `ctx?` | `any` |

#### Returns

[`ShimoSDK`](ShimoSDK.md)

#### Inherited from

TinyEmitter.once

#### Defined in

node_modules/tiny-emitter/index.d.ts:3
