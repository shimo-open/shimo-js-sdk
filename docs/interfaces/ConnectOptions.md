[shimo-js-sdk](../README.md) / [Exports](../modules.md) / ConnectOptions

# Interface: ConnectOptions

## Table of contents

### Properties

- [allowPolicy](ConnectOptions.md#allowpolicy)
- [appId](ConnectOptions.md#appid)
- [container](ConnectOptions.md#container)
- [debug](ConnectOptions.md#debug)
- [disableMentionCards](ConnectOptions.md#disablementioncards)
- [endpoint](ConnectOptions.md#endpoint)
- [fileId](ConnectOptions.md#fileid)
- [lang](ConnectOptions.md#lang)
- [params](ConnectOptions.md#params)
- [signature](ConnectOptions.md#signature)
- [smParams](ConnectOptions.md#smparams)
- [token](ConnectOptions.md#token)

### Methods

- [generateUrl](ConnectOptions.md#generateurl)
- [getSignature](ConnectOptions.md#getsignature)
- [mentionClickHandlerForMobile](ConnectOptions.md#mentionclickhandlerformobile)
- [openLink](ConnectOptions.md#openlink)

## Properties

### allowPolicy

• `Optional` **allowPolicy**: `string`

用于控制 iframe feature policy (https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Feature-Policy) 。
会覆盖默认的 policy，因此使用时需要注意把需要的 policy 写完整。

#### Defined in

[src/connect.ts:152](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/connect.ts#L152)

___

### appId

• **appId**: `string`

石墨 SDK 分配给您的 App ID

#### Defined in

[src/connect.ts:39](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/connect.ts#L39)

___

### container

• **container**: `HTMLElement`

iframe 挂载的目标容器

#### Defined in

[src/connect.ts:65](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/connect.ts#L65)

___

### debug

• `Optional` **debug**: `boolean`

是否开启调试模式，true 会通过 console 打印一些信息

#### Defined in

[src/connect.ts:157](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/connect.ts#L157)

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

[src/connect.ts:126](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/connect.ts#L126)

___

### endpoint

• **endpoint**: `string`

石墨 SDK 服务器地址

#### Defined in

[src/connect.ts:44](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/connect.ts#L44)

___

### fileId

• **fileId**: `string`

您要打开的文档 ID

#### Defined in

[src/connect.ts:49](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/connect.ts#L49)

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

[src/connect.ts:96](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/connect.ts#L96)

___

### params

• `Optional` **params**: `Object`

添加到 iframe URLSearchParams 的参数列表

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/connect.ts:75](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/connect.ts#L75)

___

### signature

• `Optional` **signature**: `string`

用于石墨 SDK 鉴权用的签名

#### Defined in

[src/connect.ts:60](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/connect.ts#L60)

___

### smParams

• `Optional` **smParams**: `string` \| `Record`<`string`, `unknown`\> \| (`string` \| `Record`<`string`, `unknown`\>)[]

石墨 SDK URL 参数 url?smParams={params}，用于传递石墨 SDK 内部需要的参数。

#### Defined in

[src/connect.ts:82](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/connect.ts#L82)

___

### token

• **token**: `string`

用于您系统鉴权使用的 token

#### Defined in

[src/connect.ts:70](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/connect.ts#L70)

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

[src/connect.ts:101](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/connect.ts#L101)

___

### getSignature

▸ `Optional` **getSignature**(): `Promise`<`string`\>

获取用于石墨 SDK 鉴权用的签名

**`deprecated`** use sdk.setSignature() instead

#### Returns

`Promise`<`string`\>

#### Defined in

[src/connect.ts:55](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/connect.ts#L55)

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

[src/connect.ts:146](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/connect.ts#L146)

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

[src/connect.ts:111](https://github.com/shimohq/shimo-js-sdk/blob/cff0de6/src/connect.ts#L111)
