# API

## 方法

### 方法列表

表单 (Form) 编辑器继承了基础编辑器的所有方法，但没有特有的方法。所有操作通过基础编辑器接口完成。

| 方法     | 说明         |
| -------- | ------------ |
| setTitle | 设置文档标题 |
| on       | 监听事件     |
| off      | 取消监听事件 |

> **注意**: 表单编辑器主要通过事件驱动进行交互，具体的表单构建和数据收集操作由编辑器内部处理。

---

# EventMap

## 事件列表

| 事件名                      | 说明         | 载荷类型                           |
| --------------------------- | ------------ | ---------------------------------- |
| [error](#error)             | 错误事件     | `{ data?: unknown, code: number }` |
| [titleChange](#titlechange) | 标题发生变更 | `string`                           |

---

## error

### 说明

当表单编辑器发生错误时触发此事件。

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
  console.error('表单编辑器发生错误:')
  console.error('错误代码:', payload.code)
  console.error('错误详情:', payload.data)

  // 根据错误码进行处理
  switch (payload.code) {
    case 400:
      console.error('表单配置错误')
      break
    case 403:
      console.error('权限不足')
      break
    case 422:
      console.error('表单验证失败')
      break
    case 500:
      console.error('服务器内部错误')
      break
    default:
      console.error('未知错误')
  }
})
```

---

## titleChange

### 说明

当表单标题发生变更时触发此事件。

### 类型定义

```typescript
titleChange: string
```

### 示例

```javascript
const editor = sdk.getEditor()

editor.on('titleChange', (newTitle) => {
  console.log('表单标题已更改为:', newTitle)

  // 可以在这里更新页面标题或其他UI元素
  document.title = `${newTitle} - 表单编辑器`

  // 或者同步到外部系统
  updateFormTitleInDatabase(newTitle)
})
```

## 使用说明

表单 (Form) 是一个专业的表单设计和数据收集工具，支持创建各种类型的表单并收集用户响应。

### 特点

- **丰富组件**: 支持多种表单字段类型
- **数据收集**: 自动收集和统计表单响应
- **逻辑控制**: 支持条件显示和跳转逻辑
- **实时预览**: 实时预览表单效果
- **响应式设计**: 自适应各种设备尺寸
- **数据导出**: 支持导出收集的数据

### 表单字段类型

- 单行文本
- 多行文本
- 单选题
- 多选题
- 下拉选择
- 数字输入
- 日期时间
- 文件上传
- 评分
- 矩阵题

### 适用场景

- 问卷调查
- 用户反馈收集
- 报名登记
- 数据收集
- 意见征集
- 在线测试
- 申请表单

### 获取编辑器实例

```javascript
import { connect, FileType } from 'shimo-js-sdk'

const sdk = await connect({
  fileId: 'your-file-id',
  endpoint: 'your-endpoint',
  signature: 'your-signature',
  token: 'your-token',
  container: document.querySelector('#editor-container')
})

// 确保文档类型为表单
if (sdk.fileType === FileType.Form) {
  const editor = sdk.getEditor()

  // 监听表单标题变化
  editor.on('titleChange', (title) => {
    console.log('新的表单标题:', title)
  })

  // 监听错误事件
  editor.on('error', (payload) => {
    console.error('表单错误:', payload)
  })
}
```

### 基础操作

```javascript
const editor = sdk.getEditor()

// 设置表单标题
await editor.setTitle('用户满意度调查')

// 监听保存状态变化
editor.on('saveStatusChanged', (payload) => {
  console.log('保存状态:', payload.status)

  if (payload.status === 'saved') {
    console.log('表单已保存')
  } else if (payload.status === 'saving') {
    console.log('正在保存表单...')
  }
})

// 监听用户列表变化
editor.on('userListChanged', (users) => {
  console.log('当前协作用户:', users.length)
  users.forEach((user) => {
    console.log(`- ${user.name} (${user.email})`)
  })
})
```

### TypeScript 支持

```typescript
import { Form } from 'shimo-js-sdk'

// 使用类型约束
const editor = sdk.getEditor<Form.Editor>()

// 现在 editor 具有完整的类型支持
editor.on('titleChange', (title: string) => {
  // title 的类型是 string
  console.log('新标题:', title)
}) // ✅ 类型安全

editor.on('error', (payload) => {
  // payload 的类型是 { data?: unknown, code: number }
  console.error('表单错误:', payload.code)
}) // ✅ 类型安全
```

### 表单状态管理

```javascript
const editor = sdk.getEditor()

// 跟踪表单的各种状态
let formState = {
  title: '',
  lastSaved: null,
  collaborators: [],
  hasUnsavedChanges: false
}

// 监听标题变化
editor.on('titleChange', (title) => {
  formState.title = title
  formState.hasUnsavedChanges = true
})

// 监听保存状态
editor.on('saveStatusChanged', (payload) => {
  if (payload.status === 'saved') {
    formState.lastSaved = new Date()
    formState.hasUnsavedChanges = false
  }
})

// 监听协作者变化
editor.on('userListChanged', (users) => {
  formState.collaborators = users
})

// 在页面卸载前检查未保存的更改
window.addEventListener('beforeunload', (e) => {
  if (formState.hasUnsavedChanges) {
    e.preventDefault()
    e.returnValue = '您有未保存的更改，确定要离开吗？'
  }
})
```

### 错误处理最佳实践

```javascript
editor.on('error', (payload) => {
  // 记录详细错误信息
  console.error('Form Error Details:', {
    code: payload.code,
    data: payload.data,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    url: window.location.href
  })

  // 用户友好的错误提示
  const errorMessages = {
    400: '表单配置有误，请检查表单设置',
    403: '您没有权限编辑此表单',
    422: '表单验证失败，请检查必填字段',
    500: '服务器暂时无法处理请求，请稍后重试',
    503: '服务暂时不可用，请稍后重试'
  }

  const userMessage =
    errorMessages[payload.code] || '发生未知错误，请联系技术支持'

  // 显示用户友好的错误提示
  showErrorNotification({
    title: '表单操作失败',
    message: userMessage,
    type: 'error',
    duration: 5000
  })

  // 如果是严重错误，可能需要禁用某些功能
  if (payload.code >= 500) {
    disableFormEditing()
    showRetryButton()
  }

  // 可选：上报错误到监控系统
  if (window.errorReporting) {
    window.errorReporting.captureException(
      new Error(`Form Error ${payload.code}`),
      {
        extra: payload.data,
        tags: {
          component: 'form-editor',
          errorCode: payload.code
        }
      }
    )
  }
})
```

### 表单发布和分享

虽然表单编辑器本身不直接提供发布功能，但您可以通过监听状态变化来实现：

```javascript
// 监听表单完成状态，准备发布
editor.on('saveStatusChanged', (payload) => {
  if (payload.status === 'saved') {
    // 表单已保存，可以考虑启用发布功能
    enablePublishButton()
  }
})

// 自定义发布功能
async function publishForm() {
  try {
    // 调用您的后端API发布表单
    const response = await fetch('/api/forms/publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        formId: sdk.fileId,
        publishSettings: {
          allowAnonymous: true,
          collectEmails: true,
          limitResponses: 1000
        }
      })
    })

    if (response.ok) {
      const result = await response.json()
      console.log('表单发布成功:', result.publicUrl)

      // 显示发布成功的消息
      showSuccessNotification({
        title: '表单已发布',
        message: `表单已成功发布，分享链接：${result.publicUrl}`,
        type: 'success'
      })
    }
  } catch (error) {
    console.error('发布表单失败:', error)
    showErrorNotification({
      title: '发布失败',
      message: '表单发布失败，请稍后重试',
      type: 'error'
    })
  }
}
```
