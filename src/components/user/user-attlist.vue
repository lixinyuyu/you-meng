/*
 time: 2020-1-01
 name: '用户动态'
 */

<template>
  <div class="userAttlist">
    <div v-for="(item, index) in articleList"
      :key="index"
      @click="handleShowAll(item)"
      >
      <div class="user-wrapper"
      >
        <slot name="user-avator">
          <div class="user-top">
          <div class="avator">
            <img :src="userInfo.photo" class="imgSmall"/>
          </div>
          <div class="infos">
            <span>{{item.aut_name}}</span>
            <span class="grey">{{item.art_id}}</span>
          </div>
          <div class="attr">
            <van-button
            round type="info"
            size="small"
            :color="isAttribute(item)"
            @click="handleCancelUser(item.aut_id, item)"
            >{{item.is_liking || item.is_followed? '取消关注':'关注'}}</van-button>
          </div>
        </div>
        </slot>
        <div class="user-center">
          <span>{{item.title}}</span>
        </div>
        <slot name="pic">
          <div class="user-bottom">
            <van-grid :border="false" :column-num="coverImage" v-if="item.cover">
              <van-grid-item v-for="images in item.cover.images" :key="images">
                <van-image :src="images" />
              </van-grid-item>
            </van-grid>
          </div>
        </slot>
        <div class="art-text">
          <div class="time">
            <span>{{item.pubdate | dateformat('YYYY-MM-DD HH:mm:ss')}}</span>
          </div>
          <div class="attribute">
            <van-icon name="like" size="14" /> &nbsp; <span class="self-lr-right">{{item.like_count}}</span>
            <van-icon name="chat" size="14"/> &nbsp; {{item.comm_count}}
          </div>
        </div>
        <slot name="art-comment">
            <!-- 评论组件 -->
          <comment :commList="commList"/>
        </slot>
      </div>
      <slot name="bottom-border">
        <div class="border"></div>
      </slot>
    </div>
  </div>
</template>

<script>
import comment from '@/components/comment/comment'
import { getComment } from '@/api/articles'
import { cancelUserAttribute, AttributeUser } from '@/api/user'

export default {
  name: 'userAttlist',
  props: {
    articleList: {
      type: Array,
      default: () => []
    },
    userInfo: {
      type: Object,
      default: () => {}
    },
    isUserSelf: {
      type: Boolean,
      default: false
    },
    source: {
      type: [Number, String],
      default: ''
    },
    isArticle: {
      type: Boolean,
      default: true
    }
  },
  components: {
    comment
  },
  data () {
    return {
      offset: null,
      limit: 10,
      commList: []
    }
  },
  computed: {
    coverImage () {
      return this.isUserSelf ? 1 : 3
    }
  },
  created () {
    this.loadComment()
  },
  methods: {
    loadComment () {
      getComment({
        source: this.source, // 文章id或者评论id
        offset: this.offset,
        limit: this.limit,
        isArticle: this.isArticle
      }).then(body => {
        console.log('bo', body)
        this.commList = body.results
      })
    },
    handleShowAll (item) {
      this.$router.push({
        name: 'showAllArticle',
        params: {
          art_id: item.art_id
        }
      })
    },
    isAttribute (item) {
      return item.is_followed ? 'grey' : 'black'
    },
    // 取消关注用户
    handleCancelUser (id, item) {
      // 得在这里判断用户当前是否关注了
      // 如果关注了就取消，否则反之
      if (item.is_followed) {
        // 说明当前关注了，想取消关注
        cancelUserAttribute(id).then(body => {
          item.is_followed = false
        })
      } else {
        // 说明当前没关注，想要关注
        AttributeUser({ target: id }).then(body => {
          item.is_followed = true
        })
      }
    }
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
.border {
  height: 6px;
  margin: 10px 0;
  background-color: #f8f8f8;
}
</style>
