<template>
  <div>
    <!-- 导航栏部分 -->
    <navBar />
    <div style="padding: 0 15px">
    <!-- 头像和信息部分 -->
      <userInfo style="margin-bottom: 10px"/>
      <!-- 用户关注等情况 -->
      <infoNums />
      <!-- 用户任务 -->
      <infoTasks />
      <layout />
    </div>
  </div>
</template>
<script>
import layout from './components/layout'
import navBar from './components/navBar'
import userInfo from './components/user-info'
import infoNums from './components/info-nums'
import infoTasks from './components/user-tasks'
export default {
  name: 'my',
  components: {
    layout,
    navBar,
    userInfo,
    infoNums,
    infoTasks
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
