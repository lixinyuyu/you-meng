<template>
  <div>
    <van-dialog
      :value="value"
      show-cancel-button
      :showConfirmButton = "false"
      :showCancelButton = "false"
      :closeOnPopstate = "true"
      :overlay = "false"
    >
      <van-cell-group>
        <van-cell title="从相册选择" @click="$refs['file'].click()" />
        <input type="file"  id="fils" style="display: none" ref="file" @change="handleImgChange">
        <van-cell title="取消"  @click="$emit('input', false)"/>
      </van-cell-group>
    </van-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
import { ImagePreview } from 'vant'
import { updateAvator } from '@/api/user.js'
Vue.use(ImagePreview)
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      instance: null
    }
  },
  computed: {
    file () {
      return this.$refs['file']
    }
  },
  methods: {
    handleImgChange () {
      const reader = new FileReader()
      reader.readAsDataURL(this.file.files[0])
      reader.onload = () => {
        this.instance = ImagePreview({
          images: [
            reader.result
          ],
          onClose: this.handleConfirm
        })
      }
    },
    handleConfirm () {
      this.$dialog.confirm({
        message: '确认上传该图片为头像'
      }).then(() => {
        this.updateImage()
      }).catch(() => {
        // on cancel
        this.$emit('input', false)
      })
    },
    // 发送请求更新头像
    updateImage () {
      updateAvator('photo', this.file.files[0]).then(data => {
        // 1.提示用户
        this.$toast('头像上传成功')
        // 2.关闭图片预览背景
        this.instance.close()
        // 3.关闭弹出框
        this.$emit('input', false)
        // 4.更换头像
        this.$emit('update-success', data.photo)
      })
    }
  }
}
</script>
