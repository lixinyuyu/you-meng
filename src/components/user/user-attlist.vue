/*
 time: 2020-1-01
 name: '用户动态'
 */

<template>
  <div class="userAttlist">
    <div class="user-wrapper">
      <div class="user-top">
        <div class="avator">
          <img :src="userInfo.photo" class="imgSmall"/>
        </div>
        <div class="infos">
          <span>{{articleInfos.aut_name}}</span>
          <span class="grey">{{articleInfos.art_id}}</span>
        </div>
        <div class="attr">
          <van-button round type="info" size="small" color="black">{{isAttr}}</van-button>
        </div>
      </div>
      <div class="user-center">
        <span>{{articleInfos.title}}</span>
      </div>
      <div class="user-bottom">
        <van-grid :border="false" :column-num="coverImage">
          <van-grid-item v-for="item in articleInfos.cover.images" :key="item">
            <van-image :src="item" />
          </van-grid-item>
        </van-grid>
      </div>
      <div class="art-text">
        <div class="time">
          <span class="grey">{{articleInfos.pubdate}}</span>
        </div>
        <div class="attribute">
          <van-icon name="like" size="14" /> &nbsp; <span class="self-lr-right">{{articleInfos.like_count}}</span>
          <van-icon name="chat" size="14"/> &nbsp; {{articleInfos.comm_count}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userAttlist',
  props: {
    articleInfos: {
      type: Object,
      default: () => {}
    },
    userInfo: {
      type: Object,
      default: () => {}
    },
    isUserSelf: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isAttr () {
      return this.articleInfos.is_liking ? '已关注' : '去关注'
    },
    coverImage () {
      return this.isUserSelf ? 1 : 3
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.user-wrapper {
  padding: 5px 0;
  font-size: 14px;
  .user-top {
    display: flex;
    height: 45px;
    padding: 8px 0;
    .avator {
      flex: 2;
    }
    .infos {
      flex: 6;
      span {
        display: block;
        height: 50%;
      }
    }
  }
  .art-text {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    font-size: 12px;
  }
}
</style>
