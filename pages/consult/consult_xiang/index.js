// pages/consult/consult_xaing/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0, // 当前所在滑块的index
    isSelected: [false], // 是否选择选项的数组
    isInfringed: false, // 是否被侵权，是为被侵权人，否为侵权人
    whichIssue: 0 // 哪一类问题，1为道路问题，0为房屋问题
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
      case '道路':
        // 跳转至下一题
        this.setData({
          whichIssue: 1,
          currentIndex: this.data.currentIndex + 1
        })
        break;
      case '房屋':
        // 跳转至下一题
        this.setData({
          whichIssue: 0,
          currentIndex: this.data.currentIndex + 1
        })
        break;
      default:
        break;
    }

  },
  /**
   * 事件：选择第二题
   */
  hasSelected2: function (e) {
    let index = this.data.currentIndex;
    this.data.isSelected[index] = true;
    const value = e.detail.value;
    switch (value) {
      // 属于被侵权人
      case 'infringed':
        if (this.data.whichIssue) {
          // 如果为道路问题则跳转至意向书1
          wx.redirectTo({
            url: '/pages/intent/intent_xiang/xiang1/index',
          })
        } else {
          // 跳转至第3题
          this.setData({
            isInfringed: true,
            currentIndex: this.data.currentIndex + 1
          })
        }
        break;
        // 属于侵权人
      case 'infringer':
        if (this.data.whichIssue) {
          // 如果为道路问题则跳转至意向书2
          wx.redirectTo({
            url: '/pages/intent/intent_xiang/xiang2/index',
          })
        } else {
          // 跳转至第3题
          this.setData({
            isInfringed: false,
            currentIndex: this.data.currentIndex + 1
          })
        }
        break;
      default:
        break;
    }

  },
  /**
   * 事件：选择第三题
   */
  hasSelected3: function (e) {
    const value = e.detail.value;
    switch (value) {
      case '邻居不借':
        // 跳转至意见书3
        wx.redirectTo({
          url: '/pages/intent/intent_xiang/xiang3/index',
        })
        break;
      case '侵占':
        // 跳转至意见书4
        wx.redirectTo({
          url: '/pages/intent/intent_xiang/xiang4/index',
        })
        break;
      case '被危害':
        // 跳转至意见书5
        wx.redirectTo({
          url: '/pages/intent/intent_xiang/xiang5/index',
        })
        break;
      case '被阻碍':
        // 跳转至意见书6
        wx.redirectTo({
          url: '/pages/intent/intent_xiang/xiang6/index',
        })
        break;
      case '你不借':
        // 跳转至意见书7
        wx.redirectTo({
          url: '/pages/intent/intent_xiang/xiang7/index',
        })
        break;
      case '被侵占':
        // 跳转至意见书8
        wx.redirectTo({
          url: '/pages/intent/intent_xiang/xiang8/index',
        })
        break;
      case '危害':
        // 跳转至意见书9
        wx.redirectTo({
          url: '/pages/intent/intent_xiang/xiang9/index',
        })
        break;
      case '阻碍':
        // 跳转至意见书10
        wx.redirectTo({
          url: '/pages/intent/intent_xiang/xiang10/index',
        })
        break;

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
        currentIndex: this.data.currentIndex + 1
      })
    }
  }
})