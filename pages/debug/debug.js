// pages/debug/debug.js
const { getAllCategories, getGamesByCategory } = require('../../utils/bingoData.js');

Page({
  data: {
    debugInfo: []
  },

  onLoad() {
    this.runDebugTests();
  },

  runDebugTests() {
    const debugInfo = [];
    
    try {
      // 测试获取所有分类
      const categories = getAllCategories();
      debugInfo.push(`分类数量: ${categories.length}`);
      debugInfo.push(`分类列表: ${categories.join(', ')}`);
      
      // 测试每个分类的游戏数量
      categories.forEach(category => {
        try {
          const games = getGamesByCategory(category);
          debugInfo.push(`${category}: ${games.length} 个游戏`);
          
          if (games.length > 0) {
            debugInfo.push(`  示例: ${games[0].title}`);
          }
        } catch (error) {
          debugInfo.push(`${category}: 加载失败 - ${error.message}`);
        }
      });
      
    } catch (error) {
      debugInfo.push(`总体错误: ${error.message}`);
    }
    
    this.setData({
      debugInfo: debugInfo
    });
  }
});
