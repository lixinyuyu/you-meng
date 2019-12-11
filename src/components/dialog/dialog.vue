<template>
  <div>
    <transition name="drop">
      <div class="dialog-wrapper" v-if="isShow">
        <div class="dialog-inner">
          <div class="top">
            <van-icon name="cross" class="icon" size="24px" @click="close"/>
            <span>更改{{title | setTitle}}</span>
            <van-icon name="success" class="icon" size="26px" color="orange" @click="submit"/>
          </div>
          <div class="center">
            <textarea type="text" v-model="content"></textarea>
          </div>
          <div class="bottom">
            <span style="color:rgb(136, 130, 130)">普通用户一个月修改一次{{title}}，请谨慎提交</span>
            <span class="fr">{{content.length}}/{{allowLength}}</span>
          </div>
        </div>
      </div>
  </transition>

  </div>
</template>

<script>
export default {
  filters: {
    setTitle (v) {
      var titleObj = {
        name: '昵称',
        intro: '签名'
      }
      return titleObj[v]
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    },
    value: {
      type: Object
    }
  },
  data () {
    return {
      allowLength: 15,
      content: null
    }
  },
  watch: {
    content (v) {
      if (!v) return
      if (v.length >= this.allowLength) {
        this.content = v.slice(0, this.allowLength)
      }
    },
    value: {
      handler (v) {
        this.content = v[this.title]
      },
      immediate: true
    }
  },
  methods: {
    close () {
      this.$emit('update:isShow', false)
    },
    submit () {
      this.$emit('update:isShow', false)
      console.log(this.content)
      this.$emit('submit', this.content)
    }
  }
}
</script>

<style scoped lang="less">
.dialog-wrapper {
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  font-size: 16px;
  background-color: rgba(0, 0, 0, .5);
  .dialog-inner {
    width: 92%;
    margin: 0 auto;
    border-radius: 5px;
    z-index: 99999;
    background-color: #fff;
    .top {
      display: flex;
      justify-content: space-between;
      height: 43px;
      line-height: 43px;
      padding: 0 10px;
      border-bottom: 1px solid #d7c3c3;
      .icon {
        top: 10px;
      }
    }
    .center, .bottom {
      padding: 10px;
    }
    .center {
      height: 68px;
      font-size: 14px;
      textarea {
        outline: 0;
        border: none;
        width: 100%;
        height: 100%;
      }
    }
    .bottom {
      font-size: 12px;
    }
  }
}
.drop-enter-active {
  opacity: 1;
 transition: all .3s ease-in-out;
 }
 .drop-leave-active {
   opacity: 1;
 transition: all .3s ease-in-out;
 }
 .drop-enter {
  opacity: 0;
 }
 .drop-leave-active {
  opacity: 0;
 }
</style>
