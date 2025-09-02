#!/bin/bash

# 生成文档并启动开发服务器

set -e

echo "📚 生成文档..."
npm run docs

echo ""
echo "🚀 启动开发服务器..."
cd docs
python3 -m http.server 8080 --bind 127.0.0.1
