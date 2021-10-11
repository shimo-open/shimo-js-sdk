[shimo-js-sdk](../README.md) / [Exports](../modules.md) / ConnectOptions

# Interface: ConnectOptions

## Table of contents

### Properties

- [appId](ConnectOptions.md#appid)
- [container](ConnectOptions.md#container)
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
- [openLink](ConnectOptions.md#openlink)

## Properties

### appId

• **appId**: `string`

石墨 SDK 分配给您的 App ID

#### Defined in

[src/connect.ts:28](https://github.com/shimohq/shimo-js-sdk/blob/28322b5/src/connect.ts#L28)

___

### container

• **container**: `HTMLElement`

iframe 挂载的目标容器

#### Defined in

[src/connect.ts:54](https://github.com/shimohq/shimo-js-sdk/blob/28322b5/src/connect.ts#L54)

___

### endpoint

• **endpoint**: `string`

石墨 SDK 服务器地址

#### Defined in

[src/connect.ts:33](https://github.com/shimohq/shimo-js-sdk/blob/28322b5/src/connect.ts#L33)

___

### fileId

• **fileId**: `string`

您要打开的文档 ID

#### Defined in

[src/connect.ts:38](https://github.com/shimohq/shimo-js-sdk/blob/28322b5/src/connect.ts#L38)

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

[src/connect.ts:82](https://github.com/shimohq/shimo-js-sdk/blob/28322b5/src/connect.ts#L82)

___

### params

• `Optional` **params**: `Object`

添加到 iframe URLSearchParams 的参数列表

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/connect.ts:64](https://github.com/shimohq/shimo-js-sdk/blob/28322b5/src/connect.ts#L64)

___

### signature

• `Optional` **signature**: `string`

用于石墨 SDK 鉴权用的签名

#### Defined in

[src/connect.ts:49](https://github.com/shimohq/shimo-js-sdk/blob/28322b5/src/connect.ts#L49)

___

### smParams

• `Optional` **smParams**: `string`

石墨 SDK URL 参数 url?smParams={params}，用于传递石墨 SDK 内部需要的参数。

#### Defined in

[src/connect.ts:71](https://github.com/shimohq/shimo-js-sdk/blob/28322b5/src/connect.ts#L71)

___

### token

• **token**: `string`

用于您系统鉴权使用的 token

#### Defined in

[src/connect.ts:59](https://github.com/shimohq/shimo-js-sdk/blob/28322b5/src/connect.ts#L59)

## Methods

### generateUrl

▸ `Optional` **generateUrl**(`fileId`): `string`

生成插入到石墨文档中的链接，用于处理 @ 文件等功能需要插入的链接

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileId` | `string` |

#### Returns

`string`

#### Defined in

[src/connect.ts:87](https://github.com/shimohq/shimo-js-sdk/blob/28322b5/src/connect.ts#L87)

___

### getSignature

▸ `Optional` **getSignature**(): `Promise`<`string`\>

获取用于石墨 SDK 鉴权用的签名

**`deprecated`** use sdk.setSignature() instead

#### Returns

`Promise`<`string`\>

#### Defined in

[src/connect.ts:44](https://github.com/shimohq/shimo-js-sdk/blob/28322b5/src/connect.ts#L44)

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

[src/connect.ts:97](https://github.com/shimohq/shimo-js-sdk/blob/28322b5/src/connect.ts#L97)
