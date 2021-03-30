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
    isCitizen: false,
    withCunjiti: false,
    withCompany: false,
    withCunmin: false,
    isVillCun: false,
    isCitiCun: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 事件：选择第一题
   * 结果：跳至下一题 index++
   */
  hasSelected1: function (e) {
    // bindchange事件的e.detail.value返回选中选项的值，将值push进数组中
    let value = e.detail.value;
    if (value == "村民") {
      this.data.isVillager = true;
      this.data.isCitizen = false;
    } else if (value == "城镇居民") {
      this.data.isCitizen = true;
      this.data.isVillager = false;
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
   * 事件：选择第二题
   * 结果：跳至下一题 index++
   */
  hasSelected2: function (e) {
    // bindchange事件的e.detail.value返回选中选项的值，将值push进数组中
    let value = e.detail.value;
    if (value == "村集体") {
      this.data.withCunjiti = true;
      this.data.withCompany = false;
      this.data.withCunmin = false;
      this.data.isVillCun = false;
      this.data.isCitiCun = false;
    } else if (value == "公司") {
      this.data.withCompany = true;
      this.data.withCunjiti = false;
      this.data.withCunmin = false;
      this.data.isCitiCun = false;
      this.data.isVillCun = false;

    } else if (value == "村民") {
      this.data.withCunmin = true;
      this.data.withCompany = false;
      this.data.withCunjiti = false;
      this.data.isCitiCun = false;
      this.data.isVillCun = false;

    }
    if (this.data.isVillager && this.data.withCunjiti) {
      this.data.isVillCun = true;
      this.data.isCitiCun = false;
      this.data.withCunmin = false;
    }
    if (this.data.isCitizen && this.data.withCunjiti) {
      this.data.isCitiCun = true;
      this.data.isVillCun = false;
      this.data.withCunmin = false;
    }
    // 跳转至下一题
    let index = this.data.currentIndex;
    this.data.isSelected[index] = true;  // 不需要传递至视图层不用setData
    this.setData({
      currentIndex: this.data.currentIndex + 1,
      withCunjiti: this.data.withCunjiti,
      withCompany: this.data.withCompany,
      withCunmin: this.data.withCunmin,
      isVillCun: this.data.isVillCun,
      isCitiCun: this.data.isCitiCun
    })
  },
  /**
   * 事件：选择第三题
   * 结果：跳至下一题或跳转至意见书
   */
  hasSelected3: function (e) {
    let index = this.data.currentIndex;
    this.data.isSelected[index] = true;  // 不需要传递至视图层不用setData

    // bindchange事件的e.detail.value返回选中选项的值，将值push进数组中
    let value = e.detail.value;
    if (value == "村集体收回") {
      //下一个问题
      this.setData({
        currentIndex: this.data.currentIndex + 1
      })
    } else if (value == "村集体强迫") {
      // 跳转至意见书3
      wx.redirectTo({
        url: '/pages/intent/intent_tudi/tudi3/index',
      })
    } else if (value == "收回土地") {
      // 跳转至意见书4
      wx.redirectTo({
        url: '/pages/intent/intent_tudi/tudi4/index',
      })
    } else if (value == "公司不付钱") {
      // 跳转至意见书5
      wx.redirectTo({
        url: '/pages/intent/intent_tudi/tudi5/index',
      })
    } else if (value == "村民占用" ) {
      // 跳转至意见书6
      wx.redirectTo({
        url: '/pages/intent/intent_tudi/tudi6/index',
      })
    } else if (value == "村民收回") {
      // 跳转至意见书7
      wx.redirectTo({
        url: '/pages/intent/intent_tudi/tudi7/index',
      })
    } else if (value == "城镇村集体收回") {
      //下一题
      this.setData({
        currentIndex: this.data.currentIndex + 1
      })
    } else if (value == "口头约定") {
      // 跳转至意见书10
      wx.redirectTo({
        url: '/pages/intent/intent_tudi/tudi10/index',
      })
    }
    
  },
  /**
   * 事件：选择第四题
   * 结果：
   */
  hasSelected4: function (e) {
    
    let value = e.detail.value;
    // 村民，与村集体
    if (this.data.isVillager) {
      if (value == "yes") {
        // 跳转至意见1
        wx.redirectTo({
          url: '/pages/intent/intent_tudi/tudi1/index',
        })
      } else if (value == "no") {
        // 跳转至意见2
        wx.redirectTo({
          url: '/pages/intent/intent_tudi/tudi2/index',
        })
      }
    } else if (this.data.isCitizen) {
      // 城镇居民，与村集体
      if (value == "yes") {
        // 跳转至意见85
        wx.redirectTo({
          url: '/pages/intent/intent_tudi/tudi8/index',
        })
      } else if (value == "no") {
        // 跳转至意见9
        wx.redirectTo({
          url: '/pages/intent/intent_tudi/tudi9/index',
        })
      }
    }
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