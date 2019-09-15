<template>
  <div>
    <van-popup
      :value="value"
      @input="$emit('input', $event)"
      round
      position="left"
      :style="{ height:'100%',width:'80%' }"
    >
    <div class="popup-bg">
      <div class="popup">
        <div class="user-photo">
          <img :src="userInfo.photo" @click="isShow = true">
        </div>
        <div>
          <h5>{{userInfo.mobile}}</h5>
          <h6>{{userInfo.name}}</h6>
        </div>
      </div>
    </div>
    <div class="addSkin">
      <p>/(ㄒoㄒ)/~~</p>
      <p>我不想裸漏，请为我增添衣服</p>
    </div>
    </van-popup>
    <avator-dialog v-model="isShow" @update-success="userInfo.photo = $event"/>
  </div>
</template>

<script>
import avatorDialog from './avator-dialog'
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    userInfo: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    avatorDialog
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
  }
}
</script>
<style scoped lang="less">
.popup-bg {
  position: relative;
  width: 100%;
  height: 180px;
  background-image: url('../../../assets/bag1.jpg');
  background-size: cover;
  border-radius: 0 0 50% 12%;
  h5, h6 {
  color: #fff;
  font-weight: 400;
  }
  .popup {
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 180px;
    background: rgba(255, 255, 255, .3);
  }
}
.user-photo {
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 15px;
    margin-left: 15px;
  }
}
.addSkin {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  font-size: 13px;
  color: #a9a5a5;
  text-align: center;
}
</style>
