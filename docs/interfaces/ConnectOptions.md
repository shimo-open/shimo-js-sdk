[shimo-js-sdk](../README.md) / [Exports](../modules.md) / ConnectOptions

# Interface: ConnectOptions

## Hierarchy

- [`ShimoSDKOptions`](ShimoSDKOptions.md)

  ↳ **`ConnectOptions`**

## Table of contents

### Properties

- [allowPolicy](ConnectOptions.md#allowpolicy)
- [apiAdaptor](ConnectOptions.md#apiadaptor)
- [apiAdaptorContext](ConnectOptions.md#apiadaptorcontext)
- [container](ConnectOptions.md#container)
- [debug](ConnectOptions.md#debug)
- [deviceMode](ConnectOptions.md#devicemode)
- [disableMentionCards](ConnectOptions.md#disablementioncards)
- [disableSignatureComponent](ConnectOptions.md#disablesignaturecomponent)
- [endpoint](ConnectOptions.md#endpoint)
- [fileId](ConnectOptions.md#fileid)
- [generateUrl](ConnectOptions.md#generateurl)
- [lang](ConnectOptions.md#lang)
- [messageExpires](ConnectOptions.md#messageexpires)
- [params](ConnectOptions.md#params)
- [plugins](ConnectOptions.md#plugins)
- [showLoadingEffect](ConnectOptions.md#showloadingeffect)
- [signature](ConnectOptions.md#signature)
- [smParams](ConnectOptions.md#smparams)
- [targetOrigin](ConnectOptions.md#targetorigin)
- [token](ConnectOptions.md#token)

### Methods

- [getFileInfoFromUrl](ConnectOptions.md#getfileinfofromurl)
- [mentionClickHandlerForMobile](ConnectOptions.md#mentionclickhandlerformobile)
- [openLink](ConnectOptions.md#openlink)

## Properties

### allowPolicy

• `Optional` **allowPolicy**: `string`

用于控制 iframe feature policy (https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Feature-Policy) 。
会覆盖默认的 policy，因此使用时需要注意把需要的 policy 写完整。

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[allowPolicy](ShimoSDKOptions.md#allowpolicy)

#### Defined in

[src/ShimoSDK.ts:908](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L908)

___

### apiAdaptor

• `Optional` **apiAdaptor**: [`APIAdaptor`](../modules.md#apiadaptor)

用于在编辑器发起 API 请求时，对请求参数进行修改的函数。详细用法见文档。

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[apiAdaptor](ShimoSDKOptions.md#apiadaptor)

#### Defined in

[src/ShimoSDK.ts:944](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L944)

___

### apiAdaptorContext

• `Optional` **apiAdaptorContext**: [`RequestContext`](RequestContext.md)

用于在编辑器发起 API 请求时，对请求参数进行修改的函数时传入的上下文数据。

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[apiAdaptorContext](ShimoSDKOptions.md#apiadaptorcontext)

#### Defined in

[src/ShimoSDK.ts:949](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L949)

___

### container

• **container**: `HTMLElement`

iframe 挂载的目标容器

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[container](ShimoSDKOptions.md#container)

#### Defined in

[src/ShimoSDK.ts:866](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L866)

___

### debug

• `Optional` **debug**: `boolean`

是否开启调试模式，true 会通过 console 打印一些信息

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[debug](ShimoSDKOptions.md#debug)

#### Defined in

[src/ShimoSDK.ts:913](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L913)

___

### deviceMode

• `Optional` **deviceMode**: [`DeviceMode`](../modules.md#devicemode)

使用什么设备类型模式，会直接影响功能和样式，不传值或空字符串则默认用 user-agent 自动判断。受版本限制，不是所有类型都支持。

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[deviceMode](ShimoSDKOptions.md#devicemode)

#### Defined in

[src/ShimoSDK.ts:929](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L929)

___

### disableMentionCards

• `Optional` **disableMentionCards**: [`DisableMentionCards`](DisableMentionCards.md)

是否禁用提及的浮动卡片组件

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[disableMentionCards](ShimoSDKOptions.md#disablementioncards)

#### Defined in

[src/ShimoSDK.ts:902](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L902)

___

### disableSignatureComponent

• `Optional` **disableSignatureComponent**: `boolean`

是否禁用默认的签名组件，以支持自定义签名组件。受版本限制，部分版本的特定类型文档才支持。

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[disableSignatureComponent](ShimoSDKOptions.md#disablesignaturecomponent)

#### Defined in

[src/ShimoSDK.ts:934](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L934)

___

### endpoint

• **endpoint**: `string`

石墨 SDK 服务器地址

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[endpoint](ShimoSDKOptions.md#endpoint)

#### Defined in

[src/ShimoSDK.ts:851](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L851)

___

### fileId

• **fileId**: `string`

您要打开的文档 ID

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[fileId](ShimoSDKOptions.md#fileid)

#### Defined in

[src/ShimoSDK.ts:856](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L856)

___

### generateUrl

• `Optional` **generateUrl**: [`GenerateUrlHandler`](../modules.md#generateurlhandler)

生成插入到石墨文档中的链接，用于处理 @ 文件等功能需要插入的链接

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[generateUrl](ShimoSDKOptions.md#generateurl)

#### Defined in

[src/ShimoSDK.ts:768](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L768)

___

### lang

• `Optional` **lang**: ``"zh-CN"`` \| ``"en"`` \| ``"ja"``

指定石墨 SDK 编辑器界面语言，添加到 iframe URLSearchParams 的参数列表。
若未指定，则 iframe 使用服务器设置的默认语言。

目前支持的语言取值：
1. zh-CN（简体中文）
2. en（英文）
3. ja（日文）

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[lang](ShimoSDKOptions.md#lang)

#### Defined in

[src/ShimoSDK.ts:897](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L897)

___

### messageExpires

• `Optional` **messageExpires**: `number`

用于判断通信消息过期时间，过期后的消息会被抛弃，默认 5 分钟。

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[messageExpires](ShimoSDKOptions.md#messageexpires)

#### Defined in

[src/ShimoSDK.ts:954](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L954)

___

### params

• `Optional` **params**: `Object`

添加到 iframe URLSearchParams 的参数列表

#### Index signature

▪ [key: `string`]: `string`

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[params](ShimoSDKOptions.md#params)

#### Defined in

[src/ShimoSDK.ts:876](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L876)

___

### plugins

• `Optional` **plugins**: [`PluginOptions`](Spreadsheet.PluginOptions.md) \| [`PluginOptions`](Table.PluginOptions.md)

编辑器插件配置，不是所有类型的套件都支持，以套件是否提供 PluginOptions 为准

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[plugins](ShimoSDKOptions.md#plugins)

#### Defined in

[src/ShimoSDK.ts:918](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L918)

___

### showLoadingEffect

• `Optional` **showLoadingEffect**: `boolean`

是否显示内置的加载动画，只在静态资源加载到编辑器渲染这个阶段显示

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[showLoadingEffect](ShimoSDKOptions.md#showloadingeffect)

#### Defined in

[src/ShimoSDK.ts:939](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L939)

___

### signature

• **signature**: `string`

用于石墨 SDK 鉴权用的签名

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[signature](ShimoSDKOptions.md#signature)

#### Defined in

[src/ShimoSDK.ts:861](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L861)

___

### smParams

• `Optional` **smParams**: `string` \| `Record`<`string`, `unknown`\> \| (`string` \| `Record`<`string`, `unknown`\>)[]

石墨 SDK URL 参数 url?smParams={params}，用于传递石墨 SDK 内部需要的参数。

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[smParams](ShimoSDKOptions.md#smparams)

#### Defined in

[src/ShimoSDK.ts:883](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L883)

___

### targetOrigin

• `Optional` **targetOrigin**: `string`

iframe postMessage 的目标 origin，默认是当前页面的 location.origin。

**`deprecated`**

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[targetOrigin](ShimoSDKOptions.md#targetorigin)

#### Defined in

[src/ShimoSDK.ts:924](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L924)

___

### token

• **token**: `string`

用于您系统鉴权使用的 token

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[token](ShimoSDKOptions.md#token)

#### Defined in

[src/ShimoSDK.ts:871](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L871)

## Methods

### getFileInfoFromUrl

▸ `Optional` **getFileInfoFromUrl**(`url`): `Promise`<`undefined` \| { `fileId`: `string`  }\>

用于从客户业务 URL 中获取对应的文件 ID，供编辑器使用。

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`undefined` \| { `fileId`: `string`  }\>

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[getFileInfoFromUrl](ShimoSDKOptions.md#getfileinfofromurl)

#### Defined in

[src/ShimoSDK.ts:780](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L780)

___

### mentionClickHandlerForMobile

▸ `Optional` **mentionClickHandlerForMobile**(`payload`): `void`

用于移动端处理 @ 点击事件

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`MouseMovePayload`](MouseMovePayload.md) |

#### Returns

`void`

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[mentionClickHandlerForMobile](ShimoSDKOptions.md#mentionclickhandlerformobile)

#### Defined in

[src/ShimoSDK.ts:773](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L773)

___

### openLink

▸ `Optional` **openLink**(`url`, `target?`): `void`

处理石墨文档内点击链接事件

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `target?` | `string` |

#### Returns

`void`

#### Inherited from

[ShimoSDKOptions](ShimoSDKOptions.md).[openLink](ShimoSDKOptions.md#openlink)

#### Defined in

[src/ShimoSDK.ts:753](https://github.com/shimohq/shimo-js-sdk/blob/158d938/src/ShimoSDK.ts#L753)
