const resumeIndex = {
  name: 'Vagabond',
  title: 'ZLH',
  blog: 'https://zhu8191553.github.io/',
  github: 'https://github.com/zhu8191553',
  jianshu: 'https://www.jianshu.com/u/269467cd0813'
}

const resumeIntro = {
  title: '个人简介',
  description: '前端开发工程师，ZZQZ~',
  university: '大连东软信息学院',
  birthday: '1996.11',
  phone: '18045443563',
  location: '中国·大连',
  skills: ['JavaScript、', 'vue、', 'react、', 'Webpack。']
}

const resumeExperience = {
  title: '工作经历',
  items: [{
      name: '悦视光合科技',
      time: '17.6 - 17.8',
      position: '前端实习生',
      description: '在职期间负责hr管理系统的开发与维护；熟悉了前端开发的基本流程，提升了自身前端开发相关的技能。'
    },
    {
      name: '爱迪科森',
      time: '18.2 - 18.5',
      position: '前端实习生',
      description: '在职期间负责绘声绘色课堂、网上报告厅活动的开发。'
    },
    {
      name: '大微互联网科技',
      time: '18.6 - 至今',
      position: '前端开发',
      description: '在职期间负责蚂蚁必达控制台、蚂蚁必达小程序的开发与维护；在职期间通过学习校内无法学到的但是实际项目需要的用到的技能，快速成长为一名合格的前端工程师。自己的能力也得到同事及上司的认可。'
    }
  ]
}

const resumeProject = {
  title: '项目经历',
  items: [{
      name: '蚂蚁必达控制台',
      time: '18.7 - 18.9',
      skill: 'Vue.js & Element UI & Vuex',
      description: '给在大微下单的用户提供订单的展示查询、修改用户信息、数据授权等功能，方便用户管理业务。',
      url: 'https://console.mayibida.com'
    },
    {
      name: '蚂蚁必达小程序',
      time: '18.9 - 18.10',
      skill: '',
      description: '把蚂蚁必达平台上的部分功能移植到小程序上,解决了pc的限制，随时随地可以查看业务。',
      url: false
    }
  ]
}

const resumeSkill = [
  { name: 'Vue', sorce: 82 },
  { name: 'HTML', sorce: 85 },
  { name: 'css', sorce: 82 },
  { name: 'JavaScript', sorce: 82 },
  { name: 'React', sorce: 70 }
]

module.exports = {
  resumeIndex,
  resumeIntro,
  resumeExperience,
  resumeProject,
  resumeSkill
}