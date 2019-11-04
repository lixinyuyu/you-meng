<template>
  <div>
    <div class="content" @click="$router.push({name: 'task'})">
      <van-icon name="umbrella-circle" class="icon1"/>
      <span>做任务 升等级</span>
      <van-icon name="arrow" color="#ccc" class="icon2"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'infoTasks',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  created () {
  }
}
</script>
<style lang="less" scoped>
.content {
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  margin-top: 15px;
  padding: 0 10px;
  box-shadow: 1px 1px 7px #e0d7d7;
  .icon1 {
    flex: 1;
    font-size: 22px;
  }
  span {
    flex: 7
  }

}
</style>
