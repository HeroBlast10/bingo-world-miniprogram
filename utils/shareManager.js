/**
 * 分享功能管理工具
 * 处理小程序内容分享到微信好友、群聊等
 */

function ShareManager() {
  // 构造函数
}

/**
 * 分享宾果游戏
 * @param {Object} gameData 游戏数据
 * @param {string} gameData.id 游戏ID
 * @param {string} gameData.title 游戏标题
 * @param {string} gameData.description 游戏描述
 * @param {string} gameData.category 游戏分类
 * @param {string} gameData.creator 创建者
 * @param {string} shareType 分享类型：'friend' | 'timeline' | 'group'
 */
ShareManager.prototype.shareBingoGame = function(gameData, shareType) {
  shareType = shareType || 'friend';
  const shareData = this.generateShareData(gameData, shareType);
  
  // 根据分享类型返回不同的分享配置
  switch (shareType) {
    case 'friend':
      return this.shareToFriend(shareData);
    case 'timeline':
      return this.shareToTimeline(shareData);
    case 'group':
      return this.shareToGroup(shareData);
    default:
      return this.shareToFriend(shareData);
  }
};

/**
 * 生成分享数据
 */
ShareManager.prototype.generateShareData = function(gameData, shareType) {
  const baseTitle = gameData.title || '有趣的宾果游戏';
  const baseDesc = gameData.description || '快来一起玩宾果游戏吧！';
  
  let title, desc, path, imageUrl;
  
  switch (shareType) {
    case 'friend':
      title = '📋 ' + baseTitle;
      desc = baseDesc + ' - 来自宾了个果';
      path = '/pages/game/game?id=' + gameData.id;
      break;
      
    case 'timeline':
      title = '我在「宾了个果」发现了一个有趣的' + gameData.category + '宾果游戏：' + baseTitle;
      desc = baseDesc;
      path = '/pages/game/game?id=' + gameData.id + '&from=timeline';
      break;
      
    case 'group':
      title = '🎯 一起来玩「' + baseTitle + '」宾果游戏';
      desc = baseDesc + ' 一起来点亮吧！';
      path = '/pages/game/game?id=' + gameData.id + '&from=group';
      break;
      
    default:
      title = baseTitle;
      desc = baseDesc;
      path = '/pages/game/game?id=' + gameData.id;
  }

  // 如果有自定义分享图片，使用自定义图片，否则使用默认图片
  imageUrl = gameData.shareImage || '/images/share-default.png';

  const self = this;
  return {
    title: title,
    desc: desc,
    path: path,
    imageUrl: imageUrl,
    success: function(res) {
      console.log('分享成功:', res);
      self.onShareSuccess(gameData, shareType);
    },
    fail: function(err) {
      console.error('分享失败:', err);
      self.onShareFail(gameData, shareType, err);
    }
  };
};

/**
 * 分享给好友
 */
ShareManager.prototype.shareToFriend = function(shareData) {
  return {
    title: shareData.title,
    path: shareData.path,
    imageUrl: shareData.imageUrl,
    success: shareData.success,
    fail: shareData.fail
  };
};

/**
 * 分享到朋友圈
 */
ShareManager.prototype.shareToTimeline = function(shareData) {
  return {
    title: shareData.title,
    query: shareData.path.split('?')[1] || '', // 提取query参数
    imageUrl: shareData.imageUrl,
    success: shareData.success,
    fail: shareData.fail
  };
};

/**
 * 分享到群聊
 */
ShareManager.prototype.shareToGroup = function(shareData) {
  return this.shareToFriend(shareData); // 群聊分享与好友分享相同
};

/**
 * 分享我的创建的宾果
 */
ShareManager.prototype.shareMyCreation = function(gameData) {
  const self = this;
  const shareData = {
    title: '🎨 我创建了一个「' + gameData.title + '」宾果游戏',
    path: '/pages/game/game?id=' + gameData.id + '&from=creator&creator=' + gameData.creator,
    imageUrl: gameData.shareImage || '/images/share-creation.png',
    success: function(res) {
      console.log('分享我的创作成功:', res);
      self.recordShareEvent('my_creation', gameData.id);
    },
    fail: function(err) {
      console.error('分享我的创作失败:', err);
    }
  };

  return shareData;
};

/**
 * 分享我的游戏成果
 */
ShareManager.prototype.shareMyProgress = function(gameData, completedCells) {
  const completionRate = Math.round((completedCells / 25) * 100);
  const self = this;
  
  const shareData = {
    title: '🏆 我在「' + gameData.title + '」中完成了' + completionRate + '%',
    path: '/pages/game/game?id=' + gameData.id + '&from=progress',
    imageUrl: gameData.progressImage || '/images/share-progress.png',
    success: function(res) {
      console.log('分享游戏进度成功:', res);
      self.recordShareEvent('game_progress', gameData.id);
    },
    fail: function(err) {
      console.error('分享游戏进度失败:', err);
    }
  };

  return shareData;
};

/**
 * 分享应用本身
 */
ShareManager.prototype.shareApp = function() {
  const self = this;
  return {
    title: '宾了个果 - 有趣的宾果游戏合集',
    path: '/pages/index/index',
    imageUrl: '/images/placeholder-logo.png',
    success: function(res) {
      console.log('分享应用成功:', res);
      self.recordShareEvent('app_share', 'main');
    },
    fail: function(err) {
      console.error('分享应用失败:', err);
    }
  };
};

/**
 * 分享应用到朋友圈
 */
ShareManager.prototype.shareAppToTimeline = function() {
  const self = this;
  return {
    title: '宾了个果 - 快来点亮各种有趣的宾果游戏！',
    query: '',
    imageUrl: '/images/placeholder-logo.png',
    success: function(res) {
      console.log('分享应用到朋友圈成功:', res);
      self.recordShareEvent('app_timeline_share', 'main');
    },
    fail: function(err) {
      console.error('分享应用到朋友圈失败:', err);
    }
  };
};

/**
 * 获取分享菜单配置
 */
ShareManager.prototype.getShareMenuConfig = function(gameData) {
  if (gameData) {
    return this.shareBingoGame(gameData, 'friend');
  } else {
    return this.shareApp();
  }
};

/**
 * 分享成功回调
 */
ShareManager.prototype.onShareSuccess = function(gameData, shareType) {
  // 记录分享事件
  this.recordShareEvent(shareType, gameData.id);
  
  // 显示成功提示
  wx.showToast({
    title: '分享成功',
    icon: 'success',
    duration: 2000
  });

  // 可以给用户一些奖励，比如积分等
  this.giveShareReward(gameData.id, shareType);
};

/**
 * 分享失败回调
 */
ShareManager.prototype.onShareFail = function(gameData, shareType, error) {
  console.error('分享失败 - 游戏: ' + gameData.id + ', 类型: ' + shareType, error);
  
  wx.showToast({
    title: '分享取消',
    icon: 'none',
    duration: 2000
  });
};

/**
 * 记录分享事件（用于数据统计）
 */
ShareManager.prototype.recordShareEvent = function(shareType, gameId) {
  try {
    const shareHistory = wx.getStorageSync('shareHistory') || [];
    const shareEvent = {
      type: shareType,
      gameId: gameId,
      timestamp: Date.now(),
      date: new Date().toISOString()
    };
    
    shareHistory.push(shareEvent);
    
    // 只保留最近100条分享记录
    if (shareHistory.length > 100) {
      shareHistory.splice(0, shareHistory.length - 100);
    }
    
    wx.setStorageSync('shareHistory', shareHistory);
    console.log('分享事件已记录:', shareEvent);
  } catch (error) {
    console.error('记录分享事件失败:', error);
  }
};

/**
 * 给予分享奖励
 */
ShareManager.prototype.giveShareReward = function(gameId, shareType) {
  // 这里可以实现分享奖励逻辑
  // 比如增加积分、解锁新内容等
  console.log('用户分享了游戏 ' + gameId + '，类型: ' + shareType + '，可以给予相应奖励');
};

/**
 * 获取分享历史
 */
ShareManager.prototype.getShareHistory = function() {
  try {
    return wx.getStorageSync('shareHistory') || [];
  } catch (error) {
    console.error('获取分享历史失败:', error);
    return [];
  }
};

/**
 * 获取分享统计
 */
ShareManager.prototype.getShareStats = function() {
  const history = this.getShareHistory();
  const stats = {
    total: history.length,
    today: 0,
    thisWeek: 0,
    thisMonth: 0,
    byType: {}
  };

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const thisWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  for (let i = 0; i < history.length; i++) {
    const event = history[i];
    const eventDate = new Date(event.timestamp);
    
    if (eventDate >= today) stats.today++;
    if (eventDate >= thisWeek) stats.thisWeek++;
    if (eventDate >= thisMonth) stats.thisMonth++;
    
    stats.byType[event.type] = (stats.byType[event.type] || 0) + 1;
  }

  return stats;
};

// 创建单例实例
const shareManager = new ShareManager();

module.exports = shareManager;