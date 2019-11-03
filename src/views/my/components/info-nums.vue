<template>
  <div>
    <div class="wrapper">
      <ul>
        <li>
          <div>
            <span class="fw">{{ total }}</span>
            <span>关注</span>
          </div>
        </li>
        <li>
          <div>
            <span class="fw">{{ fans }}</span>
            <span>粉丝</span>
          </div>
        </li>
        <li>
          <div>
            <span class="fw">{{ moreData }}</span>
            <span>好友</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { userGet, userFans, userData } from '@/api/user.js'
export default {
  name: 'infoNums',
  data () {
    return {
      total: null,
      fans: null,
      moreData: null
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
      this.total = data.total_count
    },
    async getFans () {
      const data = await userFans({ target: this.id })
      this.fans = data.total_count
    },
    async getData () {
      const data = await userData({ target: this.id })
      this.moreData = data.read_count
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
.wrapper {
  margin-top: 20px;
  li {
    float: left;
    width: 33%;
    div {
      text-align: center;
      span {
        display: block;
        font-size: 14px;
        line-height: 30px;
        color: #302c2c;
      }
      .fw {
        font-weight: 700;
        font-size: 16px;
      }
    }
  }
}
</style>
