# API

## 方法

### 方法列表

| 方法                                            | 说明                     |
| ----------------------------------------------- | ------------------------ |
| [getComments](#getcomments)                     | 获取所有评论             |
| [getComment](#getcomment)                       | 获取单条评论             |
| [getCommentBySelection](#getcommentbyselection) | 获取一个选区已存在的评论 |
| [addComment](#addcomment)                       | 添加评论                 |
| [replyComment](#replycomment)                   | 添加回复                 |
| [removeComment](#removecomment)                 | 删除评论                 |
| [removeReply](#removereply)                     | 删除回复                 |
| [updateComment](#updatecomment)                 | 更新评论或回复           |
| [goToComment](#gotocomment)                     | 跳转到评论所在位置       |
| [getSelectedText](#getselectedtext)             | 获取选区文本             |
| [goToPage](#gotopage)                           | 跳转页面                 |
| [goToTop](#gototop)                             | 跳到文档顶部             |
| [addPageNum](#addpagenum)                       | 添加页码                 |
| [removeAllPageNums](#removeallpagenums)         | 删除所有页码             |
| [showToc](#showtoc)                             | 显示文档结构             |
| [hideToc](#hidetoc)                             | 隐藏文档结构图           |
| [zoom](#zoom)                                   | 文档缩放                 |
| [setBold](#setbold)                             | 设置加粗                 |
| [setItalic](#setitalic)                         | 设置斜体                 |
| [print](#print)                                 | 打印                     |
| [printAll](#printall)                           | 打印所有页面             |
| [createRevision](#createrevision)               | 创建版本                 |
| [showHistory](#showhistory)                     | 预览历史版本             |
| [hideHistory](#hidehistory)                     | 关闭历史版本预览         |
| [updateSignature](#updatesignature)             | 更新签名图片             |
| [export](#export)                               | 导出                     |

---

### getComments

#### 说明

获取文档中的所有评论列表。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
getComments: (options: { includeChapterTitle?: boolean }) =>
  Promise<DocumentProComment[]>
```

#### 参数

- `includeChapterTitle`: 是否包含对应的标题信息（默认为 false）

#### 示例

```javascript
const editor = sdk.getEditor()

// 获取所有评论
const comments = await editor.getComments({
  includeChapterTitle: true
})

comments.forEach((comment) => {
  console.log('评论ID:', comment.id)
  console.log('评论内容:', comment.data.text)
  console.log('引用文本:', comment.quoteText)
  if (comment.title) {
    console.log('所在章节:', comment.title)
  }
})
```

---

### getComment

#### 说明

根据评论 ID 获取单条评论的详细信息。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
getComment: (options: { commentId: string; includeChapterTitle?: boolean }) =>
  Promise<DocumentProComment>
```

#### 参数

- `commentId`: 评论 ID
- `includeChapterTitle`: 是否包含对应的标题信息

#### 示例

```javascript
const editor = sdk.getEditor()

try {
  const comment = await editor.getComment({
    commentId: 'comment-123',
    includeChapterTitle: true
  })

  console.log('评论详情:', comment)
  console.log('创建时间:', comment.createTime)
  console.log('最后更新:', comment.lastUpdateTime)
} catch (error) {
  console.error('获取评论失败:', error)
}
```

---

### getCommentBySelection

#### 说明

获取当前选中区域已存在的评论 ID。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
getCommentBySelection: (options?: {}) => Promise<string>
```

#### 返回值

返回评论 ID 字符串

#### 示例

```javascript
const editor = sdk.getEditor()

// 获取选中区域的评论
const commentId = await editor.getCommentBySelection()
if (commentId) {
  console.log('选中区域的评论ID:', commentId)
  // 可以进一步获取评论详情
  const comment = await editor.getComment({ commentId })
} else {
  console.log('选中区域没有评论')
}
```

---

### addComment

#### 说明

在当前选中的文本上添加评论。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
addComment: (options: { text: string }) => Promise<DocumentProComment>
```

#### 参数

- `text`: 评论内容

#### 示例

```javascript
const editor = sdk.getEditor()

// 添加评论
const comment = await editor.addComment({
  text: '这段内容需要修改'
})

console.log('评论已添加:', comment.id)
```

---

### replyComment

#### 说明

对指定评论添加回复。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
replyComment: (options: { commentId: string; text: string }) =>
  Promise<DocumentProCommentData>
```

#### 参数

- `commentId`: 要回复的评论 ID
- `text`: 回复内容

#### 示例

```javascript
const editor = sdk.getEditor()

// 回复评论
const reply = await editor.replyComment({
  commentId: 'comment-123',
  text: '我同意这个建议'
})

console.log('回复已添加:', reply.id)
```

---

### removeComment

#### 说明

删除指定的评论。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
removeComment: (options: { commentId: string }) => Promise<void>
```

#### 参数

- `commentId`: 要删除的评论 ID

#### 示例

```javascript
const editor = sdk.getEditor()

// 删除评论
await editor.removeComment({
  commentId: 'comment-123'
})

console.log('评论已删除')
```

---

### removeReply

#### 说明

删除指定的回复。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
removeReply: (options: { commentDataId: string }) => Promise<void>
```

#### 参数

- `commentDataId`: 要删除的回复数据 ID

#### 示例

```javascript
const editor = sdk.getEditor()

// 删除回复
await editor.removeReply({
  commentDataId: 'reply-456'
})

console.log('回复已删除')
```

---

### updateComment

#### 说明

更新评论或回复的内容。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
updateComment: (options: { commentDataId: string; text: string }) =>
  Promise<void>
```

#### 参数

- `commentDataId`: 评论数据或回复数据的 ID
- `text`: 新的评论内容

#### 示例

```javascript
const editor = sdk.getEditor()

// 更新评论内容
await editor.updateComment({
  commentDataId: 'comment-data-123',
  text: '修改后的评论内容'
})

console.log('评论已更新')
```

---

### goToComment

#### 说明

跳转到指定评论所在的位置。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
goToComment: (options: {
  commentId: string
  shouldScrollToComment?: boolean
  shouldSelectComment?: boolean
}) => Promise<void>
```

#### 参数

- `commentId`: 评论 ID
- `shouldScrollToComment`: 是否滚动到评论所在位置（默认为 true）
- `shouldSelectComment`: 是否需要选中评论正文（默认为 false）

#### 示例

```javascript
const editor = sdk.getEditor()

// 跳转到评论位置并选中
await editor.goToComment({
  commentId: 'comment-123',
  shouldScrollToComment: true,
  shouldSelectComment: true
})
```

---

### getSelectedText

#### 说明

获取当前选区的文本内容。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
getSelectedText: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()

// 获取选区文本
await editor.getSelectedText()
```

---

### goToPage

#### 说明

跳转到指定页面。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
goToPage: (options: { pageNum: number }) => Promise<void>
```

#### 参数

- `pageNum`: 页码

#### 示例

```javascript
const editor = sdk.getEditor()

// 跳转到第5页
await editor.goToPage({
  pageNum: 5
})
```

---

### goToTop

#### 说明

跳转到文档顶部。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
goToTop: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()

// 跳转到文档顶部
await editor.goToTop()
```

---

### addPageNum

#### 说明

在指定位置添加页码。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
addPageNum: (options: {
  position: DocumentPos
  alignment?: HorizontalAlignment
}) => Promise<void>
```

#### 参数

- `position`: 页码的插入位置（0-正文, 1-页眉, 2-页脚）
- `alignment`: 页码的对齐方式（0-右对齐, 1-左对齐, 2-居中对齐，默认为 1）

#### 示例

```javascript
const editor = sdk.getEditor()

// 在页脚居中添加页码
await editor.addPageNum({
  position: 2, // 页脚
  alignment: 2 // 居中对齐
})
```

---

### removeAllPageNums

#### 说明

删除文档中的所有页码。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
removeAllPageNums: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()

// 删除所有页码
await editor.removeAllPageNums()
```

---

### showToc

#### 说明

显示文档结构（目录）。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
showToc: (options: { shouldDisableCache?: boolean }) => Promise<void>
```

#### 参数

- `shouldDisableCache`: 禁用文档结构图的默认缓存（默认为 true）

#### 示例

```javascript
const editor = sdk.getEditor()

// 显示文档结构
await editor.showToc({
  shouldDisableCache: true
})
```

---

### hideToc

#### 说明

隐藏文档结构图。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
hideToc: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()

// 隐藏文档结构
await editor.hideToc()
```

---

### zoom

#### 说明

设置文档缩放比例。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
zoom: (options: { percent: number }) => Promise<void>
```

#### 参数

- `percent`: 缩放百分比

#### 示例

```javascript
const editor = sdk.getEditor()

// 设置为150%缩放
await editor.zoom({
  percent: 150
})
```

---

### setBold

#### 说明

设置选中文本的加粗样式。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
setBold: (options: { isBold?: boolean }) => Promise<void>
```

#### 参数

- `isBold`: 是否加粗（默认为 false）

#### 示例

```javascript
const editor = sdk.getEditor()

// 设置选中文本为加粗
await editor.setBold({
  isBold: true
})
```

---

### setItalic

#### 说明

设置选中文本的斜体样式。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
setItalic: (options: { isItalic?: boolean }) => Promise<void>
```

#### 参数

- `isItalic`: 是否斜体

#### 示例

```javascript
const editor = sdk.getEditor()

// 设置选中文本为斜体
await editor.setItalic({
  isItalic: true
})
```

---

### print

#### 说明

打印指定页面。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
print: (options: { pageNums: number[] }) => Promise<void>
```

#### 参数

- `pageNums`: 要打印的页码列表

#### 示例

```javascript
const editor = sdk.getEditor()

// 打印第1、2、3页
await editor.print({
  pageNums: [1, 2, 3]
})
```

---

### printAll

#### 说明

打印文档的所有页面。

_自 22.2.1 版本开始支持_

#### 类型定义

```typescript
printAll: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()

// 打印所有页面
await editor.printAll()
```

---

### createRevision

#### 说明

创建文档版本。

#### 类型定义

```typescript
createRevision: (options?: { name: string }) => Promise<void>
```

#### 参数

- `name`: 版本名称（可选）

#### 示例

```javascript
const editor = sdk.getEditor()

// 创建版本
await editor.createRevision({
  name: '第一次修订'
})
```

---

### showHistory

#### 说明

预览历史版本。

#### 类型定义

```typescript
showHistory: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()

// 显示历史版本
await editor.showHistory()
```

---

### hideHistory

#### 说明

关闭历史版本预览。

#### 类型定义

```typescript
hideHistory: (options?: {}) => Promise<void>
```

#### 示例

```javascript
const editor = sdk.getEditor()

// 隐藏历史版本
await editor.hideHistory()
```

---

### updateSignature

#### 说明

更新文档中的签名图片。

#### 类型定义

```typescript
updateSignature: (payload: UpdateSignaturePayload) => Promise<void>
```

#### 参数

- `payload`: 签名更新载荷
  - `url`: 签名图片的 data URL，传 null 则清除签名图片
  - `id`: 签名图片的唯一 ID

#### 示例

```javascript
const editor = sdk.getEditor()

// 更新签名图片
await editor.updateSignature({
  url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...',
  id: 'signature-123'
})

// 清除签名图片
await editor.updateSignature({
  url: null,
  id: 'signature-123'
})
```

---

### export

#### 说明

导出传统文档为指定格式。

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

# EventMap

## 事件列表

| 事件名                                            | 说明                 | 载荷类型                              |
| ------------------------------------------------- | -------------------- | ------------------------------------- |
| [selectionEnded](#selectionended)                 | 选择结束事件         | `{}`                                  |
| [documentChanged](#documentchanged)               | 文档内容变更事件     | `{}`                                  |
| [commentClicked](#commentclicked)                 | 评论点击事件         | `{ commentIds?: string[] }`           |
| [documentRecalculated](#documentrecalculated)     | 文档重新计算事件     | `{}`                                  |
| [error](#error)                                   | 错误事件             | `{ data?: any, code: number }`        |
| [MouseMove](#mousemove)                           | 鼠标移动事件         | `MouseMovePayload`                    |
| [VerticalScroll](#verticalscroll)                 | 垂直滚动事件         | `MouseMovePayload`                    |
| [HorizontalScroll](#horizontalscroll)             | 水平滚动事件         | `MouseMovePayload`                    |
| [showSignatureComponent](#showsignaturecomponent) | 请求打开签名组件事件 | `{ aspectRatio: number, id: string }` |

---

## selectionEnded

### 说明

当用户完成文本选择操作时触发。

### 类型定义

```typescript
selectionEnded: {
}
```

### 示例

```javascript
const editor = sdk.getEditor()

editor.on('selectionEnded', () => {
  console.log('用户完成了文本选择')
  // 可以在这里获取选中的文本或执行相关操作
})
```

---

## documentChanged

### 说明

当文档内容发生变更时触发。

### 类型定义

```typescript
documentChanged: {
}
```

### 示例

```javascript
const editor = sdk.getEditor()

editor.on('documentChanged', () => {
  console.log('文档内容已变更')
  // 可以在这里执行自动保存或其他操作
})
```

---

## commentClicked

### 说明

当用户点击评论时触发。

_自 22.2.1 版本开始支持_

### 类型定义

```typescript
commentClicked: {
  commentIds?: string[]
}
```

### 示例

```javascript
const editor = sdk.getEditor()

editor.on('commentClicked', (payload) => {
  if (payload.commentIds && payload.commentIds.length > 0) {
    console.log('点击的评论ID列表:', payload.commentIds)

    // 可以获取评论详情并显示
    payload.commentIds.forEach(async (commentId) => {
      const comment = await editor.getComment({ commentId })
      console.log('评论内容:', comment.data.text)
    })
  }
})
```

---

## documentRecalculated

### 说明

当文档重新计算完成时触发。

### 类型定义

```typescript
documentRecalculated: {
}
```

### 示例

```javascript
const editor = sdk.getEditor()

editor.on('documentRecalculated', () => {
  console.log('文档重新计算完成')
})
```

---

## error

### 说明

当编辑器发生错误时触发。

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
  console.error('传统文档编辑器发生错误:')
  console.error('错误代码:', payload.code)
  console.error('错误详情:', payload.data)
})
```

---

## MouseMove

### 说明

当鼠标在文档中移动时触发。

### 类型定义

```typescript
MouseMove: MouseMovePayload
```

### 示例

```javascript
const editor = sdk.getEditor()

editor.on('MouseMove', (payload) => {
  console.log('鼠标移动:', payload)
})
```

---

## VerticalScroll

### 说明

当文档发生垂直滚动时触发。

### 类型定义

```typescript
VerticalScroll: MouseMovePayload
```

### 示例

```javascript
const editor = sdk.getEditor()

editor.on('VerticalScroll', (payload) => {
  console.log('垂直滚动:', payload)
})
```

---

## HorizontalScroll

### 说明

当文档发生水平滚动时触发。

### 类型定义

```typescript
HorizontalScroll: MouseMovePayload
```

### 示例

```javascript
const editor = sdk.getEditor()

editor.on('HorizontalScroll', (payload) => {
  console.log('水平滚动:', payload)
})
```

---

## showSignatureComponent

### 说明

当需要显示签名组件时触发此事件。

### 类型定义

```typescript
showSignatureComponent: {
  aspectRatio: number
  id: string
}
```

### 参数说明

- `aspectRatio`: 签名图片的宽高比
- `id`: 签名图片的唯一 ID，用于在 `updateSignature()` 时指定想更新的签名组件

### 示例

```javascript
const editor = sdk.getEditor()

editor.on('showSignatureComponent', (payload) => {
  console.log('请求显示签名组件:')
  console.log('宽高比:', payload.aspectRatio)
  console.log('签名ID:', payload.id)

  // 在这里显示自定义的签名组件
  showSignatureDialog({
    aspectRatio: payload.aspectRatio,
    onSignatureComplete: (signatureDataUrl) => {
      // 用户完成签名后更新到文档
      editor.updateSignature({
        url: signatureDataUrl,
        id: payload.id
      })
    }
  })
})
```
