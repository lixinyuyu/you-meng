import axios from 'axios'

export const getTasks = () => {
  return axios({
    method: 'GET',
    url: 'http://localhost:3000/task/data'
  })
}
