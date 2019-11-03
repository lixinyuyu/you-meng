<template>
  <div>
    <!-- 导航栏部分 -->
    <navBar />
    <!-- 头像和信息部分 -->
    <div style="padding: 0 15px">
      <userInfo />
      <infoNums />
      <layout />
    </div>
  </div>
</template>
<script>
import layout from './components/layout'
import navBar from './components/navBar'
import userInfo from './components/user-info'
import infoNums from './components/info-nums'
export default {
  name: 'my',
  components: {
    layout,
    navBar,
    userInfo,
    infoNums
  },
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
  }
}
</script>
<style lang="less" scoped>

</style>
