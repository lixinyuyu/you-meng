import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './stores'
import vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
import '@/style/style.css'
import svgIcon from 'vue2-svg-icon/Icon'

Vue.config.productionTip = false

Vue.use(vant)
Vue.component('svg-Icon', svgIcon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
