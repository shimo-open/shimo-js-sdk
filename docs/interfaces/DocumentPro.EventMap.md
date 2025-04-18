[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [DocumentPro](../modules/DocumentPro.md) / EventMap

# Interface: EventMap

[DocumentPro](../modules/DocumentPro.md).EventMap

## Hierarchy

- [`BaseEventMap`](BaseEventMap.md)

  ↳ **`EventMap`**

## Table of contents

### Properties

- [HorizontalScroll](DocumentPro.EventMap.md#horizontalscroll)
- [MouseMove](DocumentPro.EventMap.md#mousemove)
- [VerticalScroll](DocumentPro.EventMap.md#verticalscroll)
- [commentClicked](DocumentPro.EventMap.md#commentclicked)
- [documentChanged](DocumentPro.EventMap.md#documentchanged)
- [documentRecalculated](DocumentPro.EventMap.md#documentrecalculated)
- [error](DocumentPro.EventMap.md#error)
- [paramsChanged](DocumentPro.EventMap.md#paramschanged)
- [saveStatusChanged](DocumentPro.EventMap.md#savestatuschanged)
- [saveStatusDidChange](DocumentPro.EventMap.md#savestatusdidchange)
- [selectionEnded](DocumentPro.EventMap.md#selectionended)
- [showSignatureComponent](DocumentPro.EventMap.md#showsignaturecomponent)

## Properties

### HorizontalScroll

• **HorizontalScroll**: [`MouseMovePayload`](MouseMovePayload.md)

水平滚动事件

#### Defined in

[src/types/DocumentPro.ts:119](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/DocumentPro.ts#L119)

___

### MouseMove

• **MouseMove**: [`MouseMovePayload`](MouseMovePayload.md)

鼠标移动事件

#### Defined in

[src/types/DocumentPro.ts:109](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/DocumentPro.ts#L109)

___

### VerticalScroll

• **VerticalScroll**: [`MouseMovePayload`](MouseMovePayload.md)

垂直滚动事件

#### Defined in

[src/types/DocumentPro.ts:114](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/DocumentPro.ts#L114)

___

### commentClicked

• **commentClicked**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `commentIds?` | `string`[] | 所有被点击的评论ID列表  **`since`** 22.2.1 |

#### Defined in

[src/types/DocumentPro.ts:90](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/DocumentPro.ts#L90)

___

### documentChanged

• **documentChanged**: `Object`

#### Defined in

[src/types/DocumentPro.ts:89](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/DocumentPro.ts#L89)

___

### documentRecalculated

• **documentRecalculated**: `Object`

#### Defined in

[src/types/DocumentPro.ts:97](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/DocumentPro.ts#L97)

___

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | 错误码 |
| `data?` | `any` | 错误信息 |

#### Defined in

[src/types/DocumentPro.ts:99](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/DocumentPro.ts#L99)

___

### paramsChanged

• **paramsChanged**: `Object`

用于类似表格打开定位到当前 tab 的用途。事件触发时，替换当前的 url 的 search params 参数，在初始化 JS SDK 时传入。

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `string` |

#### Inherited from

[BaseEventMap](BaseEventMap.md).[paramsChanged](BaseEventMap.md#paramschanged)

#### Defined in

[src/types/BaseEditor.ts:26](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/BaseEditor.ts#L26)

___

### saveStatusChanged

• **saveStatusChanged**: `Object`

保存状态发生变更

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"error"`` \| ``"saving"`` \| ``"saved"`` |

#### Inherited from

[BaseEventMap](BaseEventMap.md).[saveStatusChanged](BaseEventMap.md#savestatuschanged)

#### Defined in

[src/types/BaseEditor.ts:5](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/BaseEditor.ts#L5)

___

### saveStatusDidChange

• **saveStatusDidChange**: `Object`

保存状态发生变更

**`deprecated`** - use saveStatusChanged

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"error"`` \| ``"saving"`` \| ``"saved"`` |

#### Inherited from

[BaseEventMap](BaseEventMap.md).[saveStatusDidChange](BaseEventMap.md#savestatusdidchange)

#### Defined in

[src/types/BaseEditor.ts:16](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/BaseEditor.ts#L16)

___

### selectionEnded

• **selectionEnded**: `Object`

#### Defined in

[src/types/DocumentPro.ts:88](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/DocumentPro.ts#L88)

___

### showSignatureComponent

• **showSignatureComponent**: `Object`

请求打开签名组件

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `aspectRatio` | `number` | 签名图片的宽高比 |
| `id` | `string` | 该签名图片的唯一 ID，用于在 `updateSignature()` 时指定想更新的签名组件 |

#### Defined in

[src/types/DocumentPro.ts:124](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/DocumentPro.ts#L124)
