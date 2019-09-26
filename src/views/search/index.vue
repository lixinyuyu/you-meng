<template>
  <div>
    <!-- search -->
    <form action="/">
      <van-search
        v-model="searchText"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch(searchText)"
        @cancel="$router.push({name: 'home'})"
      />
    </form>
    <van-cell-group v-if="searchText.length && options.length">
      <van-cell v-for="(item, index) in options" :key="index">
          <div slot="title" v-html="handleHightLight(item, searchText)"></div>
          <!-- next 点击搜索内容跳转+搜索关键字跳转路由 -->
      </van-cell>
    </van-cell-group>
    <!-- layout -->
    <layout />
  </div>
</template>

<script>
import layout from './components/layout'
import { searchData } from '@/api/search'
import { debounce } from 'lodash'
export default {
  name: 'search',
  components: {
    layout
  },
  data () {
    return {
      searchText: '',
      options: []
    }
  },
  methods: {
    onSearch (keyword) {
    },
    handleHightLight (item, searchText) {
      return item.toLowerCase().split(searchText).join(`<span style="color: red">${searchText}</span>`)
    }
  },
  watch: {
    searchText: debounce(function (text) {
      if (!text.trim().length) {
        return
      }
      searchData(text).then(data => {
        this.options = data.options
      })
    }, 500)

  }
}
</script>
<style lang="less" scoped>

</style>
