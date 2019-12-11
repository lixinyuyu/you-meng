<template>
  <div>
      <selfDialog :title="title"
        :isShow.sync="isShow"
        v-model="userInfo.name"
        @submit="submitEdit"
        />
  </div>
</template>

<script>
import selfDialog from '@/components/dialog/dialog.vue'
import { editUser } from '@/api/user'
import { mapMutations } from 'vuex'
export default {
  name: 'editName',
  props: {
    isEditNameshow: {
      type: Boolean,
      default: false
    },
    userInfo: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: '昵称'
    }
  },
  components: {
    selfDialog
  },
  data () {
    return {
      isShow: this.isEditNameshow
    }
  },
  watch: {
    isEditNameshow (v) {
      this.isShow = v
    },
    isShow (v) {
      this.$emit('update:isEditNameshow', v)
    }
  },
  created () {
  },
  methods: {
    ...mapMutations(['serUserInfo']),
    async submitEdit (v) {
      const data = await editUser({ name: v })
      this.userInfo.name = data.name
      this.serUserInfo(this.userInfo)
    }
  }
}
</script>

<style scoped lang="less">
</style>
