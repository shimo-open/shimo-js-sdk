[shimo-js-sdk - v1.2.10](/README.md) / [Spreadsheet](/modules/Spreadsheet.md) / EventMap

# Interface: EventMap

[Spreadsheet](/modules/Spreadsheet.md).EventMap

## Hierarchy

- [`BaseEventMap`](/interfaces/BaseEventMap.md)

  ↳ **`EventMap`**

## Table of contents

### Properties

- [saveStatusChanged](/interfaces/Spreadsheet.EventMap.md#savestatuschanged)
- [saveStatusDidChange](/interfaces/Spreadsheet.EventMap.md#savestatusdidchange)
- [paramsChanged](/interfaces/Spreadsheet.EventMap.md#paramschanged)
- [error](/interfaces/Spreadsheet.EventMap.md#error)
- [MouseMove](/interfaces/Spreadsheet.EventMap.md#mousemove)
- [VerticalScroll](/interfaces/Spreadsheet.EventMap.md#verticalscroll)
- [HorizontalScroll](/interfaces/Spreadsheet.EventMap.md#horizontalscroll)

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

[src/types/BaseEditor.ts:5](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L5)

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

[src/types/BaseEditor.ts:16](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L16)

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

[src/types/BaseEditor.ts:26](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L26)

___

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data?` | `any` | 错误信息 |
| `code` | `number` | 错误码 |

#### Defined in

[src/types/Spreadsheet.ts:31](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L31)

___

### MouseMove

• **MouseMove**: [`MouseMovePayload`](/interfaces/MouseMovePayload.md)

鼠标移动事件

#### Defined in

[src/types/Spreadsheet.ts:41](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L41)

___

### VerticalScroll

• **VerticalScroll**: [`MouseMovePayload`](/interfaces/MouseMovePayload.md)

垂直滚动事件

#### Defined in

[src/types/Spreadsheet.ts:46](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L46)

___

### HorizontalScroll

• **HorizontalScroll**: [`MouseMovePayload`](/interfaces/MouseMovePayload.md)

水平滚动事件

#### Defined in

[src/types/Spreadsheet.ts:51](https://github.com/byte9527/shimo-js-sdk/blob/main/src/types/Spreadsheet.ts#L51)
