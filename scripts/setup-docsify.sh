#!/bin/bash

# 自动设置 Docsify 文档系统
# 用于在 TypeDoc 生成后恢复 Docsify 文件

set -e

echo "🚀 设置 Docsify 文档系统..."

# 检查 docs-docsify-files 目录是否存在
if [ ! -d "docs-docsify-files" ]; then
    echo "❌ docs-docsify-files 目录不存在"
    exit 1
fi

# 复制 Docsify 文件到 docs 目录
echo "📁 复制 Docsify 文件..."
cp docs-docsify-files/index.html docs/
cp docs-docsify-files/_sidebar.md docs/
cp docs-docsify-files/_navbar.md docs/

# 复制启动脚本
if [ -f "docs-docsify-files/serve.sh" ]; then
    cp docs-docsify-files/serve.sh docs/
    chmod +x docs/serve.sh
fi

echo "✅ Docsify 文档系统设置完成！"
echo ""
echo "🌐 启动本地服务器："
echo "   cd docs && ./serve.sh"
echo "   或者: cd docs && python3 -m http.server 8080"
echo ""
echo "📖 访问地址: http://127.0.0.1:8080"
