// pages/family_browse/family_browse.js
Page({

  /**
   * Page initial data
   */
  data: {
    lt: "23.130196",
    lg: "113.259295",
    sc: '11',
    mk: [
      {
        iconPath: "http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png", // **1
        id: 1,
        latitude: 23.166184,
        longitude: 113.242815,
        height: 30,
        width: 30,
        callout: { content: "Bird View \n Guangzhou, China", fontSize: 11, color: "#000000", padding: 5 }
      },
      {
        iconPath: "http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png", // **1
        id: 2,
        latitude: 23.087251,
        longitude: 113.170031,
        height: 30,
        width: 30,
        callout: { content: "Comfort & Release \n Guangzhou, China", fontSize: 11, color: "#000000", padding: 5 }
      },
      {
        iconPath: "http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png", // **1
        id: 3,
        latitude: 23.048715,
        longitude: 113.392504,
        height: 30,
        width: 30,
        callout: { content: "You'll Be In Me \n Guangzhou, China", fontSize: 11, color: "#000000", padding: 5 }
      },
      {
        iconPath: "http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png", // **1
        id: 4,
        latitude: 22.964023,
        longitude: 113.384264,
        height: 30,
        width: 30,
        callout: { content: "An Impressive Stay Here \n Guangzhou, China", fontSize: 11, color: "#000000", padding: 5 }
      }
    ]
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
      url: '/pages/show_family/show_family',
    })
  }
})