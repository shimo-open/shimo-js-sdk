[shimo-js-sdk - v1.2.12](/README.md) / BaseEventMap

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

## Properties

### saveStatusChanged

• **saveStatusChanged**: `Object`

保存状态发生变更

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"error"`` \| ``"saving"`` \| ``"saved"`` |

#### Defined in

[src/types/BaseEditor.ts:5](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L5)

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

[src/types/BaseEditor.ts:16](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L16)

___

### paramsChanged

• **paramsChanged**: `Object`

用于类似表格打开定位到当前 tab 的用途。事件触发时，替换当前的 url 的 search params 参数，在初始化 JS SDK 时传入。

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `string` |

#### Defined in

[src/types/BaseEditor.ts:26](https://github.com/shimohq/shimo-js-sdk/blob/main/src/types/BaseEditor.ts#L26)
