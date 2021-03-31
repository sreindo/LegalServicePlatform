// pages/consult/consult_zheng/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0, // 当前所在滑块的index
    isSelected: [false], // 是否选择选项的数组
    havaHouse: false, // 土地上是否有房屋
    isUnapproveTransferred: false,  // 是否未经批准且转城镇
    isTransferred: false  // 是否转为城镇户口
  },
  /**
   * 事件：选择第一题
   */
  hasSelected1: function (e) {
    let index = this.data.currentIndex;
    this.data.isSelected[index] = true;
    const value = e.detail.value;
    switch (value) {
      case 'yes':
        // 跳转至下一题
        this.setData({
          havaHouse: true,
          currentIndex: this.data.currentIndex + 1
        })
        break;
      case 'no':
        // 跳转至第7题 是否已转为城镇户口
        this.setData({
          havaHouse: false,
          currentIndex: 6
        })
        break;
      default:
        break;
    }
  },
  /**
   * 事件：选择第二题之房屋的取得方式
   */
  hasSelected2: function (e) {
    let index = this.data.currentIndex;
    this.data.isSelected[index] = true;
    const value = e.detail.value;
    switch (value) {
      case '买卖':
        // 跳转至第七题
        this.setData({
          currentIndex: 6
        })
        break;
      case '继承':
        // 跳转至第七题
        this.setData({
          currentIndex: 6
        })
        break;
      case '他人赠与':
        // 跳转至第七题
        this.setData({
          currentIndex: 6
        })
        break;
      case '自己建造':
        // 跳转至下一题第三题
        this.setData({
          currentIndex: this.data.currentIndex + 1
        })
        break;
      default:
        break;
    }
  },
  /**
   * 事件：选择第三题
   */
  hasSelected3: function (e) {
    let index = this.data.currentIndex;
    this.data.isSelected[index] = true;
    const value = e.detail.value;
    switch (value) {
      case '经过批准':
        // 跳转至第七题
        this.setData({
          currentIndex: 6
        })
        break;
      case '没经过批准':
        // 跳转至下一题第四题
        this.setData({
          currentIndex: this.data.currentIndex + 1
        })
        break;
      default:
        break;
    }
  },
  /**
   * 事件：选择第四题
   */
  hasSelected4: function (e) {
    let index = this.data.currentIndex;
    this.data.isSelected[index] = true;
    const value = e.detail.value;
    switch (value) {
      case 'yes':
        // 未经过批准且转为城镇户口
        this.setData({
          isUnapproveTransferred: true,
          currentIndex: this.data.currentIndex + 1
        })
        break;
      case 'no':
        // 未经过批准且没有转户口
        // 跳转至下一题第6题
        this.setData({
          isUnapproveTransferred: false,
          currentIndex: 5
        })
        break;
      default:
        break;
    }
  },
  /**
   * 事件：选择第五题之已交回村集体
   */
  hasSelected5_1: function (e) {
    let index = this.data.currentIndex;
    this.data.isSelected[index] = true;
    const value = e.detail.value;
    switch (value) {
      case 'yes':
        // 跳转至意见书
        wx.redirectTo({
          url: '/pages/intent/intent_zheng/zheng4/index',
        })
        break;
      case 'no':
        // 跳转至下一题第6题
        this.setData({
          currentIndex: this.data.currentIndex + 1
        })
        break;
      default:
        break;
    }
  },
  /**
   * 事件：选择第五题之是否承包
   */
  hasSelected5_2: function (e) {
    let index = this.data.currentIndex;
    this.data.isSelected[index] = true;
    const value = e.detail.value;
    switch (value) {
      case 'yes':
        // 跳转至意见书
        wx.redirectTo({
          url: '/pages/intent/intent_zheng/zheng5/index',
        })
        break;
      case 'no':
        // 跳转至意见书
        wx.redirectTo({
          url: '/pages/intent/intent_zheng/zheng5/index',
        })
        break;
      default:
        break;
    }
  },
  /**
   * 事件：选择第六题
   */
  hasSelected6: function (e) {
    let index = this.data.currentIndex;
    this.data.isSelected[index] = true;
    const value = e.detail.value;
    switch (value) {
      case 'yes':
        // 跳转至意见书
        wx.redirectTo({
          url: '/pages/intent/intent_zheng/zheng5/index',
        })
        break;
      case 'no':
        // 跳转至意见书
        wx.redirectTo({
          url: '/pages/intent/intent_zheng/zheng5/index',
        })
        break;
      default:
        break;
    }
  },
  /**
   * 事件：选择第七题
   */
  hasSelected7: function (e) {
    let index = this.data.currentIndex;
    this.data.isSelected[index] = true;
    const value = e.detail.value;
    switch (value) {
      case 'yes':
        // 跳转至下一题
        this.setData({
          isTransferred: true,
          currentIndex: this.data.currentIndex + 1
        })
        break;
      case 'no':
        // 跳转至第9题
        this.setData({
          isTransferred: false,
          currentIndex: 8
        })
        break;
      default:
        break;
    }
  },
  /**
   * 事件：选择第八题
   */
  hasSelected8: function (e) {
    let index = this.data.currentIndex;
    this.data.isSelected[index] = true;
    const value = e.detail.value;
    switch (value) {
      case 'yes':
        // 跳转至意见书
        wx.redirectTo({
          url: '/pages/intent/intent_zheng/zheng1/index',
        })
        break;
      case 'no':
        // 跳转至第9题
        this.setData({
          isTransferred: false,
          currentIndex: 8
        })
        break;
      default:
        break;
    }
  },
  /**
   * 事件：选择第九题
   */
  hasSelected9: function (e) {
    let index = this.data.currentIndex;
    this.data.isSelected[index] = true;
    const value = e.detail.value;
    switch (value) {
      case 'yes':
        // 跳转至意见书
        wx.redirectTo({
          url: '/pages/intent/intent_zheng/zheng2/index',
        })
        break;
      case 'no':
        // 跳转至意见书
        wx.redirectTo({
          url: '/pages/intent/intent_zheng/zheng3/index',
        })
        break;
      default:
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