// pages/cate_autonomy/index.js
var api = require('../../../config/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    catagoryList: [],
    QAlist: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getlist()
    this.getQAlist()
  },

  getlist: function(){
    var that = this;
    wx.request({
      url: api.leftListUrl,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)//打印到控制台
        var list = res.data;
        if (list == null) {
          var toastText = '数据获取失败';
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        } else {
          that.setData({
            catagoryList: list
          })
        }
      }
    })
  },
  getQAlist:function() {
    var that = this;
    wx.request({
      url: api.listUrl,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(api.listUrl)//打印到控制台
        var list = res.data;
        if (list == null) {
          var toastText = '数据获取失败';
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        } else {
          that.setData({
            QAlist: list
          })
        }
      }
    })
  },
  
})