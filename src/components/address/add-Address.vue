<template>
  <div>
    <van-nav-bar
      title="添加地址"
      left-arrow
      @click-left="$router.back()"
    />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import areaList from '@/utils/area.js'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'addAddRess',
  data () {
    return {
      areaList,
      searchResult: [],
      addressList: []
    }
  },
  computed: {
    ...mapState(['address'])
  },
  created () {
    this.addressList = this.address ? this.address : []
  },
  methods: {
    ...mapMutations(['setAddress']),
    onSave (content) {
      this.addressList.push(content)
      this.setAddress(this.addressList)
      this.$toast('保存成功')
      this.$router.back()
    },
    onDelete () {}
  }
}
</script>

<style scoped lang="less">
</style>
