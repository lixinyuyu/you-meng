<template>
  <div>
    <van-image-preview
      v-model="isShow"
      :images="images"
      @close = "handleClose"
    >
      <template v-slot:cover>{{ cover }}</template>
    </van-image-preview>
  </div>
</template>
<script>
export default {
  name: 'userPreview',
  props: {
    isImagPreview: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      images: [this.$store.state.userInfo.photo],
      isShow: this.isImagPreview,
      cover: '呵呵呵'
    }
  },
  watch: {
    isImagPreview () {
      this.isShow = this.isImagPreview
    }
  },
  computed: {
  },
  methods: {
    handleClose () {
      this.$emit('close', false)
    },
    handleDown () {
    }
  }
}
</script>
<style lang="less" scoped>
</style>
