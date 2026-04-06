Page({
  data: {

  },

  onLoad() {
    wx.setNavigationBarTitle({
      title: '联系我们'
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