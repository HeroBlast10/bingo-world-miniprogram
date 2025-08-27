/**
 * 用户管理工具模块 - 使用最新微信小程序登录规范
 * 处理用户登录、用户信息管理、会话状态等
 *
 * 重要说明：
 * 1. 本模块遵循微信小程序最新登录规范
 * 2. 不在客户端存储 session_key（安全考虑）
 * 3. 使用新的用户信息获取方式
 * 4. 支持匿名登录和实名登录两种模式
 */

// 引入API配置
const apiConfig = require('../config/api-config.js');

function UserManager() {
  this.userInfo = null;
  this.openid = null;
  this.token = null; // 自定义登录态
  this.isLoggedIn = false;
  this.isAnonymous = false; // 移除匿名用户支持

  // 使用配置文件中的设置
  this.config = apiConfig.getCurrentConfig();

  // 输出当前配置信息（仅在开发模式）
  if (this.config.enableDebugLog) {
    console.log('UserManager 配置:', {
      environment: apiConfig.CURRENT_ENV,
      apiBaseUrl: this.config.apiBaseUrl,
      enableMockMode: this.config.enableMockMode
    });
  }
}

/**
 * 微信登录流程 - 使用最新规范
 * 1. 调用 wx.login 获取 code
 * 2. 将 code 发送到后端换取 openid（不获取 session_key 到客户端）
 * 3. 生成自定义登录态
 * 4. 支持匿名登录模式
 */
UserManager.prototype.login = function() {
  const self = this;
  return new Promise((resolve, reject) => {
    console.log('开始微信登录流程...');

    // 第一步：获取登录凭证 code
    wx.login({
      success: function(loginRes) {
        console.log('wx.login 成功，获取到 code:', loginRes.code);

        if (loginRes.code) {
          // 第二步：将 code 发送到后端
          self.processLogin(loginRes.code)
            .then(function(result) {
              resolve(result);
            })
            .catch(function(error) {
              console.error('登录失败:', error);
              reject(error);
            });
        } else {
          console.error('wx.login 未获取到 code');
          reject(new Error('登录失败，未获取到登录凭证'));
        }
      },
      fail: function(error) {
        console.error('wx.login 失败:', error);
        reject(new Error('微信登录失败，请检查网络连接'));
      }
    });
  });
};

/**
 * 处理后端登录
 * 在实际项目中，这里应该调用真实的后端API
 * 后端会使用 code + appId + appSecret 调用 auth.code2Session 接口
 */
UserManager.prototype.processLogin = function(code) {
  const self = this;
  return new Promise((resolve, reject) => {
    console.log('处理登录，code:', code);

    if (this.config.enableMockMode) {
      // 开发模式：使用模拟数据
      this.mockLogin(code).then(resolve).catch(reject);
    } else {
      // 生产模式：调用真实后端API
      this.realLogin(code).then(resolve).catch(reject);
    }
  });
};

/**
 * 真实后端登录（生产环境使用）
 */
UserManager.prototype.realLogin = function(code) {
  const self = this;
  const apiConfig = require('../config/api-config.js');

  return new Promise((resolve, reject) => {
    wx.request({
      url: `${this.config.apiBaseUrl}${apiConfig.API_ENDPOINTS.LOGIN}`,
      method: 'POST',
      timeout: this.config.requestTimeout,
      data: {
        code: code,
        appType: 'miniprogram'
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        if (res.statusCode === 200 && res.data.success) {
          const { openid, token, userInfo } = res.data.data;

          // 保存登录状态（注意：不保存 session_key）
          self.openid = openid;
          self.token = token;
          self.isLoggedIn = true;
          self.isAnonymous = false;

          // 创建默认用户信息
          self.userInfo = userInfo || {
            nickName: '微信用户',
            avatarUrl: '/images/placeholder-user.jpg',
            gender: 0,
            country: '',
            province: '',
            city: '',
            language: 'zh_CN'
          };

          // 保存到本地存储（不包含敏感信息）
          const loginData = {
            userInfo: self.userInfo,
            openid: openid,
            token: token,
            loginTime: Date.now(),
            isLoggedIn: true,
            isAnonymous: false
          };

          wx.setStorageSync('loginData', loginData);
          wx.setStorageSync('userInfo', self.userInfo);

          console.log('真实登录成功:', { openid, token });

          resolve({
            success: true,
            userInfo: self.userInfo,
            openid: openid,
            token: token,
            message: '登录成功'
          });
        } else {
          reject(new Error(res.data.message || '登录失败'));
        }
      },
      fail: function(error) {
        console.error('后端登录请求失败:', error);
        reject(new Error('网络请求失败'));
      }
    });
  });
};

/**
 * 模拟登录（开发环境使用）
 */
UserManager.prototype.mockLogin = function(code) {
  const self = this;
  return new Promise((resolve, reject) => {
    // 模拟网络请求延迟
    setTimeout(function() {
      try {
        // 生成模拟数据（不包含真实的 openid 和 session_key）
        const mockOpenId = 'mock_openid_' + Date.now();
        const mockToken = 'mock_token_' + Math.random().toString(36).substr(2, 9);

        // 保存登录状态
        self.openid = mockOpenId;
        self.token = mockToken;
        self.isLoggedIn = true;
        self.isAnonymous = false;

        // 创建默认用户信息
        self.userInfo = {
          nickName: '微信用户',
          avatarUrl: '/images/placeholder-user.jpg',
          gender: 0,
          country: '',
          province: '',
          city: '',
          language: 'zh_CN'
        };

        // 保存到本地存储（安全的数据）
        const loginData = {
          userInfo: self.userInfo,
          openid: mockOpenId,
          token: mockToken,
          loginTime: Date.now(),
          isLoggedIn: true,
          isAnonymous: false
        };

        wx.setStorageSync('loginData', loginData);
        wx.setStorageSync('userInfo', self.userInfo);

        console.log('模拟登录成功:', loginData);

        resolve({
          success: true,
          userInfo: self.userInfo,
          openid: mockOpenId,
          token: mockToken,
          message: '登录成功（开发模式）'
        });

      } catch (error) {
        console.error('模拟登录失败:', error);
        reject(new Error('登录处理失败'));
      }
    }, 800); // 模拟网络延迟
  });
};

/**
 * 匿名登录
 * 当微信登录失败时的降级方案
 */
UserManager.prototype.anonymousLogin = function() {
  const self = this;
  return new Promise((resolve, reject) => {
    try {
      console.log('使用匿名登录模式');

      // 生成匿名用户标识
      const anonymousId = 'anonymous_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      const anonymousToken = 'anon_token_' + Math.random().toString(36).substr(2, 9);

      // 设置匿名登录状态
      self.openid = anonymousId;
      self.token = anonymousToken;
      self.isLoggedIn = true;
      self.isAnonymous = true;

      // 创建匿名用户信息
      self.userInfo = {
        nickName: '游客用户',
        avatarUrl: '/images/placeholder-user.jpg',
        gender: 0,
        country: '',
        province: '',
        city: '',
        language: 'zh_CN'
      };

      // 保存到本地存储
      const loginData = {
        userInfo: self.userInfo,
        openid: anonymousId,
        token: anonymousToken,
        loginTime: Date.now(),
        isLoggedIn: true,
        isAnonymous: true
      };

      wx.setStorageSync('loginData', loginData);
      wx.setStorageSync('userInfo', self.userInfo);

      console.log('匿名登录成功:', loginData);

      resolve({
        success: true,
        userInfo: self.userInfo,
        openid: anonymousId,
        token: anonymousToken,
        isAnonymous: true,
        message: '匿名登录成功'
      });

    } catch (error) {
      console.error('匿名登录失败:', error);
      reject(new Error('匿名登录失败'));
    }
  });
};

/**
 * 使用新规范选择头像
 * 使用 button open-type="chooseAvatar" 方式
 */
UserManager.prototype.chooseAvatar = function() {
  const self = this;
  return new Promise((resolve, reject) => {
    // 这个方法需要配合 WXML 中的 button open-type="chooseAvatar" 使用
    // 这里只是提供接口，实际的头像选择在页面中处理
    reject(new Error('请使用页面中的头像选择按钮'));
  });
};

/**
 * 更新用户头像
 * 处理从头像选择组件获取的头像
 */
UserManager.prototype.updateAvatar = function(avatarUrl) {
  if (!this.isLoggedIn) {
    return Promise.reject(new Error('用户未登录'));
  }

  const self = this;
  return new Promise((resolve, reject) => {
    try {
      const finalUrl = avatarUrl || '/images/placeholder-user.jpg';

      // 立即更新内存中的 userInfo
      const updatedUserInfo = Object.assign({}, self.userInfo || {}, { avatarUrl: finalUrl });
      self.userInfo = updatedUserInfo;

      // 同步写入本地缓存
      const loginData = wx.getStorageSync('loginData') || {};
      loginData.userInfo = updatedUserInfo;
      loginData.isAnonymous = self.isAnonymous;
      wx.setStorageSync('loginData', loginData);
      wx.setStorageSync('userInfo', updatedUserInfo);

      console.log('用户头像更新成功:', finalUrl);

      // 如果是匿名用户，提示升级为正式用户
      if (self.isAnonymous) {
        console.log('匿名用户更新头像，建议升级为正式用户');
      }

      resolve({
        success: true,
        avatarUrl: finalUrl,
        message: '头像更新成功',
        isAnonymous: self.isAnonymous
      });
    } catch (error) {
      console.error('更新头像失败:', error);
      reject(new Error('更新头像失败'));
    }
  });
};

/**
 * 更新用户昵称
 * 使用新的昵称填写能力
 */
UserManager.prototype.updateNickName = function(newNickName) {
  if (!this.isLoggedIn) {
    return Promise.reject(new Error('用户未登录'));
  }
  
  if (!newNickName || newNickName.trim() === '') {
    return Promise.reject(new Error('昵称不能为空'));
  }
  
  // 验证昵称长度和内容
  const trimmedName = newNickName.trim();
  if (trimmedName.length > 20) {
    return Promise.reject(new Error('昵称不能超过20个字符'));
  }
  
  const self = this;
  return new Promise((resolve, reject) => {
    // 模拟网络请求更新昵称
    setTimeout(function() {
      try {
        // 更新用户信息
        const updatedUserInfo = Object.assign({}, self.userInfo, {
          nickName: trimmedName
        });
        
        const success = self.updateUserInfo(updatedUserInfo);
        if (success) {
          console.log('用户昵称更新成功:', trimmedName);
          resolve({
            success: true,
            nickName: trimmedName,
            message: '昵称修改成功'
          });
        } else {
          reject(new Error('更新用户信息失败'));
        }
      } catch (error) {
        console.error('更新昵称失败:', error);
        reject(new Error('更新昵称失败'));
      }
    }, 500); // 模拟网络延迟
  });
};

/**
 * 检查登录状态
 */
UserManager.prototype.checkLoginStatus = function() {
  try {
    const loginData = wx.getStorageSync('loginData');
    if (loginData && loginData.isLoggedIn) {
      // 检查登录是否过期（匿名用户7天，正式用户30天）
      const loginTime = loginData.loginTime || 0;
      const currentTime = Date.now();
      const isAnonymous = loginData.isAnonymous || false;
      const expireTime = isAnonymous ? 7 * 24 * 60 * 60 * 1000 : 30 * 24 * 60 * 60 * 1000;

      if (currentTime - loginTime < expireTime) {
        this.userInfo = loginData.userInfo;
        this.openid = loginData.openid;
        this.token = loginData.token;
        this.isLoggedIn = true;
        this.isAnonymous = isAnonymous;
        return true;
      } else {
        // 登录已过期，清除数据
        console.log('登录已过期，清除登录状态');
        this.logout();
        return false;
      }
    }
    return false;
  } catch (error) {
    console.error('检查登录状态失败:', error);
    return false;
  }
};

/**
 * 获取用户信息
 */
UserManager.prototype.getUserInfo = function() {
  if (this.isLoggedIn && this.userInfo) {
    return this.userInfo;
  }
  
  // 尝试从缓存获取
  const loginData = wx.getStorageSync('loginData');
  if (loginData && loginData.userInfo) {
    return loginData.userInfo;
  }
  
  return null;
};

/**
 * 获取用户唯一标识
 */
UserManager.prototype.getOpenId = function() {
  return this.openid;
};

/**
 * 获取登录token
 */
UserManager.prototype.getToken = function() {
  return this.token;
};

/**
 * 登出
 */
UserManager.prototype.logout = function() {
  this.userInfo = null;
  this.openid = null;
  this.token = null;
  this.isLoggedIn = false;
  this.isAnonymous = true;

  // 清除本地存储
  wx.removeStorageSync('loginData');
  wx.removeStorageSync('userInfo');

  console.log('用户已登出');
};

/**
 * 获取登录状态
 */
UserManager.prototype.getLoginStatus = function() {
  return this.isLoggedIn;
};

/**
 * 静默登录（尝试使用缓存的登录信息）
 */
UserManager.prototype.silentLogin = function() {
  return this.checkLoginStatus();
};

/**
 * 更新用户信息
 */
UserManager.prototype.updateUserInfo = function(newUserInfo) {
  if (this.isLoggedIn) {
    this.userInfo = Object.assign({}, this.userInfo, newUserInfo);
    
    // 更新本地存储
    const loginData = wx.getStorageSync('loginData') || {};
    loginData.userInfo = this.userInfo;
    wx.setStorageSync('loginData', loginData);
    wx.setStorageSync('userInfo', this.userInfo);
    
    return true;
  }
  return false;
};

/**
 * 检查是否需要完善个人信息
 */
UserManager.prototype.needCompleteProfile = function() {
  if (!this.isLoggedIn || !this.userInfo) {
    return true;
  }

  // 检查是否使用默认头像和昵称
  const isDefaultAvatar = this.userInfo.avatarUrl === '/images/placeholder-user.jpg';
  const isDefaultNickname = this.userInfo.nickName === '微信用户' || this.userInfo.nickName === '游客用户';

  return isDefaultAvatar || isDefaultNickname;
};

/**
 * 检查是否为匿名用户
 */
UserManager.prototype.isAnonymousUser = function() {
  return this.isAnonymous;
};

/**
 * 升级匿名用户为正式用户
 * 重新进行微信登录流程
 */
UserManager.prototype.upgradeToRealUser = function() {
  const self = this;
  return new Promise((resolve, reject) => {
    console.log('开始升级匿名用户为正式用户');

    // 保存当前的用户信息（头像、昵称等）
    const currentUserInfo = this.userInfo ? { ...this.userInfo } : null;

    // 重新进行微信登录
    this.login()
      .then((result) => {
        // 如果升级成功，合并之前的用户信息
        if (result.success && !result.isAnonymous && currentUserInfo) {
          const mergedUserInfo = {
            ...result.userInfo,
            nickName: currentUserInfo.nickName !== '游客用户' ? currentUserInfo.nickName : result.userInfo.nickName,
            avatarUrl: currentUserInfo.avatarUrl !== '/images/placeholder-user.jpg' ? currentUserInfo.avatarUrl : result.userInfo.avatarUrl
          };

          // 更新用户信息
          this.updateUserInfo(mergedUserInfo);

          resolve({
            ...result,
            message: '升级为正式用户成功',
            mergedUserInfo: mergedUserInfo
          });
        } else {
          resolve(result);
        }
      })
      .catch(reject);
  });
};

/**
 * 获取用户类型描述
 */
UserManager.prototype.getUserTypeDescription = function() {
  if (!this.isLoggedIn) {
    return '未登录';
  }
  return this.isAnonymous ? '游客用户' : '微信用户';
};

// 创建单例实例
const userManager = new UserManager();

module.exports = userManager;