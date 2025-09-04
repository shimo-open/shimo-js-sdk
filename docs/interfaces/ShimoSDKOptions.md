[shimo-js-sdk - v1.2.12](/README.md) / ShimoSDKOptions

# Interface: ShimoSDKOptions

ShimoSDK 初始化参数

## Hierarchy

- `Omit`<[`ContainerMethods`](/interfaces/ContainerMethods.md), ``"getContainerRect"``\>

  ↳ **`ShimoSDKOptions`**

  ↳↳ [`ConnectOptions`](/interfaces/ConnectOptions.md)

## Table of contents

### Methods

- [openLink](/interfaces/ShimoSDKOptions.md#openlink)
- [mentionClickHandlerForMobile](/interfaces/ShimoSDKOptions.md#mentionclickhandlerformobile)
- [getFileInfoFromUrl](/interfaces/ShimoSDKOptions.md#getfileinfofromurl)
- [showToast](/interfaces/ShimoSDKOptions.md#showtoast)
- [handleCustomTask](/interfaces/ShimoSDKOptions.md#handlecustomtask)

### Properties

- [generateUrl](/interfaces/ShimoSDKOptions.md#generateurl)
- [endpoint](/interfaces/ShimoSDKOptions.md#endpoint)
- [fileId](/interfaces/ShimoSDKOptions.md#fileid)
- [signature](/interfaces/ShimoSDKOptions.md#signature)
- [container](/interfaces/ShimoSDKOptions.md#container)
- [token](/interfaces/ShimoSDKOptions.md#token)
- [params](/interfaces/ShimoSDKOptions.md#params)
- [smParams](/interfaces/ShimoSDKOptions.md#smparams)
- [lang](/interfaces/ShimoSDKOptions.md#lang)
- [disableMentionCards](/interfaces/ShimoSDKOptions.md#disablementioncards)
- [allowPolicy](/interfaces/ShimoSDKOptions.md#allowpolicy)
- [debug](/interfaces/ShimoSDKOptions.md#debug)
- [plugins](/interfaces/ShimoSDKOptions.md#plugins)
- [targetOrigin](/interfaces/ShimoSDKOptions.md#targetorigin)
- [deviceMode](/interfaces/ShimoSDKOptions.md#devicemode)
- [disableSignatureComponent](/interfaces/ShimoSDKOptions.md#disablesignaturecomponent)
- [showLoadingEffect](/interfaces/ShimoSDKOptions.md#showloadingeffect)
- [apiAdaptor](/interfaces/ShimoSDKOptions.md#apiadaptor)
- [apiAdaptorContext](/interfaces/ShimoSDKOptions.md#apiadaptorcontext)
- [messageExpires](/interfaces/ShimoSDKOptions.md#messageexpires)
- [userUuid](/interfaces/ShimoSDKOptions.md#useruuid)

## Methods

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

Omit.openLink

#### Defined in

[src/ShimoSDK.ts:787](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L787)

___

### mentionClickHandlerForMobile

▸ `Optional` **mentionClickHandlerForMobile**(`payload`): `void`

用于移动端处理 @ 点击事件

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | [`MouseMovePayload`](/interfaces/MouseMovePayload.md) |

#### Returns

`void`

#### Inherited from

Omit.mentionClickHandlerForMobile

#### Defined in

[src/ShimoSDK.ts:807](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L807)

___

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

Omit.getFileInfoFromUrl

#### Defined in

[src/ShimoSDK.ts:814](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L814)

___

### showToast

▸ `Optional` **showToast**(`options`): `Promise`<`void`\>

用于显示客户自定义toast。

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ShowToastOptions`](/interfaces/ShowToastOptions.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

Omit.showToast

#### Defined in

[src/ShimoSDK.ts:827](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L827)

___

### handleCustomTask

▸ `Optional` **handleCustomTask**(`taskId`): `Promise`<`void`\>

通知用户执行自定义操作，操作由用户自定义按钮触发

#### Parameters

| Name | Type |
| :------ | :------ |
| `taskId` | `string` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Omit.handleCustomTask

#### Defined in

[src/ShimoSDK.ts:832](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L832)

## Properties

### generateUrl

• `Optional` **generateUrl**: [`GenerateUrlHandler`](/README.md#generateurlhandler)

生成插入到石墨文档中的链接，用于处理 @ 文件等功能需要插入的链接

#### Inherited from

Omit.generateUrl

#### Defined in

[src/ShimoSDK.ts:802](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L802)

___

### endpoint

• **endpoint**: `string`

石墨 SDK 服务器地址

#### Defined in

[src/ShimoSDK.ts:893](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L893)

___

### fileId

• **fileId**: `string`

您要打开的文档 ID

#### Defined in

[src/ShimoSDK.ts:898](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L898)

___

### signature

• **signature**: `string`

用于石墨 SDK 鉴权用的签名

#### Defined in

[src/ShimoSDK.ts:903](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L903)

___

### container

• **container**: `HTMLElement`

iframe 挂载的目标容器

#### Defined in

[src/ShimoSDK.ts:908](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L908)

___

### token

• **token**: `string`

用于您系统鉴权使用的 token

#### Defined in

[src/ShimoSDK.ts:913](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L913)

___

### params

• `Optional` **params**: `Object`

添加到 iframe URLSearchParams 的参数列表

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/ShimoSDK.ts:918](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L918)

___

### smParams

• `Optional` **smParams**: `string` \| `Record`<`string`, `unknown`\> \| (`string` \| `Record`<`string`, `unknown`\>)[]

石墨 SDK URL 参数 url?smParams={params}，用于传递石墨 SDK 内部需要的参数。

#### Defined in

[src/ShimoSDK.ts:925](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L925)

___

### lang

• `Optional` **lang**: ``"zh-CN"`` \| ``"en"`` \| ``"ja"`` \| ``"ar-SA"``

指定石墨 SDK 编辑器界面语言，添加到 iframe URLSearchParams 的参数列表。
若未指定，则 iframe 使用服务器设置的默认语言。

目前支持的语言取值：
1. zh-CN（简体中文）
2. en（英文）
3. ja（日文）
3. ar-SA（阿拉伯语）

#### Defined in

[src/ShimoSDK.ts:940](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L940)

___

### disableMentionCards

• `Optional` **disableMentionCards**: [`DisableMentionCards`](/interfaces/DisableMentionCards.md)

是否禁用提及的浮动卡片组件

#### Defined in

[src/ShimoSDK.ts:945](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L945)

___

### allowPolicy

• `Optional` **allowPolicy**: `string`

用于控制 iframe feature policy (https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Feature-Policy) 。
会覆盖默认的 policy，因此使用时需要注意把需要的 policy 写完整。

#### Defined in

[src/ShimoSDK.ts:951](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L951)

___

### debug

• `Optional` **debug**: `boolean`

是否开启调试模式，true 会通过 console 打印一些信息

#### Defined in

[src/ShimoSDK.ts:956](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L956)

___

### plugins

• `Optional` **plugins**: [`PluginOptions`](/interfaces/Spreadsheet.PluginOptions.md) \| [`PluginOptions`](/interfaces/Table.PluginOptions.md)

编辑器插件配置，不是所有类型的套件都支持，以套件是否提供 PluginOptions 为准

#### Defined in

[src/ShimoSDK.ts:961](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L961)

___

### targetOrigin

• `Optional` **targetOrigin**: `string`

iframe postMessage 的目标 origin，默认是当前页面的 location.origin。

**`deprecated`**

#### Defined in

[src/ShimoSDK.ts:967](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L967)

___

### deviceMode

• `Optional` **deviceMode**: [`DeviceMode`](/README.md#devicemode)

使用什么设备类型模式，会直接影响功能和样式，不传值或空字符串则默认用 user-agent 自动判断。受版本限制，不是所有类型都支持。

#### Defined in

[src/ShimoSDK.ts:972](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L972)

___

### disableSignatureComponent

• `Optional` **disableSignatureComponent**: `boolean`

是否禁用默认的签名组件，以支持自定义签名组件。受版本限制，部分版本的特定类型文档才支持。

#### Defined in

[src/ShimoSDK.ts:977](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L977)

___

### showLoadingEffect

• `Optional` **showLoadingEffect**: `boolean`

是否显示内置的加载动画，只在静态资源加载到编辑器渲染这个阶段显示

#### Defined in

[src/ShimoSDK.ts:982](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L982)

___

### apiAdaptor

• `Optional` **apiAdaptor**: [`APIAdaptor`](/README.md#apiadaptor)

用于在编辑器发起 API 请求时，对请求参数进行修改的函数。详细用法见文档。

#### Defined in

[src/ShimoSDK.ts:987](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L987)

___

### apiAdaptorContext

• `Optional` **apiAdaptorContext**: [`RequestContext`](/interfaces/RequestContext.md)

用于在编辑器发起 API 请求时，对请求参数进行修改的函数时传入的上下文数据。

#### Defined in

[src/ShimoSDK.ts:992](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L992)

___

### messageExpires

• `Optional` **messageExpires**: `number`

用于判断通信消息过期时间，过期后的消息会被抛弃，默认 5 分钟。

#### Defined in

[src/ShimoSDK.ts:997](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L997)

___

### userUuid

• `Optional` **userUuid**: `string`

加密后的用户id

#### Defined in

[src/ShimoSDK.ts:1002](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L1002)
