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
        cells: this.flattenGridContent(bingo.gridContent).map(cell => ({
          ...cell,
          displayText: this.safeDisplayText(cell.text, 6)
        })),
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
        // 确保cells数组中的每个元素都有有效的text属性
        const safeCells = (game.cells || []).map(cell => {
          // 更严格的文本处理
          let cellText = '';
          if (cell && typeof cell.text === 'string') {
            cellText = cell.text;
          } else if (cell && cell.text !== undefined && cell.text !== null) {
            cellText = String(cell.text);
          }

          return {
            text: cellText,
            displayText: this.safeDisplayText(cellText, 6),
            selected: cell && cell.selected ? cell.selected : false
          };
        });

        const selectedCount = safeCells.filter(cell => cell.selected).length;

        return {
          id: game.bingoId,
          title: game.title || '',
          creator: game.creator || '',
          gridSize: game.gridSize || { rows: 5, cols: 5 },
          cells: safeCells,
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
    if (!gridContent || !Array.isArray(gridContent)) {
      console.error('无效的网格内容:', gridContent);
      return cells;
    }

    for (let row = 0; row < gridContent.length; row++) {
      if (!gridContent[row] || !Array.isArray(gridContent[row])) {
        console.error('无效的行数据:', gridContent[row]);
        continue;
      }

      for (let col = 0; col < gridContent[row].length; col++) {
        const cellData = gridContent[row][col];
        // 确保text属性存在且不为undefined
        let cellText = '';
        if (cellData && typeof cellData.text === 'string') {
          cellText = cellData.text;
        } else if (cellData && cellData.text !== undefined && cellData.text !== null) {
          cellText = String(cellData.text);
        }

        cells.push({
          text: cellText,
          selected: cellData && cellData.selected ? cellData.selected : false
        });
      }
    }
    return cells;
  },

  /**
   * 安全地处理单元格文本显示
   */
  safeDisplayText(text, maxLength = 6) {
    // 确保text是字符串类型
    if (typeof text !== 'string') {
      if (text === undefined || text === null) {
        return '';
      }
      text = String(text);
    }

    // 如果文本为空或只包含空白字符，返回空字符串
    if (!text.trim()) {
      return '';
    }

    // 如果文本长度超过限制，截断并添加省略号
    if (text.length > maxLength) {
      return text.slice(0, Math.max(1, maxLength - 3)) + '...';
    }

    return text;
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
  },

  /**
   * 用户分享到朋友圈
   */
  onShareTimeline() {
    return {
      title: '我在「宾了个果」收藏了很多有趣的宾果游戏！',
      query: '',
      imageUrl: '/images/placeholder-logo.png'
    };
  }
});
