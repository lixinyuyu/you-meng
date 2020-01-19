import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './stores'
import vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
import '@/style/style.css'
import svgIcon from 'vue2-svg-icon/Icon'
import ElementUI from 'element-ui'
import _ from 'lodash'
import VueTouch from 'vue-touch'
import moment from 'moment'

Vue.config.productionTip = false

Vue.use(vant)
Vue.use(ElementUI)
Vue.use(VueTouch, {
  name: 'v-touch'
})
moment.locale('zh-cn')
Vue.component('svg-Icon', svgIcon)
window._ = _

// 注册全局过滤器--日期格式化
Vue.filter('dateformat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
