<template>
  <div>
    <div class="wrapper" v-if="!loading">
      <van-row>
        <van-col v-for="(item, index) in infoArray" :key="index" span="8">
          <nums-count :count="item.data" :text="item.text"></nums-count>
        </van-col>
      </van-row>
    </div>
    <van-loading size="24px" v-if="loading" style="text-align: center">加载中...</van-loading>
  </div>
</template>

<script>
import { userGet, userFans, userData } from '@/api/user.js'
import numsCount from '@/components/nums/numsCount'
export default {
  name: 'infoNums',
  components: {
    numsCount
  },
  data () {
    return {
      loading: true,
      infoArray: [
        {
          text: '关注',
          data: null
        }, {
          text: '粉丝',
          data: null
        }, {
          text: '好友',
          data: null
        }
      ]
    }
  },
  computed: {
    id () {
      return this.$store.state.userInfo.id
    }
  },
  methods: {
    async load () {
      const data = await userGet({ target: this.id })
      this.infoArray[0].data = data.total_count
      this.loading = false
    },
    async getFans () {
      const data = await userFans({ target: this.id })
      this.infoArray[1].data = data.total_count
      this.loading = false
    },
    async getData () {
      const data = await userData({ target: this.id })
      this.infoArray[2].data = data.read_count
      this.loading = false
    }
  },
  created () {
    this.load()
    this.getFans()
    this.getData()
  }
}
</script>
<style lang="less" scoped>
</style>
