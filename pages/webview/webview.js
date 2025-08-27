// pages/webview/webview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 从页面参数获取要显示的URL
    const url = decodeURIComponent(options.url || '');
    const title = decodeURIComponent(options.title || '网页浏览');
    
    if (url) {
      this.setData({
        url: url
      });
    }
    
    // 设置导航栏标题
    wx.setNavigationBarTitle({
      title: title
    });
  },

  /**
   * 网页加载完成
   */
  onWebViewLoad(e) {
    console.log('网页加载完成:', e);
  },

  /**
   * 网页加载失败
   */
  onWebViewError(e) {
    console.error('网页加载失败:', e);

    // 延迟显示错误提示，避免与页面加载冲突
    setTimeout(() => {
      wx.showModal({
        title: '页面加载失败',
        content: '可能的原因：\n• 网络连接问题\n• 开发环境限制\n• 域名未配置\n\n建议复制链接在浏览器中打开',
        showCancel: true,
        cancelText: '返回',
        confirmText: '复制链接',
        success: (res) => {
          if (res.confirm) {
            // 复制链接到剪贴板
            this.copyLinkAndBack();
          } else {
            // 返回上一页
            wx.navigateBack();
          }
        }
      });
    }, 1000);
  },

  /**
   * 复制链接并返回
   */
  copyLinkAndBack() {
    wx.setClipboardData({
      data: this.data.url,
      success: () => {
        wx.showToast({
          title: '链接已复制',
          icon: 'success',
          duration: 2000
        });

        // 显示使用提示
        setTimeout(() => {
          wx.showModal({
            title: '使用提示',
            content: '链接已复制到剪贴板\n\n请在浏览器中粘贴打开，或在微信中搜索"宾果世界"公众号关注',
            showCancel: false,
            confirmText: '知道了',
            success: () => {
              wx.navigateBack();
            }
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
        setTimeout(() => {
          wx.navigateBack();
        }, 2200);
      }
    });
  },

  /**
   * 返回上一页
   */
  goBack() {
    wx.navigateBack();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '宾果世界',
      path: `/pages/webview/webview?url=${encodeURIComponent(this.data.url)}&title=${encodeURIComponent('宾果世界')}`
    };
  },

  /**
   * 用户分享到朋友圈
   */
  onShareTimeline() {
    return {
      title: '宾果世界 - 有趣的宾果游戏合集',
      query: `url=${encodeURIComponent(this.data.url)}&title=${encodeURIComponent('宾果世界')}`,
      imageUrl: '/images/placeholder-logo.png'
    };
  }
});
