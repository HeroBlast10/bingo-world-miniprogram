// utils/createIcons.js
// 在小程序中创建导航栏图标的工具

/**
 * 创建首页图标
 * @param {boolean} active 是否为激活状态
 * @returns {Promise<string>} 返回临时文件路径
 */
function createHomeIcon(active = false) {
  return new Promise((resolve, reject) => {
    const ctx = wx.createCanvasContext('iconCanvas');
    const size = 81;
    const color = active ? '#ff6b6b' : '#999999';
    
    // 设置画布大小
    ctx.setFillStyle('#ffffff');
    ctx.fillRect(0, 0, size, size);
    
    // 绘制房子图标
    ctx.setStrokeStyle(color);
    ctx.setFillStyle(color);
    ctx.setLineWidth(3);
    ctx.setLineJoin('round');
    
    // 绘制房子轮廓
    ctx.beginPath();
    ctx.moveTo(40.5, 15); // 屋顶顶点
    ctx.lineTo(20, 35);   // 左边屋檐
    ctx.lineTo(20, 65);   // 左墙
    ctx.lineTo(30, 65);   // 左门框
    ctx.lineTo(30, 50);   // 门左边
    ctx.lineTo(50, 50);   // 门上边
    ctx.lineTo(50, 65);   // 门右边
    ctx.lineTo(60, 65);   // 右门框
    ctx.lineTo(60, 35);   // 右墙
    ctx.lineTo(40.5, 15); // 回到屋顶
    ctx.closePath();
    ctx.fill();
    
    ctx.draw(false, () => {
      wx.canvasToTempFilePath({
        canvasId: 'iconCanvas',
        width: size,
        height: size,
        success: (res) => resolve(res.tempFilePath),
        fail: reject
      });
    });
  });
}

/**
 * 创建用户图标
 * @param {boolean} active 是否为激活状态
 * @returns {Promise<string>} 返回临时文件路径
 */
function createUserIcon(active = false) {
  return new Promise((resolve, reject) => {
    const ctx = wx.createCanvasContext('iconCanvas');
    const size = 81;
    const color = active ? '#ff6b6b' : '#999999';
    
    // 设置画布大小
    ctx.setFillStyle('#ffffff');
    ctx.fillRect(0, 0, size, size);
    
    // 绘制用户图标
    ctx.setStrokeStyle(color);
    ctx.setLineWidth(3);
    ctx.setLineCap('round');
    
    // 绘制头部圆圈
    ctx.beginPath();
    ctx.arc(40.5, 28, 12, 0, 2 * Math.PI);
    ctx.stroke();
    
    // 绘制身体轮廓
    ctx.beginPath();
    ctx.arc(40.5, 70, 20, Math.PI, 0, true);
    ctx.stroke();
    
    ctx.draw(false, () => {
      wx.canvasToTempFilePath({
        canvasId: 'iconCanvas',
        width: size,
        height: size,
        success: (res) => resolve(res.tempFilePath),
        fail: reject
      });
    });
  });
}

module.exports = {
  createHomeIcon,
  createUserIcon
};
