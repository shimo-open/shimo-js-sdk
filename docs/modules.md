[shimo-js-sdk](README.md) / Exports

# shimo-js-sdk

## Table of contents

### Namespaces

- [Document](modules/Document.md)
- [DocumentPro](modules/DocumentPro.md)
- [Presentation](modules/Presentation.md)
- [Spreadsheet](modules/Spreadsheet.md)

### Enumerations

- [Event](enums/Event.md)
- [FileType](enums/FileType.md)
- [MessageEvent](enums/MessageEvent.md)
- [ReadyState](enums/ReadyState.md)

### Classes

- [ShimoSDK](classes/ShimoSDK.md)

### Interfaces

- [ConnectOptions](interfaces/ConnectOptions.md)
- [Message](interfaces/Message.md)

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

[src/types/ShimoSDK.ts:117](https://github.com/shimohq/shimo-js-sdk/blob/e9f3299/src/types/ShimoSDK.ts#L117)

## Functions

### connect

▸ **connect**(`options`): `Promise`<[`ShimoSDK`](classes/ShimoSDK.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConnectOptions`](interfaces/ConnectOptions.md) |

#### Returns

`Promise`<[`ShimoSDK`](classes/ShimoSDK.md)\>

#### Defined in

[src/connect.ts:141](https://github.com/shimohq/shimo-js-sdk/blob/e9f3299/src/connect.ts#L141)
