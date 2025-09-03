#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

/**
 * 解析 Markdown 文件并提取 methods 部分
 */
class MethodsExtractor {
  constructor(options = {}) {
    this.inputDir = options.inputDir || 'docs/interfaces'
    this.outputDir = options.outputDir || 'docs/methods'
    this.templatePath = options.templatePath || 'scripts/templates/methods.hbs'
  }

  /**
   * 解析单个 Markdown 文件
   */
  parseMarkdownFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8')
    const lines = content.split('\n')

    const result = {
      title: '',
      interface: '',
      methods: []
    }

    // 提取标题和接口名
    const titleMatch = content.match(/# Interface: (.+)/)
    if (titleMatch) {
      result.interface = titleMatch[1]
      result.title = titleMatch[1]
    }

    // 找到 Methods 部分的开始
    let methodsStartIndex = -1
    let methodsEndIndex = -1

    for (let i = 0; i < lines.length; i++) {
      if (lines[i] === '## Methods') {
        methodsStartIndex = i
        break
      }
    }

    if (methodsStartIndex === -1) {
      return result // 没有找到 Methods 部分
    }

    // 找到下一个主要section或文件结束
    for (let i = methodsStartIndex + 1; i < lines.length; i++) {
      if (lines[i].startsWith('## ') && lines[i] !== '## Methods') {
        methodsEndIndex = i
        break
      }
    }

    if (methodsEndIndex === -1) {
      methodsEndIndex = lines.length
    }

    // 解析每个方法
    const methodsContent = lines.slice(methodsStartIndex + 1, methodsEndIndex)
    let currentMethod = null
    let currentSection = ''

    for (let i = 0; i < methodsContent.length; i++) {
      const line = methodsContent[i]

      // 新方法开始
      if (line.startsWith('### ')) {
        if (currentMethod) {
          result.methods.push(currentMethod)
        }

        currentMethod = {
          name: line.replace('### ', ''),
          signature: '',
          description: '',
          parameters: [],
          returns: '',
          since: '',
          deprecated: false,
          sourceLink: ''
        }
        currentSection = 'description'
        continue
      }

      if (!currentMethod) continue

      // 方法签名
      if (line.startsWith('▸ **')) {
        currentMethod.signature = line
        continue
      }

      // 描述
      if (
        currentSection === 'description' &&
        line.trim() &&
        !line.startsWith('**') &&
        !line.startsWith('####')
      ) {
        currentMethod.description += line + '\n'
      }

      // since 标记
      if (line.includes('**`since`**')) {
        const sinceMatch = line.match(/\*\*`since`\*\* (.+)/)
        if (sinceMatch) {
          currentMethod.since = sinceMatch[1]
        }
      }

      // deprecated 标记
      if (line.includes('**`deprecated`**')) {
        currentMethod.deprecated = true
      }

      // 参数部分
      if (line === '#### Parameters') {
        currentSection = 'parameters'
        continue
      }

      // 返回值部分
      if (line === '#### Returns') {
        currentSection = 'returns'
        continue
      }

      // 源码链接
      if (line.includes('#### Defined in')) {
        currentSection = 'source'
        continue
      }

      if (currentSection === 'source' && line.startsWith('[')) {
        currentMethod.sourceLink = line
      }

      // 解析参数表格
      if (
        currentSection === 'parameters' &&
        line.includes('|') &&
        !line.includes(':------')
      ) {
        const parts = line
          .split('|')
          .map((p) => p.trim())
          .filter((p) => p)
        if (parts.length >= 3) {
          currentMethod.parameters.push({
            name: parts[0],
            type: parts[1],
            description: parts[2] || ''
          })
        }
      }

      // 解析返回值
      if (currentSection === 'returns' && line.startsWith('`')) {
        currentMethod.returns = line
      }
    }

    // 添加最后一个方法
    if (currentMethod) {
      result.methods.push(currentMethod)
    }

    return result
  }

  /**
   * 生成自定义格式的方法文档
   */
  generateMethodsDoc(data, template = 'default') {
    let content = ''

    switch (template) {
      case 'compact':
        content = this.generateCompactTemplate(data)
        break
      case 'detailed':
        content = this.generateDetailedTemplate(data)
        break
      case 'api':
        content = this.generateApiTemplate(data)
        break
      default:
        content = this.generateDefaultTemplate(data)
    }

    return content
  }

  /**
   * 默认模板
   */
  generateDefaultTemplate(data) {
    let content = `# ${data.interface} 方法文档\n\n`
    content += `> 自动生成于 ${new Date().toISOString().split('T')[0]}\n\n`
    content += `## 方法列表\n\n`

    data.methods.forEach((method) => {
      content += `### ${method.name}\n\n`

      if (method.description.trim()) {
        content += `${method.description.trim()}\n\n`
      }

      if (method.signature) {
        content += `**语法：**\n\n`
        content += `\`\`\`typescript\n${method.signature
          .replace('▸ **', '')
          .replace('**', '')}\n\`\`\`\n\n`
      }

      if (method.parameters.length > 0) {
        content += `**参数：**\n\n`
        method.parameters.forEach((param) => {
          content += `- \`${param.name}\` (${param.type}): ${param.description}\n`
        })
        content += '\n'
      }

      if (method.returns) {
        content += `**返回值：** ${method.returns}\n\n`
      }

      if (method.since) {
        content += `**版本：** ${method.since}\n\n`
      }

      if (method.deprecated) {
        content += `> ⚠️ **已废弃** - 此方法已被标记为废弃\n\n`
      }

      content += `---\n\n`
    })

    return content
  }

  /**
   * 紧凑模板
   */
  generateCompactTemplate(data) {
    let content = `# ${data.interface} API 速查\n\n`

    content += `| 方法 | 描述 | 版本 |\n`
    content += `|------|------|------|\n`

    data.methods.forEach((method) => {
      const desc = method.description
        .replace(/\n/g, ' ')
        .trim()
        .substring(0, 50)
      const version = method.since || '-'
      content += `| \`${method.name}\` | ${desc} | ${version} |\n`
    })

    content += `\n## 详细说明\n\n`

    data.methods.forEach((method) => {
      content += `**${method.name}**\n`
      content += `${
        method.signature
          ? method.signature.replace('▸ **', '').replace('**', '')
          : ''
      }\n\n`
    })

    return content
  }

  /**
   * 详细模板
   */
  generateDetailedTemplate(data) {
    let content = `# ${data.interface} 完整方法参考\n\n`
    content += `本文档包含 ${data.interface} 接口的所有方法的详细说明。\n\n`

    // 目录
    content += `## 目录\n\n`
    data.methods.forEach((method, index) => {
      content += `${index + 1}. [${
        method.name
      }](#${method.name.toLowerCase()})\n`
    })
    content += '\n'

    // 详细方法说明
    data.methods.forEach((method, index) => {
      content += `## ${index + 1}. ${method.name}\n\n`

      if (method.description.trim()) {
        content += `### 描述\n\n${method.description.trim()}\n\n`
      }

      if (method.signature) {
        content += `### 方法签名\n\n\`\`\`typescript\n${method.signature
          .replace('▸ **', '')
          .replace('**', '')}\n\`\`\`\n\n`
      }

      if (method.parameters.length > 0) {
        content += `### 参数说明\n\n`
        content += `| 参数名 | 类型 | 说明 |\n`
        content += `|--------|------|------|\n`
        method.parameters.forEach((param) => {
          content += `| \`${param.name}\` | \`${param.type}\` | ${param.description} |\n`
        })
        content += '\n'
      }

      if (method.returns) {
        content += `### 返回值\n\n${method.returns}\n\n`
      }

      if (method.since || method.deprecated) {
        content += `### 版本信息\n\n`
        if (method.since) {
          content += `- **引入版本：** ${method.since}\n`
        }
        if (method.deprecated) {
          content += `- **状态：** ⚠️ 已废弃\n`
        }
        content += '\n'
      }

      content += `---\n\n`
    })

    return content
  }

  /**
   * API 风格模板
   */
  generateApiTemplate(data) {
    let content = `---\ntitle: ${data.interface} API\ndescription: ${data.interface} 接口的完整 API 文档\n---\n\n`
    content += `# ${data.interface} API\n\n`

    data.methods.forEach((method) => {
      content += `## ${method.name}\n\n`

      if (method.description.trim()) {
        content += `${method.description.trim()}\n\n`
      }

      content += `\`\`\`typescript\n${
        method.signature
          ? method.signature.replace('▸ **', '').replace('**', '')
          : `${method.name}()`
      }\n\`\`\`\n\n`
      if (method.parameters.length > 0) {
        content += `### Parameters\n\n`
        method.parameters.forEach((param) => {
          content += `- **${param.name}** \`${param.type}\` - ${param.description}\n`
        })
        content += '\n'
      }

      if (method.returns) {
        content += `### Returns\n\n${method.returns}\n\n`
      }

      if (method.since) {
        content += `### Since\n\n${method.since}\n\n`
      }

      content += `---\n\n`
    })

    return content
  }

  /**
   * 处理单个文件
   */
  processFile(inputFile, outputFile, template = 'default') {
    console.log(`处理文件: ${inputFile}`)

    const data = this.parseMarkdownFile(inputFile)
    if (data.methods.length === 0) {
      console.log(`跳过 ${inputFile}: 未找到方法`)
      return
    }

    const content = this.generateMethodsDoc(data, template)

    // 确保输出目录存在
    const outputDir = path.dirname(outputFile)
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    fs.writeFileSync(outputFile, content, 'utf8')
    console.log(`生成方法文档: ${outputFile} (${data.methods.length} 个方法)`)
  }

  /**
   * 批量处理
   */
  processAll(template = 'default') {
    if (!fs.existsSync(this.inputDir)) {
      console.error(`输入目录不存在: ${this.inputDir}`)
      return
    }

    const files = fs
      .readdirSync(this.inputDir)
      .filter((file) => file.endsWith('.md'))
      .filter((file) => file.includes('Editor.md')) // 只处理 Editor 接口

    console.log(`找到 ${files.length} 个 Editor 接口文件`)

    files.forEach((file) => {
      const inputPath = path.join(this.inputDir, file)
      const baseName = file.replace('.md', '')
      const outputPath = path.join(this.outputDir, `${baseName}-methods.md`)

      this.processFile(inputPath, outputPath, template)
    })

    console.log(`\n处理完成! 输出目录: ${this.outputDir}`)
  }
}

// 命令行使用
if (require.main === module) {
  const args = process.argv.slice(2)
  const template = args[0] || 'default'

  console.log(`使用模板: ${template}`)
  console.log(`可用模板: default, compact, detailed, api\n`)

  const extractor = new MethodsExtractor({ outputDir: 'docs/apis' })
  extractor.processAll(template)
}

module.exports = MethodsExtractor
