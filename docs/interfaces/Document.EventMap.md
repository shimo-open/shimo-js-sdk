[shimo-js-sdk - v1.2.25](../README.md) / [Document](../modules/Document.md) / EventMap

# Interface: EventMap

[Document](../modules/Document.md).EventMap

## Hierarchy

- [`BaseEventMap`](BaseEventMap.md)

  ↳ **`EventMap`**

## Table of contents

### Properties

- [saveStatusChanged](Document.EventMap.md#savestatuschanged)
- [saveStatusDidChange](Document.EventMap.md#savestatusdidchange)
- [paramsChanged](Document.EventMap.md#paramschanged)
- [collaboratorsChanged](Document.EventMap.md#collaboratorschanged)
- [titleChange](Document.EventMap.md#titlechange)
- [MouseMove](Document.EventMap.md#mousemove)
- [VerticalScroll](Document.EventMap.md#verticalscroll)
- [HorizontalScroll](Document.EventMap.md#horizontalscroll)

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

[src/types/BaseEditor.ts:21](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/BaseEditor.ts#L21)

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

[src/types/BaseEditor.ts:32](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/BaseEditor.ts#L32)

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

[src/types/BaseEditor.ts:42](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/BaseEditor.ts#L42)

___

### collaboratorsChanged

• **collaboratorsChanged**: `CollaboratorsChangedPayload`

协作者列表发生变更

#### Inherited from

[BaseEventMap](BaseEventMap.md).[collaboratorsChanged](BaseEventMap.md#collaboratorschanged)

#### Defined in

[src/types/BaseEditor.ts:49](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/BaseEditor.ts#L49)

___

### titleChange

• **titleChange**: `string`

标题发生变更

#### Defined in

[src/types/Document.ts:18](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L18)

___

### MouseMove

• **MouseMove**: [`MouseMovePayload`](MouseMovePayload.md)

鼠标移动事件

#### Defined in

[src/types/Document.ts:23](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L23)

___

### VerticalScroll

• **VerticalScroll**: [`MouseMovePayload`](MouseMovePayload.md)

垂直滚动事件

#### Defined in

[src/types/Document.ts:28](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L28)

___

### HorizontalScroll

• **HorizontalScroll**: [`MouseMovePayload`](MouseMovePayload.md)

水平滚动事件

#### Defined in

[src/types/Document.ts:33](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Document.ts#L33)
