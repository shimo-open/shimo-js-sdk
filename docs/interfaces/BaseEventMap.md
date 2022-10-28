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

[src/types/BaseEditor.ts:15](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/BaseEditor.ts#L15)

___

### saveStatusDidChange

• **saveStatusDidChange**: `Object`

保存状态发生变更

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"saving"`` \| ``"saved"`` \| ``"error"`` |

#### Defined in

[src/types/BaseEditor.ts:5](https://github.com/shimohq/shimo-js-sdk/blob/35cc9e7/src/types/BaseEditor.ts#L5)
