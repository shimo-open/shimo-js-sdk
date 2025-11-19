[shimo-js-sdk - v1.2.14](/README.md) / [DocumentPro](/modules/DocumentPro.md) / EventMap

# Interface: EventMap

[DocumentPro](/modules/DocumentPro.md).EventMap

## Hierarchy

- [`BaseEventMap`](/interfaces/BaseEventMap.md)

  ↳ **`EventMap`**

## Table of contents

### Properties

- [saveStatusChanged](/interfaces/DocumentPro.EventMap.md#savestatuschanged)
- [saveStatusDidChange](/interfaces/DocumentPro.EventMap.md#savestatusdidchange)
- [paramsChanged](/interfaces/DocumentPro.EventMap.md#paramschanged)
- [collaboratorsChanged](/interfaces/DocumentPro.EventMap.md#collaboratorschanged)
- [selectionEnded](/interfaces/DocumentPro.EventMap.md#selectionended)
- [documentChanged](/interfaces/DocumentPro.EventMap.md#documentchanged)
- [commentClicked](/interfaces/DocumentPro.EventMap.md#commentclicked)
- [documentRecalculated](/interfaces/DocumentPro.EventMap.md#documentrecalculated)
- [error](/interfaces/DocumentPro.EventMap.md#error)
- [MouseMove](/interfaces/DocumentPro.EventMap.md#mousemove)
- [VerticalScroll](/interfaces/DocumentPro.EventMap.md#verticalscroll)
- [HorizontalScroll](/interfaces/DocumentPro.EventMap.md#horizontalscroll)
- [showSignatureComponent](/interfaces/DocumentPro.EventMap.md#showsignaturecomponent)

## Properties

### saveStatusChanged

• **saveStatusChanged**: `Object`

保存状态发生变更

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"error"`` \| ``"saving"`` \| ``"saved"`` |

#### Inherited from

[BaseEventMap](/interfaces/BaseEventMap.md).[saveStatusChanged](/interfaces/BaseEventMap.md#savestatuschanged)

#### Defined in

[src/types/BaseEditor.ts:21](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L21)

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

[BaseEventMap](/interfaces/BaseEventMap.md).[saveStatusDidChange](/interfaces/BaseEventMap.md#savestatusdidchange)

#### Defined in

[src/types/BaseEditor.ts:32](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L32)

___

### paramsChanged

• **paramsChanged**: `Object`

用于类似表格打开定位到当前 tab 的用途。事件触发时，替换当前的 url 的 search params 参数，在初始化 JS SDK 时传入。

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `string` |

#### Inherited from

[BaseEventMap](/interfaces/BaseEventMap.md).[paramsChanged](/interfaces/BaseEventMap.md#paramschanged)

#### Defined in

[src/types/BaseEditor.ts:42](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L42)

___

### collaboratorsChanged

• **collaboratorsChanged**: `CollaboratorsChangedPayload`

协作者列表发生变更

#### Inherited from

[BaseEventMap](/interfaces/BaseEventMap.md).[collaboratorsChanged](/interfaces/BaseEventMap.md#collaboratorschanged)

#### Defined in

[src/types/BaseEditor.ts:49](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L49)

___

### selectionEnded

• **selectionEnded**: `Object`

#### Defined in

[src/types/DocumentPro.ts:88](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L88)

___

### documentChanged

• **documentChanged**: `Object`

#### Defined in

[src/types/DocumentPro.ts:89](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L89)

___

### commentClicked

• **commentClicked**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `commentIds?` | `string`[] | 所有被点击的评论ID列表  **`since`** 22.2.1 |

#### Defined in

[src/types/DocumentPro.ts:90](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L90)

___

### documentRecalculated

• **documentRecalculated**: `Object`

#### Defined in

[src/types/DocumentPro.ts:97](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L97)

___

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data?` | `any` | 错误信息 |
| `code` | `number` | 错误码 |

#### Defined in

[src/types/DocumentPro.ts:99](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L99)

___

### MouseMove

• **MouseMove**: [`MouseMovePayload`](/interfaces/MouseMovePayload.md)

鼠标移动事件

#### Defined in

[src/types/DocumentPro.ts:109](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L109)

___

### VerticalScroll

• **VerticalScroll**: [`MouseMovePayload`](/interfaces/MouseMovePayload.md)

垂直滚动事件

#### Defined in

[src/types/DocumentPro.ts:114](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L114)

___

### HorizontalScroll

• **HorizontalScroll**: [`MouseMovePayload`](/interfaces/MouseMovePayload.md)

水平滚动事件

#### Defined in

[src/types/DocumentPro.ts:119](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L119)

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

[src/types/DocumentPro.ts:124](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/DocumentPro.ts#L124)
