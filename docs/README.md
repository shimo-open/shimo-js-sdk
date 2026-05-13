shimo-js-sdk - v2.0.2

# shimo-js-sdk - v2.0.2

## Table of contents

### Type aliases

- [APIAdaptor](README.md#apiadaptor)
- [RequestContextType](README.md#requestcontexttype)
- [FileId](README.md#fileid)
- [UserId](README.md#userid)
- [DeviceMode](README.md#devicemode)
- [GenerateUrlHandler](README.md#generateurlhandler)
- [GenerateUrlInfo](README.md#generateurlinfo)
- [SharingSource](README.md#sharingsource)
- [EventCallback](README.md#eventcallback)
- [EmptyPageScene](README.md#emptypagescene)
- [FileOpenFailedReason](README.md#fileopenfailedreason)
- [TokenExpiredStrategy](README.md#tokenexpiredstrategy)

### Interfaces

- [RequestOptions](interfaces/RequestOptions.md)
- [RequestContext](interfaces/RequestContext.md)
- [FileInfo](interfaces/FileInfo.md)
- [SDKEventMap](interfaces/SDKEventMap.md)
- [SDKEventMessage](interfaces/SDKEventMessage.md)
- [ReadyStateEventPayload](interfaces/ReadyStateEventPayload.md)
- [DisableMentionCards](interfaces/DisableMentionCards.md)
- [ContainerRect](interfaces/ContainerRect.md)
- [LineInfo](interfaces/LineInfo.md)
- [MentionInfo](interfaces/MentionInfo.md)
- [MouseMovePayload](interfaces/MouseMovePayload.md)
- [PerformanceEntry](interfaces/PerformanceEntry.md)
- [ShowToastOptions](interfaces/ShowToastOptions.md)
- [Credentials](interfaces/Credentials.md)
- [HeaderBarsCommandDefinition](interfaces/HeaderBarsCommandDefinition.md)
- [HeaderBarsCommandState](interfaces/HeaderBarsCommandState.md)
- [HeaderBarsCommandRef](interfaces/HeaderBarsCommandRef.md)
- [HeaderBarsFacade](interfaces/HeaderBarsFacade.md)
- [ContainerMethods](interfaces/ContainerMethods.md)
- [Message](interfaces/Message.md)
- [MessageEventPayload](interfaces/MessageEventPayload.md)
- [ContainerMethodPayload](interfaces/ContainerMethodPayload.md)
- [ReadyStateEvent](interfaces/ReadyStateEvent.md)
- [SDKToastOptions](interfaces/SDKToastOptions.md)
- [LoadingOptions](interfaces/LoadingOptions.md)
- [OfficeSDKOptions](interfaces/OfficeSDKOptions.md)
- [ConnectOptions](interfaces/ConnectOptions.md)
- [BaseEventMap](interfaces/BaseEventMap.md)
- [BaseEditor](interfaces/BaseEditor.md)
- [EmptyPageActionOverride](interfaces/EmptyPageActionOverride.md)
- [EmptyPageContentOverride](interfaces/EmptyPageContentOverride.md)
- [EmptyPageOptions](interfaces/EmptyPageOptions.md)
- [NormalizedEmptyPageOptions](interfaces/NormalizedEmptyPageOptions.md)
- [EmptyPageShownPayload](interfaces/EmptyPageShownPayload.md)
- [EmptyPageActionPayload](interfaces/EmptyPageActionPayload.md)
- [EmptyPageHiddenPayload](interfaces/EmptyPageHiddenPayload.md)

### Enumerations

- [FileType](enums/FileType.md)
- [ReadyState](enums/ReadyState.md)
- [InvokeMethod](enums/InvokeMethod.md)
- [ContainerMethod](enums/ContainerMethod.md)
- [SpreadsheetSharingFrom](enums/SpreadsheetSharingFrom.md)
- [UrlSharingType](enums/UrlSharingType.md)
- [Event](enums/Event.md)

### Variables

- [FileTypeAlias](README.md#filetypealias)
- [SDKEvent](README.md#sdkevent)
- [MessageEvent](README.md#messageevent)
- [EDITOR\_RENDERED\_EVENT](README.md#editor_rendered_event)
- [START\_PARAMS\_FIELD](README.md#start_params_field)
- [ALL\_EMPTY\_PAGE\_SCENES](README.md#all_empty_page_scenes)

### Functions

- [convertFileType](README.md#convertfiletype)
- [isSDKEventMessage](README.md#issdkeventmessage)
- [connect](README.md#connect)
- [normalizeEmptyPageOptions](README.md#normalizeemptypageoptions)

### Classes

- [OfficeSDK](classes/OfficeSDK.md)

### Namespaces

- [Document](modules/Document.md)
- [DocumentPro](modules/DocumentPro.md)
- [Flowchart](modules/Flowchart.md)
- [Form](modules/Form.md)
- [Presentation](modules/Presentation.md)
- [Spreadsheet](modules/Spreadsheet.md)
- [Table](modules/Table.md)

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

node_modules/shimo-js-sdk-shared/dist/types.d.ts:225

___

### GenerateUrlHandler

Ƭ **GenerateUrlHandler**: (`fileId`: `string`, `info?`: [`GenerateUrlInfo`](README.md#generateurlinfo), `smParams?`: `Record`<`string`, `any`\>) => `string` \| `Promise`<`string`\>

#### Type declaration

▸ (`fileId`, `info?`, `smParams?`): `string` \| `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |
| `info?` | [`GenerateUrlInfo`](README.md#generateurlinfo) |
| `smParams?` | `Record`<`string`, `any`\> |

##### Returns

`string` \| `Promise`<`string`\>

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:226

___

### GenerateUrlInfo

Ƭ **GenerateUrlInfo**: { `sharingText?`: `string`  } & [`SharingSource`](README.md#sharingsource)<[`UrlSharingType`](enums/UrlSharingType.md)\>

用于生成 URL 的额外信息

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:242

___

### SharingSource

Ƭ **SharingSource**<`T`\>: `T` extends [`Spreadsheet`](enums/UrlSharingType.md#spreadsheet) ? { `sharingType?`: `T` ; `sharingFrom?`: [`SpreadsheetSharingFrom`](enums/SpreadsheetSharingFrom.md)  } : { `sharingType?`: `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UrlSharingType`](enums/UrlSharingType.md) |

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:248

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

[src/OfficeSDK.ts:1299](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1299)

___

### EmptyPageScene

Ƭ **EmptyPageScene**: ``"file-open-failed"`` \| ``"no-permission"`` \| ``"network-error"`` \| ``"token-expired"``

缺省页场景枚举，必须与 `lizard-service-iframe-sdk` 侧完全一致。

#### Defined in

[src/types/EmptyPage.ts:12](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L12)

___

### FileOpenFailedReason

Ƭ **FileOpenFailedReason**: ``"file-not-found"`` \| ``"file-deleted"`` \| ``"file-load-failed"`` \| ``"unknown"``

`file-open-failed` 下可细分的子原因，承载 HTTP 协议级差异；
保持 scene 枚举粒度稳定，细节通过 reason 下钻。

#### Defined in

[src/types/EmptyPage.ts:22](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L22)

___

### TokenExpiredStrategy

Ƭ **TokenExpiredStrategy**: ``"refresh-first"`` \| ``"show-immediately"``

#### Defined in

[src/types/EmptyPage.ts:28](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L28)

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

• **MessageEvent**: typeof [`InvokeMethod`](enums/InvokeMethod.md) = `InvokeMethod`

#### Defined in

[src/OfficeSDK.ts:123](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L123)

___

### EDITOR\_RENDERED\_EVENT

• **EDITOR\_RENDERED\_EVENT**: ``"editorRendered"``

iframe 内侧用来上报"编辑器已完成首屏渲染"的 channel 事件名。

与 `InvokeMethod.ReadyState` 的枚举值保持在同一命名空间，但不入 shared 包，
以免跨端版本耦合。iframe 侧约定写字符串即可。

#### Defined in

[src/OfficeSDK.ts:1271](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1271)

___

### START\_PARAMS\_FIELD

• **START\_PARAMS\_FIELD**: ``"smParams"``

#### Defined in

[src/index.ts:45](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/index.ts#L45)

___

### ALL\_EMPTY\_PAGE\_SCENES

• **ALL\_EMPTY\_PAGE\_SCENES**: [`EmptyPageScene`](README.md#emptypagescene)[]

完整的 scene 列表，用于作为默认值与合法性校验。

#### Defined in

[src/types/EmptyPage.ts:133](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L133)

## Functions

### convertFileType

▸ **convertFileType**(`value`): [`FileType`](enums/FileType.md)

根据传入值转换为 FileType 枚举值

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `number` |

#### Returns

[`FileType`](enums/FileType.md)

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

▸ **connect**(`options`): `Promise`<[`OfficeSDK`](classes/OfficeSDK.md)\>

初始化 SDK，返回 Promise，当 ReadState 变为 Ready 或 Failed 时，Promise 将被 resolve。
Promise resovled 不代表编辑器已经完整加载完毕，只代表 SDK 已经准备好了。
同时 Promise 一直 pending 也不代表编辑器加载失败，只代表无法通过 SDK 和编辑器交互。
比如受浏览器限制无法发出 postMessage() 时，Promise 将会一直 pending。

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ConnectOptions`](interfaces/ConnectOptions.md) |

#### Returns

`Promise`<[`OfficeSDK`](classes/OfficeSDK.md)\>

#### Defined in

[src/connect.ts:11](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/connect.ts#L11)

___

### normalizeEmptyPageOptions

▸ **normalizeEmptyPageOptions**(`input?`): [`NormalizedEmptyPageOptions`](interfaces/NormalizedEmptyPageOptions.md)

把宿主传入的 `emptyPage` 配置归一化成完整对象。

- 未传 / undefined：启用全部 scene，使用默认 tokenExpiredStrategy，不携带 overrides
- 传 true：等价于 `{ enabled: true }`
- 传 false：等价于 `{ enabled: false }`，其余字段仍填充默认以保证形状一致
- 传对象：按字段覆盖，未覆盖部分使用默认

#### Parameters

| Name | Type |
| :------ | :------ |
| `input?` | `boolean` \| [`EmptyPageOptions`](interfaces/EmptyPageOptions.md) |

#### Returns

[`NormalizedEmptyPageOptions`](interfaces/NormalizedEmptyPageOptions.md)

#### Defined in

[src/types/EmptyPage.ts:248](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L248)
