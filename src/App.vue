<script setup>
import { getCurrentInstance } from 'vue'
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'
// import { spMdInit } from 'common/spMd'

const _this = getCurrentInstance().appContext.config.globalProperties

onLaunch(async () => {
  // await spMdInit(_this.$spMd)
  _this.$isResolve()
})

onShow(() => {
  // console.log("App Show");
})
onHide(() => {
  // console.log("App Hide");
})
</script>

<style lang="scss"></style>
