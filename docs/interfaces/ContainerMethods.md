[shimo-js-sdk - v1.2.18](/README.md) / ContainerMethods

# Interface: ContainerMethods

需要容器提供给编辑器使用的方法

## Table of contents

### Methods

- [getContainerRect](/interfaces/ContainerMethods.md#getcontainerrect)
- [openLink](/interfaces/ContainerMethods.md#openlink)
- [mentionClickHandlerForMobile](/interfaces/ContainerMethods.md#mentionclickhandlerformobile)
- [getFileInfoFromUrl](/interfaces/ContainerMethods.md#getfileinfofromurl)
- [showToast](/interfaces/ContainerMethods.md#showtoast)
- [handleCustomTask](/interfaces/ContainerMethods.md#handlecustomtask)

### Properties

- [generateUrl](/interfaces/ContainerMethods.md#generateurl)

## Methods

### getContainerRect

▸ `Optional` **getContainerRect**(): [`ContainerRect`](/interfaces/ContainerRect.md)

获取容器尺寸等信息

#### Returns

[`ContainerRect`](/interfaces/ContainerRect.md)

#### Defined in

[src/ShimoSDK.ts:916](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L916)

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

[src/ShimoSDK.ts:921](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L921)

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

#### Defined in

[src/ShimoSDK.ts:941](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L941)

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

[src/ShimoSDK.ts:948](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L948)

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

#### Defined in

[src/ShimoSDK.ts:961](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L961)

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

[src/ShimoSDK.ts:966](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L966)

## Properties

### generateUrl

• `Optional` **generateUrl**: [`GenerateUrlHandler`](/README.md#generateurlhandler)

生成插入到石墨文档中的链接，用于处理 @ 文件等功能需要插入的链接

#### Defined in

[src/ShimoSDK.ts:936](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L936)
