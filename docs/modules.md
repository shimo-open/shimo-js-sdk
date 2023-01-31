[shimo-js-sdk](README.md) / Exports

# shimo-js-sdk

## Table of contents

### Namespaces

- [Document](modules/Document.md)
- [DocumentPro](modules/DocumentPro.md)
- [Form](modules/Form.md)
- [Presentation](modules/Presentation.md)
- [Spreadsheet](modules/Spreadsheet.md)
- [Table](modules/Table.md)

### Enumerations

- [ContainerMethod](enums/ContainerMethod.md)
- [Event](enums/Event.md)
- [FileType](enums/FileType.md)
- [InvokeMethod](enums/InvokeMethod.md)
- [ReadyState](enums/ReadyState.md)
- [UrlSharingType](enums/UrlSharingType.md)

### Classes

- [ShimoSDK](classes/ShimoSDK.md)

### Interfaces

- [BaseEditor](interfaces/BaseEditor.md)
- [BaseEventMap](interfaces/BaseEventMap.md)
- [ContainerMethodPayload](interfaces/ContainerMethodPayload.md)
- [ContainerMethods](interfaces/ContainerMethods.md)
- [ContainerRect](interfaces/ContainerRect.md)
- [DisableMentionCards](interfaces/DisableMentionCards.md)
- [FileInfo](interfaces/FileInfo.md)
- [GenerateUrlInfo](interfaces/GenerateUrlInfo.md)
- [LineInfo](interfaces/LineInfo.md)
- [MentionInfo](interfaces/MentionInfo.md)
- [Message](interfaces/Message.md)
- [MessageEventPayload](interfaces/MessageEventPayload.md)
- [MouseMovePayload](interfaces/MouseMovePayload.md)
- [PerformanceEntry](interfaces/PerformanceEntry.md)
- [ReadyStateEvent](interfaces/ReadyStateEvent.md)
- [ReadyStateEventPayload](interfaces/ReadyStateEventPayload.md)
- [RequestContext](interfaces/RequestContext.md)
- [RequestOptions](interfaces/RequestOptions.md)
- [ShimoSDKOptions](interfaces/ShimoSDKOptions.md)

### Type aliases

- [APIAdaptor](modules.md#apiadaptor)
- [ConnectOptions](modules.md#connectoptions)
- [DeviceMode](modules.md#devicemode)
- [EventCallback](modules.md#eventcallback)
- [FileId](modules.md#fileid)
- [GenerateUrlHandler](modules.md#generateurlhandler)
- [RequestContextType](modules.md#requestcontexttype)
- [UserId](modules.md#userid)

### Variables

- [FileTypeAlias](modules.md#filetypealias)
- [MessageEvent](modules.md#messageevent)
- [START\_PARAMS\_FIELD](modules.md#start_params_field)

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

### ConnectOptions

Ƭ **ConnectOptions**: [`ShimoSDKOptions`](interfaces/ShimoSDKOptions.md)

#### Defined in

[src/connect.ts:3](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/connect.ts#L3)

___

### DeviceMode

Ƭ **DeviceMode**: ``"pc"`` \| ``"mobile"`` \| ``"pad"``

使用什么设备类型模式，会直接影响功能和样式，不传值或空字符串则默认用 user-agent 自动判断。受版本限制，不是所有类型都支持。
- pc - 桌面模式
- mobile - 移动模式
- pad - 平板模式

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:284

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

[src/ShimoSDK.ts:776](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/ShimoSDK.ts#L776)

___

### FileId

Ƭ **FileId**: `string`

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:2

___

### GenerateUrlHandler

Ƭ **GenerateUrlHandler**: (`fileId`: `string`, `info?`: [`GenerateUrlInfo`](interfaces/GenerateUrlInfo.md)) => `string` \| `Promise`<`string`\>

#### Type declaration

▸ (`fileId`, `info?`): `string` \| `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |
| `info?` | [`GenerateUrlInfo`](interfaces/GenerateUrlInfo.md) |

##### Returns

`string` \| `Promise`<`string`\>

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:285

___

### RequestContextType

Ƭ **RequestContextType**: `boolean` \| `number` \| `string`

APIAdaptor 上下文允许的数据类型

#### Defined in

node_modules/shimo-js-sdk-shared/dist/APIAdaptor.d.ts:28

___

### UserId

Ƭ **UserId**: `string`

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:1

## Variables

### FileTypeAlias

• **FileTypeAlias**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `documentPro` | `string` |
| `form` | `string` |
| `presentation` | `string` |
| `spreadsheet` | `string` |
| `table` | `string` |

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:198

___

### MessageEvent

• **MessageEvent**: typeof [`InvokeMethod`](enums/InvokeMethod.md) = `InvokeMethod`

#### Defined in

[src/ShimoSDK.ts:49](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/ShimoSDK.ts#L49)

___

### START\_PARAMS\_FIELD

• **START\_PARAMS\_FIELD**: ``"smParams"``

#### Defined in

[src/index.ts:26](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/index.ts#L26)

## Functions

### connect

▸ **connect**(`options`): `Promise`<[`ShimoSDK`](classes/ShimoSDK.md)\>

初始化 SDK，返回 Promise，当 ReadState 变为 Ready 或 Failed 时，Promise 将被 resolve。
Promise resovled 不代表编辑器已经完整加载完毕，只代表 SDK 已经准备好了。
同时 Promise 一直 pending 也不代表编辑器加载失败，只代表无法通过 SDK 和编辑器交互。
比如受浏览器限制无法发出 postMessage() 时，Promise 将会一直 pending。

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ShimoSDKOptions`](interfaces/ShimoSDKOptions.md) |

#### Returns

`Promise`<[`ShimoSDK`](classes/ShimoSDK.md)\>

#### Defined in

[src/connect.ts:11](https://github.com/shimohq/shimo-js-sdk/blob/712f56a/src/connect.ts#L11)
