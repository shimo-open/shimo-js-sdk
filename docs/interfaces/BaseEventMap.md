[shimo-js-sdk - v1.2.27](../README.md) / BaseEventMap

# Interface: BaseEventMap

## Hierarchy

- **`BaseEventMap`**

  ↳ [`EventMap`](DocumentPro.EventMap.md)

  ↳ [`EventMap`](Document.EventMap.md)

  ↳ [`EventMap`](Spreadsheet.EventMap.md)

  ↳ [`EventMap`](Presentation.EventMap.md)

## Table of contents

### Properties

- [saveStatusChanged](BaseEventMap.md#savestatuschanged)
- [saveStatusDidChange](BaseEventMap.md#savestatusdidchange)
- [editForbiddenConfirmed](BaseEventMap.md#editforbiddenconfirmed)
- [paramsChanged](BaseEventMap.md#paramschanged)
- [collaboratorsChanged](BaseEventMap.md#collaboratorschanged)

## Properties

### saveStatusChanged

• **saveStatusChanged**: `Object`

保存状态发生变更

#### Type declaration

| Name | Type |
| :------ | :------ |
| `status?` | ``"error"`` \| ``"saving"`` \| ``"saved"`` |

#### Defined in

[src/types/BaseEditor.ts:21](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/BaseEditor.ts#L21)

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

[src/types/BaseEditor.ts:32](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/BaseEditor.ts#L32)

___

### editForbiddenConfirmed

• **editForbiddenConfirmed**: `Object`

用户确认“系统已禁止编辑”弹窗后触发

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `reason` | ``"STATUS_FORBIDDEN"`` | 当前仅支持 STATUS_FORBIDDEN |

#### Defined in

[src/types/BaseEditor.ts:42](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/BaseEditor.ts#L42)

___

### paramsChanged

• **paramsChanged**: `Object`

用于类似表格打开定位到当前 tab 的用途。事件触发时，替换当前的 url 的 search params 参数，在初始化 JS SDK 时传入。

#### Type declaration

| Name | Type |
| :------ | :------ |
| `params` | `string` |

#### Defined in

[src/types/BaseEditor.ts:52](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/BaseEditor.ts#L52)

___

### collaboratorsChanged

• **collaboratorsChanged**: `CollaboratorsChangedPayload`

协作者列表发生变更

#### Defined in

[src/types/BaseEditor.ts:59](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/BaseEditor.ts#L59)
