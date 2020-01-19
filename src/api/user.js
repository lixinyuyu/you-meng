import request from '@/utils/request'
import axios from 'axios'

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

// 用户上传头像
export const updateAvator = (name, file) => {
  const formData = new FormData()
  formData.append(name, file)
  return request({
    method: 'PATCH',
    url: '/app/v1_0/user/photo',
    data: formData
  })
}

// 获取用户的关注
export const userGet = (target) => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/followings',
    data: {
      target
    }
  })
}

// 获取用户的粉丝列表
export const userFans = (target) => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/followers',
    data: {
      target
    }
  })
}

// 获取用户统计数据
export const userData = (target) => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/figure',
    data: {
      target
    }
  })
}

// 获取用户信息
export const getMoreUser = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user'
  })
}

// 编辑用户资料
export const editUser = (target) => {
  return request({
    method: 'PATCH',
    url: '/app/v1_0/user/profile',
    data: target
  })
}

// 用户地址
export const userAddress = () => {
  return axios({
    method: 'GET',
    url: 'http://localhost:3000/user/address'
  })
}

// 取消关注用户
export const cancelUserAttribute = (target) => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/user/followings/${target}`
  })
}

// 关注用户
export const AttributeUser = target => {
  return request({
    method: 'POST',
    url: '/app/v1_0/user/followings',
    data: target
  })
}
