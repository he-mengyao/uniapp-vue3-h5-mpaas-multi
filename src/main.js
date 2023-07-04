import { createSSRApp } from 'vue'
import App from './App.vue'
import pinia from 'store/store' // 状态管理
import sp from '@fe/sp-api-js' // mPaaS或离线包调用SDK
import spMd from '@fe/sp-md-web-sdk' // 埋点
import config from '@/config/index'
export function createApp() {
  const app = createSSRApp(App)

  app.provide('$sp', sp)

  app.config.globalProperties.$spMd = spMd
  app.config.globalProperties.$platform = config.platform

  // 初始化小程序时需要做的异步操作
  app.config.globalProperties.$onLaunched = new Promise((resolve) => {
    app.config.globalProperties.$isResolve = resolve
  })

  app.use(pinia)

  return {
    app,
  }
}
