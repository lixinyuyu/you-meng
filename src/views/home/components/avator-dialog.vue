<template>
  <div>
    <van-dialog
      :value="value"
      show-cancel-button
      :showConfirmButton = "false"
      :showCancelButton = "false"
      :overlay = "false"
    >
      <van-cell-group>
        <van-cell title="从相册选择" @click="$refs['file'].click()" />
        <input type="file"  id="fils" style="display: none" ref="file">
        <van-cell title="单元格"  />
        <van-cell title="取消"  @click="$emit('input', false)"/>
      </van-cell-group>
    </van-dialog>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  }
}
</script>
