# 石墨 JS SDK

此 SDK 对应石墨 SDK 2.0 产品，目的是让石墨 SDK 2.0 产品的客户能够快速接入 SDK，并和石墨文档套件进行前端交互。

关于石墨 SDK 2.0 产品的详细内容请移步 [SDK 2.0 官网](https://platform.shimo.im/v2/)。

_注：此 SDK 无法用于石墨文档官网产品 (即 shimo.im) 。_

## 使用说明

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
  appId: '您的 app id',
  fileId: '您系统中的 file id',
  endpoint: '石墨服务的地址',
  signature: '用您的 app id 和 secret 签发的签名',
  token: '用于您系统识别用户请求的 token',
  container: document.querySelector('#shimo-file'), // iframe 挂载的目标容器元素
  lang: 'en' // 未指定此参数时，使用浏览器默认语言
}).then((shimoSDK) => {
  // ...
})
```

参数说明请参考 `docs/interfaces/connectoptions.md`。

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

假设您的系统有以下接口：

- `POST /files/:fileId/shimo-signature` 返回 `{ signature: '...' }`

```js
const { connect, FileType } = require('shimo-js-sdk')

const fileId = '1234'

// 从您的后端服务获取用于石墨鉴权的签名和 token
const { signature, token } = await getCredentialsFromServer()

connect({
  appId: '...',
  fileId: fileId,
  endpoint: 'https://sample-endpoint.shimo.im/',
  signature: signature,
  token: token,
  container: document.querySelector('#shimo-file') // iframe 挂载的目标容器元素
}).then((shimoSDK) => {
  // 判断文件类型，也可以在您的系统中记录文件类型
  if (shimoSDK.fileType === FileType.DocumentPro) {
    // 通过 shimoSDK.[file_type] 访问对应文件类型的 editor 示例

    // 以获取传统文档评论列表为例
    shimoSDK.documentPro
      .getCommentList()
      .then((comments) => showCommentPanel(comments))
  }
})
```

#### 对象文档说明

具体文档请参考 `docs` 目录，此处仅作简单的使用说明。

`connect()`

用于生成石墨文档的 `iframe` 链接，并连接，通过 `window.postMessage()` 通信。返回 `ShimoSDK` 对象。

`ShimoSDK`

有以下接口：

`on(事件名，事件回调)` 和 `off(事件名，事件回调)`，用于监听事件：

| 事件       | 参数   | 说明           |
| ---------- | ------ | -------------- |
| error      | Error  | 错误事件       |
| readyState | string | 初始化状态事件 |

- `shimoSDK.documentPro`
- `shimoSDK.document`
- `shimoSDK.spreadsheet`
- `shimoSDK.presentation`

石墨文档编辑器实例，根据不同类型的文件，会使用不同的实例，用于和编辑器通信，如调用接口：`shimoSDK.documentPro.getCommentList()`，**所有接口均返回 Promise**。

`setSignature(signature)` 和 `setToken(token)` 用于更新签名和 token。处于安全考虑，signature 和 token 一般不建议设置太长的过期时间，而为了减少用户长时间未刷新页面，导致 API 请求鉴权失败的情况，可以在 signature 或 token 失效前进行更新。

```js
const { connect, FileType } = require('shimo-js-sdk')

const fileId = '1234'

// 从您的后端服务获取用于石墨鉴权的签名和 token
let { signature, token, expires } = await getCredentialsFromServer()

const shimoSDK = await connect({ ... })

setInterval(
  () => {
    // 当签名不到一分钟就过期时进行更新
    if (Date.now() - expires < 60000) {
      const resp = await getCredentialsFromServer()
      shimoSDK.setSignature(resp.signature)
      expires = resp.expires
    }
  },
  60 * 1000
)
```

##### 如何和 URL 交互

由于石墨 SDK 以 `iframe` 的形式挂载到当前页面，`iframe.src` 对应的 URL 并不适合用于分享，而且在一些功能上，比如 @ 文件，需要用到您系统中对应的 URL 格式，比如 `https://your-domain/files/:id`。

为了解决这个问题，石墨 SDK 引入 `generateUrl()` 和 `openLink()` 方法：

```js
const shimoSDK = await connect({
  ...,

  generateUrl(fileId: string): string {
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
  }
})
```

###### URL 的上下文信息

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

#### 打开表格编辑器时展示指定工作表 (Sheet)

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

#### 打开编辑器时，定位至在正文中 at 某用户的位置

支持类型：

- `轻文档`
- `表格`

**使用本章节用法时，请先了解 [URL 的上下文信息](#url-的上下文信息) 章节**。

此用法适用于在接入方系统的文件中 at 了指定用户，在回调接口种收到 `石墨 SDK 事件` 中的 `MentionAt` 类型事件，并获取 `mentionAt.guid` 字段作为参数拼接至接入方的访问链接上，在接入方系统通知对应用户时，推送的链接可直接打开对应文件并定位至当前用户被 at 的正文位置，以便于查看对应位置相关内容。

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
