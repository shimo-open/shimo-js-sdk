[shimo-js-sdk](../README.md) / [Exports](../modules.md) / ShimoSDK

# Class: ShimoSDK

## Hierarchy

- `TinyEmitter`

  ↳ **`ShimoSDK`**

## Table of contents

### Constructors

- [constructor](ShimoSDK.md#constructor)

### Properties

- [document](ShimoSDK.md#document)
- [documentPro](ShimoSDK.md#documentpro)
- [element](ShimoSDK.md#element)
- [form](ShimoSDK.md#form)
- [presentation](ShimoSDK.md#presentation)
- [spreadsheet](ShimoSDK.md#spreadsheet)
- [table](ShimoSDK.md#table)
- [userUuid](ShimoSDK.md#useruuid)
- [uuid](ShimoSDK.md#uuid)

### Accessors

- [fileType](ShimoSDK.md#filetype)
- [readyState](ShimoSDK.md#readystate)

### Methods

- [disconnect](ShimoSDK.md#disconnect)
- [emit](ShimoSDK.md#emit)
- [getEditor](ShimoSDK.md#geteditor)
- [getPerformanceEntries](ShimoSDK.md#getperformanceentries)
- [init](ShimoSDK.md#init)
- [off](ShimoSDK.md#off)
- [on](ShimoSDK.md#on)
- [once](ShimoSDK.md#once)
- [setCredentials](ShimoSDK.md#setcredentials)
- [setSignature](ShimoSDK.md#setsignature)
- [setToken](ShimoSDK.md#settoken)

## Constructors

### constructor

• **new ShimoSDK**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ShimoSDKOptions`](../interfaces/ShimoSDKOptions.md) |

#### Overrides

TinyEmitter.constructor

#### Defined in

[src/ShimoSDK.ts:126](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L126)

## Properties

### document

• `Optional` **document**: [`Editor`](../interfaces/Document.Editor.md)

轻文档编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/ShimoSDK.ts:71](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L71)

___

### documentPro

• `Optional` **documentPro**: [`Editor`](../interfaces/DocumentPro.Editor.md)

传统文档编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/ShimoSDK.ts:65](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L65)

___

### element

• **element**: `HTMLIFrameElement`

编辑器页面对应的 iframe 元素。需要注意调整父元素大小来控制 iframe 大小。

#### Defined in

[src/ShimoSDK.ts:57](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L57)

___

### form

• `Optional` **form**: [`Editor`](../interfaces/Form.Editor.md)

表单编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/ShimoSDK.ts:95](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L95)

___

### presentation

• `Optional` **presentation**: [`Editor`](../interfaces/Presentation.Editor.md)

专业幻灯片编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/ShimoSDK.ts:83](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L83)

___

### spreadsheet

• `Optional` **spreadsheet**: [`Editor`](../interfaces/Spreadsheet.Editor.md)

表格编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/ShimoSDK.ts:77](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L77)

___

### table

• `Optional` **table**: [`Editor`](../interfaces/Table.Editor.md)

应用表格编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/ShimoSDK.ts:89](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L89)

___

### userUuid

• `Optional` `Readonly` **userUuid**: `string`

#### Defined in

[src/ShimoSDK.ts:59](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L59)

___

### uuid

• `Readonly` **uuid**: `string`

#### Defined in

[src/ShimoSDK.ts:58](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L58)

## Accessors

### fileType

• `get` **fileType**(): [`FileType`](../enums/FileType.md)

#### Returns

[`FileType`](../enums/FileType.md)

#### Defined in

[src/ShimoSDK.ts:223](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L223)

___

### readyState

• `get` **readyState**(): [`ReadyState`](../enums/ReadyState.md)

#### Returns

[`ReadyState`](../enums/ReadyState.md)

#### Defined in

[src/ShimoSDK.ts:227](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L227)

## Methods

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Defined in

[src/ShimoSDK.ts:284](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L284)

___

### emit

▸ **emit**(`event`, ...`args`): [`ShimoSDK`](ShimoSDK.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `...args` | `any`[] |

#### Returns

[`ShimoSDK`](ShimoSDK.md)

#### Inherited from

TinyEmitter.emit

#### Defined in

node_modules/tiny-emitter/index.d.ts:4

___

### getEditor

▸ **getEditor**<`T`\>(): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Editor`](../interfaces/DocumentPro.Editor.md) \| [`Editor`](../interfaces/Document.Editor.md) \| [`Editor`](../interfaces/Spreadsheet.Editor.md) \| [`Editor`](../interfaces/Presentation.Editor.md) \| [`Editor`](../interfaces/Table.Editor.md) \| [`Editor`](../interfaces/Form.Editor.md) \| [`BaseEditor`](../interfaces/BaseEditor.md)<{ [K: string]: `any`;  }\> = [`BaseEditor`](../interfaces/BaseEditor.md)<{ [K: string]: `any`;  }\> |

#### Returns

`T`

#### Defined in

[src/ShimoSDK.ts:231](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L231)

___

### getPerformanceEntries

▸ **getPerformanceEntries**(): `Promise`<[`PerformanceEntry`](../interfaces/PerformanceEntry.md)[]\>

获取性能信息片段列表，由于性能标记是分段的、异步的，因此每次调用时获取的列表有可能不一致

#### Returns

`Promise`<[`PerformanceEntry`](../interfaces/PerformanceEntry.md)[]\>

#### Defined in

[src/ShimoSDK.ts:276](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L276)

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

[src/ShimoSDK.ts:302](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L302)

___

### off

▸ **off**(`event`, `callback?`): [`ShimoSDK`](ShimoSDK.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback?` | `Function` |

#### Returns

[`ShimoSDK`](ShimoSDK.md)

#### Inherited from

TinyEmitter.off

#### Defined in

node_modules/tiny-emitter/index.d.ts:5

___

### on

▸ **on**(`event`, `callback`, `ctx?`): [`ShimoSDK`](ShimoSDK.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Function` |
| `ctx?` | `any` |

#### Returns

[`ShimoSDK`](ShimoSDK.md)

#### Inherited from

TinyEmitter.on

#### Defined in

node_modules/tiny-emitter/index.d.ts:2

___

### once

▸ **once**(`event`, `callback`, `ctx?`): [`ShimoSDK`](ShimoSDK.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Function` |
| `ctx?` | `any` |

#### Returns

[`ShimoSDK`](ShimoSDK.md)

#### Inherited from

TinyEmitter.once

#### Defined in

node_modules/tiny-emitter/index.d.ts:3

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

[src/ShimoSDK.ts:247](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L247)

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

[src/ShimoSDK.ts:257](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L257)

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

[src/ShimoSDK.ts:267](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/ShimoSDK.ts#L267)
