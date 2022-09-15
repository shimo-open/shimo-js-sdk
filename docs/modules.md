[shimo-js-sdk](README.md) / Exports

# shimo-js-sdk

## Table of contents

### Namespaces

- [Document](modules/Document.md)
- [DocumentPro](modules/DocumentPro.md)
- [Presentation](modules/Presentation.md)
- [Spreadsheet](modules/Spreadsheet.md)
- [Table](modules/Table.md)

### Enumerations

- [Event](enums/Event.md)
- [FileType](enums/FileType.md)
- [MessageEvent](enums/MessageEvent.md)
- [ReadyState](enums/ReadyState.md)

### Classes

- [ShimoSDK](classes/ShimoSDK.md)

### Interfaces

- [BaseEventMap](interfaces/BaseEventMap.md)
- [ConnectOptions](interfaces/ConnectOptions.md)
- [Message](interfaces/Message.md)
- [PerformanceEntry](interfaces/PerformanceEntry.md)
- [RequestContext](interfaces/RequestContext.md)
- [RequestOptions](interfaces/RequestOptions.md)

### Type aliases

- [APIAdaptor](modules.md#apiadaptor)
- [EventCallback](modules.md#eventcallback)
- [RequestContextType](modules.md#requestcontexttype)

### Functions

- [connect](modules.md#connect)

## Type aliases

### APIAdaptor

Ƭ **APIAdaptor**: (`requestOptions`: [`RequestOptions`](interfaces/RequestOptions.md), `context?`: [`RequestContext`](interfaces/RequestContext.md)) => [`RequestOptions`](interfaces/RequestOptions.md)

#### Type declaration

▸ (`requestOptions`, `context?`): [`RequestOptions`](interfaces/RequestOptions.md)

发出 XHR 请求前，会调用这个函数对请求参数进行处理，并以最终结果发起请求。因为会被 toString() 后 eval()，因此需要确保函数体内无外部依赖。

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestOptions` | [`RequestOptions`](interfaces/RequestOptions.md) | 请求参数 |
| `context?` | [`RequestContext`](interfaces/RequestContext.md) | 用于传递上下文信息的对象 |

##### Returns

[`RequestOptions`](interfaces/RequestOptions.md)

#### Defined in

node_modules/shimo-js-sdk-shared/dist/APIAdaptor.d.ts:7

___

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

[src/types/ShimoSDK.ts:146](https://github.com/shimohq/shimo-js-sdk/blob/ef32014/src/types/ShimoSDK.ts#L146)

___

### RequestContextType

Ƭ **RequestContextType**: `boolean` \| `number` \| `string`

APIAdaptor 上下文允许的数据类型

#### Defined in

node_modules/shimo-js-sdk-shared/dist/APIAdaptor.d.ts:28

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

[src/connect.ts:227](https://github.com/shimohq/shimo-js-sdk/blob/ef32014/src/connect.ts#L227)
