<template>
  <div class="common-panel">
    <div class="left">
      <slot name="left">
        <!-- <van-icon :name="iconLeft" :color="color"/> -->
      </slot>
    </div>
    <div class="center" :style="{'text-align': textAlign}">
      <slot name="center">{{title}}</slot>
    </div>
    <div class="right" @click="handleClick" :style="{'text-align': textAlign}">
      <slot name="right">
        <van-icon :name="iconRight" />
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    iconRight: {
      type: String,
      default: ''
    },
    textAlign: {
      type: String,
      default: 'left'
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    handleClick () {
      this.$emit('click-right')
    }
  }
}
</script>

<style scoped lang="less">
.common-panel {
  position: fixed;
  display: flex;
  width: 100%;
  line-height: 44px;
  background-color: #fff;
  font-size: 16px;
  padding: 0 15px;
  z-index: 999;
  .left {
    width: 20%;
    margin-top: 1px;
  }
  .center {
    width: 70%;
    font-weight: 500;
  }
  .right {
    width: 12%;
  }
}
</style>
