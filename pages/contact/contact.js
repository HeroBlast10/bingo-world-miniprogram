// pages/contact/contact.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    formData: {
      email: '',
      title: '',
      content: ''
    },
    images: [],
    isSubmitting: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 设置导航栏标题
    wx.setNavigationBarTitle({
      title: '联系我们'
    });
  },

  /**
   * 邮箱输入
   */
  onEmailInput(e) {
    this.setData({
      'formData.email': e.detail.value
    });
  },

  /**
   * 标题输入
   */
  onTitleInput(e) {
    this.setData({
      'formData.title': e.detail.value
    });
  },

  /**
   * 内容输入
   */
  onContentInput(e) {
    this.setData({
      'formData.content': e.detail.value
    });
  },

  /**
   * 选择图片
   */
  onChooseImage() {
    const remainingCount = 3 - this.data.images.length;
    
    wx.chooseMedia({
      count: remainingCount,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success: (res) => {
        const tempFiles = res.tempFiles.map(file => file.tempFilePath);
        const newImages = [...this.data.images, ...tempFiles];
        
        this.setData({
          images: newImages
        });
      },
      fail: (error) => {
        console.error('选择图片失败:', error);
        wx.showToast({
          title: '选择图片失败',
          icon: 'none'
        });
      }
    });
  },

  /**
   * 删除图片
   */
  onDeleteImage(e) {
    const index = e.currentTarget.dataset.index;
    const images = [...this.data.images];
    images.splice(index, 1);
    
    this.setData({
      images: images
    });
  },

  /**
   * 预览图片
   */
  onPreviewImage(e) {
    const index = e.currentTarget.dataset.index;
    
    wx.previewImage({
      current: this.data.images[index],
      urls: this.data.images
    });
  },

  /**
   * 验证表单
   */
  validateForm() {
    const { email, title, content } = this.data.formData;
    
    if (!email.trim()) {
      wx.showToast({
        title: '请输入邮箱地址',
        icon: 'none'
      });
      return false;
    }
    
    // 简单的邮箱格式验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      wx.showToast({
        title: '请输入有效的邮箱地址',
        icon: 'none'
      });
      return false;
    }
    
    if (!title.trim()) {
      wx.showToast({
        title: '请输入标题',
        icon: 'none'
      });
      return false;
    }
    
    if (!content.trim()) {
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      });
      return false;
    }
    
    if (content.trim().length < 10) {
      wx.showToast({
        title: '内容至少需要10个字符',
        icon: 'none'
      });
      return false;
    }
    
    return true;
  },

  /**
   * 提交表单
   */
  async onSubmit() {
    if (!this.validateForm()) {
      return;
    }
    
    this.setData({
      isSubmitting: true
    });
    
    try {
      // 这里应该调用后端API提交数据
      // 目前先模拟提交成功
      await this.simulateSubmit();
      
      wx.showToast({
        title: '提交成功',
        icon: 'success'
      });
      
      // 清空表单
      this.setData({
        formData: {
          email: '',
          title: '',
          content: ''
        },
        images: []
      });
      
      // 延迟返回上一页
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
      
    } catch (error) {
      console.error('提交失败:', error);
      wx.showToast({
        title: '提交失败，请重试',
        icon: 'none'
      });
    } finally {
      this.setData({
        isSubmitting: false
      });
    }
  },

  /**
   * 模拟提交（实际项目中应该调用真实的API）
   */
  simulateSubmit() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('提交的数据:', {
          formData: this.data.formData,
          images: this.data.images
        });
        resolve();
      }, 2000);
    });
  },

  /**
   * 关注公众号
   */
  onFollowWechat() {
    const url = 'https://mp.weixin.qq.com/s/70aqUQcqzGGnJj5r93jSuQ';
    
    // 使用微信内置的公众号文章打开方式
    if (wx.openOfficialAccountArticle) {
      wx.openOfficialAccountArticle({
        url: url,
        success: () => {
          console.log('使用内置方式打开公众号文章成功');
        },
        fail: (error) => {
          console.log('内置方式失败，使用WebView:', error);
          this.openWebViewForced(url);
        }
      });
    } else {
      console.log('不支持内置方式，直接使用WebView');
      this.openWebViewForced(url);
    }
  },

  /**
   * 强制使用WebView打开链接
   */
  openWebViewForced(url) {
    const title = '宾果世界';
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const navigateUrl = `/pages/webview/webview?url=${encodedUrl}&title=${encodedTitle}&forced=1`;
    
    wx.navigateTo({
      url: navigateUrl,
      fail: (error) => {
        console.error('跳转WebView失败:', error);
      }
    });
  },

  /**
   * 复制邮箱地址
   */
  onCopyEmail() {
    wx.setClipboardData({
      data: 'binlegeguo@163.com',
      success: () => {
        wx.showToast({
          title: '邮箱地址已复制',
          icon: 'success'
        });
      },
      fail: () => {
        wx.showToast({
          title: '复制失败',
          icon: 'none'
        });
      }
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '宾了个果 - 联系我们',
      path: '/pages/contact/contact'
    };
  }
});
