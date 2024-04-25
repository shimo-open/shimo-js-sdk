
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
    BaseVersion: {
      // 隐藏版本分享按钮
      shareVersion: false,
    },
    FieldOptions: {
      // 禁用关连引用 & 关联公式
      disableRefField: true,
      // 禁用关联引用「从其他表格选择」
      disableExternalRefTable: true
    },
    Collaboration: {
      // 传 true 表示：无权限或被删除时，不弹石墨默认的弹窗而是抛出事件
      // 通过监听 editor 实例上的 error 事件接收具体 code -- 无权限： 8001, 文件被删除：8002
      customNoAccessTips: true
    },
    // 禁用视图分享
    ShareView: false
  }
})
```
<i>可控制的功能列表如下</i>

|功能名|功能描述|
|:----|:----|
|CombineTables|引用数据表|
|BaseVersion|历史 & 版本|
|FieldOptions|列配置|
|ShareView|视图分享|

## 3.切换工作表时更改浏览器地址栏信息（以便从地址栏复制链接给其他用户打开时定位到相同工作表）
```typescript
import { connect } from 'shimo-js-sdk'
import Base62Str from 'base62str'
const base62Instance = Base62Str.createInstance()
const searchParams = new URLSearchParams(location.search)
const smParams = searchParams.get('smParams')
const editor = await connect(...)
// table: 数据表的guid; view: 视图的guid
editor.on('paramsChanged', ({ table, view }: { table: string, view: string }) => {
  const newParams = smParams ? { ...JSON.parse(base62Instance.decodeStr(smParams)), table, view } : { table, view }
  const newSmParams = base62Instance.encodeStr(JSON.stringify(newParams))
  searchParams.set('smParams', newSmParams)
  // 用此方法修改浏览器地址不会刷新页面
  history.replaceState({}, '', location.href.replace(search, '?' + searchParams.toString()))
})
```

## 4.generateUrl调用场景
应用表格内涉及到生成应用表格相关的链接时会调用generateUrl，利用回调函数的第二个参数中包含一个字段`urlType`可以区分调用的场景。目前该字段仅应用表格有。
```typescript
const shimoSDK = await connect({
  ...,
  generateUrl(fileId: string, info: GenerateUrlInfo, params: StartParams /* smParams解出来的参数 */): string {
    const urlType = params.urlType
    
    if(urlType === 'shareView') {
      // 从视图分享来
      ...
    } else if(urlType === 'shareRecord') {
      // 分享记录或选区
      ...
    }
  }
})
```

<i>urlType参数及其意义</i>

|参数|参数意义|
|:----|:----|
|shareView|视图分享|
|shareVersion|版本分享|
|shareRecord|分享记录或选区|
|openTable|打开外部的数据表|


## 5.接入视图分享
#### 生成分享url
```typescript
const shimoSDK = await connect({
  ...,
  generateUrl(fileId: string, info: GenerateUrlInfo, params: StartParams): string {
    if (params?.urlType === 'shareView') {
      // 分享的guid，需要在初始化sdk时从smParams传入
      const shareGuid = info.shareGuid
      return xxx // 你拼接的url，部分客户要求去除smParams，初始化sdk时需要自行拼接smParams
    }
    return xxx
  }
})
```

#### 渲染视图分享模式
```typescript
const shimoSDK = await connect({
  ...,
  smParams: {
    ...,
    shareViewGuid: xxx
  }
})
```
