[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Document](../modules/Document.md) / EventMap

# Interface: EventMap

[Document](../modules/Document.md).EventMap

## Hierarchy

- [`BaseEventMap`](BaseEventMap.md)

  ↳ **`EventMap`**

## Table of contents

### Properties

- [HorizontalScroll](Document.EventMap.md#horizontalscroll)
- [MouseMove](Document.EventMap.md#mousemove)
- [VerticalScroll](Document.EventMap.md#verticalscroll)
- [paramsChanged](Document.EventMap.md#paramschanged)
- [saveStatusChanged](Document.EventMap.md#savestatuschanged)
- [saveStatusDidChange](Document.EventMap.md#savestatusdidchange)
- [titleChange](Document.EventMap.md#titlechange)

## Properties

### HorizontalScroll

• **HorizontalScroll**: [`MouseMovePayload`](MouseMovePayload.md)

水平滚动事件

#### Defined in

[src/types/Document.ts:27](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Document.ts#L27)

___

### MouseMove

• **MouseMove**: [`MouseMovePayload`](MouseMovePayload.md)

鼠标移动事件

#### Defined in

[src/types/Document.ts:17](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Document.ts#L17)

___

### VerticalScroll

• **VerticalScroll**: [`MouseMovePayload`](MouseMovePayload.md)

垂直滚动事件

#### Defined in

[src/types/Document.ts:22](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Document.ts#L22)

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

[src/types/BaseEditor.ts:26](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/BaseEditor.ts#L26)

___

### saveStatusChanged

• **saveStatusChanged**: `Object`

保存状态发生变更

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Inherited from

[BaseEventMap](BaseEventMap.md).[saveStatusChanged](BaseEventMap.md#savestatuschanged)

#### Defined in

[src/types/BaseEditor.ts:5](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/BaseEditor.ts#L5)

___

### saveStatusDidChange

• **saveStatusDidChange**: `Object`

保存状态发生变更

**`deprecated`** - use saveStatusChanged

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Inherited from

[BaseEventMap](BaseEventMap.md).[saveStatusDidChange](BaseEventMap.md#savestatusdidchange)

#### Defined in

[src/types/BaseEditor.ts:16](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/BaseEditor.ts#L16)

___

### titleChange

• **titleChange**: `string`

标题发生变更

#### Defined in

[src/types/Document.ts:12](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Document.ts#L12)
