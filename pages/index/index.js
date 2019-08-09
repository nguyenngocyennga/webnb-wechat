//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  onLoad: function () {

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goToApartment: function () {
    wx.navigateTo({
      url: '/pages/show/show',
    })
  },
  goToArrival: function () {
    wx.navigateTo({
      url: '/pages/arrival/arrival',
    })
  },
  goToDeparture: function () {
    wx.navigateTo({
      url: '/pages/departure/departure',
    })
  },
  goToBrowse: function () {
    wx.navigateTo({
      url: '/pages/browse/browse',
    })
  }
})
