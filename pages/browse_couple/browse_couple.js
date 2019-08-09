// pages/browse_couple/browse_couple.js
Page({

  /**
   * Page initial data
   */
  data: {
    lt: "29.693604",
    lg: "104.718713",
    sc: '8',
    mk: [
      {
        iconPath: "http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png", // **1
        id: 0,
        latitude: 29.560876,
        longitude: 103.761992,
        height: 40,
        width: 40,
        callout: { content: "Exquisite Luxury Tent \n Leshan, Sichuan", fontSize: 11, color: "#000000", padding: 5 }
      },
      {
        iconPath: "http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png", // **1
        id: 1,
        latitude: 30.3571851,
        longitude: 103.315531,
        height: 40,
        width: 40,
        callout: { content: "Tree House \n Bamboo Forest, Sichuan", fontSize: 11, color: "#000000", padding: 5 }
      },
      {
        iconPath: "http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png", // **1
        id: 2,
        latitude: 28.874325,
        longitude: 105.438318,
        height: 40,
        width: 40,
        callout: { content: "Cottage by The Lake \n Luzhou, Sichuan", fontSize: 11, color: "#000000", padding: 5 }
      },
      {
        iconPath: "http://icons.iconarchive.com/icons/graphicloads/100-flat/256/home-icon.png", // **1
        id: 3,
        latitude: 29.510315,
        longitude: 103.332416,
        height: 40,
        width: 40,
        callout: { content: "Exlusive Bungalow \n Emei Shan, Sichuan", fontSize: 11, color: "#000000", padding: 5 }
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
      url: '/pages/show_couple/show_couple',
    })
  }
})