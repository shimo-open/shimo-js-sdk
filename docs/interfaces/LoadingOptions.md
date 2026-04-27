[shimo-js-sdk - v2.0.2](../README.md) / LoadingOptions

# Interface: LoadingOptions

iframe 内置加载页配置，只支持可序列化字段。

## Table of contents

### Properties

- [logo](LoadingOptions.md#logo)
- [tip](LoadingOptions.md#tip)

## Properties

### logo

• `Optional` **logo**: `string` \| ``false``

自定义加载页 Logo。传字符串时作为图片 URL / dataURL 使用；
传 false 时隐藏 Logo；不传时使用 iframe 内默认石墨 Logo。

#### Defined in

[src/OfficeSDK.ts:1316](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1316)

___

### tip

• `Optional` **tip**: `string`

自定义加载页提示文案。不传时使用 iframe 内默认文案。

#### Defined in

[src/OfficeSDK.ts:1320](https://github.com/shimo-open/shimo-js-sdk/blob/master/src/OfficeSDK.ts#L1320)
