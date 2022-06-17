[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [DocumentPro](../modules/DocumentPro.md) / EventMap

# Interface: EventMap

[DocumentPro](../modules/DocumentPro.md).EventMap

## Hierarchy

- `BaseEventMap`

  ↳ **`EventMap`**

## Table of contents

### Properties

- [HorizontalScroll](DocumentPro.EventMap.md#horizontalscroll)
- [MouseMove](DocumentPro.EventMap.md#mousemove)
- [VerticalScroll](DocumentPro.EventMap.md#verticalscroll)
- [commentClicked](DocumentPro.EventMap.md#commentclicked)
- [documentChanged](DocumentPro.EventMap.md#documentchanged)
- [documentRecalculated](DocumentPro.EventMap.md#documentrecalculated)
- [error](DocumentPro.EventMap.md#error)
- [saveStatusChanged](DocumentPro.EventMap.md#savestatuschanged)
- [selectionEnded](DocumentPro.EventMap.md#selectionended)

## Properties

### HorizontalScroll

• **HorizontalScroll**: `MouseMovePayload`

水平滚动事件

#### Defined in

[src/types/DocumentPro.ts:124](https://github.com/shimohq/shimo-js-sdk/blob/41c12ea/src/types/DocumentPro.ts#L124)

___

### MouseMove

• **MouseMove**: `MouseMovePayload`

鼠标移动事件

#### Defined in

[src/types/DocumentPro.ts:114](https://github.com/shimohq/shimo-js-sdk/blob/41c12ea/src/types/DocumentPro.ts#L114)

___

### VerticalScroll

• **VerticalScroll**: `MouseMovePayload`

垂直滚动事件

#### Defined in

[src/types/DocumentPro.ts:119](https://github.com/shimohq/shimo-js-sdk/blob/41c12ea/src/types/DocumentPro.ts#L119)

___

### commentClicked

• **commentClicked**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `commentIds?` | `string`[] | 所有被点击的评论ID列表  **`since`** PD2.10 |

#### Defined in

[src/types/DocumentPro.ts:93](https://github.com/shimohq/shimo-js-sdk/blob/41c12ea/src/types/DocumentPro.ts#L93)

___

### documentChanged

• **documentChanged**: `Object`

#### Defined in

[src/types/DocumentPro.ts:92](https://github.com/shimohq/shimo-js-sdk/blob/41c12ea/src/types/DocumentPro.ts#L92)

___

### documentRecalculated

• **documentRecalculated**: `Object`

#### Defined in

[src/types/DocumentPro.ts:100](https://github.com/shimohq/shimo-js-sdk/blob/41c12ea/src/types/DocumentPro.ts#L100)

___

### error

• **error**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `number` | 错误码 |
| `data?` | `any` | 错误信息 |

#### Defined in

[src/types/DocumentPro.ts:104](https://github.com/shimohq/shimo-js-sdk/blob/41c12ea/src/types/DocumentPro.ts#L104)

___

### saveStatusChanged

• **saveStatusChanged**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Defined in

[src/types/DocumentPro.ts:101](https://github.com/shimohq/shimo-js-sdk/blob/41c12ea/src/types/DocumentPro.ts#L101)

___

### selectionEnded

• **selectionEnded**: `Object`

#### Defined in

[src/types/DocumentPro.ts:91](https://github.com/shimohq/shimo-js-sdk/blob/41c12ea/src/types/DocumentPro.ts#L91)
