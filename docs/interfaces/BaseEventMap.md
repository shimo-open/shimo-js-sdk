[shimo-js-sdk](../README.md) / [Exports](../modules.md) / BaseEventMap

# Interface: BaseEventMap

## Hierarchy

- **`BaseEventMap`**

  ↳ [`EventMap`](DocumentPro.EventMap.md)

  ↳ [`EventMap`](Document.EventMap.md)

  ↳ [`EventMap`](Spreadsheet.EventMap.md)

## Table of contents

### Properties

- [paramsChanged](BaseEventMap.md#paramschanged)
- [saveStatusChanged](BaseEventMap.md#savestatuschanged)
- [saveStatusDidChange](BaseEventMap.md#savestatusdidchange)

## Properties

### paramsChanged

• **paramsChanged**: `Object`

用于类似表格打开定位到当前 tab 的用途。事件触发时，替换当前的 url 的 search params 参数，在初始化 JS SDK 时传入。

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `string` |

#### Defined in

[src/types/BaseEditor.ts:26](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/types/BaseEditor.ts#L26)

___

### saveStatusChanged

• **saveStatusChanged**: `Object`

保存状态发生变更

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"error"`` \| ``"saving"`` \| ``"saved"`` |

#### Defined in

[src/types/BaseEditor.ts:5](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/types/BaseEditor.ts#L5)

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

[src/types/BaseEditor.ts:16](https://github.com/shimo-open/shimo-js-sdk/blob/86bca76/src/types/BaseEditor.ts#L16)
