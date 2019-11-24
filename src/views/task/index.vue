<template>
  <div id="tasks">
    <div class="header">
      <div class="header-navbar">
        <van-icon name="arrow-left" color="#fff" class="icon1" @click="$router.back()"/>
        <h6 class="userGrade">用户等级</h6>
        <span class="GrowUp">成长明细</span>
      </div>
      <div class="header-content">
        <van-circle
          v-model="currentRate"
          :rate="30"
          :speed="100"
          :text="text"
          :stroke-width="10"
          color="#ff8917"
          size="70px"
          class="text"
        />
        <div class="line-grade">
          <div class="inline"></div>
          lv1
          <div class="inline"></div>
        </div>
        <span>距离升级还需要成长值: 430</span>
      </div>
    </div>
    <tasks-day />
  </div>
</template>
<script>
import tasksDay from './components/tasks-day'
export default {
  name: 'task',
  components: {
    tasksDay
  },
  data () {
    return {
      currentRate: 0
    }
  },
  computed: {
    text () {
      return this.currentRate.toFixed(0) + '%'
    }
  },
  methods: {
  },
  created () {
  }
}
</script>
<style lang="less">
#tasks {
  .header {
    background-color: #191616;
    color: #fff;
    padding: 0 15px 10px 15px;
    .header-navbar {
      display: flex;
      padding-top: 10px;
      .icon1 {
        flex: 1
      }
      .userGrade {
        flex: 1;
        font-size: 16px;
      }
      .GrowUp {
        font-size: 15px;
      }
    }
    .header-content {
      margin: 0 auto;
      margin-top: 20px;
      padding-bottom: 10px;
      text-align: center;
      .van-circle__text {
        font-size: 12px;
        color: #fff;
      }
      span {
        font-size: 12px;
      }
    }
    .line-grade {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 25%;
      font-size: 16px;
      font-weight: 200;
      margin-top: 8px;
      .inline {
        width: 40%;
        height: 1px;
        background-image: linear-gradient(to left, rgba(255,255,255,1), rgba(255,255,255,.1));
      }
    }
    .line-grade .inline:nth-child(2) {
      background-image: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,.1));
    }
  }
}

</style>
