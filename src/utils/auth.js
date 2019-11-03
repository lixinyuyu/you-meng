/*
目的：方便操作本地存储中的user信息
步骤：1.写一个常量用作user的key信息，也就是定义一个常量变量名
      2. 导出一个自定义函数，作为得到user
      3. 导出一个自定义函数，作为设置user
      4. 导出一个自定义函数，作为删除user
注意：得到user的时候，需要return 并且将内容JSON.stringify()
      设置user的时候，需要JSON.parse()
*/

// const USER_KEY = 'user'
export const getUser = (userKey) => {
  return JSON.parse(window.localStorage.getItem(userKey))
}
export const saveUser = (userKey, data) => {
  return window.localStorage.setItem(userKey, JSON.stringify(data))
}
export const removeUser = (userKey) => {
  return window.localStorage.removeItem(userKey)
}
