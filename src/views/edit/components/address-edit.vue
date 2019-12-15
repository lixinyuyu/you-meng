<template>
  <div class="address">
    <van-nav-bar
      title="我的地址"
      left-arrow
      @click-left="$router.back()"
    />
    <div v-show="addRessList.length<1" class="address-tip">
      <div class="tac">
        <img src="@/assets/noAddress.png">
        <span>还没有地址呢，添加一个吧😊</span>
      </div>
    </div>
    <!-- 增加新地址 -->
  </div>
</template>

<script>
import { userAddress } from '@/api/user'
export default {
  name: 'addressEdit',
  data () {
    return {
      addRessList: []
    }
  },
  created () {
    this.loadAddressInfo()
  },
  methods: {
    async loadAddressInfo () {
      const { data } = await userAddress()
      this.addRessList = data.data
    }
  }
}
</script>

<style scoped lang="less">
.address {
  position: relative;
  height: 100vh;
  .address-tip {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .tac {
      img {
      width: 250px;
      height: 180px;
      }
      span {
        font-size: 14px;
        color: #8b9089;
      }
    }
  }
}
</style>
