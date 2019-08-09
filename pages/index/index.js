//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // array: ['美国', '中国', '巴西', '日本'],
    index: 0,
    dateArrival: '2019-08-09',
    dateDeparture: '2019-08-09',
    numberOfNights: 0,
    categories: ["Couple", "Family", "Friends"],
    categoryIndex: 0,
  },
  bindCategoryChange: function (e) {
    console.log('picker category', e.detail.value);

    this.setData({
      categoryIndex: e.detail.value
    })
  },
  bindDateArrivalChange: function (e) {
    const page = this
    this.setData({
      dateArrival: e.detail.value
    }, () => {
      page.calculateDateDifference()
    })
  },
  bindDateDepartureChange: function (e) {
    const page = this
    this.setData({
      dateDeparture: e.detail.value
    }, () => {
      page.calculateDateDifference()
    })
  },
  calculateDateDifference: function () {
    const dateArrival = this.data.dateArrival
    const dateDeparture = this.data.dateDeparture
    console.log(dateArrival, dateDeparture)
    const dateDifference = Math.floor((Date.parse(dateDeparture) - Date.parse(dateArrival)) / 86400000);

    this.setData({
      numberOfNights: dateDifference
    })
  },
  bindCategoryChange: function (e) {
    console.log('picker category', e.detail.value);

    this.setData({
      categoryIndex: e.detail.value
    })
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
    const page = this

    console.log(page.data)

    if (page.data.categoryIndex == 0) {
      wx.navigateTo({
        url: '/pages/browse_couple/browse_couple',
      })
    } else if (page.data.categoryIndex == 1) {
      wx.navigateTo({
        url: '/pages/browse_family/browse_family',
      })
    } else if (page.data.categoryIndex == 2) {
      wx.navigateTo({
        url: '/pages/browse/browse',
      })
    }
  },
  goToBrowseAll: function () {
    wx.navigateTo({
      url: '/pages/browse/browse',
    })
  }
})
