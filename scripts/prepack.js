const fs = require('fs')
const path = require('path')
const packgae = require('../package.json')

const stat = fs.statSync(path.join(__dirname, '..', packgae.types))
if (!stat.isFile()) {
  throw new Error('types file not found')
}
