# sp-wx-uni-template

> 一个基于 uniapp 的 mPaaS 开发模板，使用技术栈：Vue3.2 + Vite + Uni-ui + Pinia + Scss + 代码风格统一(eslint+prettier)

## 注意事项

1. 向领导申请项目编码 (`sysCode`) 和 秘钥 (`secret`) 在 `config` 文件夹中的环境文件进行配置，用于埋点
2. 推荐 Node 版本号 `16.13.1`
3. mPaaS 小程序无法真机调试或者预览问题；默认配置中勾选了 `启动小程序基础库2.0构建`，`@dcloudio/uni-mp-alipay` 依赖库有问题需要手动修改
4. Windows电脑拉取模板时如果出现所有文件都是CRLF，导致eslint检测报错问题；解决方案：[点击](https://blog.csdn.net/KLS_CSDN/article/details/89761660)

```
// 查找目录 `node_modules/@dcloudio/uni-mp-alipay/dist/uni.compiler.js`
// 第18-19行改为false
var enableAppxNg = false;
var enableNodeModuleBabelTransform = false;
```

## 常用命令

- 运行

  > yarn start-mp-alipay:development

- 打包

  > build-mp-alipay:development

## 包含功能

1. `uni-ui` 引用和初始化，文档地址：[点击](https://uniapp.dcloud.io/component/uniui/uni-ui)
2. `埋点 SDK `接入完成及初始化完成
3. 封装网络请求 API 同时在其基础上添加 `验签` 功能
4. 运行环境配置
5. 模块化 Pinia 状态管理
6. 常用 Utils 公共方法

## 项目结构

```
├─api // 请求接口Url，根据模块划分统一在index.js导出
├─common
│   ├─spMd // 埋点SDK封装
├─components // 自定义组件
├─config // 环境配置参数
├─pages // 页面
├─static // 静态资源
├─store // pinia状态管理
├─styles // 样式
├─utils // 常用工具类
│   ├─http.js // 接口请求封装
├─App.vue
├─main.js
├─manifest.json // uni配置信息，需要配置对应的微信小程序 `appid`
└─pages.json
```
