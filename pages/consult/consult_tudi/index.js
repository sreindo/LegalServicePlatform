// pages/consult/consult_tudi/index.js
// 土地承包及流转问题
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,  // 当前所在滑块的index
    selectList: [],   // 被选中的选项的数组
    isSelected: [false],  // 是否选择选项的数组

    // role: "",   //角色 村民or市民
    isVillager: false,
    isCitizen: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 事件：已经选择某选项
   * 结果：跳至下一题 index++
   */
  hasSelected: function (e) {
    // bindchange事件的e.detail.value返回选中选项的值，将值push进数组中
    let value = e.detail.value;
    if (value == "村民") {
      this.data.isVillager = true;
    } else if (value == "城镇居民") {
      this.data.isCitizen = true;
    }
    // this.data.selectList.push(value);
    let index = this.data.currentIndex;
    this.data.isSelected[index] = true;  // 不需要传递至视图层不用setData
    this.setData({
      currentIndex: this.data.currentIndex + 1,
      isVillager: this.data.isVillager,
      isCitizen: this.data.isCitizen
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