/*
1.创建文件夹 utils-request.js
2.引入axios
3.配置基础请求路径
4.设置请求拦截器
5.设置响应拦截器
6.导出
*/
import axios from 'axios'
import store from '@/stores'
import router from '@/router/router'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})
// 1.设置请求拦截器
// 2.设置相应拦截器
request.interceptors.request.use(function (config) {
  // 每次请求的时候需要token认证，并且请求的页面的时候需要进行用户有没有登录的验证
  const { user } = store.state
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
request.interceptors.response.use(function (response) {
  return response.data.data || response.data
}, async error => {
/*
1.这是响应拦截器，出现在这里的话是响应的时候报错
2.判断这里如果报错是401，那么就去判断此时用户有没有登录，也就是有没有token，如果没有，说明
  用户没有登录，那么就路由去登录页面吧，然后return。
  如果登陆了，证明此时只是token失效了，需要用refresh-token来去取token，那么就发送获取token的请求，然后就得到token，然后再将
  信息保存到store中
*/
  const { user } = store.state
  console.log('error', error)
  if (error.response.status === 401) {
    if (!user) {
      router.push({
        name: 'login'
      })
      return
    }
    try {
      const { data } = await axios({
        method: 'PUT',
        url: 'http://ttapi.research.itcast.cn/app/v1_0/authorizations',
        headers: {
          Authorization: `Bearer ${user.refresh_token}`
        }
      })
      console.log('data', data)
      store.commit('setUser', {
        token: data.data.token,
        refresh_token: user.refresh_token
      })
      return request(error.config)
    } catch {
      router.push({
        name: 'login'
      })
    }
  }
  return Promise.reject(error)
})
export default request
