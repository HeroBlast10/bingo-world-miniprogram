// pages/saved/saved.js
const { getUserCreatedGames } = require('../../utils/bingoData');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 'created', // 'created' | 'completed'
    createdBingos: [],
    completedBingos: [],
    currentBingos: [],
    emptyGridCells: [0, 1, 2, 3, 4, 5, 6, 7, 8] // 用于空状态的3x3网格
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 设置导航栏标题
    wx.setNavigationBarTitle({
      title: '已保存宾果'
    });
    
    // 从URL参数获取初始标签页
    const type = options.type;
    if (type === 'created' || type === 'completed') {
      this.setData({
        activeTab: type
      });
    }
    
    // 加载数据
    this.loadBingoData();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 每次显示页面时重新加载数据，以防有新的创建或完成的宾果
    this.loadBingoData();
  },

  /**
   * 加载宾果数据
   */
  loadBingoData() {
    // 加载用户创建的宾果
    const createdBingos = this.loadCreatedBingos();
    
    // 加载用户完成的宾果
    const completedBingos = this.loadCompletedBingos();
    
    this.setData({
      createdBingos: createdBingos,
      completedBingos: completedBingos
    });
    
    // 更新当前显示的宾果列表
    this.updateCurrentBingos();
  },

  /**
   * 加载用户创建的宾果
   */
  loadCreatedBingos() {
    try {
      const userBingos = getUserCreatedGames();
      return userBingos.map(bingo => ({
        id: bingo.bingoId,
        title: bingo.title,
        creator: bingo.creator,
        gridSize: bingo.gridSize,
        cells: this.flattenGridContent(bingo.gridContent),
        createdAt: this.formatDate(bingo.createdAt),
        totalCount: bingo.gridSize.rows * bingo.gridSize.cols
      }));
    } catch (error) {
      console.error('加载创建的宾果失败:', error);
      return [];
    }
  },

  /**
   * 加载用户完成的宾果
   */
  loadCompletedBingos() {
    try {
      // 从本地存储获取已完成的宾果游戏记录
      const completedGames = wx.getStorageSync('completedGames') || [];
      
      return completedGames.map(game => {
        const selectedCount = game.cells ? game.cells.filter(cell => cell.selected).length : 0;
        
        return {
          id: game.bingoId,
          title: game.title,
          creator: game.creator,
          gridSize: game.gridSize,
          cells: game.cells || [],
          createdAt: this.formatDate(game.createdAt),
          completedAt: this.formatDate(game.completedAt),
          selectedCount: selectedCount,
          totalCount: game.gridSize ? game.gridSize.rows * game.gridSize.cols : 0
        };
      });
    } catch (error) {
      console.error('加载完成的宾果失败:', error);
      return [];
    }
  },

  /**
   * 将二维网格内容转换为一维数组
   */
  flattenGridContent(gridContent) {
    const cells = [];
    for (let row = 0; row < gridContent.length; row++) {
      for (let col = 0; col < gridContent[row].length; col++) {
        cells.push({
          text: gridContent[row][col].text,
          selected: gridContent[row][col].selected || false
        });
      }
    }
    return cells;
  },

  /**
   * 格式化日期
   */
  formatDate(dateString) {
    if (!dateString) return '';
    
    try {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    } catch (error) {
      return dateString;
    }
  },

  /**
   * 标签页切换
   */
  onTabChange(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      activeTab: tab
    });
    this.updateCurrentBingos();
  },

  /**
   * 更新当前显示的宾果列表
   */
  updateCurrentBingos() {
    const currentBingos = this.data.activeTab === 'created' 
      ? this.data.createdBingos 
      : this.data.completedBingos;
    
    this.setData({
      currentBingos: currentBingos
    });
  },

  /**
   * 点击宾果卡片
   */
  onBingoClick(e) {
    const bingo = e.currentTarget.dataset.bingo;
    console.log('点击宾果:', bingo);
    
    // 跳转到游戏页面
    wx.navigateTo({
      url: `/pages/game/game?id=${bingo.id}`
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '宾果世界 - 我的宾果收藏',
      path: '/pages/saved/saved'
    };
  }
});
