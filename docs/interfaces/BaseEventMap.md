[shimo-js-sdk - v1.2.18](/README.md) / BaseEventMap

# Interface: BaseEventMap

## Hierarchy

- **`BaseEventMap`**

  ↳ [`EventMap`](/interfaces/DocumentPro.EventMap.md)

  ↳ [`EventMap`](/interfaces/Document.EventMap.md)

  ↳ [`EventMap`](/interfaces/Spreadsheet.EventMap.md)

## Table of contents

### Properties

- [saveStatusChanged](/interfaces/BaseEventMap.md#savestatuschanged)
- [saveStatusDidChange](/interfaces/BaseEventMap.md#savestatusdidchange)
- [paramsChanged](/interfaces/BaseEventMap.md#paramschanged)
- [collaboratorsChanged](/interfaces/BaseEventMap.md#collaboratorschanged)

## Properties

### saveStatusChanged

• **saveStatusChanged**: `Object`

保存状态发生变更

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"error"`` \| ``"saving"`` \| ``"saved"`` |

#### Defined in

[src/types/BaseEditor.ts:21](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L21)

___

### saveStatusDidChange

• **saveStatusDidChange**: `Object`

保存状态发生变更

**`deprecated`** - use saveStatusChanged

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"error"`` \| ``"saving"`` \| ``"saved"`` |

#### Defined in

[src/types/BaseEditor.ts:32](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L32)

___

### paramsChanged

• **paramsChanged**: `Object`

用于类似表格打开定位到当前 tab 的用途。事件触发时，替换当前的 url 的 search params 参数，在初始化 JS SDK 时传入。

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `string` |

#### Defined in

[src/types/BaseEditor.ts:42](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L42)

___

### collaboratorsChanged

• **collaboratorsChanged**: `CollaboratorsChangedPayload`

协作者列表发生变更

#### Defined in

[src/types/BaseEditor.ts:49](https://github.com/shimo-open/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L49)
