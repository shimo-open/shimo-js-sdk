[shimo-js-sdk - v2.0.2](../README.md) / HeaderBarsFacade

# Interface: HeaderBarsFacade

## Table of contents

### Properties

- [visible](HeaderBarsFacade.md#visible)

### Methods

- [getVisible](HeaderBarsFacade.md#getvisible)
- [setVisible](HeaderBarsFacade.md#setvisible)
- [addCommand](HeaderBarsFacade.md#addcommand)
- [getCommand](HeaderBarsFacade.md#getcommand)
- [listViewCommands](HeaderBarsFacade.md#listviewcommands)
- [setTitleDraft](HeaderBarsFacade.md#settitledraft)
- [confirmTitleChange](HeaderBarsFacade.md#confirmtitlechange)

## Properties

### visible

• **visible**: `boolean`

#### Defined in

[src/OfficeSDK.ts:99](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L99)

## Methods

### getVisible

▸ **getVisible**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/OfficeSDK.ts:100](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L100)

___

### setVisible

▸ **setVisible**(`visible`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `visible` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/OfficeSDK.ts:101](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L101)

___

### addCommand

▸ **addCommand**(`command`, `posCommand`, `pos?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`HeaderBarsCommandDefinition`](HeaderBarsCommandDefinition.md) |
| `posCommand` | `string` |
| `pos?` | ``"after"`` \| ``"before"`` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/OfficeSDK.ts:102](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L102)

___

### getCommand

▸ **getCommand**(`id`): [`HeaderBarsCommandRef`](HeaderBarsCommandRef.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`HeaderBarsCommandRef`](HeaderBarsCommandRef.md)

#### Defined in

[src/OfficeSDK.ts:107](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L107)

___

### listViewCommands

▸ **listViewCommands**(): `Promise`<[`HeaderBarsCommandState`](HeaderBarsCommandState.md)[]\>

#### Returns

`Promise`<[`HeaderBarsCommandState`](HeaderBarsCommandState.md)[]\>

#### Defined in

[src/OfficeSDK.ts:108](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L108)

___

### setTitleDraft

▸ **setTitleDraft**(`title`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/OfficeSDK.ts:109](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L109)

___

### confirmTitleChange

▸ **confirmTitleChange**(`title`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/OfficeSDK.ts:110](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L110)
