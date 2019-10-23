<template>
  <div>
    <van-nav-bar  left-text="我的" :border="false">
      <van-icon name="ellipsis" slot="right" @click="onClickRight" />
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return {
    }
  },
  methods: {
    onClickRight () {
      console.log('设置')
    }
  },
  created () {
  }
}
</script>
<style lang="less" scoped>

</style>
