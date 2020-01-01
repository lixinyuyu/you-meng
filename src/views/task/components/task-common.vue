<template>
  <div class="wrap">
    <!-- 具体的任务 -->
    <div :class="isScroll">
      <v-touch
        style="margin-bottom:10px"
        v-on:panstart="onPanStart(index)"
        v-on:panmove="onPanMove($event, index)"
        v-on:panend="onPanEnd($event, index)"
        class="every-task clearfix"
        v-for="(item,index) in taskList"
        :key="index"
        :style="activeId === index ? swipe : ''"
      >
        <div class="icon">
          <slot name="icon">
              <van-icon v-if="item.icon" :name="item.icon[index]" size="20px"/>
              <van-radio
              style="margin-top:20px"
              :name="item.id"
              icon-size="12"
              checked-color="#76e0e3"
              v-model="radio"
              @click="radioChange = radio = radioChange === radio ? !radio : radio"
              ></van-radio>
          </slot>
        </div>
        <div class="title">
          <div class="title-top title-style">
            <slot name="top">
              <span v-if="item.title" class="self-mr-right">{{item.title[index]}}</span>
              <span v-if="item.growUp" style="color:orangered" class="fz12">+{{item.growUp}}成长值</span>
              <span v-if="item.name" class="self-mr-right">{{item.name}}</span>
              <span v-if="item.tel" style="color:#aaa09b" class="fz12">{{item.tel}}</span>
              <van-tag v-if="item.isDefault || index === radioChange" type="danger" class="self-mr-left">默认</van-tag>
            </slot>
          </div>
          <div class="title-bottom title-style">
            <slot name="bottom">
              <span v-if="item.computed == 0" class="fz12">完成&nbsp;<span style="color:orangered">{{item.computed}}</span>/{{item.Action}}</span>
              <span v-if="item.addressDetail" class="fz12">{{item.addressDetail}}</span>
            </slot>
          </div>
        </div>
        <div class="computed">
          <slot name="right">
            <span v-if="item.computed == 0">去完成</span>
          </slot>
        </div>
        <div v-if="item.address && isMove=== index">
          <span :ref="'editBtn' + index">
            <span class="edit" @click="handleRightEdit(item, index)">
              <van-icon name="edit" v-if="item.address" size="20"/>
            </span>
            <span class="ad-delete" @click="handleRightDelete(item, index)">
              <van-icon name="delete" v-if="item.address" size="20"/>
            </span>
          </span>
        </div>
      </v-touch>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    taskList: {
      type: Array,
      default: () => []
    },
    scroll: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isScroll () {
      return this.scroll ? 'more-task' : 'no-task'
    }
  },
  data () {
    return {
      radio: null,
      radioChange: null,
      swipe: '', // 滑动的样式
      wd: 0, // 编辑和删除按钮的宽度之和
      swipeWd: 0, // 已经滑动的距离
      activeId: '',
      isMove: null
    }
  },
  methods: {
    onPanStart (id) {
      event.preventDefault()
      // 获取右侧按钮宽度
      // var str = 'editBtn' + id
      this.wd = 1.2 * 50
      // 初始化
      if (this.activeId !== id) {
        this.swipe = 'transform:translateX(0px)'
        this.swipeWd = 0
      }
      this.activeId = id
    },
    // 滑动位置
    onPanMove (event, id) {
      event.preventDefault()
      let deltaX = event.deltaX
      // 组件向左移动直到最大距离
      if (deltaX < 0 && deltaX > -this.wd) {
        // 向左滑动
        this.swipe = 'transform:translateX(' + deltaX + 'px)'
        this.swipeWd = deltaX
        this.isMove = id
      }

      if (deltaX > 0 && deltaX <= this.wd && this.swipeWd < 0) {
        // 向右滑动
        let wx = deltaX + this.swipeWd
        this.swipe = 'transform:translateX(' + wx + 'px)'
        this.isMove = id
      }
    },
    // 结束位置
    onPanEnd (event, id) {
      event.preventDefault()
      // 判断向左移动的距离是否大于二分之一
      let deltaX = event.deltaX
      if (deltaX < 0) {
        if (deltaX <= -this.wd / 3) {
          // 向左滑动超过二分之一
          this.swipe = 'transform:translateX(' + -this.wd + 'px)'
          this.swipeWd = -this.wd
          this.isMove = id
        } else {
          this.swipe = 'transform:translateX(0px)'
          this.swipeWd = 0
          this.isMove = null
        }
      } else {
        if (this.swipeWd < 0 && deltaX >= this.wd / 3) {
          // 向左滑动超过二分之一
          this.swipe = 'transform:translateX(0px)'
          this.swipeWd = 0
          this.isMove = null
        } else {
          this.isMove = null
          this.swipe = 'transform:translateX(' + this.swipeWd + 'px)'
        }
      }
    },
    handleRightDelete (row, index) {
      this.$emit('handleRightDelete', row, index)
    },
    handleRightEdit (row, index) {
      this.$emit('handleRightEdit', row, index)
    }
  },
  created () {
  }
}
</script>

<style lang="less">
  .wrap {
    width: 100%;
    height: 80%;
    overflow: auto;
  }
  .more-task {
    height: 350px;
    overflow: scroll;
    padding-top: 44px;
    border-top: 1px solid #f4f1f1;
    border-bottom: 1px solid #f4f1f1;
  }
  .no-task {
    .every-task {
      position: relative;
      width: 100%;
      display: flex;
      height: 70px;
      line-height: 70px;
      font-size: 14px;
      padding: 2px 0px 0 15px;
      // margin-left: 30px;
      border-bottom: 1px solid #f4f1f1;
      .icon {
        width: 15%;
      }
      .title {
        width: 55%;
      }
      .title-style {
        height: 30px;
        line-height:30px;
      }
      .computed {
        position: absolute;
        right: 50px;
        width: 20%;
        text-align: center;
        margin-left: -30px;
        span {
          color: orangered;
          padding: 4px 15px;
          border-radius: 10px;
          border: 1px solid orangered;
        }
      }
    }
.edit {
  margin-right: 9px
}
.edit-delete {
  // width: 160px;
  height: 100%;
  background: rgba(255, 126, 34, 1);
  opacity: 0.8;
  align-items: center;
}
.add-btn {
  // width: 200px;
  height: 80px;
  background: rgba(255, 126, 34, 1);
  box-shadow: 0px 0px 5px 0px rgba(221, 221, 236, 1);
  border-radius: 40px;
  text-align: center;
  line-height: 80px;
  color: #ffffff;
  font-size: 30px;
  position: fixed;
  bottom: 8%;
  left: 50%;
  transform: translateX(-50%);
}
  }
</style>
