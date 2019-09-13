<template>
  <div style="padding: 0px 15px;height:100%">
    <!-- 首页导航部分 -->
    <van-nav-bar title="首页" fixed @click-left="isShow = true" :border="false" style="margin-bottom:50px">
      <div slot="left" class="user-nav">
        <img :src="userInfo.photo">
      </div>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <!-- 弹出层 -->
    <userPopup v-model="isShow" :userInfo = "userInfo"/>
    <!-- 轮播图部分 -->
    <swiper/>
    <!-- 用户关注的频道列表部分 -->
    <userChannel />
  </div>
</template>
<script>
import { user } from '@/api/user'
import userPopup from './components/user-popup'
import swiper from './components/swiper'
import userChannel from './components/user-channel'
export default {
  name: 'Home',
  components: {
    userPopup,
    swiper,
    userChannel
  },
  data () {
    return {
      isShow: false,
      userInfo: {}
    }
  },
  methods: {
    loadUser () {
      user().then(data => {
        this.userInfo = data
        this.$store.commit('serUserInfo', data)
      })
    }
  },
  created () {
    this.loadUser()
  }
}
</script><style lang="less" scoped>
.box {
  background-color: red;
}
button {
  position: relative;
  bottom: 20px;
}
.user-nav {
  height:60px;
  img {
    width: 40px;
    height: 40px;
    border-radius:50%;
    margin-top: 20px;
  }
}
</style>
