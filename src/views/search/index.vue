<template>
  <div>
    <searchCommon
      @search="handleTemp"
      @getHight="searchText = $event"
      @clear="handleclear"
      ref="searchCo"/>
    <van-cell-group >
      <van-cell v-for="(item, index) in options" :key="index">
          <div slot="title"
          v-html="handleHightLight(item, searchText)"
          @click="onSearch(item)"
          ></div>
          <!-- next 点击搜索内容跳转+搜索关键字跳转路由 -->
      </van-cell>
    </van-cell-group>
    <!-- layout -->
    <layout />
  </div>
</template>

<script>
import layout from './components/layout'
import searchCommon from '@/components/search/searchCommon.vue'
export default {
  name: 'search',
  components: {
    layout,
    searchCommon
  },
  data () {
    return {
      searchText: '',
      options: []
    }
  },
  methods: {
    handleTemp (event) {
      this.options = event.options
    },
    onSearch (keyword) {
      this.$refs['searchCo'].onSearch(keyword)
    },
    handleHightLight (item, searchText) {
      return item.toLowerCase().split(searchText).join(`<span style="color: red">${searchText}</span>`)
    },
    handleclear () {
      this.searchText = ''
      this.options = []
    }
  }
}
</script>
<style lang="less" scoped>

</style>
