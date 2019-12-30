import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home')
    }, {
      path: '/first',
      name: 'first',
      component: () => import('@/views/login/index'),
      meta: {
        desc: '登陆或者注册页面'
      }
    }, {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue'),
      meta: {
        desc: '登陆页面'
      }
    }, {
      path: '/search',
      name: 'search',
      component: () => import('@/views/search')
    }, {
      path: '/search/:q',
      name: 'searchContent',
      component: () => import('@/views/search/components/searchContent')
    }, {
      path: '/my',
      name: 'my',
      component: () => import('@/views/my')
    }, {
      path: '/userShow',
      name: 'userShow',
      component: () => import('@/components/user/user-show.vue')
    }, {
      path: '/task',
      name: 'task',
      component: () => import('@/views/task/index')
    }, {
      path: '/taskAll',
      name: 'Alltask',
      component: () => import('@/views/task/components/all-task.vue')
    }, {
      name: 'infoEdit',
      path: '/infoEdit',
      component: () => import('@/views/edit/index')
    }, {
      name: 'addressEdit',
      path: '/addressEdit',
      component: () => import('@/views/edit/components/address-edit.vue')
    }, {
      name: 'addAddRess',
      path: '/addAddRess',
      component: () => import('@/components/address/add-Address.vue')
    }
  ]
})
