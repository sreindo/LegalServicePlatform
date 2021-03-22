// const app = getApp()

// Page({
//   data: {
//     avatarUrl: '',
//     userInfo: null,
//     logged: false,
//     takeSession: false,
//     requestResult: '',
//     chatRoomCollection: 'chatroom',
//     chatRoomGroupId: 'demo',
//     chatRoomGroupName: '聊天室',
//     onGetUserInfo: null,
//     getOpenID: null,
//   },

//   onLoad:  function(option) {
//     // 获取用户信息
//     wx.getSetting({
//       success: res => {
//         if (res.authSetting['scope.userInfo']) {
//           wx.getUserInfo({
//             success: res => {
//               this.setData({
//                 avatarUrl: res.userInfo.avatarUrl,
//                 userInfo: res.userInfo
//               })
//             }
//           })
//         }
//       }
//     })
//     this.setData({
//       onGetUserInfo: this.onGetUserInfo,
//       getOpenID: this.getOpenID,
//       chatRoomGroupId: option.chatRoomGroupId
//     })
//     wx.getSystemInfo({
//       success: res => {
//         console.log('system info', res)
//         if (res.safeArea) {
//           const { top, bottom } = res.safeArea
//           this.setData({
//             containerStyle: `padding-top: ${(/ios/i.test(res.system) ? 10 : 20) + top}px; padding-bottom: ${20 + res.windowHeight - bottom}px`,
//           })
//         }
//       },
//     })
//   },

//   getOpenID: async function() {
//     if (this.openid) {
//       return this.openid
//     }
//     const { result } = await wx.cloud.callFunction({
//       name: 'login',
//     })
//     return result.openid
//   },

//   onGetUserInfo: function(e) {
//     if (!this.logged && e.detail.userInfo) {
//       this.setData({
//         logged: true,
//         avatarUrl: e.detail.userInfo.avatarUrl,
//         userInfo: e.detail.userInfo
//       })
//     }
//   },

//   onShareAppMessage() {
//     return {
//       title: '聊天',
//       path: '/pages/im/room/room',
//     }
//   },
// })
