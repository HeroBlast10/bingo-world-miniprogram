/**
 * 用户管理工具模块
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
 * 微信登录流程
 * 1. 调用 wx.login 获取 code
 * 2. 调用 wx.getUserProfile 获取用户信息
 * 3. 将 code 和用户信息发送到后端（模拟）
 */
UserManager.prototype.login = function() {
  const self = this;
  return new Promise((resolve, reject) => {
    // 检查是否在开发工具中
    const systemInfo = wx.getSystemInfoSync();
    const isDevTool = systemInfo.platform === 'devtools';
    
    if (isDevTool) {
      console.log('检测到开发工具环境，使用模拟登录');
      // 在开发工具中使用模拟登录
      self.mockLogin()
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
      return;
    }
    
    // 第一步：获取登录凭证
    wx.login({
      success: (loginRes) => {
        console.log('wx.login 成功，获取到 code:', loginRes.code);
        
        // 第二步：获取用户信息
        wx.getUserProfile({
          desc: '用于完善会员资料和提供个性化服务',
          success: (profileRes) => {
            console.log('wx.getUserProfile 成功:', profileRes);
            
            // 第三步：模拟后端登录处理
            self.processLogin(loginRes.code, profileRes.userInfo)
              .then((result) => {
                resolve(result);
              })
              .catch((error) => {
                reject(error);
              });
          },
          fail: (error) => {
            console.error('wx.getUserProfile 失败:', error);
            
            // 如果用户拒绝授权，提供友好的错误信息
            if (error.errMsg && error.errMsg.includes('cancel')) {
              reject(new Error('用户取消了授权，请重新尝试登录'));
            } else if (error.errMsg && error.errMsg.includes('deny')) {
              reject(new Error('用户拒绝了授权，请在设置中开启授权后重试'));
            } else {
              reject(new Error('获取用户信息失败，请检查网络连接后重试'));
            }
          }
        });
      },
      fail: (error) => {
        console.error('wx.login 失败:', error);
        reject(new Error('微信登录失败，请检查网络连接'));
      }
    });
  });
};

/**
 * 开发工具模拟登录
 */
UserManager.prototype.mockLogin = function() {
  const self = this;
  return new Promise((resolve, reject) => {
    console.log('执行模拟登录...');
    
    // 显示模拟登录确认框
    wx.showModal({
      title: '开发环境模拟登录',
      content: '检测到您在开发工具中，是否使用模拟用户信息登录？',
      confirmText: '确定登录',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm) {
          // 用户确认，使用模拟数据
          const mockUserInfo = {
            nickName: '开发测试用户',
            avatarUrl: '/images/placeholder-user.jpg',
            gender: 1,
            country: '中国',
            province: '北京',
            city: '北京',
            language: 'zh_CN'
          };
          
          self.processLogin('mock_code_dev', mockUserInfo)
            .then((result) => {
              resolve(result);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          // 用户取消
          reject(new Error('用户取消了模拟登录'));
        }
      },
      fail: () => {
        reject(new Error('模拟登录失败'));
      }
    });
  });
};

/**
 * 模拟后端登录处理
 * 在实际项目中，这里应该调用你的后端API
 */
UserManager.prototype.processLogin = function(code, userInfo) {
  const self = this;
  return new Promise((resolve, reject) => {
    // 模拟网络请求延迟
    setTimeout(() => {
      try {
        // 模拟后端处理逻辑
        // 1. 用 code + appId + appSecret 换取 openid 和 session_key
        // 2. 检查用户是否已存在，不存在则创建
        // 3. 生成自定义 token
        
        const mockOpenId = 'mock_openid_' + Date.now();
        const mockToken = 'mock_token_' + Math.random().toString(36).substr(2, 9);
        
        // 保存用户信息
        self.userInfo = userInfo;
        self.openid = mockOpenId;
        self.token = mockToken;
        self.isLoggedIn = true;
        
        // 保存到本地存储
        const loginData = {
          userInfo: userInfo,
          openid: mockOpenId,
          token: mockToken,
          loginTime: Date.now(),
          isLoggedIn: true
        };
        
        wx.setStorageSync('loginData', loginData);
        wx.setStorageSync('userInfo', userInfo);
        
        console.log('登录成功，用户数据已保存:', loginData);
        
        resolve({
          success: true,
          userInfo: userInfo,
          openid: mockOpenId,
          token: mockToken,
          message: '登录成功'
        });
        
      } catch (error) {
        console.error('登录处理失败:', error);
        reject(new Error('登录处理失败'));
      }
    }, 1000); // 模拟1秒的网络延迟
  });
};

/**
 * 检查登录状态
 */
UserManager.prototype.checkLoginStatus = function() {
  try {
    const loginData = wx.getStorageSync('loginData');
    if (loginData && loginData.isLoggedIn) {
      // 检查登录是否过期（这里设置7天过期）
      const loginTime = loginData.loginTime || 0;
      const currentTime = Date.now();
      const sevenDays = 7 * 24 * 60 * 60 * 1000;
      
      if (currentTime - loginTime < sevenDays) {
        this.userInfo = loginData.userInfo;
        this.openid = loginData.openid;
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
 * 更新用户昵称
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
  
  // 简单的敏感词过滤（可以扩展）
  const forbiddenWords = ['管理员', 'admin', '客服', '官方'];
  for (let i = 0; i < forbiddenWords.length; i++) {
    if (trimmedName.toLowerCase().includes(forbiddenWords[i])) {
      return Promise.reject(new Error('昵称包含敏感词，请重新输入'));
    }
  }
  
  const self = this;
  return new Promise((resolve, reject) => {
    // 模拟网络请求更新昵称
    setTimeout(() => {
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

// 创建单例实例
const userManager = new UserManager();

module.exports = userManager;