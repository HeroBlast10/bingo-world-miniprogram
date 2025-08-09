// pages/me/me.js
const bingoData = require('../../utils/bingoData.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    hasUserInfo: false,
    isLoading: false,
    // 使用 placeholder-user.jpg 作为默认头像
    defaultAvatarUrl: '/images/placeholder-user.jpg',
    stats: {
      completed: 0,
      created: 0,
      saved: 0,
      shared: 0
    },
    menuItems: [
      {
        id: 'create',
        title: '创建我的宾果',
        icon: '✏️',
        iconColor: 'icon-orange',
        url: '/pages/create/create'
      },
      {
        id: 'saved',
        title: '已保存宾果',
        icon: '📁',
        iconColor: 'icon-blue',
        url: '/pages/saved/saved'
      },
      {
        id: 'share',
        title: '分享记录',
        icon: '📤',
        iconColor: 'icon-green',
        action: 'showShareHistory'
      },
      {
        id: 'settings',
        title: '设置',
        icon: '⚙️',
        iconColor: 'icon-gray',
        url: '/pages/settings/settings'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('用户中心页面加载');
    this.initUserInfo();
    this.loadStats();
  },

  /**
   * 初始化用户信息
   */
  initUserInfo() {
    const app = getApp();
    const userManager = app.getUserManager();
    
    // 检查登录状态
    if (userManager.getLoginStatus()) {
      const userInfo = userManager.getUserInfo();
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true
      });
      console.log('用户已登录:', userInfo);
    } else {
      console.log('用户未登录');
      this.setData({
        userInfo: null,
        hasUserInfo: false
      });
    }
  },

  /**
   * 微信授权登录
   */
  async login() {
    if (this.data.isLoading) return;
    
    this.setData({ isLoading: true });
    
    try {
      const app = getApp();
      const result = await app.login();
      
      if (result.success) {
        this.setData({
          userInfo: result.userInfo,
          hasUserInfo: true,
          isLoading: false
        });
        
        // 重新加载统计数据
        this.loadStats();
      }
    } catch (error) {
      console.error('登录失败:', error);
      this.setData({ isLoading: false });
    }
  },

  /**
   * 退出登录
   */
  logout() {
    wx.showModal({
      title: '退出登录',
      content: '确定要退出登录吗？退出后将清除本地数据。',
      success: (res) => {
        if (res.confirm) {
          const app = getApp();
          app.logout();
          
          this.setData({
            userInfo: null,
            hasUserInfo: false,
            stats: {
              completed: 0,
              created: 0,
              saved: 0,
              shared: 0
            }
          });
        }
      }
    });
  },

  /**
   * 编辑用户昵称
   */
  editNickName() {
    if (!this.data.hasUserInfo) {
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      });
      return;
    }

    const currentNickName = this.data.userInfo.nickName || '';
    
    wx.showModal({
      title: '修改昵称',
      placeholderText: '请输入新昵称',
      editable: true,
      content: currentNickName,
      success: (res) => {
        if (res.confirm) {
          const newNickName = res.content;
          this.updateNickName(newNickName);
        }
      }
    });
  },

  /**
   * 更新用户昵称
   */
  async updateNickName(newNickName) {
    if (!newNickName || newNickName.trim() === '') {
      wx.showToast({
        title: '昵称不能为空',
        icon: 'none'
      });
      return;
    }

    wx.showLoading({
      title: '更新中...',
      mask: true
    });

    try {
      const app = getApp();
      const userManager = app.getUserManager();
      
      const result = await userManager.updateNickName(newNickName);
      
      if (result.success) {
        // 更新页面显示的用户信息
        const updatedUserInfo = Object.assign({}, this.data.userInfo, {
          nickName: result.nickName
        });
        
        this.setData({
          userInfo: updatedUserInfo
        });
        
        wx.hideLoading();
        wx.showToast({
          title: result.message || '昵称修改成功',
          icon: 'success'
        });
      }
    } catch (error) {
      wx.hideLoading();
      wx.showToast({
        title: error.message || '修改失败',
        icon: 'none'
      });
    }
  },

  /**
   * 加载统计数据
   */
  loadStats() {
    try {
      // 从本地存储获取统计数据
      const completedGames = wx.getStorageSync('completedGames') || [];
      const createdGames = wx.getStorageSync('createdGames') || [];
      const savedGames = wx.getStorageSync('savedGames') || [];
      
      // 获取分享统计
      const app = getApp();
      const shareManager = app.getShareManager();
      const shareStats = shareManager.getShareStats();

      this.setData({
        stats: {
          completed: completedGames.length || 0,
          created: createdGames.length || 0,
          saved: savedGames.length || 0,
          shared: shareStats.total || 0
        }
      });
      
      console.log('统计数据已更新:', this.data.stats);
    } catch (error) {
      console.error('加载统计数据失败:', error);
      // 使用默认数据
      this.setData({
        stats: {
          completed: 0,
          created: 0,
          saved: 0,
          shared: 0
        }
      });
    }
  },

  /**
   * 显示分享历史
   */
  showShareHistory() {
    const app = getApp();
    const shareManager = app.getShareManager();
    const shareHistory = shareManager.getShareHistory();
    const shareStats = shareManager.getShareStats();
    
    if (shareHistory.length === 0) {
      wx.showModal({
        title: '分享记录',
        content: '您还没有分享过任何内容',
        showCancel: false
      });
      return;
    }
    
    // 构建分享历史信息
    let content = `总分享次数：${shareStats.total}\n`;
    content += `今日分享：${shareStats.today}\n`;
    content += `本周分享：${shareStats.thisWeek}\n`;
    content += `本月分享：${shareStats.thisMonth}\n\n`;
    content += '分享类型统计：\n';
    
    Object.keys(shareStats.byType).forEach(type => {
      const typeNames = {
        'friend': '分享给好友',
        'group': '分享到群聊',
        'my_creation': '分享我的创作',
        'game_progress': '分享游戏进度',
        'app_share': '分享应用'
      };
      content += `${typeNames[type] || type}：${shareStats.byType[type]}次\n`;
    });
    
    wx.showModal({
      title: '我的分享记录',
      content: content,
      showCancel: false,
      confirmText: '知道了'
    });
  },

  /**
   * 菜单项点击
   */
  onMenuTap(e) {
    const item = e.currentTarget.dataset.item;
    
    // 检查是否需要登录
    if (!this.data.hasUserInfo && item.id !== 'settings') {
      wx.showModal({
        title: '需要登录',
        content: '请先登录后再使用此功能',
        confirmText: '去登录',
        success: (res) => {
          if (res.confirm) {
            this.login();
          }
        }
      });
      return;
    }

    if (item.action) {
      // 执行特定动作
      if (typeof this[item.action] === 'function') {
        this[item.action]();
      }
    } else if (item.url) {
      wx.navigateTo({
        url: item.url,
        fail: () => {
          wx.showToast({
            title: '页面开发中',
            icon: 'none'
          });
        }
      });
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 每次显示时刷新用户信息和统计数据
    this.initUserInfo();
    this.loadStats();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.initUserInfo();
    this.loadStats();
    wx.stopPullDownRefresh();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '宾了个果 - 有趣的宾果游戏合集',
      path: '/pages/index/index',
      imageUrl: '/images/placeholder-logo.png'
    };
  }
});