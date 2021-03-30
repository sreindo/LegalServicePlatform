// pages/consult/consult_zhai/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,  // 当前所在滑块的index
    selectList: [],   // 被选中的选项的数组
    isSelected: [false],  // 是否选择选项的数组
    isBuyer: false,
    isSameVillager: false,
    isAgree: false
  },
  hasSelected1: function (e) {
    // bindchange事件的e.detail.value返回选中选项的值
    let value = e.detail.value;
    switch (value) {
      case '申请':
        // 跳转至意见书1
        wx.redirectTo({
          url: 'url',
        })
        break;
      case '买卖':
        // 跳转至下一题
        break;
      case '流程':
        // 跳转至意见书8
        wx.redirectTo({
          url: 'url',
        })
        break;
      case '不能确定归属':
        // 跳转至意见书9
        wx.redirectTo({
          url: 'url',
        })
        break;
      case '赠与':
          // 跳转至意见书10
        wx.redirectTo({
          url: 'url',
        })
        break;
      case '被收回':
        // 跳转至下一题
        wx.redirectTo({
          url: 'url',
        })
        break;
      case '缴税':
        // 跳转至意见书13
        wx.redirectTo({
          url: 'url',
        })
        break;
      default:
        break;
    }
    
    let index = this.data.currentIndex;
    this.data.isSelected[index] = true;  // 不需要传递至视图层不用setData
    this.setData({
      currentIndex: this.data.currentIndex + 1,
      
    })
  },
  /**
   * 事件：返回上一题
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