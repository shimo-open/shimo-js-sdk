[shimo-js-sdk](../README.md) / [Exports](../modules.md) / ShimoSDKOptions

# Interface: ShimoSDKOptions

ShimoSDK 初始化参数

## Hierarchy

- `Omit`<[`ContainerMethods`](ContainerMethods.md), ``"getContainerRect"``\>

  ↳ **`ShimoSDKOptions`**

  ↳↳ [`ConnectOptions`](ConnectOptions.md)

## Table of contents

### Properties

- [allowPolicy](ShimoSDKOptions.md#allowpolicy)
- [apiAdaptor](ShimoSDKOptions.md#apiadaptor)
- [apiAdaptorContext](ShimoSDKOptions.md#apiadaptorcontext)
- [container](ShimoSDKOptions.md#container)
- [debug](ShimoSDKOptions.md#debug)
- [deviceMode](ShimoSDKOptions.md#devicemode)
- [disableMentionCards](ShimoSDKOptions.md#disablementioncards)
- [disableSignatureComponent](ShimoSDKOptions.md#disablesignaturecomponent)
- [endpoint](ShimoSDKOptions.md#endpoint)
- [fileId](ShimoSDKOptions.md#fileid)
- [generateUrl](ShimoSDKOptions.md#generateurl)
- [lang](ShimoSDKOptions.md#lang)
- [messageExpires](ShimoSDKOptions.md#messageexpires)
- [params](ShimoSDKOptions.md#params)
- [plugins](ShimoSDKOptions.md#plugins)
- [showLoadingEffect](ShimoSDKOptions.md#showloadingeffect)
- [signature](ShimoSDKOptions.md#signature)
- [smParams](ShimoSDKOptions.md#smparams)
- [targetOrigin](ShimoSDKOptions.md#targetorigin)
- [token](ShimoSDKOptions.md#token)

### Methods

- [getFileInfoFromUrl](ShimoSDKOptions.md#getfileinfofromurl)
- [handleCustomTask](ShimoSDKOptions.md#handlecustomtask)
- [mentionClickHandlerForMobile](ShimoSDKOptions.md#mentionclickhandlerformobile)
- [openLink](ShimoSDKOptions.md#openlink)
- [showToast](ShimoSDKOptions.md#showtoast)

## Properties

### allowPolicy

• `Optional` **allowPolicy**: `string`

用于控制 iframe feature policy (https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Feature-Policy) 。
会覆盖默认的 policy，因此使用时需要注意把需要的 policy 写完整。

#### Defined in

[src/ShimoSDK.ts:937](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L937)

___

### apiAdaptor

• `Optional` **apiAdaptor**: [`APIAdaptor`](../modules.md#apiadaptor)

用于在编辑器发起 API 请求时，对请求参数进行修改的函数。详细用法见文档。

#### Defined in

[src/ShimoSDK.ts:973](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L973)

___

### apiAdaptorContext

• `Optional` **apiAdaptorContext**: [`RequestContext`](RequestContext.md)

用于在编辑器发起 API 请求时，对请求参数进行修改的函数时传入的上下文数据。

#### Defined in

[src/ShimoSDK.ts:978](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L978)

___

### container

• **container**: `HTMLElement`

iframe 挂载的目标容器

#### Defined in

[src/ShimoSDK.ts:894](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L894)

___

### debug

• `Optional` **debug**: `boolean`

是否开启调试模式，true 会通过 console 打印一些信息

#### Defined in

[src/ShimoSDK.ts:942](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L942)

___

### deviceMode

• `Optional` **deviceMode**: [`DeviceMode`](../modules.md#devicemode)

使用什么设备类型模式，会直接影响功能和样式，不传值或空字符串则默认用 user-agent 自动判断。受版本限制，不是所有类型都支持。

#### Defined in

[src/ShimoSDK.ts:958](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L958)

___

### disableMentionCards

• `Optional` **disableMentionCards**: [`DisableMentionCards`](DisableMentionCards.md)

是否禁用提及的浮动卡片组件

#### Defined in

[src/ShimoSDK.ts:931](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L931)

___

### disableSignatureComponent

• `Optional` **disableSignatureComponent**: `boolean`

是否禁用默认的签名组件，以支持自定义签名组件。受版本限制，部分版本的特定类型文档才支持。

#### Defined in

[src/ShimoSDK.ts:963](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L963)

___

### endpoint

• **endpoint**: `string`

石墨 SDK 服务器地址

#### Defined in

[src/ShimoSDK.ts:879](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L879)

___

### fileId

• **fileId**: `string`

您要打开的文档 ID

#### Defined in

[src/ShimoSDK.ts:884](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L884)

___

### generateUrl

• `Optional` **generateUrl**: [`GenerateUrlHandler`](../modules.md#generateurlhandler)

生成插入到石墨文档中的链接，用于处理 @ 文件等功能需要插入的链接

#### Inherited from

Omit.generateUrl

#### Defined in

[src/ShimoSDK.ts:788](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L788)

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

[src/ShimoSDK.ts:926](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L926)

___

### messageExpires

• `Optional` **messageExpires**: `number`

用于判断通信消息过期时间，过期后的消息会被抛弃，默认 5 分钟。

#### Defined in

[src/ShimoSDK.ts:983](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L983)

___

### params

• `Optional` **params**: `Object`

添加到 iframe URLSearchParams 的参数列表

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/ShimoSDK.ts:904](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L904)

___

### plugins

• `Optional` **plugins**: [`PluginOptions`](Spreadsheet.PluginOptions.md) \| [`PluginOptions`](Table.PluginOptions.md)

编辑器插件配置，不是所有类型的套件都支持，以套件是否提供 PluginOptions 为准

#### Defined in

[src/ShimoSDK.ts:947](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L947)

___

### showLoadingEffect

• `Optional` **showLoadingEffect**: `boolean`

是否显示内置的加载动画，只在静态资源加载到编辑器渲染这个阶段显示

#### Defined in

[src/ShimoSDK.ts:968](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L968)

___

### signature

• **signature**: `string`

用于石墨 SDK 鉴权用的签名

#### Defined in

[src/ShimoSDK.ts:889](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L889)

___

### smParams

• `Optional` **smParams**: `string` \| `Record`<`string`, `unknown`\> \| (`string` \| `Record`<`string`, `unknown`\>)[]

石墨 SDK URL 参数 url?smParams={params}，用于传递石墨 SDK 内部需要的参数。

#### Defined in

[src/ShimoSDK.ts:911](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L911)

___

### targetOrigin

• `Optional` **targetOrigin**: `string`

iframe postMessage 的目标 origin，默认是当前页面的 location.origin。

**`deprecated`**

#### Defined in

[src/ShimoSDK.ts:953](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L953)

___

### token

• **token**: `string`

用于您系统鉴权使用的 token

#### Defined in

[src/ShimoSDK.ts:899](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L899)

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

Omit.getFileInfoFromUrl

#### Defined in

[src/ShimoSDK.ts:800](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L800)

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

[src/ShimoSDK.ts:818](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L818)

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

Omit.mentionClickHandlerForMobile

#### Defined in

[src/ShimoSDK.ts:793](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L793)

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

Omit.openLink

#### Defined in

[src/ShimoSDK.ts:773](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L773)

___

### showToast

▸ `Optional` **showToast**(`options`): `Promise`<`void`\>

用于显示客户自定义toast。

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ShowToastOptions`](ShowToastOptions.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

Omit.showToast

#### Defined in

[src/ShimoSDK.ts:813](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/ShimoSDK.ts#L813)
