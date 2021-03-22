// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  login: function (e) {
    console.log(e)
    wx.navigateTo({
      url: '../my/login/login',
    })
  },
  onLoad: function (options) {

  },
  // 跳转至我的收藏页面
  toCollect: function (e) {
    console.log(e)
    wx.navigateTo({
      url: './collections/index',
    })
  },
  // 跳转至关于页面
  toAbout: function() {
    wx.navigateTo({
      url: './about/index',
    })
  }
})