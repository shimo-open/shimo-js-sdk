
# 表格参数对接说明

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
    // 格式--> 单个单元格C7:C7，范围C7:C8
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

## 4.控制是否加载部分表格功能

```typescript

import { connect } from 'shimo-js-sdk'
connect({
  /*
  表格插件，除【图片权限设置】默认关闭外，其他插件默认全部开启，可以通过如下方式配置插件隐藏
  */
  plugins: {
    // 独立视图隐藏
     IndependentViewport: false, 
      // 图片权限设置开启(该功能自pd-3.12后已废弃，采用file.permissions代替，请不要再传递该参数)
     ImagePermission: true
  }
})
```

|序号|功能名称|功能描述|
|:----|:----|:----|
|1|Attachment|附件(附件/云文件)|
|2|HighlightPosition|高亮行列|
|3|CalcOption|计算选项|
|4|CellHistory|单元格历史|
|5|Chart|图表|
|6|CheckList|任务清单|
|7|ClearRepeat|清除重复项|
|8|CombineSheets|合并工作表(合并工作表依赖跨表格引用，如果跨表格引用设置为不可见，合并工作表也会不可见)|
|9|Comment|评论|
|10|ConditionalFormat|条件格式|
|11|ExportImage|复制为图片/导出图片|
|12|CustomNames|定义名称|
|13|DataValidation|数据验证|
|14|FileSlimming|文件瘦身|
|15|HistorySidebar|历史模块|
|16|IndependentViewport|独立视图|
|17|Outline|分组|
|18|PivotTable|数据透视表|
|19|Remarks|备注|
|20|SheetStyles|套用表格样式|
|21|Slicer|切片器(切片器依赖套用表格样式/数据透视表创建，所以，如果设置表格样式/数据透视表为不显示，切片器也会不显示)|
|22|SplitColumns|分列|
|23|ImagePermission|图片权限设置|
|24|CopyRangeLink|获取指向此选区的链接|
|25|CopyViewportLink|复制视图链接以分享|
|26|ImportFormula|跨表格引用|
|27|BatchLock|批量锁定|
|28|Mention|@人/文件|
|29|DateMention|日期提醒|
|30|RangeRemind|关注选区|
|31|Lock|锁定|
