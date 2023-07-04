<template>
  <view>
    <view class="box">
      <view class="title">手机号</view>
      <uni-easyinput
        prefixIcon="search"
        v-model="phone"
        placeholder="请输入手机号"
      >
      </uni-easyinput>
      <view class="title">密码</view>
      <uni-easyinput
        prefixIcon="search"
        v-model="password"
        placeholder="请输入密码"
        @confirm="login"
      >
      </uni-easyinput>
      <view class="login" @click="login">登录</view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { loginPost, userinfoGet } from '@/api/http'
import jsCookie from 'js-cookie'
import { useUserInfoStore } from 'store/userInfo'
import { useRoute } from 'vue-router'
const phone = ref('')
const password = ref('')
const userInfo = useUserInfoStore()
const route = useRoute()
const redirect = ref(route.query.redirect)
const login = async () => {
  const params = {
    client: 'COMDIC_TERMINAL_APPLET',
    platformType: 'COMDIC_PLATFORM_CRISPS',
    accountChannel: 'AUTH_PHONE_PWD',
    userType: 'ORDINARY_USER',
    dataJson: {
      phone: phone.value,
      password: password.value,
    },
  }
  const res = await loginPost(params)
  const { token, userId } = res.data
  jsCookie.set('token', token)
  jsCookie.set('userId', userId)
  uni.setStorageSync('token', token)
  uni.setStorageSync('userId', userId)
  await getUserInfo(userId)
}

const getUserInfo = async (userId) => {
  try {
    let res = await userinfoGet({
      userId,
    })
    if (res.code === 200) {
      userInfo.SET_INFO(res.data)
      if (redirect.value) {
        window.location.replace(redirect.value)
      } else {
        window.history.go(-1)
      }
    }
  } catch (error) {
    console.log('获取用户信息失败')
  }
}
</script>

<style lang="scss" scoped>
.box {
  padding: 40rpx;
}
.title {
  font-size: 26rpx;
  color: #999;
  margin: 20rpx;
}
.login {
  width: 320rpx;
  height: 88rpx;
  border-radius: 8rpx;
  margin-top: 148rpx;
  background-color: #4974f5;
  border: 1px solid #4974f5;
  font-size: 32rpx;
  font-weight: 700;
  color: #fff;
  line-height: 88rpx;
  text-align: center;
  margin: 40rpx auto;
}
</style>
