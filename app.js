// app.js
const userManager = require('./utils/userManager.js');
const shareManager = require('./utils/shareManager.js');

App({
  onLaunch() {
    console.log('应用启动');

    // 初始化云开发
    if (wx.cloud) {
      wx.cloud.init({
        env: 'cloud1-7geb06r844eff3c0', // 您的云开发环境ID
        traceUser: true
      });
      console.log('云开发初始化成功');
    }

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
   * 全局登录方法 - 使用最新规范
   */
  async login() {
    try {
      console.log('开始全局登录流程...');
      
      const result = await userManager.login();
      
      if (result.success) {
        this.globalData.userInfo = result.userInfo;
        this.globalData.isLoggedIn = true;
        
        console.log('全局登录成功:', result);
        return result;
      } else {
        throw new Error(result.message || '登录失败');
      }
    } catch (error) {
      console.error('全局登录失败:', error);
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
    version: '1.1.6'
  }
})
