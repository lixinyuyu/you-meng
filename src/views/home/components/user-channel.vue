<template>
  <div>
    <van-tabs v-model="active" swipeable>
      <van-tab v-for="(item, index) in userChannels" :key="index" :title="item.name">
        内容 {{  }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { userChannel } from '@/api/user'
export default {
  data () {
    return {
      active: 0,
      userChannels: {}
    }
  },
  methods: {
    loadChannels () {
      userChannel().then(data => {
        console.log(data)
        this.userChannels = data.channels
      })
    }
  },
  created () {
    this.loadChannels()
  }
}
</script>
<style lang="less" scoped>

</style>
