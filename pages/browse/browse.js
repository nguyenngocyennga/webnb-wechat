// pages/browse/browse.js
Page({
  data: {
    lt: "30.65235",
    lg: "104.08206",
    sc: '13',
    mk: [
    {
        iconPath: "http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png", // **1
      id: 0,
      latitude: 30.65235,
      longitude: 104.08206,
      height: 40,
      width: 40,
      callout: { content: "Le Wagon \n Chengdu, China", fontSize: 15, color: "#000000", padding: 10 }
    }]
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  goToApartment: function () {
    wx.navigateTo({
      url: '/pages/show/show',
    })
  }
})