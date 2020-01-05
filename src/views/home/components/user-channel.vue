<template>
  <div>
    <van-tabs v-model="active" swipeable sticky :offset-top="39" @change="handleChange" style="margin-bottom:45px">
      <van-tab
      v-for="(item, index) in userChannels"
      :key="index"
      :title="item.name"
      >
        <user-attlist
        :articleList="articleList"
        :userInfo="userInfo"
        :source = "141314"
        ></user-attlist>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { userChannel } from '@/api/user'
import { userArtList } from '@/api/articles'
import userAttlist from '@/components/user/user-attlist'
export default {
  props: {
    userInfo: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    userAttlist
  },
  data () {
    return {
      active: 0,
      userChannels: {},
      articleList: [],
      page: 1
    }
  },
  methods: {
    loadChannels () {
      userChannel().then(data => {
        this.userChannels = data.channels
      })
    },
    loadUserArtList (page = 1) {
      userArtList().then(body => {
        this.articleList = body.results
      })
    },
    handleChange () {
      console.log('c')
    }
  },
  created () {
    this.loadChannels()
    this.loadUserArtList()
  }
}
</script>
<style lang="less" scoped>

</style>
