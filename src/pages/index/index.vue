<template>
  <view class="home">
    <view :style="{ paddingTop: statusBarHeight, background: '#4974f5' }">
      <uni-nav-bar
        :title="title"
        backgroundColor="#4974f5"
        color="#fff"
      ></uni-nav-bar>
    </view>
    <view class="token">{{ info.token || 'token' }}</view>
    <view class="token">{{ info.userId || 'userId' }}</view>
    <view @click="click">点击获取用户信息</view>
  </view>
</template>

<script setup>
import { onMounted, ref, getCurrentInstance, inject } from 'vue'
import initUserInfo from 'utils/initUserInfo'
import storage from '@/utils/storage'
import { smsCode } from '@/api/http'
const _this = getCurrentInstance().appContext.config.globalProperties

const $sp = inject('$sp')
let info = ref({})
const title = ref('')
const statusBarHeight = ref(0)
// 获取用户信息
const click = async () => {
  await initUserInfo.init($sp)
  info.value = {
    token: storage.get('token'),
    userId: storage.get('userId'),
  }
}
onMounted(async () => {
  title.value = _this.$platform
  await _this.$onLaunched
  const res = await smsCode({
    phone: '13767067367',
    userType: 'ORDINARY_USER',
    msgTemplateCode: 'SMS_TMP_USER',
  })
  console.log(res, '0000')
  statusBarHeight.value = uni.getSystemInfoSync().statusBarHeight
})
</script>

<style scoped lang="scss"></style>
