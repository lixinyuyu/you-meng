<template>
  <div>
    <van-action-sheet
      :value="value"
      :actions="actions"
      cancel-text="取消"
      @cancel="onCancel"
      @click-overlay="onCancel"
      @select="handleSelect"
    />
    <input type="file" ref="file" style="display: none" @change="handlePhotoChange">
  </div>
</template>

<script>
import { updateAvator } from '@/api/user.js'
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
  data () {
    return {
      actions: [
        {
          name: '拍照',
          color: 'orange',
          loading: false
        },
        {
          name: '从相册选择',
          loading: false
        }
      ],
      index: null
    }
  },
  created () {
  },
  methods: {
    onCancel () {
      this.$emit('input', false)
    },
    handleSelect (item, index) {
      this.index = index
      // 拍照
      // let This=this
      // var cmr = plus.camera.getCamera();//获取摄像头管理对象
      // var res = cmr.supportedImageResolutions[0];//字符串数组，摄像头支持的拍照分辨率
      // var fmt = cmr.supportedImageFormats[0];//字符串数组，摄像头支持的拍照文件格式
      // cmr.captureImage(function( path ){//进行拍照操作
      //   // 通过URL参数获取目录对象或文件对象
      //   plus.io.resolveLocalFileSystemURL(path, async function(entry) {
      //   const data = await editPhoto('photo', entry)
      //   alert('data', data)
      //   var tmpPath= entry.toLocalURL();//获取目录路径转换为本地路径URL地址
      //   This.imgSrc= tmpPath
      //   })
      // })
      this.$refs['file'].click()
    },
    async handlePhotoChange () {
      this.actions[this.index].loading = true
      const data = await updateAvator('photo', this.$refs['file'].files[0])
      this.userInfo.photo = data.photo
      this.$store.commit('serUserInfo', this.userInfo)
      this.$emit('input', false)
      this.actions[this.index].loading = false
    }
  }
}
</script>
<style scoped lang="less">
</style>
