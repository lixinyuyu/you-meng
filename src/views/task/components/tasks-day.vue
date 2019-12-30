<template>
  <div>
    <panel
    :title="title" textAlign="left">
      <template slot="left">
        <van-icon name="send-gift-o" color="red"/>
      </template>
      <template slot="center"></template>
    </panel>
    <taskCommon :taskList="taskList"/>
    <!-- 获取更多任务 -->
    <panel  @click.native="$router.push({name: 'Alltask'})">
      <div slot="center">
        <span class="orangered fz14">今日还可获取更多成长值&nbsp;<van-icon name="play-circle" style="top: 3px"/></span>
      </div>
    </panel>
  </div>
</template>
<script>
import { getTasks } from '@/api/task.js'
import panel from '@/components/panel/panel.vue'
import taskCommon from './task-common'
export default {
  name: 'tasksDay',
  components: {
    panel,
    taskCommon
  },
  data () {
    return {
      flag: false,
      taskList: [],
      icon1: 'label-o',
      color: 'red',
      title: '每日任务'
    }
  },
  methods: {
    loadTasks () {
      getTasks().then(res => {
        this.taskList = res.data.data
      })
    }
  },
  created () {
    this.loadTasks()
  }
}
</script>
<style lang="less">
.more-task {
  height: 350px;
  overflow: scroll;
  padding-top: 44px;
  border-top: 1px solid #f4f1f1;
  border-bottom: 1px solid #f4f1f1;
  .every-task {
    display: flex;
    height: 70px;
    line-height: 70px;
    font-size: 14px;
    padding: 2px 15px 0 15px;
    border-bottom: 1px solid #f4f1f1;
    .icon {
      flex: 1;
    }
    .title {
      flex: 6;
    }
    .title-style {
      height: 30px;
      line-height:30px;
    }
    .computed {
      span {
        color: orangered;
        padding: 4px 15px;
        border-radius: 10px;
        border: 1px solid orangered;
      }
    }
  }
}
</style>
