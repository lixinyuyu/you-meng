<template>
  <div class="boxDivWraper">
    <div class="boxDivInner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'boxDiv',
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.boxDivWraper {
  padding: 15px;
  .boxDivInner {
    box-shadow: 1px 1px 7px #e0d7d7;
    border-radius: 5px;
  }
}
</style>
