// app.js
const userManager = require('./utils/userManager.js');
const shareManager = require('./utils/shareManager.js');

App({
  onLaunch() {
    console.log('应用启动');
    
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 初始化用户状态
    this.initUser();
    
    // 检查应用更新
    this.checkForUpdate();
  },

  /**
   * 初始化用户状态
   */
  initUser() {
    // 尝试静默登录（从缓存恢复登录状态）
    const isLoggedIn = userManager.silentLogin();
    
    if (isLoggedIn) {
      console.log('用户已登录，从缓存恢复状态');
      this.globalData.userInfo = userManager.getUserInfo();
      this.globalData.isLoggedIn = true;
    } else {
      console.log('用户未登录');
      this.globalData.userInfo = null;
      this.globalData.isLoggedIn = false;
    }
  },

  /**
   * 检查应用更新
   */
  checkForUpdate() {
    const updateManager = wx.getUpdateManager();

    updateManager.onCheckForUpdate(function (res) {
      console.log('检查更新结果:', res.hasUpdate);
    });

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            updateManager.applyUpdate();
          }
        }
      });
    });

    updateManager.onUpdateFailed(function () {
      console.log('新版本下载失败');
    });
  },

  /**
   * 全局登录方法
   */
  async login() {
    try {
      wx.showLoading({
        title: '登录中...',
        mask: true
      });

      const result = await userManager.login();
      
      if (result.success) {
        this.globalData.userInfo = result.userInfo;
        this.globalData.isLoggedIn = true;
        
        wx.hideLoading();
        wx.showToast({
          title: '登录成功',
          icon: 'success'
        });
        
        return result;
      } else {
        throw new Error(result.message || '登录失败');
      }
    } catch (error) {
      wx.hideLoading();
      wx.showToast({
        title: error.message || '登录失败',
        icon: 'none'
      });
      throw error;
    }
  },

  /**
   * 全局登出方法
   */
  logout() {
    userManager.logout();
    this.globalData.userInfo = null;
    this.globalData.isLoggedIn = false;
    
    wx.showToast({
      title: '已退出登录',
      icon: 'success'
    });
  },

  /**
   * 获取用户管理器
   */
  getUserManager() {
    return userManager;
  },

  /**
   * 获取分享管理器
   */
  getShareManager() {
    return shareManager;
  },

  globalData: {
    userInfo: null,
    isLoggedIn: false,
    version: '1.0.2'
  }
})
