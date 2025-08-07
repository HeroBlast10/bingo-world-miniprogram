// pages/create/create.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 用于循环生成5x5网格的数组
    gridRows: [0, 1, 2, 3, 4],
    gridCols: [0, 1, 2, 3, 4]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 设置导航栏标题
    wx.setNavigationBarTitle({
      title: '创建宾果游戏'
    });
  },

  /**
   * 表单提交处理
   */
  onFormSubmit(e) {
    console.log('表单提交数据:', e.detail.value);
    
    const formData = e.detail.value;
    
    // 验证必填字段
    if (!formData.title || !formData.title.trim()) {
      wx.showToast({
        title: '请输入宾果标题',
        icon: 'none'
      });
      return;
    }

    if (!formData.description || !formData.description.trim()) {
      wx.showToast({
        title: '请输入宾果描述',
        icon: 'none'
      });
      return;
    }

    // 验证网格内容
    let emptyCells = 0;
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        const cellKey = `cell-${row}-${col}`;
        const cellValue = formData[cellKey];
        
        if (!cellValue || !cellValue.trim()) {
          emptyCells++;
        }
      }
    }

    if (emptyCells > 0) {
      wx.showToast({
        title: `还有${emptyCells}个格子未填写`,
        icon: 'none'
      });
      return;
    }

    // 格式化为BingoGame JSON对象
    const game = this.formatGameData(formData);
    
    // 保存到本地缓存
    this.saveGameToStorage(game);
  },

  /**
   * 将表单数据格式化为BingoGame对象
   */
  formatGameData(formData) {
    // 生成唯一ID（使用时间戳）
    const bingoId = `user_${Date.now()}`;
    
    // 创建5x5二维数组
    const gridContent = [];
    for (let row = 0; row < 5; row++) {
      gridContent[row] = [];
      for (let col = 0; col < 5; col++) {
        // 从表单数据中获取内容
        const cellKey = `cell-${row}-${col}`;
        const cellText = formData[cellKey] || '';
        
        gridContent[row][col] = {
          text: cellText,
          type: 'standard'
        };
      }
    }

    // 构建完整的游戏对象
    const game = {
      bingoId: bingoId,
      title: formData.title.trim(),
      creator: '我',
      description: formData.description.trim(),
      gridSize: {
        rows: 5,
        cols: 5
      },
      gridContent: gridContent,
      category: 'user_created',
      tags: [],
      createdAt: new Date().toISOString()
    };

    console.log('格式化后的游戏数据:', game);
    return game;
  },

  /**
   * 保存游戏到本地缓存
   */
  saveGameToStorage(game) {
    try {
      // 读取用户已创建的游戏列表
      const userBingos = wx.getStorageSync('user_bingos') || [];
      
      // 将新游戏添加到列表开头
      userBingos.unshift(game);
      
      // 保存回缓存
      wx.setStorageSync('user_bingos', userBingos);
      
      // 更新创建数量统计
      const createdGames = wx.getStorageSync('createdGames') || [];
      createdGames.push(game.bingoId);
      wx.setStorageSync('createdGames', createdGames);
      
      console.log('游戏保存成功:', game.bingoId);
      
      // 显示成功提示
      wx.showToast({
        title: '创建成功',
        icon: 'success',
        duration: 2000
      });
      
      // 延迟跳转，让用户看到成功提示
      setTimeout(() => {
        wx.navigateBack({
          delta: 1
        });
      }, 2000);
      
    } catch (error) {
      console.error('保存游戏失败:', error);
      wx.showToast({
        title: '保存失败，请重试',
        icon: 'none'
      });
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '小程序@宾了个果 - 创建你的专属宾果游戏',
      path: '/pages/create/create'
    };
  }
});
