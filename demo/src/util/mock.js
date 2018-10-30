import uuidv1 from 'uuid/v1';
export const homeList = [
  {
    id: uuidv1(),
    type: 'Study',
    list: [
      {
        id: uuidv1(),
        url: 'https://cn.vuejs.org',
        name: 'Vue.js'
      },{
        id: uuidv1(),
        url: 'https://react.docschina.org',
        name: 'React.js'
      },{
        id: uuidv1(),
        url: 'https://www.angular.cn',
        name: 'Angular.js'
      },{
        id: uuidv1(),
        url: 'https://cnodejs.org',
        name: 'Node社区'
      },{
        id: uuidv1(),
        url: 'http://react-china.org',
        name: 'React社区'
      },{
        id: uuidv1(),
        url: 'https://juejin.im',
        name: '掘金'
      },{
        id: uuidv1(),
        url: 'https://github.com/',
        name: 'GitHub'
      },{
        id: uuidv1(),
        url: 'https://mp.weixin.qq.com',
        name: '微信公众平台'
      },{
        id: uuidv1(),
        url: 'https://www.jianshu.com',
        name: '简书'
      },{
        id: uuidv1(),
        url: 'https://www.zhihu.com',
        name: '知乎'
      },{
        id: uuidv1(),
        url: 'https://zhu8191553.github.io',
        name: '我的博客'
      },{
        id: uuidv1(),
        url: 'https://fanyi.baidu.com',
        name: '百度翻译'
      }
    ]
  },
  {
    id: uuidv1(),
    type: 'Amusement',
    list: [
      {
        id: uuidv1(),
        url: 'https://www.bilibili.com',
        name: 'bilibili'
      },{
        id: uuidv1(),
        url: 'https://weibo.com/',
        name: '微博'
      }
    ]
  }
]