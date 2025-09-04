# API

## 方法

### 方法列表

| 方法                                      | 说明           |
| ----------------------------------------- | -------------- |
| [showHistory](#showhistory)               | 显示历史侧边栏 |
| [hideHistory](#hidehistory)               | 隐藏历史侧边栏 |
| [showRevision](#showrevision)             | 显示版本侧边栏 |
| [hideRevision](#hiderevision)             | 隐藏版本侧边栏 |
| [showDiscussion](#showdiscussion)         | 显示讨论侧边栏 |
| [hideDiscussion](#hidediscussion)         | 隐藏讨论侧边栏 |
| [showToc](#showtoc)                       | 显示目录       |
| [hideToc](#hidetoc)                       | 隐藏目录       |
| [createRevision](#createrevision)         | 创建版本       |
| [startDemonstration](#startdemonstration) | 进入演示模式   |
| [endDemonstration](#enddemonstration)     | 退出演示模式   |
| [print](#print)                           | 打印           |
| [showComments](#showcomments)             | 显示评论侧边栏 |
| [hideComments](#hidecomments)             | 隐藏评论侧边栏 |
| [insertExternalApp](#insertexternalapp)   | 插入第三方应用 |
| [showCollaborator](#showcollaborator)     | 显示编写者信息 |
| [hideCollaborator](#hidecollaborator)     | 隐藏编写者信息 |

---

### showHistory

#### 说明

显示历史侧边栏，用于查看文档的历史版本。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
showHistory: (options?: {}) => Promise<void>
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

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
hideHistory: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.hideHistory()
```

---

### showRevision

#### 说明

显示版本侧边栏，用于查看和管理文档版本。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
showRevision: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.showRevision()
```

---

### hideRevision

#### 说明

隐藏版本侧边栏。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
hideRevision: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.hideRevision()
```

---

### showDiscussion

#### 说明

显示讨论侧边栏，用于团队协作讨论。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
showDiscussion: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.showDiscussion()
```

---

### hideDiscussion

#### 说明

隐藏讨论侧边栏。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
hideDiscussion: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.hideDiscussion()
```

---

### showToc

#### 说明

显示文档目录，方便快速导航到文档的不同章节。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
showToc: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.showToc()
```

---

### hideToc

#### 说明

隐藏文档目录。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
hideToc: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.hideToc()
```

---

### createRevision

#### 说明

创建文档版本，保存当前状态为一个版本快照。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
createRevision: (options?: {}) => Promise<null | DocumentErrorMessage>
```

#### 返回值

- 成功时返回 `null`
- 失败时返回包含错误信息的对象

#### 示例

```javascript
const editor = sdk.getEditor()

try {
  const result = await editor.createRevision()
  if (result?.message) {
    console.error('创建版本失败:', result.message)
  } else {
    console.log('版本创建成功')
  }
} catch (error) {
  console.error('创建版本时发生错误:', error)
}
```

---

### startDemonstration

#### 说明

进入演示模式，开始文档演示。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
startDemonstration: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.startDemonstration()
```

---

### endDemonstration

#### 说明

退出演示模式，结束文档演示。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
endDemonstration: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.endDemonstration()
```

---

### print

#### 说明

打印文档。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
print: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.print()
```

---

### showComments

#### 说明

显示评论侧边栏，用于查看和管理文档评论。

_自 22.6.1 版本开始支持_

#### 类型定义

```typescript
showComments: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.showComments()
```

---

### hideComments

#### 说明

隐藏评论侧边栏。

_自 22.6.1 版本开始支持_

#### 类型定义

```typescript
hideComments: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.hideComments()
```

---

### insertExternalApp

#### 说明

插入第三方应用到文档中。功能可用性受版本限制。

_自 22.6.1 版本开始支持_

#### 类型定义

```typescript
insertExternalApp: (url: string) => Promise<null | DocumentErrorMessage>
```

#### 参数

- `url`: 第三方应用的 URL 地址

#### 返回值

- 成功时返回 `null`
- 失败时返回包含错误信息的对象

#### 示例

```javascript
const editor = sdk.getEditor()

try {
  const result = await editor.insertExternalApp('https://your-app-url.com')
  if (result?.message) {
    console.error('插入应用失败:', result.message)
  } else {
    console.log('应用插入成功')
  }
} catch (error) {
  console.error('插入应用时发生错误:', error)
}
```

---

### showCollaborator

#### 说明

显示编写者信息，展示当前文档的协作者列表。

_自 24.11.1 版本开始支持_

#### 类型定义

```typescript
showCollaborator: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.showCollaborator()
```

---

### hideCollaborator

#### 说明

隐藏编写者信息。

_自 24.11.1 版本开始支持_

#### 类型定义

```typescript
hideCollaborator: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()
await editor.hideCollaborator()
```

---

# EventMap

## 事件列表

| 事件名                                | 说明         | 载荷类型           |
| ------------------------------------- | ------------ | ------------------ |
| [titleChange](#titlechange)           | 标题发生变更 | `string`           |
| [MouseMove](#mousemove)               | 鼠标移动事件 | `MouseMovePayload` |
| [VerticalScroll](#verticalscroll)     | 垂直滚动事件 | `MouseMovePayload` |
| [HorizontalScroll](#horizontalscroll) | 水平滚动事件 | `MouseMovePayload` |

---

## titleChange

### 说明

当文档标题发生变更时触发此事件。

### 类型定义

```typescript
titleChange: string
```

### 示例

```javascript
const editor = sdk.getEditor()

// 监听标题变更事件
editor.on('titleChange', (newTitle) => {
  console.log('文档标题已更改为:', newTitle)

  // 可以在这里更新页面标题或其他UI元素
  document.title = newTitle
})
```

---

## MouseMove

### 说明

当鼠标在文档中移动时触发此事件。

### 类型定义

```typescript
MouseMove: MouseMovePayload
```

### 示例

```javascript
const editor = sdk.getEditor()

// 监听鼠标移动事件
editor.on('MouseMove', (payload) => {
  console.log('鼠标移动:', payload)
  // 可以用于实现自定义的鼠标跟踪功能
})
```

---

## VerticalScroll

### 说明

当文档发生垂直滚动时触发此事件。

### 类型定义

```typescript
VerticalScroll: MouseMovePayload
```

### 示例

```javascript
const editor = sdk.getEditor()

// 监听垂直滚动事件
editor.on('VerticalScroll', (payload) => {
  console.log('垂直滚动:', payload)
  // 可以用于实现滚动位置的记录或同步
})
```

---

## HorizontalScroll

### 说明

当文档发生水平滚动时触发此事件。

### 类型定义

```typescript
HorizontalScroll: MouseMovePayload
```

### 示例

```javascript
const editor = sdk.getEditor()

// 监听水平滚动事件
editor.on('HorizontalScroll', (payload) => {
  console.log('水平滚动:', payload)
  // 可以用于实现滚动位置的记录或同步
})
```
