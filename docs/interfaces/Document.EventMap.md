[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Document](../modules/Document.md) / EventMap

# Interface: EventMap

[Document](../modules/Document.md).EventMap

## Hierarchy

- `BaseEventMap`

  ↳ **`EventMap`**

## Table of contents

### Properties

- [HorizontalScroll](Document.EventMap.md#horizontalscroll)
- [MouseMove](Document.EventMap.md#mousemove)
- [VerticalScroll](Document.EventMap.md#verticalscroll)
- [saveStatusChanged](Document.EventMap.md#savestatuschanged)
- [saveStatusDidChange](Document.EventMap.md#savestatusdidchange)
- [titleChange](Document.EventMap.md#titlechange)

## Properties

### HorizontalScroll

• **HorizontalScroll**: `MouseMovePayload`

水平滚动事件

#### Defined in

[src/types/Document.ts:54](https://github.com/shimohq/shimo-js-sdk/blob/41c12ea/src/types/Document.ts#L54)

___

### MouseMove

• **MouseMove**: `MouseMovePayload`

鼠标移动事件

#### Defined in

[src/types/Document.ts:44](https://github.com/shimohq/shimo-js-sdk/blob/41c12ea/src/types/Document.ts#L44)

___

### VerticalScroll

• **VerticalScroll**: `MouseMovePayload`

垂直滚动事件

#### Defined in

[src/types/Document.ts:49](https://github.com/shimohq/shimo-js-sdk/blob/41c12ea/src/types/Document.ts#L49)

___

### saveStatusChanged

• **saveStatusChanged**: `Object`

保存状态发生变更

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Defined in

[src/types/Document.ts:24](https://github.com/shimohq/shimo-js-sdk/blob/41c12ea/src/types/Document.ts#L24)

___

### saveStatusDidChange

• **saveStatusDidChange**: `Object`

**`deprecated`**
保存状态发生变更

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Defined in

[src/types/Document.ts:14](https://github.com/shimohq/shimo-js-sdk/blob/41c12ea/src/types/Document.ts#L14)

___

### titleChange

• **titleChange**: `Object`

标题发生变更

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | 新的标题 |

#### Defined in

[src/types/Document.ts:34](https://github.com/shimohq/shimo-js-sdk/blob/41c12ea/src/types/Document.ts#L34)
