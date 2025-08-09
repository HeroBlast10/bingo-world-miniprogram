/**
 * 用户管理工具模块 - 使用最新微信小程序登录规范
 * 处理用户登录、用户信息管理、会话状态等
 */

function UserManager() {
  this.userInfo = null;
  this.openid = null;
  this.sessionKey = null;
  this.token = null;
  this.isLoggedIn = false;
}

/**
 * 微信登录流程 - 使用最新规范
 * 1. 调用 wx.login 获取 code
 * 2. 将 code 发送到后端换取 openid 和 session_key
 * 3. 生成自定义登录态
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
          // 第二步：将 code 发送到后端（这里模拟后端处理）
          self.processLogin(loginRes.code)
            .then(function(result) {
              resolve(result);
            })
            .catch(function(error) {
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
 * 模拟后端登录处理
 * 在实际项目中，这里应该调用你的后端API
 * 后端会使用 code + appId + appSecret 调用 auth.code2Session 接口
 */
UserManager.prototype.processLogin = function(code) {
  const self = this;
  return new Promise((resolve, reject) => {
    console.log('处理登录，code:', code);
    
    // 模拟网络请求延迟
    setTimeout(function() {
      try {
        // 模拟后端调用 auth.code2Session 接口的结果
        // 实际项目中，这些数据应该从真实的后端API获取
        const mockOpenId = 'mock_openid_' + Date.now();
        const mockSessionKey = 'mock_session_key_' + Math.random().toString(36).substr(2, 9);
        const mockToken = 'mock_token_' + Math.random().toString(36).substr(2, 9);
        
        // 保存登录状态
        self.openid = mockOpenId;
        self.sessionKey = mockSessionKey;
        self.token = mockToken;
        self.isLoggedIn = true;
        
        // 创建默认用户信息（用户后续可以完善）
        self.userInfo = {
          nickName: '微信用户',
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
          openid: mockOpenId,
          sessionKey: mockSessionKey,
          token: mockToken,
          loginTime: Date.now(),
          isLoggedIn: true
        };
        
        wx.setStorageSync('loginData', loginData);
        wx.setStorageSync('userInfo', self.userInfo);
        
        console.log('登录成功，用户数据已保存:', loginData);
        
        resolve({
          success: true,
          userInfo: self.userInfo,
          openid: mockOpenId,
          token: mockToken,
          message: '登录成功'
        });
        
      } catch (error) {
        console.error('登录处理失败:', error);
        reject(new Error('登录处理失败'));
      }
    }, 800); // 模拟网络延迟
  });
};

/**
 * 更新用户头像
 * 使用新的头像选择能力
 */
UserManager.prototype.updateAvatar = function(avatarUrl) {
  if (!this.isLoggedIn) {
    return Promise.reject(new Error('用户未登录'));
  }

  var self = this;
  return new Promise(function(resolve, reject) {
    try {
      var finalUrl = avatarUrl || '/images/placeholder-user.jpg';

      // 立即更新内存中的 userInfo
      var updatedUserInfo = Object.assign({}, self.userInfo || {}, { avatarUrl: finalUrl });
      self.userInfo = updatedUserInfo;

      // 同步写入本地缓存
      var loginData = wx.getStorageSync('loginData') || {};
      loginData.userInfo = updatedUserInfo;
      wx.setStorageSync('loginData', loginData);
      wx.setStorageSync('userInfo', updatedUserInfo);

      console.log('用户头像更新成功, 持久化完成:', finalUrl);
      resolve({ success: true, avatarUrl: finalUrl, message: '头像更新成功' });
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
      // 检查登录是否过期（这里设置30天过期）
      const loginTime = loginData.loginTime || 0;
      const currentTime = Date.now();
      const thirtyDays = 30 * 24 * 60 * 60 * 1000;
      
      if (currentTime - loginTime < thirtyDays) {
        this.userInfo = loginData.userInfo;
        this.openid = loginData.openid;
        this.sessionKey = loginData.sessionKey;
        this.token = loginData.token;
        this.isLoggedIn = true;
        return true;
      } else {
        // 登录已过期，清除数据
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
  this.sessionKey = null;
  this.token = null;
  this.isLoggedIn = false;
  
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
  const isDefaultNickname = this.userInfo.nickName === '微信用户';
  
  return isDefaultAvatar || isDefaultNickname;
};

// 创建单例实例
const userManager = new UserManager();

module.exports = userManager;