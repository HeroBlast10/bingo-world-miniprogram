// pages/settings/settings.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selectedColor: 'coral',
    notifications: true,
    autoSave: true,
    previewCells: [0, 1, 2, 3, 4, 5, 6, 7, 8], // 用于生成3x3预览网格
    colorOptions: [
      {
        id: 'coral',
        name: '珊瑚粉',
        bgClass: 'bg-coral'
      },
      {
        id: 'blue',
        name: '天空蓝',
        bgClass: 'bg-blue'
      },
      {
        id: 'purple',
        name: '薰衣草紫',
        bgClass: 'bg-purple'
      },
      {
        id: 'green',
        name: '薄荷绿',
        bgClass: 'bg-green'
      },
      {
        id: 'pink',
        name: '樱花粉',
        bgClass: 'bg-pink'
      },
      {
        id: 'orange',
        name: '活力橙',
        bgClass: 'bg-orange'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 设置导航栏标题
    wx.setNavigationBarTitle({
      title: '设置'
    });
    
    // 从本地存储加载设置
    this.loadSettings();
  },

  /**
   * 加载设置
   */
  loadSettings() {
    try {
      const selectedColor = wx.getStorageSync('bingoColor') || 'coral';
      const notifications = wx.getStorageSync('notifications');
      const autoSave = wx.getStorageSync('autoSave');
      
      this.setData({
        selectedColor: selectedColor,
        notifications: notifications !== false, // 默认为true
        autoSave: autoSave !== false // 默认为true
      });
    } catch (error) {
      console.error('加载设置失败:', error);
    }
  },

  /**
   * 颜色选择
   */
  onColorSelect(e) {
    const colorId = e.currentTarget.dataset.color;
    console.log('选择颜色:', colorId);
    
    this.setData({
      selectedColor: colorId
    });
    
    // 保存到本地存储
    try {
      wx.setStorageSync('bingoColor', colorId);
      wx.showToast({
        title: '颜色已更新',
        icon: 'success',
        duration: 1500
      });
    } catch (error) {
      console.error('保存颜色设置失败:', error);
    }
  },

  /**
   * 切换通知设置
   */
  onToggleNotifications() {
    const newValue = !this.data.notifications;
    this.setData({
      notifications: newValue
    });
    
    // 保存到本地存储
    try {
      wx.setStorageSync('notifications', newValue);
      wx.showToast({
        title: newValue ? '已开启通知' : '已关闭通知',
        icon: 'success',
        duration: 1500
      });
    } catch (error) {
      console.error('保存通知设置失败:', error);
    }
  },

  /**
   * 切换自动保存设置
   */
  onToggleAutoSave() {
    const newValue = !this.data.autoSave;
    this.setData({
      autoSave: newValue
    });
    
    // 保存到本地存储
    try {
      wx.setStorageSync('autoSave', newValue);
      wx.showToast({
        title: newValue ? '已开启自动保存' : '已关闭自动保存',
        icon: 'success',
        duration: 1500
      });
    } catch (error) {
      console.error('保存自动保存设置失败:', error);
    }
  },

  /**
   * 关注公众号
   */
  onFollowWechat() {
    wx.showModal({
      title: '关注公众号',
      content: '请关注我们的微信公众号"宾果世界"获取最新资讯和更多有趣的宾果游戏！',
      showCancel: true,
      cancelText: '取消',
      confirmText: '复制公众号名',
      success: (res) => {
        if (res.confirm) {
          wx.setClipboardData({
            data: '宾果世界',
            success: () => {
              wx.showToast({
                title: '已复制到剪贴板',
                icon: 'success'
              });
            }
          });
        }
      }
    });
  },

  /**
   * 反馈联系
   */
  onFeedback() {
    wx.showModal({
      title: '联系我们',
      content: '如有问题或建议，请通过以下方式联系我们：\n\n邮箱：feedback@bingoworld.com\n微信：BingoWorldTeam',
      showCancel: false,
      confirmText: '知道了'
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '宾果世界 - 设置',
      path: '/pages/settings/settings'
    };
  }
});
