[shimo-js-sdk - v2.0.2](../README.md) / EmptyPageActionPayload

# Interface: EmptyPageActionPayload

`emptyPageAction` 事件 payload，按钮被点击时触发。
宿主根据 scene + action 决定业务行为（重登 / 重试 / 隐藏等）。

## Table of contents

### Properties

- [scene](EmptyPageActionPayload.md#scene)
- [action](EmptyPageActionPayload.md#action)

## Properties

### scene

• **scene**: [`EmptyPageScene`](../README.md#emptypagescene)

#### Defined in

[src/types/EmptyPage.ts:119](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L119)

___

### action

• **action**: ``"primary"`` \| ``"secondary"``

#### Defined in

[src/types/EmptyPage.ts:120](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L120)
