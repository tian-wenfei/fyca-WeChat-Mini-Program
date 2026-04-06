Page({
  data: {
    coreTeam: [
      { 
        id: 1, 
        avatar: '👨‍💼', 
        name: '朱晨雨', 
        position: '项目负责人',
        desc: '多次带队深入茶乡调研，精准定位"发花工艺"为产业瓶颈，是项目社会价值的坚定守护者与推动者'
      },
      { 
        id: 2, 
        avatar: '�‍🔬', 
        name: '贾博涵', 
        position: '土木工程',
        desc: '负责商业计划制定与装置研发、结构优化工作，确保设备机械结构的稳定与高效'
      },
      { 
        id: 3, 
        avatar: '👩‍🎨', 
        name: '李青清', 
        position: '视觉传达设计',
        desc: '负责品牌视觉设计与包装策划，注重挖掘地方文化内涵，提升产品文化价值'
      },
      { 
        id: 4, 
        avatar: '👨‍💼', 
        name: '冯毅', 
        position: '工程造价',
        desc: '负责财务管理与成本控制。通过系统的成本核算与精细化管控'
      },
      { 
        id: 5, 
        avatar: '👨‍💻', 
        name: '田文飞', 
        position: '软件技术',
        desc: '负责项目整体协调与进度管理。注重工程管理服务'
      },
      { 
        id: 6, 
        avatar: '�‍�', 
        name: '李思翰', 
        position: '土木工程',
        desc: '负责项目设备结构设计与施工，确保设备安全、稳定运行'
      }
    ],
    departments: [
      { id: 1, icon: '🔬', name: '研发中心', count: 35 },
      { id: 2, icon: '🏭', name: '生产中心', count: 80 },
      { id: 3, icon: '📊', name: '营销中心', count: 45 },
      { id: 4, icon: '💻', name: '技术部', count: 25 },
      { id: 5, icon: '📋', name: '品质部', count: 20 },
      { id: 6, icon: '🤝', name: '公益部', count: 15 }
    ],
    advisors: [
      { 
        id: 1, 
        avatar: '👨‍🏫', 
        name: '刘教授', 
        title: '首席科学顾问',
        field: '茶叶生物化学研究'
      },
      { 
        id: 2, 
        avatar: '👩‍⚕️', 
        name: '赵博士', 
        title: '健康顾问',
        field: '茶叶保健功能研究'
      },
      { 
        id: 3, 
        avatar: '👨‍🎨', 
        name: '孙大师', 
        title: '工艺顾问',
        field: '传统制茶工艺传承'
      }
    ]
  },

  onLoad() {
    wx.setNavigationBarTitle({
      title: '项目团队'
    })
  },

  contactUs() {
    wx.navigateTo({
      url: '/pages/contact/contact'
    })
  }
})
