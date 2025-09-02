#!/bin/bash

# Docsify 本地服务器启动脚本
echo "🚀 启动 Docsify 文档服务器..."
echo "📖 文档地址: http://127.0.0.1:8080"
echo "⌨️  按 Ctrl+C 停止服务器"
echo ""

cd "$(dirname "$0")" || exit
python3 -m http.server 8080 --bind 127.0.0.1

