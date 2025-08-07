// pages/debug/debug.js
const { getAllCategories, getGamesByCategory } = require('../../utils/bingoData.js');

Page({
  data: {
    debugInfo: []
  },

  onLoad() {
    this.runDebugTests();
  },

  // 清除所有保存的数据
  clearAllData() {
    wx.showModal({
      title: '确认清除',
      content: '确定要清除所有保存的宾果数据吗？',
      success: (res) => {
        if (res.confirm) {
          try {
            wx.removeStorageSync('completedGames');
            wx.showToast({
              title: '数据已清除',
              icon: 'success'
            });
            // 重新运行测试
            this.runDebugTests();
          } catch (error) {
            wx.showToast({
              title: '清除失败',
              icon: 'none'
            });
          }
        }
      }
    });
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

      // 检查已保存的游戏数据
      debugInfo.push('--- 已保存的游戏数据 ---');
      try {
        const completedGames = wx.getStorageSync('completedGames') || [];
        debugInfo.push(`已保存游戏数量: ${completedGames.length}`);
        
        completedGames.forEach((game, index) => {
          debugInfo.push(`游戏${index + 1}: ${game.title || 'undefined'}`);
          debugInfo.push(`  ID: ${game.bingoId || 'undefined'}`);
          debugInfo.push(`  网格大小: ${game.gridSize ? `${game.gridSize.rows}x${game.gridSize.cols}` : 'undefined'}`);
          debugInfo.push(`  格子数量: ${game.cells ? game.cells.length : 0}`);
          
          if (game.cells && game.cells.length > 0) {
            const firstCell = game.cells[0];
            debugInfo.push(`  第一个格子: "${firstCell.text || 'undefined'}" (选中: ${firstCell.selected})`);
            
            // 检查前3个格子的文本
            for (let i = 0; i < Math.min(3, game.cells.length); i++) {
              const cell = game.cells[i];
              debugInfo.push(`    格子${i}: "${cell.text || 'undefined'}"`);
            }
          }
          debugInfo.push('');
        });
      } catch (error) {
        debugInfo.push(`读取已保存游戏失败: ${error.message}`);
      }
      
    } catch (error) {
      debugInfo.push(`总体错误: ${error.message}`);
    }
    
    this.setData({
      debugInfo: debugInfo
    });
  }
});
