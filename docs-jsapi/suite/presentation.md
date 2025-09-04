# API

## 方法

### 方法列表

| 方法                                      | 说明         |
| ----------------------------------------- | ------------ |
| [showHistory](#showhistory)               | 显示历史     |
| [hideHistory](#hidehistory)               | 隐藏历史     |
| [startDemonstration](#startdemonstration) | 开始本地演示 |
| [endDemonstration](#enddemonstration)     | 结束本地演示 |
| [createRevision](#createrevision)         | 创建版本     |
| [export](#export)                         | 导出         |
| [print](#print)                           | 打印         |

---

### showHistory

#### 说明

显示历史侧边栏，用于查看文档的历史版本。

#### 类型定义

```typescript
showHistory: () => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.showHistory()
```

---

### hideHistory

#### 说明

隐藏历史侧边栏。

#### 类型定义

```typescript
hideHistory: () => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.hideHistory()
```

---

### startDemonstration

#### 说明

开始本地演示模式，进入演示文稿的播放状态。

#### 类型定义

```typescript
startDemonstration: () => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.startDemonstration()
```

---

### endDemonstration

#### 说明

结束本地演示模式，退出演示文稿的播放状态。

#### 类型定义

```typescript
endDemonstration: () => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.endDemonstration()
```

---

### createRevision

#### 说明

创建文档版本，保存当前状态为一个版本快照。

_自 co-1.5 版本开始支持_

#### 类型定义

```typescript
createRevision: () => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.createRevision()
```

---

### export

#### 说明

导出演示文稿为指定格式。支持导出为图片或 PDF 格式。

_自 co-1.5 版本开始支持_

#### 类型定义

```typescript
export: (type: 'image' | 'imagePdf') => Promise<void>
```

#### 参数

- `type`: 导出类型
  - `'image'`: 导出为图片
  - `'imagePdf'`: 导出为 PDF

#### 示例

```javascript
const editor = sdk.getEditor()

// 导出为图片
await editor.export('image')

// 导出为PDF
await editor.export('imagePdf')
```

---

### print

#### 说明

打印演示文稿。

_自 co-1.5 版本开始支持_

#### 类型定义

```typescript
print: () => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.print()
```

---

# EventMap

## 事件列表

| 事件名          | 说明     | 载荷类型                       |
| --------------- | -------- | ------------------------------ |
| [error](#error) | 错误事件 | `{ data?: any, code: number }` |

---

## error

### 说明

当演示文稿编辑器发生错误时触发此事件。可用于捕获和处理编辑器运行过程中的各种错误。

### 类型定义

```typescript
error: {
  /** 错误信息 */
  data?: any
  /** 错误码 */
  code: number
}
```

### 参数说明

- `data`: 错误的详细信息，可以是任意类型的数据
- `code`: 错误代码，用于标识错误类型

### 示例

```javascript
const editor = sdk.getEditor()

// 监听错误事件
editor.on('error', (payload) => {
  console.error('演示文稿发生错误:')
  console.error('错误代码:', payload.code)
  console.error('错误详情:', payload.data)

  // 根据错误码进行不同处理
  switch (payload.code) {
    case 500:
      console.error('服务器内部错误')
      break
    case 403:
      console.error('权限不足')
      break
    default:
      console.error('未知错误')
  }
})
```

### 错误处理建议

```javascript
// 完整的错误处理示例
editor.on('error', (payload) => {
  // 记录错误日志
  console.error(`[Presentation Error ${payload.code}]`, payload.data)

  // 向用户显示友好的错误提示
  if (payload.code >= 500) {
    alert('服务器错误，请稍后重试')
  } else if (payload.code >= 400) {
    alert('操作失败，请检查权限或网络连接')
  } else {
    alert('发生未知错误，请联系技术支持')
  }

  // 可选：上报错误到监控系统
  // reportError('presentation', payload.code, payload.data)
})
```
