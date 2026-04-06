Page({
  data: {
    promises: [
      { id: 1, icon: '🌿', title: '原料保证', desc: '100%选用优质茶园原料，拒绝劣质茶叶' },
      { id: 2, icon: '⚙️', title: '工艺保证', desc: '传承古法工艺，28道工序严格把控' },
      { id: 3, icon: '🧪', title: '品质保证', desc: '通过ISO9001质量管理体系认证' },
      { id: 4, icon: '🛡️', title: '安全保证', desc: '无添加、无污染，绿色健康产品' }
    ],
    reviews: [
      { 
        id: 1, 
        avatar: '👨', 
        name: '张先生', 
        content: '茯忆长安的茯茶品质非常好，金花茂盛，口感醇厚，是送礼的佳品！' 
      },
      { 
        id: 2, 
        avatar: '👩', 
        name: '李女士', 
        content: '一直在喝他们家的茯茶，品质稳定，而且他们的公益项目很有意义，支持！' 
      },
      { 
        id: 3, 
        avatar: '👴', 
        name: '王老先生', 
        content: '作为老茶客，这家的茯茶确实地道，传统工艺制作，味道正宗。' 
      }
    ]
  },

  onLoad() {
    wx.setNavigationBarTitle({
      title: '核心价值'
    })
  }
})
