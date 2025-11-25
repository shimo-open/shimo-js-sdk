# 石墨 JS SDK

此 SDK 对应石墨 SDK 2.0 产品，目的是让石墨 SDK 2.0 产品的客户能够快速接入 SDK，并和石墨文档套件进行前端交互。

关于石墨 SDK 2.0 产品的详细内容请移步 [SDK 2.0 官网](https://platform.shimo.im/v2/)。

_注：此 SDK 无法用于石墨文档官网产品 (即 shimo.im) 。_

## [文档详情](https://shimo-open.github.io/shimo-js-sdk/#/)

### 安装

```shell
# 通过 npm
npm install --save shimo-js-sdk

# 通过 yarn
yarn add shimo-js-sdk
```

### 初始化 iframe

```js
const { connect } = require('shimo-js-sdk')

connect({
  fileId: '您系统中的 file id',
  endpoint: '石墨服务的地址',
  signature: '用您的 app id 和 secret 签发的签名',
  token: '用于您系统识别用户请求的 token',
  container: document.querySelector('#shimo-file'), // iframe 挂载的目标容器元素
  lang: 'en' // 未指定此参数时，使用浏览器默认语言
  userUuid：'您的uuid', // 仅在v2版本回调时需要传入(co-1.3+支持)
}).then((shimoSDK) => {
  // ...
})
```

参数说明请参考 [docs/interfaces/connectoptions.md](docs/interfaces/ConnectOptions.md)。

返回值：

```
Promise<ShimoSDK>
```

**使用传统的 `<script>` 的方式加载：**

1. 使用 [npm view](https://docs.npmjs.com/cli/v7/commands/npm-view) 和 [npm pack](https://docs.npmjs.com/cli/v7/commands/npm-pack) 下载代码包 (`.tgz` 格式)
2. 将 `.tgz` 解压缩后的 `dist` 目录下的文件放置到您托管静态资源的空间，然后使用 `<script>` 引入 `index.js` 资源
3. 通过 `window.ShimoJSSDK` 对象获取对应的方法

```js
const { connect, FileType } = window.ShimoJSSDK
// 等价于
const { connect, FileType } = require('shimo-js-sdk')
```

#### 使用示例

```js
const { connect } = require('shimo-js-sdk')

const fileId = '1234'
const uuid = 'youruuid'

// 从您的后端服务获取用于石墨鉴权的签名和 token
const { signature, token } = await getCredentialsFromServer()

connect({
  fileId: fileId,
  endpoint: 'https://shimo-sdk-endpoint/', // endpoint 因环境而异，请联系技术支持
  signature: signature,
  token: token,
  container: document.querySelector('#shimo-file'), // iframe 挂载的目标容器元素
  userUuid: uuid
}).then((sdk) => {
  // sdk 即为 ShimoSDK 实例
})
```

调用 `connect()` 时，会以传入参数为基础，初始化一个 `<iframe>` 并插入 `container` 对应的元素中。

返回的 `sdk` 为 `ShimoSDK` 实例，用于和 SDK、编辑器交互。

### SDK 和编辑器实例

石墨 JS SDK 共有两种实例用于和 JS SDK 交互：

- `ShimoSDK` 由 `connect()` 返回，处理初始化编辑器和编辑器交互的工作
- `Editor` 文档编辑器，直接和文档内容交互。**`Editor` 所有接口均返回 Promise**

两者之间各有独立的方法和事件，具体请查看 `docs` 目录的文档。

获取编辑器实例和与其交互：

```js
const { FileType } = require('shimo-js-sdk')

// 获取编辑器实例
const editor = sdk.getEditor()

// 调用通用事件
editor.on('saveStatusChanged', (payload) => {
  console.log(payload.status)
})

// 调用特定类型文档的方法
if (sdk.fileType === FileType.Document) {
  editor.showHistory()
}
```

若为 `TypeScript`，可使用 `Generic`：

```typescript
const { Document } = require('shimo-js-sdk')

const editor = sdk.getEditor<Document.Editor>()
editor.on('saveStatusChanged', (payload) => {
  console.log(payload.status)
})

await editor.showHistory()
```

### 协作者模块使用说明

当 iframe 套件开启协作者能力后（依赖 `ENABLE_SDK_COLLABORATORS_MODULE` 开关），shimo-js-sdk 使用方可按以下方式接入：

1. **监听 `collaboratorsChanged`**

```ts
const sdk = await connect(options)
const editor = sdk.getEditor()

editor.on('collaboratorsChanged', (payload) => {
  // payload.type: 'snapshot' | 'enter' | 'leave'
  // payload.collaborators: 协作者全量列表
  renderCollaborators(payload)

  if (payload.type === 'enter') {
    console.log('新协作者进入:', payload.enterUsers)
  } else if (payload.type === 'leave') {
    console.log('协作者离开:', payload.leaveUsers)
  }
})
```

3. **主动获取协作者列表**

```ts
const collaborators = editor.getCollaborators()
renderCollaborators({ type: 'snapshot', collaborators })
```

4. **调试提示**
   - 未收到事件时，检查 iframe 内的 window 对象是否有 `window.__RUNTIME_ENV__.ENABLE_SDK_COLLABORATORS_MODULE` 属性且为 true。
   - 可在 iframe 页面 DevTools 中查看 `collaboratorsChanged` 是否触发，或观察 WebSocket `COLLABROOM` 消息。

### `signature` 和 `token`

- `signature` 为石墨区分请求来源，并实现数据隔离的基础
- `token` 为您用于识别回调请求来源、是否合法的依据

具体说明请查阅在线文档：[https://platform.shimo.im/v2/docs/concepts/](https://platform.shimo.im/v2/docs/concepts/)。

由于 `signature` 和 `token` 有过期时间，一般也不建议设置过长的时间，但为了减少因过期导致的用户体验问题，`ShimoSDK` 提供 `setCredentials({ signature, token })` 方法用于动态更新。

```js
// 从您的后端服务获取用于石墨鉴权的签名和 token
let { signature, token, expires } = await getCredentialsFromServer()

const shimoSDK = await connect({ ... })

setInterval(
  () => {
    // 建议过期时间为7天
    // 当剩余时间不到3.5天就过期时进行更新
    if (expires - Date.now() < 1000 * 3600 * 24 * 3.5) {
      const resp = await getCredentialsFromServer()
      await shimoSDK.setCredentials({
        signature: resp.signature,
        token: resp.token
      })
      expires = resp.expires
    }
  },
  60 * 1000
)
```

### 如何处理 URL

由于石墨 SDK 以 `iframe` 的形式挂载到当前页面，`iframe.src` 对应的 URL 并不适合用于分享，而且在一些功能上，比如 @ 文件，需要用到您系统中对应的 URL 格式，比如 `https://your-domain/files/:id`。

为了解决这个问题，石墨 SDK 引入 `generateUrl()` 和 `openLink()` 方法：

```js
import { UrlSharingType } from 'shimo-js-sdk'

const shimoSDK = await connect({
  ...,

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
    // 以 React Router 为例

    // 假设 url 是 'https://your-domain/files/1'，在当前页跳转，其他则新窗口打开
    if (url.includes('your-domain/files/')) {
      const u = new URL(url)
      history.push(u.pathname)
    } else {
      window.open(url)
    }
  },

  // 从当前 url 中解析出文件 id 并返回
  // 假设 url 是 'https://your-domain/files/123'，则返回 { fileId: '123' }
  getFileInfoFromUrl(url: string): {fileId:string} {
    let fromId
    const urlWithoutParams = url.split('?')[0]
    let splitPath = urlWithoutParams.split('/')
    fromId = splitPath[splitPath.length - 1]
    return Promise.resolve({
        fileId: fromId
    })
  }
})
```

#### URL 的上下文信息

为了在 URL 上传递上下文信息，比如 URL 指向的段落、单元格，在调用 `generateUrl()` 生成 URL 后，会在 URL 后附加一个 `smParams=PARAMS` 的参数：

```
https://your-domain/files/:id?smParams=PARAMS
```

**如无特殊需要，请保留该参数。**

默认情况下，调用 `connect()` 会从当前 `location.search` 中提取 `smParams`，如果遇到需要自定义参数的场合，可以通过 `connect({ smParams: PARAMS })` 参数修改。

`smParams` 为经过 [base62](https://github.com/felipecarrillo100/base62str) 序列化后的 `Record<string, unknown>` 对象。

**在传入 `smParams` 参数时，将不会从 `location.search` 中获取数据**，如果想保留原有信息，可以这样传递：

```js
const paramsList: Array<string | Record<string, unknown>>

const originParams = new URLSearchParams(location.search).get('smParams')
// 保留原来的上下文信息
if (originParams) {
  paramsList.push(originParams)
}

// 添加自定义的上下文信息
paramsList.push({
  myVar: 'myVal'
})

connect({
  smParams: paramsList
})
```

#### URL Info

`generateUrl(fileId, info)` 中的 `info` 是用于对 URL 进行一些特殊处理的。

`sharingText`：石墨默认提供的分享文本：比如

- `https://your-domain/files/1 xxx 邀请您参与《标题》协作，请复制粘贴后在浏览器打开`
- `https://your-domain/files/1/fill-form xxx 邀请您填写《标题》表单，……`

`sharingType`：表示此次 `generateUrl()` 对应的行为类型，比如：

- `UrlSharingType.Form` 代表一般的打开编辑表单的行为
- `UrlSharingType.FormPreview` 代表打开预览表单页面的行为
- `UrlSharingType.FormFill` 代表打开填写表单页面的行为

您需要根据具体类型，生成不同的 URL，比如：

- `UrlSharingType.Form`、`UrlSharingType.FormPreview` 等一般需要进行鉴权，因此可以用 `/files/${fileId}`
- `UrlSharingType.FormFill` 填写表单一般不需要登录鉴权，因此可以用另一个独立的路由，比如 `/files/${fileId}/fill-form`

在实际操作中，您可以根据 `sharingType` 按需为 URL 添加分享文本。**若添加了分享文本，则需要您在 `parseUrl()` 中对 URL 进行处理**，比如：

```js
// url: 'https://your-domain/files/1 xxx 邀请您参与《标题》协作，请复制粘贴后在浏览器打开'
parseUrl(url: string) {
  return url.split(' ')[0] // 返回 'https://your-domain/files/1
}
```

### 打开表格编辑器时展示指定工作表 (Sheet)

**使用本章节用法时，请先了解 [URL 的上下文信息](#url-的上下文信息) 章节**。

此用法适用于表格中存在多个工作表 (Sheet) ，希望在打开编辑器时，直接展示某个工作表格而非默认的第一个工作表。如用于希望直接分享表格的某个工作表链接给其他协作者，他人在打开后可直接查看指定的工作表。

首先通过 `docs/interfaces/Spreadsheet.Editor.md` 表格的编辑器 `getActiveSheetId` 方法获取当前处于激活状态的工作表 ID ，此 ID 可用于追加在接入方自身的 URL 上作为参数。

如通过 `URL QueryString` 方式传递：`https://your-domain.com/files/abcdefg?sheetId=XXXXX&smParams=XXXXXXXXXXXXXXXXXXXXXX`

`sheetId` 仅为参数名举例，接入方可结合自身业务命名。

```js
const paramsList: Array<string | Record<string, unknown>>
const queryParams = new URLSearchParams(location.search)

const originParams = queryParams.get('smParams')
const sheetId = queryParams.get('sheetId')

// 保留原来的上下文信息
if (originParams) {
  paramsList.push(originParams)
}
// paramsList
// => [originParamsStringValue]

// 添加自定义的上下文信息
paramsList.push({ sheetId: '通过 QueryString 中获取的 sheetId' })
// paramsList
// => [originParamsStringValue, {"sheetId": "XXXXX"}]

connect({
  smParams: paramsList
})
```

### 打开编辑器时，定位至在正文中 at 某用户或评论的位置

支持类型：

- `轻文档` - `document`
- `表格` - `spreadsheet`
- `传统文档` - `documentPro`

**使用本章节用法时，请先了解 [URL 的上下文信息](#url-的上下文信息) 章节**。

此用法适用于:

- 定位@用户： 在接入方系统的文件中 at 了指定用户，在回调接口中收到 `石墨 SDK 事件` 中的 `mention_at` 类型事件，并获取 `mentionAt.guid` 字段作为参数拼接至接入方的访问链接上，在接入方系统通知对应用户时，推送的链接可直接打开对应文件并定位至当前用户被 at 的正文位置，以便于查看对应位置相关内容。
- 新增评论： 在接入方系统的文件中新增了评论，在回调接口中收到 `石墨 SDK 事件` 中的 `comment` 类型事件，并获取 `comment.selectionGuid` 字段作为参数拼接至接入方的访问链接上，在接入方系统通知对应用户时，推送的链接可直接打开对应文件并定位至当前新增的评论位置，以便于查看对应位置相关内容。

如通过 `URL QueryString` 方式传递：`https://your-domain.com/files/abcdefg?mentionId=XXXXX&smParams=XXXXXXXXXXXXXXXXXXXXXX`

`mentionId` 仅为参数名举例，接入方可结合自身业务命名。

```js
const paramsList: Array<string | Record<string, unknown>>
const queryParams = new URLSearchParams(location.search)

const originParams = queryParams.get('smParams')
const mentionId = queryParams.get('mentionId')

// 保留原来的上下文信息
if (originParams) {
  paramsList.push(originParams)
}
// paramsList
// => [originParamsStringValue]

// 添加自定义的上下文信息
paramsList.push({ hash: '通过 QueryString 中获取的 mentionId' })
// paramsList
// => [originParamsStringValue, {"hash": "XXXXX"}]

connect({
  smParams: paramsList
})
```

### 显示自定义 toast

支持的套件类型：

- `表格` - `spreadsheet`

此方法可显示接入方自定义 toast，具体用法如下

```typescript
import { connect, ShowToastOptions } from 'shimo-js-sdk'

const shimoSDK = await connect({
  // 初始化sdk时传了该方法将会拦截编辑器内的toast
  showToast: (options: ShowToastOptions) => {
    // show your toast
  }
})
```
