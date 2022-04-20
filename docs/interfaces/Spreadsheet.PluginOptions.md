[shimo-js-sdk](../README.md) / [Exports](../modules.md) / [Spreadsheet](../modules/Spreadsheet.md) / PluginOptions

# Interface: PluginOptions

[Spreadsheet](../modules/Spreadsheet.md).PluginOptions

控制插件是否开启，无特殊说明默认都是 true。某些插件设置为 false 后，可能影响数据呈现。
受后端服务版本影响，不是所有插件都可用，请以实际部署版本为准。

## Table of contents

### Properties

- [Attachment](Spreadsheet.PluginOptions.md#attachment)
- [BatchLock](Spreadsheet.PluginOptions.md#batchlock)
- [CalcOption](Spreadsheet.PluginOptions.md#calcoption)
- [CellHistory](Spreadsheet.PluginOptions.md#cellhistory)
- [ChartV2](Spreadsheet.PluginOptions.md#chartv2)
- [CheckList](Spreadsheet.PluginOptions.md#checklist)
- [ClearRepeat](Spreadsheet.PluginOptions.md#clearrepeat)
- [CombineSheets](Spreadsheet.PluginOptions.md#combinesheets)
- [Comment](Spreadsheet.PluginOptions.md#comment)
- [ConditionalFormat](Spreadsheet.PluginOptions.md#conditionalformat)
- [CopyAsImage](Spreadsheet.PluginOptions.md#copyasimage)
- [CopyRangeLink](Spreadsheet.PluginOptions.md#copyrangelink)
- [CopyViewportLink](Spreadsheet.PluginOptions.md#copyviewportlink)
- [CustomNames](Spreadsheet.PluginOptions.md#customnames)
- [DataValidation](Spreadsheet.PluginOptions.md#datavalidation)
- [DateMention](Spreadsheet.PluginOptions.md#datemention)
- [FileSlimming](Spreadsheet.PluginOptions.md#fileslimming)
- [HighlightPosition](Spreadsheet.PluginOptions.md#highlightposition)
- [HistorySidebar](Spreadsheet.PluginOptions.md#historysidebar)
- [ImagePermission](Spreadsheet.PluginOptions.md#imagepermission)
- [ImportFormula](Spreadsheet.PluginOptions.md#importformula)
- [IndependentViewport](Spreadsheet.PluginOptions.md#independentviewport)
- [Lock](Spreadsheet.PluginOptions.md#lock)
- [Mention](Spreadsheet.PluginOptions.md#mention)
- [Outline](Spreadsheet.PluginOptions.md#outline)
- [PivotTable](Spreadsheet.PluginOptions.md#pivottable)
- [Remarks](Spreadsheet.PluginOptions.md#remarks)
- [SheetStyles](Spreadsheet.PluginOptions.md#sheetstyles)
- [Slicer](Spreadsheet.PluginOptions.md#slicer)
- [SplitColumns](Spreadsheet.PluginOptions.md#splitcolumns)

## Properties

### Attachment

• `Optional` **Attachment**: `boolean`

附件 (附件 / 云文件)

#### Defined in

[src/types/Spreadsheet.ts:234](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L234)

___

### BatchLock

• `Optional` **BatchLock**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:364](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L364)

___

### CalcOption

• `Optional` **CalcOption**: `boolean`

计算选项

#### Defined in

[src/types/Spreadsheet.ts:244](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L244)

___

### CellHistory

• `Optional` **CellHistory**: `boolean`

单元格历史

#### Defined in

[src/types/Spreadsheet.ts:249](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L249)

___

### ChartV2

• `Optional` **ChartV2**: `boolean`

图表

#### Defined in

[src/types/Spreadsheet.ts:254](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L254)

___

### CheckList

• `Optional` **CheckList**: `boolean`

任务清单

#### Defined in

[src/types/Spreadsheet.ts:259](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L259)

___

### ClearRepeat

• `Optional` **ClearRepeat**: `boolean`

清除重复项

#### Defined in

[src/types/Spreadsheet.ts:264](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L264)

___

### CombineSheets

• `Optional` **CombineSheets**: `boolean`

合并工作表 (合并工作表依赖跨表格引用，如果跨表格引用设置为不可见，合并工作表也会不可见)

#### Defined in

[src/types/Spreadsheet.ts:269](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L269)

___

### Comment

• `Optional` **Comment**: `boolean`

评论

#### Defined in

[src/types/Spreadsheet.ts:274](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L274)

___

### ConditionalFormat

• `Optional` **ConditionalFormat**: `boolean`

条件格式

#### Defined in

[src/types/Spreadsheet.ts:279](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L279)

___

### CopyAsImage

• `Optional` **CopyAsImage**: `boolean`

复制为图片

#### Defined in

[src/types/Spreadsheet.ts:284](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L284)

___

### CopyRangeLink

• `Optional` **CopyRangeLink**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:349](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L349)

___

### CopyViewportLink

• `Optional` **CopyViewportLink**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:354](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L354)

___

### CustomNames

• `Optional` **CustomNames**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:289](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L289)

___

### DataValidation

• `Optional` **DataValidation**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:294](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L294)

___

### DateMention

• `Optional` **DateMention**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:374](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L374)

___

### FileSlimming

• `Optional` **FileSlimming**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:299](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L299)

___

### HighlightPosition

• `Optional` **HighlightPosition**: `boolean`

高亮行列

#### Defined in

[src/types/Spreadsheet.ts:239](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L239)

___

### HistorySidebar

• `Optional` **HistorySidebar**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:304](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L304)

___

### ImagePermission

• `Optional` **ImagePermission**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:344](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L344)

___

### ImportFormula

• `Optional` **ImportFormula**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:359](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L359)

___

### IndependentViewport

• `Optional` **IndependentViewport**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:309](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L309)

___

### Lock

• `Optional` **Lock**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:379](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L379)

___

### Mention

• `Optional` **Mention**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:369](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L369)

___

### Outline

• `Optional` **Outline**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:314](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L314)

___

### PivotTable

• `Optional` **PivotTable**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:319](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L319)

___

### Remarks

• `Optional` **Remarks**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:324](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L324)

___

### SheetStyles

• `Optional` **SheetStyles**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:329](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L329)

___

### Slicer

• `Optional` **Slicer**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:334](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L334)

___

### SplitColumns

• `Optional` **SplitColumns**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:339](https://github.com/shimohq/shimo-js-sdk/blob/9d971e2/src/types/Spreadsheet.ts#L339)
