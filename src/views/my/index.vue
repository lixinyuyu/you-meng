<template>
  <div>
    my
    <!-- 原理：1.就是给a链接加download属性-下载的文件名称
    2. 添加href属性-下载的地址
    3. 触发click的点击事件
    4. 如果后台返回给我们的是二进制流数据，
    我们就要在发送的时候加上{responseType:'blob'}这行代码，这样返回给我们的就不是乱码了。
     -->
    <a href="http://localhost:8080/#/my" download="my">下载吧</a>
    <van-button plain type="info" @click="handleDownload">下载按钮</van-button>
    <layout />
  </div>
</template>
<script>
import layout from './components/layout'
export default {
  name: 'my',
  components: {
    layout
  },
  data () {
    return {
    }
  },
  methods: {
    handleDownload (e) {
      // document.body.innerHTML 可以是以后后台返回的数据
      this.downLoad(document.body.innerHTML, 'test2.html')
    },
    downLoad (content, filename) {
      // 创建隐藏的可下载链接
      var eleLink = document.createElement('a')
      eleLink.download = filename
      eleLink.style.display = 'none'
      // 字符内容转变成blob地址
      var blob = new Blob([content])
      eleLink.href = URL.createObjectURL(blob)
      // 触发点击
      document.body.appendChild(eleLink)
      eleLink.click()
      // 然后移除
      document.body.removeChild(eleLink)
    }
  },
  created () {
  }
}
</script>
<style lang="less" scoped>

</style>
