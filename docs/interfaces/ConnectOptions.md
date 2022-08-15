[shimo-js-sdk](../README.md) / [Exports](../modules.md) / ConnectOptions

# Interface: ConnectOptions

## Table of contents

### Properties

- [allowPolicy](ConnectOptions.md#allowpolicy)
- [apiAdaptor](ConnectOptions.md#apiadaptor)
- [apiAdaptorContext](ConnectOptions.md#apiadaptorcontext)
- [appId](ConnectOptions.md#appid)
- [container](ConnectOptions.md#container)
- [debug](ConnectOptions.md#debug)
- [deviceMode](ConnectOptions.md#devicemode)
- [disableMentionCards](ConnectOptions.md#disablementioncards)
- [disableSignatureComponent](ConnectOptions.md#disablesignaturecomponent)
- [endpoint](ConnectOptions.md#endpoint)
- [fileId](ConnectOptions.md#fileid)
- [lang](ConnectOptions.md#lang)
- [params](ConnectOptions.md#params)
- [plugins](ConnectOptions.md#plugins)
- [showLoadingEffect](ConnectOptions.md#showloadingeffect)
- [signature](ConnectOptions.md#signature)
- [smParams](ConnectOptions.md#smparams)
- [token](ConnectOptions.md#token)

### Methods

- [generateUrl](ConnectOptions.md#generateurl)
- [getFileInfoFromUrl](ConnectOptions.md#getfileinfofromurl)
- [getSignature](ConnectOptions.md#getsignature)
- [mentionClickHandlerForMobile](ConnectOptions.md#mentionclickhandlerformobile)
- [openLink](ConnectOptions.md#openlink)

## Properties

### allowPolicy

• `Optional` **allowPolicy**: `string`

用于控制 iframe feature policy (https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Feature-Policy) 。
会覆盖默认的 policy，因此使用时需要注意把需要的 policy 写完整。

#### Defined in

[src/connect.ts:155](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L155)

___

### apiAdaptor

• `Optional` **apiAdaptor**: [`APIAdaptor`](../modules.md#apiadaptor)

用于在编辑器发起 API 请求时，对请求参数进行修改的函数。详细用法见文档。

#### Defined in

[src/connect.ts:200](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L200)

___

### apiAdaptorContext

• `Optional` **apiAdaptorContext**: [`RequestContext`](RequestContext.md)

用于在编辑器发起 API 请求时，对请求参数进行修改的函数时传入的上下文数据。

#### Defined in

[src/connect.ts:205](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L205)

___

### appId

• **appId**: `string`

石墨 SDK 分配给您的 App ID

#### Defined in

[src/connect.ts:42](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L42)

___

### container

• **container**: `HTMLElement`

iframe 挂载的目标容器

#### Defined in

[src/connect.ts:68](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L68)

___

### debug

• `Optional` **debug**: `boolean`

是否开启调试模式，true 会通过 console 打印一些信息

#### Defined in

[src/connect.ts:160](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L160)

___

### deviceMode

• `Optional` **deviceMode**: ``"pc"`` \| ``"mobile"`` \| ``"pad"``

使用什么设备类型模式，会直接影响功能和样式，不传值或空字符串则默认用 user-agent 自动判断。受版本限制，不是所有类型都支持。
- pc - 桌面模式
- mobile - 移动模式

#### Defined in

[src/connect.ts:185](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L185)

___

### disableMentionCards

• `Optional` **disableMentionCards**: `Object`

是否禁用提及的浮动卡片组件

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `date?` | `boolean` | 是否禁用提及日期的浮动卡片组件 |
| `file?` | `boolean` | 是否禁用提及文件的浮动卡片组件 |
| `user?` | `boolean` | 是否禁用提及人的浮动卡片组件 |

#### Defined in

[src/connect.ts:129](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L129)

___

### disableSignatureComponent

• `Optional` **disableSignatureComponent**: `boolean`

是否禁用默认的签名组件，以支持自定义签名组件。受版本限制，部分版本的特定类型文档才支持。

#### Defined in

[src/connect.ts:190](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L190)

___

### endpoint

• **endpoint**: `string`

石墨 SDK 服务器地址

#### Defined in

[src/connect.ts:47](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L47)

___

### fileId

• **fileId**: `string`

您要打开的文档 ID

#### Defined in

[src/connect.ts:52](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L52)

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

[src/connect.ts:99](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L99)

___

### params

• `Optional` **params**: `Object`

添加到 iframe URLSearchParams 的参数列表

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/connect.ts:78](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L78)

___

### plugins

• `Optional` **plugins**: [`PluginOptions`](Spreadsheet.PluginOptions.md)

编辑器插件配置，不是所有类型的套件都支持，以套件是否提供 PluginOptions 为准

#### Defined in

[src/connect.ts:165](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L165)

___

### showLoadingEffect

• `Optional` **showLoadingEffect**: `boolean`

是否显示内置的加载动画，只影响静态资源加载到编辑器渲染这个阶段，不影响编辑器渲染时的加载动画

#### Defined in

[src/connect.ts:195](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L195)

___

### signature

• `Optional` **signature**: `string`

用于石墨 SDK 鉴权用的签名

#### Defined in

[src/connect.ts:63](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L63)

___

### smParams

• `Optional` **smParams**: `string` \| `Record`<`string`, `unknown`\> \| (`string` \| `Record`<`string`, `unknown`\>)[]

石墨 SDK URL 参数 url?smParams={params}，用于传递石墨 SDK 内部需要的参数。

#### Defined in

[src/connect.ts:85](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L85)

___

### token

• **token**: `string`

用于您系统鉴权使用的 token

#### Defined in

[src/connect.ts:73](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L73)

## Methods

### generateUrl

▸ `Optional` **generateUrl**(`fileId`): `string` \| `Promise`<`string`\>

生成插入到石墨文档中的链接，用于处理 @ 文件等功能需要插入的链接

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

`string` \| `Promise`<`string`\>

#### Defined in

[src/connect.ts:104](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L104)

___

### getFileInfoFromUrl

▸ `Optional` **getFileInfoFromUrl**(`url`): `Promise`<`undefined` \| { `fileId`: `string` ; `type`: ``"docs"`` \| ``"docx"`` \| ``"sheets"`` \| ``"presentation"`` \| ``"table"``  }\>

用于从 URL 中解析石墨协作文件对应的 file ID，并返回其对应的数据结构，如果不是协作文件，返回 undefined

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`Promise`<`undefined` \| { `fileId`: `string` ; `type`: ``"docs"`` \| ``"docx"`` \| ``"sheets"`` \| ``"presentation"`` \| ``"table"``  }\>

#### Defined in

[src/connect.ts:170](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L170)

___

### getSignature

▸ `Optional` **getSignature**(): `Promise`<`string`\>

获取用于石墨 SDK 鉴权用的签名

**`deprecated`** use sdk.setSignature() instead

#### Returns

`Promise`<`string`\>

#### Defined in

[src/connect.ts:58](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L58)

___

### mentionClickHandlerForMobile

▸ `Optional` **mentionClickHandlerForMobile**(`payload`): `void`

用于移动端处理 @ 点击事件

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `MouseMovePayload` |

#### Returns

`void`

#### Defined in

[src/connect.ts:149](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L149)

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

#### Defined in

[src/connect.ts:114](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/connect.ts#L114)
