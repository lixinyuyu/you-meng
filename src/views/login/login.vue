<template>
  <div style="padding: 0 20px">
    <div class="iconfont icon-zuojiantou" @click="$router.go(-1)" style="padding: 20px 0;font-size:22px"></div>
    <div>
      <h5 style="margin:0">Hello</h5>
      <p style="font-size:16px;margin:15px 0">欢迎来到有盟</p>
    </div>
    <van-cell-group>
      <van-field
        v-model="mobile"
        clearable
        placeholder="请输入手机号"
      />

      <van-field
        v-model="code"
        :type="icon ? 'password': 'text'"
        clearable
        placeholder="请输入密码"
      >
      <van-button
        :icon="icon ? 'closed-eye': 'eye-o'"
        slot="button"
        size="mini"
        style="margin: 0;border: none; height:20px"
        @click="icon = !icon"
      >
      </van-button>
      </van-field>
    </van-cell-group>
    <van-button type="primary" :color="color"  style="font-size:13px" @click="handleLogin">登录</van-button>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'Login',
  data () {
    return {
      mobile: '',
      code: '',
      icon: true
    }
  },
  computed: {
    color () {
      return this.mobile && this.code ? '#a7c0da' : '#ccc'
    }
  },
  methods: {
    handleLogin () {
      this.$toast.loading({
        mask: false,
        message: '加载中...',
        forbidClick: true
      })
      login({ mobile: this.mobile, code: this.code })
        .then(data => {
        /*
        登陆完成之后要干的事情：
        1.将返回的token信息存储到本地存储中去
        2.跳转路由，跳转到首页
        */
          this.$toast.clear()
          this.$store.commit('setUser', data)
          this.$router.push({
            name: 'home'
          })
        })
    }
  }
}
</script>
<style lang="less" scoped>
.van-hairline--bottom::after{
  border-bottom-width: 0;
}
input:-internal-autofill-selected {
  background-color: #fff !important;
}
.van-cell {
  padding-left: 0;
  padding-right: 0;
}
button {
  width: 100%;
  height: 80px;
  line-height: 80px;
  margin-top: 120px;
}
</style>
