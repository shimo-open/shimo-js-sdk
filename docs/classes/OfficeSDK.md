[shimo-js-sdk - v2.0.2](../README.md) / OfficeSDK

# Class: OfficeSDK

## Hierarchy

- `TinyEmitter`

  ↳ **`OfficeSDK`**

## Table of contents

### Constructors

- [constructor](OfficeSDK.md#constructor)

### Methods

- [on](OfficeSDK.md#on)
- [once](OfficeSDK.md#once)
- [emit](OfficeSDK.md#emit)
- [off](OfficeSDK.md#off)
- [getEditor](OfficeSDK.md#geteditor)
- [setCredentials](OfficeSDK.md#setcredentials)
- [setSignature](OfficeSDK.md#setsignature)
- [setToken](OfficeSDK.md#settoken)
- [getPerformanceEntries](OfficeSDK.md#getperformanceentries)
- [disconnect](OfficeSDK.md#disconnect)
- [init](OfficeSDK.md#init)

### Properties

- [element](OfficeSDK.md#element)
- [uuid](OfficeSDK.md#uuid)
- [userUuid](OfficeSDK.md#useruuid)
- [documentPro](OfficeSDK.md#documentpro)
- [document](OfficeSDK.md#document)
- [spreadsheet](OfficeSDK.md#spreadsheet)
- [presentation](OfficeSDK.md#presentation)
- [table](OfficeSDK.md#table)
- [form](OfficeSDK.md#form)
- [flowchart](OfficeSDK.md#flowchart)
- [headerBars](OfficeSDK.md#headerbars)

### Accessors

- [fileType](OfficeSDK.md#filetype)
- [readyState](OfficeSDK.md#readystate)

## Constructors

### constructor

• **new OfficeSDK**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`OfficeSDKOptions`](../interfaces/OfficeSDKOptions.md) |

#### Overrides

TinyEmitter.constructor

#### Defined in

[src/OfficeSDK.ts:226](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L226)

## Methods

### on

▸ **on**(`event`, `callback`, `ctx?`): [`OfficeSDK`](OfficeSDK.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Function` |
| `ctx?` | `any` |

#### Returns

[`OfficeSDK`](OfficeSDK.md)

#### Inherited from

TinyEmitter.on

#### Defined in

node_modules/tiny-emitter/index.d.ts:2

___

### once

▸ **once**(`event`, `callback`, `ctx?`): [`OfficeSDK`](OfficeSDK.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback` | `Function` |
| `ctx?` | `any` |

#### Returns

[`OfficeSDK`](OfficeSDK.md)

#### Inherited from

TinyEmitter.once

#### Defined in

node_modules/tiny-emitter/index.d.ts:3

___

### emit

▸ **emit**(`event`, ...`args`): [`OfficeSDK`](OfficeSDK.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `...args` | `any`[] |

#### Returns

[`OfficeSDK`](OfficeSDK.md)

#### Inherited from

TinyEmitter.emit

#### Defined in

node_modules/tiny-emitter/index.d.ts:4

___

### off

▸ **off**(`event`, `callback?`): [`OfficeSDK`](OfficeSDK.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `callback?` | `Function` |

#### Returns

[`OfficeSDK`](OfficeSDK.md)

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
| `T` | extends [`Editor`](../interfaces/DocumentPro.Editor.md) \| [`Editor`](../interfaces/Document.Editor.md) \| [`Editor`](../interfaces/Spreadsheet.Editor.md) \| [`Editor`](../interfaces/Presentation.Editor.md) \| [`Editor`](../interfaces/Table.Editor.md) \| [`Editor`](../interfaces/Form.Editor.md) \| [`Editor`](../interfaces/Flowchart.Editor.md) \| [`BaseEditor`](../interfaces/BaseEditor.md)<{ [K: string]: `any`;  }\> = [`BaseEditor`](../interfaces/BaseEditor.md)<{ [K: string]: `any`;  }\> |

#### Returns

`T`

#### Defined in

[src/OfficeSDK.ts:336](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L336)

___

### setCredentials

▸ **setCredentials**(`payload`): `Promise`<`void`\>

更新鉴权 signature 和 token

**`deprecated`** - 用 `OfficeSDKOptions.getCredentials()` 替代

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Object` |
| `payload.signature` | `string` |
| `payload.token` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/OfficeSDK.ts:354](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L354)

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

[src/OfficeSDK.ts:364](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L364)

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

[src/OfficeSDK.ts:374](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L374)

___

### getPerformanceEntries

▸ **getPerformanceEntries**(): `Promise`<[`PerformanceEntry`](../interfaces/PerformanceEntry.md)[]\>

获取性能信息片段列表，由于性能标记是分段的、异步的，因此每次调用时获取的列表有可能不一致

#### Returns

`Promise`<[`PerformanceEntry`](../interfaces/PerformanceEntry.md)[]\>

#### Defined in

[src/OfficeSDK.ts:383](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L383)

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Defined in

[src/OfficeSDK.ts:393](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L393)

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

[src/OfficeSDK.ts:411](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L411)

## Properties

### element

• **element**: `HTMLIFrameElement`

编辑器页面对应的 iframe 元素。需要注意调整父元素大小来控制 iframe 大小。

#### Defined in

[src/OfficeSDK.ts:129](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L129)

___

### uuid

• `Readonly` **uuid**: `string`

#### Defined in

[src/OfficeSDK.ts:130](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L130)

___

### userUuid

• `Optional` `Readonly` **userUuid**: `string`

#### Defined in

[src/OfficeSDK.ts:131](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L131)

___

### documentPro

• `Optional` **documentPro**: [`Editor`](../interfaces/DocumentPro.Editor.md)

传统文档编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/OfficeSDK.ts:137](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L137)

___

### document

• `Optional` **document**: [`Editor`](../interfaces/Document.Editor.md)

轻文档编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/OfficeSDK.ts:143](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L143)

___

### spreadsheet

• `Optional` **spreadsheet**: [`Editor`](../interfaces/Spreadsheet.Editor.md)

表格编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/OfficeSDK.ts:149](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L149)

___

### presentation

• `Optional` **presentation**: [`Editor`](../interfaces/Presentation.Editor.md)

专业幻灯片编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/OfficeSDK.ts:155](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L155)

___

### table

• `Optional` **table**: [`Editor`](../interfaces/Table.Editor.md)

应用表格编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/OfficeSDK.ts:161](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L161)

___

### form

• `Optional` **form**: [`Editor`](../interfaces/Form.Editor.md)

表单编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/OfficeSDK.ts:167](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L167)

___

### flowchart

• `Optional` **flowchart**: [`Editor`](../interfaces/Flowchart.Editor.md)

图谱编辑器实例

**`deprecated`** - 用 `sdk.getEditor<T>()` 替代

#### Defined in

[src/OfficeSDK.ts:173](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L173)

___

### headerBars

• `Readonly` **headerBars**: [`HeaderBarsFacade`](../interfaces/HeaderBarsFacade.md)

#### Defined in

[src/OfficeSDK.ts:174](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L174)

## Accessors

### fileType

• `get` **fileType**(): [`FileType`](../enums/FileType.md)

#### Returns

[`FileType`](../enums/FileType.md)

#### Defined in

[src/OfficeSDK.ts:328](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L328)

___

### readyState

• `get` **readyState**(): [`ReadyState`](../enums/ReadyState.md)

#### Returns

[`ReadyState`](../enums/ReadyState.md)

#### Defined in

[src/OfficeSDK.ts:332](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L332)
