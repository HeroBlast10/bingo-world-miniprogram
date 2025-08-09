// pages/debug/debug-me.js - 用于调试用户中心页面显示问题
Page({
  data: {
    debugInfo: {}
  },

  onLoad() {
    this.runDebugTests();
  },

  runDebugTests() {
    console.log('=== 用户中心调试信息 ===');
    
    try {
      const app = getApp();
      const userManager = app.getUserManager();
      
      const debugInfo = {
        // 登录状态
        isLoggedIn: userManager.getLoginStatus(),
        
        // 用户信息
        userInfo: userManager.getUserInfo(),
        
        // 本地存储数据
        loginData: wx.getStorageSync('loginData'),
        
        // 系统信息
        systemInfo: wx.getSystemInfoSync(),
        
        // 当前时间
        currentTime: new Date().toISOString()
      };
      
      console.log('调试信息:', debugInfo);
      
      this.setData({
        debugInfo: debugInfo
      });
      
    } catch (error) {
      console.error('调试过程中出错:', error);
      this.setData({
        debugInfo: {
          error: error.message
        }
      });
    }
  },

  // 测试登录
  testLogin() {
    const app = getApp();
    app.login().then(result => {
      console.log('测试登录结果:', result);
      this.runDebugTests(); // 重新获取调试信息
    }).catch(error => {
      console.error('测试登录失败:', error);
    });
  },

  // 清除用户数据
  clearUserData() {
    wx.showModal({
      title: '确认清除',
      content: '确定要清除所有用户数据吗？',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('loginData');
          wx.removeStorageSync('userInfo');
          
          const app = getApp();
          const userManager = app.getUserManager();
          userManager.logout();
          
          wx.showToast({
            title: '数据已清除',
            icon: 'success'
          });
          
          this.runDebugTests(); // 重新获取调试信息
        }
      }
    });
  }
});
