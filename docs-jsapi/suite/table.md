# API

## 方法

### 方法列表

| 方法                              | 说明           |
| --------------------------------- | -------------- |
| [showRevision](#showrevision)     | 显示版本侧边栏 |
| [hideRevision](#hiderevision)     | 隐藏版本侧边栏 |
| [createRevision](#createrevision) | 创建版本       |

---

### showRevision

#### 说明

显示版本侧边栏，用于查看和管理简单表格的版本历史。

#### 类型定义

```typescript
showRevision: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()

// 显示版本侧边栏
await editor.showRevision()
```

---

### hideRevision

#### 说明

隐藏版本侧边栏。

#### 类型定义

```typescript
hideRevision: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()

// 隐藏版本侧边栏
await editor.hideRevision()
```

---

### createRevision

#### 说明

创建简单表格的版本快照。

#### 类型定义

```typescript
createRevision: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()

// 创建版本
await editor.createRevision()
console.log('版本创建成功')
```

---

# EventMap

## 事件列表

| 事件名          | 说明     | 载荷类型                           |
| --------------- | -------- | ---------------------------------- |
| [error](#error) | 错误事件 | `{ data?: unknown, code: number }` |

---

## error

### 说明

当简单表格编辑器发生错误时触发此事件。

### 类型定义

```typescript
error: {
  data?: unknown
  code: number
}
```

### 示例

```javascript
const editor = sdk.getEditor()

editor.on('error', (payload) => {
  console.error('简单表格编辑器发生错误:')
  console.error('错误代码:', payload.code)
  console.error('错误详情:', payload.data)

  // 根据错误码进行处理
  if (payload.code >= 400) {
    console.error('客户端错误，请检查操作参数')
  } else if (payload.code >= 500) {
    console.error('服务器错误，请稍后重试')
  }
})
```
