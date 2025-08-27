/**
 * API配置文件
 * 用于管理开发环境和生产环境的API配置
 */

// 环境配置
const ENV_CONFIG = {
  // 开发环境配置
  development: {
    apiBaseUrl: 'https://dev-api.your-domain.com', // 开发环境API地址
    enableMockMode: true, // 启用模拟模式
    enableDebugLog: true, // 启用调试日志
    requestTimeout: 10000 // 请求超时时间（毫秒）
  },
  
  // 生产环境配置
  production: {
    apiBaseUrl: 'https://api.your-domain.com', // 生产环境API地址
    enableMockMode: false, // 禁用模拟模式
    enableDebugLog: false, // 禁用调试日志
    requestTimeout: 8000 // 请求超时时间（毫秒）
  }
};

// 当前环境（需要手动切换）
// 开发时设置为 'development'，发布时设置为 'production'
const CURRENT_ENV = 'development';

// 获取当前环境配置
function getCurrentConfig() {
  const config = ENV_CONFIG[CURRENT_ENV];
  
  if (!config) {
    console.error('未找到环境配置:', CURRENT_ENV);
    return ENV_CONFIG.development; // 默认返回开发环境配置
  }
  
  return config;
}

// 导出配置
module.exports = {
  ENV_CONFIG,
  CURRENT_ENV,
  getCurrentConfig,
  
  // 便捷方法
  isDevelopment: () => CURRENT_ENV === 'development',
  isProduction: () => CURRENT_ENV === 'production',
  
  // API相关配置
  API_ENDPOINTS: {
    LOGIN: '/auth/login',
    USER_INFO: '/user/info',
    GAME_DATA: '/game/data',
    SHARE_RECORD: '/share/record'
  },
  
  // 微信相关配置
  WECHAT_CONFIG: {
    // 注意：这些配置仅用于前端，AppSecret 绝对不能放在这里
    APP_ID: 'your_app_id', // 需要替换为真实的 AppID
    SCOPE: {
      USER_INFO: 'scope.userInfo'
      // 移除了 USER_LOCATION，因为宾果游戏不需要位置信息
    }
  },
  
  // 缓存配置
  CACHE_CONFIG: {
    USER_INFO_KEY: 'userInfo',
    LOGIN_DATA_KEY: 'loginData',
    GAME_PROGRESS_KEY: 'gameProgress',
    EXPIRE_TIME: 30 * 24 * 60 * 60 * 1000 // 30天过期
  },
  
  // 错误码配置
  ERROR_CODES: {
    NETWORK_ERROR: 'NETWORK_ERROR',
    AUTH_FAILED: 'AUTH_FAILED',
    INVALID_PARAMS: 'INVALID_PARAMS',
    SERVER_ERROR: 'SERVER_ERROR'
  }
};
