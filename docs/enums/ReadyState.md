[shimo-js-sdk](/README.md) / [Exports](/modules.md) / ReadyState

# Enumeration: ReadyState

SDK 和编辑器初始化状态

## Table of contents

### Enumeration members

- [Disconnected](/enums/ReadyState.md#disconnected)
- [Failed](/enums/ReadyState.md#failed)
- [Loading](/enums/ReadyState.md#loading)
- [LoadingEditor](/enums/ReadyState.md#loadingeditor)
- [Ready](/enums/ReadyState.md#ready)

## Enumeration members

### Disconnected

• **Disconnected** = `"disconnected"`

已经被销毁

#### Defined in

node_modules/shimo-js-sdk-shared/dist/event.d.ts:54

___

### Failed

• **Failed** = `"failed"`

初始化失败

#### Defined in

node_modules/shimo-js-sdk-shared/dist/event.d.ts:50

___

### Loading

• **Loading** = `"loading"`

正在初始化 SDK

#### Defined in

node_modules/shimo-js-sdk-shared/dist/event.d.ts:38

___

### LoadingEditor

• **LoadingEditor** = `"loadingEditor"`

正在初始化编辑器

#### Defined in

node_modules/shimo-js-sdk-shared/dist/event.d.ts:42

___

### Ready

• **Ready** = `"ready"`

SDK 和编辑器初始化完成，因编辑器含异步组件，因此仅代表可以和编辑器交互，不代表编辑器完成全部加载。

#### Defined in

node_modules/shimo-js-sdk-shared/dist/event.d.ts:46
