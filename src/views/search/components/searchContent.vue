<template>
  <div>
    <searchCommon ref="searchCo" />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="loadData"
    >
      <van-cell
        v-for="item in searchList"
        :key="item.art_id"
        :title="item.title"
      />
    </van-list>
  </div>
</template>

<script>
import { searchResult } from '@/api/search'
import searchCommon from '@/components/search/searchCommon.vue'
export default {
  name: 'searchContent',
  components: {
    searchCommon
  },
  data () {
    return {
      page: 1,
      perPage: 20,
      loading: false,
      finished: false,
      searchList: []
    }
  },
  computed: {
    q () {
      return this.$route.params.q
    }
  },
  watch: {
    q (params) {
      this.$refs.searchCo.onSearch(params)
    }
  },
  methods: {
    onLoad () {
      this.loadData()
    },
    loadData () {
      var params = {
        page: this.page,
        perPage: this.perPage,
        q: this.q
      }
      searchResult(params).then(res => {
        this.searchList.push(...res.results)
        this.loading = false
        if (!res.results.length) {
          this.finished = true
        }
        this.page++
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>
