// pages/settings/settings.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selectedColor: 'coral',
    notifications: true,
    autoSave: true,
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
    // 使用完整的微信公众号文章URL
    const url = 'https://mp.weixin.qq.com/s/70aqUQcqzGGnJj5r93jSuQ';
    const title = '宾果世界';

    console.log('准备打开公众号链接:', url);

    // 直接跳转到WebView页面
    this.openWebView(url, title);
  },

  /**
   * 打开WebView页面
   */
  openWebView(url, title) {
    console.log('打开WebView:', url);
    console.log('页面标题:', title);

    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const navigateUrl = `/pages/webview/webview?url=${encodedUrl}&title=${encodedTitle}`;

    console.log('编码后的URL:', encodedUrl);
    console.log('导航URL:', navigateUrl);

    wx.navigateTo({
      url: navigateUrl,
      success: () => {
        console.log('成功跳转到WebView页面');
      },
      fail: (error) => {
        console.error('跳转WebView失败:', error);
      }
    });
  },

  /**
   * 复制链接到剪贴板
   */
  copyLinkToClipboard(url) {
    wx.setClipboardData({
      data: url,
      success: () => {
        wx.showToast({
          title: '链接已复制',
          icon: 'success',
          duration: 2000
        });

        // 显示使用提示
        setTimeout(() => {
          wx.showModal({
            title: '关注指引',
            content: '链接已复制到剪贴板\n\n使用方法：\n1. 在浏览器中粘贴打开\n2. 或直接在微信搜索"宾果世界"关注公众号',
            showCancel: false,
            confirmText: '知道了'
          });
        }, 2200);
      },
      fail: (error) => {
        console.error('复制失败:', error);
        wx.showToast({
          title: '复制失败',
          icon: 'none',
          duration: 2000
        });
      }
    });
  },

  /**
   * 反馈联系
   */
  onFeedback() {
    wx.showModal({
      title: '联系我们',
      content: '如有问题或建议，\n\n请通过以下方式联系我们：\n\n公众号"宾果世界"\n\n邮箱：binlegeguo@163.com',
      showCancel: false,
      confirmText: '知道了'
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '宾了个果 - 设置',
      path: '/pages/settings/settings'
    };
  },

  /**
   * 用户分享到朋友圈
   */
  onShareTimeline() {
    return {
      title: '宾了个果 - 快来点亮各种有趣的宾果游戏！',
      query: '',
      imageUrl: '/images/placeholder-logo.png'
    };
  }
});
