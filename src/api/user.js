import request from '@/utils/request'

// 登录
export const login = ({ mobile, code }) => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}

// 获取用户资料
export const user = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/profile'
  })
}

// 获取用户频道
export const userChannel = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  })
}
