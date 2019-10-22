<template>
  <div>
    <form action="/">
      <van-search
        v-model="searchInfo"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
        @clear="onCancel"
        clearable
        fixed
      />
    </form>
  </div>
</template>

<script>
import { searchData } from '@/api/search.js'
import { debounce } from 'lodash'
export default {
  name: 'searchCommon',
  data () {
    return {
      searchInfo: ''
    }
  },
  computed: {
  },
  watch: {
    searchInfo: debounce(async function (keyword) {
      if (!keyword.trim().length) {
        return
      }
      const data = await searchData(keyword)
      this.$emit('search', data)
      this.$emit('getHight', keyword)
    }, 1000)
  },
  methods: {
    onSearch (q) {
      this.$router.push({
        name: 'searchContent',
        params: {
          q
        }
      })
    },
    onCancel () {
      this.searchInfo = ''
      this.$emit('clear', this.searchInfo)
    }
  }
}
</script>
<style lang="less" scoped>

</style>
