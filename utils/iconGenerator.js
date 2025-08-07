// utils/iconGenerator.js
// 用于生成导航栏图标的工具函数

/**
 * 生成首页图标的Base64数据
 * @param {boolean} active 是否为激活状态
 * @returns {string} Base64编码的图标数据
 */
function generateHomeIcon(active = false) {
  const color = active ? '#ff6b6b' : '#999999';
  
  const svg = `
    <svg width="81" height="81" viewBox="0 0 81 81" xmlns="http://www.w3.org/2000/svg">
      <path d="M40.5 8L12 28v45h15V48h12v25h15V28L40.5 8z" 
            fill="${color}" 
            stroke="${color}" 
            stroke-width="2" 
            stroke-linejoin="round"/>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

/**
 * 生成用户图标的Base64数据
 * @param {boolean} active 是否为激活状态
 * @returns {string} Base64编码的图标数据
 */
function generateUserIcon(active = false) {
  const color = active ? '#ff6b6b' : '#999999';
  
  const svg = `
    <svg width="81" height="81" viewBox="0 0 81 81" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40.5" cy="25" r="12" 
              fill="none" 
              stroke="${color}" 
              stroke-width="3"/>
      <path d="M20 65c0-11 9-20 20.5-20s20.5 9 20.5 20" 
            fill="none" 
            stroke="${color}" 
            stroke-width="3" 
            stroke-linecap="round"/>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

module.exports = {
  generateHomeIcon,
  generateUserIcon
};
