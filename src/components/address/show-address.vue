<template>
  <div>
    <van-swipe-cell>
      <van-cell :border="false" :title="title" value="内容" />
      <div>
        hhhhh
      </div>
      <template slot="right">
        <van-button square type="danger" text="删除" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
export default {
  props: {
    title: {
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
</style>
