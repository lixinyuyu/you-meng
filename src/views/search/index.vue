<template>
  <div>
    <!-- search -->
    <form action="/">
      <van-search
        v-model="searchText"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="$router.push({name: 'home'})"
      />
    </form>
    <!-- layout -->
    <layout />
  </div>
</template>

<script>
import layout from './components/layout'
export default {
  name: 'search',
  components: {
    layout
  },
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    onSearch () {
      console.log('11')
    }
  },
  created () {
  }
}
</script>
<style lang="less" scoped>

</style>
