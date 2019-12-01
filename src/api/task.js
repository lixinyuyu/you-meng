import axios from 'axios'

export const getTasks = () => {
  return axios({
    method: 'GET',
    url: 'http://localhost:3000/task/data'
  })
}

// 手机型号数据
export const getIphone = () => {
  return axios({
    method: 'GET',
    url: 'http://localhost:3000/phone/data'
  })
}
