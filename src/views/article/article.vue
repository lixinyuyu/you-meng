<template>
  <div>
    <div v-if="artInfos">
      <van-nav-bar
        :title="artInfos.aut_name"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
      <userAttlist
      :articleList="[...artInfos]"
      :userInfo="userInfo"
      :source="141314"
      class="article">
       <div slot="art-comment"></div>
       <div slot="bottom-border"></div>
      </userAttlist>
      <!-- <commentList /> -->
    </div>
  </div>
</template>

<script>
import { getDetailArt } from '@/api/articles'
import { mapState } from 'vuex'
// import commentList from './components/commentList'
import userAttlist from '@/components/user/user-attlist'
export default {
  name: 'showAllArticle',
  data () {
    return {
      artInfos: null
    }
  },
  components: {
    // commentList,
    userAttlist
  },
  computed: {
    ...mapState(['userInfo']),
    articleId () {
      return this.$route.params.art_id
    }
  },
  created () {
    this.loadDetailArticle()
  },
  methods: {
    loadDetailArticle () {
      getDetailArt({ articleId: this.articleId }).then(body => {
        console.log(body)
        this.artInfos = body
      })
    },
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
      // 分享todos
    }
  }
}
</script>

<style scoped lang="less">
.article {
  padding: 0 15px;
}
</style>
