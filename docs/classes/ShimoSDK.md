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
- [fileType](ShimoSDK.md#filetype)
- [presentation](ShimoSDK.md#presentation)
- [setSignature](ShimoSDK.md#setsignature)
- [setToken](ShimoSDK.md#settoken)
- [spreadsheet](ShimoSDK.md#spreadsheet)

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

销毁 iframe 并释放资源

#### Type declaration

▸ (): `void`

销毁 iframe 并释放资源

##### Returns

`void`

#### Defined in

[src/types/ShimoSDK.ts:16](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/ShimoSDK.ts#L16)

___

### document

• `Optional` **document**: [`Editor`](../interfaces/Document.Editor.md)

轻文档编辑器实例

#### Defined in

[src/types/ShimoSDK.ts:26](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/ShimoSDK.ts#L26)

___

### documentPro

• `Optional` **documentPro**: [`Editor`](../interfaces/DocumentPro.Editor.md)

传统文档编辑器实例

#### Defined in

[src/types/ShimoSDK.ts:21](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/ShimoSDK.ts#L21)

___

### fileType

• **fileType**: [`FileType`](../enums/FileType.md)

石墨文件的类型

#### Defined in

[src/types/ShimoSDK.ts:11](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/ShimoSDK.ts#L11)

___

### presentation

• `Optional` **presentation**: [`Editor`](../interfaces/Presentation.Editor.md)

专业幻灯片编辑器实例

#### Defined in

[src/types/ShimoSDK.ts:36](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/ShimoSDK.ts#L36)

___

### setSignature

• **setSignature**: (`signature`: `string`) => `void`

设置石墨用的鉴权签名

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

[src/types/ShimoSDK.ts:41](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/ShimoSDK.ts#L41)

___

### setToken

• **setToken**: (`token`: `string`) => `void`

设置您系统的鉴权 token

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

[src/types/ShimoSDK.ts:46](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/ShimoSDK.ts#L46)

___

### spreadsheet

• `Optional` **spreadsheet**: [`Editor`](../interfaces/Spreadsheet.Editor.md)

表格编辑器实例

#### Defined in

[src/types/ShimoSDK.ts:31](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/types/ShimoSDK.ts#L31)

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
