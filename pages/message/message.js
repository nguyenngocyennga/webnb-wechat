//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  goToIndex: function () {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  }
})
