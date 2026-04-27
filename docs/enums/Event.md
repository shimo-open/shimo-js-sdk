[shimo-js-sdk - v2.0.2](../README.md) / Event

# Enumeration: Event

## Table of contents

### Enumeration members

- [SDKInit](Event.md#sdkinit)
- [Error](Event.md#error)
- [ReadyState](Event.md#readystate)
- [EditorRendered](Event.md#editorrendered)
- [EditorEvent](Event.md#editorevent)

## Enumeration members

### SDKInit

• **SDKInit** = `"SDKInit"`

SDK 初始化事件，用于内部逻辑

#### Defined in

[src/OfficeSDK.ts:1239](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1239)

___

### Error

• **Error** = `"error"`

错误事件，包含编辑器抛出的错误

#### Defined in

[src/OfficeSDK.ts:1244](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1244)

___

### ReadyState

• **ReadyState** = `"readyState"`

OfficeSDK 状态变化事件

#### Defined in

[src/OfficeSDK.ts:1249](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1249)

___

### EditorRendered

• **EditorRendered** = `"editorRendered"`

编辑器真正完成"首屏渲染"的信号。

由 iframe 内编辑器在自身渲染稳定后通过 channel 发送，SDK 侧转发为本事件。
宿主可按需监听它来区分 SDK Ready 与编辑器视觉首屏完成。

#### Defined in

[src/OfficeSDK.ts:1257](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1257)

___

### EditorEvent

• **EditorEvent** = `"editorEvent"`

编辑器事件

#### Defined in

[src/OfficeSDK.ts:1262](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1262)
