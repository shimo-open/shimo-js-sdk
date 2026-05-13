[shimo-js-sdk - v2.0.2](../README.md) / EmptyPageShownPayload

# Interface: EmptyPageShownPayload

`emptyPageShown` 事件 payload。

## Table of contents

### Properties

- [scene](EmptyPageShownPayload.md#scene)
- [reason](EmptyPageShownPayload.md#reason)
- [httpStatus](EmptyPageShownPayload.md#httpstatus)
- [retryable](EmptyPageShownPayload.md#retryable)

## Properties

### scene

• **scene**: [`EmptyPageScene`](../README.md#emptypagescene)

#### Defined in

[src/types/EmptyPage.ts:105](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L105)

___

### reason

• `Optional` **reason**: `string`

scene 内的子类型（如 FileOpenFailedReason），宿主可用于定制文案或埋点。

#### Defined in

[src/types/EmptyPage.ts:109](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L109)

___

### httpStatus

• `Optional` **httpStatus**: `number`

#### Defined in

[src/types/EmptyPage.ts:110](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L110)

___

### retryable

• `Optional` **retryable**: `boolean`

#### Defined in

[src/types/EmptyPage.ts:111](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L111)
