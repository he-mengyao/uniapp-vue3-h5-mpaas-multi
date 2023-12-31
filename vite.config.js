import { defineConfig } from 'vite'
import SetEnvByCommandArg from 'vite-plugin-env-command'
import uni from '@dcloudio/vite-plugin-uni'
// https://vitejs.dev/config/
import path from 'path'

export default defineConfig({
  transpileDependencies: ['@dcloudio/uni-ui'],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      api: path.resolve(__dirname, './src/api'),
      config: path.resolve(__dirname, './src/config'),
      static: path.resolve(__dirname, './src/static'),
      store: path.resolve(__dirname, './src/store'),
      utils: path.resolve(__dirname, './src/utils'),
      common: path.resolve(__dirname, './src/common'),
    },
  },
  plugins: [
    uni(),
    SetEnvByCommandArg({
      key: 'APP_SP_ENV',
    }),
  ],
  server: {
    // 本地代理
    proxy: {
      '/api': {
        target: 'https://tspmicrouag.shupian.cn',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(new RegExp('^/api'), ''),
      },
    },
  },
})
