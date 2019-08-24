/*
1.创建文件夹 utils-request.js
2.引入axios
3.配置基础请求路径
4.设置请求拦截器
5.设置响应拦截器
6.导出
*/
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})
// 1.设置请求拦截器
// 2.设置相应拦截器
request.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})
request.interceptors.response.use(function (response) {
  return response.data.data || response.data
}, function (error) {
  return Promise.reject(error)
})
export default request
