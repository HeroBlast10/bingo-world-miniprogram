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
    isAnonymous: true,
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
    ],
    isChoosingAvatar: false
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
      const isAnonymous = userManager.isAnonymousUser();
      console.log('用户已登录:', userInfo, '匿名用户:', isAnonymous);

      // 确保userInfo有完整的数据
      if (userInfo) {
        this.setData({
          userInfo: {
            nickName: userInfo.nickName || (isAnonymous ? '游客用户' : '微信用户'),
            avatarUrl: userInfo.avatarUrl || '/images/placeholder-user.jpg',
            gender: userInfo.gender || 0,
            country: userInfo.country || '',
            province: userInfo.province || '',
            city: userInfo.city || '',
            language: userInfo.language || 'zh_CN'
          },
          hasUserInfo: true,
          isAnonymous: isAnonymous
        });
      } else {
        this.setData({
          userInfo: null,
          hasUserInfo: false,
          isAnonymous: true
        });
      }
    } else {
      console.log('用户未登录');
      this.setData({
        userInfo: null,
        hasUserInfo: false,
        isAnonymous: true
      });
    }
  },

  /**
   * 微信授权登录 - 使用最新规范
   */
  async login() {
    if (this.data.isLoading) return;

    this.setData({ isLoading: true });

    try {
      const app = getApp();
      const userManager = app.getUserManager();

      // 调用新的登录方法
      const result = await userManager.login();

      if (result.success) {
        // 确保用户信息完整
        const userInfo = {
          nickName: result.userInfo.nickName || (result.isAnonymous ? '游客用户' : '微信用户'),
          avatarUrl: result.userInfo.avatarUrl || '/images/placeholder-user.jpg',
          gender: result.userInfo.gender || 0,
          country: result.userInfo.country || '',
          province: result.userInfo.province || '',
          city: result.userInfo.city || '',
          language: result.userInfo.language || 'zh_CN'
        };

        this.setData({
          userInfo: userInfo,
          hasUserInfo: true,
          isLoading: false,
          isAnonymous: result.isAnonymous || false
        });

        // 重新加载统计数据
        this.loadStats();

        // 显示登录结果
        wx.showToast({
          title: '登录成功',
          icon: 'success',
          duration: 2000
        });

        // 检查是否需要完善个人信息
        if (userManager.needCompleteProfile()) {
          setTimeout(() => {
            this.showCompleteProfileTip();
          }, 2500);
        }
      }
    } catch (error) {
      console.error('登录失败:', error);
      this.setData({ isLoading: false });

      wx.showToast({
        title: error.message || '登录失败',
        icon: 'none',
        duration: 3000
      });
    }
  },

  /**
   * 显示完善个人信息提示
   */
  showCompleteProfileTip() {
    wx.showModal({
      title: '完善个人信息',
      content: '建议您完善头像和昵称，获得更好的使用体验',
      confirmText: '去完善',
      cancelText: '稍后再说',
      success: (res) => {
        if (res.confirm) {
          // 用户选择完善信息，这里可以引导到个人信息编辑页面
          // 暂时显示提示
          wx.showToast({
            title: '点击头像或昵称即可修改',
            icon: 'none',
            duration: 2000
          });
        }
      }
    });
  },



  /**
   * 选择头像 - 使用新规范
   */
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail;
    console.log('选择头像:', avatarUrl);

    const app = getApp();
    const userManager = app.getUserManager();

    if (!userManager.getLoginStatus()) {
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      });
      return;
    }

    // 更新头像
    userManager.updateAvatar(avatarUrl)
      .then((result) => {
        if (result.success) {
          // 更新页面显示
          this.setData({
            'userInfo.avatarUrl': result.avatarUrl
          });

          wx.showToast({
            title: result.message,
            icon: 'success'
          });
        }
      })
      .catch((error) => {
        console.error('更新头像失败:', error);
        wx.showToast({
          title: error.message || '更新头像失败',
          icon: 'none'
        });
      });
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
   * 选择头像 - 使用新的头像选择能力
   */
  async onChooseAvatar(e) {
    if (this.data.isChoosingAvatar) return;
    this.setData({ isChoosingAvatar: true });

    try {
      const avatarUrl = (e && e.detail && e.detail.avatarUrl) ? e.detail.avatarUrl : '';
      if (!avatarUrl) {
        throw new Error('未获取到头像临时路径');
      }

      // 有些开发者工具会在极短时间内清理 tmp，尝试立即持久化到本地
      // 这里我们直接用临时路径更新 UI，并调用 userManager 持久化
      await this.updateAvatar(avatarUrl);

    } catch (err) {
      console.error('选择头像失败:', err);
      wx.showToast({ title: '选择头像失败，请重试', icon: 'none' });
    } finally {
      this.setData({ isChoosingAvatar: false });
    }
  },

  /**
   * 更新用户头像
   */
  async updateAvatar(avatarUrl) {
    wx.showLoading({
      title: '更新头像中...',
      mask: true
    });

    try {
      const app = getApp();
      const userManager = app.getUserManager();

      // 调用 userManager 更新（其中会把值写入本地缓存）
      const result = await userManager.updateAvatar(avatarUrl);

      if (result.success) {
        const updatedUserInfo = Object.assign({}, this.data.userInfo || {}, {
          avatarUrl: result.avatarUrl || avatarUrl
        });
        this.setData({ userInfo: updatedUserInfo });
        wx.hideLoading();
        wx.showToast({ title: '头像已更新', icon: 'success' });
      } else {
        throw new Error(result.message || '更新失败');
      }
    } catch (error) {
      wx.hideLoading();
      console.error('更新头像失败:', error);
      wx.showToast({ title: '头像更新失败', icon: 'none' });
    }
  },

  /**
   * 头像加载失败兜底
   */
  onAvatarError() {
    const fallback = '/images/placeholder-user.jpg';
    if (this.data.userInfo && this.data.userInfo.avatarUrl !== fallback) {
      this.setData({
        userInfo: Object.assign({}, this.data.userInfo, { avatarUrl: fallback })
      });
    }
  },

  /**
   * 头像长按兜底：使用 chooseImage 选择图片作为头像
   */
  onAvatarLongPress() {
    const that = this;
    if (this.data.isChoosingAvatar) return;
    this.setData({ isChoosingAvatar: true });

    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const path = (res.tempFilePaths && res.tempFilePaths[0]) || '';
        if (path) {
          that.updateAvatar(path);
        } else {
          wx.showToast({ title: '未选择图片', icon: 'none' });
        }
      },
      fail(err) {
        console.error('chooseImage 失败:', err);
        wx.showToast({ title: '选择失败，请重试', icon: 'none' });
      },
      complete() {
        that.setData({ isChoosingAvatar: false });
      }
    });
  },

  /**
   * 编辑用户昵称 - 使用新的昵称填写能力
   */
  editNickName() {
    if (!this.data.hasUserInfo) {
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      });
      return;
    }

    // 不再使用 showModal，而是引导用户使用专门的昵称输入
    wx.showModal({
      title: '修改昵称',
      content: '请使用下方的昵称输入框来修改您的昵称',
      showCancel: false,
      confirmText: '知道了'
    });
  },

  /**
   * 昵称输入完成
   */
  onNicknameBlur(e) {
    const newNickName = e.detail.value;
    if (newNickName && newNickName.trim() !== '' && newNickName !== this.data.userInfo.nickName) {
      this.updateNickName(newNickName);
    }
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
    const app = getApp();
    const shareManager = app.getShareManager();
    return shareManager.shareApp();
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