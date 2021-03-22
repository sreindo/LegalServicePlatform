// pages/user/collections/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'collectLists',
      success (res) {
        console.log(res.data);
        that.setData({
          lists : res.data
        })
      }
    })
  },

  
})