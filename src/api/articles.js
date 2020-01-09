import request from '@/utils/request'

/* 获取评论/评论的回复
  type: a---获取评论 c---获取评论的回复 默认不传是a
*/
export const getComment = ({
  source,
  offset,
  limit = 10,
  isArticle = true
}) => {
  return request({
    method: 'GET',
    url: '/app/v1_0/comments',
    params: {
      type: isArticle ? 'a' : 'c',
      source, // 文章id或者评论id
      offset, // 相当于page
      limit // 相当于pagesize
    }
  })
}

// 用户文章列表
export const userArtList = (params) => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/histories',
    params
  })
}

// 文章列表详情
export const getDetailArt = ({
  articleId
}) => {
  console.log(articleId)
  return request({
    method: 'GET',
    url: `/app/v1_0/articles/${articleId}`
  })
}
