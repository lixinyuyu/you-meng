<template>
  <div class="comment fz12">
    <!--  评论页面 -->
    <div>
      <slot name="comments">
        <ul>
          <li v-for="(item, i) in partCommList" :key="i">
            <span>{{item.aut_name}}:</span>
            <span>{{item.content}}</span>
          </li>
        </ul>
      </slot>
      <slot name="showAll">
        <div
        v-if="commList.length > 2"
        class="showAll grey"
        >
        查看所有{{commList.length}}评论
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comment',
  components: {
  },
  props: {
    commList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
    }
  },
  computed: {
    partCommList () {
      console.log(this.commList.slice(0, 2))
      return this.commList.slice(0, 2)
    }
  },
  created () {
    // this.loadComment()
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.comment {
  padding-top: 10px;
  li {
    padding: 3px 0;
  }
  .showAll {
    margin-top: 10px;
  }
}
</style>
