# API

## 方法

### 方法列表

流程图 (FlowChart) 编辑器继承了基础编辑器的所有方法，但没有特有的方法。所有操作通过基础编辑器接口完成。

| 方法     | 说明         |
| -------- | ------------ |
| setTitle | 设置文档标题 |
| on       | 监听事件     |
| off      | 取消监听事件 |

> **注意**: 流程图编辑器主要通过事件驱动进行交互，具体的绘制和编辑操作由编辑器内部处理。

---

# EventMap

## 事件列表

| 事件名          | 说明     | 载荷类型                       |
| --------------- | -------- | ------------------------------ |
| [error](#error) | 错误事件 | `{ data?: any, code: number }` |

---

## error

### 说明

当流程图编辑器发生错误时触发此事件。

### 类型定义

```typescript
error: {
  data?: any
  code: number
}
```

### 示例

```javascript
const editor = sdk.getEditor()

editor.on('error', (payload) => {
  console.error('流程图编辑器发生错误:')
  console.error('错误代码:', payload.code)
  console.error('错误详情:', payload.data)

  // 根据错误码进行处理
  switch (payload.code) {
    case 400:
      console.error('请求参数错误')
      break
    case 403:
      console.error('权限不足')
      break
    case 500:
      console.error('服务器内部错误')
      break
    default:
      console.error('未知错误')
  }
})
```
