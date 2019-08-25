import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home')
    },
    {
      path: '/first',
      name: 'first',
      component: () => import('@/views/login/index'),
      meta: {
        desc: '登陆或者注册页面'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue'),
      meta: {
        desc: '登陆页面'
      }
    }
  ]
})
