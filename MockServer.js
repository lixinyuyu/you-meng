let express = require('express') // 引入express
let Mock = require('mockjs') // 引入mock

let app = express() // 实例化express

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use('/task/data', function (req, res) {
  res.json(Mock.mock({
    'status': 200,
    'data|7': [{
      'title': ['关注', 'XBD发单', '发布内容', '邀请好友', '走心评论', '点赞', '校园签到'],
      'growUp|1': '@integer(1,10)',
      'Action|1': '@integer(1,5)',
      'computed': 0,
      'icon': ['like-o', 'peer-pay', 'records', 'share', 'more-o', 'thumb-circle-o', 'sign']
    }]
  }))
})

// 手机型号数据
app.use('/phone/data', (req, res) => {
  res.json(Mock.mock({
    'data': [
      {
        'color': '红色',
        'price': '@integer(5000,6000)',
        'name': 'iphone11'
      }, {
        'color': '蓝色',
        'price': '@integer(5000,6000)',
        'name': 'iphone12'
      }, {
        'color': '绿色',
        'price': '@integer(5000,6000)',
        'name': 'iphone13'
      }
    ]
  }))
})

// 用户地址
app.use('/user/address', (req, res) => {
  res.json(Mock.mock({
    'data': []
  }))
})

app.listen('3000', () => {
  console.log('监听端口 3000')
})
