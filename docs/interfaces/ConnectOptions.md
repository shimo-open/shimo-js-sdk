[shimo-js-sdk](../README.md) / [Exports](../modules.md) / ConnectOptions

# Interface: ConnectOptions

## Table of contents

### Properties

- [appId](ConnectOptions.md#appid)
- [container](ConnectOptions.md#container)
- [endpoint](ConnectOptions.md#endpoint)
- [fileId](ConnectOptions.md#fileid)
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

[src/connect.ts:27](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/connect.ts#L27)

___

### container

• **container**: `HTMLElement`

iframe 挂载的目标容器

#### Defined in

[src/connect.ts:53](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/connect.ts#L53)

___

### endpoint

• **endpoint**: `string`

石墨 SDK 服务器地址

#### Defined in

[src/connect.ts:32](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/connect.ts#L32)

___

### fileId

• **fileId**: `string`

您要打开的文档 ID

#### Defined in

[src/connect.ts:37](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/connect.ts#L37)

___

### params

• `Optional` **params**: `Object`

添加到 iframe URLSearchParams 的参数列表

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/connect.ts:63](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/connect.ts#L63)

___

### signature

• `Optional` **signature**: `string`

用于石墨 SDK 鉴权用的签名

#### Defined in

[src/connect.ts:48](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/connect.ts#L48)

___

### smParams

• `Optional` **smParams**: `string`

石墨 SDK URL 参数 url?smParams={params}，用于传递石墨 SDK 内部需要的参数。

#### Defined in

[src/connect.ts:70](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/connect.ts#L70)

___

### token

• **token**: `string`

用于您系统鉴权使用的 token

#### Defined in

[src/connect.ts:58](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/connect.ts#L58)

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

[src/connect.ts:75](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/connect.ts#L75)

___

### getSignature

▸ `Optional` **getSignature**(): `Promise`<`string`\>

获取用于石墨 SDK 鉴权用的签名

**`deprecated`** use sdk.setSignature() instead

#### Returns

`Promise`<`string`\>

#### Defined in

[src/connect.ts:43](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/connect.ts#L43)

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

[src/connect.ts:85](https://github.com/shimohq/shimo-js-sdk/blob/d265a9d/src/connect.ts#L85)
