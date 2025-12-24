[shimo-js-sdk - v1.2.24](../README.md) / ContainerMethods

# Interface: ContainerMethods

需要容器提供给编辑器使用的方法

## Table of contents

### Methods

- [getContainerRect](ContainerMethods.md#getcontainerrect)
- [openLink](ContainerMethods.md#openlink)
- [mentionClickHandlerForMobile](ContainerMethods.md#mentionclickhandlerformobile)
- [getFileInfoFromUrl](ContainerMethods.md#getfileinfofromurl)
- [showToast](ContainerMethods.md#showtoast)
- [handleCustomTask](ContainerMethods.md#handlecustomtask)
- [getCredentials](ContainerMethods.md#getcredentials)

### Properties

- [generateUrl](ContainerMethods.md#generateurl)

## Methods

### getContainerRect

▸ `Optional` **getContainerRect**(): [`ContainerRect`](ContainerRect.md)

获取容器尺寸等信息

#### Returns

[`ContainerRect`](ContainerRect.md)

#### Defined in

[src/ShimoSDK.ts:937](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/ShimoSDK.ts#L937)

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

[src/ShimoSDK.ts:942](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/ShimoSDK.ts#L942)

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

#### Defined in

[src/ShimoSDK.ts:962](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/ShimoSDK.ts#L962)

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

#### Defined in

[src/ShimoSDK.ts:969](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/ShimoSDK.ts#L969)

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

#### Defined in

[src/ShimoSDK.ts:982](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/ShimoSDK.ts#L982)

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

#### Defined in

[src/ShimoSDK.ts:987](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/ShimoSDK.ts#L987)

___

### getCredentials

▸ **getCredentials**(): `Promise`<[`Credentials`](Credentials.md)\>

请求容器获取鉴权信息

#### Returns

`Promise`<[`Credentials`](Credentials.md)\>

鉴权信息

#### Defined in

[src/ShimoSDK.ts:992](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/ShimoSDK.ts#L992)

## Properties

### generateUrl

• `Optional` **generateUrl**: [`GenerateUrlHandler`](../README.md#generateurlhandler)

生成插入到石墨文档中的链接，用于处理 @ 文件等功能需要插入的链接

#### Defined in

[src/ShimoSDK.ts:957](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/ShimoSDK.ts#L957)
