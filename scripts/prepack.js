const fs = require('fs')
const path = require('path')
const packageJson = require('../package.json')

const stat = fs.statSync(path.join(__dirname, '..', packageJson.types))
if (!stat.isFile()) {
  throw new Error('types file not found')
}

const distDir = path.join(__dirname, '..', 'dist')
const distPackageJsonPath = path.join(__dirname, '..', 'dist', 'package.json')
const distPackageTemplatePath = path.join(__dirname, '..', 'package.dist.json')
const distPackageTemplate = JSON.parse(
  fs.readFileSync(distPackageTemplatePath, 'utf8')
)

const distPackage = {
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  main: 'index.js',
  types: 'index.d.ts',
  license: packageJson.license,
  homepage: packageJson.homepage,
  repository: packageJson.repository,
  keywords: packageJson.keywords,
  dependencies: packageJson.dependencies,
  peerDependencies: packageJson.peerDependencies,
  optionalDependencies: packageJson.optionalDependencies,
  publishConfig: packageJson.publishConfig,
  ...distPackageTemplate
}

distPackage.version = packageJson.version
distPackage.main = 'index.js'
distPackage.types = 'index.d.ts'
distPackage.publishConfig =
  distPackageTemplate.publishConfig ?? packageJson.publishConfig

const filteredDistPackage = Object.fromEntries(
  Object.entries(distPackage).filter(([, value]) => value != null)
)

fs.mkdirSync(distDir, { recursive: true })

fs.writeFileSync(
  distPackageJsonPath,
  `${JSON.stringify(filteredDistPackage, null, 2)}\n`
)
