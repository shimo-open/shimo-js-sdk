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
- [error](Document.EventMap.md#error)
- [saveStatusDidChange](Document.EventMap.md#savestatusdidchange)
- [titleChange](Document.EventMap.md#titlechange)

## Properties

### HorizontalScroll

• **HorizontalScroll**: `MouseMovePayload`

水平滚动事件

#### Defined in

[src/types/Document.ts:48](https://github.com/shimohq/shimo-js-sdk/blob/8db8072/src/types/Document.ts#L48)

___

### MouseMove

• **MouseMove**: `MouseMovePayload`

鼠标移动事件

#### Defined in

[src/types/Document.ts:38](https://github.com/shimohq/shimo-js-sdk/blob/8db8072/src/types/Document.ts#L38)

___

### VerticalScroll

• **VerticalScroll**: `MouseMovePayload`

垂直滚动事件

#### Defined in

[src/types/Document.ts:43](https://github.com/shimohq/shimo-js-sdk/blob/8db8072/src/types/Document.ts#L43)

___

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | 错误码 |
| `data?` | `unknown` | 错误信息 |

#### Defined in

[src/types/Document.ts:18](https://github.com/shimohq/shimo-js-sdk/blob/8db8072/src/types/Document.ts#L18)

___

### saveStatusDidChange

• **saveStatusDidChange**: `Object`

保存状态发生变更

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Defined in

[src/types/Document.ts:11](https://github.com/shimohq/shimo-js-sdk/blob/8db8072/src/types/Document.ts#L11)

___

### titleChange

• **titleChange**: `Object`

标题发生变更

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | 新的标题 |

#### Defined in

[src/types/Document.ts:28](https://github.com/shimohq/shimo-js-sdk/blob/8db8072/src/types/Document.ts#L28)
