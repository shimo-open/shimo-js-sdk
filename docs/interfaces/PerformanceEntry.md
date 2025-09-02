[shimo-js-sdk](/README.md) / [Exports](/modules.md) / PerformanceEntry

# Interface: PerformanceEntry

性能信息

## Table of contents

### Properties

- [mark](/interfaces/PerformanceEntry.md#mark)
- [timestamp](/interfaces/PerformanceEntry.md#timestamp)
- [timeOrigin](/interfaces/PerformanceEntry.md#timeorigin)
- [resourceTiming](/interfaces/PerformanceEntry.md#resourcetiming)

## Properties

### mark

• **mark**: `string`

性能信息片段的标记，如 "sdk_initialized"、"editor_render_end"

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:200

___

### timestamp

• **timestamp**: `number`

性能信息片段的标记时间，以毫秒为单位

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:204

___

### timeOrigin

• `Optional` **timeOrigin**: `number`

Performance 开始记录时间的节点，用于静态资源加载时间计算等用途
https://developer.mozilla.org/en-US/docs/Web/API/Performance/timeOrigin

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:209

___

### resourceTiming

• `Optional` **resourceTiming**: `Record`<`string`, `unknown`\>

原始 PerformanceResourceTiming.toJSON()

#### Defined in

node_modules/shimo-js-sdk-shared/dist/types.d.ts:213
