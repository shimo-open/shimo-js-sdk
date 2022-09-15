[shimo-js-sdk](../README.md) / [Exports](../modules.md) / BaseEventMap

# Interface: BaseEventMap

## Hierarchy

- **`BaseEventMap`**

  ↳ [`EventMap`](DocumentPro.EventMap.md)

  ↳ [`EventMap`](Document.EventMap.md)

  ↳ [`EventMap`](Spreadsheet.EventMap.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [paramsChanged](BaseEventMap.md#paramschanged)

## Properties

### paramsChanged

• **paramsChanged**: `Object`

用于类似表格打开定位到当前 tab 的用途。事件触发时，替换当前的 url 的 search params 参数，在初始化 JS SDK 时传入。

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `string` |

#### Defined in

[src/types/BaseEditor.ts:5](https://github.com/shimohq/shimo-js-sdk/blob/ef32014/src/types/BaseEditor.ts#L5)
