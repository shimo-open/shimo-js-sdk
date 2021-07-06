[shimo-js-sdk](../README.md) / [Exports](../modules.md) / ShimoSDK

# Class: ShimoSDK

## Hierarchy

- `TinyEmitter`

  ↳ **`ShimoSDK`**

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](shimosdk.md#constructor)

### Properties

- [disconnect](shimosdk.md#disconnect)
- [document](shimosdk.md#document)
- [documentPro](shimosdk.md#documentpro)
- [fileType](shimosdk.md#filetype)
- [presentation](shimosdk.md#presentation)
- [setSignature](shimosdk.md#setsignature)
- [setToken](shimosdk.md#settoken)
- [spreadsheet](shimosdk.md#spreadsheet)

### Methods

- [emit](shimosdk.md#emit)
- [off](shimosdk.md#off)
- [on](shimosdk.md#on)
- [once](shimosdk.md#once)

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

src/types/ShimoSDK.ts:16

___

### document

• `Optional` **document**: [`Editor`](../interfaces/document.editor.md)

轻文档编辑器实例

#### Defined in

src/types/ShimoSDK.ts:26

___

### documentPro

• `Optional` **documentPro**: [`Editor`](../interfaces/documentpro.editor.md)

传统文档编辑器实例

#### Defined in

src/types/ShimoSDK.ts:21

___

### fileType

• **fileType**: [`FileType`](../enums/filetype.md)

石墨文件的类型

#### Defined in

src/types/ShimoSDK.ts:11

___

### presentation

• `Optional` **presentation**: [`Editor`](../interfaces/presentation.editor.md)

专业幻灯片编辑器实例

#### Defined in

src/types/ShimoSDK.ts:36

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

src/types/ShimoSDK.ts:41

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

src/types/ShimoSDK.ts:46

___

### spreadsheet

• `Optional` **spreadsheet**: [`Editor`](../interfaces/spreadsheet.editor.md)

表格编辑器实例

#### Defined in

src/types/ShimoSDK.ts:31

## Methods

### emit

▸ **emit**(`event`, ...`args`): [`ShimoSDK`](shimosdk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `...args` | `any`[] |

#### Returns

[`ShimoSDK`](shimosdk.md)

#### Inherited from

TinyEmitter.emit

#### Defined in

node_modules/tiny-emitter/index.d.ts:4

___

### off

▸ **off**(`event`, `callback?`): [`ShimoSDK`](shimosdk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback?` | `Function` |

#### Returns

[`ShimoSDK`](shimosdk.md)

#### Inherited from

TinyEmitter.off

#### Defined in

node_modules/tiny-emitter/index.d.ts:5

___

### on

▸ **on**(`event`, `callback`, `ctx?`): [`ShimoSDK`](shimosdk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Function` |
| `ctx?` | `any` |

#### Returns

[`ShimoSDK`](shimosdk.md)

#### Inherited from

TinyEmitter.on

#### Defined in

node_modules/tiny-emitter/index.d.ts:2

___

### once

▸ **once**(`event`, `callback`, `ctx?`): [`ShimoSDK`](shimosdk.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Function` |
| `ctx?` | `any` |

#### Returns

[`ShimoSDK`](shimosdk.md)

#### Inherited from

TinyEmitter.once

#### Defined in

node_modules/tiny-emitter/index.d.ts:3
