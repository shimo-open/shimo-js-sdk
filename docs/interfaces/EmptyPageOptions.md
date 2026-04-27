[shimo-js-sdk - v2.0.2](../README.md) / EmptyPageOptions

# Interface: EmptyPageOptions

宿主通过 `connect({ emptyPage })` 传入的配置。所有字段均可选。

默认行为：
- 图片 / 文案（title / description）均内置，宿主无需传
- **默认不渲染任何按钮**。如需按钮，必须在 `overrides[scene].primary/secondary`
  里显式配置 label。按钮点击统一触发 `emptyPageAction` 事件。

## Table of contents

### Properties

- [enabled](EmptyPageOptions.md#enabled)
- [scenes](EmptyPageOptions.md#scenes)
- [tokenExpiredStrategy](EmptyPageOptions.md#tokenexpiredstrategy)
- [overrides](EmptyPageOptions.md#overrides)

## Properties

### enabled

• `Optional` **enabled**: `boolean`

总开关，默认 true。

#### Defined in

[src/types/EmptyPage.ts:65](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L65)

___

### scenes

• `Optional` **scenes**: [`EmptyPageScene`](../README.md#emptypagescene)[]

启用的场景白名单。未指定时全部启用。

#### Defined in

[src/types/EmptyPage.ts:70](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L70)

___

### tokenExpiredStrategy

• `Optional` **tokenExpiredStrategy**: [`TokenExpiredStrategy`](../README.md#tokenexpiredstrategy)

token 过期场景的定制策略：
- `refresh-first`（默认）：先走一次 getCredentials 刷新，失败再展示缺省页
  - 仅在宿主传了 `getCredentials` 时生效
  - 最多重试 1 次，5s 超时按失败处理
- `show-immediately`：立即展示，不做刷新尝试

未传 `getCredentials` 时，无论配置如何都按 `show-immediately` 执行。

#### Defined in

[src/types/EmptyPage.ts:81](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L81)

___

### overrides

• `Optional` **overrides**: `Partial`<`Record`<[`EmptyPageScene`](../README.md#emptypagescene), [`EmptyPageContentOverride`](EmptyPageContentOverride.md)\>\>

按 scene 自定义文案和按钮。未配置 scene 走默认行为（默认文案 + 无按钮）。

#### Defined in

[src/types/EmptyPage.ts:86](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L86)
