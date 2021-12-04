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

#### Inherited from

BaseEventMap.HorizontalScroll

#### Defined in

[src/types/BaseEditor.ts:17](https://github.com/shimohq/shimo-js-sdk/blob/a9f5498/src/types/BaseEditor.ts#L17)

___

### MouseMove

• **MouseMove**: `MouseMovePayload`

鼠标移动事件

#### Inherited from

BaseEventMap.MouseMove

#### Defined in

[src/types/BaseEditor.ts:7](https://github.com/shimohq/shimo-js-sdk/blob/a9f5498/src/types/BaseEditor.ts#L7)

___

### VerticalScroll

• **VerticalScroll**: `MouseMovePayload`

垂直滚动事件

#### Inherited from

BaseEventMap.VerticalScroll

#### Defined in

[src/types/BaseEditor.ts:12](https://github.com/shimohq/shimo-js-sdk/blob/a9f5498/src/types/BaseEditor.ts#L12)

___

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | 错误码 |
| `data?` | `unknown` | 错误信息 |

#### Defined in

[src/types/Document.ts:14](https://github.com/shimohq/shimo-js-sdk/blob/a9f5498/src/types/Document.ts#L14)

___

### saveStatusDidChange

• **saveStatusDidChange**: `Object`

保存状态发生变更

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Defined in

[src/types/Document.ts:7](https://github.com/shimohq/shimo-js-sdk/blob/a9f5498/src/types/Document.ts#L7)

___

### titleChange

• **titleChange**: `Object`

标题发生变更

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | 新的标题 |

#### Defined in

[src/types/Document.ts:24](https://github.com/shimohq/shimo-js-sdk/blob/a9f5498/src/types/Document.ts#L24)
