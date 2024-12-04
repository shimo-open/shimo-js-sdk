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
- [FxEditor](Spreadsheet.PluginOptions.md#fxeditor)
- [HighlightPosition](Spreadsheet.PluginOptions.md#highlightposition)
- [HistorySidebar](Spreadsheet.PluginOptions.md#historysidebar)
- [ImagePermission](Spreadsheet.PluginOptions.md#imagepermission)
- [ImportFormula](Spreadsheet.PluginOptions.md#importformula)
- [IndependentViewport](Spreadsheet.PluginOptions.md#independentviewport)
- [Lock](Spreadsheet.PluginOptions.md#lock)
- [Mention](Spreadsheet.PluginOptions.md#mention)
- [MobileSheetTab](Spreadsheet.PluginOptions.md#mobilesheettab)
- [MobileToolbar](Spreadsheet.PluginOptions.md#mobiletoolbar)
- [Outline](Spreadsheet.PluginOptions.md#outline)
- [PivotTable](Spreadsheet.PluginOptions.md#pivottable)
- [Remarks](Spreadsheet.PluginOptions.md#remarks)
- [SheetStyles](Spreadsheet.PluginOptions.md#sheetstyles)
- [SheetTab](Spreadsheet.PluginOptions.md#sheettab)
- [Slicer](Spreadsheet.PluginOptions.md#slicer)
- [SplitColumns](Spreadsheet.PluginOptions.md#splitcolumns)
- [Toolbar](Spreadsheet.PluginOptions.md#toolbar)

## Properties

### Attachment

• `Optional` **Attachment**: `boolean`

附件 (附件 / 云文件)

#### Defined in

[src/types/Spreadsheet.ts:531](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L531)

___

### BatchLock

• `Optional` **BatchLock**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:661](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L661)

___

### CalcOption

• `Optional` **CalcOption**: `boolean`

计算选项

#### Defined in

[src/types/Spreadsheet.ts:541](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L541)

___

### CellHistory

• `Optional` **CellHistory**: `boolean`

单元格历史

#### Defined in

[src/types/Spreadsheet.ts:546](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L546)

___

### ChartV2

• `Optional` **ChartV2**: `boolean`

图表

#### Defined in

[src/types/Spreadsheet.ts:551](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L551)

___

### CheckList

• `Optional` **CheckList**: `boolean`

任务清单

#### Defined in

[src/types/Spreadsheet.ts:556](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L556)

___

### ClearRepeat

• `Optional` **ClearRepeat**: `boolean`

清除重复项

#### Defined in

[src/types/Spreadsheet.ts:561](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L561)

___

### CombineSheets

• `Optional` **CombineSheets**: `boolean`

合并工作表 (合并工作表依赖跨表格引用，如果跨表格引用设置为不可见，合并工作表也会不可见)

#### Defined in

[src/types/Spreadsheet.ts:566](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L566)

___

### Comment

• `Optional` **Comment**: `boolean`

评论

#### Defined in

[src/types/Spreadsheet.ts:571](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L571)

___

### ConditionalFormat

• `Optional` **ConditionalFormat**: `boolean`

条件格式

#### Defined in

[src/types/Spreadsheet.ts:576](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L576)

___

### CopyAsImage

• `Optional` **CopyAsImage**: `boolean`

复制为图片

#### Defined in

[src/types/Spreadsheet.ts:581](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L581)

___

### CopyRangeLink

• `Optional` **CopyRangeLink**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:646](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L646)

___

### CopyViewportLink

• `Optional` **CopyViewportLink**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:651](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L651)

___

### CustomNames

• `Optional` **CustomNames**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:586](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L586)

___

### DataValidation

• `Optional` **DataValidation**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:591](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L591)

___

### DateMention

• `Optional` **DateMention**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:671](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L671)

___

### FileSlimming

• `Optional` **FileSlimming**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:596](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L596)

___

### FxEditor

• `Optional` **FxEditor**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:696](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L696)

___

### HighlightPosition

• `Optional` **HighlightPosition**: `boolean`

高亮行列

#### Defined in

[src/types/Spreadsheet.ts:536](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L536)

___

### HistorySidebar

• `Optional` **HistorySidebar**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:601](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L601)

___

### ImagePermission

• `Optional` **ImagePermission**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:641](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L641)

___

### ImportFormula

• `Optional` **ImportFormula**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:656](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L656)

___

### IndependentViewport

• `Optional` **IndependentViewport**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:606](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L606)

___

### Lock

• `Optional` **Lock**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:676](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L676)

___

### Mention

• `Optional` **Mention**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:666](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L666)

___

### MobileSheetTab

• `Optional` **MobileSheetTab**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:684](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L684)

___

### MobileToolbar

• `Optional` **MobileToolbar**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:692](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L692)

___

### Outline

• `Optional` **Outline**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:611](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L611)

___

### PivotTable

• `Optional` **PivotTable**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:616](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L616)

___

### Remarks

• `Optional` **Remarks**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:621](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L621)

___

### SheetStyles

• `Optional` **SheetStyles**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:626](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L626)

___

### SheetTab

• `Optional` **SheetTab**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:680](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L680)

___

### Slicer

• `Optional` **Slicer**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:631](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L631)

___

### SplitColumns

• `Optional` **SplitColumns**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:636](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L636)

___

### Toolbar

• `Optional` **Toolbar**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:688](https://github.com/shimohq/shimo-js-sdk/blob/adbcbcd/src/types/Spreadsheet.ts#L688)
