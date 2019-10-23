<template>
  <div>
    <!-- 导航栏部分 -->
    <navBar />
    <!-- 头像和信息部分 -->
    <userInfo />
    <layout />
  </div>
</template>
<script>
import layout from './components/layout'
import navBar from './components/navBar'
import userInfo from './components/user-info'
export default {
  name: 'my',
  components: {
    layout,
    navBar,
    userInfo
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
