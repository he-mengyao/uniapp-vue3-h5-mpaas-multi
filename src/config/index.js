import defaults from './config.default.js'
import development from './config.development.js'
import liantiao from './config.liantiao.js'
import preview from './config.preview.js'
import test from './config.test.js'
import production from './config.production.js'

const env = process.env.APP_SP_ENV
const ENV = env.split('-')[0]
const platform = env.split('-')[1]

console.log('当前运行环境 :>> ', ENV)

const BASE = {
  development, // 开发环境
  liantiao, // 联调环境
  test, // 测试环境
  preview, // 预发布环境
  production, // 生产环境
}

export default {
  ...defaults,
  ...BASE[ENV],
  platform,
}
