// pages/me/me.js
const bingoData = require('../../utils/bingoData.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    hasUserInfo: false,
    // 使用 placeholder-user.jpg 作为默认头像
    defaultAvatarUrl: '/images/placeholder-user.jpg',
    stats: {
      completed: 12,
      created: 5,
      saved: 28
    },
    menuItems: [
      {
        id: 'create',
        title: '创建我的宾果',
        icon: '+',
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
    // 尝试从本地缓存读取用户信息
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true
      });
      console.log('从缓存加载用户信息:', userInfo);
    }

    this.loadStats();
  },

  /**
   * 微信授权登录
   */
  login() {
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途
      success: (res) => {
        console.log("获取用户信息成功", res);
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
        // 将用户信息保存到本地缓存
        wx.setStorageSync('userInfo', res.userInfo);

        wx.showToast({
          title: '登录成功',
          icon: 'success'
        });
      },
      fail: (err) => {
        console.error("获取用户信息失败", err);
        wx.showToast({
          title: '登录失败',
          icon: 'none'
        });
      }
    });
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

      this.setData({
        stats: {
          completed: completedGames.length || 12, // 默认显示12
          created: createdGames.length || 5,      // 默认显示5
          saved: savedGames.length || 28          // 默认显示28
        }
      });
    } catch (error) {
      console.error('加载统计数据失败:', error);
      // 使用默认数据
      this.setData({
        stats: {
          completed: 12,
          created: 5,
          saved: 28
        }
      });
    }
  },



  /**
   * 菜单项点击
   */
  onMenuTap(e) {
    const item = e.currentTarget.dataset.item;

    if (item.url) {
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
    // 每次显示时刷新统计数据
    this.loadStats();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.loadUserInfo();
    this.loadStats();
    wx.stopPullDownRefresh();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '宾果世界 - 发现有趣的宾果游戏',
      path: '/pages/index/index'
    };
  }
});