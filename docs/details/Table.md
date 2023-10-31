
# 应用表格参数详细说明

## 1.功能跳转

1.单元格评论，打开应用表格时打开相应记录编辑弹窗并定位到相应评论
```typescript
import { connect } from 'shimo-js-sdk'
connect({
  smParams: {
    // 由Comment事件推送
    hash: 'comment-DzFvFR2bp31-sdY0UYHBd0S-clfZcl2VF254T044-t9mPduLtyp4-g4XV3B1Z8PX:%E6%A0%87%E9%A2%98'
  }
})
```
> 其中 hash 由事件推送的 selectionGuid 和 selectionTitle 拼接而成，拼接规则为 selectionGuid-selectionTitle


## 2.控制是否加载部分应用表格功能

```typescript

import { connect } from 'shimo-js-sdk'
connect({
  /*
  应用表格插件，目前开放以下插件的配置
  */
  plugins: {
    // 隐藏引用数据表
    CombineTables: false, 
    // 隐藏版本分享按钮
    BaseVersion: {
      shareVersion: false,
    },
    // 禁用列配置面板的 关连引用 & 关联公式
    FieldOptions: {
      disableRefField: true,
    },
  }
})
```
<i>可控制的功能列表如下</i>

|功能名|功能描述|
|:----|:----|
|CombineTables|引用数据表|
|BaseVersion|历史 & 版本|
|FieldOptions|列配置|

