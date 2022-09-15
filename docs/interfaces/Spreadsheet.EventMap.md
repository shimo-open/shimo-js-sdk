[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Spreadsheet](../modules/Spreadsheet.md) / EventMap

# Interface: EventMap

[Spreadsheet](../modules/Spreadsheet.md).EventMap

## Hierarchy

- [`BaseEventMap`](BaseEventMap.md)

  ↳ **`EventMap`**

## Table of contents

### Properties

- [HorizontalScroll](Spreadsheet.EventMap.md#horizontalscroll)
- [MouseMove](Spreadsheet.EventMap.md#mousemove)
- [VerticalScroll](Spreadsheet.EventMap.md#verticalscroll)
- [error](Spreadsheet.EventMap.md#error)
- [paramsChanged](Spreadsheet.EventMap.md#paramschanged)
- [saveStatusChanged](Spreadsheet.EventMap.md#savestatuschanged)

## Properties

### HorizontalScroll

• **HorizontalScroll**: `MouseMovePayload`

水平滚动事件

#### Defined in

[src/types/Spreadsheet.ts:57](https://github.com/shimohq/shimo-js-sdk/blob/ef32014/src/types/Spreadsheet.ts#L57)

___

### MouseMove

• **MouseMove**: `MouseMovePayload`

鼠标移动事件

#### Defined in

[src/types/Spreadsheet.ts:47](https://github.com/shimohq/shimo-js-sdk/blob/ef32014/src/types/Spreadsheet.ts#L47)

___

### VerticalScroll

• **VerticalScroll**: `MouseMovePayload`

垂直滚动事件

#### Defined in

[src/types/Spreadsheet.ts:52](https://github.com/shimohq/shimo-js-sdk/blob/ef32014/src/types/Spreadsheet.ts#L52)

___

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | 错误码 |
| `data?` | `any` | 错误信息 |

#### Defined in

[src/types/Spreadsheet.ts:37](https://github.com/shimohq/shimo-js-sdk/blob/ef32014/src/types/Spreadsheet.ts#L37)

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

[src/types/BaseEditor.ts:5](https://github.com/shimohq/shimo-js-sdk/blob/ef32014/src/types/BaseEditor.ts#L5)

___

### saveStatusChanged

• **saveStatusChanged**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Defined in

[src/types/Spreadsheet.ts:34](https://github.com/shimohq/shimo-js-sdk/blob/ef32014/src/types/Spreadsheet.ts#L34)
