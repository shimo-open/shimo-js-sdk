[shimo-js-sdk - v2.0.2](../README.md) / ConnectOptions

# Interface: ConnectOptions

## Hierarchy

- [`OfficeSDKOptions`](OfficeSDKOptions.md)

  ↳ **`ConnectOptions`**

## Table of contents

### Methods

- [openLink](ConnectOptions.md#openlink)
- [mentionClickHandlerForMobile](ConnectOptions.md#mentionclickhandlerformobile)
- [getFileInfoFromUrl](ConnectOptions.md#getfileinfofromurl)
- [showToast](ConnectOptions.md#showtoast)
- [handleCustomTask](ConnectOptions.md#handlecustomtask)
- [getCredentials](ConnectOptions.md#getcredentials)

### Properties

- [generateUrl](ConnectOptions.md#generateurl)
- [endpoint](ConnectOptions.md#endpoint)
- [fileId](ConnectOptions.md#fileid)
- [signature](ConnectOptions.md#signature)
- [container](ConnectOptions.md#container)
- [token](ConnectOptions.md#token)
- [refreshCredentialsInterval](ConnectOptions.md#refreshcredentialsinterval)
- [params](ConnectOptions.md#params)
- [smParams](ConnectOptions.md#smparams)
- [lang](ConnectOptions.md#lang)
- [disableMentionCards](ConnectOptions.md#disablementioncards)
- [ui](ConnectOptions.md#ui)
- [allowPolicy](ConnectOptions.md#allowpolicy)
- [debug](ConnectOptions.md#debug)
- [plugins](ConnectOptions.md#plugins)
- [targetOrigin](ConnectOptions.md#targetorigin)
- [deviceMode](ConnectOptions.md#devicemode)
- [disableSignatureComponent](ConnectOptions.md#disablesignaturecomponent)
- [headerBarsVisible](ConnectOptions.md#headerbarsvisible)
- [showLoadingEffect](ConnectOptions.md#showloadingeffect)
- [showLoading](ConnectOptions.md#showloading)
- [loadingOptions](ConnectOptions.md#loadingoptions)
- [apiAdaptor](ConnectOptions.md#apiadaptor)
- [apiAdaptorContext](ConnectOptions.md#apiadaptorcontext)
- [messageExpires](ConnectOptions.md#messageexpires)
- [userUuid](ConnectOptions.md#useruuid)
- [emptyPage](ConnectOptions.md#emptypage)

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

[OfficeSDKOptions](OfficeSDKOptions.md).[openLink](OfficeSDKOptions.md#openlink)

#### Defined in

[src/OfficeSDK.ts:1182](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1182)

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

[OfficeSDKOptions](OfficeSDKOptions.md).[mentionClickHandlerForMobile](OfficeSDKOptions.md#mentionclickhandlerformobile)

#### Defined in

[src/OfficeSDK.ts:1202](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1202)

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

[OfficeSDKOptions](OfficeSDKOptions.md).[getFileInfoFromUrl](OfficeSDKOptions.md#getfileinfofromurl)

#### Defined in

[src/OfficeSDK.ts:1209](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1209)

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

[OfficeSDKOptions](OfficeSDKOptions.md).[showToast](OfficeSDKOptions.md#showtoast)

#### Defined in

[src/OfficeSDK.ts:1222](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1222)

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

[OfficeSDKOptions](OfficeSDKOptions.md).[handleCustomTask](OfficeSDKOptions.md#handlecustomtask)

#### Defined in

[src/OfficeSDK.ts:1227](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1227)

___

### getCredentials

▸ **getCredentials**(): `Promise`<[`Credentials`](Credentials.md)\>

请求容器获取鉴权信息

#### Returns

`Promise`<[`Credentials`](Credentials.md)\>

鉴权信息

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[getCredentials](OfficeSDKOptions.md#getcredentials)

#### Defined in

[src/OfficeSDK.ts:1232](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1232)

## Properties

### generateUrl

• `Optional` **generateUrl**: [`GenerateUrlHandler`](../README.md#generateurlhandler)

生成插入到石墨文档中的链接，用于处理 @ 文件等功能需要插入的链接

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[generateUrl](OfficeSDKOptions.md#generateurl)

#### Defined in

[src/OfficeSDK.ts:1197](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1197)

___

### endpoint

• **endpoint**: `string`

石墨 SDK 服务器地址

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[endpoint](OfficeSDKOptions.md#endpoint)

#### Defined in

[src/OfficeSDK.ts:1331](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1331)

___

### fileId

• **fileId**: `string`

您要打开的文档 ID

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[fileId](OfficeSDKOptions.md#fileid)

#### Defined in

[src/OfficeSDK.ts:1336](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1336)

___

### signature

• **signature**: `string`

用于石墨 SDK 鉴权用的签名

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[signature](OfficeSDKOptions.md#signature)

#### Defined in

[src/OfficeSDK.ts:1341](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1341)

___

### container

• **container**: `HTMLElement`

iframe 挂载的目标容器

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[container](OfficeSDKOptions.md#container)

#### Defined in

[src/OfficeSDK.ts:1346](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1346)

___

### token

• **token**: `string`

用于您系统鉴权使用的 token

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[token](OfficeSDKOptions.md#token)

#### Defined in

[src/OfficeSDK.ts:1351](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1351)

___

### refreshCredentialsInterval

• **refreshCredentialsInterval**: `number`

刷新鉴权信息的间隔时间，单位为毫秒

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[refreshCredentialsInterval](OfficeSDKOptions.md#refreshcredentialsinterval)

#### Defined in

[src/OfficeSDK.ts:1356](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1356)

___

### params

• `Optional` **params**: `Object`

添加到 iframe URLSearchParams 的参数列表

#### Index signature

▪ [key: `string`]: `string`

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[params](OfficeSDKOptions.md#params)

#### Defined in

[src/OfficeSDK.ts:1361](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1361)

___

### smParams

• `Optional` **smParams**: `string` \| `Record`<`string`, `unknown`\> \| (`string` \| `Record`<`string`, `unknown`\>)[]

石墨 SDK URL 参数 url?smParams={params}，用于传递石墨 SDK 内部需要的参数。

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[smParams](OfficeSDKOptions.md#smparams)

#### Defined in

[src/OfficeSDK.ts:1368](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1368)

___

### lang

• `Optional` **lang**: ``"zh-CN"`` \| ``"en"`` \| ``"ja"`` \| ``"ar-SA"`` \| ``"ru-RU"``

指定石墨 SDK 编辑器界面语言，添加到 iframe URLSearchParams 的参数列表。
若未指定，则 iframe 使用服务器设置的默认语言。

目前支持的语言取值：
1. zh-CN（简体中文）
2. en（英文）
3. ja（日文）
4. ar-SA（阿拉伯语）
5. ru-RU（俄语）

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[lang](OfficeSDKOptions.md#lang)

#### Defined in

[src/OfficeSDK.ts:1384](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1384)

___

### disableMentionCards

• `Optional` **disableMentionCards**: [`DisableMentionCards`](DisableMentionCards.md)

是否禁用提及的浮动卡片组件

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[disableMentionCards](OfficeSDKOptions.md#disablementioncards)

#### Defined in

[src/OfficeSDK.ts:1389](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1389)

___

### ui

• `Optional` **ui**: `Object`

用于覆盖编辑器内部分 toast 文案。
支持套件类型：form、documentPro、presentation、spreadsheet、table（仅对支持 ui 配置的套件生效）。
当前已文档化支持字段：ui.toast.tips.edit.noPermission。
其他字段暂不作为稳定公共 API 承诺。

#### Type declaration

| Name | Type |
| :------ | :------ |
| `toast?` | [`SDKToastOptions`](SDKToastOptions.md) |

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[ui](OfficeSDKOptions.md#ui)

#### Defined in

[src/OfficeSDK.ts:1397](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1397)

___

### allowPolicy

• `Optional` **allowPolicy**: `string`

用于控制 iframe feature policy (https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Feature-Policy) 。
会覆盖默认的 policy，因此使用时需要注意把需要的 policy 写完整。

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[allowPolicy](OfficeSDKOptions.md#allowpolicy)

#### Defined in

[src/OfficeSDK.ts:1405](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1405)

___

### debug

• `Optional` **debug**: `boolean`

是否开启调试模式，true 会通过 console 打印一些信息

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[debug](OfficeSDKOptions.md#debug)

#### Defined in

[src/OfficeSDK.ts:1410](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1410)

___

### plugins

• `Optional` **plugins**: [`PluginOptions`](Spreadsheet.PluginOptions.md) \| [`PluginOptions`](Table.PluginOptions.md)

编辑器插件配置，不是所有类型的套件都支持，以套件是否提供 PluginOptions 为准

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[plugins](OfficeSDKOptions.md#plugins)

#### Defined in

[src/OfficeSDK.ts:1415](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1415)

___

### targetOrigin

• `Optional` **targetOrigin**: `string`

iframe postMessage 的目标 origin，默认是当前页面的 location.origin。

**`deprecated`**

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[targetOrigin](OfficeSDKOptions.md#targetorigin)

#### Defined in

[src/OfficeSDK.ts:1421](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1421)

___

### deviceMode

• `Optional` **deviceMode**: [`DeviceMode`](../README.md#devicemode)

使用什么设备类型模式，会直接影响功能和样式，不传值或空字符串则默认用 user-agent 自动判断。受版本限制，不是所有类型都支持。

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[deviceMode](OfficeSDKOptions.md#devicemode)

#### Defined in

[src/OfficeSDK.ts:1426](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1426)

___

### disableSignatureComponent

• `Optional` **disableSignatureComponent**: `boolean`

是否禁用默认的签名组件，以支持自定义签名组件。受版本限制，部分版本的特定类型文档才支持。

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[disableSignatureComponent](OfficeSDKOptions.md#disablesignaturecomponent)

#### Defined in

[src/OfficeSDK.ts:1431](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1431)

___

### headerBarsVisible

• `Optional` **headerBarsVisible**: `boolean`

控制 headerbar 组件是否展示，false 表示隐藏。

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[headerBarsVisible](OfficeSDKOptions.md#headerbarsvisible)

#### Defined in

[src/OfficeSDK.ts:1436](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1436)

___

### showLoadingEffect

• `Optional` **showLoadingEffect**: `boolean`

是否显示内置的加载动画，只在静态资源加载到编辑器渲染这个阶段显示

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[showLoadingEffect](OfficeSDKOptions.md#showloadingeffect)

#### Defined in

[src/OfficeSDK.ts:1441](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1441)

___

### showLoading

• `Optional` **showLoading**: `boolean`

是否启用 iframe 内置默认加载页，默认 false。
隐藏后接入方可自定义外部 loading。

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[showLoading](OfficeSDKOptions.md#showloading)

#### Defined in

[src/OfficeSDK.ts:1447](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1447)

___

### loadingOptions

• `Optional` **loadingOptions**: [`LoadingOptions`](LoadingOptions.md)

iframe 内置加载页配置。仅在 `showLoading === true`
或 `showLoadingEffect === true` 时透传给 iframe。

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[loadingOptions](OfficeSDKOptions.md#loadingoptions)

#### Defined in

[src/OfficeSDK.ts:1453](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1453)

___

### apiAdaptor

• `Optional` **apiAdaptor**: [`APIAdaptor`](../README.md#apiadaptor)

用于在编辑器发起 API 请求时，对请求参数进行修改的函数。详细用法见文档。

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[apiAdaptor](OfficeSDKOptions.md#apiadaptor)

#### Defined in

[src/OfficeSDK.ts:1458](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1458)

___

### apiAdaptorContext

• `Optional` **apiAdaptorContext**: [`RequestContext`](RequestContext.md)

用于在编辑器发起 API 请求时，对请求参数进行修改的函数时传入的上下文数据。

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[apiAdaptorContext](OfficeSDKOptions.md#apiadaptorcontext)

#### Defined in

[src/OfficeSDK.ts:1463](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1463)

___

### messageExpires

• `Optional` **messageExpires**: `number`

用于判断通信消息过期时间，过期后的消息会被抛弃，默认 5 分钟。

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[messageExpires](OfficeSDKOptions.md#messageexpires)

#### Defined in

[src/OfficeSDK.ts:1468](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1468)

___

### userUuid

• `Optional` **userUuid**: `string`

加密后的用户id

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[userUuid](OfficeSDKOptions.md#useruuid)

#### Defined in

[src/OfficeSDK.ts:1473](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1473)

___

### emptyPage

• `Optional` **emptyPage**: `boolean` \| [`EmptyPageOptions`](EmptyPageOptions.md)

缺省页（Empty Page）配置。
- 不传或传 `true`：启用默认缺省页能力（有内置图片与默认文案，**无按钮**）
- 传 `false`：完全关闭
- 传对象：精细控制启用的 scene、token 过期策略，以及每个 scene 的
  文案/按钮自定义（`overrides`）。默认不渲染任何按钮，宿主需要按钮时必须
  在 `overrides[scene].primary/secondary` 里显式配置 label，点击统一触发
  `emptyPageAction` 事件由宿主处理。

相关事件：`emptyPageShown` / `emptyPageAction` / `emptyPageHidden`。
详见 `./types/EmptyPage.ts`。

#### Inherited from

[OfficeSDKOptions](OfficeSDKOptions.md).[emptyPage](OfficeSDKOptions.md#emptypage)

#### Defined in

[src/OfficeSDK.ts:1487](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1487)
