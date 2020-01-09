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
      <commentList />
    </div>
  </div>
</template>

<script>
import { getDetailArt } from '@/api/articles'
import commentList from './components/commentList'
export default {
  name: 'showAllArticle',
  data () {
    return {
      artInfos: null,
      isShow: false,
      index: null
    }
  },
  components: {
    commentList
  },
  computed: {
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
</style>
