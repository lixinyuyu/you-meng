<template>
  <div>
    home
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <div class="box">111</div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.box {
  width: 750px;
  height: 100px;
  background-color: red;
}
</style>
