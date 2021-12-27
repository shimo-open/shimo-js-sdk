[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Spreadsheet](../modules/Spreadsheet.md) / EventMap

# Interface: EventMap

[Spreadsheet](../modules/Spreadsheet.md).EventMap

## Hierarchy

- `BaseEventMap`

  ↳ **`EventMap`**

## Table of contents

### Properties

- [HorizontalScroll](Spreadsheet.EventMap.md#horizontalscroll)
- [MouseMove](Spreadsheet.EventMap.md#mousemove)
- [VerticalScroll](Spreadsheet.EventMap.md#verticalscroll)
- [error](Spreadsheet.EventMap.md#error)
- [saveStatusChanged](Spreadsheet.EventMap.md#savestatuschanged)

## Properties

### HorizontalScroll

• **HorizontalScroll**: `MouseMovePayload`

水平滚动事件

#### Defined in

[src/types/Spreadsheet.ts:57](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/Spreadsheet.ts#L57)

___

### MouseMove

• **MouseMove**: `MouseMovePayload`

鼠标移动事件

#### Defined in

[src/types/Spreadsheet.ts:47](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/Spreadsheet.ts#L47)

___

### VerticalScroll

• **VerticalScroll**: `MouseMovePayload`

垂直滚动事件

#### Defined in

[src/types/Spreadsheet.ts:52](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/Spreadsheet.ts#L52)

___

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | 错误码 |
| `data?` | `any` | 错误信息 |

#### Defined in

[src/types/Spreadsheet.ts:37](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/Spreadsheet.ts#L37)

___

### saveStatusChanged

• **saveStatusChanged**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Defined in

[src/types/Spreadsheet.ts:34](https://github.com/shimohq/shimo-js-sdk/blob/7666570/src/types/Spreadsheet.ts#L34)
