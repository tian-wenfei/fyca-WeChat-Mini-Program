Page({
  data: {
    timeline: [
      { year: '2021', title: '项目启动', desc: '团队开始调研传统茯茶发花工艺痛点' },
      { year: '2022', title: '技术研发', desc: '研发AI视觉识别系统和智能发花设备' },
      { year: '2023', title: '产品迭代', desc: '智能发花机1.0版本推出，开始试点应用' },
      { year: '2024', title: '技术升级', desc: '智能发花机2.0版本发布，结合5G物联网和红外光谱技术' },
      { year: '2025', title: '规模推广', desc: '在汉中市西乡镇推广应用，帮助农户增收' },
      { year: '2026', title: '持续创新', desc: '不断优化技术，扩大应用范围' }
    ],
    honors: [
      { id: 1, name: '中国茶叶行业十大品牌' },
      { id: 2, name: '陕西省高新技术企业' },
      { id: 3, name: '全国质量信得过产品' },
      { id: 4, name: '消费者最信赖品牌' },
      { id: 5, name: '非物质文化遗产传承单位' },
      { id: 6, name: '绿色食品认证' }
    ]
  },

  onLoad() {
    wx.setNavigationBarTitle({
      title: '项目简介'
    })
  }
})
