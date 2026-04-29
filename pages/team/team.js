Page({
  data: {
    coreTeam: [
      {
        id: 1,
        avatar: '/images/1.jpg',
        name: '朱晨雨',
        position: '项目负责人',
        desc: '多次带队深入茶乡调研，精准定位"发花工艺"为产业瓶颈，是项目社会价值的坚定守护者与推动者'
      },
      {
        id: 2,
        avatar: '/images/2.jpg',
        name: '贾博涵',
        position: '土木工程',
        desc: '负责商业计划制定与装置研发、结构优化工作，确保设备机械结构的稳定与高效'
      },
      {
        id: 3,
        avatar: '/images/3.jpg',
        name: '李青清',
        position: '视觉传达设计',
        desc: '负责品牌视觉设计与包装策划，注重挖掘地方文化内涵，提升产品文化价值'
      },
      {
        id: 4,
        avatar: '/images/4.jpg',
        name: '冯毅',
        position: '工程造价',
        desc: '负责财务管理与成本控制。通过系统的成本核算与精细化管控'
      },
      {
        id: 5,
        avatar: '/images/5.jpg',
        name: '田文飞',
        position: '软件技术',
        desc: '负责项目整体协调与进度管理。注重工程管理服务'
      },
      {
        id: 6,
        avatar: '/images/6.jpg',
        name: '李思翰',
        position: '土木工程',
        desc: '负责项目设备结构设计与施工，确保设备安全、稳定运行'
      }
    ],
    advisors: [
      {
        id: 1,
        avatar: '/subpackage/images/图片1.png',
        name: '李万华',
        title: '乡村产业顾问',
        field: '原安康市人社局副局长，现任汉阴县委组织部部长，提供乡村产业方面指导'
      },
      {
        id: 2,
        avatar: '/subpackage/images/图片2.png',
        name: '宁国良',
        title: '乡村振兴顾问',
        field: '原平利县委组织部部长，现任镇坪县常务副县长，有丰富的乡村振兴工作经验'
      },
      {
        id: 3,
        avatar: '/subpackage/images/图片3.png',
        name: '时春喜',
        title: '技术顾问',
        field: '植保技术推广中心主任，三秦果业网、富平县果农协会等企业技术顾问'
      }
    ]
  },

  onLoad() {
    wx.setNavigationBarTitle({
      title: '团队与联系'
    })
  },

  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: '15091730188',
      success: function() {
        console.log('拨打电话成功')
      },
      fail: function() {
        console.log('拨打电话失败')
      }
    })
  },

  copyEmail() {
    wx.setClipboardData({
      data: '948979226@qq.com',
      success: () => {
        wx.showToast({
          title: '邮箱已复制',
          icon: 'success'
        })
      }
    })
  },

  openWechat() {
    wx.showModal({
      title: '关注微信公众号',
      content: '请在微信中搜索"茯忆长安"关注我们的公众号',
      confirmText: '复制名称',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          wx.setClipboardData({
            data: '茯忆长安',
            success: () => {
              wx.showToast({
                title: '公众号名称已复制',
                icon: 'success'
              })
            }
          })
        }
      }
    })
  },

  openDouyin() {
    wx.showModal({
      title: '关注抖音账号',
      content: '请在抖音中搜索"茯忆长安"关注我们的账号',
      confirmText: '复制名称',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          wx.setClipboardData({
            data: '茯忆长安',
            success: () => {
              wx.showToast({
                title: '抖音名称已复制',
                icon: 'success'
              })
            }
          })
        }
      }
    })
  },

  openWebsite() {
    wx.setClipboardData({
      data: 'https://fuyichangan.netlify.app/',
      success: () => {
        wx.showToast({
          title: '官网链接已复制',
          icon: 'success'
        })
      }
    })
  },

  openWeibo() {
    wx.showModal({
      title: '关注微博账号',
      content: '请在微博中搜索"茯忆长安"关注我们的账号',
      confirmText: '复制名称',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          wx.setClipboardData({
            data: '茯忆长安',
            success: () => {
              wx.showToast({
                title: '微博名称已复制',
                icon: 'success'
              })
            }
          })
        }
      }
    })
  }
})