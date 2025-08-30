// pages/webview/webview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: '',
    forced: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('WebView页面参数:', options);

    // 从页面参数获取要显示的URL
    const url = decodeURIComponent(options.url || '');
    const title = decodeURIComponent(options.title || '网页浏览');
    const forced = options.forced === '1';

    console.log('解码后的URL:', url);
    console.log('页面标题:', title);
    console.log('强制模式:', forced);

    if (url) {
      // 验证URL格式
      if (url.startsWith('http://') || url.startsWith('https://')) {
        // 如果是强制模式，尝试修改URL以绕过域名限制
        let finalUrl = url;
        if (forced && url.includes('mp.weixin.qq.com')) {
          console.log('强制模式：尝试直接加载微信公众号链接');
          // 直接使用原URL，让WebView尝试加载
          finalUrl = url;
        }

        this.setData({
          url: finalUrl,
          forced: forced
        });
        console.log('最终URL设置成功:', finalUrl);
      } else {
        console.error('无效的URL格式:', url);
      }
    } else {
      console.error('URL为空');
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
    console.log('加载成功的URL:', this.data.url);
    wx.showToast({
      title: '页面加载成功',
      icon: 'success',
      duration: 1000
    });
  },

  /**
   * 网页加载失败
   */
  onWebViewError(e) {
    console.error('网页加载失败:', e);
    console.error('错误详情:', e.detail);
    console.error('当前URL:', this.data.url);
    console.error('强制模式:', this.data.forced);

    const errorMsg = e.detail?.errMsg || '';

    if (errorMsg.includes('not in domain list')) {
      console.error('域名未配置错误 - 需要在小程序后台配置业务域名');

      // 显示域名配置提示
      wx.showModal({
        title: '需要配置域名',
        content: '要使用WebView功能，需要在微信小程序后台配置业务域名：mp.weixin.qq.com\n\n请联系开发者配置后重试。',
        showCancel: false,
        confirmText: '知道了',
        success: () => {
          wx.navigateBack();
        }
      });
    } else {
      // 其他错误，尝试重新加载
      if (this.data.url && !this.retryCount) {
        this.retryCount = 1;
        console.log('尝试重新加载WebView...');
        setTimeout(() => {
          this.setData({
            url: this.data.url
          });
        }, 1000);
      }
    }
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
            title: '关注指引',
            content: '链接已复制到剪贴板\n\n使用方法：\n1. 在浏览器中粘贴打开\n2. 或直接在微信搜索"宾果世界"关注公众号',
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
