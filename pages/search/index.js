// pages/search/index.js
import {
  request
} from "../../request/index.js"
Page({
  data: {
    lawQA: [],
    isFocus: false, //取消按钮是否显示
    inpValue: "", //输入框的值
    recorderManager: wx.getRecorderManager()
  },
  //输入事件句柄
  handleInput(e) {
    // console.log(e);
    //获取输入框的值
    var {
      value
    } = e.detail;
    //检测合法性
    if (!value.trim()) {
      this.setData({
        lawQA: [],
        isFocus: false
      })
      return;
    }
    this.setData({
      isFocus: true
    })
    // 发送请求
    // 同义词检索
    // 扶贫——致富、摘帽、帮扶
    // 村委会——村上、村集体
    // 土地利用——土地的使用
    // 农用地——农村用地、村里用的地 
    // 宅基地——住宅土地、建房子的地 
    // 劳资纠纷——劳动争议、劳动纠纷、因为劳动问题产生的矛盾、和用人单位产生了纠纷
    // 征地——征用土地、土地被征用
    switch (value) {
      case '致富':
        value = "扶贫";
        break;
      case '摘帽':
        value = "扶贫";
        break;
      case '帮扶':
        value = "扶贫";
        break;
      case '村上':
        value = "村委会";
        break;
      case '村集体':
        value = "村委会";
        break;
      case '土地的使用':
        value = "土地利用";
        break;
      case '农村用地':
        value = "农用地";
        break;
      case '村里用的地':
        value = "农用地";
        break;
      case '住宅土地':
        value = "宅基地";
        break;
      case '建房子的地':
        value = "宅基地";
        break;
      case '劳动争议':
        value = "劳资纠纷";
        break;
      case '劳动纠纷':
        value = "劳资纠纷";
        break;
      case '因为劳动问题产生的矛盾':
        value = "劳资纠纷";
        break;
      case '和用人单位产生了纠纷':
        value = "劳资纠纷";
        break;
      case '征用土地':
        value = "征地";
        break;
      case '土地被征用':
        value = "征地";
        break;
      default:
        break;
    }
    this.search(value);
  },
  //发送请求函数
  async search(query) {
    //设置接口
    const res = await request({
      url: "",
      data: {
        // query
      }
    });
    console.log(res);
    this.setData({
      lawQA: res
    })
  },

  //进行防抖处理

  //取消按钮的事件句柄
  handleCancel() {
    this.setData({
      inpValue: "",
      isFocus: false,
      lawQA: []
    })
  },

  // 语音识别事件
  // 手指长按开始
  // touchStart: function () {
  //   var that = this
  //   console.log('录音中...')
  //   wx.showLoading({
  //     title: '正在录音',
  //   })
  //   that.data.recorderManager.start() //开始录音api
  // },

  // // 手指长按结束
  // touchEnd: function () {
  //   var that = this
  //   console.log('录音结束')
  //   wx.showLoading({
  //     title: '正在识别语音',
  //   })
  //   that.data.recorderManager.stop() //录音结束api
  //   that.data.recorderManager.onStop((res) => {
  //     console.log(res)
  //     var time = res.duration //录音的时间
  //     var tempFilePath = res.tempFilePath //录音的路径
  //     if (time < 500) {
  //       wx.showToast({
  //         title: '说话时间太短',
  //         icon: 'none',
  //         duration: 1000
  //       })
  //     } else {
  //       //调用后台接口把录音转化成文字
  //       wx.showToast({
  //         title: '对不起，识别不出',
  //         icon: 'none',
  //         duration: 1000
  //       })
  //     }
  //   });
  // },


})