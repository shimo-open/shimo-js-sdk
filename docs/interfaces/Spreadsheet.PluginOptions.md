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

[src/types/Spreadsheet.ts:535](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L535)

___

### BatchLock

• `Optional` **BatchLock**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:665](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L665)

___

### CalcOption

• `Optional` **CalcOption**: `boolean`

计算选项

#### Defined in

[src/types/Spreadsheet.ts:545](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L545)

___

### CellHistory

• `Optional` **CellHistory**: `boolean`

单元格历史

#### Defined in

[src/types/Spreadsheet.ts:550](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L550)

___

### ChartV2

• `Optional` **ChartV2**: `boolean`

图表

#### Defined in

[src/types/Spreadsheet.ts:555](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L555)

___

### CheckList

• `Optional` **CheckList**: `boolean`

任务清单

#### Defined in

[src/types/Spreadsheet.ts:560](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L560)

___

### ClearRepeat

• `Optional` **ClearRepeat**: `boolean`

清除重复项

#### Defined in

[src/types/Spreadsheet.ts:565](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L565)

___

### CombineSheets

• `Optional` **CombineSheets**: `boolean`

合并工作表 (合并工作表依赖跨表格引用，如果跨表格引用设置为不可见，合并工作表也会不可见)

#### Defined in

[src/types/Spreadsheet.ts:570](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L570)

___

### Comment

• `Optional` **Comment**: `boolean`

评论

#### Defined in

[src/types/Spreadsheet.ts:575](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L575)

___

### ConditionalFormat

• `Optional` **ConditionalFormat**: `boolean`

条件格式

#### Defined in

[src/types/Spreadsheet.ts:580](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L580)

___

### CopyAsImage

• `Optional` **CopyAsImage**: `boolean`

复制为图片

#### Defined in

[src/types/Spreadsheet.ts:585](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L585)

___

### CopyRangeLink

• `Optional` **CopyRangeLink**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:650](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L650)

___

### CopyViewportLink

• `Optional` **CopyViewportLink**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:655](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L655)

___

### CustomNames

• `Optional` **CustomNames**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:590](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L590)

___

### DataValidation

• `Optional` **DataValidation**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:595](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L595)

___

### DateMention

• `Optional` **DateMention**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:675](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L675)

___

### FileSlimming

• `Optional` **FileSlimming**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:600](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L600)

___

### FxEditor

• `Optional` **FxEditor**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:700](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L700)

___

### HighlightPosition

• `Optional` **HighlightPosition**: `boolean`

高亮行列

#### Defined in

[src/types/Spreadsheet.ts:540](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L540)

___

### HistorySidebar

• `Optional` **HistorySidebar**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:605](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L605)

___

### ImagePermission

• `Optional` **ImagePermission**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:645](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L645)

___

### ImportFormula

• `Optional` **ImportFormula**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:660](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L660)

___

### IndependentViewport

• `Optional` **IndependentViewport**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:610](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L610)

___

### Lock

• `Optional` **Lock**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:680](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L680)

___

### Mention

• `Optional` **Mention**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:670](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L670)

___

### MobileSheetTab

• `Optional` **MobileSheetTab**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:688](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L688)

___

### MobileToolbar

• `Optional` **MobileToolbar**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:696](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L696)

___

### Outline

• `Optional` **Outline**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:615](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L615)

___

### PivotTable

• `Optional` **PivotTable**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:620](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L620)

___

### Remarks

• `Optional` **Remarks**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:625](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L625)

___

### SheetStyles

• `Optional` **SheetStyles**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:630](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L630)

___

### SheetTab

• `Optional` **SheetTab**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:684](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L684)

___

### Slicer

• `Optional` **Slicer**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:635](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L635)

___

### SplitColumns

• `Optional` **SplitColumns**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:640](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L640)

___

### Toolbar

• `Optional` **Toolbar**: `boolean`

#### Defined in

[src/types/Spreadsheet.ts:692](https://github.com/shimohq/shimo-js-sdk/blob/c800ffa/src/types/Spreadsheet.ts#L692)
