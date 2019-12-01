<template>
  <div>
    <panel
    :title="title"
    :iconLeft="icon1"
    :color="color">
      <template v-slot="left">
      </template>
      <template slot="center"></template>
    </panel>
    <!-- 具体的任务 -->
    <div class="more-task">
      <div class="every-task" v-for="(item,index) in taskList" :key="index">
        <div class="icon">
          <van-icon :name="item.icon[index]" size="20px"/>
        </div>
        <div class="title">
          <div class="title-top title-style">
            <span class="self-mr-right">{{item.title[index]}}</span>
            <span style="color:orangered" class="fz12">+{{item.growUp}}成长值</span>
          </div>
          <div class="title-bottom title-style">
            <span class="fz12">完成&nbsp;<span style="color:orangered">{{item.computed}}</span>/{{item.Action}}</span>
          </div>
        </div>
        <div class="computed">
          <span>去完成</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import panel from '@/components/panel/panel.vue'
import { getTasks } from '@/api/task.js'
export default {
  components: {
    panel
  },
  data () {
    return {
      icon1: 'label-o',
      color: 'red',
      title: '每日任务',
      taskList: []
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
