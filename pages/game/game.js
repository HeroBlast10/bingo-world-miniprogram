// pages/game/game.js
const { findGameById } = require('../../utils/bingoData.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    game: null,
    selectedCells: [],
    isLoading: true,
    selectedColor: 'coral', // 用户选择的颜色主题
    colorMap: {
      'coral': '#ff6b6b',
      'blue': '#3b82f6',
      'purple': '#8b5cf6',
      'green': '#10b981',
      'pink': '#ec4899',
      'orange': '#f59e0b'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('游戏页面加载，参数:', options);

    // 加载用户选择的颜色
    this.loadUserColor();

    if (options.id) {
      // 通过 options.id 获取游戏ID
      const gameId = options.id;
      console.log('游戏ID:', gameId);

      // 调用 findGameById 获取游戏数据
      this.loadGameData(gameId);
    } else {
      console.error('缺少游戏ID参数');
      wx.showToast({
        title: '游戏ID不存在',
        icon: 'none'
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }
  },

  /**
   * 加载用户选择的颜色
   */
  loadUserColor() {
    try {
      const selectedColor = wx.getStorageSync('bingoColor') || 'coral';
      this.setData({
        selectedColor: selectedColor
      });
      console.log('加载用户颜色:', selectedColor);
    } catch (error) {
      console.error('加载用户颜色失败:', error);
    }
  },

  /**
   * 根据文本长度获取字体大小类名
   */
  getTextSizeClass(text) {
    const length = text.length;
    if (length <= 6) {
      return 'text-short';
    } else if (length <= 10) {
      return 'text-medium';
    } else if (length <= 15) {
      return 'text-long';
    } else {
      return 'text-very-long';
    }
  },

  /**
   * 处理游戏数据，为每个格子添加字体大小类
   */
  processGameData(game) {
    if (game && game.gridContent) {
      for (let row = 0; row < game.gridContent.length; row++) {
        for (let col = 0; col < game.gridContent[row].length; col++) {
          const cell = game.gridContent[row][col];
          if (cell && cell.text) {
            cell.textSizeClass = this.getTextSizeClass(cell.text);
          }
        }
      }
    }
    return game;
  },

  /**
   * 加载游戏数据
   */
  loadGameData(gameId) {
    this.setData({ isLoading: true });

    try {
      // 调用 findGameById 获取游戏数据
      let game = findGameById(gameId);
      console.log('获取到的游戏数据:', game);
      
      // 详细检查游戏数据结构
      if (game && game.gridContent) {
        console.log('游戏网格大小:', game.gridSize);
        console.log('网格内容样例:', game.gridContent[0] ? game.gridContent[0][0] : 'undefined');
      }

      if (!game) {
        wx.showToast({
          title: '游戏不存在',
          icon: 'none'
        });
        setTimeout(() => {
          wx.navigateBack();
        }, 1500);
        return;
      }

      // 处理游戏数据，为每个格子添加字体大小类
      game = this.processGameData(game);

      // 检查是否有保存的填写进度，如果有则恢复，否则初始化为全false
      const selectedCells = this.loadSavedProgress(gameId, game.gridSize);
      console.log('加载的选中状态:', selectedCells);

      // 使用 this.setData 更新 game 和 selectedCells
      this.setData({
        game: game,
        selectedCells: selectedCells,
        isLoading: false
      });

      // 设置导航栏标题
      wx.setNavigationBarTitle({
        title: game.title || '宾果游戏'
      });

    } catch (error) {
      console.error('加载游戏数据失败:', error);
      wx.showToast({
        title: '加载失败',
        icon: 'none'
      });
      this.setData({ isLoading: false });
    }
  },

  /**
   * 加载保存的填写进度
   */
  loadSavedProgress(gameId, gridSize) {
    try {
      // 从本地存储获取已完成的游戏列表
      const completedGames = wx.getStorageSync('completedGames') || [];
      
      // 查找当前游戏的保存记录
      const savedGame = completedGames.find(game => game.bingoId === gameId);
      
      if (savedGame && savedGame.cells && savedGame.cells.length > 0) {
        console.log('找到保存的游戏进度:', savedGame);
        
        // 将一维数组转换为二维数组
        const selectedCells = [];
        let cellIndex = 0;
        
        for (let row = 0; row < gridSize.rows; row++) {
          selectedCells[row] = [];
          for (let col = 0; col < gridSize.cols; col++) {
            if (cellIndex < savedGame.cells.length) {
              selectedCells[row][col] = savedGame.cells[cellIndex].selected || false;
            } else {
              selectedCells[row][col] = false;
            }
            cellIndex++;
          }
        }
        
        console.log('恢复的选中状态:', selectedCells);
        return selectedCells;
      } else {
        console.log('未找到保存的进度，使用初始状态');
        return this.initializeSelectedCells(gridSize);
      }
    } catch (error) {
      console.error('加载保存进度失败:', error);
      return this.initializeSelectedCells(gridSize);
    }
  },

  /**
   * 初始化选中状态的二维数组
   */
  initializeSelectedCells(gridSize) {
    const selectedCells = [];
    for (let row = 0; row < gridSize.rows; row++) {
      selectedCells[row] = [];
      for (let col = 0; col < gridSize.cols; col++) {
        // 所有格子初始状态都为未选中
        selectedCells[row][col] = false;
      }
    }
    return selectedCells;
  },

  /**
   * 格子点击处理
   */
  handleCellClick(e) {
    console.log('格子点击事件:', e);

    // 从事件对象 e.currentTarget.dataset 中获取格子的行 rowIndex 和列 colIndex
    const rowIndex = parseInt(e.currentTarget.dataset.rowIndex);
    const colIndex = parseInt(e.currentTarget.dataset.colIndex);

    console.log('点击的格子位置:', rowIndex, colIndex);

    if (rowIndex === undefined || colIndex === undefined) {
      console.error('无法获取格子位置');
      return;
    }

    // 所有格子都可以自由点击选择或取消选择

    // 获取当前选中状态
    const currentSelectedCells = this.data.selectedCells;
    const newSelectedCells = JSON.parse(JSON.stringify(currentSelectedCells)); // 深拷贝

    // 更新 selectedCells[rowIndex][colIndex] 的布尔值（取反）
    newSelectedCells[rowIndex][colIndex] = !newSelectedCells[rowIndex][colIndex];

    console.log('更新后的选中状态:', newSelectedCells);

    // 使用 this.setData 更新 selectedCells，以触发界面刷新
    this.setData({
      selectedCells: newSelectedCells
    });

    // 检查是否开启自动保存
    this.checkAutoSave();
  },

  /**
   * 检查自动保存
   */
  checkAutoSave() {
    try {
      // 从设置中获取自动保存开关状态
      const autoSave = wx.getStorageSync('autoSave');

      // 如果自动保存开启（默认为true）
      if (autoSave !== false) {
        // 延迟500ms后自动保存，避免频繁保存
        if (this.autoSaveTimer) {
          clearTimeout(this.autoSaveTimer);
        }

        this.autoSaveTimer = setTimeout(() => {
          this.autoSaveGame();
        }, 500);
      }
    } catch (error) {
      console.error('检查自动保存失败:', error);
    }
  },

  /**
   * 自动保存游戏（静默保存，不显示提示）
   */
  autoSaveGame() {
    if (!this.data.game) {
      return;
    }

    try {
      // 获取当前已完成的游戏列表
      let completedGames = wx.getStorageSync('completedGames') || [];

      // 检查是否已经保存过
      const existingIndex = completedGames.findIndex(game => game.bingoId === this.data.game.bingoId);

      // 准备保存的游戏数据
      const gameToSave = {
        bingoId: this.data.game.bingoId,
        title: this.data.game.title,
        creator: this.data.game.creator,
        description: this.data.game.description,
        gridSize: this.data.game.gridSize,
        category: this.data.game.category,
        createdAt: this.data.game.createdAt,
        completedAt: new Date().toISOString(),
        cells: []
      };

      // 将二维selectedCells数组转换为一维数组
      for (let row = 0; row < this.data.game.gridSize.rows; row++) {
        for (let col = 0; col < this.data.game.gridSize.cols; col++) {
          const cellData = this.data.game.gridContent[row][col];
          const isSelected = this.data.selectedCells[row] && this.data.selectedCells[row][col];

          gameToSave.cells.push({
            text: cellData && cellData.text ? cellData.text : `格子 ${row}-${col}`,
            type: cellData && cellData.type ? cellData.type : 'standard',
            selected: isSelected || false
          });
        }
      }

      if (existingIndex !== -1) {
        // 如果已经存在，更新数据
        completedGames[existingIndex] = gameToSave;
      } else {
        // 如果不存在，添加新数据
        completedGames.push(gameToSave);
      }

      wx.setStorageSync('completedGames', completedGames);
      console.log('自动保存成功:', gameToSave.bingoId);
    } catch (error) {
      console.error('自动保存失败:', error);
    }
  },

  /**
   * 保存游戏
   */
  onSaveGame() {
    if (!this.data.game) {
      wx.showToast({
        title: '游戏数据不存在',
        icon: 'none'
      });
      return;
    }

    try {
      // 获取当前已完成的游戏列表（用于"已保存的宾果"页面）
      let completedGames = wx.getStorageSync('completedGames') || [];

      // 检查是否已经保存过
      const existingIndex = completedGames.findIndex(game => game.bingoId === this.data.game.bingoId);

      // 准备保存的游戏数据，包含用户的选择状态
      const gameToSave = {
        bingoId: this.data.game.bingoId,
        title: this.data.game.title,
        creator: this.data.game.creator,
        description: this.data.game.description,
        gridSize: this.data.game.gridSize,
        category: this.data.game.category,
        createdAt: this.data.game.createdAt,
        completedAt: new Date().toISOString(),
        cells: []
      };

      // 将二维selectedCells数组转换为一维数组，并包含文本内容
      for (let row = 0; row < this.data.game.gridSize.rows; row++) {
        for (let col = 0; col < this.data.game.gridSize.cols; col++) {
          const cellData = this.data.game.gridContent[row][col];
          const isSelected = this.data.selectedCells[row] && this.data.selectedCells[row][col];

          // 添加调试信息
          if (!cellData || !cellData.text) {
            console.warn(`格子数据异常 [${row}][${col}]:`, cellData);
          }

          gameToSave.cells.push({
            text: cellData && cellData.text ? cellData.text : `格子 ${row}-${col}`,
            type: cellData && cellData.type ? cellData.type : 'standard',
            selected: isSelected || false
          });
        }
      }

      if (existingIndex !== -1) {
        // 如果已经存在，更新数据
        completedGames[existingIndex] = gameToSave;
        wx.showToast({
          title: '更新保存成功',
          icon: 'success'
        });
      } else {
        // 如果不存在，添加新数据
        completedGames.push(gameToSave);
        wx.showToast({
          title: '保存成功',
          icon: 'success'
        });
      }

      wx.setStorageSync('completedGames', completedGames);

      console.log('保存的游戏数据:', gameToSave);
    } catch (error) {
      console.error('保存游戏失败:', error);
      wx.showToast({
        title: '保存失败',
        icon: 'none'
      });
    }
  },

  /**
   * 下载游戏
   */
  onDownloadGame() {
    if (!this.data.game) {
      wx.showToast({
        title: '游戏数据不存在',
        icon: 'none'
      });
      return;
    }

    wx.showLoading({
      title: '生成图片中...',
      mask: true
    });

    // 延迟执行，确保loading显示
    setTimeout(() => {
      this.generateBingoImage();
    }, 100);
  },

  /**
   * 生成宾果图片
   */
  generateBingoImage() {
    const ctx = wx.createCanvasContext('bingoCanvas');
    const game = this.data.game;
    const selectedCells = this.data.selectedCells;

    // 画布尺寸（高分辨率）
    const canvasWidth = 750;
    const canvasHeight = 1000;

    // 设置背景色
    ctx.setFillStyle('#f9fafb');
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // 绘制小程序标识
    ctx.setFillStyle('#9ca3af');
    ctx.setFontSize(24);
    ctx.setTextAlign('center');
    ctx.fillText('小程序@宾了个果', canvasWidth / 2, 50);

    // 绘制游戏标题
    ctx.setFillStyle('#1f2937');
    ctx.setFontSize(36);
    ctx.setTextAlign('center');
    ctx.fillText(game.title, canvasWidth / 2, 100);

    // 绘制游戏描述（如果有）
    let startY = 140;
    if (game.description && game.description.trim() !== '' && game.description !== '五个连成一线...') {
      ctx.setFillStyle('#6b7280');
      ctx.setFontSize(24);
      ctx.setTextAlign('center');

      // 处理长文本换行
      const maxWidth = 600;
      const lines = this.wrapText(ctx, game.description, maxWidth);
      lines.forEach((line, index) => {
        ctx.fillText(line, canvasWidth / 2, startY + (index * 30));
      });
      startY += lines.length * 30 + 20;
    }

    // 计算网格参数
    const gridSize = Math.min(game.gridSize.rows, game.gridSize.cols);
    const maxGridWidth = 680; // 增加网格宽度，减少左右边距
    const cellSize = maxGridWidth / Math.max(game.gridSize.rows, game.gridSize.cols);
    const gridWidth = cellSize * game.gridSize.cols;
    const gridHeight = cellSize * game.gridSize.rows;
    const gridStartX = (canvasWidth - gridWidth) / 2;
    const gridStartY = startY + 20;

    // 绘制网格背景
    ctx.setFillStyle('#ffffff');
    ctx.fillRect(gridStartX - 10, gridStartY - 10, gridWidth + 20, gridHeight + 20);

    // 绘制网格边框
    ctx.setStrokeStyle('#e5e7eb');
    ctx.setLineWidth(2);
    ctx.strokeRect(gridStartX - 10, gridStartY - 10, gridWidth + 20, gridHeight + 20);

    // 绘制宾果格子
    for (let row = 0; row < game.gridSize.rows; row++) {
      for (let col = 0; col < game.gridSize.cols; col++) {
        const cellData = game.gridContent[row][col];
        const isSelected = selectedCells[row] && selectedCells[row][col];

        const x = gridStartX + col * cellSize;
        const y = gridStartY + row * cellSize;

        // 绘制格子背景
        if (isSelected) {
          const selectedColorHex = this.data.colorMap[this.data.selectedColor] || '#ff6b6b';
          ctx.setFillStyle(selectedColorHex);
        } else {
          ctx.setFillStyle('#ffffff');
        }
        ctx.fillRect(x, y, cellSize, cellSize);

        // 绘制格子边框
        ctx.setStrokeStyle('#e5e7eb');
        ctx.setLineWidth(1);
        ctx.strokeRect(x, y, cellSize, cellSize);

        // 绘制文字
        ctx.setFillStyle(isSelected ? '#ffffff' : '#374151');

        // 根据文字长度调整字体大小
        let fontSize;
        const textLength = cellData.text.length;
        if (textLength <= 6) {
          fontSize = Math.min(cellSize / 5, 22);
        } else if (textLength <= 10) {
          fontSize = Math.min(cellSize / 5.5, 20);
        } else if (textLength <= 15) {
          fontSize = Math.min(cellSize / 6, 18);
        } else {
          fontSize = Math.min(cellSize / 6.5, 16);
        }

        ctx.setFontSize(fontSize);
        ctx.setTextAlign('center');

        // 处理文字换行
        const maxTextWidth = cellSize - 10;
        const lines = this.wrapText(ctx, cellData.text, maxTextWidth);
        const lineHeight = fontSize + 2;
        const totalTextHeight = lines.length * lineHeight;
        const textStartY = y + (cellSize - totalTextHeight) / 2 + lineHeight / 2;

        lines.forEach((line, index) => {
          ctx.fillText(line, x + cellSize / 2, textStartY + (index * lineHeight));
        });
      }
    }

    // 绘制底部水印
    const watermarkY = gridStartY + gridHeight + 45; // 略微减少底部间距
    ctx.setFillStyle('#9ca3af');
    ctx.setFontSize(28);
    ctx.setTextAlign('center');
    ctx.fillText('小程序@宾了个果', canvasWidth / 2, watermarkY);

    // 绘制完成，生成图片
    ctx.draw(false, () => {
      setTimeout(() => {
        wx.canvasToTempFilePath({
          canvasId: 'bingoCanvas',
          x: 0,
          y: 0,
          width: canvasWidth,
          height: canvasHeight,
          destWidth: canvasWidth * 4,  // 4倍分辨率
          destHeight: canvasHeight * 4, // 4倍分辨率
          fileType: 'png',
          quality: 1.0,  // 最高质量
          success: (res) => {
            wx.hideLoading();
            this.saveImageToAlbum(res.tempFilePath);
          },
          fail: (error) => {
            wx.hideLoading();
            console.error('生成图片失败:', error);
            wx.showToast({
              title: '生成图片失败',
              icon: 'none'
            });
          }
        });
      }, 500);
    });
  },

  /**
   * 文字换行处理
   */
  wrapText(ctx, text, maxWidth) {
    const words = text.split('');
    const lines = [];
    let currentLine = '';

    for (let i = 0; i < words.length; i++) {
      const testLine = currentLine + words[i];
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;

      if (testWidth > maxWidth && currentLine !== '') {
        lines.push(currentLine);
        currentLine = words[i];
      } else {
        currentLine = testLine;
      }
    }

    if (currentLine !== '') {
      lines.push(currentLine);
    }

    return lines;
  },

  /**
   * 保存图片到相册
   */
  saveImageToAlbum(tempFilePath) {
    wx.saveImageToPhotosAlbum({
      filePath: tempFilePath,
      success: () => {
        wx.showToast({
          title: '保存成功',
          icon: 'success'
        });
      },
      fail: (error) => {
        if (error.errMsg.includes('auth deny')) {
          wx.showModal({
            title: '提示',
            content: '需要您授权保存图片到相册',
            showCancel: false,
            confirmText: '去设置',
            success: () => {
              wx.openSetting();
            }
          });
        } else {
          wx.showToast({
            title: '保存失败',
            icon: 'none'
          });
        }
      }
    });
  },

  /**
   * 分享游戏
   */
  onShareGame() {
    if (!this.data.game) {
      wx.showToast({
        title: '游戏数据不存在',
        icon: 'none'
      });
      return;
    }

    const app = getApp();
    const userManager = app.getUserManager();
    const isLoggedIn = userManager.getLoginStatus();

    // 计算完成进度
    const completedCells = this.data.selectedCells.flat().filter(cell => cell).length;
    const totalCells = 25;
    const completionRate = Math.round((completedCells / totalCells) * 100);

    let itemList = ['分享给朋友', '复制链接'];
    
    // 如果用户已登录且有进度，添加分享进度选项
    if (isLoggedIn && completedCells > 0) {
      itemList.splice(1, 0, `分享我的进度 (${completionRate}%)`);
    }

    wx.showActionSheet({
      itemList: itemList,
      success: (res) => {
        switch (res.tapIndex) {
          case 0:
            // 分享给朋友
            this.shareToFriend();
            break;
          case 1:
            if (isLoggedIn && completedCells > 0) {
              // 分享我的进度
              this.shareMyProgress();
            } else {
              // 复制链接
              this.copyGameLink();
            }
            break;
          case 2:
            // 复制链接
            this.copyGameLink();
            break;
        }
      }
    });
  },

  /**
   * 分享给朋友
   */
  shareToFriend() {
    const app = getApp();
    const shareManager = app.getShareManager();
    
    const gameData = {
      id: this.data.game.bingoId,
      title: this.data.game.title,
      description: this.data.game.description,
      category: this.data.game.category,
      creator: this.data.game.creator
    };

    // 触发微信分享
    wx.showShareMenu({
      withShareTicket: true,
      success: () => {
        console.log('分享菜单已显示');
      }
    });

    // 这里不能直接调用wx.shareAppMessage，需要通过onShareAppMessage返回分享配置
    wx.showToast({
      title: '请点击右上角分享',
      icon: 'none'
    });
  },

  /**
   * 分享我的进度
   */
  shareMyProgress() {
    const app = getApp();
    const shareManager = app.getShareManager();
    
    const completedCells = this.data.selectedCells.flat().filter(cell => cell).length;
    
    const gameData = {
      id: this.data.game.bingoId,
      title: this.data.game.title,
      description: this.data.game.description,
      category: this.data.game.category,
      creator: this.data.game.creator
    };

    const shareData = shareManager.shareMyProgress(gameData, completedCells);
    
    // 显示分享菜单
    wx.showShareMenu({
      withShareTicket: true,
      success: () => {
        console.log('分享进度菜单已显示');
      }
    });

    wx.showToast({
      title: '请点击右上角分享',
      icon: 'none'
    });
  },

  /**
   * 复制游戏链接
   */
  copyGameLink() {
    const linkText = `我在「宾了个果」发现了一个有趣的${this.data.game.category}宾果：${this.data.game.title}，快来一起玩吧！`;
    
    wx.setClipboardData({
      data: linkText,
      success: () => {
        wx.showToast({
          title: '链接已复制',
          icon: 'success'
        });
      },
      fail: () => {
        wx.showToast({
          title: '复制失败',
          icon: 'none'
        });
      }
    });
  },

  /**
   * 页面显示时重新加载颜色设置
   */
  onShow() {
    this.loadUserColor();
  },

  /**
   * 页面卸载时清理定时器
   */
  onUnload() {
    if (this.autoSaveTimer) {
      clearTimeout(this.autoSaveTimer);
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    if (!this.data.game) {
      return {
        title: '宾了个果 - 有趣的宾果游戏',
        path: '/pages/index/index',
        imageUrl: '/images/placeholder-logo.png' // 使用默认logo
      };
    }

    // 检查用户是否有进度
    const completedCells = this.data.selectedCells.flat().filter(cell => cell).length;
    
    // 生成分享用的宾果截图
    this.generateShareImage().then((imageUrl) => {
      console.log('分享图片生成成功:', imageUrl);
    }).catch((error) => {
      console.error('分享图片生成失败:', error);
    });

    const gameData = {
      id: this.data.game.bingoId,
      title: this.data.game.title,
      description: this.data.game.description,
      category: this.data.game.category,
      creator: this.data.game.creator
    };

    let shareConfig;
    if (completedCells > 0) {
      // 如果有进度，分享进度
      const completionRate = Math.round((completedCells / 25) * 100);
      shareConfig = {
        title: `🏆 我在「${this.data.game.title}」中完成了${completionRate}%`,
        path: `/pages/game/${this.data.game.bingoId}?from=progress`,
        imageUrl: '' // 将在generateShareImage中设置
      };
    } else {
      // 否则分享游戏本身
      shareConfig = {
        title: `📋 ${this.data.game.title}`,
        path: `/pages/game/${this.data.game.bingoId}`,
        imageUrl: '' // 将在generateShareImage中设置
      };
    }

    // 尝试使用生成的截图，如果失败则使用默认图片
    const cachedShareImage = wx.getStorageSync(`shareImage_${this.data.game.bingoId}`);
    if (cachedShareImage) {
      shareConfig.imageUrl = cachedShareImage;
    } else {
      shareConfig.imageUrl = '/images/placeholder-logo.png';
    }

    return shareConfig;
  },

  /**
   * 生成分享用的宾果截图
   */
  async generateShareImage() {
    return new Promise((resolve, reject) => {
      try {
        const ctx = wx.createCanvasContext('shareCanvas');
        
        // 设置画布尺寸（适合分享的尺寸）
        const canvasWidth = 400;
        const canvasHeight = 400;
        
        // 设置背景
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        
        // 绘制宾果网格
        const gridSize = 320;
        const cellSize = gridSize / 5;
        const startX = (canvasWidth - gridSize) / 2;
        const startY = (canvasHeight - gridSize) / 2;
        
        // 绘制网格和内容
        for (let row = 0; row < 5; row++) {
          for (let col = 0; col < 5; col++) {
            const x = startX + col * cellSize;
            const y = startY + row * cellSize;
            
            // 检查是否被选中
            const isSelected = this.data.selectedCells[row] && this.data.selectedCells[row][col];
            
            // 设置单元格背景色
            if (isSelected) {
              ctx.fillStyle = this.data.colorMap[this.data.selectedColor] || '#ff6b6b';
            } else {
              ctx.fillStyle = '#f8f9fa';
            }
            ctx.fillRect(x, y, cellSize, cellSize);
            
            // 绘制边框
            ctx.strokeStyle = '#e9ecef';
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, cellSize, cellSize);
            
            // 绘制文字
            const cellData = this.data.game.gridContent[row][col];
            if (cellData && cellData.text) {
              ctx.fillStyle = isSelected ? '#ffffff' : '#333333';
              ctx.font = '12px PingFang SC';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              
              // 文字换行处理
              const text = cellData.text;
              const maxWidth = cellSize - 8;
              const lines = this.wrapText(ctx, text, maxWidth);
              const lineHeight = 14;
              const totalHeight = lines.length * lineHeight;
              const startTextY = y + cellSize / 2 - totalHeight / 2 + lineHeight / 2;
              
              lines.forEach((line, index) => {
                ctx.fillText(line, x + cellSize / 2, startTextY + index * lineHeight);
              });
            }
          }
        }
        
        // 绘制完成后保存图片
        ctx.draw(false, () => {
          wx.canvasToTempFilePath({
            canvasId: 'shareCanvas',
            success: (res) => {
              const tempFilePath = res.tempFilePath;
              console.log('分享图片生成成功:', tempFilePath);
              
              // 缓存图片路径
              wx.setStorageSync(`shareImage_${this.data.game.bingoId}`, tempFilePath);
              resolve(tempFilePath);
            },
            fail: (error) => {
              console.error('生成分享图片失败:', error);
              reject(error);
            }
          });
        });
        
      } catch (error) {
        console.error('generateShareImage 异常:', error);
        reject(error);
      }
    });
  },

  /**
   * 文字换行处理
   */
  wrapText(ctx, text, maxWidth) {
    const words = text.split('');
    const lines = [];
    let currentLine = '';
    
    for (let i = 0; i < words.length; i++) {
      const testLine = currentLine + words[i];
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      
      if (testWidth > maxWidth && currentLine !== '') {
        lines.push(currentLine);
        currentLine = words[i];
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine);
    return lines.length > 2 ? lines.slice(0, 2) : lines; // 最多显示2行
  }
});