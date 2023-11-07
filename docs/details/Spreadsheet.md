
# 表格参数详细说明

## 1.功能跳转

1.单元格@，打开表格时可跳转至对应单元格

```typescript
import { connect } from 'shimo-js-sdk'
connect({
  smParams: {
    // 由MentionAt事件推送
    hash: 'MODOChZuU2S8M35Y'
  }
})
```
2.单元格评论，打开表格时可跳转至对应单元格并展开评论
```typescript
import { connect } from 'shimo-js-sdk'
connect({
  smParams: {
    // 由Comment事件推送
    hash: 'comment-vTBHz6FpLckq2duh'
  }
})
```
3.日期提醒，打开表格时可跳转至对应单元格
```typescript
import { connect } from 'shimo-js-sdk'
connect({
  smParams: {
    // 由DateMention事件推送
    hash: 'date-mention-MlRFslp55Mrt19Iq'
  }
})
```
4.单元格备注内容里插入@，打开表格时可跳转至对应单元格并展开备注
```typescript
import { connect } from 'shimo-js-sdk'
connect({
  smParams: {
    // 由MentionAt事件推送
    hash: 'MODOChZuU2S8M35Y'
  }
})
```

## 2.定位到指定工作表的区域/单元格

```typescript
import { connect } from 'shimo-js-sdk'
connect({
  smParams: {
    // 格式--> 单个单元格C7:C7，范围C7:C8，该参数可选，若不传该参数则会定位到指定工作表的A1单元格
    hash: 'anchor-C7:C7',
    sheetId: 'TEST111'
  }
})
```

## 3.禁用toast

```typescript
import { connect } from 'shimo-js-sdk'
connect({
  smParams: {
    // 会禁用所有表格toast
    disableAlertTip: true,
  }
})
```

## 4.进入预览模式

```typescript

import { connect } from 'shimo-js-sdk'
connect({
  smParams: {
    preview: true
  }
})
```

## 5.控制是否加载部分表格功能

```typescript

import { connect } from 'shimo-js-sdk'
connect({
  /*
  表格插件，除【图片权限设置】默认关闭外，其他插件默认全部开启，可以通过如下方式配置插件隐藏
  */
  plugins: {
    // 独立视图隐藏
    IndependentViewport: false, 
    /**
    * @deprecated
    图片权限设置开启(该功能自pd-3.12后已废弃，采用file.permissions代替，请不要再传递该参数)
    */
    ImagePermission: true
  }
})
```
<i>可控制的功能列表如下</i>

|功能名|功能描述|
|:----|:----|
|Attachment|插入附件|
|HighlightPosition|高亮所在行列|
|CalcOption|计算选项|
|CellHistory|单元格历史|
|Chart|图表|
|ClearRepeat|清除重复项|
|CombineSheets|合并工作表(合并工作表依赖跨表格引用，如果跨表格引用设置为不可见，合并工作表也会不可见)|
|Comment|评论|
|ConditionalFormat|条件格式|
|ExportImage|复制为图片/导出图片|
|CustomNames|定义名称|
|DataValidation|数据验证|
|FileSlimming|文件瘦身|
|HistorySidebar|历史模块|
|IndependentViewport|独立视图|
|Outline|分组|
|PivotTable|数据透视表|
|Remarks|备注|
|SheetStyles|套用表格样式|
|Slicer|切片器(切片器依赖套用表格样式/数据透视表创建，所以，如果设置表格样式/数据透视表为不显示，切片器也会不显示)|
|SplitColumns|分列|
|CopyRangeLink|获取指向此选区的链接|
|CopyViewportLink|复制视图链接以分享|
|ImportFormula|跨表格引用|
|BatchLock|批量锁定|
|Mention|@人/文件|
|DateMention|日期提醒|
|RangeRemind|关注选区|
|Lock|锁定|