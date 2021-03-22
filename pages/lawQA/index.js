// pages/lawQA/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    lawQA : 
      {
        lawID : '00001',
        lawQuestion : ' “村村合并” 必须经村民同意吗？',
        lawAnswer : '村委会的设立、撤销、范围调整，直接涉及村民自治，应当由村民会议集体讨论同意，不能由村委会几个人说了算，也不能只由乡（镇）人民政府决定。按照法律规定，村委会的设立、撤销、范围调整的具体程序是：  第一，乡（镇）人民政府提出方案。乡（镇）人民政府可以先让村民提出意见，由乡（镇）人民政府按照便于群众自治的原则进行研究后，再正式提出，交村民会议讨论同意；也可以由乡（镇）人民政府在征求各方面意见的基础上，按照便于群众自治的原则提出，交村民会议讨论同意。第二，乡（镇）人民政府提出意见后，要经过村民会议讨论同意。要尊重村民的意愿，认真听取各种不同意见，真正按多数村民的意见办。  ',
        date : '2021-3-21',
        // 浏览量
        pageViews : 2021,
        // 是否被收藏
        isCollected : false
      }
    
  },

  onCollect:function () {
    // 获取缓存中的收藏列表
    var that = this;
    var collectLists = []; // 收藏列表
    wx.getStorageSync({
      key: 'collectLists',
      success (res) {
        console.log(res.data);
        collectLists = res.data;
      }
    });
    // 取消收藏
    if (that.data.lawQA.isCollected) {
      that.setData({
        'lawQA.isCollected' : false
      })
      console.log(that.data.lawQA);
      //使用filter筛选
      collectLists = collectLists.filter((item) => {
        return item !== that.data.lawQA;
      })
      wx.showToast({
        title: '取消收藏',
        icon: 'none',
        duration: 500
      })
      
    // 收藏
    } else {
      that.setData({
        // 注意！需加引号
        'lawQA.isCollected' : true
      })
      console.log(that.data.lawQA);
      collectLists.push(that.data.lawQA);
      console.log(collectLists);
      wx.showToast({
        title: '收藏成功',
        duration: 500
      })
    }
    // 更新本地缓存
    wx.setStorage({
      key: 'collectLists', 
      data: collectLists
    });
    console.log('collect!');
  }
})