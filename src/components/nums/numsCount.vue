<template>
  <div>
    <div class="nums-wrapper">
      <!-- <div>{{ count }}</div> -->
      <countTo :startVal='0' :endVal='count' :duration='3000'></countTo>
      <div class="self-mr-top">{{ text }}</div>
    </div>
  </div>
</template>
<script>
import countTo from 'vue-count-to'
export default {
  name: 'numsCount',
  components: { countTo },
  props: {
    count: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: null
    }
  },
  data () {
    return {
    }
  },
  watch: {
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.nums-wrapper {
  text-align: center;
  font-size: 14px;
}
</style>
