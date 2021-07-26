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
  getSignature() {
    return Promise.resolve('用您的 app id 和 secret 签发的签名')
  },
  token: '用于您系统识别用户请求的 token',
  container: document.querySelector('#shimo-file') // iframe 挂载的目标容器元素
}).then((shimoSDK) => {
  // ...
})
```

参数说明：

| 字段         | 类型            | 必选项 | 说明                                                                                            |
| ------------ | --------------- | ------ | ----------------------------------------------------------------------------------------------- |
| appId        | string          | Y      | 您的 app id                                                                                     |
| fileId       | string          | Y      | 您系统中的 file id                                                                              |
| endpoint     | string          | Y      | 石墨服务的地址                                                                                  |
| token        | string          | Y      | 用于您系统识别用户请求的 token                                                                  |
| container    | HTMLElement     | Y      | iframe 挂载的目标容器元素                                                                       |
| getSignature | Promise<string> | Y      | 获取和石墨服务器通信的签名的方法，**app secret 属于机密信息，请勿暴露在前端，建议通过后端获取** |

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

传统文档：

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

具体文档请参考 `.d.ts` 文件，此处仅进行必要说明，可能有遗漏。

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

`setSignature(signature)` 和 `setToken(token)` 用于更新签名和 token。处于安全考虑，signature 和 token 一般不建议设置太长的过期时间，而为了减少用户刷新页面的情况，可以用这两个方法更新签名和 token。
