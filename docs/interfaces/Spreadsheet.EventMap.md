[shimo-js-sdk - v1.2.23](../README.md) / [Spreadsheet](../modules/Spreadsheet.md) / EventMap

# Interface: EventMap

[Spreadsheet](../modules/Spreadsheet.md).EventMap

## Hierarchy

- [`BaseEventMap`](BaseEventMap.md)

  ↳ **`EventMap`**

## Table of contents

### Properties

- [saveStatusChanged](Spreadsheet.EventMap.md#savestatuschanged)
- [saveStatusDidChange](Spreadsheet.EventMap.md#savestatusdidchange)
- [paramsChanged](Spreadsheet.EventMap.md#paramschanged)
- [collaboratorsChanged](Spreadsheet.EventMap.md#collaboratorschanged)
- [error](Spreadsheet.EventMap.md#error)
- [MouseMove](Spreadsheet.EventMap.md#mousemove)
- [VerticalScroll](Spreadsheet.EventMap.md#verticalscroll)
- [HorizontalScroll](Spreadsheet.EventMap.md#horizontalscroll)

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

[src/types/BaseEditor.ts:21](https://github.com/shimo-open/shimo-js-sdk/blob/d40b879/src/types/BaseEditor.ts#L21)

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

[src/types/BaseEditor.ts:32](https://github.com/shimo-open/shimo-js-sdk/blob/d40b879/src/types/BaseEditor.ts#L32)

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

[src/types/BaseEditor.ts:42](https://github.com/shimo-open/shimo-js-sdk/blob/d40b879/src/types/BaseEditor.ts#L42)

___

### collaboratorsChanged

• **collaboratorsChanged**: `CollaboratorsChangedPayload`

协作者列表发生变更

#### Inherited from

[BaseEventMap](BaseEventMap.md).[collaboratorsChanged](BaseEventMap.md#collaboratorschanged)

#### Defined in

[src/types/BaseEditor.ts:49](https://github.com/shimo-open/shimo-js-sdk/blob/d40b879/src/types/BaseEditor.ts#L49)

___

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data?` | `any` | 错误信息 |
| `code` | `number` | 错误码 |

#### Defined in

[src/types/Spreadsheet.ts:31](https://github.com/shimo-open/shimo-js-sdk/blob/d40b879/src/types/Spreadsheet.ts#L31)

___

### MouseMove

• **MouseMove**: [`MouseMovePayload`](MouseMovePayload.md)

鼠标移动事件

#### Defined in

[src/types/Spreadsheet.ts:41](https://github.com/shimo-open/shimo-js-sdk/blob/d40b879/src/types/Spreadsheet.ts#L41)

___

### VerticalScroll

• **VerticalScroll**: [`MouseMovePayload`](MouseMovePayload.md)

垂直滚动事件

#### Defined in

[src/types/Spreadsheet.ts:46](https://github.com/shimo-open/shimo-js-sdk/blob/d40b879/src/types/Spreadsheet.ts#L46)

___

### HorizontalScroll

• **HorizontalScroll**: [`MouseMovePayload`](MouseMovePayload.md)

水平滚动事件

#### Defined in

[src/types/Spreadsheet.ts:51](https://github.com/shimo-open/shimo-js-sdk/blob/d40b879/src/types/Spreadsheet.ts#L51)
