# API 总览

## 概述

石墨 JS SDK 的接入可以分成两层理解：

- `OfficeSDK`：负责连接、生命周期、通用能力入口
- `Editor API`：负责文档、表格、演示文稿等具体编辑能力

调用 `connect(options)` 成功后会返回一个 `OfficeSDK` 实例：

```typescript
import { connect } from 'shimo-js-sdk'

const sdk = await connect(options)
```

后续接入方看到的 API，主要分为两类：

- `公共 API`：挂在 `OfficeSDK` 实例本身上，不依赖具体编辑器套件
- `编辑器 API`：依赖当前文件类型，只在对应套件下可用

---

## 安装与基本用法

### 安装

```bash
npm install --save shimo-js-sdk
```

### npm 包方式

```typescript
import { connect } from 'shimo-js-sdk'

const sdk = await connect({
  fileId: '您系统中的 file id',
  endpoint: '石墨服务的地址',
  signature: '用您的 app id 和 secret 签发的签名',
  token: '用于您系统识别用户请求的 token',
  container: document.querySelector('#shimo-file'),
  lang: 'en', // 未指定时使用浏览器默认语言
  userUuid: '您的 uuid' // 仅在 v2 版本回调时需要传入
})

const editor = sdk.getEditor()

editor.on('saveStatusChanged', (payload) => {
  console.log('保存状态:', payload.status)
})
```

### script 方式

1. 使用 [npm view](https://docs.npmjs.com/cli/v7/commands/npm-view) 和 [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack) 下载代码包。
2. 将 `.tgz` 解压后 `dist` 目录中的文件部署到您的静态资源空间。
3. 通过 `<script>` 引入 `index.js`，再从 `window.ShimoJSSDK` 获取对应方法。

```javascript
const { connect, FileType } = window.ShimoJSSDK
// 等价于
const { connect, FileType } = require('shimo-js-sdk')
```

### 使用示例

```javascript
const { connect } = require('shimo-js-sdk')

const fileId = '1234'
const uuid = 'youruuid'

const { signature, token } = await getCredentialsFromServer()

connect({
  fileId,
  endpoint: 'https://shimo-sdk-endpoint/',
  signature,
  token,
  container: document.querySelector('#shimo-file'),
  userUuid: uuid
}).then((sdk) => {
  // sdk 即为 OfficeSDK 实例
})
```

调用 `connect()` 时，会基于传入参数初始化一个 `<iframe>` 并插入到 `container` 对应的元素中。

---

## 公共 API

公共 API 表示“无论当前接入的是哪一种套件，都可以从 `OfficeSDK` 实例上统一访问”的能力。

这类能力主要用于初始化、等待就绪、读取文件类型、监听通用事件、获取编辑器实例，以及在宿主侧管理连接生命周期。

公共方法的详细说明请查看 [公共处理方法](./common-api.md)。

---

## 编辑器 API

### 含义

编辑器 API 表示“只有在某一类编辑器套件下才成立”的能力。

例如：

- 轻文档有标题、评论、目录、正文选区等能力
- 表格有工作表、单元格、锁定、图表等能力
- 演示文稿有幻灯片、演示模式、缩放、文本范围等能力

这类 API 必须结合当前套件类型使用，不能假设所有文件类型都支持同一组方法。

### 两种入口

当前项目里，编辑器 API 有两种主要访问方式：

1. 旧入口：`sdk.getEditor()`
2. 新入口：根级 API

#### 旧入口：`sdk.getEditor()`

这是历史兼容方式。它返回当前套件对应的编辑器实例，再通过实例方法调用具体能力。

```typescript
const sdk = await connect(options)
const editor = sdk.getEditor()

await editor.showHistory?.()
await editor.createRevision?.()
```

特点：

- 兼容历史接入代码
- 方法名多为扁平风格
- 不同套件下返回的 editor 类型不同

#### 新入口：根级 API

这是当前文档推荐的写法。对应能力直接挂在 `OfficeSDK` 实例上，按模块分组访问。

```typescript
const sdk = await connect(options)

await sdk.history?.show()
await sdk.version?.createRevision()
await sdk.presentation?.start()
```

特点：

- 调用路径更清晰
- 更适合按能力模块组织文档
- 方便在同一入口下统一迁移和扩展

### 两者关系

公共 API 和编辑器 API 不是互斥关系，而是两层能力：

- 先通过 `公共 API` 建立连接、判断类型、等待 ready
- 再通过 `编辑器 API` 调用当前套件支持的具体能力

常见调用顺序如下：

```typescript
import { connect, FileType } from 'shimo-js-sdk'

const sdk = await connect(options)

await sdk.ready()

if (sdk.fileType === FileType.Spreadsheet) {
  await sdk.history?.show()
}
```

或者继续使用兼容写法：

```typescript
const sdk = await connect(options)

await sdk.ready()

const editor = sdk.getEditor()
await editor.showHistory?.()
```

### 如何选择

优先在这些场景使用公共 API：

- 初始化 SDK
- 等待就绪
- 获取文件类型
- 监听错误、`readyState` 等通用事件
- 管理 `HeaderBars`

当你要操作具体内容或具体套件能力时，使用编辑器 API：

- 文档标题、评论、目录、正文选区
- 表格历史、锁定、工作表、单元格、图表
- 演示文稿历史、演示模式、幻灯片、缩放、文本格式

入口选择建议：

- 新增接入代码：优先使用根级 API
- 维护历史代码：可以继续使用 `sdk.getEditor()`
- 更新文档时：保留旧入口兼容说明，同时补充新的 API 写法

---

## URL 处理

由于石墨 SDK 以 `iframe` 形式挂载到当前页面，`iframe.src` 对应的 URL 通常不适合直接用于分享。在一些功能中，比如 `@ 文件`、评论定位、表单分享，还需要使用接入方系统中的 URL 规则，例如 `https://your-domain/files/:id`。

为了解决这个问题，SDK 提供了 `generateUrl()`、`openLink()` 和 `getFileInfoFromUrl()` 等能力。

```typescript
import { UrlSharingType } from 'shimo-js-sdk'

const sdk = await connect({
  ...options,

  generateUrl(fileId: string, info: GenerateUrlInfo): string {
    if (info?.sharingType === UrlSharingType.FormFill) {
      return `https://your-domain/files/${fileId}/fill-form`
    }

    if (info?.sharingText) {
      return `https://your-domain/files/${fileId} ${info.sharingText}`
    }

    return `https://your-domain/files/${fileId}`
  },

  openLink(url: string): void {
    if (url.includes('your-domain/files/')) {
      const parsedUrl = new URL(url)
      history.push(parsedUrl.pathname)
      return
    }

    window.open(url)
  },

  getFileInfoFromUrl(
    url: string
  ): { fileId: string } | Promise<{ fileId: string }> {
    const urlWithoutParams = url.split('?')[0]
    const splitPath = urlWithoutParams.split('/')
    const fileId = splitPath[splitPath.length - 1]

    return {
      fileId
    }
  }
})
```

### URL 的上下文信息

为了在 URL 中传递上下文信息，比如段落、单元格、评论定位等，调用 `generateUrl()` 后，SDK 会在 URL 上附加 `smParams=PARAMS` 参数：

```text
https://your-domain/files/:id?smParams=PARAMS
```

如无特殊需要，请保留该参数。

默认情况下，调用 `connect()` 时会从当前 `location.search` 中提取 `smParams`。如果需要自定义上下文参数，可以通过 `connect({ smParams })` 手动传入。

`smParams` 是经过 [base62](https://github.com/felipecarrillo100/base62str) 序列化后的 `Record<string, unknown>` 对象。

手动传入 `smParams` 后，SDK 不会再自动从 `location.search` 读取原始值。如果希望保留已有上下文，可以这样合并：

```typescript
const paramsList: Array<string | Record<string, unknown>> = []

const originParams = new URLSearchParams(location.search).get('smParams')

if (originParams) {
  paramsList.push(originParams)
}

paramsList.push({
  myVar: 'myVal'
})

connect({
  smParams: paramsList
})
```

### URL Info

`generateUrl(fileId, info)` 中的 `info` 用于对 URL 做特殊处理。

`sharingText` 表示石墨默认提供的分享文本，例如：

- `https://your-domain/files/1 xxx 邀请您参与《标题》协作，请复制粘贴后在浏览器打开`
- `https://your-domain/files/1/fill-form xxx 邀请您填写《标题》表单，……`

`sharingType` 表示当前 URL 对应的行为类型，例如：

- `UrlSharingType.Form`：打开编辑表单
- `UrlSharingType.FormPreview`：打开预览表单
- `UrlSharingType.FormFill`：打开填写表单

接入时通常需要根据 `sharingType` 生成不同 URL：

- `UrlSharingType.Form`、`UrlSharingType.FormPreview` 一般需要鉴权，可使用 `/files/${fileId}`
- `UrlSharingType.FormFill` 一般不需要登录鉴权，可使用 `/files/${fileId}/fill-form`

如果为 URL 拼接了 `sharingText`，则需要在您的 `parseUrl()` 中先把真实链接解析出来，例如：

```typescript
parseUrl(url: string) {
  return url.split(' ')[0]
}
```

---

## 典型场景

### 打开表格指定工作表

这个场景适用于一个表格存在多个工作表时，希望打开编辑器后直接展示指定工作表，而不是默认第一个工作表。

可以先通过表格编辑器接口 [getActiveSheetId](./suite/spread-sheet.md#getactivesheetid) 获取当前激活工作表 ID，再把它作为业务 URL 参数透传回来，例如：

```text
https://your-domain.com/files/abcdefg?sheetId=XXXXX&smParams=XXXXXXXXXXXXXXXXXXXXXX
```

接入示例：

```typescript
const paramsList: Array<string | Record<string, unknown>> = []
const queryParams = new URLSearchParams(location.search)

const originParams = queryParams.get('smParams')
const sheetId = queryParams.get('sheetId')

if (originParams) {
  paramsList.push(originParams)
}

if (sheetId) {
  paramsList.push({ sheetId })
}

connect({
  smParams: paramsList
})
```

### 定位文中位置

这个场景适用于打开编辑器后，直接定位到正文中的 `@用户` 位置或评论位置。

当前支持的文档类型：

- `轻文档` - `document`
- `表格` - `spreadsheet`
- `传统文档` - `documentPro`

例如：

- 在回调事件中收到 `mention_at`，可取 `mentionAt.guid` 拼接到您的业务链接上
- 在回调事件中收到 `comment`，可取 `comment.selectionGuid` 拼接到您的业务链接上

URL 示例：

```text
https://your-domain.com/files/abcdefg?mentionId=XXXXX&smParams=XXXXXXXXXXXXXXXXXXXXXX
```

接入示例：

```typescript
const paramsList: Array<string | Record<string, unknown>> = []
const queryParams = new URLSearchParams(location.search)

const originParams = queryParams.get('smParams')
const mentionId = queryParams.get('mentionId')

if (originParams) {
  paramsList.push(originParams)
}

if (mentionId) {
  paramsList.push({ hash: mentionId })
}

connect({
  smParams: paramsList
})
```

---

## 支持的文档类型

| 类型           | 说明     | 编辑器 API                          |
| -------------- | -------- | ----------------------------------- |
| `Document`     | 轻文档   | [轻文档](./suite/document.md)       |
| `DocumentPro`  | 传统文档 | [传统文档](./suite/document-pro.md) |
| `Spreadsheet`  | 表格     | [表格](./suite/spread-sheet.md)     |
| `Presentation` | 幻灯片   | [演示文稿](./suite/presentation.md) |
| `Table`        | 应用表格 | [简单表格](./suite/table.md)        |
| `Form`         | 表单     | [表单](./suite/form.md)             |
| `Flowchart`    | 流程图   | [流程图](./suite/flow-chart.md)     |

---

## 文档入口

如需继续查看不同层级的说明，可结合以下页面：

- [概述](./summary.md)
- [公共处理方法](./common-api.md)
- [快速开始](./quick-start.md)
- [HeaderBars](./headerbars.md)
- [轻文档](./suite/document.md)
- [传统文档](./suite/document-pro.md)
- [表格](./suite/spread-sheet.md)
- [简单表格](./suite/table.md)
- [演示文稿](./suite/presentation.md)
- [流程图](./suite/flow-chart.md)
- [表单](./suite/form.md)
