<template>
  <div class="common-panel">
    <div class="left">
      <slot name="left">
        <van-icon :name="iconLeft" :color="color"/>
      </slot>
    </div>
    <div class="center">
      <slot name="center">{{title}}</slot>
    </div>
    <div class="right">
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
    iconLeft: {
      type: String,
      default: ''
    },
    iconRight: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
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
    width: 10%;
    margin-top: 1px;
  }
  .center {
    width: 60%;
    font-weight: 500;
  }
}
</style>
