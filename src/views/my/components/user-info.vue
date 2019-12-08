<template>
  <div>
    <van-skeleton
      title
      avatar
      :row="3"
      :loading="userInfos ? false : true"
    >
      <div class="wrapper">
        <div class="user-avatar">
          <img :src="userInfos.photo" @click="$router.push(
            {
              name: 'userShow',
              params:{
                userName: userName,
                userInfos: userInfos
              }
            })
            ">
        </div>
        <div class="user-infos">
          <div>
            {{ userName }}
            <van-icon name="edit" class="icon" color='#ccc' @click="$router.push({name: 'infoEdit'})"/>
          </div>
          <span style="font-size:12px;color:#ccc">{{userInfos.mobile}}</span>
          <span style="font-size:13px;color:#ccc">{{userInfos.birthday || '写签名更容易获得关注'}}</span>
        </div>
      </div>
    </van-skeleton>
  </div>
</template>
<script>
export default {
  name: 'userInfo',
  data () {
    return {
      userName: 'lxxy',
      loading: true
    }
  },
  computed: {
    userInfos () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    handleShow () {
    }
  },
  created () {
  }
}
</script>
<style lang="less" scoped>
.wrapper {
  display: flex;
  .user-avatar {
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
      margin-right: 20px;
    }
  }
  .user-infos {
    div,span {
      display: block;
      line-height: 1.8;
      font-size: 22px;
      font-family: Tahoma,Helvetica,Arial,sans-serif;
      color: #302c2c;
    }
    .icon {
      margin-left:10px;
      vertical-align: middle
    }
  }
}
</style>
