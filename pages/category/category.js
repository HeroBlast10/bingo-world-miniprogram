// pages/category/category.js
const { getGamesByCategory } = require('../../utils/bingoData.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    games: [],
    categoryName: '',
    isLoading: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('分类页面加载，参数:', options);

    if (options.slug) {
      // 通过 options.slug 获取从上一个页面传来的分类名
      const categorySlug = options.slug;
      const categoryName = this.getCategoryDisplayName(categorySlug);

      console.log('分类slug:', categorySlug);
      console.log('分类名称:', categoryName);

      this.setData({
        categoryName: categoryName
      });

      // 设置导航栏标题
      wx.setNavigationBarTitle({
        title: categoryName
      });

      // 调用 getGamesByCategory 获取游戏列表
      this.loadCategoryGames(categorySlug);
    } else if (options.search) {
      // 处理搜索功能
      const keyword = decodeURIComponent(options.search);
      console.log('搜索关键词:', keyword);

      this.setData({
        categoryName: `搜索: ${keyword}`
      });

      wx.setNavigationBarTitle({
        title: `搜索: ${keyword}`
      });

      this.loadSearchResults(keyword);
    } else {
      console.error('缺少分类参数');
      wx.showToast({
        title: '参数错误',
        icon: 'none'
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }
  },

  /**
   * 获取分类显示名称
   */
  getCategoryDisplayName(slug) {
    const categoryMap = {
      'MBTI': 'MBTI',
      '爱好': '爱好',
      '生活': '生活',
      '知识': '知识',
      '地理': '地理',
      '学生': '学生',
      '动物': '动物',
      '心理': '心理'
    };
    return categoryMap[slug] || slug;
  },

  /**
   * 加载分类游戏
   */
  loadCategoryGames(categorySlug) {
    this.setData({ isLoading: true });

    try {
      console.log('开始加载分类游戏:', categorySlug);

      // 将slug转换为中文分类名称
      const categoryName = this.getCategoryDisplayName(categorySlug);
      console.log('转换后的分类名称:', categoryName);

      // 调用 getGamesByCategory 获取游戏列表，使用中文分类名称
      const games = getGamesByCategory(categoryName);
      console.log('获取到的游戏列表:', games);

      // 使用 this.setData 更新 games 数据
      this.setData({
        games: games,
        isLoading: false
      });

      console.log('游戏数据设置完成，游戏数量:', games.length);
    } catch (error) {
      console.error('加载分类游戏失败:', error);
      this.setData({
        games: [],
        isLoading: false
      });
      wx.showToast({
        title: '加载失败',
        icon: 'none'
      });
    }
  },

  /**
   * 游戏项点击处理
   */
  onGameTap(e) {
    const gameId = e.currentTarget.dataset.id;
    console.log('点击游戏:', gameId);
    wx.navigateTo({
      url: `/pages/game/game?id=${gameId}`
    });
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 重新加载数据
    if (this.data.categoryName) {
      this.loadCategoryGames(this.data.categorySlug);
    }
    wx.stopPullDownRefresh();
  },

  /**
   * 加载搜索结果
   */
  loadSearchResults(keyword) {
    this.setData({ isLoading: true });

    try {
      console.log('开始搜索游戏:', keyword);

      // 调用 searchGames 获取搜索结果
      const { searchGames } = require('../../utils/bingoData.js');
      const games = searchGames(keyword);
      console.log('搜索到的游戏列表:', games);

      // 使用 this.setData 更新 games 数据
      this.setData({
        games: games,
        isLoading: false
      });

      console.log('搜索结果设置完成，游戏数量:', games.length);
    } catch (error) {
      console.error('搜索游戏失败:', error);
      this.setData({
        games: [],
        isLoading: false
      });
      wx.showToast({
        title: '搜索失败',
        icon: 'none'
      });
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: `宾果世界 - ${this.data.categoryName}`,
      path: `/pages/category/category?slug=${this.data.categorySlug}`
    };
  },

  /**
   * 用户分享到朋友圈
   */
  onShareTimeline() {
    return {
      title: `我在「宾了个果」发现了很多有趣的${this.data.categoryName}宾果游戏！`,
      query: `slug=${this.data.categorySlug}`,
      imageUrl: '/images/placeholder-logo.png'
    };
  }
});