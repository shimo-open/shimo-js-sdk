[shimo-js-sdk](../README.md) / [Exports](../modules.md) / ContainerMethods

# Interface: ContainerMethods

需要容器提供给编辑器使用的方法

## Table of contents

### Properties

- [generateUrl](ContainerMethods.md#generateurl)

### Methods

- [getContainerRect](ContainerMethods.md#getcontainerrect)
- [getFileInfoFromUrl](ContainerMethods.md#getfileinfofromurl)
- [handleCustomTask](ContainerMethods.md#handlecustomtask)
- [mentionClickHandlerForMobile](ContainerMethods.md#mentionclickhandlerformobile)
- [openLink](ContainerMethods.md#openlink)
- [showToast](ContainerMethods.md#showtoast)

## Properties

### generateUrl

• `Optional` **generateUrl**: [`GenerateUrlHandler`](../modules.md#generateurlhandler)

生成插入到石墨文档中的链接，用于处理 @ 文件等功能需要插入的链接

#### Defined in

[src/ShimoSDK.ts:788](https://github.com/shimohq/shimo-js-sdk/blob/1c554f1/src/ShimoSDK.ts#L788)

## Methods

### getContainerRect

▸ `Optional` **getContainerRect**(): [`ContainerRect`](ContainerRect.md)

获取容器尺寸等信息

#### Returns

[`ContainerRect`](ContainerRect.md)

#### Defined in

[src/ShimoSDK.ts:768](https://github.com/shimohq/shimo-js-sdk/blob/1c554f1/src/ShimoSDK.ts#L768)

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

[src/ShimoSDK.ts:800](https://github.com/shimohq/shimo-js-sdk/blob/1c554f1/src/ShimoSDK.ts#L800)

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

[src/ShimoSDK.ts:818](https://github.com/shimohq/shimo-js-sdk/blob/1c554f1/src/ShimoSDK.ts#L818)

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

[src/ShimoSDK.ts:793](https://github.com/shimohq/shimo-js-sdk/blob/1c554f1/src/ShimoSDK.ts#L793)

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

[src/ShimoSDK.ts:773](https://github.com/shimohq/shimo-js-sdk/blob/1c554f1/src/ShimoSDK.ts#L773)

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

[src/ShimoSDK.ts:813](https://github.com/shimohq/shimo-js-sdk/blob/1c554f1/src/ShimoSDK.ts#L813)
