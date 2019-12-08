<template>
  <div>
    <van-nav-bar
      title="个人信息"
      left-arrow
      @click-left="$router.back()"
    />
    <boxDiv>
      <panel @click-right="handleClickRight" textAlign="right">
        <template slot="left">头像</template>
        <template slot="center">
          <img :src="userInfo.photo" class="imgSmall">
        </template>
        <template slot="right">
          <van-icon name="arrow" color="#393131" class="rightIcon"/>
        </template>
      </panel>
      <panel @click-right="handleClickRight" textAlign="right">
        <template slot="left">昵称</template>
        <template slot="center">
          {{userInfo.name}}
        </template>
        <template slot="right">
          <van-icon name="arrow" color="#393131" class="rightIcon"/>
        </template>
      </panel>
      <panel @click-right="handleClickRight" textAlign="right">
        <template slot="left">手机号</template>
        <template slot="center">
          {{userInfo.mobile}}
        </template>
        <template slot="right">
          <van-icon name="arrow" color="#393131" class="rightIcon"/>
        </template>
      </panel>
    </boxDiv>
    <boxDiv>
      <panel @click-right="handleClickRight" textAlign="right">
        <template slot="left">性别</template>
        <template slot="center">
          <img :src="userInfo.photo" class="imgSmall">
        </template>
        <template slot="right">
          <van-icon name="arrow" color="#393131" class="rightIcon"/>
        </template>
      </panel>
      <panel @click-right="handleClickRight" textAlign="right">
        <template slot="left">签名</template>
        <template slot="center">
          <img :src="userInfo.photo" class="imgSmall">
        </template>
        <template slot="right">
          <van-icon name="arrow" color="#393131" class="rightIcon"/>
        </template>
      </panel>
    </boxDiv>
    <boxDiv>
      <panel @click-right="handleClickRight" textAlign="right">
        <template slot="left">地址管理</template>
        <template slot="center">
          <img :src="userInfo.photo" class="imgSmall">
        </template>
        <template slot="right">
          <van-icon name="arrow" color="#393131" class="rightIcon"/>
        </template>
      </panel>
    </boxDiv>
  </div>
</template>

<script>
import boxDiv from '@/components/boxDiv/boxDiv.vue'
import panel from '@/components/panel/panel.vue'
import { mapState } from 'vuex'
export default {
  name: 'infoEdit',
  components: {
    boxDiv,
    panel
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  created () {
  },
  methods: {
    handleClickRight () {
      console.log(1)
    }
  }
}
</script>

<style scoped lang="less">
.common-panel {
  position: relative;
  width: 90%;
  border-bottom: 1px solid #f4e6e6;
  font-size: 14px !important;
}
</style>
