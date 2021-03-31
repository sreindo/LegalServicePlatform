// pages/consult/consult_zhai/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,  // 当前所在滑块的index
    selectList: [],   // 被选中的选项的数组
    isSelected: [false],  // 是否选择选项的数组
    isBuyer: false,   // 是否为买家，是为买家，否则为卖家
    isDeal: false     // 是否是买卖，是选择买卖问题，否则选择宅基地被收回问题
  },
  /**
   * 事件：选择第一题
   * 结果：跳转至下一题或意见书
   */
  hasSelected1: function (e) {
    let index = this.data.currentIndex;
    this.data.isSelected[index] = true;  
    // bindchange事件的e.detail.value返回选中选项的值
    const value = e.detail.value;
    switch (value) {
      case '申请':
        // 跳转至意见书1
        wx.redirectTo({
          url: '/pages/intent/intent_zhai/zhai1/index',
        })
        break;
      case '买卖':
        // 跳转至下一题
        this.setData({
          isDeal: true,
          currentIndex: this.data.currentIndex + 1
        })
        break;
      case '流程':
        // 跳转至意见书8
        wx.redirectTo({
          url: '/pages/intent/intent_zhai/zhai8/index',
        })
        break;
      case '不能确定归属':
        // 跳转至意见书9
        wx.redirectTo({
          url: '/pages/intent/intent_zhai/zhai9/index',
        })
        break;
      case '赠与':
          // 跳转至意见书10
        wx.redirectTo({
          url: '/pages/intent/intent_zhai/zhai10/index',
        })
        break;
      case '被收回':
        // 跳转至下一题
        this.setData({
          currentIndex: this.data.currentIndex + 1,
          isDeal: false
        })
        break;
      case '缴税':
        // 跳转至意见书13
        wx.redirectTo({
          url: '/pages/intent/intent_zhai/zhai13/index',
        })
        break;
      default:
        break;
    }
    
  },
  /**
   * 事件：选择第二题之买卖问题
   * @param {event} e 
   */
  hasSelected2_1: function(e) {
    const value = e.detail.value;
    switch (value) {
      case 'buyer':
        this.data.isBuyer = true;
        break;
      case 'seller':
        this.data.isBuyer = false;
        break;
      default:
        break;
    }
    // 跳转至下一题
    let index = this.data.currentIndex;
    this.data.isSelected[index] = true;
    this.setData({
      currentIndex: this.data.currentIndex + 1,
      isBuyer: this.data.isBuyer
    })
  },
  /**
   * 事件：选择第二题之宅基地被收回问题 
   * @param {event} e 
   */
  hasSelected2_2: function(e) {
    const value = e.detail.value;
    switch(value){
      case '继承':
        // 跳转至意见书11
        wx.redirectTo({
          url: '/pages/intent/intent_zhai/zhai11/index',
        })
        break;
      case '搬迁':
        // 跳转至意见书12
        wx.redirectTo({
          url: '/pages/intent/intent_zhai/zhai12/index',
        })
        break;
      case '征用':
        // 跳转至意见书14
        wx.redirectTo({
          url: '/pages/intent/intent_zhai/zhai14/index',
        })
        break;
    }
  },
  /**
   * 事件：选择第三题.
   * @param {event} e 
   */
  hasSelected3: function(e) {
    var that = this.data;
    let index = that.currentIndex;
    that.isSelected[index] = true;
    const value = e.detail.value;
    // 是否买方
    if (that.isBuyer) {
      // 是否同村
      if (value == "yes") {
        // 跳转至下一个问题
        this.setData({
          currentIndex: that.currentIndex + 1
        })
      } else if (value == "no") {
        // 跳转至意见书2
        wx.redirectTo({
          url: '/pages/intent/intent_zhai/zhai2/index',
        })
      }
    } else {
      // 是否同村
      if (value == "yes") {
        // 跳转至下一个问题
        this.setData({
          currentIndex: that.currentIndex + 1
        })
      } else if (value == "no") {
        // 跳转至意见书4
        wx.redirectTo({
          url: '/pages/intent/intent_zhai/zhai4/index',
        })
      }
    }
  },
  /**
   * 事件：选择第四题.
   * @param {event} e 
   */
  hasSelected4: function(e) {
    var that = this.data;
    let index = that.currentIndex;
    that.isSelected[index] = true;
    const value = e.detail.value;
    if (that.isBuyer) {
      if (value == 'yes') {
        // 跳转至意见书3
        wx.redirectTo({
          url: '/pages/intent/intent_zhai/zhai3/index',
        })
      }else if (value == "no") {
        // 跳转至意见书5
        wx.redirectTo({
          url: '/pages/intent/intent_zhai/zhai5/index',
        })
      }
    } else {
      if (value == 'yes') {
        // 跳转至意见书6
        wx.redirectTo({
          url: '/pages/intent/intent_zhai/zhai6/index',
        })
      }else if (value == "no") {
        // 跳转至意见书7
        wx.redirectTo({
          url: '/pages/intent/intent_zhai/zhai7/index',
        })
      }
    }
  },
  /**
   * 事件：返回上一题.
   */
  toPrevious: function () {
    let index = this.data.currentIndex;
    if (index > 0) {
      this.setData({
        currentIndex: index - 1
      })
    }
  },
  /**
   * 事件：跳转至下一题
   */
  toNext: function () {
    let index = this.data.currentIndex;
    // 若当前题目已经选择选项，则允许跳转至下一题
    if (this.data.isSelected[index] === true) {
      this.setData({
        currentIndex : this.data.currentIndex + 1
      })
    }
  }
})