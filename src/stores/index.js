import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/utils/auth.js'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: auth.getUser('user'),
    userInfo: auth.getUser('user_info'),
    address: auth.getUser('address')
  },
  mutations: {
    setUser (state, data) {
      /*
      这个方法里面要做的两件事情：
      1. 将这个文件中的state，将data传入
      2. 将state.user作为数据传到auth.saveUser(state.user)中
      */
      state.user = data
      auth.saveUser('user', state.user)
    },
    serUserInfo (state, data) {
      state.userInfo = data
      auth.saveUser('user_info', state.userInfo)
    },
    setAddress (state, data) {
      console.log(data)
      state.address = data
      auth.saveUser('address', state.address)
    }
  }
})
