### 安装

```bash
npm install --save shimo-js-sdk
```

### 基本用法

```javascript
import { connect } from 'shimo-js-sdk'

const sdk = await connect({
  fileId: 'your-file-id',
  endpoint: 'https://your-shimo-endpoint',
  signature: 'your-signature',
  token: 'your-token',
  container: document.querySelector('#editor-container')
})

// 获取编辑器实例
const editor = sdk.getEditor()

// 监听保存状态变化
editor.on('saveStatusChanged', (payload) => {
  console.log('保存状态:', payload.status)
})
```

## 文档导航

- **[使用说明](README.md)** - 详细的使用指南和示例
- **[API 文档](../docs/classes/ShimoSDK.md)** - 完整的 API 参考文档
- **[文档类型](../docs/modules/Document.md)** - 各种文档类型的特定功能

## 支持的文档类型

| 类型         | 说明     | 模块                                            |
| ------------ | -------- | ----------------------------------------------- |
| Document     | 轻文档   | [Document](./suite/document.md)                 |
| DocumentPro  | 传统文档 | [DocumentPro](./suite/document-pro.md)          |
| Spreadsheet  | 表格     | [Spreadsheet](../docs/modules/Spreadsheet.md)   |
| Table        | 简单表格 | [Table](../docs/modules/Table.md)               |
| Presentation | 演示文稿 | [Presentation](../docs/modules/Presentation.md) |
| Flowchart    | 流程图   | [Flowchart](../docs/modules/Flowchart.md)       |
| Form         | 表单     | [Form](../docs/modules/Form.md)                 |

## 获取帮助

如果您在使用过程中遇到问题，请参考：

- [使用说明](README.md) - 详细的集成指南
- [API 文档](../docs/classes/ShimoSDK.md) - 完整的接口文档
- [石墨 SDK 2.0 官网](https://platform.shimo.im/v2/) - 产品详细介绍

## 注意事项

> ⚠️ 此 SDK 仅适用于石墨 SDK 2.0 产品，无法用于石墨文档官网产品 (shimo.im)。
