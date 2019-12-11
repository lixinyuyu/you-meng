<template>
  <div>
    <van-nav-bar
      title="个人信息"
      left-arrow
      @click-left="$router.back()"
    />
    <boxDiv>
      <panel  textAlign="right" @click-right="handleClickRight">
        <template slot="left">头像</template>
        <template slot="center">
          <img :src="userInfo.photo" class="imgSmall">
        </template>
        <template slot="right">
          <van-icon name="arrow" color="#393131" class="rightIcon"/>
        </template>
      </panel>
      <panel  textAlign="right" @click-right="handleEditName('userInfo','name')">
        <template slot="left">昵称</template>
        <template slot="center">
          {{userInfo.name}}
        </template>
        <template slot="right">
          <van-icon name="arrow" color="#393131" class="rightIcon"/>
        </template>
      </panel>
      <panel  textAlign="right">
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
      <panel  textAlign="right">
        <template slot="left">性别</template>
        <template slot="center">
          <img :src="userInfo.photo" class="imgSmall">
        </template>
        <template slot="right">
          <van-icon name="arrow" color="#393131" class="rightIcon"/>
        </template>
      </panel>
      <panel  textAlign="right" @click-right="handleEditName('moreInfoList','intro')">
        <template slot="left">签名</template>
        <template slot="center">
          {{moreInfoList.intro}}
        </template>
        <template slot="right">
          <van-icon name="arrow" color="#393131" class="rightIcon"/>
        </template>
      </panel>
    </boxDiv>
    <boxDiv>
      <panel  textAlign="right">
        <template slot="left">地址管理</template>
        <template slot="center">
          <img :src="userInfo.photo" class="imgSmall">
        </template>
        <template slot="right">
          <van-icon name="arrow" color="#393131" class="rightIcon"/>
        </template>
      </panel>
    </boxDiv>
    <!-- 上传图片弹出 -->
    <uploadEditPic v-model="isEditShow" :userInfo="userInfo" />
    <ymDialog
    :title="title"
    :isShow.sync="isShow"
    v-model="tempObj"
    @submit="submitEdit"
    />
  </div>
</template>

<script>
import boxDiv from '@/components/boxDiv/boxDiv.vue'
import panel from '@/components/panel/panel.vue'
import uploadEditPic from './components/uploadEdit-pic'
import ymDialog from '@/components/dialog/dialog.vue'
import { mapState, mapMutations } from 'vuex'
import { editUser, getMoreUser } from '@/api/user'
export default {
  name: 'infoEdit',
  components: {
    boxDiv,
    panel,
    uploadEditPic,
    ymDialog
  },
  data () {
    return {
      isEditShow: false,
      isShow: false,
      title: '',
      moreInfoList: {},
      tempObj: {}
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  created () {
    this.getMoreinfo()
  },
  methods: {
    handleClickRight () {
      this.isEditShow = true
    },
    // 编辑昵称
    handleEditName (info, val) {
      this.title = val
      this.tempObj = {}
      this.tempObj = this[info]
      this.isShow = true
    },
    ...mapMutations(['serUserInfo']),
    async submitEdit (v) {
      var params = {}
      params[this.title] = v
      const data = await editUser(params)
      this.tempObj[this.title] = data[this.title]
      this.serUserInfo(this.userInfo)
    },
    async getMoreinfo () {
      const data = await getMoreUser(this.userInfo.id)
      this.moreInfoList = data
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
