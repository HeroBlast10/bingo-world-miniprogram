// utils/dataLoader.js
// 数据加载和转换工具

const fs = require('fs');
const path = require('path');

/**
 * 分类映射表 - 文件夹名到中文分类名的映射
 */
const categoryMapping = {
  'MBTI': 'MBTI',
  'animals': '动物',
  'geo': '地理',
  'hobbies': '爱好',
  'knowledge': '知识',
  'life': '生活',
  'psychology': '心理',
  'students': '学生'
};

/**
 * 读取指定目录下的所有JSON文件
 * @param {string} dirPath 目录路径
 * @returns {Array} JSON文件路径数组
 */
function getJsonFiles(dirPath) {
  try {
    const files = fs.readdirSync(dirPath);
    return files.filter(file => path.extname(file) === '.json')
                .map(file => path.join(dirPath, file));
  } catch (error) {
    console.error(`读取目录失败: ${dirPath}`, error);
    return [];
  }
}

/**
 * 读取并解析JSON文件
 * @param {string} filePath JSON文件路径
 * @returns {Object|null} 解析后的JSON对象
 */
function readJsonFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`读取JSON文件失败: ${filePath}`, error);
    return null;
  }
}

/**
 * 验证和清理宾果数据
 * @param {Object} bingoData 原始宾果数据
 * @param {string} category 分类名称
 * @returns {Object|null} 清理后的宾果数据
 */
function validateAndCleanBingoData(bingoData, category) {
  if (!bingoData || typeof bingoData !== 'object') {
    return null;
  }

  // 基本字段验证
  const requiredFields = ['bingoId', 'title', 'gridSize', 'gridContent'];
  for (const field of requiredFields) {
    if (!bingoData[field]) {
      console.warn(`缺少必需字段 ${field} in ${bingoData.bingoId || 'unknown'}`);
      return null;
    }
  }

  // 清理和标准化数据
  const cleanedData = {
    bingoId: bingoData.bingoId,
    title: bingoData.title.replace(/[、A0]/g, '').trim(), // 清理标题中的特殊字符
    creator: bingoData.creator === '请手动填写' ? '系统' : bingoData.creator,
    description: bingoData.description || '',
    gridSize: {
      rows: bingoData.gridSize.rows || 5,
      cols: bingoData.gridSize.cols || 5
    },
    gridContent: [],
    category: category,
    tags: bingoData.tags || [],
    createdAt: bingoData.createdAt || new Date().toISOString()
  };

  // 验证和清理网格内容
  if (!Array.isArray(bingoData.gridContent)) {
    console.warn(`gridContent不是数组: ${bingoData.bingoId}`);
    return null;
  }

  // 转换网格内容
  for (let row = 0; row < cleanedData.gridSize.rows; row++) {
    cleanedData.gridContent[row] = [];
    
    if (!bingoData.gridContent[row] || !Array.isArray(bingoData.gridContent[row])) {
      // 如果行数据缺失，填充空数据
      for (let col = 0; col < cleanedData.gridSize.cols; col++) {
        cleanedData.gridContent[row][col] = {
          text: `格子 ${row}-${col}`,
          type: 'standard'
        };
      }
      continue;
    }

    for (let col = 0; col < cleanedData.gridSize.cols; col++) {
      const cellData = bingoData.gridContent[row][col];
      
      if (cellData && typeof cellData === 'object' && cellData.text) {
        // 清理文本内容
        let cleanText = cellData.text.replace(/[\]]/g, '').trim();
        
        cleanedData.gridContent[row][col] = {
          text: cleanText,
          type: cellData.type || 'standard'
        };
      } else {
        // 填充缺失的格子数据
        cleanedData.gridContent[row][col] = {
          text: `格子 ${row}-${col}`,
          type: 'standard'
        };
      }
    }
  }

  return cleanedData;
}

/**
 * 处理单个分类的所有宾果数据
 * @param {string} categoryDir 分类目录路径
 * @param {string} categoryName 分类名称
 * @returns {Array} 处理后的宾果数据数组
 */
function processCategoryData(categoryDir, categoryName) {
  console.log(`处理分类: ${categoryName} (${categoryDir})`);
  
  const jsonFiles = getJsonFiles(categoryDir);
  const bingoGames = [];

  for (const filePath of jsonFiles) {
    const rawData = readJsonFile(filePath);
    if (rawData) {
      const cleanedData = validateAndCleanBingoData(rawData, categoryName);
      if (cleanedData) {
        bingoGames.push(cleanedData);
        console.log(`✓ 成功处理: ${cleanedData.bingoId} - ${cleanedData.title}`);
      } else {
        console.warn(`✗ 处理失败: ${path.basename(filePath)}`);
      }
    }
  }

  console.log(`分类 ${categoryName} 处理完成，共 ${bingoGames.length} 个游戏`);
  return bingoGames;
}

/**
 * 生成完整的宾果数据结构
 * @param {string} dataDir data/json目录路径
 * @returns {Object} 完整的宾果数据结构
 */
function generateBingoData(dataDir = './data/json') {
  console.log('开始生成宾果数据...');
  
  const bingoData = {};
  let totalGames = 0;

  // 遍历所有分类目录
  for (const [dirName, categoryName] of Object.entries(categoryMapping)) {
    const categoryDir = path.join(dataDir, dirName);
    
    if (fs.existsSync(categoryDir) && fs.statSync(categoryDir).isDirectory()) {
      const categoryGames = processCategoryData(categoryDir, categoryName);
      
      if (categoryGames.length > 0) {
        bingoData[categoryName] = {};
        
        // 将数组转换为对象结构，以bingoId为key
        for (const game of categoryGames) {
          bingoData[categoryName][game.bingoId] = game;
          totalGames++;
        }
      }
    } else {
      console.warn(`分类目录不存在: ${categoryDir}`);
    }
  }

  console.log(`\n数据生成完成！`);
  console.log(`总分类数: ${Object.keys(bingoData).length}`);
  console.log(`总游戏数: ${totalGames}`);
  
  return bingoData;
}

/**
 * 将生成的数据写入bingoData.js文件
 * @param {Object} bingoData 宾果数据
 * @param {string} outputPath 输出文件路径
 */
function writeBingoDataFile(bingoData, outputPath = './utils/bingoData.js') {
  const template = `// utils/bingoData.js
// 宾果数据管理模块 - 自动生成

/**
 * 获取用户创建的游戏列表
 * @returns {Array} 用户创建的游戏数组
 */
function getUserCreatedGames() {
  try {
    return wx.getStorageSync('user_bingos') || [];
  } catch (error) {
    console.error('获取用户创建的游戏失败:', error);
    return [];
  }
}

// 宾果游戏数据
const bingos = ${JSON.stringify(bingoData, null, 2)};

/**
 * 获取所有分类名称
 * @returns {Array} 分类名称数组
 */
function getAllCategories() {
  // 获取静态分类列表
  const staticCategories = Object.keys(bingos);
  
  // 获取用户创建的游戏
  const userGames = getUserCreatedGames();
  
  // 提取用户游戏的分类
  const userCategories = userGames.map(game => game.category).filter(Boolean);
  
  // 合并并去重
  const allCategories = [...staticCategories, ...userCategories];
  return [...new Set(allCategories)];
}

/**
 * 根据分类获取该分类下的所有游戏
 * @param {string} category 分类名称
 * @returns {Array} 游戏对象数组
 */
function getGamesByCategory(category) {
  const games = [];
  
  // 获取该分类下的静态游戏
  if (bingos[category]) {
    const categoryGames = bingos[category];
    for (const gameId in categoryGames) {
      games.push({
        id: gameId,
        ...categoryGames[gameId]
      });
    }
  }
  
  // 获取用户创建的游戏
  const userGames = getUserCreatedGames();
  
  // 筛选出匹配分类的用户游戏
  const userCategoryGames = userGames.filter(game => game.category === category);
  
  // 合并静态游戏和用户游戏
  return [...games, ...userCategoryGames];
}

/**
 * 根据游戏ID查找游戏数据
 * @param {string} id 游戏ID
 * @returns {Object|null} 游戏数据对象或null
 */
function findGameById(id) {
  // 首先在静态数据中查找
  for (const category in bingos) {
    if (bingos[category][id]) {
      return {
        id: id,
        category: category,
        ...bingos[category][id]
      };
    }
  }
  
  // 如果没找到，则在用户创建的游戏中查找
  const userGames = getUserCreatedGames();
  const userGame = userGames.find(game => game.bingoId === id);
  
  if (userGame) {
    return {
      id: userGame.bingoId,
      ...userGame
    };
  }
  
  return null;
}

/**
 * 获取所有游戏列表
 * @returns {Array} 所有游戏对象数组
 */
function getAllGames() {
  const allGames = [];
  
  // 获取静态游戏
  for (const category in bingos) {
    const categoryGames = bingos[category];
    for (const gameId in categoryGames) {
      allGames.push({
        id: gameId,
        category: category,
        ...categoryGames[gameId]
      });
    }
  }
  
  // 获取用户创建的游戏
  const userGames = getUserCreatedGames();
  userGames.forEach(game => {
    allGames.push({
      id: game.bingoId,
      ...game
    });
  });
  
  return allGames;
}

/**
 * 搜索游戏
 * @param {string} keyword 搜索关键词
 * @returns {Array} 匹配的游戏数组
 */
function searchGames(keyword) {
  if (!keyword) {
    return [];
  }
  
  const allGames = getAllGames();
  const lowerKeyword = keyword.toLowerCase();
  
  return allGames.filter(game => {
    return game.title.toLowerCase().includes(lowerKeyword) ||
           game.bingoId.toLowerCase().includes(lowerKeyword) ||
           (game.description && game.description.toLowerCase().includes(lowerKeyword));
  });
}

// 导出函数
module.exports = {
  getAllCategories,
  getGamesByCategory,
  findGameById,
  getAllGames,
  searchGames,
  getUserCreatedGames,
  bingos
};
`;

  try {
    fs.writeFileSync(outputPath, template, 'utf8');
    console.log(`✓ 数据文件已生成: ${outputPath}`);
  } catch (error) {
    console.error(`✗ 写入文件失败: ${outputPath}`, error);
  }
}

// 主函数
function main() {
  console.log('=== 宾果数据转换程序 ===\n');
  
  const dataDir = './data/json';
  
  // 检查数据目录是否存在
  if (!fs.existsSync(dataDir)) {
    console.error(`数据目录不存在: ${dataDir}`);
    return;
  }
  
  // 生成宾果数据
  const bingoData = generateBingoData(dataDir);
  
  // 写入文件
  writeBingoDataFile(bingoData);
  
  console.log('\n=== 转换完成 ===');
}

// 如果直接运行此文件，执行主函数
if (require.main === module) {
  main();
}

module.exports = {
  generateBingoData,
  writeBingoDataFile,
  processCategoryData,
  validateAndCleanBingoData
};
