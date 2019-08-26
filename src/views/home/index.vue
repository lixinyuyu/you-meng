<template>
  <div style="padding: 0 15px">
    <!-- 首页导航部分 -->
    <van-nav-bar title="首页" fixed @click-left="show = !show">
      <div slot="left" class="user-nav">
        <!-- <img src=""> -->
      </div>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <!-- 弹出层 -->
    <van-popup
      v-model="show"
      round
      position="left"
      :style="{ height:'100%',width:'80%' }"
    />
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      show: false
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.box {
  background-color: red;
}
button {
  position: relative;
  bottom: 20px;
}
.user-nav {
  width:70px;
  height:70px;
  border-radius:50%;
  background-color: red;
}
</style>
