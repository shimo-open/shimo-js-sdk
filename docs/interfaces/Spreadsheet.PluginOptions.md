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

[src/types/Spreadsheet.ts:211](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L211)

___

### BatchLock

• `Optional` **BatchLock**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:341](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L341)

___

### CalcOption

• `Optional` **CalcOption**: `boolean`

计算选项

#### Defined in

[src/types/Spreadsheet.ts:221](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L221)

___

### CellHistory

• `Optional` **CellHistory**: `boolean`

单元格历史

#### Defined in

[src/types/Spreadsheet.ts:226](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L226)

___

### ChartV2

• `Optional` **ChartV2**: `boolean`

图表

#### Defined in

[src/types/Spreadsheet.ts:231](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L231)

___

### CheckList

• `Optional` **CheckList**: `boolean`

任务清单

#### Defined in

[src/types/Spreadsheet.ts:236](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L236)

___

### ClearRepeat

• `Optional` **ClearRepeat**: `boolean`

清除重复项

#### Defined in

[src/types/Spreadsheet.ts:241](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L241)

___

### CombineSheets

• `Optional` **CombineSheets**: `boolean`

合并工作表 (合并工作表依赖跨表格引用，如果跨表格引用设置为不可见，合并工作表也会不可见)

#### Defined in

[src/types/Spreadsheet.ts:246](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L246)

___

### Comment

• `Optional` **Comment**: `boolean`

评论

#### Defined in

[src/types/Spreadsheet.ts:251](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L251)

___

### ConditionalFormat

• `Optional` **ConditionalFormat**: `boolean`

条件格式

#### Defined in

[src/types/Spreadsheet.ts:256](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L256)

___

### CopyAsImage

• `Optional` **CopyAsImage**: `boolean`

复制为图片

#### Defined in

[src/types/Spreadsheet.ts:261](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L261)

___

### CopyRangeLink

• `Optional` **CopyRangeLink**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:326](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L326)

___

### CopyViewportLink

• `Optional` **CopyViewportLink**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:331](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L331)

___

### CustomNames

• `Optional` **CustomNames**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:266](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L266)

___

### DataValidation

• `Optional` **DataValidation**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:271](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L271)

___

### DateMention

• `Optional` **DateMention**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:351](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L351)

___

### FileSlimming

• `Optional` **FileSlimming**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:276](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L276)

___

### HighlightPosition

• `Optional` **HighlightPosition**: `boolean`

高亮行列

#### Defined in

[src/types/Spreadsheet.ts:216](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L216)

___

### HistorySidebar

• `Optional` **HistorySidebar**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:281](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L281)

___

### ImagePermission

• `Optional` **ImagePermission**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:321](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L321)

___

### ImportFormula

• `Optional` **ImportFormula**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:336](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L336)

___

### IndependentViewport

• `Optional` **IndependentViewport**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:286](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L286)

___

### Lock

• `Optional` **Lock**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:356](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L356)

___

### Mention

• `Optional` **Mention**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:346](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L346)

___

### Outline

• `Optional` **Outline**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:291](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L291)

___

### PivotTable

• `Optional` **PivotTable**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:296](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L296)

___

### Remarks

• `Optional` **Remarks**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:301](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L301)

___

### SheetStyles

• `Optional` **SheetStyles**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:306](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L306)

___

### Slicer

• `Optional` **Slicer**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:311](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L311)

___

### SplitColumns

• `Optional` **SplitColumns**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:316](https://github.com/shimohq/shimo-js-sdk/blob/0289c44/src/types/Spreadsheet.ts#L316)
