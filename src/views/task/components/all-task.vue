<template>
  <div>
    <taskCommon />
    <van-button plain type="info" @click="show = true">朴素按钮</van-button>
    <van-popup
      v-model="show"
      position="bottom"
      round
      :style="{ height: '80%' }"
    >
    <svg-Icon name="arrow" width="20" height="20"></svg-Icon>
    <svg-Icon name="love-heart" width="20" height="20"></svg-Icon>
    <svg-Icon name="love-heart"></svg-Icon>
    </van-popup>
  </div>
</template>

<script>
import taskCommon from './task-common'
import { getIphone } from '@/api/task'
export default {
  name: 'Alltask',
  components: {
    taskCommon
  },
  data () {
    return {
      allData: [],
      show: false
    }
  },
  methods: {
    async loadInfo () {
      const { data } = await getIphone()
      this.allData = data.data
      console.log(data)
    }
  },
  created () {
    this.loadInfo()
  }
}
</script>

<style scoped lang="less">
</style>
