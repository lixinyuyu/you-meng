<template>
  <div id="app">
    <keep-alive>
      <router-view :key="$route.fullPath" v-if="$route.meta.isKeepAlive"></router-view>
    </keep-alive>
      <router-view :key="$route.fullPath" v-if="!$route.meta.isKeepAlive"></router-view>
  </div>
</template>

<style lang="less">
</style>
