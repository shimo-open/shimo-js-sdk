[shimo-js-sdk](../README.md) / [Exports](../modules.md) / ShimoSDKOptions

# Interface: ShimoSDKOptions

ShimoSDK 初始化参数

## Hierarchy

- `Omit`<[`ContainerMethods`](ContainerMethods.md), ``"getContainerRect"``\>

  ↳ **`ShimoSDKOptions`**

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
- [params](ShimoSDKOptions.md#params)
- [plugins](ShimoSDKOptions.md#plugins)
- [showLoadingEffect](ShimoSDKOptions.md#showloadingeffect)
- [signature](ShimoSDKOptions.md#signature)
- [smParams](ShimoSDKOptions.md#smparams)
- [targetOrigin](ShimoSDKOptions.md#targetorigin)
- [token](ShimoSDKOptions.md#token)

### Methods

- [getFileInfoFromUrl](ShimoSDKOptions.md#getfileinfofromurl)
- [mentionClickHandlerForMobile](ShimoSDKOptions.md#mentionclickhandlerformobile)
- [openLink](ShimoSDKOptions.md#openlink)

## Properties

### allowPolicy

• `Optional` **allowPolicy**: `string`

用于控制 iframe feature policy (https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Feature-Policy) 。
会覆盖默认的 policy，因此使用时需要注意把需要的 policy 写完整。

#### Defined in

[src/ShimoSDK.ts:802](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L802)

___

### apiAdaptor

• `Optional` **apiAdaptor**: [`APIAdaptor`](../modules.md#apiadaptor)

用于在编辑器发起 API 请求时，对请求参数进行修改的函数。详细用法见文档。

#### Defined in

[src/ShimoSDK.ts:837](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L837)

___

### apiAdaptorContext

• `Optional` **apiAdaptorContext**: [`RequestContext`](RequestContext.md)

用于在编辑器发起 API 请求时，对请求参数进行修改的函数时传入的上下文数据。

#### Defined in

[src/ShimoSDK.ts:842](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L842)

___

### container

• **container**: `HTMLElement`

iframe 挂载的目标容器

#### Defined in

[src/ShimoSDK.ts:760](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L760)

___

### debug

• `Optional` **debug**: `boolean`

是否开启调试模式，true 会通过 console 打印一些信息

#### Defined in

[src/ShimoSDK.ts:807](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L807)

___

### deviceMode

• `Optional` **deviceMode**: [`DeviceMode`](../modules.md#devicemode)

使用什么设备类型模式，会直接影响功能和样式，不传值或空字符串则默认用 user-agent 自动判断。受版本限制，不是所有类型都支持。

#### Defined in

[src/ShimoSDK.ts:822](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L822)

___

### disableMentionCards

• `Optional` **disableMentionCards**: [`DisableMentionCards`](DisableMentionCards.md)

是否禁用提及的浮动卡片组件

#### Defined in

[src/ShimoSDK.ts:796](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L796)

___

### disableSignatureComponent

• `Optional` **disableSignatureComponent**: `boolean`

是否禁用默认的签名组件，以支持自定义签名组件。受版本限制，部分版本的特定类型文档才支持。

#### Defined in

[src/ShimoSDK.ts:827](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L827)

___

### endpoint

• **endpoint**: `string`

石墨 SDK 服务器地址

#### Defined in

[src/ShimoSDK.ts:745](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L745)

___

### fileId

• **fileId**: `string`

您要打开的文档 ID

#### Defined in

[src/ShimoSDK.ts:750](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L750)

___

### generateUrl

• `Optional` **generateUrl**: [`GenerateUrlHandler`](../modules.md#generateurlhandler)

生成插入到石墨文档中的链接，用于处理 @ 文件等功能需要插入的链接

#### Inherited from

Omit.generateUrl

#### Defined in

[src/ShimoSDK.ts:658](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L658)

___

### lang

• `Optional` **lang**: ``"zh-CN"`` \| ``"en"`` \| ``"ja"``

指定石墨 SDK 编辑器界面语言，添加到 iframe URLSearchParams 的参数列表。
若未指定，则 iframe 使用服务器设置的默认语言。

目前支持的语言取值：
1. zh-CN（简体中文）
2. en（英文）
3. ja（日文）

#### Defined in

[src/ShimoSDK.ts:791](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L791)

___

### params

• `Optional` **params**: `Object`

添加到 iframe URLSearchParams 的参数列表

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/ShimoSDK.ts:770](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L770)

___

### plugins

• `Optional` **plugins**: [`PluginOptions`](Spreadsheet.PluginOptions.md)

编辑器插件配置，不是所有类型的套件都支持，以套件是否提供 PluginOptions 为准

#### Defined in

[src/ShimoSDK.ts:812](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L812)

___

### showLoadingEffect

• `Optional` **showLoadingEffect**: `boolean`

是否显示内置的加载动画，只在静态资源加载到编辑器渲染这个阶段显示

#### Defined in

[src/ShimoSDK.ts:832](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L832)

___

### signature

• **signature**: `string`

用于石墨 SDK 鉴权用的签名

#### Defined in

[src/ShimoSDK.ts:755](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L755)

___

### smParams

• `Optional` **smParams**: `string` \| `Record`<`string`, `unknown`\> \| (`string` \| `Record`<`string`, `unknown`\>)[]

石墨 SDK URL 参数 url?smParams={params}，用于传递石墨 SDK 内部需要的参数。

#### Defined in

[src/ShimoSDK.ts:777](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L777)

___

### targetOrigin

• `Optional` **targetOrigin**: `string`

iframe postMessage 的目标 origin，默认是当前页面的 location.origin。

#### Defined in

[src/ShimoSDK.ts:817](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L817)

___

### token

• **token**: `string`

用于您系统鉴权使用的 token

#### Defined in

[src/ShimoSDK.ts:765](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L765)

## Methods

### getFileInfoFromUrl

▸ `Optional` **getFileInfoFromUrl**(`url`): `Promise`<`undefined` \| { `fileId`: `string` ; `type`: `string`  }\>

用于从客户业务 URL 中获取对应的文件 ID，供编辑器使用。

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`undefined` \| { `fileId`: `string` ; `type`: `string`  }\>

#### Inherited from

Omit.getFileInfoFromUrl

#### Defined in

[src/ShimoSDK.ts:670](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L670)

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

[src/ShimoSDK.ts:663](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L663)

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

[src/ShimoSDK.ts:643](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/ShimoSDK.ts#L643)
