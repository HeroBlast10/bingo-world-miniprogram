// pages/index/index.js
const { getAllCategories, getGamesByCategory } = require('../../utils/bingoData.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '',
    categories: [
      { id: "MBTI", name: "MBTI", icon: "🧠", color: "bg-purple", slug: "MBTI" },
      { id: "爱好", name: "爱好", icon: "❤️", color: "bg-pink", slug: "爱好" },
      { id: "生活", name: "生活", icon: "☕", color: "bg-orange", slug: "生活" },
      { id: "知识", name: "知识", icon: "📚", color: "bg-blue", slug: "知识" },
      { id: "地理", name: "地理", icon: "📍", color: "bg-green", slug: "地理" },
      { id: "学生", name: "学生", icon: "🎓", color: "bg-indigo", slug: "学生" },
      { id: "动物", name: "动物", icon: "🐰", color: "bg-emerald", slug: "动物" },
      { id: "心理", name: "心理", icon: "⚡", color: "bg-yellow", slug: "心理" }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('首页加载完成');
    this.loadCategoryData();
  },

  /**
   * 加载分类数据
   */
  loadCategoryData() {
    try {
      // 调用 getAllCategories() 获取分类数据
      const availableCategories = getAllCategories();
      console.log('获取到的分类数据:', availableCategories);
      console.log('预定义的分类:', this.data.categories.map(c => c.slug));

      // 过滤出存在的分类
      const filteredCategories = this.data.categories.filter(category =>
        availableCategories.includes(category.slug)
      );

      console.log('过滤后的分类:', filteredCategories);

      this.setData({
        categories: filteredCategories
      });

      console.log('分类数据设置完成，当前categories:', this.data.categories);
    } catch (error) {
      console.error('加载分类数据失败:', error);
      // 如果加载失败，使用默认数据
      console.log('使用默认分类数据');
      wx.showToast({
        title: '使用默认数据',
        icon: 'none'
      });
    }
  },

  /**
   * 搜索输入处理
   */
  onSearchInput(e) {
    this.setData({
      searchValue: e.detail.value
    });
  },

  /**
   * 搜索确认
   */
  onSearchConfirm(e) {
    const keyword = e.detail.value.trim();
    if (keyword) {
      wx.navigateTo({
        url: `/pages/category/category?search=${encodeURIComponent(keyword)}`
      });
    }
  },

  /**
   * 分类点击处理
   */
  onCategoryTap(e) {
    const slug = e.currentTarget.dataset.slug;
    wx.navigateTo({
      url: `/pages/category/category?slug=${slug}`
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    const app = getApp();
    const shareManager = app.getShareManager();
    return shareManager.shareApp();
  }
});