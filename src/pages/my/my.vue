<template>
  <view class="my"></view>
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue'

const _this = getCurrentInstance().appContext.config.globalProperties

onMounted(() => {
  console.log('_this :>> ', _this)
  console.log('$sp :>> ', _this.$id)
})
</script>

<style scoped lang="scss"></style>
