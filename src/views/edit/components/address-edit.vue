<template>
  <div class="address">
    <van-nav-bar
      title="我的地址"
      left-arrow
      @click-left="$router.back()"
    />
    <div v-show="!address" class="address-tip">
      <div class="tac">
        <img src="@/assets/noAddress.png">
        <span>还没有地址呢，添加一个吧😊</span>
      </div>
    </div>
    <taskCommon
      :taskList="addressLists"
      :scroll="false"
      @handleRightDelete="handleRightDelete"
      @handleRightEdit="handleRightEdit"
    >
    </taskCommon>
    <!-- 增加新地址 -->
    <van-button type="primary" size="large" class="btn" round @click="$router.push({name: 'addAddRess'})">+ 添加新地址</van-button>
  </div>
</template>

<script>
// import showAddress from '@/components/address/show-address.vue'
import taskCommon from '@/views/task/components/task-common'
import { userAddress } from '@/api/user'
import { mapState, mapMutations } from 'vuex'
import { Dialog } from 'vant'
export default {
  name: 'addressEdit',
  components: {
    // showAddress,
    taskCommon
  },
  data () {
    return {
      addRessList: [],
      chosenAddressId: 1
    }
  },
  computed: {
    ...mapState(['address']),
    addressLists () {
      this.address.forEach((item, index) => {
        item['address'] = item['addressDetail']
        item['id'] = index
      })
      return this.address
    }
  },
  methods: {
    ...mapMutations(['setAddress']),
    async loadAddressInfo () {
      const { data } = await userAddress()
      this.addRessList = data.data
    },
    handleRightDelete (row, index) {
      Dialog.confirm({
        title: '提示',
        message: '确认删除吗'
      }).then(() => {
        this.address.splice(index, 1)
        this.setAddress(this.address)
        this.$toast.success('删除成功')
        /*
        bug残留
        说明：删除之后下一项按钮自动展开
        todos
        */
      }).catch(() => {
        // on cancel
      })
    },
    handleRightEdit (row, index) {
      this.$router.push({
        name: 'addAddRess',
        params: {
          id: index
        }
      })
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
  .btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    margin: 20px auto 30px auto;
  }
}
</style>
