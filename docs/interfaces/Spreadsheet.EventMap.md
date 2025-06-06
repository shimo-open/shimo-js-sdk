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
- [saveStatusDidChange](Spreadsheet.EventMap.md#savestatusdidchange)

## Properties

### HorizontalScroll

• **HorizontalScroll**: [`MouseMovePayload`](MouseMovePayload.md)

水平滚动事件

#### Defined in

[src/types/Spreadsheet.ts:51](https://github.com/shimohq/shimo-js-sdk/blob/30c2025/src/types/Spreadsheet.ts#L51)

___

### MouseMove

• **MouseMove**: [`MouseMovePayload`](MouseMovePayload.md)

鼠标移动事件

#### Defined in

[src/types/Spreadsheet.ts:41](https://github.com/shimohq/shimo-js-sdk/blob/30c2025/src/types/Spreadsheet.ts#L41)

___

### VerticalScroll

• **VerticalScroll**: [`MouseMovePayload`](MouseMovePayload.md)

垂直滚动事件

#### Defined in

[src/types/Spreadsheet.ts:46](https://github.com/shimohq/shimo-js-sdk/blob/30c2025/src/types/Spreadsheet.ts#L46)

___

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | 错误码 |
| `data?` | `any` | 错误信息 |

#### Defined in

[src/types/Spreadsheet.ts:31](https://github.com/shimohq/shimo-js-sdk/blob/30c2025/src/types/Spreadsheet.ts#L31)

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

[src/types/BaseEditor.ts:26](https://github.com/shimohq/shimo-js-sdk/blob/30c2025/src/types/BaseEditor.ts#L26)

___

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

[src/types/BaseEditor.ts:5](https://github.com/shimohq/shimo-js-sdk/blob/30c2025/src/types/BaseEditor.ts#L5)

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

[src/types/BaseEditor.ts:16](https://github.com/shimohq/shimo-js-sdk/blob/30c2025/src/types/BaseEditor.ts#L16)
