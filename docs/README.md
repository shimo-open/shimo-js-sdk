shimo-js-sdk - v1.2.17

# shimo-js-sdk - v1.2.17

## Table of contents

### Type aliases

- [APIAdaptor](/README.md#apiadaptor)
- [RequestContextType](/README.md#requestcontexttype)
- [FileId](/README.md#fileid)
- [UserId](/README.md#userid)
- [DeviceMode](/README.md#devicemode)
- [GenerateUrlHandler](/README.md#generateurlhandler)
- [GenerateUrlInfo](/README.md#generateurlinfo)
- [SharingSource](/README.md#sharingsource)
- [EventCallback](/README.md#eventcallback)

### Interfaces

- [RequestOptions](/interfaces/RequestOptions.md)
- [RequestContext](/interfaces/RequestContext.md)
- [FileInfo](/interfaces/FileInfo.md)
- [SDKEventMap](/interfaces/SDKEventMap.md)
- [SDKEventMessage](/interfaces/SDKEventMessage.md)
- [ReadyStateEventPayload](/interfaces/ReadyStateEventPayload.md)
- [DisableMentionCards](/interfaces/DisableMentionCards.md)
- [ContainerRect](/interfaces/ContainerRect.md)
- [LineInfo](/interfaces/LineInfo.md)
- [MentionInfo](/interfaces/MentionInfo.md)
- [MouseMovePayload](/interfaces/MouseMovePayload.md)
- [PerformanceEntry](/interfaces/PerformanceEntry.md)
- [ShowToastOptions](/interfaces/ShowToastOptions.md)
- [ContainerMethods](/interfaces/ContainerMethods.md)
- [Message](/interfaces/Message.md)
- [MessageEventPayload](/interfaces/MessageEventPayload.md)
- [ContainerMethodPayload](/interfaces/ContainerMethodPayload.md)
- [ReadyStateEvent](/interfaces/ReadyStateEvent.md)
- [ShimoSDKOptions](/interfaces/ShimoSDKOptions.md)
- [ConnectOptions](/interfaces/ConnectOptions.md)
- [BaseEventMap](/interfaces/BaseEventMap.md)
- [BaseEditor](/interfaces/BaseEditor.md)

### Enumerations

- [FileType](/enums/FileType.md)
- [ReadyState](/enums/ReadyState.md)
- [InvokeMethod](/enums/InvokeMethod.md)
- [ContainerMethod](/enums/ContainerMethod.md)
- [SpreadsheetSharingFrom](/enums/SpreadsheetSharingFrom.md)
- [UrlSharingType](/enums/UrlSharingType.md)
- [Event](/enums/Event.md)

### Variables

- [FileTypeAlias](/README.md#filetypealias)
- [SDKEvent](/README.md#sdkevent)
- [MessageEvent](/README.md#messageevent)
- [START\_PARAMS\_FIELD](/README.md#start_params_field)

### Functions

- [convertFileType](/README.md#convertfiletype)
- [isSDKEventMessage](/README.md#issdkeventmessage)
- [connect](/README.md#connect)

### Classes

- [ShimoSDK](/classes/ShimoSDK.md)

### Namespaces

- [Document](/modules/Document.md)
- [DocumentPro](/modules/DocumentPro.md)
- [Flowchart](/modules/Flowchart.md)
- [Form](/modules/Form.md)
- [Presentation](/modules/Presentation.md)
- [Spreadsheet](/modules/Spreadsheet.md)
- [Table](/modules/Table.md)

## Type aliases

### APIAdaptor

Ƭ **APIAdaptor**: (`requestOptions`: [`RequestOptions`](/interfaces/RequestOptions.md), `context?`: [`RequestContext`](/interfaces/RequestContext.md)) => [`RequestOptions`](/interfaces/RequestOptions.md)

#### Type declaration

▸ (`requestOptions`, `context?`): [`RequestOptions`](/interfaces/RequestOptions.md)

发出 XHR 请求前，会调用这个函数对请求参数进行处理，并以最终结果发起请求。因为会被 toString() 后 eval()，因此需要确保函数体内无外部依赖。

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestOptions` | [`RequestOptions`](/interfaces/RequestOptions.md) | 请求参数 |
| `context?` | [`RequestContext`](/interfaces/RequestContext.md) | 用于传递上下文信息的对象 |

##### Returns

[`RequestOptions`](/interfaces/RequestOptions.md)

#### Defined in

node_modules/shimo-js-sdk-shared/dist/APIAdaptor.d.ts:7

___

### RequestContextType

Ƭ **RequestContextType**: `boolean` \| `number` \| `string`

APIAdaptor 上下文允许的数据类型

#### Defined in

node_modules/shimo-js-sdk-shared/dist/APIAdaptor.d.ts:28

___

### FileId

Ƭ **FileId**: `string`

#### Defined in

node_modules/shimo-js-sdk-shared/dist/File.d.ts:1

___

### UserId

Ƭ **UserId**: `string`

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:2

___

### DeviceMode

Ƭ **DeviceMode**: ``"pc"`` \| ``"mobile"`` \| ``"pad"``

使用什么设备类型模式，会直接影响功能和样式，不传值或空字符串则默认用 user-agent 自动判断。受版本限制，不是所有类型都支持。
- pc - 桌面模式
- mobile - 移动模式
- pad - 平板模式

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:221

___

### GenerateUrlHandler

Ƭ **GenerateUrlHandler**: (`fileId`: `string`, `info?`: [`GenerateUrlInfo`](/README.md#generateurlinfo), `smParams?`: `Record`<`string`, `any`\>) => `string` \| `Promise`<`string`\>

#### Type declaration

▸ (`fileId`, `info?`, `smParams?`): `string` \| `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |
| `info?` | [`GenerateUrlInfo`](/README.md#generateurlinfo) |
| `smParams?` | `Record`<`string`, `any`\> |

##### Returns

`string` \| `Promise`<`string`\>

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:222

___

### GenerateUrlInfo

Ƭ **GenerateUrlInfo**: { `sharingText?`: `string`  } & [`SharingSource`](/README.md#sharingsource)<[`UrlSharingType`](/enums/UrlSharingType.md)\>

用于生成 URL 的额外信息

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:238

___

### SharingSource

Ƭ **SharingSource**<`T`\>: `T` extends [`Spreadsheet`](/enums/UrlSharingType.md#spreadsheet) ? { `sharingType?`: `T` ; `sharingFrom?`: [`SpreadsheetSharingFrom`](/enums/SpreadsheetSharingFrom.md)  } : { `sharingType?`: `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UrlSharingType`](/enums/UrlSharingType.md) |

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:244

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

[src/ShimoSDK.ts:1017](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L1017)

## Variables

### FileTypeAlias

• **FileTypeAlias**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `document` | `string` |
| `documentPro` | `string` |
| `spreadsheet` | `string` |
| `presentation` | `string` |
| `table` | `string` |
| `form` | `string` |
| `mindmap` | `string` |
| `board` | `string` |
| `flowchart` | `string` |

#### Defined in

node_modules/shimo-js-sdk-shared/dist/File.d.ts:47

___

### SDKEvent

• **SDKEvent**: `Readonly`<{ `ViewportResize`: ``"ViewportResize"`` ; `ReadyState`: ``"ReadyState"``  }\>

SDK 相关的事件，和编辑器无关

#### Defined in

node_modules/shimo-js-sdk-shared/dist/event.d.ts:6

___

### MessageEvent

• **MessageEvent**: typeof [`InvokeMethod`](/enums/InvokeMethod.md) = `InvokeMethod`

#### Defined in

[src/ShimoSDK.ts:57](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L57)

___

### START\_PARAMS\_FIELD

• **START\_PARAMS\_FIELD**: ``"smParams"``

#### Defined in

[src/index.ts:28](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/index.ts#L28)

## Functions

### convertFileType

▸ **convertFileType**(`value`): [`FileType`](/enums/FileType.md)

根据传入值转换为 FileType 枚举值

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |

#### Returns

[`FileType`](/enums/FileType.md)

#### Defined in

node_modules/shimo-js-sdk-shared/dist/File.d.ts:74

___

### isSDKEventMessage

▸ **isSDKEventMessage**(`input`): input is SDKEventMessage

判断是否是 SDKEvent 事件消息

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |

#### Returns

input is SDKEventMessage

#### Defined in

node_modules/shimo-js-sdk-shared/dist/event.d.ts:30

___

### connect

▸ **connect**(`options`): `Promise`<[`ShimoSDK`](/classes/ShimoSDK.md)\>

初始化 SDK，返回 Promise，当 ReadState 变为 Ready 或 Failed 时，Promise 将被 resolve。
Promise resovled 不代表编辑器已经完整加载完毕，只代表 SDK 已经准备好了。
同时 Promise 一直 pending 也不代表编辑器加载失败，只代表无法通过 SDK 和编辑器交互。
比如受浏览器限制无法发出 postMessage() 时，Promise 将会一直 pending。

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConnectOptions`](/interfaces/ConnectOptions.md) |

#### Returns

`Promise`<[`ShimoSDK`](/classes/ShimoSDK.md)\>

#### Defined in

[src/connect.ts:11](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/connect.ts#L11)
