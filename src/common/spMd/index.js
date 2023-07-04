import config from './config'

export const spMdInit = ($spMd, options = config) => {
  try {
    let userId = uni.getStorageSync('userId')
    let token = uni.getStorageSync('token')
    if (userId && token)
      options = {
        ...options,
        user_id_sp: userId,
        token,
        is_login_sp: true,
      }
    return $spMd.init(options)
  } catch (e) {
    console.log(e)
  }
}
