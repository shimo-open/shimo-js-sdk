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

[src/types/Document.ts:56](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/Document.ts#L56)

___

### MouseMove

• **MouseMove**: `MouseMovePayload`

鼠标移动事件

#### Defined in

[src/types/Document.ts:46](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/Document.ts#L46)

___

### VerticalScroll

• **VerticalScroll**: `MouseMovePayload`

垂直滚动事件

#### Defined in

[src/types/Document.ts:51](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/Document.ts#L51)

___

### saveStatusChanged

• **saveStatusChanged**: `Object`

保存状态发生变更

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Defined in

[src/types/Document.ts:26](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/Document.ts#L26)

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

[src/types/Document.ts:16](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/Document.ts#L16)

___

### titleChange

• **titleChange**: `Object`

标题发生变更

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | 新的标题 |

#### Defined in

[src/types/Document.ts:36](https://github.com/shimohq/shimo-js-sdk/blob/8051ee1/src/types/Document.ts#L36)
