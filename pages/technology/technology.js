Page({
  data: {
    technologies: [
      { id: 1, icon: '🧬', name: '金花培育技术', desc: '独家研发的金花菌培育技术，保证金花饱满、分布均匀' },
      { id: 2, icon: '🌡️', name: '智能发酵控制', desc: '采用物联网技术，精准控制温湿度，确保发酵品质稳定' },
      { id: 3, icon: '🤖', name: 'AI质检系统', desc: '人工智能视觉检测，自动识别茶叶品质等级' },
      { id: 4, icon: '🔒', name: '区块链溯源', desc: '区块链技术实现产品全生命周期可追溯' }
    ],
    processes: [
      { id: 1, step: '01', title: '原料精选', desc: '精选优质黑毛茶，严格把控原料品质' },
      { id: 2, step: '02', title: '渥堆发酵', desc: '传统工艺渥堆，促进茶叶内含物质转化' },
      { id: 3, step: '03', title: '压制成型', desc: '机械压制与手工结合，确保砖形规整' },
      { id: 4, step: '04', title: '发花干燥', desc: '控制温湿度，促进金花生长' },
      { id: 5, step: '05', title: '陈化储存', desc: '专业仓储环境，自然陈化提升品质' }
    ],
    series: [
      { 
        id: 1, 
        emoji: '🧱', 
        name: '经典茯砖系列', 
        desc: '传统茯砖茶，金花茂盛，口感醇厚',
        features: ['传统工艺', '金花饱满', '越陈越香']
      },
      { 
        id: 2, 
        emoji: '🎁', 
        name: '礼品定制系列', 
        desc: '精美礼盒包装，商务送礼首选',
        features: ['精美包装', '个性定制', '高端大气']
      },
      { 
        id: 3, 
        emoji: '☕', 
        name: '便捷冲泡系列', 
        desc: '创新袋泡设计，随时随地享受好茶',
        features: ['便携设计', '快速冲泡', '口感纯正']
      }
    ],
    patents: [
      { id: 1, number: 'ZL2018XXXXXX.1', name: '一种茯茶金花培育方法' },
      { id: 2, number: 'ZL2019XXXXXX.2', name: '智能发酵控制系统' },
      { id: 3, number: 'ZL2020XXXXXX.3', name: '茶叶品质AI检测方法' },
      { id: 4, number: 'ZL2021XXXXXX.4', name: '茯茶制作工艺优化方法' }
    ]
  },

  onLoad() {
    wx.setNavigationBarTitle({
      title: '产品技术'
    })
  }
})
