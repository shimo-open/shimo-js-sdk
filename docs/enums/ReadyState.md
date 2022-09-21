[shimo-js-sdk](../README.md) / [Exports](../modules.md) / ReadyState

# Enumeration: ReadyState

SDK 和编辑器初始化状态

## Table of contents

### Enumeration members

- [Failed](ReadyState.md#failed)
- [Loading](ReadyState.md#loading)
- [LoadingEditor](ReadyState.md#loadingeditor)
- [Ready](ReadyState.md#ready)

## Enumeration members

### Failed

• **Failed** = `"failed"`

初始化失败

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:22

___

### Loading

• **Loading** = `"loading"`

正在初始化 SDK

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:10

___

### LoadingEditor

• **LoadingEditor** = `"loadingEditor"`

正在初始化编辑器

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:14

___

### Ready

• **Ready** = `"ready"`

SDK 和编辑器初始化完成，因编辑器含异步组件，因此仅代表可以和编辑器交互，不代表编辑器完成全部加载。

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:18
