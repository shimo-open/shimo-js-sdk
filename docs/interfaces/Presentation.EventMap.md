[shimo-js-sdk - v1.2.26](../README.md) / [Presentation](../modules/Presentation.md) / EventMap

# Interface: EventMap

[Presentation](../modules/Presentation.md).EventMap

## Hierarchy

- [`BaseEventMap`](BaseEventMap.md)

  ↳ **`EventMap`**

## Table of contents

### Properties

- [saveStatusChanged](Presentation.EventMap.md#savestatuschanged)
- [saveStatusDidChange](Presentation.EventMap.md#savestatusdidchange)
- [editForbiddenConfirmed](Presentation.EventMap.md#editforbiddenconfirmed)
- [paramsChanged](Presentation.EventMap.md#paramschanged)
- [collaboratorsChanged](Presentation.EventMap.md#collaboratorschanged)
- [error](Presentation.EventMap.md#error)

## Properties

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

#### Inherited from

[BaseEventMap](BaseEventMap.md).[saveStatusDidChange](BaseEventMap.md#savestatusdidchange)

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

#### Inherited from

[BaseEventMap](BaseEventMap.md).[editForbiddenConfirmed](BaseEventMap.md#editforbiddenconfirmed)

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

#### Inherited from

[BaseEventMap](BaseEventMap.md).[paramsChanged](BaseEventMap.md#paramschanged)

#### Defined in

[src/types/BaseEditor.ts:52](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/BaseEditor.ts#L52)

___

### collaboratorsChanged

• **collaboratorsChanged**: `CollaboratorsChangedPayload`

协作者列表发生变更

#### Inherited from

[BaseEventMap](BaseEventMap.md).[collaboratorsChanged](BaseEventMap.md#collaboratorschanged)

#### Defined in

[src/types/BaseEditor.ts:59](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/BaseEditor.ts#L59)

___

### error

• **error**: `Object`

错误

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `data?` | `any` | 错误信息 |
| `code` | `number` | 错误码 |

#### Defined in

[src/types/Presentation.ts:7](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/Presentation.ts#L7)
