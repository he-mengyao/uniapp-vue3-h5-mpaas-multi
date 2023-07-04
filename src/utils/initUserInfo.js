import { useUserInfoStore } from 'store/userInfo'
import Cookies from 'js-cookie'
import { userinfoGet } from '@/api/http'
import storage from 'utils/storage'
import config from '@/config'

const userInfo = useUserInfoStore()

const initUserInfo = {
  // 初始化各环境数据
  init($sp) {
    return new Promise((resolve) => {
      // #ifdef H5
      this.userinfo().then((res) => {
        resolve(res)
      })
      // #endif
      // #ifndef H5
      this.getUserInfo($sp).then((res) => {
        resolve(res)
      })
      // #endif
    })
  },
  // h5获取用户信息
  async userinfo() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      const userId = storage.get('userId') || Cookies.get('userId') || ''
      try {
        let res = await userinfoGet({
          userId,
        })
        if (res.code === 200) {
          userInfo.SET_INFO(res.data)
          resolve(res.data)
        } else {
          throw new Error()
        }
      } catch (error) {
        userInfo.CLEAR_INFO()
        const isSever = document.domain.includes('shupian')
        if (isSever) {
          // 部署在环境上
          window.location.replace(
            `${config.domainUrl}/login?redirect=${encodeURIComponent(
              window.location.href
            )}`
          )
        } else {
          // 本地调试页面
          window.location.replace(
            `/pages/login/index?redirect=${encodeURIComponent(
              window.location.href
            )}`
          )
        }
        reject(error)
      }
    })
  },
  // app通道获取用户信息
  getUserInfo($sp) {
    return new Promise((resolve, reject) => {
      try {
        $sp.getLoginUserInfo({}, (res) => {
          const result = res.data && JSON.parse(res.data)
          if (result.token && result.userId) {
            userInfo.SET_INFO(result)
            resolve(result)
          } else {
            $sp.userLogin()
          }
        })
      } catch (error) {
        reject(error)
      }
    })
  },
}

export default initUserInfo
