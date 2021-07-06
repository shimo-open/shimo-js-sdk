[shimo-js-sdk](README.md) / Exports

# shimo-js-sdk

## Table of contents

### Namespaces

- [Document](modules/document.md)
- [DocumentPro](modules/documentpro.md)
- [Presentation](modules/presentation.md)
- [Spreadsheet](modules/spreadsheet.md)

### Enumerations

- [Event](enums/event.md)
- [FileType](enums/filetype.md)
- [MessageEvent](enums/messageevent.md)
- [ReadyState](enums/readystate.md)

### Classes

- [ShimoSDK](classes/shimosdk.md)

### Interfaces

- [ConnectOptions](interfaces/connectoptions.md)
- [Message](interfaces/message.md)

### Type aliases

- [EventCallback](modules.md#eventcallback)

### Functions

- [connect](modules.md#connect)

## Type aliases

### EventCallback

Ƭ **EventCallback**: (...`args`: `any`[]) => `any`

#### Type declaration

▸ (...`args`): `any`

事件回调函数

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

src/types/ShimoSDK.ts:117

## Functions

### connect

▸ **connect**(`options`): `Promise`<[`ShimoSDK`](classes/shimosdk.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConnectOptions`](interfaces/connectoptions.md) |

#### Returns

`Promise`<[`ShimoSDK`](classes/shimosdk.md)\>

#### Defined in

src/connect.ts:96
