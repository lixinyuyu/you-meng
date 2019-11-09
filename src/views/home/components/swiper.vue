<template>
  <div class="swiper-wrap">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img :src="item.image">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: 'swiper',
  data () {
    return {
      images: [
        { image: require('@/assets/zjm.jpg') },
        { image: require('@/assets/zjm02.jpg') },
        { image: require('@/assets/zjm03.jpg') }
      ]
    }
  }
}
</script>
<style scoped lang="less">
.swiper-wrap {
  padding-top: 70px;
  height: 190px;
  img {
    width: 100%;
    height: 190px;
  }
}
</style>
