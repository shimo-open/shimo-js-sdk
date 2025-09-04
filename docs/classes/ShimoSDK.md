[shimo-js-sdk - v1.2.12](/README.md) / ShimoSDK

# Class: ShimoSDK

## Hierarchy

- `TinyEmitter`

  ↳ **`ShimoSDK`**

## Table of contents

### Constructors

- [constructor](/classes/ShimoSDK.md#constructor)

### Methods

- [on](/classes/ShimoSDK.md#on)
- [once](/classes/ShimoSDK.md#once)
- [emit](/classes/ShimoSDK.md#emit)
- [off](/classes/ShimoSDK.md#off)
- [getEditor](/classes/ShimoSDK.md#geteditor)
- [setCredentials](/classes/ShimoSDK.md#setcredentials)
- [setSignature](/classes/ShimoSDK.md#setsignature)
- [setToken](/classes/ShimoSDK.md#settoken)
- [getPerformanceEntries](/classes/ShimoSDK.md#getperformanceentries)
- [disconnect](/classes/ShimoSDK.md#disconnect)
- [init](/classes/ShimoSDK.md#init)

### Properties

- [element](/classes/ShimoSDK.md#element)
- [uuid](/classes/ShimoSDK.md#uuid)
- [userUuid](/classes/ShimoSDK.md#useruuid)
- [documentPro](/classes/ShimoSDK.md#documentpro)
- [document](/classes/ShimoSDK.md#document)
- [spreadsheet](/classes/ShimoSDK.md#spreadsheet)
- [presentation](/classes/ShimoSDK.md#presentation)
- [table](/classes/ShimoSDK.md#table)
- [form](/classes/ShimoSDK.md#form)
- [flowchart](/classes/ShimoSDK.md#flowchart)

### Accessors

- [fileType](/classes/ShimoSDK.md#filetype)
- [readyState](/classes/ShimoSDK.md#readystate)

## Constructors

### constructor

• **new ShimoSDK**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ShimoSDKOptions`](/interfaces/ShimoSDKOptions.md) |

#### Overrides

TinyEmitter.constructor

#### Defined in

[src/ShimoSDK.ts:133](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L133)

## Methods

### on

▸ **on**(`event`, `callback`, `ctx?`): [`ShimoSDK`](/classes/ShimoSDK.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Function` |
| `ctx?` | `any` |

#### Returns

[`ShimoSDK`](/classes/ShimoSDK.md)

#### Inherited from

TinyEmitter.on

#### Defined in

node_modules/tiny-emitter/index.d.ts:2

___

### once

▸ **once**(`event`, `callback`, `ctx?`): [`ShimoSDK`](/classes/ShimoSDK.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Function` |
| `ctx?` | `any` |

#### Returns

[`ShimoSDK`](/classes/ShimoSDK.md)

#### Inherited from

TinyEmitter.once

#### Defined in

node_modules/tiny-emitter/index.d.ts:3

___

### emit

▸ **emit**(`event`, ...`args`): [`ShimoSDK`](/classes/ShimoSDK.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `...args` | `any`[] |

#### Returns

[`ShimoSDK`](/classes/ShimoSDK.md)

#### Inherited from

TinyEmitter.emit

#### Defined in

node_modules/tiny-emitter/index.d.ts:4

___

### off

▸ **off**(`event`, `callback?`): [`ShimoSDK`](/classes/ShimoSDK.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback?` | `Function` |

#### Returns

[`ShimoSDK`](/classes/ShimoSDK.md)

#### Inherited from

TinyEmitter.off

#### Defined in

node_modules/tiny-emitter/index.d.ts:5

___

### getEditor

▸ **getEditor**<`T`\>(): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Editor`](/interfaces/DocumentPro.Editor.md) \| [`Editor`](/interfaces/Document.Editor.md) \| [`Editor`](/interfaces/Spreadsheet.Editor.md) \| [`Editor`](/interfaces/Presentation.Editor.md) \| [`Editor`](/interfaces/Table.Editor.md) \| [`Editor`](/interfaces/Form.Editor.md) \| [`Editor`](/interfaces/Flowchart.Editor.md) \| [`BaseEditor`](/interfaces/BaseEditor.md)<{ [K: string]: `any`;  }\> = [`BaseEditor`](/interfaces/BaseEditor.md)<{ [K: string]: `any`;  }\> |

#### Returns

`T`

#### Defined in

[src/ShimoSDK.ts:238](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L238)

___

### setCredentials

▸ **setCredentials**(`payload`): `Promise`<`void`\>

更新鉴权 signature 和 token

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Object` |
| `payload.signature` | `string` |
| `payload.token` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/ShimoSDK.ts:255](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L255)

___

### setSignature

▸ **setSignature**(`signature`): `Promise`<`void`\>

设置石墨的鉴权 signature。用于实时更新鉴权信息，优化用户出现因长时间放置，鉴权失败而引起的体验问题。

**`deprecated`** - 用 `sdk.setCredentials()` 替代

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/ShimoSDK.ts:265](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L265)

___

### setToken

▸ **setToken**(`token`): `Promise`<`void`\>

设置您系统的鉴权 token。用于实时更新鉴权信息，优化用户出现因长时间放置，鉴权失败而引起的体验问题。

**`deprecated`** - 用 `sdk.setCredentials()` 替代

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/ShimoSDK.ts:275](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L275)

___

### getPerformanceEntries

▸ **getPerformanceEntries**(): `Promise`<[`PerformanceEntry`](/interfaces/PerformanceEntry.md)[]\>

获取性能信息片段列表，由于性能标记是分段的、异步的，因此每次调用时获取的列表有可能不一致

#### Returns

`Promise`<[`PerformanceEntry`](/interfaces/PerformanceEntry.md)[]\>

#### Defined in

[src/ShimoSDK.ts:284](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L284)

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Defined in

[src/ShimoSDK.ts:292](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L292)

___

### init

▸ **init**(): `Promise`<`void`\>

初始化 SDK，返回 Promise，当 ReadState 变为 Ready 或 Failed 时，Promise 将被 resolve。
Promise resovled 不代表编辑器已经完整加载完毕，只代表 SDK 已经准备好了。
同时 Promise 一直 pending 也不代表编辑器加载失败，只代表无法通过 SDK 和编辑器交互。
比如受浏览器限制无法发出 postMessage() 时，Promise 将会一直 pending。

#### Returns

`Promise`<`void`\>

#### Defined in

[src/ShimoSDK.ts:310](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L310)

## Properties

### element

• **element**: `HTMLIFrameElement`

编辑器页面对应的 iframe 元素。需要注意调整父元素大小来控制 iframe 大小。

#### Defined in

[src/ShimoSDK.ts:58](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L58)

___

### uuid

• `Readonly` **uuid**: `string`

#### Defined in

[src/ShimoSDK.ts:59](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L59)

___

### userUuid

• `Optional` `Readonly` **userUuid**: `string`

#### Defined in

[src/ShimoSDK.ts:60](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L60)

___

### documentPro

• `Optional` **documentPro**: [`Editor`](/interfaces/DocumentPro.Editor.md)

传统文档编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/ShimoSDK.ts:66](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L66)

___

### document

• `Optional` **document**: [`Editor`](/interfaces/Document.Editor.md)

轻文档编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/ShimoSDK.ts:72](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L72)

___

### spreadsheet

• `Optional` **spreadsheet**: [`Editor`](/interfaces/Spreadsheet.Editor.md)

表格编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/ShimoSDK.ts:78](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L78)

___

### presentation

• `Optional` **presentation**: [`Editor`](/interfaces/Presentation.Editor.md)

专业幻灯片编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/ShimoSDK.ts:84](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L84)

___

### table

• `Optional` **table**: [`Editor`](/interfaces/Table.Editor.md)

应用表格编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/ShimoSDK.ts:90](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L90)

___

### form

• `Optional` **form**: [`Editor`](/interfaces/Form.Editor.md)

表单编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/ShimoSDK.ts:96](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L96)

___

### flowchart

• `Optional` **flowchart**: [`Editor`](/interfaces/Flowchart.Editor.md)

图谱编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/ShimoSDK.ts:102](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L102)

## Accessors

### fileType

• `get` **fileType**(): [`FileType`](/enums/FileType.md)

#### Returns

[`FileType`](/enums/FileType.md)

#### Defined in

[src/ShimoSDK.ts:230](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L230)

___

### readyState

• `get` **readyState**(): [`ReadyState`](/enums/ReadyState.md)

#### Returns

[`ReadyState`](/enums/ReadyState.md)

#### Defined in

[src/ShimoSDK.ts:234](https://github.com/byte9527/shimo-js-sdk/blob/main/src/ShimoSDK.ts#L234)
