[shimo-js-sdk](../README.md) / [Exports](../modules.md) / ConnectOptions

# Interface: ConnectOptions

## Table of contents

### Properties

- [appId](ConnectOptions.md#appid)
- [container](ConnectOptions.md#container)
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

### appId

• **appId**: `string`

石墨 SDK 分配给您的 App ID

#### Defined in

[src/connect.ts:33](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/connect.ts#L33)

___

### container

• **container**: `HTMLElement`

iframe 挂载的目标容器

#### Defined in

[src/connect.ts:59](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/connect.ts#L59)

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

[src/connect.ts:117](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/connect.ts#L117)

___

### endpoint

• **endpoint**: `string`

石墨 SDK 服务器地址

#### Defined in

[src/connect.ts:38](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/connect.ts#L38)

___

### fileId

• **fileId**: `string`

您要打开的文档 ID

#### Defined in

[src/connect.ts:43](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/connect.ts#L43)

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

[src/connect.ts:87](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/connect.ts#L87)

___

### params

• `Optional` **params**: `Object`

添加到 iframe URLSearchParams 的参数列表

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[src/connect.ts:69](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/connect.ts#L69)

___

### signature

• `Optional` **signature**: `string`

用于石墨 SDK 鉴权用的签名

#### Defined in

[src/connect.ts:54](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/connect.ts#L54)

___

### smParams

• `Optional` **smParams**: `string`

石墨 SDK URL 参数 url?smParams={params}，用于传递石墨 SDK 内部需要的参数。

#### Defined in

[src/connect.ts:76](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/connect.ts#L76)

___

### token

• **token**: `string`

用于您系统鉴权使用的 token

#### Defined in

[src/connect.ts:64](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/connect.ts#L64)

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

[src/connect.ts:92](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/connect.ts#L92)

___

### getSignature

▸ `Optional` **getSignature**(): `Promise`<`string`\>

获取用于石墨 SDK 鉴权用的签名

**`deprecated`** use sdk.setSignature() instead

#### Returns

`Promise`<`string`\>

#### Defined in

[src/connect.ts:49](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/connect.ts#L49)

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

[src/connect.ts:137](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/connect.ts#L137)

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

[src/connect.ts:102](https://github.com/shimohq/shimo-js-sdk/blob/b1f4ecc/src/connect.ts#L102)
