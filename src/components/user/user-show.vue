<template>
  <div>
    <div class="backg-pic">
      <van-icon name="arrow-left"
      color="#fff"
      style="margin-top:15px"
      @click="$router.back()"
      />
      <span>{{userName}}</span>
      <div class="avator">
        <img :src="userinfos && userinfos.photo" @click="isImagPreview = true">
      </div>
    </div>
    <div class="no-infoTip"
      @mousedown="handleDown($event)"
      @touchstart="handleDown($event)"
      @mousemove="handleMove($event)"
      @touchmove="handleMove($event)">
      <div id="content-wrapper">
        <div>
          <span>/(ㄒoㄒ)/~~</span>
          <span>天啦噜！什么都没有</span>
        </div>
      </div>
    </div>
    <userPreview :isImagPreview ="isImagPreview" @close="isImagPreview = $event"/>
  </div>
</template>
<script>
import userPreview from './user-preview'
export default {
  name: 'userShow',
  components: {
    userPreview
  },
  data () {
    return {
      userName: 'lxxy',
      cx: '',
      cy: '',
      ot: '',
      isImagPreview: false
    }
  },
  computed: {
    userinfos () {
      return this.$store.state.userInfo
    },
    top () {
      return document.querySelector('.no-infoTip').style.top
    }
  },
  methods: {
    handleDown (event) {
      var touch
      touch = event.touches ? event.touches[0] : event
      this.cx = touch.clientX
      this.cy = touch.clientY
      this.ot = document.querySelector('.no-infoTip').offsetTop
    },
    handleMove (event) {
      var touch
      touch = event.touches ? event.touches[0] : event
      // var height = document.querySelector('.no-infoTip').style.height
      var H
      // if(parseInt(document.querySelector('.no-infoTip').style.top) >= 200) {
      // H = 200
      // } else {
      H = touch.clientY - this.cy
      // }
      // console.log(document.querySelector('.no-infoTip').style.top)
      document.querySelector('.no-infoTip').style.top = H + this.ot + 'px'
    }
  },
  created () {
  }
}
</script>
<style lang="less" scoped>
.backg-pic {
  position: relative;
  width: 100%;
  height: 200px;
  background: url('../../assets/1901.jpg') no-repeat 0px;
  span {
    position: absolute;
    left: 25px;
    bottom: 20px;
    font-family: 'monospace';
    font-size: 30px;
    color: #fff;
  }
  img {
    width: 75px;
    height: 75px;
    border: 3px solid #fff;
    border-radius: 50%;
    position: absolute;
    bottom:0px;
    right:20px;
  }
}
.no-infoTip {
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 470px;
  border-radius: 10px;
  background-color: #fff;
  top: 200px;
  left: 0;
  #content-wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #433b3b;
  font-size: 12px;
  div {
    width: 35%;
    text-align: center;
    span {
      display: block;
      }
    }
  }
}

</style>
