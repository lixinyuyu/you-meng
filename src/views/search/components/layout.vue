<template>
  <div>
    <van-tabbar route>
      <van-tabbar-item
        replace
        to="/"
        icon="home-o"
      >
        首页
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/search"
        icon="search"
      >
        搜索
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout',
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
