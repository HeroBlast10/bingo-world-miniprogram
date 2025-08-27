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
    wx.showModal({
      title: '加载失败',
      content: '在开发环境中web-view可能无法正常工作。\n\n是否复制链接到剪贴板？',
      showCancel: true,
      cancelText: '返回',
      confirmText: '复制链接',
      success: (res) => {
        if (res.confirm) {
          // 复制链接到剪贴板
          wx.setClipboardData({
            data: this.data.url,
            success: () => {
              wx.showToast({
                title: '链接已复制',
                icon: 'success'
              });
              setTimeout(() => {
                wx.navigateBack();
              }, 1500);
            }
          });
        } else {
          // 返回上一页
          wx.navigateBack();
        }
      }
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '宾果世界',
      path: `/pages/webview/webview?url=${encodeURIComponent(this.data.url)}&title=${encodeURIComponent('宾果世界')}`
    };
  }
});
