<template>
  <div class="login-wraper">
    <div class="login-inner">
      <van-button round type="primary" color="#7696b7eb" style="font-size: 16px" to="/login">登录</van-button>
      <van-button round type="primary" color="#a7c0da" style="font-size: 16px" to="/">注册</van-button>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
.login-wraper {
  height: 100%;
  background: url('./bag2.jpg') no-repeat;
}
.login-inner {
  position: relative;
  top: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  button {
    width: 90%;
    margin-bottom: 20px;
  }
}
</style>
