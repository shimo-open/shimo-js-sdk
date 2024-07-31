[shimo-js-sdk](../README.md) / [Exports](../modules.md) / InvokeMethod

# Enumeration: InvokeMethod

JS SDK 之间通信用的方法。一般用在 ShimoBroadcastChannel.invoke() 中。

## Table of contents

### Enumeration members

- [DispatchEditorEvent](InvokeMethod.md#dispatcheditorevent)
- [DispatchSDKEvent](InvokeMethod.md#dispatchsdkevent)
- [Error](InvokeMethod.md#error)
- [InvokeContainerMethod](InvokeMethod.md#invokecontainermethod)
- [InvokeEditorMethod](InvokeMethod.md#invokeeditormethod)
- [ListenEditorEvent](InvokeMethod.md#listeneditorevent)
- [ReadyState](InvokeMethod.md#readystate)
- [RequestPerformanceEntries](InvokeMethod.md#requestperformanceentries)
- [SDKInit](InvokeMethod.md#sdkinit)
- [SetCredentials](InvokeMethod.md#setcredentials)

## Enumeration members

### DispatchEditorEvent

• **DispatchEditorEvent** = `"dispatchEditorEvent"`

派发编辑器相关的事件

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:38

___

### DispatchSDKEvent

• **DispatchSDKEvent** = `"dispatchSDKEvent"`

派发 SDK 自身相关的事件

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:34

___

### Error

• **Error** = `"error"`

用于 error 处理

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:14

___

### InvokeContainerMethod

• **InvokeContainerMethod** = `"invokeContainerMethod"`

调用容器方法

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:26

___

### InvokeEditorMethod

• **InvokeEditorMethod** = `"invokeEditorMethod"`

请求调用编辑器方法，并将结果返回

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:30

___

### ListenEditorEvent

• **ListenEditorEvent** = `"listenEditorEvent"`

监听编辑器相关的事件

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:42

___

### ReadyState

• **ReadyState** = `"readyState"`

用于处理 ReadyState 变化

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:18

___

### RequestPerformanceEntries

• **RequestPerformanceEntries** = `"requestPerformanceEntries"`

请求性能信息列表

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:46

___

### SDKInit

• **SDKInit** = `"SDKInit"`

SDK 初始化，用于获取配置信息

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:10

___

### SetCredentials

• **SetCredentials** = `"setCredentials"`

用于更新鉴权信息

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:22
