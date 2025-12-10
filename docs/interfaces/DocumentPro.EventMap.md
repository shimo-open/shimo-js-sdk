[shimo-js-sdk - v1.2.23](../README.md) / [DocumentPro](../modules/DocumentPro.md) / EventMap

# Interface: EventMap

[DocumentPro](../modules/DocumentPro.md).EventMap

## Hierarchy

- [`BaseEventMap`](BaseEventMap.md)

  ↳ **`EventMap`**

## Table of contents

### Properties

- [saveStatusChanged](DocumentPro.EventMap.md#savestatuschanged)
- [saveStatusDidChange](DocumentPro.EventMap.md#savestatusdidchange)
- [paramsChanged](DocumentPro.EventMap.md#paramschanged)
- [collaboratorsChanged](DocumentPro.EventMap.md#collaboratorschanged)
- [selectionEnded](DocumentPro.EventMap.md#selectionended)
- [documentChanged](DocumentPro.EventMap.md#documentchanged)
- [commentClicked](DocumentPro.EventMap.md#commentclicked)
- [documentRecalculated](DocumentPro.EventMap.md#documentrecalculated)
- [error](DocumentPro.EventMap.md#error)
- [MouseMove](DocumentPro.EventMap.md#mousemove)
- [VerticalScroll](DocumentPro.EventMap.md#verticalscroll)
- [HorizontalScroll](DocumentPro.EventMap.md#horizontalscroll)
- [showSignatureComponent](DocumentPro.EventMap.md#showsignaturecomponent)

## Properties

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

[src/types/BaseEditor.ts:21](https://github.com/byte9527/shimo-js-sdk/blob/6fe2b75/src/types/BaseEditor.ts#L21)

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

[src/types/BaseEditor.ts:32](https://github.com/byte9527/shimo-js-sdk/blob/6fe2b75/src/types/BaseEditor.ts#L32)

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

[src/types/BaseEditor.ts:42](https://github.com/byte9527/shimo-js-sdk/blob/6fe2b75/src/types/BaseEditor.ts#L42)

___

### collaboratorsChanged

• **collaboratorsChanged**: `CollaboratorsChangedPayload`

协作者列表发生变更

#### Inherited from

[BaseEventMap](BaseEventMap.md).[collaboratorsChanged](BaseEventMap.md#collaboratorschanged)

#### Defined in

[src/types/BaseEditor.ts:49](https://github.com/byte9527/shimo-js-sdk/blob/6fe2b75/src/types/BaseEditor.ts#L49)

___

### selectionEnded

• **selectionEnded**: `Object`

#### Defined in

[src/types/DocumentPro.ts:88](https://github.com/byte9527/shimo-js-sdk/blob/6fe2b75/src/types/DocumentPro.ts#L88)

___

### documentChanged

• **documentChanged**: `Object`

#### Defined in

[src/types/DocumentPro.ts:89](https://github.com/byte9527/shimo-js-sdk/blob/6fe2b75/src/types/DocumentPro.ts#L89)

___

### commentClicked

• **commentClicked**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `commentIds?` | `string`[] | 所有被点击的评论ID列表  **`since`** 22.2.1 |

#### Defined in

[src/types/DocumentPro.ts:90](https://github.com/byte9527/shimo-js-sdk/blob/6fe2b75/src/types/DocumentPro.ts#L90)

___

### documentRecalculated

• **documentRecalculated**: `Object`

#### Defined in

[src/types/DocumentPro.ts:97](https://github.com/byte9527/shimo-js-sdk/blob/6fe2b75/src/types/DocumentPro.ts#L97)

___

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data?` | `any` | 错误信息 |
| `code` | `number` | 错误码 |

#### Defined in

[src/types/DocumentPro.ts:99](https://github.com/byte9527/shimo-js-sdk/blob/6fe2b75/src/types/DocumentPro.ts#L99)

___

### MouseMove

• **MouseMove**: [`MouseMovePayload`](MouseMovePayload.md)

鼠标移动事件

#### Defined in

[src/types/DocumentPro.ts:109](https://github.com/byte9527/shimo-js-sdk/blob/6fe2b75/src/types/DocumentPro.ts#L109)

___

### VerticalScroll

• **VerticalScroll**: [`MouseMovePayload`](MouseMovePayload.md)

垂直滚动事件

#### Defined in

[src/types/DocumentPro.ts:114](https://github.com/byte9527/shimo-js-sdk/blob/6fe2b75/src/types/DocumentPro.ts#L114)

___

### HorizontalScroll

• **HorizontalScroll**: [`MouseMovePayload`](MouseMovePayload.md)

水平滚动事件

#### Defined in

[src/types/DocumentPro.ts:119](https://github.com/byte9527/shimo-js-sdk/blob/6fe2b75/src/types/DocumentPro.ts#L119)

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

[src/types/DocumentPro.ts:124](https://github.com/byte9527/shimo-js-sdk/blob/6fe2b75/src/types/DocumentPro.ts#L124)
