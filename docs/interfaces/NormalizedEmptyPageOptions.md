[shimo-js-sdk - v2.0.2](../README.md) / NormalizedEmptyPageOptions

# Interface: NormalizedEmptyPageOptions

归一化后的缺省页配置，透传给 iframe 使用。
所有基础字段都是必填且完整填充，iframe 侧不需要再补默认值。
`overrides` 保持稀疏（仅携带宿主显式传入的字段），避免透传多余数据。

## Table of contents

### Properties

- [enabled](NormalizedEmptyPageOptions.md#enabled)
- [scenes](NormalizedEmptyPageOptions.md#scenes)
- [tokenExpiredStrategy](NormalizedEmptyPageOptions.md#tokenexpiredstrategy)
- [overrides](NormalizedEmptyPageOptions.md#overrides)

## Properties

### enabled

• **enabled**: `boolean`

#### Defined in

[src/types/EmptyPage.ts:95](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L95)

___

### scenes

• **scenes**: [`EmptyPageScene`](../README.md#emptypagescene)[]

#### Defined in

[src/types/EmptyPage.ts:96](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L96)

___

### tokenExpiredStrategy

• **tokenExpiredStrategy**: [`TokenExpiredStrategy`](../README.md#tokenexpiredstrategy)

#### Defined in

[src/types/EmptyPage.ts:97](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L97)

___

### overrides

• **overrides**: `Partial`<`Record`<[`EmptyPageScene`](../README.md#emptypagescene), [`EmptyPageContentOverride`](EmptyPageContentOverride.md)\>\>

#### Defined in

[src/types/EmptyPage.ts:98](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/types/EmptyPage.ts#L98)
