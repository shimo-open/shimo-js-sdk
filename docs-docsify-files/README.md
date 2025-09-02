# Docsify 备份文件

这个目录包含 Docsify 文档系统的所有配置文件，用于规避 `npm run docs` 清除问题。

## 📁 文件说明

- `index.html` - Docsify 主页面配置，包含完整的主题系统和插件
- `_sidebar.md` - 侧边栏导航，包含所有 API 文档的链接
- `_navbar.md` - 顶部导航栏
- `serve.sh` - 本地开发服务器启动脚本

## 🔄 工作流程

1. `npm run docs` 执行时：

   - TypeDoc 清空 `docs/` 目录
   - TypeDoc 重新生成所有 Markdown 文档
   - 复制 `./src/types/readme` 到 `./docs/details`
   - **自动复制** `docs-docsify-files/` 中的所有 Docsify 文件到 `docs/`

2. 结果：
   - `docs/` 目录包含完整的 TypeDoc 文档 + Docsify 配置
   - 可以直接启动 Docsify 服务器

## 🚀 使用命令

```bash
# 生成文档（自动包含 Docsify）
npm run docs

# 启动文档服务器
npm run docs:serve

# 一键生成并启动
npm run docs:dev

# 手动启动（如果在 docs 目录下）
./serve.sh
```

## 📖 访问地址

本地预览：http://127.0.0.1:8080

## 🎨 主题特性

- 🌓 自适应深色/浅色主题（跟随系统）
- 🎯 手动主题切换（右上角按钮）
- 🔍 全文搜索（支持中文）
- 📝 代码语法高亮
- 📋 代码一键复制
- 📱 响应式设计
- 📄 分页导航

## ⚙️ 自定义

如需修改 Docsify 配置：

1. 编辑 `docs-docsify-files/` 中的文件
2. 运行 `npm run docs` 重新应用配置

## 🔧 故障排除

如果 Docsify 文件没有正确复制：

```bash
# 手动复制
cp docs-docsify-files/* docs/

# 或使用脚本（如果存在）
./scripts/setup-docsify.sh
```
