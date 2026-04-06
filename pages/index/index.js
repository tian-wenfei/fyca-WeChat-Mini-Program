Page({
  data: {
    products: [
      { id: 1, name: '长安茯砖', desc: '传统茯砖茶', emoji: '🧱' },
      { id: 2, name: '金花普洱', desc: '金花普洱茶', emoji: '🍵' },
      { id: 3, name: '茯茶礼盒', desc: '精美礼盒装', emoji: '🎁' },
      { id: 4, name: '陈年茯茶', desc: '十年陈酿', emoji: '🏺' }
    ]
  },

  onLoad() {
    console.log('首页加载')
  },

  goToPage(e) {
    const page = e.currentTarget.dataset.page
    // 检查是否是tabBar页面
    const tabBarPages = ['/pages/index/index', '/pages/about/about', '/pages/technology/technology', '/pages/value/value', '/pages/team/team']
    if (tabBarPages.includes(page)) {
      wx.switchTab({
        url: page
      })
    } else {
      wx.navigateTo({
        url: page
      })
    }
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
  }
})
