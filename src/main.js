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

Vue.config.productionTip = false

Vue.use(vant)
Vue.use(ElementUI)
Vue.component('svg-Icon', svgIcon)
window._ = _
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
