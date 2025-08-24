// utils/bingoData.js
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

/**
 * 保存用户创建的游戏列表
 * @param {Array} games - 游戏数组
 */
function saveUserCreatedGames(games) {
  try {
    wx.setStorageSync('user_bingos', games);
    console.log('用户创建的游戏已保存:', games.length, '个');
  } catch (error) {
    console.error('保存用户创建的游戏失败:', error);
    throw error;
  }
}

// 宾果游戏数据
const bingos = {
  "MBTI": {
    "mbti-enfj": {
      "bingoId": "mbti-enfj",
      "title": "ENFJ宾果",
      "creator": "系统",
      "description": "五个连成一线，那么你可能是灵魂导师",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "陌生人三分钟倾诉人生",
            "type": "standard"
          },
          {
            "text": "团建时自动开启激励模式",
            "type": "standard"
          },
          {
            "text": "认为冷场是个人失职",
            "type": "standard"
          },
          {
            "text": "给咖啡师写成长建议书",
            "type": "standard"
          },
          {
            "text": "把朋友圈当心理咨询室",
            "type": "standard"
          }
        ],
        [
          {
            "text": "手机存着200人的生日提醒",
            "type": "standard"
          },
          {
            "text": "看到落叶会思考人生意义",
            "type": "standard"
          },
          {
            "text": "把调解纠纷当精神瑜伽",
            "type": "standard"
          },
          {
            "text": "认为潜力需要定期挖掘",
            "type": "standard"
          },
          {
            "text": "给扫地机器人贴鼓励便签",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看新闻像在读亲友日记",
            "type": "standard"
          },
          {
            "text": "'我懂你'是最高频台词",
            "type": "standard"
          },
          {
            "text": "把独处称为'充电待机'",
            "type": "standard"
          },
          {
            "text": "认为彩虹需要情绪解读",
            "type": "standard"
          },
          {
            "text": "给外卖写500字品尝心得",
            "type": "standard"
          }
        ],
        [
          {
            "text": "超市购物像社区调研",
            "type": "standard"
          },
          {
            "text": "觉得云朵有心理状态",
            "type": "standard"
          },
          {
            "text": "给植物播放励志TED",
            "type": "standard"
          },
          {
            "text": "认为点赞是精神氧气",
            "type": "standard"
          },
          {
            "text": "把电梯等待当社交机会",
            "type": "standard"
          }
        ],
        [
          {
            "text": "备忘录记着流浪猫名字",
            "type": "standard"
          },
          {
            "text": "觉得WiFi信号需要关怀",
            "type": "standard"
          },
          {
            "text": "给手机天气配心情注释",
            "type": "standard"
          },
          {
            "text": "认为沉默是求助信号",
            "type": "standard"
          },
          {
            "text": "把数据线打结当拥抱",
            "type": "standard"
          }
        ]
      ],
      "category": "MBTI",
      "tags": [
        "人格测试",
        "心理学"
      ],
      "createdAt": "2025-07-29T01:14:01.551Z"
    },
    "mbti-enfp": {
      "bingoId": "mbti-enfp",
      "title": "ENFP宾果",
      "creator": "系统",
      "description": "五个连成一线，那么你可能是能量火箭",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "给外卖小哥人生规划",
            "type": "standard"
          },
          {
            "text": "觉得云朵需要鼓励",
            "type": "standard"
          },
          {
            "text": "把会议变成创意风暴",
            "type": "standard"
          },
          {
            "text": "手机存着500个灵感",
            "type": "standard"
          },
          {
            "text": "认为彩虹能量不足",
            "type": "standard"
          }
        ],
        [
          {
            "text": "超市排队认识全家",
            "type": "standard"
          },
          {
            "text": "给咖啡渣写赞美诗",
            "type": "standard"
          },
          {
            "text": "觉得沉默是SOS",
            "type": "standard"
          },
          {
            "text": "把消防演习变嘉年华",
            "type": "standard"
          },
          {
            "text": "认为植物有梦想",
            "type": "standard"
          }
        ],
        [
          {
            "text": "备忘录记着陌生人梦",
            "type": "standard"
          },
          {
            "text": "看悲剧片在找希望",
            "type": "standard"
          },
          {
            "text": "给电梯按钮贴爱心",
            "type": "standard"
          },
          {
            "text": "觉得WiFi需要陪伴",
            "type": "standard"
          },
          {
            "text": "把数据线打结转缘",
            "type": "standard"
          }
        ],
        [
          {
            "text": "团建时发射彩虹炮弹",
            "type": "standard"
          },
          {
            "text": "认为说明书限制潜能",
            "type": "standard"
          },
          {
            "text": "给多肉植物开辅导班",
            "type": "standard"
          },
          {
            "text": "手机铃声是加油歌",
            "type": "standard"
          },
          {
            "text": "觉得月亮需要充电",
            "type": "standard"
          }
        ],
        [
          {
            "text": "给扫地机器人颁奖",
            "type": "standard"
          },
          {
            "text": "把生日蛋糕当舞台",
            "type": "standard"
          },
          {
            "text": "认为眼泪是能量源",
            "type": "standard"
          },
          {
            "text": "给外卖写成长报告",
            "type": "standard"
          },
          {
            "text": "觉得彩虹是宇宙微笑",
            "type": "standard"
          }
        ]
      ],
      "category": "MBTI",
      "tags": [
        "人格测试",
        "心理学"
      ],
      "createdAt": "2025-07-29T01:14:01.552Z"
    },
    "mbti-entj": {
      "bingoId": "mbti-entj",
      "title": "ENTJ宾果",
      "creator": "系统",
      "description": "五个连成一线，那么你可能是天生领袖",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "团建时自动接管话筒",
            "type": "standard"
          },
          {
            "text": "把闲聊视为资源浪费",
            "type": "standard"
          },
          {
            "text": "认为感情需要KPI考核",
            "type": "standard"
          },
          {
            "text": "手机壁纸是'世界地图作战版'",
            "type": "standard"
          },
          {
            "text": "安慰人像在做战前动员",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看爱情片在分析权力结构",
            "type": "standard"
          },
          {
            "text": "'我建议'其实是命令",
            "type": "standard"
          },
          {
            "text": "把度假村当临时指挥部",
            "type": "standard"
          },
          {
            "text": "认为效率是最高美德",
            "type": "standard"
          },
          {
            "text": "给朋友发人生规划建议书",
            "type": "standard"
          }
        ],
        [
          {
            "text": "谈判时像在占领高地",
            "type": "standard"
          },
          {
            "text": "手机备忘录标题带'战略'二字",
            "type": "standard"
          },
          {
            "text": "把宠物当部下训练",
            "type": "standard"
          },
          {
            "text": "认为犹豫是决策系统漏洞",
            "type": "standard"
          },
          {
            "text": "健身时像在军事训练",
            "type": "standard"
          }
        ],
        [
          {
            "text": "超市购物像物资调配",
            "type": "standard"
          },
          {
            "text": "'五分钟'是最大时间单位",
            "type": "standard"
          },
          {
            "text": "把生日派对当项目管理",
            "type": "standard"
          },
          {
            "text": "认为眼泪是战略失误信号",
            "type": "standard"
          },
          {
            "text": "给咖啡因摄入做效益分析",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看云朵像在看战场态势",
            "type": "standard"
          },
          {
            "text": "把休闲称为'战术调整'",
            "type": "standard"
          },
          {
            "text": "认为妥协是阶段性策略",
            "type": "standard"
          },
          {
            "text": "给植物下达生长指令",
            "type": "standard"
          },
          {
            "text": "觉得彩虹需要优化色谱",
            "type": "standard"
          }
        ]
      ],
      "category": "MBTI",
      "tags": [
        "人格测试",
        "心理学"
      ],
      "createdAt": "2025-07-29T01:14:01.552Z"
    },
    "mbti-entp": {
      "bingoId": "mbti-entp",
      "title": "ENTP宾果",
      "creator": "系统",
      "description": "五个连成一线，那么你可能是魔鬼辩手",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "把辩论当有氧运动",
            "type": "standard"
          },
          {
            "text": "认为共识是思维牢笼",
            "type": "standard"
          },
          {
            "text": "手机存着反常识论文",
            "type": "standard"
          },
          {
            "text": "给传统节日设计2.0版",
            "type": "standard"
          },
          {
            "text": "觉得彩虹排序不合理",
            "type": "standard"
          }
        ],
        [
          {
            "text": "会议中突然推翻议程",
            "type": "standard"
          },
          {
            "text": "把说明书当靶子",
            "type": "standard"
          },
          {
            "text": "认为眼泪是逻辑漏洞",
            "type": "standard"
          },
          {
            "text": "给咖啡机添加区块链",
            "type": "standard"
          },
          {
            "text": "觉得云朵需要重组",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看爱情片在解构套路",
            "type": "standard"
          },
          {
            "text": "把团建变成辩论赛",
            "type": "standard"
          },
          {
            "text": "认为'不可能'是邀请函",
            "type": "standard"
          },
          {
            "text": "给扫地机器人编程",
            "type": "standard"
          },
          {
            "text": "觉得月亮是投影",
            "type": "standard"
          }
        ],
        [
          {
            "text": "超市排队颠覆经济学",
            "type": "standard"
          },
          {
            "text": "把生日蛋糕拓扑变形",
            "type": "standard"
          },
          {
            "text": "认为感情需要版本号",
            "type": "standard"
          },
          {
            "text": "给WiFi重写传输协议",
            "type": "standard"
          },
          {
            "text": "觉得彩虹是光学骗局",
            "type": "standard"
          }
        ],
        [
          {
            "text": "电梯故障设计新系统",
            "type": "standard"
          },
          {
            "text": "用哲学吵架外卖迟到",
            "type": "standard"
          },
          {
            "text": "认为植物有阴谋论",
            "type": "standard"
          },
          {
            "text": "给沉默加特效音",
            "type": "standard"
          },
          {
            "text": "把安全手册当笑话集",
            "type": "standard"
          }
        ]
      ],
      "category": "MBTI",
      "tags": [
        "人格测试",
        "心理学"
      ],
      "createdAt": "2025-07-29T01:14:01.553Z"
    },
    "mbti-esfj": {
      "bingoId": "mbti-esfj",
      "title": "ESFJ宾果",
      "creator": "系统",
      "description": "五个连成一线，那么你可能是暖心组织者",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "手机存着82人的饮食禁忌",
            "type": "standard"
          },
          {
            "text": "聚会时自动成为食物分配员",
            "type": "standard"
          },
          {
            "text": "认为没回复'收到'是紧急事件",
            "type": "standard"
          },
          {
            "text": "给邻居家的狗准备生日礼物",
            "type": "standard"
          },
          {
            "text": "觉得冷场是重大安全事故",
            "type": "standard"
          }
        ],
        [
          {
            "text": "备忘录记着同事小孩名字",
            "type": "standard"
          },
          {
            "text": "超市买三送一会分给邻居",
            "type": "standard"
          },
          {
            "text": "把调解纠纷当日常健身",
            "type": "standard"
          },
          {
            "text": "认为独处需要申请许可证",
            "type": "standard"
          },
          {
            "text": "给外卖小哥准备感谢卡片",
            "type": "standard"
          }
        ],
        [
          {
            "text": "团建照片按人脸分类归档",
            "type": "standard"
          },
          {
            "text": "觉得没人夸赞的菜会伤心",
            "type": "standard"
          },
          {
            "text": "把社区公告当情书阅读",
            "type": "standard"
          },
          {
            "text": "认为和谐高于事实真相",
            "type": "standard"
          },
          {
            "text": "给电梯按钮贴暖心标语",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看天气预报像读亲友近况",
            "type": "standard"
          },
          {
            "text": "'大家都开心吗'是灵魂拷问",
            "type": "standard"
          },
          {
            "text": "把独处称为'社交待机'",
            "type": "standard"
          },
          {
            "text": "认为反馈是精神维生素",
            "type": "standard"
          },
          {
            "text": "给共享单车系蝴蝶结",
            "type": "standard"
          }
        ],
        [
          {
            "text": "手机电量低于50%就焦虑",
            "type": "standard"
          },
          {
            "text": "觉得云朵需要社交陪伴",
            "type": "standard"
          },
          {
            "text": "给植物播放交友广播",
            "type": "standard"
          },
          {
            "text": "认为点赞是生存必需品",
            "type": "standard"
          },
          {
            "text": "把垃圾分类当联谊活动",
            "type": "standard"
          }
        ]
      ],
      "category": "MBTI",
      "tags": [
        "人格测试",
        "心理学"
      ],
      "createdAt": "2025-07-29T01:14:01.553Z"
    },
    "mbti-esfp": {
      "bingoId": "mbti-esfp",
      "title": "ESFP宾果",
      "creator": "系统",
      "description": "五个连成一线，那么你可能是派对动物",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "超市购物车当舞蹈道具",
            "type": "standard"
          },
          {
            "text": "电梯里开个人演唱会",
            "type": "standard"
          },
          {
            "text": "认为镜子是最好听众",
            "type": "standard"
          },
          {
            "text": "把工作会议变脱口秀",
            "type": "standard"
          },
          {
            "text": "停电时组织影子剧院",
            "type": "standard"
          }
        ],
        [
          {
            "text": "手机相册全是表情包",
            "type": "standard"
          },
          {
            "text": "觉得沉默是健康隐患",
            "type": "standard"
          },
          {
            "text": "给外卖小哥编加油歌",
            "type": "standard"
          },
          {
            "text": "把垃圾分类当打击乐",
            "type": "standard"
          },
          {
            "text": "认为彩虹需要伴舞",
            "type": "standard"
          }
        ],
        [
          {
            "text": "备忘录记着笑话库存",
            "type": "standard"
          },
          {
            "text": "看悲剧片在找笑点",
            "type": "standard"
          },
          {
            "text": "给咖啡拉花办颁奖礼",
            "type": "standard"
          },
          {
            "text": "觉得云朵需要美颜",
            "type": "standard"
          },
          {
            "text": "把数据线当麦克风",
            "type": "standard"
          }
        ],
        [
          {
            "text": "排队时教陌生人跳舞",
            "type": "standard"
          },
          {
            "text": "认为PPT需要灯光秀",
            "type": "standard"
          },
          {
            "text": "给扫地机器人加油",
            "type": "standard"
          },
          {
            "text": "手机铃声是自创单曲",
            "type": "standard"
          },
          {
            "text": "觉得会议记录要押韵",
            "type": "standard"
          }
        ],
        [
          {
            "text": "给自动门设计出场音效",
            "type": "standard"
          },
          {
            "text": "把消防演习当蹦迪",
            "type": "standard"
          },
          {
            "text": "认为苦瓜需要鼓励",
            "type": "standard"
          },
          {
            "text": "给WiFi起明星名字",
            "type": "standard"
          },
          {
            "text": "觉得月亮是舞台灯光",
            "type": "standard"
          }
        ]
      ],
      "category": "MBTI",
      "tags": [
        "人格测试",
        "心理学"
      ],
      "createdAt": "2025-07-29T01:14:01.553Z"
    },
    "mbti-estj": {
      "bingoId": "mbti-estj",
      "title": "ESTJ宾果",
      "creator": "系统",
      "description": "五个连成一线，那么你可能是高效指挥官",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "看到歪斜的标签会立即扶正",
            "type": "standard"
          },
          {
            "text": "手机闹钟按五分钟间隔排兵布阵",
            "type": "standard"
          },
          {
            "text": "认为'流程优化'是情话",
            "type": "standard"
          },
          {
            "text": "团建时自动成为总指挥",
            "type": "standard"
          },
          {
            "text": "把休闲称为'战略补给时间'",
            "type": "standard"
          }
        ],
        [
          {
            "text": "衣柜按色系和季节精确分区",
            "type": "standard"
          },
          {
            "text": "'差不多'会触发警报系统",
            "type": "standard"
          },
          {
            "text": "用Excel管理追剧进度",
            "type": "standard"
          },
          {
            "text": "认为拖延症是文明之敌",
            "type": "standard"
          },
          {
            "text": "给朋友发聚会流程PDF",
            "type": "standard"
          }
        ],
        [
          {
            "text": "超市购物像军事演习",
            "type": "standard"
          },
          {
            "text": "把生日蛋糕切成几何图形",
            "type": "standard"
          },
          {
            "text": "认为弹性工作时间是阴谋",
            "type": "standard"
          },
          {
            "text": "手机相册全是流程图截图",
            "type": "standard"
          },
          {
            "text": "给咖啡机制定操作手册",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看球赛时自动分析战术漏洞",
            "type": "standard"
          },
          {
            "text": "把散步称为'地面侦察'",
            "type": "standard"
          },
          {
            "text": "认为浪漫就是准时赴约",
            "type": "standard"
          },
          {
            "text": "给多肉植物排值班表",
            "type": "standard"
          },
          {
            "text": "'让我看看你的计划'是口头禅",
            "type": "standard"
          }
        ],
        [
          {
            "text": "认为混乱是可控变量",
            "type": "standard"
          },
          {
            "text": "用甘特图规划周末",
            "type": "standard"
          },
          {
            "text": "把发呆定义为系统维护",
            "type": "standard"
          },
          {
            "text": "给遥控器贴使用标签",
            "type": "standard"
          },
          {
            "text": "觉得弹性是计划的敌人",
            "type": "standard"
          }
        ]
      ],
      "category": "MBTI",
      "tags": [
        "人格测试",
        "心理学"
      ],
      "createdAt": "2025-07-29T01:14:01.554Z"
    },
    "mbti-estp": {
      "bingoId": "mbti-estp",
      "title": "ESTP宾果",
      "creator": "系统",
      "description": "五个连成一线，那么你可能是冒险家",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "把消防演习当极限运动",
            "type": "standard"
          },
          {
            "text": "谈判时像在玩德州扑克",
            "type": "standard"
          },
          {
            "text": "认为安全手册是科幻小说",
            "type": "standard"
          },
          {
            "text": "电梯故障反而兴奋拍照",
            "type": "standard"
          },
          {
            "text": "用街舞动作按ATM密码",
            "type": "standard"
          }
        ],
        [
          {
            "text": "危机时刻肾上腺素狂喜",
            "type": "standard"
          },
          {
            "text": "把会议室当跑酷场地",
            "type": "standard"
          },
          {
            "text": "觉得计划是创意枷锁",
            "type": "standard"
          },
          {
            "text": "迷路时发现新大陆",
            "type": "standard"
          },
          {
            "text": "用篮球动作扔垃圾",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看说明书是浪费时间",
            "type": "standard"
          },
          {
            "text": "把团建变成生存挑战",
            "type": "standard"
          },
          {
            "text": "认为'风险评估'是骂人",
            "type": "standard"
          },
          {
            "text": "停电时组织烛光派对",
            "type": "standard"
          },
          {
            "text": "用滑板代步取外卖",
            "type": "standard"
          }
        ],
        [
          {
            "text": "超市推车玩漂移",
            "type": "standard"
          },
          {
            "text": "把截止日期当兴奋剂",
            "type": "standard"
          },
          {
            "text": "觉得安全带影响发挥",
            "type": "standard"
          },
          {
            "text": "暴雨天出门测试防水",
            "type": "standard"
          },
          {
            "text": "用攀岩技巧拿高处零食",
            "type": "standard"
          }
        ],
        [
          {
            "text": "把警告牌当挑战书",
            "type": "standard"
          },
          {
            "text": "认为会议室需要球框",
            "type": "standard"
          },
          {
            "text": "交通堵塞时表演车技",
            "type": "standard"
          },
          {
            "text": "给消防演练加特效",
            "type": "standard"
          },
          {
            "text": "觉得安全网是蹦床",
            "type": "standard"
          }
        ]
      ],
      "category": "MBTI",
      "tags": [
        "人格测试",
        "心理学"
      ],
      "createdAt": "2025-07-29T01:14:01.554Z"
    },
    "mbti-infj": {
      "bingoId": "mbti-infj",
      "title": "INFJ宾果",
      "creator": "系统",
      "description": "五个连成一线，那么你可能是温柔预言家",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "看透谎言但假装不知道",
            "type": "standard"
          },
          {
            "text": "深夜编辑千字安慰信息",
            "type": "standard"
          },
          {
            "text": "在聚会角落当心灵护士",
            "type": "standard"
          },
          {
            "text": "对他人情绪变化雷达预警",
            "type": "standard"
          },
          {
            "text": "备忘录存着陌生人故事",
            "type": "standard"
          }
        ],
        [
          {
            "text": "预言朋友分手被当巫术",
            "type": "standard"
          },
          {
            "text": "用隐喻说话像在出谜题",
            "type": "standard"
          },
          {
            "text": "给垃圾桶分类写感谢信",
            "type": "standard"
          },
          {
            "text": "觉得电梯按钮需要安抚",
            "type": "standard"
          },
          {
            "text": "把咖啡渍解读成星座",
            "type": "standard"
          }
        ],
        [
          {
            "text": "在超市感应商品情绪",
            "type": "standard"
          },
          {
            "text": "给植物播放古典乐",
            "type": "standard"
          },
          {
            "text": "认为乌云需要心理咨询",
            "type": "standard"
          },
          {
            "text": "用塔罗牌决定午餐",
            "type": "standard"
          },
          {
            "text": "给扫地机器人让路鞠躬",
            "type": "standard"
          }
        ],
        [
          {
            "text": "觉得wifi信号有孤独感",
            "type": "standard"
          },
          {
            "text": "给打印机加油打气",
            "type": "standard"
          },
          {
            "text": "认为橡皮擦在自我牺牲",
            "type": "standard"
          },
          {
            "text": "对自动门说'辛苦了'",
            "type": "standard"
          },
          {
            "text": "给过期食品办告别仪式",
            "type": "standard"
          }
        ],
        [
          {
            "text": "觉得月亮是夜间监视器",
            "type": "standard"
          },
          {
            "text": "给手机充电线编友谊手链",
            "type": "standard"
          },
          {
            "text": "认为闹钟在报复社会",
            "type": "standard"
          },
          {
            "text": "给外卖APP写情诗",
            "type": "standard"
          },
          {
            "text": "觉得电梯数字需要疗愈",
            "type": "standard"
          }
        ]
      ],
      "category": "MBTI",
      "tags": [
        "人格测试",
        "心理学"
      ],
      "createdAt": "2025-07-29T01:14:01.554Z"
    },
    "mbti-infp": {
      "bingoId": "mbti-infp",
      "title": "INFP宾果",
      "creator": "系统",
      "description": "五个连成一线，那么你可能是人间小蝴蝶",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "为流浪云朵写十四行诗",
            "type": "standard"
          },
          {
            "text": "收藏落叶当书签",
            "type": "standard"
          },
          {
            "text": "和咖啡拉花说早安",
            "type": "standard"
          },
          {
            "text": "觉得路灯在讲故事",
            "type": "standard"
          },
          {
            "text": "给文具起名字",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看催泪弹广告会哭",
            "type": "standard"
          },
          {
            "text": "备忘录全是梦境记录",
            "type": "standard"
          },
          {
            "text": "认为蒲公英是自由信使",
            "type": "standard"
          },
          {
            "text": "给手机天气配心情注释",
            "type": "standard"
          },
          {
            "text": "觉得WiFi信号在跳舞",
            "type": "standard"
          }
        ],
        [
          {
            "text": "把树洞当战略合作伙伴",
            "type": "standard"
          },
          {
            "text": "给外卖小哥画感谢小卡",
            "type": "standard"
          },
          {
            "text": "坚信玩具有夜生活",
            "type": "standard"
          },
          {
            "text": "用彩虹颜色规划一周",
            "type": "standard"
          },
          {
            "text": "认为奶茶配料需要共情",
            "type": "standard"
          }
        ],
        [
          {
            "text": "把阴天当天空在emo",
            "type": "standard"
          },
          {
            "text": "给洗衣机唱鼓励歌",
            "type": "standard"
          },
          {
            "text": "觉得数据线在拥抱",
            "type": "standard"
          },
          {
            "text": "用童话逻辑解释物理",
            "type": "standard"
          },
          {
            "text": "认为番茄需要赞美才变红",
            "type": "standard"
          }
        ],
        [
          {
            "text": "给自动门说谢谢",
            "type": "standard"
          },
          {
            "text": "觉得月亮在跟踪自己",
            "type": "standard"
          },
          {
            "text": "给WiFi改诗意名称",
            "type": "standard"
          },
          {
            "text": "坚信玩偶夜间开派对",
            "type": "standard"
          },
          {
            "text": "认为雨声是天空密语",
            "type": "standard"
          }
        ]
      ],
      "category": "MBTI",
      "tags": [
        "人格测试",
        "心理学"
      ],
      "createdAt": "2025-07-29T01:14:01.554Z"
    },
    "mbti-intj": {
      "bingoId": "mbti-intj",
      "title": "INTJ宾果",
      "creator": "系统",
      "description": "五个连成一线，那么你可能是高冷战略家",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "看到低效方案会瞳孔地震",
            "type": "standard"
          },
          {
            "text": "人生计划精确到五年后周二",
            "type": "standard"
          },
          {
            "text": "辩论时像在下一盘大棋",
            "type": "standard"
          },
          {
            "text": "对'感情用事'这个词过敏",
            "type": "standard"
          },
          {
            "text": "手机备忘录全是思维导图",
            "type": "standard"
          }
        ],
        [
          {
            "text": "认为拥抱不如解决方案实在",
            "type": "standard"
          },
          {
            "text": "深夜思考人类文明存续问题",
            "type": "standard"
          },
          {
            "text": "把社交称为'能量回收时间'",
            "type": "standard"
          },
          {
            "text": "衣柜只有黑白灰三色战袍",
            "type": "standard"
          },
          {
            "text": "被夸'你好有人情味'会愣住",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看爱情片在分析人物动机",
            "type": "standard"
          },
          {
            "text": "觉得团建是反人类发明",
            "type": "standard"
          },
          {
            "text": "书架上尼采旁边放着《君主论》",
            "type": "standard"
          },
          {
            "text": "用SWOT分析早餐吃什么",
            "type": "standard"
          },
          {
            "text": "'随便'是最可怕的答案",
            "type": "standard"
          }
        ],
        [
          {
            "text": "电脑桌面整洁得像手术室",
            "type": "standard"
          },
          {
            "text": "认为眼泪是决策干扰项",
            "type": "standard"
          },
          {
            "text": "对'你太较真了'感到困惑",
            "type": "standard"
          },
          {
            "text": "秘密梦想是设计乌托邦",
            "type": "standard"
          },
          {
            "text": "安慰人时像在写可行性报告",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看到漏洞会忍不住修改",
            "type": "standard"
          },
          {
            "text": "'我觉得'后面必跟数据支撑",
            "type": "standard"
          },
          {
            "text": "把人生当战略游戏在玩",
            "type": "standard"
          },
          {
            "text": "认为小丑表情包是最高赞美",
            "type": "standard"
          },
          {
            "text": "遇到彩虹屁会反向技术拆解",
            "type": "standard"
          }
        ]
      ],
      "category": "MBTI",
      "tags": [
        "人格测试",
        "心理学"
      ],
      "createdAt": "2025-07-29T01:14:01.554Z"
    },
    "mbti-intp": {
      "bingoId": "mbti-intp",
      "title": "INTP宾果",
      "creator": "系统",
      "description": "五个连成一线，那么你可能是好奇宝宝",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "聊天时突然陷入宇宙沉思",
            "type": "standard"
          },
          {
            "text": "书签栏有47个未读论文",
            "type": "standard"
          },
          {
            "text": "认为'这不合逻辑'是脏话",
            "type": "standard"
          },
          {
            "text": "把冰箱当图书馆用",
            "type": "standard"
          },
          {
            "text": "对冷笑话数据库了如指掌",
            "type": "standard"
          }
        ],
        [
          {
            "text": "洗澡时发明时间机器",
            "type": "standard"
          },
          {
            "text": "'稍等'意味着三小时研究",
            "type": "standard"
          },
          {
            "text": "用数学公式解感情问题",
            "type": "standard"
          },
          {
            "text": "收藏夹里有黑洞解剖图",
            "type": "standard"
          },
          {
            "text": "觉得社交礼仪是玄学",
            "type": "standard"
          }
        ],
        [
          {
            "text": "定义'收拾'为堆出新形状",
            "type": "standard"
          },
          {
            "text": "突然验证牙膏挤法最优解",
            "type": "standard"
          },
          {
            "text": "看说明书比看小说入迷",
            "type": "standard"
          },
          {
            "text": "认为小狗摇尾巴是混沌理论",
            "type": "standard"
          },
          {
            "text": "把生日蜡烛当小型实验",
            "type": "standard"
          }
        ],
        [
          {
            "text": "聊天记录充满'为什么'",
            "type": "standard"
          },
          {
            "text": "用编程思维养盆栽",
            "type": "standard"
          },
          {
            "text": "觉得表情包是信息压缩艺术",
            "type": "standard"
          },
          {
            "text": "给咖啡杯分类量子态",
            "type": "standard"
          },
          {
            "text": "解释笑话比讲笑话时间长",
            "type": "standard"
          }
        ],
        [
          {
            "text": "衣柜里有元素周期表T恤",
            "type": "standard"
          },
          {
            "text": "认为'差不多'是危险词汇",
            "type": "standard"
          },
          {
            "text": "给扫地机器人写优化代码",
            "type": "standard"
          },
          {
            "text": "用贝叶斯定理决定吃啥",
            "type": "standard"
          },
          {
            "text": "觉得彩虹是光谱诈骗",
            "type": "standard"
          }
        ]
      ],
      "category": "MBTI",
      "tags": [
        "人格测试",
        "心理学"
      ],
      "createdAt": "2025-07-29T01:14:01.555Z"
    },
    "mbti-isfj": {
      "bingoId": "mbti-isfj",
      "title": "ISFJ宾果",
      "creator": "系统",
      "description": "五个连成一线，那么你可能是无声天使",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "记得十年前借出的橡皮",
            "type": "standard"
          },
          {
            "text": "聚会后默默收拾所有杯子",
            "type": "standard"
          },
          {
            "text": "认为'不用谢'是客套话",
            "type": "standard"
          },
          {
            "text": "给邻居门把挂自制小点心",
            "type": "standard"
          },
          {
            "text": "觉得被需要是最高赞美",
            "type": "standard"
          }
        ],
        [
          {
            "text": "手机存着82个用药提醒",
            "type": "standard"
          },
          {
            "text": "超市特价会帮老人代购",
            "type": "standard"
          },
          {
            "text": "把倾听当作心灵瑜伽",
            "type": "standard"
          },
          {
            "text": "认为感谢信要手写三遍",
            "type": "standard"
          },
          {
            "text": "给共享单车装防雨座套",
            "type": "standard"
          }
        ],
        [
          {
            "text": "衣柜里有应急爱心包裹",
            "type": "standard"
          },
          {
            "text": "觉得没回消息让人担心",
            "type": "standard"
          },
          {
            "text": "把调解称为'和平维护'",
            "type": "standard"
          },
          {
            "text": "认为细节是爱的密码",
            "type": "standard"
          },
          {
            "text": "给电梯按钮消毒并贴花",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看天气预报像战备检查",
            "type": "standard"
          },
          {
            "text": "'你需要吗'是本能问候",
            "type": "standard"
          },
          {
            "text": "把独处称为'服务待机'",
            "type": "standard"
          },
          {
            "text": "认为关怀是基本义务",
            "type": "standard"
          },
          {
            "text": "给流浪云朵准备虚拟伞",
            "type": "standard"
          }
        ],
        [
          {
            "text": "备忘录记着同事过敏源",
            "type": "standard"
          },
          {
            "text": "觉得植物需要睡前故事",
            "type": "standard"
          },
          {
            "text": "给打印机喂“心灵鸡汤”",
            "type": "standard"
          },
          {
            "text": "认为点赞是能量补给",
            "type": "standard"
          },
          {
            "text": "把数据线缠绕当拥抱",
            "type": "standard"
          }
        ]
      ],
      "category": "MBTI",
      "tags": [
        "人格测试",
        "心理学"
      ],
      "createdAt": "2025-07-29T01:14:01.555Z"
    },
    "mbti-isfp": {
      "bingoId": "mbti-isfp",
      "title": "ISFP宾果",
      "creator": "系统",
      "description": "五个连成一线，那么你可能是诗意精灵",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "给外卖包装写俳句",
            "type": "standard"
          },
          {
            "text": "觉得雨声是天空钢琴",
            "type": "standard"
          },
          {
            "text": "把咖啡渍当抽象画",
            "type": "standard"
          },
          {
            "text": "会议笔记变成涂鸦本",
            "type": "standard"
          },
          {
            "text": "认为云朵需要取名",
            "type": "standard"
          }
        ],
        [
          {
            "text": "手机存着142张夕阳",
            "type": "standard"
          },
          {
            "text": "给扫地机器人编芭蕾",
            "type": "standard"
          },
          {
            "text": "觉得数据线在跳舞",
            "type": "standard"
          },
          {
            "text": "把垃圾分类当调色",
            "type": "standard"
          },
          {
            "text": "认为彩虹是未完成",
            "type": "standard"
          }
        ],
        [
          {
            "text": "备忘录记着落叶脉络",
            "type": "standard"
          },
          {
            "text": "看财务报表在找韵律",
            "type": "standard"
          },
          {
            "text": "给电梯按钮画笑脸",
            "type": "standard"
          },
          {
            "text": "觉得WiFi需要配色",
            "type": "standard"
          },
          {
            "text": "把沉默当创作前奏",
            "type": "standard"
          }
        ],
        [
          {
            "text": "超市排队设计手链",
            "type": "standard"
          },
          {
            "text": "认为会议室需要薰衣草",
            "type": "standard"
          },
          {
            "text": "给多肉植物写情书",
            "type": "standard"
          },
          {
            "text": "手机铃声是自创雨声",
            "type": "standard"
          },
          {
            "text": "觉得月亮是夜光颜料",
            "type": "standard"
          }
        ],
        [
          {
            "text": "给外卖小哥画肖像",
            "type": "standard"
          },
          {
            "text": "把消防演习当行为艺术",
            "type": "standard"
          },
          {
            "text": "认为苦瓜有忧郁美",
            "type": "standard"
          },
          {
            "text": "给咖啡渣占卜人生",
            "type": "standard"
          },
          {
            "text": "觉得彩虹是天空裂痕",
            "type": "standard"
          }
        ]
      ],
      "category": "MBTI",
      "tags": [
        "人格测试",
        "心理学"
      ],
      "createdAt": "2025-07-29T01:14:01.555Z"
    },
    "mbti-istj": {
      "bingoId": "mbti-istj",
      "title": "ISTJ宾果",
      "creator": "系统",
      "description": "五个连成一线，那么你可能是可靠卫士",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "十年前收据还按月份装订",
            "type": "standard"
          },
          {
            "text": "手机相册全是说明书照片",
            "type": "standard"
          },
          {
            "text": "认为'突发惊喜'是矛盾词",
            "type": "standard"
          },
          {
            "text": "衣柜像博物馆标本陈列",
            "type": "standard"
          },
          {
            "text": "给遥控器穿防尘外套",
            "type": "standard"
          }
        ],
        [
          {
            "text": "旅行前做79页应急预案",
            "type": "standard"
          },
          {
            "text": "觉得创新需要风险评估",
            "type": "standard"
          },
          {
            "text": "冰箱食物按保质期列队",
            "type": "standard"
          },
          {
            "text": "认为感情应该定期审计",
            "type": "standard"
          },
          {
            "text": "给多肉植物写生长日志",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看剧必须按出品年代排序",
            "type": "standard"
          },
          {
            "text": "'让我查下手册'是本能",
            "type": "standard"
          },
          {
            "text": "把突发聚会视为系统攻击",
            "type": "standard"
          },
          {
            "text": "手机闹钟误差不超过3秒",
            "type": "standard"
          },
          {
            "text": "认为彩虹应该标准七色",
            "type": "standard"
          }
        ],
        [
          {
            "text": "超市购物像精密实验",
            "type": "standard"
          },
          {
            "text": "书柜按国际标准分类法",
            "type": "standard"
          },
          {
            "text": "把散步称为'地形勘察'",
            "type": "standard"
          },
          {
            "text": "认为幽默需要提前排练",
            "type": "standard"
          },
          {
            "text": "给WiFi信号画覆盖地图",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看云朵像在检查生产瑕疵",
            "type": "standard"
          },
          {
            "text": "觉得'差不多'是危险词汇",
            "type": "standard"
          },
          {
            "text": "把生日称为'年度维护日'",
            "type": "standard"
          },
          {
            "text": "认为混乱是可控变量",
            "type": "standard"
          },
          {
            "text": "给咖啡杯做使用登记表",
            "type": "standard"
          }
        ]
      ],
      "category": "MBTI",
      "tags": [
        "人格测试",
        "心理学"
      ],
      "createdAt": "2025-07-29T01:14:01.555Z"
    },
    "mbti-istp": {
      "bingoId": "mbti-istp",
      "title": "ISTP宾果",
      "creator": "系统",
      "description": "五个连成一线，那么你可能是机械师",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "拆家电当冥想",
            "type": "standard"
          },
          {
            "text": "认为说明书是剧透",
            "type": "standard"
          },
          {
            "text": "把团建视为刑期",
            "type": "standard"
          },
          {
            "text": "手机存着零件3D图",
            "type": "standard"
          },
          {
            "text": "给咖啡机做外科手术",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看爱情片在研究打光",
            "type": "standard"
          },
          {
            "text": "觉得社交是耗电行为",
            "type": "standard"
          },
          {
            "text": "用扳手开红酒瓶",
            "type": "standard"
          },
          {
            "text": "备忘录记着材料参数",
            "type": "standard"
          },
          {
            "text": "认为彩虹需要光谱分析",
            "type": "standard"
          }
        ],
        [
          {
            "text": "超市排队研究货架结构",
            "type": "standard"
          },
          {
            "text": "把多肉当机械养护",
            "type": "standard"
          },
          {
            "text": "认为感情需要调试",
            "type": "standard"
          },
          {
            "text": "给遥控器装涡轮增压",
            "type": "standard"
          },
          {
            "text": "觉得云层是故障代码",
            "type": "standard"
          }
        ],
        [
          {
            "text": "电梯故障反而兴奋",
            "type": "standard"
          },
          {
            "text": "用焊接技术修眼镜",
            "type": "standard"
          },
          {
            "text": "把生日蛋糕当工程",
            "type": "standard"
          },
          {
            "text": "认为植物需要校准",
            "type": "standard"
          },
          {
            "text": "给WiFi信号画电路图",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看雨滴计算落点",
            "type": "standard"
          },
          {
            "text": "觉得拥抱是接口对接",
            "type": "standard"
          },
          {
            "text": "给手机装液压支架",
            "type": "standard"
          },
          {
            "text": "认为彩虹是光学bug",
            "type": "standard"
          },
          {
            "text": "把沉默当系统待机",
            "type": "standard"
          }
        ]
      ],
      "category": "MBTI",
      "tags": [
        "人格测试",
        "心理学"
      ],
      "createdAt": "2025-07-29T01:14:01.555Z"
    }
  },
  "动物": {
    "aigou": {
      "bingoId": "aigou",
      "title": "爱狗宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你是名副其实的狗狗迷！",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "家里养了狗",
            "type": "standard"
          },
          {
            "text": "能认出10种以上的犬种",
            "type": "standard"
          },
          {
            "text": "刷狗狗视频能笑一小时",
            "type": "standard"
          },
          {
            "text": "每天遛狗超过30分钟",
            "type": "standard"
          },
          {
            "text": "会给狗狗过生日",
            "type": "standard"
          }
        ],
        [
          {
            "text": "给狗狗买衣服",
            "type": "standard"
          },
          {
            "text": "了解狗狗常见疾病",
            "type": "standard"
          },
          {
            "text": "关注多个狗狗博主",
            "type": "standard"
          },
          {
            "text": "知道狗狗不能吃巧克力",
            "type": "standard"
          },
          {
            "text": "给狗狗取了人名",
            "type": "standard"
          }
        ],
        [
          {
            "text": "狗狗是你的手机壁纸",
            "type": "standard"
          },
          {
            "text": "愿意带狗狗旅行",
            "type": "standard"
          },
          {
            "text": "见到狗就想摸",
            "type": "standard"
          },
          {
            "text": "知道柯基不是小短腿的全部",
            "type": "standard"
          },
          {
            "text": "懂狗狗情绪语言",
            "type": "standard"
          }
        ],
        [
          {
            "text": "在狗狗面前说“宝宝最乖”",
            "type": "standard"
          },
          {
            "text": "曾在狗展驻足超30分钟",
            "type": "standard"
          },
          {
            "text": "懂狗粮营养成分",
            "type": "standard"
          },
          {
            "text": "狗狗打喷嚏都觉得可爱",
            "type": "standard"
          },
          {
            "text": "愿意为狗狗放弃社交",
            "type": "standard"
          }
        ],
        [
          {
            "text": "为狗狗建小窝",
            "type": "standard"
          },
          {
            "text": "狗狗舔你就原地融化",
            "type": "standard"
          },
          {
            "text": "狗比人睡得好都嫉妒",
            "type": "standard"
          },
          {
            "text": "被狗狗叫醒也不生气",
            "type": "standard"
          },
          {
            "text": "觉得狗比人好懂",
            "type": "standard"
          }
        ]
      ],
      "category": "动物",
      "tags": [
        "狗狗",
        "宠物",
        "萌物"
      ],
      "createdAt": "2025-07-29T01:14:01.556Z"
    },
    "chanshiguan": {
      "bingoId": "chanshiguan",
      "title": "铲屎官宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是铲屎官资深代表",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "撸猫成瘾",
            "type": "standard"
          },
          {
            "text": "家中猫主子地位高",
            "type": "standard"
          },
          {
            "text": "看猫打哈欠都会截图",
            "type": "standard"
          },
          {
            "text": "猫叫你就秒回应",
            "type": "standard"
          },
          {
            "text": "不管几只都叫“宝宝”",
            "type": "standard"
          }
        ],
        [
          {
            "text": "手机全是猫照片",
            "type": "standard"
          },
          {
            "text": "猫不理你你还贴贴",
            "type": "standard"
          },
          {
            "text": "懂得猫的肚皮陷阱",
            "type": "standard"
          },
          {
            "text": "玩具比猫还多",
            "type": "standard"
          },
          {
            "text": "养猫就是不吸猫就难受",
            "type": "standard"
          }
        ],
        [
          {
            "text": "愿为猫省吃俭用",
            "type": "standard"
          },
          {
            "text": "猫咪误删你资料你还能笑",
            "type": "standard"
          },
          {
            "text": "和猫互相监视",
            "type": "standard"
          },
          {
            "text": "吸猫成晚睡原因",
            "type": "standard"
          },
          {
            "text": "对别人家的猫也热情",
            "type": "standard"
          }
        ],
        [
          {
            "text": "给猫洗澡像打仗",
            "type": "standard"
          },
          {
            "text": "知道猫最怕吹风机",
            "type": "standard"
          },
          {
            "text": "猫掉毛你也乐呵呵",
            "type": "standard"
          },
          {
            "text": "猫咪生气你先道歉",
            "type": "standard"
          },
          {
            "text": "和猫说“对不起”是常态",
            "type": "standard"
          }
        ],
        [
          {
            "text": "猫扑你脸你都幸福",
            "type": "standard"
          },
          {
            "text": "被猫咬叫“爱咬人精”",
            "type": "standard"
          },
          {
            "text": "想过开猫咖",
            "type": "standard"
          },
          {
            "text": "下班回家第一句话是喊猫",
            "type": "standard"
          },
          {
            "text": "猫咪才是生活中心",
            "type": "standard"
          }
        ]
      ],
      "category": "动物",
      "tags": [
        "猫咪",
        "宠物",
        "猫奴"
      ],
      "createdAt": "2025-07-29T01:14:01.556Z"
    },
    "damaomi": {
      "bingoId": "damaomi",
      "title": "大猫咪宾果",
      "creator": "系统",
      "description": "五点连成一条线说明你是一只大猫咪",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "不喜欢噪音",
            "type": "standard"
          },
          {
            "text": "不爱运动",
            "type": "standard"
          },
          {
            "text": "喜欢睡在软软的地方",
            "type": "standard"
          },
          {
            "text": "对喜欢或亲密的人会表现得像小孩子",
            "type": "standard"
          },
          {
            "text": "不喜欢跟陌生人肢体接触",
            "type": "standard"
          }
        ],
        [
          {
            "text": "夏天喜欢凉快",
            "type": "standard"
          },
          {
            "text": "会在白天睡大觉",
            "type": "standard"
          },
          {
            "text": "体长超过20cm",
            "type": "standard"
          },
          {
            "text": "有陌生人在家中会感到不自在",
            "type": "standard"
          },
          {
            "text": "对小孩子很耐心",
            "type": "standard"
          }
        ],
        [
          {
            "text": "喜欢小动物鸟类或昆虫",
            "type": "standard"
          },
          {
            "text": "爱吃鱼、虾、蟹等水产",
            "type": "standard"
          },
          {
            "text": "进究卫生注重个人清洁",
            "type": "standard"
          },
          {
            "text": "爱吃肉",
            "type": "standard"
          },
          {
            "text": "觉得毛茸茸的东西摸起来很舒服",
            "type": "standard"
          }
        ],
        [
          {
            "text": "喜欢植物的芳香",
            "type": "standard"
          },
          {
            "text": "不喜欢无效社交",
            "type": "standard"
          },
          {
            "text": "体重超过5kg",
            "type": "standard"
          },
          {
            "text": "会在晚上不睡觉",
            "type": "standard"
          },
          {
            "text": "不喜欢被人突然抓起来",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有隐私需求需要个人空间",
            "type": "standard"
          },
          {
            "text": "不会发自内心地顺从讨厌的上司",
            "type": "standard"
          },
          {
            "text": "会在专门的地方如厕",
            "type": "standard"
          },
          {
            "text": "不喜欢被人踢到",
            "type": "standard"
          },
          {
            "text": "不喜欢被打湿或踩到水",
            "type": "standard"
          }
        ]
      ],
      "category": "动物",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.557Z"
    },
    "mogu": {
      "bingoId": "mogu",
      "title": "蘑菇宾果",
      "creator": "系统",
      "description": "你也是蘑菇吗?来试着将五个连成一条线吧!",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "经常撑着伞",
            "type": "standard"
          },
          {
            "text": "夏天比冬天活动更多",
            "type": "standard"
          },
          {
            "text": "喜欢待在潮湿的暗处",
            "type": "standard"
          },
          {
            "text": "靠各种死掉的东西续命",
            "type": "standard"
          },
          {
            "text": "形态千变万化,难以捉摸",
            "type": "standard"
          }
        ],
        [
          {
            "text": "当过喷子或时不时想当喷子",
            "type": "standard"
          },
          {
            "text": "是精神病或被当成过精神病",
            "type": "standard"
          },
          {
            "text": "感觉大自然才是自己的家",
            "type": "standard"
          },
          {
            "text": "被评价过“你有毒啊”",
            "type": "standard"
          },
          {
            "text": "留过齐刘海或整齐短发",
            "type": "standard"
          }
        ],
        [
          {
            "text": "喜欢玩捉迷藏害怕被发现",
            "type": "standard"
          },
          {
            "text": "有大脑袋或喜欢戴大帽子",
            "type": "standard"
          },
          {
            "text": "喜欢雨天",
            "type": "standard"
          },
          {
            "text": "身材比较圆润或矮小",
            "type": "standard"
          },
          {
            "text": "幻想过和僵尸战斗n个回合",
            "type": "standard"
          }
        ],
        [
          {
            "text": "会长时间地一动也不动",
            "type": "standard"
          },
          {
            "text": "晒太多阳光会死掉",
            "type": "standard"
          },
          {
            "text": "让他人感觉难以捉摸",
            "type": "standard"
          },
          {
            "text": "把云南当成精神故乡之一",
            "type": "standard"
          },
          {
            "text": "拥有让人产生幻觉的能力",
            "type": "standard"
          }
        ],
        [
          {
            "text": "身上散发着淡淡的死意",
            "type": "standard"
          },
          {
            "text": "喜欢草地或大树脚下",
            "type": "standard"
          },
          {
            "text": "不怕各种虫子或蜗牛",
            "type": "standard"
          },
          {
            "text": "经常和同类们待在一起",
            "type": "standard"
          },
          {
            "text": "生存环境脏兮兮的",
            "type": "standard"
          }
        ]
      ],
      "category": "动物",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.557Z"
    },
    "shushu": {
      "bingoId": "shushu",
      "title": "鼠鼠宾果",
      "creator": "系统",
      "description": "五个连成一线,那么你是一只鼠鼠",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "晚上比白天更有精力",
            "type": "standard"
          },
          {
            "text": "喜欢囤东西吃",
            "type": "standard"
          },
          {
            "text": "喜欢被rua脑袋",
            "type": "standard"
          },
          {
            "text": "擅长迅速找到角落",
            "type": "standard"
          },
          {
            "text": "会自己洗脸",
            "type": "standard"
          }
        ],
        [
          {
            "text": "喜欢吃零食",
            "type": "standard"
          },
          {
            "text": "会自己用厕所",
            "type": "standard"
          },
          {
            "text": "讨厌太阳",
            "type": "standard"
          },
          {
            "text": "经常缩成一团",
            "type": "standard"
          },
          {
            "text": "毛茸茸的",
            "type": "standard"
          }
        ],
        [
          {
            "text": "对喜欢的人露出肚皮",
            "type": "standard"
          },
          {
            "text": "喜欢黑黑的地方",
            "type": "standard"
          },
          {
            "text": "牙齿尖尖的",
            "type": "standard"
          },
          {
            "text": "总是打哈欠",
            "type": "standard"
          },
          {
            "text": "什么都吃一点",
            "type": "standard"
          }
        ],
        [
          {
            "text": "喜欢到处啃啃啃",
            "type": "standard"
          },
          {
            "text": "很喜欢跑步",
            "type": "standard"
          },
          {
            "text": "白天总是很困",
            "type": "standard"
          },
          {
            "text": "很善于布置自己的窝",
            "type": "standard"
          },
          {
            "text": "讨厌很热",
            "type": "standard"
          }
        ],
        [
          {
            "text": "讨厌身上湿哒哒的",
            "type": "standard"
          },
          {
            "text": "爱干净",
            "type": "standard"
          },
          {
            "text": "吃东西很快",
            "type": "standard"
          },
          {
            "text": "会舔喜欢的人的手",
            "type": "standard"
          },
          {
            "text": "吃两只手捧着吃东西",
            "type": "standard"
          }
        ]
      ],
      "category": "动物",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.557Z"
    },
    "tuzi": {
      "bingoId": "tuzi",
      "title": "兔兔宾果",
      "creator": "系统",
      "description": "五个连成一线，你是一只小兔子",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "喜欢蔬菜水果",
            "type": "standard"
          },
          {
            "text": "夜晚比白天更有精力",
            "type": "standard"
          },
          {
            "text": "喜欢啃咬东西",
            "type": "standard"
          },
          {
            "text": "享受被摸头",
            "type": "standard"
          },
          {
            "text": "随时会陷入短暂的睡眠",
            "type": "standard"
          }
        ],
        [
          {
            "text": "牙齿需要被好好照顾",
            "type": "standard"
          },
          {
            "text": "喜欢数据线",
            "type": "standard"
          },
          {
            "text": "喜欢探索世界",
            "type": "standard"
          },
          {
            "text": "和新朋友需要时间磨合",
            "type": "standard"
          },
          {
            "text": "通过舔表达爱意",
            "type": "standard"
          }
        ],
        [
          {
            "text": "吃到好吃的东西会想跳舞",
            "type": "standard"
          },
          {
            "text": "会被突如其来的声音吓到",
            "type": "standard"
          },
          {
            "text": "喜欢躲起来",
            "type": "standard"
          },
          {
            "text": "喜欢从高处观察世界",
            "type": "standard"
          },
          {
            "text": "会自己洗澡",
            "type": "standard"
          }
        ],
        [
          {
            "text": "会用厕所",
            "type": "standard"
          },
          {
            "text": "不喜欢炎热的环境",
            "type": "standard"
          },
          {
            "text": "听觉很灵敏",
            "type": "standard"
          },
          {
            "text": "喜欢自己把控和人贴贴的节奏",
            "type": "standard"
          },
          {
            "text": "有时间观念和生活规律",
            "type": "standard"
          }
        ],
        [
          {
            "text": "在喜欢的人身边会安心睡着",
            "type": "standard"
          },
          {
            "text": "会自己铺床",
            "type": "standard"
          },
          {
            "text": "喜欢躺在柔软的地方",
            "type": "standard"
          },
          {
            "text": "生气的时候谁靠近都不行",
            "type": "standard"
          },
          {
            "text": "很能吃",
            "type": "standard"
          }
        ]
      ],
      "category": "动物",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.557Z"
    },
    "zhanglang": {
      "bingoId": "zhanglang",
      "title": "蟑螂宾果",
      "creator": "系统",
      "description": "五个连成一线，那么你可能是一只小小的蟑螂",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "被冒犯后能迅速攀爬到别人身上",
            "type": "standard"
          },
          {
            "text": "拥有在危急时刻迅速逃跑的能力",
            "type": "standard"
          },
          {
            "text": "很难被捕捉",
            "type": "standard"
          },
          {
            "text": "日常运动是阴暗地爬行",
            "type": "standard"
          },
          {
            "text": "被小猫玩弄于股掌之间",
            "type": "standard"
          }
        ],
        [
          {
            "text": "成为焦点时会感到孤立和无助",
            "type": "standard"
          },
          {
            "text": "没人知道你到底睡不睡觉",
            "type": "standard"
          },
          {
            "text": "很难彻底被消灭",
            "type": "standard"
          },
          {
            "text": "走路静悄悄的经常吓人-跳",
            "type": "standard"
          },
          {
            "text": "宅在家里会很有安全感",
            "type": "standard"
          }
        ],
        [
          {
            "text": "生活在一团糟全是垃圾的环境中",
            "type": "standard"
          },
          {
            "text": "对单个出现的拖鞋感到恐慌",
            "type": "standard"
          },
          {
            "text": "拥有可再生的稳定双马尾",
            "type": "standard"
          },
          {
            "text": "对人类的出现很警惕",
            "type": "standard"
          },
          {
            "text": "不喜欢晒太阳",
            "type": "standard"
          }
        ],
        [
          {
            "text": "不会放过任何薯片的碎渣",
            "type": "standard"
          },
          {
            "text": "能够用很少的食物生存",
            "type": "standard"
          },
          {
            "text": "无法抗拒土豆泥",
            "type": "standard"
          },
          {
            "text": "能够在狭小空间中穿梭自如",
            "type": "standard"
          },
          {
            "text": "虽然不敢见人但意外地合群",
            "type": "standard"
          }
        ],
        [
          {
            "text": "习惯性地出现在被忽视的角落",
            "type": "standard"
          },
          {
            "text": "脸黑",
            "type": "standard"
          },
          {
            "text": "对有害化学物质有一定的耐受性",
            "type": "standard"
          },
          {
            "text": "总能迅速找到新的避难所",
            "type": "standard"
          },
          {
            "text": "出场的时候会收获尖叫",
            "type": "standard"
          }
        ]
      ],
      "category": "动物",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.557Z"
    },
    "haita": {
      "bingoId": "haita",
      "title": "海獭宾果",
      "creator": "系统",
      "description": "五个连成一线，那么你可能是一只小小的海獭",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {"text": "喜欢手牵手", "type": "standard"},
          {"text": "摔烂过手机", "type": "standard"},
          {"text": "会用工具开壳", "type": "standard"},
          {"text": "害怕被鲨鱼追", "type": "standard"},
          {"text": "咬人很疼", "type": "standard"}
        ],
        [
          {"text": "睡觉要盖肚肚", "type": "standard"},
          {"text": "擅长游泳", "type": "standard"},
          {"text": "大鼻子", "type": "standard"},
          {"text": "讨厌蔬菜", "type": "standard"},
          {"text": "害怕弄丢喜欢的人", "type": "standard"}
        ],
        [
          {"text": "喜欢去海边", "type": "standard"},
          {"text": "喜欢海鲜刺身", "type": "standard"},
          {"text": "社恐", "type": "standard"},
          {"text": "妈妈，獭生是海洋", "type": "standard"},
          {"text": "躺着看天空发呆", "type": "standard"}
        ],
        [
          {"text": "认为人类很危险", "type": "standard"},
          {"text": "向往流浪", "type": "standard"},
          {"text": "有点呆", "type": "standard"},
          {"text": "牙口好", "type": "standard"},
          {"text": "耐冻但怕热", "type": "standard"}
        ],
        [
          {"text": "喜欢嚼冰块的感觉", "type": "standard"},
          {"text": "揉！脸！", "type": "standard"},
          {"text": "在兜里装零食", "type": "standard"},
          {"text": "24/7想着待会吃什么", "type": "standard"},
          {"text": "喜欢在沙滩上挖洞", "type": "standard"}
        ]
      ],
      "category": "动物",
      "tags": ["海獭", "动物", "可爱"],
      "createdAt": "2025-01-21T10:11:00.000Z"
    }
  },
  "地理": {
    "beijingren": {
      "bingoId": "beijingren",
      "title": "北京人宾果",
      "creator": "系统",
      "description": "五个连成一线，嘿，您可是地道老北京",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "说话自带儿化音",
            "type": "standard"
          },
          {
            "text": "豆汁当早餐",
            "type": "standard"
          },
          {
            "text": "有胡同童年记忆",
            "type": "standard"
          },
          {
            "text": "管谁都叫\"师傅\"",
            "type": "standard"
          },
          {
            "text": "觉得五环外是外地",
            "type": "standard"
          }
        ],
        [
          {
            "text": "春节必去庙会",
            "type": "standard"
          },
          {
            "text": "能分清真·老北京炸酱面",
            "type": "standard"
          },
          {
            "text": "有公园年票",
            "type": "standard"
          },
          {
            "text": "张口就是历史典故",
            "type": "standard"
          },
          {
            "text": "雾霾天照常晨练",
            "type": "standard"
          }
        ],
        [
          {
            "text": "家里有军大衣",
            "type": "standard"
          },
          {
            "text": "能坐公交绝不打车",
            "type": "standard"
          },
          {
            "text": "用\"您\"称呼所有人",
            "type": "standard"
          },
          {
            "text": "知道哪家卤煮最地道",
            "type": "standard"
          },
          {
            "text": "聊天必提政治",
            "type": "standard"
          }
        ],
        [
          {
            "text": "在故宫遛过弯",
            "type": "standard"
          },
          {
            "text": "有亲戚住大院",
            "type": "standard"
          },
          {
            "text": "冬天囤百斤大白菜",
            "type": "standard"
          },
          {
            "text": "能背地铁全线路",
            "type": "standard"
          },
          {
            "text": "觉得外地人不懂麻酱",
            "type": "standard"
          }
        ],
        [
          {
            "text": "把北冰洋当水喝",
            "type": "standard"
          },
          {
            "text": "见面问\"吃了么您\"",
            "type": "standard"
          },
          {
            "text": "家里有文玩手串",
            "type": "standard"
          },
          {
            "text": "吐槽新北京人",
            "type": "standard"
          },
          {
            "text": "觉得全国都该供暖",
            "type": "standard"
          }
        ]
      ],
      "category": "地理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.558Z"
    },
    "dongbeiren": {
      "bingoId": "dongbeiren",
      "title": "东北人宾果",
      "creator": "系统",
      "description": "五个连成一线，你是个纯纯的东北银",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "洗澡带搓澡巾",
            "type": "standard"
          },
          {
            "text": "把\"嘎哈\"当问候",
            "type": "standard"
          },
          {
            "text": "家里囤百斤白菜",
            "type": "standard"
          },
          {
            "text": "有赵本山情结",
            "type": "standard"
          },
          {
            "text": "觉得锅包肉是信仰",
            "type": "standard"
          }
        ],
        [
          {
            "text": "冬天舔铁栏杆",
            "type": "standard"
          },
          {
            "text": "能喝一斤白酒",
            "type": "standard"
          },
          {
            "text": "家里有貂",
            "type": "standard"
          },
          {
            "text": "说话像说相声",
            "type": "standard"
          },
          {
            "text": "觉得东北菜是第九大菜系",
            "type": "standard"
          }
        ],
        [
          {
            "text": "在炕上吃冻梨",
            "type": "standard"
          },
          {
            "text": "用笤帚打孩子",
            "type": "standard"
          },
          {
            "text": "有下岗记忆",
            "type": "standard"
          },
          {
            "text": "把烧烤当夜宵",
            "type": "standard"
          },
          {
            "text": "觉得东北话最传染",
            "type": "standard"
          }
        ],
        [
          {
            "text": "家里腌酸菜",
            "type": "standard"
          },
          {
            "text": "扭秧歌无师自通",
            "type": "standard"
          },
          {
            "text": "管所有人叫\"老铁\"",
            "type": "standard"
          },
          {
            "text": "在洗浴中心过夜",
            "type": "standard"
          },
          {
            "text": "觉得海南是东北第四省",
            "type": "standard"
          }
        ],
        [
          {
            "text": "早餐吃豆腐脑配油条",
            "type": "standard"
          },
          {
            "text": "把\"哎呀妈呀\"当感叹",
            "type": "standard"
          },
          {
            "text": "有亲戚在海南",
            "type": "standard"
          },
          {
            "text": "觉得内蒙是酒友",
            "type": "standard"
          },
          {
            "text": "用热情吓跑南方人",
            "type": "standard"
          }
        ]
      ],
      "category": "地理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.558Z"
    },
    "fujianren": {
      "bingoId": "fujianren",
      "title": "福建人宾果",
      "creator": "系统",
      "description": "五个连成一线，汝系正宗福建郎",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "泡茶用迷你茶杯",
            "type": "standard"
          },
          {
            "text": "被问\"广东人好吃吗\"就笑",
            "type": "standard"
          },
          {
            "text": "有海外亲戚",
            "type": "standard"
          },
          {
            "text": "拜妈祖比拜佛勤",
            "type": "standard"
          },
          {
            "text": "觉得台风天是日常",
            "type": "standard"
          }
        ],
        [
          {
            "text": "会说三种闽方言",
            "type": "standard"
          },
          {
            "text": "家里供关公像",
            "type": "standard"
          },
          {
            "text": "结婚金镯挂满手臂",
            "type": "standard"
          },
          {
            "text": "觉得沙县小吃不正宗",
            "type": "standard"
          },
          {
            "text": "把台湾当后花园",
            "type": "standard"
          }
        ],
        [
          {
            "text": "元宵游神必参加",
            "type": "standard"
          },
          {
            "text": "吃土笋冻面不改色",
            "type": "standard"
          },
          {
            "text": "有红木家具情结",
            "type": "standard"
          },
          {
            "text": "觉得佛跳墙是家常菜",
            "type": "standard"
          },
          {
            "text": "管老板叫\"头家\"",
            "type": "standard"
          }
        ],
        [
          {
            "text": "祖宅是骑楼",
            "type": "standard"
          },
          {
            "text": "会唱爱拼才会赢",
            "type": "standard"
          },
          {
            "text": "把紫菜当零食",
            "type": "standard"
          },
          {
            "text": "觉得福建以外都是北方",
            "type": "standard"
          },
          {
            "text": "拖鞋过四季",
            "type": "standard"
          }
        ],
        [
          {
            "text": "家里有茶叶山",
            "type": "standard"
          },
          {
            "text": "用\"哇嘎哩共\"开场",
            "type": "standard"
          },
          {
            "text": "春节发橘不苹果",
            "type": "standard"
          },
          {
            "text": "觉得莆田鞋最舒服",
            "type": "standard"
          },
          {
            "text": "把祠堂当精神寄托",
            "type": "standard"
          }
        ]
      ],
      "category": "地理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.559Z"
    },
    "henanren": {
      "bingoId": "henanren",
      "title": "河南人宾果",
      "creator": "系统",
      "description": "五个连成一线，恁是地道河南老表",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "早餐必喝胡辣汤",
            "type": "standard"
          },
          {
            "text": "把\"中\"当万能应答",
            "type": "standard"
          },
          {
            "text": "家里种过小麦",
            "type": "standard"
          },
          {
            "text": "会唱豫剧选段",
            "type": "standard"
          },
          {
            "text": "觉得烩面是乡愁",
            "type": "standard"
          }
        ],
        [
          {
            "text": "过年炸麻叶",
            "type": "standard"
          },
          {
            "text": "管所有饮料叫茶",
            "type": "standard"
          },
          {
            "text": "有少林寺情结",
            "type": "standard"
          },
          {
            "text": "说话带\"哩\"尾音",
            "type": "standard"
          },
          {
            "text": "分得清十三朝古都",
            "type": "standard"
          }
        ],
        [
          {
            "text": "用井水冰西瓜",
            "type": "standard"
          },
          {
            "text": "被问\"井盖\"就急眼",
            "type": "standard"
          },
          {
            "text": "囤百斤面粉过冬",
            "type": "standard"
          },
          {
            "text": "走亲戚带道口烧鸡",
            "type": "standard"
          },
          {
            "text": "觉得湖北人吃面不正宗",
            "type": "standard"
          }
        ],
        [
          {
            "text": "在窑洞住过",
            "type": "standard"
          },
          {
            "text": "把河南卫视当骄傲",
            "type": "standard"
          },
          {
            "text": "会用荆条编筐",
            "type": "standard"
          },
          {
            "text": "冬至必吃饺子",
            "type": "standard"
          },
          {
            "text": "觉得郑州是最牛交通枢纽",
            "type": "standard"
          }
        ],
        [
          {
            "text": "见过黄河泛滥",
            "type": "standard"
          },
          {
            "text": "给外地人带新郑大枣",
            "type": "standard"
          },
          {
            "text": "用\"得劲\"夸人",
            "type": "standard"
          },
          {
            "text": "有亲戚在富士康",
            "type": "standard"
          },
          {
            "text": "觉得河南话最接近古汉语",
            "type": "standard"
          }
        ]
      ],
      "category": "地理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.559Z"
    },
    "hunanren": {
      "bingoId": "hunanren",
      "title": "湖南人宾果",
      "creator": "系统",
      "description": "五个连成一线，你是霸得蛮的湖南伢子",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "炒菜必放小米辣",
            "type": "standard"
          },
          {
            "text": "把\"妹陀\"当统称",
            "type": "standard"
          },
          {
            "text": "早餐嗦粉不放汤",
            "type": "standard"
          },
          {
            "text": "有毛泽东情结",
            "type": "standard"
          },
          {
            "text": "觉得臭豆腐是香水",
            "type": "standard"
          }
        ],
        [
          {
            "text": "冬天靠抖取暖",
            "type": "standard"
          },
          {
            "text": "能喝高度白酒",
            "type": "standard"
          },
          {
            "text": "家里常备槟榔",
            "type": "standard"
          },
          {
            "text": "说话像放鞭炮",
            "type": "standard"
          },
          {
            "text": "觉得湘菜是八大菜系之首",
            "type": "standard"
          }
        ],
        [
          {
            "text": "去橘子洲头遛弯",
            "type": "standard"
          },
          {
            "text": "用剁辣椒拌饭",
            "type": "standard"
          },
          {
            "text": "有卫视情结",
            "type": "standard"
          },
          {
            "text": "把塑料普通话当暗号",
            "type": "standard"
          },
          {
            "text": "觉得四川人吃辣不行",
            "type": "standard"
          }
        ],
        [
          {
            "text": "家里熏腊肉",
            "type": "standard"
          },
          {
            "text": "唱花鼓戏有模有样",
            "type": "standard"
          },
          {
            "text": "管辣椒叫\"辣子\"",
            "type": "standard"
          },
          {
            "text": "在洞庭湖钓过鱼",
            "type": "standard"
          },
          {
            "text": "觉得湖南话最热血",
            "type": "standard"
          }
        ],
        [
          {
            "text": "夜宵必去大排档",
            "type": "standard"
          },
          {
            "text": "把\"哦该咯\"当感叹",
            "type": "standard"
          },
          {
            "text": "有亲戚在广东",
            "type": "standard"
          },
          {
            "text": "觉得江西是辣友",
            "type": "standard"
          },
          {
            "text": "用槟榔社交",
            "type": "standard"
          }
        ]
      ],
      "category": "地理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.559Z"
    },
    "jiangsuren": {
      "bingoId": "jiangsuren",
      "title": "江苏人宾果",
      "creator": "系统",
      "description": "五个连成一线，你是纯血江苏人！",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "听不懂周围区县人讲话",
            "type": "standard"
          },
          {
            "text": "别的江苏人晒的饭菜没见过",
            "type": "standard"
          },
          {
            "text": "在外喜欢报自己的县级市/县名",
            "type": "standard"
          },
          {
            "text": "觉得浙江人比江苏人有钱",
            "type": "standard"
          },
          {
            "text": "从小的梦想是去南京上学",
            "type": "standard"
          }
        ],
        [
          {
            "text": "工作/学习不愿意离开本省",
            "type": "standard"
          },
          {
            "text": "家里有台打印机",
            "type": "standard"
          },
          {
            "text": "打过/身边有人打掼蛋",
            "type": "standard"
          },
          {
            "text": "参与过江苏与广东之间的比较",
            "type": "standard"
          },
          {
            "text": "晚上十点前必须回家(晚自习除外)",
            "type": "standard"
          }
        ],
        [
          {
            "text": "做过《南通小题》",
            "type": "standard"
          },
          {
            "text": "与省内大部分城市文化差异大",
            "type": "standard"
          },
          {
            "text": "参与过苏州与南京之间的比较",
            "type": "standard"
          },
          {
            "text": "宴席上饮料是果粒橙和椰汁",
            "type": "standard"
          },
          {
            "text": "宴席上一定先有几盘凉菜",
            "type": "standard"
          }
        ],
        [
          {
            "text": "身边的人非常卷",
            "type": "standard"
          },
          {
            "text": "听过老辈人讲出河工的事",
            "type": "standard"
          },
          {
            "text": "经常吃丝 瓜/茨菇",
            "type": "standard"
          },
          {
            "text": "家里的盐是淮盐",
            "type": "standard"
          },
          {
            "text": "过年吃阜宁大糕",
            "type": "standard"
          }
        ],
        [
          {
            "text": "没怎么见过山",
            "type": "standard"
          },
          {
            "text": "热衷于江苏公务员",
            "type": "standard"
          },
          {
            "text": "自己/亲戚/朋友在苏州打工",
            "type": "standard"
          },
          {
            "text": "有老师是南师毕业的",
            "type": "standard"
          },
          {
            "text": "有河湖伴随长大",
            "type": "standard"
          }
        ]
      ],
      "category": "地理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.559Z"
    },
    "shanxiren": {
      "bingoId": "shanxiren",
      "title": "陕西人宾果",
      "creator": "系统",
      "description": "五个连成一线，你是个忒色的老陕",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "蹲着吃饭最舒坦",
            "type": "standard"
          },
          {
            "text": "把\"嫽扎咧\"挂嘴边",
            "type": "standard"
          },
          {
            "text": "家里常备油泼辣子",
            "type": "standard"
          },
          {
            "text": "有秦始皇情结",
            "type": "standard"
          },
          {
            "text": "觉得肉夹馍必须纯肉",
            "type": "standard"
          }
        ],
        [
          {
            "text": "能吼两嗓子秦腔",
            "type": "standard"
          },
          {
            "text": "分得清各种面食",
            "type": "standard"
          },
          {
            "text": "去兵马俑当导游",
            "type": "standard"
          },
          {
            "text": "说话像吵架",
            "type": "standard"
          },
          {
            "text": "觉得羊肉泡馍要自己掰",
            "type": "standard"
          }
        ],
        [
          {
            "text": "冬天穿单裤抗冻",
            "type": "standard"
          },
          {
            "text": "用海碗吃面",
            "type": "standard"
          },
          {
            "text": "有黄土高原情怀",
            "type": "standard"
          },
          {
            "text": "把锅盔当干粮",
            "type": "standard"
          },
          {
            "text": "觉得陕西话最古老",
            "type": "standard"
          }
        ],
        [
          {
            "text": "家里有窑洞",
            "type": "standard"
          },
          {
            "text": "唱过信天游",
            "type": "standard"
          },
          {
            "text": "管女孩叫\"女子\"",
            "type": "standard"
          },
          {
            "text": "在城墙根下喝茶",
            "type": "standard"
          },
          {
            "text": "觉得山西是面食兄弟",
            "type": "standard"
          }
        ],
        [
          {
            "text": "早餐喝胡辣汤配馍",
            "type": "standard"
          },
          {
            "text": "把\"额滴神\"当感叹",
            "type": "standard"
          },
          {
            "text": "有亲戚在新疆",
            "type": "standard"
          },
          {
            "text": "觉得凉皮要配冰峰",
            "type": "standard"
          },
          {
            "text": "用biangbiang面待客",
            "type": "standard"
          }
        ]
      ],
      "category": "地理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.559Z"
    },
    "shandongren": {
      "bingoId": "shandongren",
      "title": "山东人宾果",
      "creator": "系统",
      "description": "五个连成一线，恁是地道山东好汉/大嫚",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "身高超过一米八",
            "type": "standard"
          },
          {
            "text": "能空口吃大葱",
            "type": "standard"
          },
          {
            "text": "逢人便叫\"老师儿\"",
            "type": "standard"
          },
          {
            "text": "家里有煎饼鏊子",
            "type": "standard"
          },
          {
            "text": "觉得山东以外都是南方",
            "type": "standard"
          }
        ],
        [
          {
            "text": "酒桌规矩倒背如流",
            "type": "standard"
          },
          {
            "text": "过年必磕头",
            "type": "standard"
          },
          {
            "text": "冰箱常备鲅鱼",
            "type": "standard"
          },
          {
            "text": "把\"俺\"当第一人称",
            "type": "standard"
          },
          {
            "text": "会开拖拉机",
            "type": "standard"
          }
        ],
        [
          {
            "text": "家里有公务员",
            "type": "standard"
          },
          {
            "text": "能分清香椿芽和花椒芽",
            "type": "standard"
          },
          {
            "text": "聊天必提孔子",
            "type": "standard"
          },
          {
            "text": "有体制内情结",
            "type": "standard"
          },
          {
            "text": "觉得青岛啤酒才是真啤酒",
            "type": "standard"
          }
        ],
        [
          {
            "text": "年夜饭必有酥锅",
            "type": "standard"
          },
          {
            "text": "能徒手开钙奶饼干",
            "type": "standard"
          },
          {
            "text": "给外地人带周村烧饼",
            "type": "standard"
          },
          {
            "text": "在炕上长大",
            "type": "standard"
          },
          {
            "text": "劝酒词一套套",
            "type": "standard"
          }
        ],
        [
          {
            "text": "家里种过大棚",
            "type": "standard"
          },
          {
            "text": "说话像吵架",
            "type": "standard"
          },
          {
            "text": "给邻居送新蒸的馒头",
            "type": "standard"
          },
          {
            "text": "觉得山东卫视最好看",
            "type": "standard"
          },
          {
            "text": "把\"杠赛来\"当感叹词",
            "type": "standard"
          }
        ]
      ],
      "category": "地理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.560Z"
    },
    "shanghairen": {
      "bingoId": "shanghairen",
      "title": "上海人宾果",
      "creator": "系统",
      "description": "五个连成一线，侬是正宗上海宁",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "垃圾分类小能手",
            "type": "standard"
          },
          {
            "text": "讲价用上海话威力加倍",
            "type": "standard"
          },
          {
            "text": "有弄堂童年记忆",
            "type": "standard"
          },
          {
            "text": "觉得浦东浦西是两个世界",
            "type": "standard"
          },
          {
            "text": "早餐必有四大金刚",
            "type": "standard"
          }
        ],
        [
          {
            "text": "用精致饭盒带午饭",
            "type": "standard"
          },
          {
            "text": "分得清洋房和新里",
            "type": "standard"
          },
          {
            "text": "喝咖啡要配咸淇淋",
            "type": "standard"
          },
          {
            "text": "觉得苏州是后花园",
            "type": "standard"
          },
          {
            "text": "雨天也要发型精致",
            "type": "standard"
          }
        ],
        [
          {
            "text": "拥有多条真丝围巾",
            "type": "standard"
          },
          {
            "text": "能指出小笼包不正宗",
            "type": "standard"
          },
          {
            "text": "用\"侬晓得伐\"开场",
            "type": "standard"
          },
          {
            "text": "有国际饭店蝴蝶酥购买攻略",
            "type": "standard"
          },
          {
            "text": "觉得全国菜都太油腻",
            "type": "standard"
          }
        ],
        [
          {
            "text": "在武康路拍过照",
            "type": "standard"
          },
          {
            "text": "家里存着老克勒唱片",
            "type": "standard"
          },
          {
            "text": "用英文词夹上海话",
            "type": "standard"
          },
          {
            "text": "知道哪家生煎底部最脆",
            "type": "standard"
          },
          {
            "text": "把\"腔调\"当人生准则",
            "type": "standard"
          }
        ],
        [
          {
            "text": "梅雨季囤十双鞋",
            "type": "standard"
          },
          {
            "text": "会三句以上沪剧",
            "type": "standard"
          },
          {
            "text": "觉得普通话不够婉转",
            "type": "standard"
          },
          {
            "text": "用湿纸巾擦公共座椅",
            "type": "standard"
          },
          {
            "text": "把\"麻烦\"当口头禅",
            "type": "standard"
          }
        ]
      ],
      "category": "地理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.560Z"
    },
    "shenzhen": {
      "bingoId": "shenzhen",
      "title": "深圳人宾果",
      "creator": "系统",
      "description": "五个连成一线，来了就是深圳人！",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "去过大/小梅沙",
            "type": "standard"
          },
          {
            "text": "初中时引体向上能做0个",
            "type": "standard"
          },
          {
            "text": "认为椰子鸡是深圳菜",
            "type": "standard"
          },
          {
            "text": "把深圳校服/裤当睡衣/裤穿过",
            "type": "standard"
          },
          {
            "text": "拥有一周多次的香港通行证",
            "type": "standard"
          }
        ],
        [
          {
            "text": "知道深圳校服不同厂家的服务、版型和材质的不一样",
            "type": "standard"
          },
          {
            "text": "吃过面点王",
            "type": "standard"
          },
          {
            "text": "认为逛商场晕生活必要活动",
            "type": "standard"
          },
          {
            "text": "认为深圳景中果排名第三的城市",
            "type": "standard"
          },
          {
            "text": "介绍“哪里人”时市内说老家市外说深圳人",
            "type": "standard"
          }
        ],
        [
          {
            "text": "除非工作不经常去广州",
            "type": "standard"
          },
          {
            "text": "经常去香港",
            "type": "standard"
          },
          {
            "text": "深圳有房",
            "type": "standard"
          },
          {
            "text": "知道关内和关外",
            "type": "standard"
          },
          {
            "text": "经常去海岸城/星河cocopark海上世界/老街",
            "type": "standard"
          }
        ],
        [
          {
            "text": "祖籍不在深圳",
            "type": "standard"
          },
          {
            "text": "小学郊游去过民俗文化村/欢乐谷 界之窗",
            "type": "standard"
          },
          {
            "text": "拥有标准的普通话",
            "type": "standard"
          },
          {
            "text": "爬过多次莲花山梧桐山",
            "type": "standard"
          },
          {
            "text": "小学就拥有或玩过无人机",
            "type": "standard"
          }
        ],
        [
          {
            "text": "家附近永远在施工",
            "type": "standard"
          },
          {
            "text": "知道四大名校",
            "type": "standard"
          },
          {
            "text": "没上过平安金融",
            "type": "standard"
          },
          {
            "text": "不会讲粤语但能听",
            "type": "standard"
          },
          {
            "text": "认为界生穿白校服是女装",
            "type": "standard"
          }
        ]
      ],
      "category": "地理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.560Z"
    },
    "sichuanren": {
      "bingoId": "sichuanren",
      "title": "四川人宾果",
      "creator": "系统",
      "description": "五个连成一线，你是个巴适的四川娃儿",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "火锅点特辣",
            "type": "standard"
          },
          {
            "text": "把\"要得\"当口头禅",
            "type": "standard"
          },
          {
            "text": "家里泡菜坛比碗多",
            "type": "standard"
          },
          {
            "text": "地震时先发朋友圈",
            "type": "standard"
          },
          {
            "text": "觉得花椒是灵魂",
            "type": "standard"
          }
        ],
        [
          {
            "text": "搓麻将到凌晨",
            "type": "standard"
          },
          {
            "text": "能分清香辣麻辣酸辣",
            "type": "standard"
          },
          {
            "text": "养熊猫是终极梦想",
            "type": "standard"
          },
          {
            "text": "说话像吵架",
            "type": "standard"
          },
          {
            "text": "觉得外地火锅是洗澡水",
            "type": "standard"
          }
        ],
        [
          {
            "text": "夏天去青城山避暑",
            "type": "standard"
          },
          {
            "text": "用菜籽油炒一切",
            "type": "standard"
          },
          {
            "text": "有李伯清情结",
            "type": "standard"
          },
          {
            "text": "把折耳根当零食",
            "type": "standard"
          },
          {
            "text": "觉得四川话最幽默",
            "type": "standard"
          }
        ],
        [
          {
            "text": "冬天靠一身正气",
            "type": "standard"
          },
          {
            "text": "家里常备火锅底料",
            "type": "standard"
          },
          {
            "text": "管所有女性叫\"嬢嬢\"",
            "type": "standard"
          },
          {
            "text": "在茶馆谈过生意",
            "type": "standard"
          },
          {
            "text": "觉得川A车牌最霸气",
            "type": "standard"
          }
        ],
        [
          {
            "text": "早餐吃红油抄手",
            "type": "standard"
          },
          {
            "text": "把\"瓜娃子\"当爱称",
            "type": "standard"
          },
          {
            "text": "有亲戚在西藏",
            "type": "standard"
          },
          {
            "text": "觉得重庆是亲兄弟",
            "type": "standard"
          },
          {
            "text": "用火锅解乡愁",
            "type": "standard"
          }
        ]
      ],
      "category": "地理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.560Z"
    },
    "wenzhou": {
      "bingoId": "wenzhou",
      "title": "温州宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你是纯血温州人",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "蘸料要用酱油醋",
            "type": "standard"
          },
          {
            "text": "方言问方言答、普通话问普通话答",
            "type": "standard"
          },
          {
            "text": "曾经寒暑假在外地过或在外地读过书",
            "type": "standard"
          },
          {
            "text": "有亲戚在意大利",
            "type": "standard"
          },
          {
            "text": "家里有非常有钱的亲戚",
            "type": "standard"
          }
        ],
        [
          {
            "text": "不能吃辣",
            "type": "standard"
          },
          {
            "text": "认为其他县市区属于外地",
            "type": "standard"
          },
          {
            "text": "玩过游戏茶苑",
            "type": "standard"
          },
          {
            "text": "被家里人要求过以后只能在本地人间婚娶",
            "type": "standard"
          },
          {
            "text": "过节家里一定有松糕",
            "type": "standard"
          }
        ],
        [
          {
            "text": "喜欢吃生腌海鲜、鱼干之类的",
            "type": "standard"
          },
          {
            "text": "父母在外做生意",
            "type": "standard"
          },
          {
            "text": "免费格子",
            "type": "standard"
          },
          {
            "text": "讲话带点温普",
            "type": "standard"
          },
          {
            "text": "只吃甜豆腐脑",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有山里移民出来的亲戚或者还有亲戚在山里",
            "type": "standard"
          },
          {
            "text": "说黄天三宝被长辈教训过",
            "type": "standard"
          },
          {
            "text": "被人说过皮革厂的梗",
            "type": "standard"
          },
          {
            "text": "会讲自己镇上的温州话",
            "type": "standard"
          },
          {
            "text": "听不懂其他县市区温州人讲土话",
            "type": "standard"
          }
        ],
        [
          {
            "text": "在鹿人有品小程序买过东西",
            "type": "standard"
          },
          {
            "text": "过年一定要回老家",
            "type": "standard"
          },
          {
            "text": "微信里有温州话表情包",
            "type": "standard"
          },
          {
            "text": "会就着米饭吃西瓜",
            "type": "standard"
          },
          {
            "text": "看过百晓讲新闻",
            "type": "standard"
          }
        ]
      ],
      "category": "地理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.560Z"
    }
  },
  "爱好": {
    "chuantongwenxue": {
      "bingoId": "chuantongwenxue",
      "title": "传统文学宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是传统文学爱好者",
      "gridSize": {
        "rows": 6,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "反感别人一上来就说喜欢东野圭吾",
            "type": "standard"
          },
          {
            "text": "嘉欢看侦探、刑侦小说",
            "type": "standard"
          },
          {
            "text": "写过书评文章",
            "type": "standard"
          },
          {
            "text": "会把喜欢的段落摘抄下来",
            "type": "standard"
          },
          {
            "text": "会关注出版社最新出版的实体书",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有特别喜欢的作家",
            "type": "standard"
          },
          {
            "text": "看书时不掠过前言",
            "type": "standard"
          },
          {
            "text": "衣着朴素大方",
            "type": "standard"
          },
          {
            "text": "喜欢准确无误的表达",
            "type": "standard"
          },
          {
            "text": "戴眼镜,外表斯文,但内心狂野",
            "type": "standard"
          }
        ],
        [
          {
            "text": "会写文学作品",
            "type": "standard"
          },
          {
            "text": "被别人说“书呆子”不生气",
            "type": "standard"
          },
          {
            "text": "免费格子",
            "type": "standard"
          },
          {
            "text": "身边没有能够聊书籍内容的人",
            "type": "standard"
          },
          {
            "text": "随身携带Kindle",
            "type": "standard"
          }
        ],
        [
          {
            "text": "不喜欢朋友聚会,甚至反感",
            "type": "standard"
          },
          {
            "text": "参加过线下书展活动",
            "type": "standard"
          },
          {
            "text": "会看各种文学奖获奖作品",
            "type": "standard"
          },
          {
            "text": "会阅读作家的日记访谈录",
            "type": "standard"
          },
          {
            "text": "不喜欢网络小说",
            "type": "standard"
          }
        ],
        [
          {
            "text": "关注了很多读书博主的wb/gz号等",
            "type": "standard"
          },
          {
            "text": "爱买特别的文创帆布袋",
            "type": "standard"
          },
          {
            "text": "很享受下雨天在被窝里看书",
            "type": "standard"
          },
          {
            "text": "吃过一些出版社的瓜",
            "type": "standard"
          },
          {
            "text": "平时脾气很好,比较温和真诚,待人礼貌",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.562Z"
    },
    "valorant_player": {
      "bingoId": "valorant_player",
      "title": "打瓦玩家宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你是资深Valorant玩家",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "天梯段位钻石+",
            "type": "standard"
          },
          {
            "text": "背下所有地图点位",
            "type": "standard"
          },
          {
            "text": "精通3种以上角色",
            "type": "standard"
          },
          {
            "text": "会各种技巧跳跃",
            "type": "standard"
          },
          {
            "text": "购买限定皮肤",
            "type": "standard"
          }
        ],
        [
          {
            "text": "能报精确点位",
            "type": "standard"
          },
          {
            "text": "会各种穿射技巧",
            "type": "standard"
          },
          {
            "text": "熟悉经济系统",
            "type": "standard"
          },
          {
            "text": "研究过道具轨迹",
            "type": "standard"
          },
          {
            "text": "有固定车队",
            "type": "standard"
          }
        ],
        [
          {
            "text": "观看职业比赛",
            "type": "standard"
          },
          {
            "text": "会假拆骗技能",
            "type": "standard"
          },
          {
            "text": "掌握瞬狙技巧",
            "type": "standard"
          },
          {
            "text": "研究过脚步声",
            "type": "standard"
          },
          {
            "text": "定制准星设置",
            "type": "standard"
          }
        ],
        [
          {
            "text": "分析过战术录像",
            "type": "standard"
          },
          {
            "text": "会配合队友技能",
            "type": "standard"
          },
          {
            "text": "掌握不同枪械弹道",
            "type": "standard"
          },
          {
            "text": "熟悉地图更新",
            "type": "standard"
          },
          {
            "text": "有专属外设配置",
            "type": "standard"
          }
        ],
        [
          {
            "text": "参加社区赛事",
            "type": "standard"
          },
          {
            "text": "会预判敌人走位",
            "type": "standard"
          },
          {
            "text": "研究过角色克制",
            "type": "standard"
          },
          {
            "text": "制作过攻略视频",
            "type": "standard"
          },
          {
            "text": "背下技能CD时间",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [
        "Valorant",
        "射击游戏"
      ],
      "createdAt": "2025-07-29T01:14:01.562Z"
    },
    "movielover": {
      "bingoId": "movielover",
      "title": "电影迷宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你是骨灰级影迷",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "看过IMDb Top250",
            "type": "standard"
          },
          {
            "text": "能识别导演风格",
            "type": "standard"
          },
          {
            "text": "收藏蓝光碟",
            "type": "standard"
          },
          {
            "text": "参加电影节",
            "type": "standard"
          },
          {
            "text": "写过长影评",
            "type": "standard"
          }
        ],
        [
          {
            "text": "熟悉电影史",
            "type": "standard"
          },
          {
            "text": "分析镜头语言",
            "type": "standard"
          },
          {
            "text": "有导演签名",
            "type": "standard"
          },
          {
            "text": "看导演剪辑版",
            "type": "standard"
          },
          {
            "text": "参加观影团",
            "type": "standard"
          }
        ],
        [
          {
            "text": "记住配乐作者",
            "type": "standard"
          },
          {
            "text": "看默片",
            "type": "standard"
          },
          {
            "text": "收藏电影海报",
            "type": "standard"
          },
          {
            "text": "研究过色彩运用",
            "type": "standard"
          },
          {
            "text": "马拉松式观影",
            "type": "standard"
          }
        ],
        [
          {
            "text": "熟悉各流派",
            "type": "standard"
          },
          {
            "text": "看黑白电影",
            "type": "standard"
          },
          {
            "text": "拜访拍摄地",
            "type": "standard"
          },
          {
            "text": "分析剧本结构",
            "type": "standard"
          },
          {
            "text": "订阅专业杂志",
            "type": "standard"
          }
        ],
        [
          {
            "text": "记住演员本名",
            "type": "standard"
          },
          {
            "text": "看修复版",
            "type": "standard"
          },
          {
            "text": "制作混剪视频",
            "type": "standard"
          },
          {
            "text": "研究过服化道",
            "type": "standard"
          },
          {
            "text": "建立观影数据库",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [
        "电影",
        "影迷"
      ],
      "createdAt": "2025-07-29T01:14:01.563Z"
    },
    "personal_hobbies": {
      "bingoId": "personal_hobbies",
      "title": "个人爱好宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你有丰富多彩的兴趣生活",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "收集特定物品",
            "type": "standard"
          },
          {
            "text": "会演奏乐器",
            "type": "standard"
          },
          {
            "text": "定期手作DIY",
            "type": "standard"
          },
          {
            "text": "养盆栽/多肉",
            "type": "standard"
          },
          {
            "text": "玩桌游",
            "type": "standard"
          }
        ],
        [
          {
            "text": "烘焙/烹饪",
            "type": "standard"
          },
          {
            "text": "练习书法",
            "type": "standard"
          },
          {
            "text": "观星/天文",
            "type": "standard"
          },
          {
            "text": "模型制作",
            "type": "standard"
          },
          {
            "text": "徒步旅行",
            "type": "standard"
          }
        ],
        [
          {
            "text": "摄影修图",
            "type": "standard"
          },
          {
            "text": "咖啡/茶道",
            "type": "standard"
          },
          {
            "text": "练习瑜伽",
            "type": "standard"
          },
          {
            "text": "收集邮票/钱币",
            "type": "standard"
          },
          {
            "text": "写日记/手账",
            "type": "standard"
          }
        ],
        [
          {
            "text": "观鸟",
            "type": "standard"
          },
          {
            "text": "潜水/浮潜",
            "type": "standard"
          },
          {
            "text": "拼图/乐高",
            "type": "standard"
          },
          {
            "text": "参加读书会",
            "type": "standard"
          },
          {
            "text": "学习外语",
            "type": "standard"
          }
        ],
        [
          {
            "text": "绘画/涂鸦",
            "type": "standard"
          },
          {
            "text": "钓鱼",
            "type": "standard"
          },
          {
            "text": "跳蚤市场淘宝",
            "type": "standard"
          },
          {
            "text": "参观博物馆",
            "type": "standard"
          },
          {
            "text": "种植香草",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [
        "爱好",
        "兴趣"
      ],
      "createdAt": "2025-07-29T01:14:01.563Z"
    },
    "guoman": {
      "bingoId": "guoman",
      "title": "国漫爱好者宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是国漫复兴见证者",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "记得《大闹天宫》原画",
            "type": "standard"
          },
          {
            "text": "收藏水墨动画DVD",
            "type": "standard"
          },
          {
            "text": "分得清上美影风格",
            "type": "standard"
          },
          {
            "text": "用哪吒当头像",
            "type": "standard"
          },
          {
            "text": "觉得老动画更有韵味",
            "type": "standard"
          }
        ],
        [
          {
            "text": "买过《雾山五行》周边",
            "type": "standard"
          },
          {
            "text": "为《罗小黑》二刷",
            "type": "standard"
          },
          {
            "text": "追《一人之下》漫画",
            "type": "standard"
          },
          {
            "text": "收藏《大圣归来》手办",
            "type": "standard"
          },
          {
            "text": "能画国风分镜",
            "type": "standard"
          }
        ],
        [
          {
            "text": "手机存百张场景图",
            "type": "standard"
          },
          {
            "text": "用动画梗玩谐音",
            "type": "standard"
          },
          {
            "text": "追《时光代理人》更新",
            "type": "standard"
          },
          {
            "text": "买过《魔道祖师》画集",
            "type": "standard"
          },
          {
            "text": "觉得3D不如2D",
            "type": "standard"
          }
        ],
        [
          {
            "text": "分析传统文化元素",
            "type": "standard"
          },
          {
            "text": "为《中国奇谭》落泪",
            "type": "standard"
          },
          {
            "text": "收藏《天书奇谭》修复版",
            "type": "standard"
          },
          {
            "text": "会临摹水墨风格",
            "type": "standard"
          },
          {
            "text": "嫌弃日漫化严重",
            "type": "standard"
          }
        ],
        [
          {
            "text": "用国漫学历史",
            "type": "standard"
          },
          {
            "text": "知道制作组八卦",
            "type": "standard"
          },
          {
            "text": "买过动画电影票",
            "type": "standard"
          },
          {
            "text": "在B站发弹幕护体",
            "type": "standard"
          },
          {
            "text": "觉得国漫正在崛起",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.563Z"
    },
    "kpop": {
      "bingoId": "kpop",
      "title": "KPOP宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是韩流十级学者",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "买过十张同专辑",
            "type": "standard"
          },
          {
            "text": "会跳完整编舞",
            "type": "standard"
          },
          {
            "text": "分得清所有成员声音",
            "type": "standard"
          },
          {
            "text": "追过打歌现场",
            "type": "standard"
          },
          {
            "text": "觉得本命团最惨",
            "type": "standard"
          }
        ],
        [
          {
            "text": "手机存万张照片",
            "type": "standard"
          },
          {
            "text": "学韩语为看直播",
            "type": "standard"
          },
          {
            "text": "买过应援棒",
            "type": "standard"
          },
          {
            "text": "熬夜刷音源",
            "type": "standard"
          },
          {
            "text": "能背成员生日",
            "type": "standard"
          }
        ],
        [
          {
            "text": "卧室是周边博物馆",
            "type": "standard"
          },
          {
            "text": "为偶像剪过视频",
            "type": "standard"
          },
          {
            "text": "参加线下应援",
            "type": "standard"
          },
          {
            "text": "买过小卡盲盒",
            "type": "standard"
          },
          {
            "text": "觉得公司迫害自家",
            "type": "standard"
          }
        ],
        [
          {
            "text": "分析MV符号学",
            "type": "standard"
          },
          {
            "text": "听前奏猜歌",
            "type": "standard"
          },
          {
            "text": "收藏历代舞台",
            "type": "standard"
          },
          {
            "text": "会唱所有副歌",
            "type": "standard"
          },
          {
            "text": "嫌弃翻跳不标准",
            "type": "standard"
          }
        ],
        [
          {
            "text": "用偶像当手机壁纸",
            "type": "standard"
          },
          {
            "text": "知道恋爱传闻",
            "type": "standard"
          },
          {
            "text": "买过演唱会机票",
            "type": "standard"
          },
          {
            "text": "在超话签到三年",
            "type": "standard"
          },
          {
            "text": "觉得韩团比内娱专业",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.563Z"
    },
    "mengnv": {
      "bingoId": "mengnv",
      "title": "梦女宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是终极梦女",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "当过男角色的爱情梦女",
            "type": "standard"
          },
          {
            "text": "代入过角色",
            "type": "standard"
          },
          {
            "text": "当过梦三",
            "type": "standard"
          },
          {
            "text": "当过嗑梦一",
            "type": "standard"
          },
          {
            "text": "写过和梦角的h文",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有自产过梦女稿",
            "type": "standard"
          },
          {
            "text": "给梦角约过稿",
            "type": "standard"
          },
          {
            "text": "给梦设约过稿",
            "type": "standard"
          },
          {
            "text": "买过梦角的谷",
            "type": "standard"
          },
          {
            "text": "自印过梦设的谷",
            "type": "standard"
          }
        ],
        [
          {
            "text": "梦设和自设/oc是同一个人",
            "type": "standard"
          },
          {
            "text": "玩过角色梗",
            "type": "standard"
          },
          {
            "text": "梦设还活着",
            "type": "standard"
          },
          {
            "text": "梦设元素很小众",
            "type": "standard"
          },
          {
            "text": "建设过背景故事",
            "type": "standard"
          }
        ],
        [
          {
            "text": "梦设和梦角有单独的世界观",
            "type": "standard"
          },
          {
            "text": "梦角是三次元",
            "type": "standard"
          },
          {
            "text": "梦向cp是bg/gb",
            "type": "standard"
          },
          {
            "text": "是梦角的嬷嬷",
            "type": "standard"
          },
          {
            "text": "画过cp的h图",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有自己的梦向tag",
            "type": "standard"
          },
          {
            "text": "不拒同担/同嫁",
            "type": "standard"
          },
          {
            "text": "有cp的动物塑",
            "type": "standard"
          },
          {
            "text": "梦角梦设年龄固定",
            "type": "standard"
          },
          {
            "text": "梦角还活着",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.563Z"
    },
    "nba": {
      "bingoId": "nba",
      "title": "NBA宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是篮球百科全书",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "背得出选秀顺位",
            "type": "standard"
          },
          {
            "text": "收藏球星卡",
            "type": "standard"
          },
          {
            "text": "分得清所有球队队徽",
            "type": "standard"
          },
          {
            "text": "用球星当微信名",
            "type": "standard"
          },
          {
            "text": "觉得远古篮球更纯粹",
            "type": "standard"
          }
        ],
        [
          {
            "text": "买过复刻球衣",
            "type": "standard"
          },
          {
            "text": "为球队吵过架",
            "type": "standard"
          },
          {
            "text": "凌晨定闹钟看球",
            "type": "standard"
          },
          {
            "text": "收藏比赛录像",
            "type": "standard"
          },
          {
            "text": "能分析战术板",
            "type": "standard"
          }
        ],
        [
          {
            "text": "房间贴满海报",
            "type": "standard"
          },
          {
            "text": "用篮球术语聊天",
            "type": "standard"
          },
          {
            "text": "追球星超十年",
            "type": "standard"
          },
          {
            "text": "买过签名篮球",
            "type": "standard"
          },
          {
            "text": "觉得现场比直播燃",
            "type": "standard"
          }
        ],
        [
          {
            "text": "分析球员数据",
            "type": "standard"
          },
          {
            "text": "为绝杀尖叫",
            "type": "standard"
          },
          {
            "text": "收藏各代球鞋",
            "type": "standard"
          },
          {
            "text": "会模仿球星动作",
            "type": "standard"
          },
          {
            "text": "嫌弃裁判眼瞎",
            "type": "standard"
          }
        ],
        [
          {
            "text": "用2K游戏练战术",
            "type": "standard"
          },
          {
            "text": "知道更衣室八卦",
            "type": "standard"
          },
          {
            "text": "买过总决赛门票",
            "type": "standard"
          },
          {
            "text": "在虎扑对线",
            "type": "standard"
          },
          {
            "text": "觉得乔丹是GOAT",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.564Z"
    },
    "nintendo_bingo": {
      "bingoId": "nintendo_bingo",
      "title": "任天堂宾果",
      "creator": "系统",
      "description": "五个连成一线，你是NS全家桶玩家认证！",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "玩过动森",
            "type": "standard"
          },
          {
            "text": "抓过宝可梦",
            "type": "standard"
          },
          {
            "text": "塞尔达传说通关",
            "type": "standard"
          },
          {
            "text": "有amiibo",
            "type": "standard"
          },
          {
            "text": "体验过健身环",
            "type": "standard"
          }
        ],
        [
          {
            "text": "Switch买了不止一个Joy-Con",
            "type": "standard"
          },
          {
            "text": "动森里岛建得像景区",
            "type": "standard"
          },
          {
            "text": "NS电量红过",
            "type": "standard"
          },
          {
            "text": "有自己的eShop账号",
            "type": "standard"
          },
          {
            "text": "为游戏通宵",
            "type": "standard"
          }
        ],
        [
          {
            "text": "玩过马里奥赛车",
            "type": "standard"
          },
          {
            "text": "塞尔达爬塔爬疯了",
            "type": "standard"
          },
          {
            "text": "有Switch外壳装饰",
            "type": "standard"
          },
          {
            "text": "和朋友打过NS大乱斗",
            "type": "standard"
          },
          {
            "text": "花钱买了DLC",
            "type": "standard"
          }
        ],
        [
          {
            "text": "对老任情怀深厚",
            "type": "standard"
          },
          {
            "text": "玩过任天堂掌机",
            "type": "standard"
          },
          {
            "text": "关注任天堂直面会",
            "type": "standard"
          },
          {
            "text": "看得懂“塞尔达+林克”的梗",
            "type": "standard"
          },
          {
            "text": "收藏周边公仔",
            "type": "standard"
          }
        ],
        [
          {
            "text": "朋友说你“真任豚”",
            "type": "standard"
          },
          {
            "text": "通关游戏截图打卡",
            "type": "standard"
          },
          {
            "text": "NS连着显示器玩",
            "type": "standard"
          },
          {
            "text": "喜欢马里奥工坊",
            "type": "standard"
          },
          {
            "text": "计划入手Switch2",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [
        "任天堂",
        "游戏",
        "Switch"
      ],
      "createdAt": "2025-07-29T01:14:01.564Z"
    },
    "ribendonghua": {
      "bingoId": "ribendonghua",
      "title": "日本动画宅宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你就是日本动画宅",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "蹲点等动画更新并第一时间观看",
            "type": "standard"
          },
          {
            "text": "会提前了解新番咨询",
            "type": "standard"
          },
          {
            "text": "去外网看过动画讨论",
            "type": "standard"
          },
          {
            "text": "看过十部及以上原创动画",
            "type": "standard"
          },
          {
            "text": "能听出五个及以上声优",
            "type": "standard"
          }
        ],
        [
          {
            "text": "搞过同人(包括不限于画/文/歌/剪辑等任何二创)",
            "type": "standard"
          },
          {
            "text": "参与讨论过追更的动画",
            "type": "standard"
          },
          {
            "text": "会唱几句动画ost",
            "type": "standard"
          },
          {
            "text": "知道五个及以上动画制作公司",
            "type": "standard"
          },
          {
            "text": "看过动画衍生(舞台剧/小说等)",
            "type": "standard"
          }
        ],
        [
          {
            "text": "临摹过动画作品",
            "type": "standard"
          },
          {
            "text": "有专门为动画建的歌单",
            "type": "standard"
          },
          {
            "text": "在电视上看过国语动画",
            "type": "standard"
          },
          {
            "text": "啃过生肉",
            "type": "standard"
          },
          {
            "text": "因为动画而去补了原作漫画/轻小说/游戏",
            "type": "standard"
          }
        ],
        [
          {
            "text": "参加过萌战(日萌/世萌/b萌)投票",
            "type": "standard"
          },
          {
            "text": "知道五个及以上动画监督",
            "type": "standard"
          },
          {
            "text": "看过至少一部长篇动画不少于300集",
            "type": "standard"
          },
          {
            "text": "追过动画直播",
            "type": "standard"
          },
          {
            "text": "完整看过至少一部大众评价极低的动画(如兽娘2、迷家梦幻岛2)",
            "type": "standard"
          }
        ],
        [
          {
            "text": "知道五个及以上字幕组",
            "type": "standard"
          },
          {
            "text": "买过动画官方周边",
            "type": "standard"
          },
          {
            "text": "为了看懂生肉去学了日语",
            "type": "standard"
          },
          {
            "text": "去影院看过至少一部原创动画电影",
            "type": "standard"
          },
          {
            "text": "现在仍在继续看动画",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [
        "日本动画"
      ],
      "createdAt": "2025-07-29T01:14:01.564Z"
    },
    "ribenmanhua": {
      "bingoId": "ribenmanhua",
      "title": "日本漫画宾果",
      "creator": "系统",
      "description": "五个连成一线，你已晋升为二次元大佬",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "能背出JUMP创刊年份",
            "type": "standard"
          },
          {
            "text": "收藏全套单行本",
            "type": "standard"
          },
          {
            "text": "分得清手冢和鸟山明画风",
            "type": "standard"
          },
          {
            "text": "用日语喊招式名",
            "type": "standard"
          },
          {
            "text": "觉得动画不如漫画",
            "type": "standard"
          }
        ],
        [
          {
            "text": "买过限定版书腰",
            "type": "standard"
          },
          {
            "text": "为CP打架过",
            "type": "standard"
          },
          {
            "text": "在漫展出过cos",
            "type": "standard"
          },
          {
            "text": "收藏作者签名板",
            "type": "standard"
          },
          {
            "text": "能画分镜稿",
            "type": "standard"
          }
        ],
        [
          {
            "text": "卧室贴满海报",
            "type": "standard"
          },
          {
            "text": "用漫画格做表情包",
            "type": "standard"
          },
          {
            "text": "追连载超过十年",
            "type": "standard"
          },
          {
            "text": "买过天价绝版书",
            "type": "standard"
          },
          {
            "text": "觉得纸质比电子版有灵魂",
            "type": "standard"
          }
        ],
        [
          {
            "text": "分析过伏笔回收",
            "type": "standard"
          },
          {
            "text": "为角色哭湿三包纸巾",
            "type": "standard"
          },
          {
            "text": "收藏不同版本",
            "type": "standard"
          },
          {
            "text": "会临摹经典场景",
            "type": "standard"
          },
          {
            "text": "嫌弃动画改编",
            "type": "standard"
          }
        ],
        [
          {
            "text": "用漫画学日语",
            "type": "standard"
          },
          {
            "text": "知道编辑八卦",
            "type": "standard"
          },
          {
            "text": "买过作者周边",
            "type": "standard"
          },
          {
            "text": "在论坛写分析长文",
            "type": "standard"
          },
          {
            "text": "觉得少年漫比现实热血",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.564Z"
    },
    "shuchongzhishu": {
      "bingoId": "shuchongzhishu",
      "title": "书虫指数宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你是深度文学爱好者",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "家里藏书超200本",
            "type": "standard"
          },
          {
            "text": "有专属书房/阅读角",
            "type": "standard"
          },
          {
            "text": "能背诵经典段落",
            "type": "standard"
          },
          {
            "text": "买书优先于买衣服",
            "type": "standard"
          },
          {
            "text": "参加过签售会",
            "type": "standard"
          }
        ],
        [
          {
            "text": "读书笔记超5本",
            "type": "standard"
          },
          {
            "text": "收藏绝版书",
            "type": "standard"
          },
          {
            "text": "每月读书≥4本",
            "type": "standard"
          },
          {
            "text": "给书包书皮",
            "type": "standard"
          },
          {
            "text": "按颜色分类书架",
            "type": "standard"
          }
        ],
        [
          {
            "text": "通读过四大名著",
            "type": "standard"
          },
          {
            "text": "有作者亲笔签名",
            "type": "standard"
          },
          {
            "text": "读书会常驻成员",
            "type": "standard"
          },
          {
            "text": "拒绝电子书",
            "type": "standard"
          },
          {
            "text": "送书当礼物",
            "type": "standard"
          }
        ],
        [
          {
            "text": "图书馆VIP用户",
            "type": "standard"
          },
          {
            "text": "读书时不吃零食",
            "type": "standard"
          },
          {
            "text": "床头常放3本书",
            "type": "standard"
          },
          {
            "text": "用书签不用折角",
            "type": "standard"
          },
          {
            "text": "能辨印刷体差异",
            "type": "standard"
          }
        ],
        [
          {
            "text": "购书预算超衣物",
            "type": "standard"
          },
          {
            "text": "读书计划表",
            "type": "standard"
          },
          {
            "text": "书腰收集者",
            "type": "standard"
          },
          {
            "text": "按出版社选书",
            "type": "standard"
          },
          {
            "text": "修复过破损书",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.565Z"
    },
    "fanfiction": {
      "bingoId": "fanfiction",
      "title": "同人创作宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你是资深同人作者",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "写过10万字以上",
            "type": "standard"
          },
          {
            "text": "创作过ABO设定",
            "type": "standard"
          },
          {
            "text": "有连载作品",
            "type": "standard"
          },
          {
            "text": "参与过合志",
            "type": "standard"
          },
          {
            "text": "研究过原著细节",
            "type": "standard"
          }
        ],
        [
          {
            "text": "创作过AU设定",
            "type": "standard"
          },
          {
            "text": "收到过长评",
            "type": "standard"
          },
          {
            "text": "有固定读者群",
            "type": "standard"
          },
          {
            "text": "写过敏感题材",
            "type": "standard"
          },
          {
            "text": "分析过角色心理",
            "type": "standard"
          }
        ],
        [
          {
            "text": "创作过RPS",
            "type": "standard"
          },
          {
            "text": "被要求授权翻译",
            "type": "standard"
          },
          {
            "text": "写过多CP作品",
            "type": "standard"
          },
          {
            "text": "设计过OC角色",
            "type": "standard"
          },
          {
            "text": "研究过时间线",
            "type": "standard"
          }
        ],
        [
          {
            "text": "创作过性转",
            "type": "standard"
          },
          {
            "text": "参加过创作挑战",
            "type": "standard"
          },
          {
            "text": "写过不同体裁",
            "type": "standard"
          },
          {
            "text": "为爱发电多年",
            "type": "standard"
          },
          {
            "text": "分析过原著漏洞",
            "type": "standard"
          }
        ],
        [
          {
            "text": "创作过cross-over",
            "type": "standard"
          },
          {
            "text": "被读者催更",
            "type": "standard"
          },
          {
            "text": "写过角色死亡",
            "type": "standard"
          },
          {
            "text": "制作过番外",
            "type": "standard"
          },
          {
            "text": "建立过设定集",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [
        "同人",
        "二次创作"
      ],
      "createdAt": "2025-07-29T01:14:01.565Z"
    },
    "wangqiu": {
      "bingoId": "wangqiu",
      "title": "网球爱好者宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是网坛活字典",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "背得出大满贯年份",
            "type": "standard"
          },
          {
            "text": "收藏比赛用球",
            "type": "standard"
          },
          {
            "text": "分得清所有握拍方式",
            "type": "standard"
          },
          {
            "text": "用球员英文名",
            "type": "standard"
          },
          {
            "text": "觉得草地赛最优雅",
            "type": "standard"
          }
        ],
        [
          {
            "text": "买过RF帽子",
            "type": "standard"
          },
          {
            "text": "为费纳决流泪",
            "type": "standard"
          },
          {
            "text": "熬夜看澳网",
            "type": "standard"
          },
          {
            "text": "收藏签名海报",
            "type": "standard"
          },
          {
            "text": "能解说比赛",
            "type": "standard"
          }
        ],
        [
          {
            "text": "房间摆奖杯模型",
            "type": "standard"
          },
          {
            "text": "用网球术语骂人",
            "type": "standard"
          },
          {
            "text": "追球员超十年",
            "type": "standard"
          },
          {
            "text": "买过温网毛巾",
            "type": "standard"
          },
          {
            "text": "觉得现场听击球声最爽",
            "type": "standard"
          }
        ],
        [
          {
            "text": "分析发球数据",
            "type": "standard"
          },
          {
            "text": "为破发点紧张",
            "type": "standard"
          },
          {
            "text": "收藏各代球拍",
            "type": "standard"
          },
          {
            "text": "会模仿纳达尔习惯",
            "type": "standard"
          },
          {
            "text": "嫌弃新生代不稳",
            "type": "standard"
          }
        ],
        [
          {
            "text": "用网球游戏练反应",
            "type": "standard"
          },
          {
            "text": "知道教练八卦",
            "type": "standard"
          },
          {
            "text": "买过大师赛门票",
            "type": "standard"
          },
          {
            "text": "在贴吧写技术帖",
            "type": "standard"
          },
          {
            "text": "觉得三巨头是神话",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.565Z"
    },
    "wangwen": {
      "bingoId": "wangwen",
      "title": "网文爱好者宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是文学城城主",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "记得起点创站时间",
            "type": "standard"
          },
          {
            "text": "收藏实体出版书",
            "type": "standard"
          },
          {
            "text": "分得清修仙等级",
            "type": "standard"
          },
          {
            "text": "用角色名当ID",
            "type": "standard"
          },
          {
            "text": "觉得早期网文更野",
            "type": "standard"
          }
        ],
        [
          {
            "text": "买过作者定制周边",
            "type": "standard"
          },
          {
            "text": "为CP写同人文",
            "type": "standard"
          },
          {
            "text": "熬夜追更新",
            "type": "standard"
          },
          {
            "text": "收藏签名书",
            "type": "standard"
          },
          {
            "text": "能写万章长评",
            "type": "standard"
          }
        ],
        [
          {
            "text": "手机存百部TXT",
            "type": "standard"
          },
          {
            "text": "用网文梗聊天",
            "type": "standard"
          },
          {
            "text": "追更超十年",
            "type": "standard"
          },
          {
            "text": "买过打赏盟主",
            "type": "standard"
          },
          {
            "text": "觉得盗版毁行业",
            "type": "standard"
          }
        ],
        [
          {
            "text": "分析世界观漏洞",
            "type": "standard"
          },
          {
            "text": "为BE哭三天",
            "type": "standard"
          },
          {
            "text": "收藏各题材神作",
            "type": "standard"
          },
          {
            "text": "会模仿大神文风",
            "type": "standard"
          },
          {
            "text": "嫌弃套路化严重",
            "type": "standard"
          }
        ],
        [
          {
            "text": "用网文学冷知识",
            "type": "standard"
          },
          {
            "text": "知道网站八卦",
            "type": "standard"
          },
          {
            "text": "买过众筹项目",
            "type": "standard"
          },
          {
            "text": "在龙空舌战群儒",
            "type": "standard"
          },
          {
            "text": "觉得网文是第九艺术",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.565Z"
    },
    "xingnu": {
      "bingoId": "xingnu",
      "title": "星奴宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是资深星奴！",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "种青豆把自己关了起来",
            "type": "standard"
          },
          {
            "text": "找玛尼买东西玛尼不在家",
            "type": "standard"
          },
          {
            "text": "誓死不加入joja",
            "type": "standard"
          },
          {
            "text": "梦想能得到垃圾目录",
            "type": "standard"
          },
          {
            "text": "把淘盘扣头上",
            "type": "standard"
          }
        ],
        [
          {
            "text": "告诉潘姆是谁给她建了房学",
            "type": "standard"
          },
          {
            "text": "期期不落酱料女皇",
            "type": "standard"
          },
          {
            "text": "喜欢科罗布斯",
            "type": "standard"
          },
          {
            "text": "抓出娃娃机里最大的植物家具",
            "type": "standard"
          },
          {
            "text": "达成完美成就",
            "type": "standard"
          }
        ],
        [
          {
            "text": "一点不看酱科女皇",
            "type": "standard"
          },
          {
            "text": "让哈维赚到很多钱",
            "type": "standard"
          },
          {
            "text": "吃绿藻",
            "type": "standard"
          },
          {
            "text": "被假人模特吓到",
            "type": "standard"
          },
          {
            "text": "喜欢帽子老鼠",
            "type": "standard"
          }
        ],
        [
          {
            "text": "为了改外貌和法师装燕",
            "type": "standard"
          },
          {
            "text": "喜欢祝尼魔",
            "type": "standard"
          },
          {
            "text": "小猫叫味噌",
            "type": "standard"
          },
          {
            "text": "让马厩和屋子连在一起",
            "type": "standard"
          },
          {
            "text": "显示高级打造信息",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看别人玩1.6羡慕得流口水",
            "type": "standard"
          },
          {
            "text": "星期三去杂货店",
            "type": "standard"
          },
          {
            "text": "有一枚铱环+幸运组合戒指",
            "type": "standard"
          },
          {
            "text": "拿五彩碎片做衣服玩",
            "type": "standard"
          },
          {
            "text": "地窖里有33个以上的木桶",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [
        "星际"
      ],
      "createdAt": "2025-07-29T01:14:01.565Z"
    },
    "honkaistarrail": {
      "bingoId": "honkaistarrail",
      "title": "崩坏：星穹铁道宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你是资深开拓者",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "全角色收集",
            "type": "standard"
          },
          {
            "text": "通关模拟宇宙6",
            "type": "standard"
          },
          {
            "text": "记住星神名字",
            "type": "standard"
          },
          {
            "text": "满星忘却之庭",
            "type": "standard"
          },
          {
            "text": "研究命途系统",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有专属配队",
            "type": "standard"
          },
          {
            "text": "分析角色技能",
            "type": "standard"
          },
          {
            "text": "收集光锥图鉴",
            "type": "standard"
          },
          {
            "text": "参加社区活动",
            "type": "standard"
          },
          {
            "text": "制作二创内容",
            "type": "standard"
          }
        ],
        [
          {
            "text": "研究遗器搭配",
            "type": "standard"
          },
          {
            "text": "关注开发组通讯",
            "type": "standard"
          },
          {
            "text": "记住列车组成员",
            "type": "standard"
          },
          {
            "text": "完成所有成就",
            "type": "standard"
          },
          {
            "text": "分析剧情伏笔",
            "type": "standard"
          }
        ],
        [
          {
            "text": "参与版本测试",
            "type": "standard"
          },
          {
            "text": "计算伤害公式",
            "type": "standard"
          },
          {
            "text": "收藏周边商品",
            "type": "standard"
          },
          {
            "text": "研究星轨地图",
            "type": "standard"
          },
          {
            "text": "制作攻略指南",
            "type": "standard"
          }
        ],
        [
          {
            "text": "满命角色",
            "type": "standard"
          },
          {
            "text": "研究元素弱点",
            "type": "standard"
          },
          {
            "text": "分析角色背景",
            "type": "standard"
          },
          {
            "text": "参与剧情讨论",
            "type": "standard"
          },
          {
            "text": "记住所有台词",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [
        "崩坏：星穹铁道",
        "米哈游"
      ],
      "createdAt": "2025-07-29T01:14:01.566Z"
    },
    "yaogun": {
      "bingoId": "yaogun",
      "title": "摇滚宾果",
      "creator": "系统",
      "description": "五个连成一线,说明你是一个真正的摇滚b",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "有一个专门的摇滚歌单",
            "type": "standard"
          },
          {
            "text": "年度歌手是摇滚乐队",
            "type": "standard"
          },
          {
            "text": "去过三次及以上livehouse",
            "type": "standard"
          },
          {
            "text": "去过school",
            "type": "standard"
          },
          {
            "text": "在现场打拳/排甩/开火车",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看不起乐队的夏天",
            "type": "standard"
          },
          {
            "text": "朋友圈个性签名是乐队歌词",
            "type": "standard"
          },
          {
            "text": "去过音乐节",
            "type": "standard"
          },
          {
            "text": "有乐队T恤/周边",
            "type": "standard"
          },
          {
            "text": "喜欢的乐队被爆黑料",
            "type": "standard"
          }
        ],
        [
          {
            "text": "在ktv发现只会唱摇滚并发现搜不到",
            "type": "standard"
          },
          {
            "text": "听的歌被骂土/非主流",
            "type": "standard"
          },
          {
            "text": "有一把吉他/贝斯",
            "type": "standard"
          },
          {
            "text": "在livehouse跳水",
            "type": "standard"
          },
          {
            "text": "有乐队专辑/黑胶",
            "type": "standard"
          }
        ],
        [
          {
            "text": "幻想自己搞乐队/搞乐队",
            "type": "standard"
          },
          {
            "text": "抽烟/喝酒",
            "type": "standard"
          },
          {
            "text": "去音乐节/live house当志愿者",
            "type": "standard"
          },
          {
            "text": "偷偷听被骂的乐队的歌",
            "type": "standard"
          },
          {
            "text": "在音乐节蹦一整天",
            "type": "standard"
          }
        ],
        [
          {
            "text": "去过迷笛",
            "type": "standard"
          },
          {
            "text": "朋友圈分享很多国摇",
            "type": "standard"
          },
          {
            "text": "没什么好.看衣服",
            "type": "standard"
          },
          {
            "text": "在音乐节摇旗/放冷焰",
            "type": "standard"
          },
          {
            "text": "爱讲94年红勘/魔岩三杰",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.566Z"
    },
    "rhythmgamer": {
      "bingoId": "rhythmgamer",
      "title": "音游玩家宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你是节奏大师",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "全连EX难度",
            "type": "standard"
          },
          {
            "text": "多指操作",
            "type": "standard"
          },
          {
            "text": "收藏音游设备",
            "type": "standard"
          },
          {
            "text": "参加线下比赛",
            "type": "standard"
          },
          {
            "text": "自制谱面",
            "type": "standard"
          }
        ],
        [
          {
            "text": "AP过魔王曲",
            "type": "standard"
          },
          {
            "text": "玩过街机音游",
            "type": "standard"
          },
          {
            "text": "熟悉BPM变化",
            "type": "standard"
          },
          {
            "text": "研究手元视频",
            "type": "standard"
          },
          {
            "text": "能读高密度谱",
            "type": "standard"
          }
        ],
        [
          {
            "text": "全系列制霸",
            "type": "standard"
          },
          {
            "text": "调整偏移值",
            "type": "standard"
          },
          {
            "text": "记住曲师名字",
            "type": "standard"
          },
          {
            "text": "练习特定技巧",
            "type": "standard"
          },
          {
            "text": "分析谱面结构",
            "type": "standard"
          }
        ],
        [
          {
            "text": "FC过LV14+",
            "type": "standard"
          },
          {
            "text": "使用专业耳机",
            "type": "standard"
          },
          {
            "text": "收藏实体CD",
            "type": "standard"
          },
          {
            "text": "参加线上活动",
            "type": "standard"
          },
          {
            "text": "能打交互段",
            "type": "standard"
          }
        ],
        [
          {
            "text": "研究判定机制",
            "type": "standard"
          },
          {
            "text": "多平台玩家",
            "type": "standard"
          },
          {
            "text": "制作教程视频",
            "type": "standard"
          },
          {
            "text": "挑战手速极限",
            "type": "standard"
          },
          {
            "text": "记住所有曲目",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [
        "音乐游戏",
        "节奏"
      ],
      "createdAt": "2025-07-29T01:14:01.566Z"
    },
    "gameplayer": {
      "bingoId": "gameplayer",
      "title": "游戏玩家宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你是硬核游戏玩家",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "拥有3个以上游戏平台",
            "type": "standard"
          },
          {
            "text": "白金/全成就≥5款游戏",
            "type": "standard"
          },
          {
            "text": "参加过电竞赛事",
            "type": "standard"
          },
          {
            "text": "能速通经典游戏",
            "type": "standard"
          },
          {
            "text": "收藏限定版主机",
            "type": "standard"
          }
        ],
        [
          {
            "text": "游戏时间超5000小时",
            "type": "standard"
          },
          {
            "text": "会修改游戏文件",
            "type": "standard"
          },
          {
            "text": "拥有电竞外设",
            "type": "standard"
          },
          {
            "text": "制作过游戏MOD",
            "type": "standard"
          },
          {
            "text": "记得秘籍代码",
            "type": "standard"
          }
        ],
        [
          {
            "text": "首发购入游戏",
            "type": "standard"
          },
          {
            "text": "通关过魂类游戏",
            "type": "standard"
          },
          {
            "text": "参加游戏测试",
            "type": "standard"
          },
          {
            "text": "会分析游戏机制",
            "type": "standard"
          },
          {
            "text": "收藏游戏原声",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有游戏周边收藏",
            "type": "standard"
          },
          {
            "text": "能背出角色台词",
            "type": "standard"
          },
          {
            "text": "写过游戏攻略",
            "type": "standard"
          },
          {
            "text": "参与过众筹游戏",
            "type": "standard"
          },
          {
            "text": "会速建红石机关",
            "type": "standard"
          }
        ],
        [
          {
            "text": "精通格斗游戏连招",
            "type": "standard"
          },
          {
            "text": "了解游戏开发流程",
            "type": "standard"
          },
          {
            "text": "有游戏截图集",
            "type": "standard"
          },
          {
            "text": "能还原经典关卡",
            "type": "standard"
          },
          {
            "text": "订阅游戏杂志",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [
        "玩家",
        "硬核"
      ],
      "createdAt": "2025-07-29T01:14:01.566Z"
    },
    "genshin_impact": {
      "bingoId": "genshin_impact",
      "title": "原神玩家宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你是资深旅行者",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "全图探索100%",
            "type": "standard"
          },
          {
            "text": "满星深渊12层",
            "type": "standard"
          },
          {
            "text": "收集全角色",
            "type": "standard"
          },
          {
            "text": "记住七国设定",
            "type": "standard"
          },
          {
            "text": "研究元素反应",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有满命五星",
            "type": "standard"
          },
          {
            "text": "参加线下活动",
            "type": "standard"
          },
          {
            "text": "制作二创内容",
            "type": "standard"
          },
          {
            "text": "收集全成就",
            "type": "standard"
          },
          {
            "text": "分析剧情细节",
            "type": "standard"
          }
        ],
        [
          {
            "text": "精通烹饪系统",
            "type": "standard"
          },
          {
            "text": "研究圣遗物",
            "type": "standard"
          },
          {
            "text": "记住NPC故事",
            "type": "standard"
          },
          {
            "text": "参与社区讨论",
            "type": "standard"
          },
          {
            "text": "制作攻略视频",
            "type": "standard"
          }
        ],
        [
          {
            "text": "挑战无伤BOSS",
            "type": "standard"
          },
          {
            "text": "收藏周边",
            "type": "standard"
          },
          {
            "text": "研究配队",
            "type": "standard"
          },
          {
            "text": "完成所有任务",
            "type": "standard"
          },
          {
            "text": "分析角色背景",
            "type": "standard"
          }
        ],
        [
          {
            "text": "满精炼武器",
            "type": "standard"
          },
          {
            "text": "参加音乐会",
            "type": "standard"
          },
          {
            "text": "记住所有台词",
            "type": "standard"
          },
          {
            "text": "研究世界任务",
            "type": "standard"
          },
          {
            "text": "创建同人作品",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [
        "原神",
        "米哈游"
      ],
      "createdAt": "2025-07-29T01:14:01.566Z"
    },
    "zuqiu": {
      "bingoId": "zuqiu",
      "title": "足球爱好者宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是绿茵场百事通",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "背得出世界杯冠军",
            "type": "standard"
          },
          {
            "text": "收藏球星球衣",
            "type": "standard"
          },
          {
            "text": "分得清所有阵型",
            "type": "standard"
          },
          {
            "text": "用球队当头像",
            "type": "standard"
          },
          {
            "text": "觉得马拉多纳是神",
            "type": "standard"
          }
        ],
        [
          {
            "text": "买过赛季围巾",
            "type": "standard"
          },
          {
            "text": "为德比战失眠",
            "type": "standard"
          },
          {
            "text": "凌晨看欧冠",
            "type": "standard"
          },
          {
            "text": "收藏签名足球",
            "type": "standard"
          },
          {
            "text": "能当战术分析师",
            "type": "standard"
          }
        ],
        [
          {
            "text": "房间挂队旗",
            "type": "standard"
          },
          {
            "text": "用足球梗聊天",
            "type": "standard"
          },
          {
            "text": "追俱乐部超十年",
            "type": "standard"
          },
          {
            "text": "买过绝版球鞋",
            "type": "standard"
          },
          {
            "text": "觉得现场助威最震撼",
            "type": "standard"
          }
        ],
        [
          {
            "text": "分析球员跑动距离",
            "type": "standard"
          },
          {
            "text": "为点球捂眼睛",
            "type": "standard"
          },
          {
            "text": "收藏各年代队徽",
            "type": "standard"
          },
          {
            "text": "会模仿庆祝动作",
            "type": "standard"
          },
          {
            "text": "嫌弃VAR毁比赛",
            "type": "standard"
          }
        ],
        [
          {
            "text": "用FIFA游戏排阵容",
            "type": "standard"
          },
          {
            "text": "知道更衣室故事",
            "type": "standard"
          },
          {
            "text": "买过世界杯门票",
            "type": "standard"
          },
          {
            "text": "在懂球帝对喷",
            "type": "standard"
          },
          {
            "text": "觉得梅西是外星人",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.566Z"
    },
    "wenshou": {
      "bingoId": "wenshou",
      "title": "文手成就宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是超级文手",
      "gridSize": {
        "rows": 6,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "能正确使用的得地且错别字不多",
            "type": "standard"
          },
          {
            "text": "能正确使用标点符号并恰当地进行分段",
            "type": "standard"
          },
          {
            "text": "文字没有被网络用语侵蚀",
            "type": "standard"
          },
          {
            "text": "有阅读文学出版物的习惯",
            "type": "standard"
          },
          {
            "text": "写文前会写大纲或草稿",
            "type": "standard"
          }
        ],
        [
          {
            "text": "写文时会有一个核心",
            "type": "standard"
          },
          {
            "text": "不常为取标题而烦恼",
            "type": "standard"
          },
          {
            "text": "明白自己每一篇文想表达什么",
            "type": "standard"
          },
          {
            "text": "喜欢准确无误的表达",
            "type": "standard"
          },
          {
            "text": "总是明白自己创作的母题",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有明确的行文风格",
            "type": "standard"
          },
          {
            "text": "闲的时候忙的时候都会思考创作",
            "type": "standard"
          },
          {
            "text": "不论热度高低都不会停止创作",
            "type": "standard"
          },
          {
            "text": "一段时间不写文很痛苦",
            "type": "standard"
          },
          {
            "text": "为自己的作品感到骄傲",
            "type": "standard"
          }
        ],
        [
          {
            "text": "不会因为口嗨而影响正文的创作",
            "type": "standard"
          },
          {
            "text": "无法心安理得地坑掉任何一篇文",
            "type": "standard"
          },
          {
            "text": "因为写作而辗转难眠",
            "type": "standard"
          },
          {
            "text": "从自己尊敬的人那里得到过认可",
            "type": "standard"
          },
          {
            "text": "有自己固定的写作习惯",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有自己鲜明的语言风格",
            "type": "standard"
          },
          {
            "text": "有时会因为写作而感到焦虑",
            "type": "standard"
          },
          {
            "text": "享受写作带来的成就感",
            "type": "standard"
          },
          {
            "text": "和别人讨论写作时会感到兴奋",
            "type": "standard"
          },
          {
            "text": "每天都会写点东西",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": ["写作", "文学"],
      "createdAt": "2025-01-21T10:00:00.000Z"
    },
    "oumeiquan": {
      "bingoId": "oumeiquan",
      "title": "欧美圈宾果1",
      "creator": "系统",
      "description": "五个连成一线，你就是欧美圈超级影迷",
      "gridSize": {
        "rows": 6,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "深刻理解盖里奇不会数数",
            "type": "standard"
          },
          {
            "text": "此生无悔入漫威",
            "type": "standard"
          },
          {
            "text": "今天你擦甲板了吗?",
            "type": "standard"
          },
          {
            "text": "两个月的意乱情迷一个世纪的不可言说",
            "type": "standard"
          },
          {
            "text": "山谷里再也不会有枪声了",
            "type": "standard"
          }
        ],
        [
          {
            "text": "'I love you.' 'lt will pass.'",
            "type": "standard"
          },
          {
            "text": "'你正在被做成表' '你给了我份工作'",
            "type": "standard"
          },
          {
            "text": "曾经沧海难为水，我为EC...",
            "type": "standard"
          },
          {
            "text": "白金汉宫的烟灰缸",
            "type": "standard"
          },
          {
            "text": "白树开花中土永存",
            "type": "standard"
          }
        ],
        [
          {
            "text": "公费恋爱六千年 'l forgive you'",
            "type": "standard"
          },
          {
            "text": "After all this time?Always.",
            "type": "standard"
          },
          {
            "text": "在电影院哭完一包纸巾",
            "type": "standard"
          },
          {
            "text": "Allons-y！ Geronimo! Laugh hard! Run fast!",
            "type": "standard"
          },
          {
            "text": "民风淳朴哥谭市，人才辈出阿卡姆",
            "type": "standard"
          }
        ],
        [
          {
            "text": "I have been,and always shall be, your friend",
            "type": "standard"
          },
          {
            "text": "You were my brother,Anakin!I loved you!",
            "type": "standard"
          },
          {
            "text": "Brother,the sun wil shine on us again",
            "type": "standard"
          },
          {
            "text": "凛冬将至北境永不忘",
            "type": "standard"
          },
          {
            "text": "如果我能每天见到你，我也会记得这一次，直至永恒，Will",
            "type": "standard"
          }
        ],
        [
          {
            "text": "Dean Winchester I love you.",
            "type": "standard"
          },
          {
            "text": "君埋泉下泥销骨,我寄人间雪满头",
            "type": "standard"
          },
          {
            "text": "I wish l knew how to quit you.",
            "type": "standard"
          },
          {
            "text": "We are Venom!",
            "type": "standard"
          },
          {
            "text": "llove you three thousand",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": ["欧美", "影视", "粉圈"],
      "createdAt": "2025-01-21T10:01:00.000Z"
    },
    "oumeiquan2": {
      "bingoId": "oumeiquan2",
      "title": "欧美圈宾果2",
      "creator": "系统",
      "description": "五个连成一线，你就是欧美圈超级影迷",
      "gridSize": {
        "rows": 6,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "不存在的大侦探福尔摩斯3",
            "type": "standard"
          },
          {
            "text": "社交网络",
            "type": "standard"
          },
          {
            "text": "伦敦生活",
            "type": "standard"
          },
          {
            "text": "好兆头 CA",
            "type": "standard"
          },
          {
            "text": "指环王 AL",
            "type": "standard"
          }
        ],
        [
          {
            "text": "蝙蝠侠",
            "type": "standard"
          },
          {
            "text": "哈利波特 GGAD",
            "type": "standard"
          },
          {
            "text": "Logan 金刚狼3",
            "type": "standard"
          },
          {
            "text": "X战警/万磁王/X教授",
            "type": "standard"
          },
          {
            "text": "神夏福华",
            "type": "standard"
          }
        ],
        [
          {
            "text": "漫威还我眼泪",
            "type": "standard"
          },
          {
            "text": "哈利波特斯教",
            "type": "standard"
          },
          {
            "text": "在电影院哭完一包纸巾",
            "type": "standard"
          },
          {
            "text": "神秘博士",
            "type": "standard"
          },
          {
            "text": "疑犯追踪RF",
            "type": "standard"
          }
        ],
        [
          {
            "text": "Star Trek   Kirk/Spock",
            "type": "standard"
          },
          {
            "text": "邪恶力量",
            "type": "standard"
          },
          {
            "text": "复联3 锤基",
            "type": "standard"
          },
          {
            "text": "汉尼拔",
            "type": "standard"
          },
          {
            "text": "星球大战3 师徒",
            "type": "standard"
          }
        ],
        [
          {
            "text": "断背山",
            "type": "standard"
          },
          {
            "text": "毒液",
            "type": "standard"
          },
          {
            "text": "钢铁侠",
            "type": "standard"
          },
          {
            "text": "权力的游戏",
            "type": "standard"
          },
          {
            "text": "梅林传奇 亚梅",
            "type": "standard"
          }
        ]
      ],
      "category": "爱好",
      "tags": ["欧美", "影视", "粉圈"],
      "createdAt": "2025-01-21T10:02:00.000Z"
    },
    "houxiandai": {
      "bingoId": "houxiandai",
      "title": "后现代身份认同",
      "creator": "系统",
      "description": "五个连成一线，你就是神金中的神金",
      "gridSize": {
        "rows": 6,
        "cols": 5
      },
      "gridContent": [
        [
          {"text": "小红书关注了#审美积累", "type": "standard"},
          {"text": "二次元", "type": "standard"},
          {"text": "摄影", "type": "standard"},
          {"text": "自认为抽象", "type": "standard"},
          {"text": "非二元", "type": "standard"}
        ],
        [
          {"text": "键政", "type": "standard"},
          {"text": "'原生家庭'", "type": "standard"},
          {"text": "SM", "type": "standard"},
          {"text": "键哲", "type": "standard"},
          {"text": "实验音乐", "type": "standard"}
        ],
        [
          {"text": "女权", "type": "standard"},
          {"text": "传统文学", "type": "standard"},
          {"text": "爱看后现代艺术展", "type": "standard"},
          {"text": "看意识流类作品", "type": "standard"},
          {"text": "乐器", "type": "standard"}
        ],
        [
          {"text": "摇滚", "type": "standard"},
          {"text": "有穿孔/纹身", "type": "standard"},
          {"text": "ADHD/Asperger", "type": "standard"},
          {"text": "艺术生", "type": "standard"},
          {"text": "MBTI", "type": "standard"}
        ],
        [
          {"text": "犬儒主义", "type": "standard"},
          {"text": "Alcoholic", "type": "standard"},
          {"text": "认为自己有玉玉/焦虑症", "type": "standard"},
          {"text": "买了一堆奇怪的书但从来没看", "type": "standard"},
          {"text": "毕加索", "type": "standard"}
        ]
      ],
      "category": "爱好",
      "tags": ["艺术", "哲学", "文化"],
      "createdAt": "2025-01-21T10:03:00.000Z"
    },
    "wenyibi": {
      "bingoId": "wenyibi",
      "title": "文艺逼宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是文艺青年",
      "gridSize": {
        "rows": 6,
        "cols": 5
      },
      "gridContent": [
        [
          {"text": "用过加缪当头像", "type": "standard"},
          {"text": "朋友圈签名是电影台词", "type": "standard"},
          {"text": "黑白摄影", "type": "standard"},
          {"text": "弹吉他", "type": "standard"},
          {"text": "打钉", "type": "standard"}
        ],
        [
          {"text": "认为自己孤独", "type": "standard"},
          {"text": "独自喝酒", "type": "standard"},
          {"text": "留长发或想留长发", "type": "standard"},
          {"text": "前卫摇滚", "type": "standard"},
          {"text": "曾经喜欢过大冰", "type": "standard"}
        ],
        [
          {"text": "会感觉自己抑郁症", "type": "standard"},
          {"text": "读博尔赫斯", "type": "standard"},
          {"text": "渴望sex", "type": "standard"},
          {"text": "借酒消愁", "type": "standard"},
          {"text": "无病呻吟", "type": "standard"}
        ],
        [
          {"text": "网左", "type": "standard"},
          {"text": "读弗洛伊德", "type": "standard"},
          {"text": "亚比穿搭", "type": "standard"},
          {"text": "读尼采", "type": "standard"},
          {"text": "批判主流审美", "type": "standard"}
        ],
        [
          {"text": "读太宰治", "type": "standard"},
          {"text": "墙上贴海报", "type": "standard"},
          {"text": "边骂边用豆瓣", "type": "standard"},
          {"text": "吃咖啡不加糖不加奶", "type": "standard"},
          {"text": "一个人看文艺片", "type": "standard"}
        ]
      ],
      "category": "爱好",
      "tags": ["文艺", "文学", "摄影"],
      "createdAt": "2025-01-21T10:04:00.000Z"
    },
    "erciyuanshengqian": {
      "bingoId": "erciyuanshengqian",
      "title": "二次元省钱宾果",
      "creator": "系统",
      "description": "五个连成一线，不是说二次元不花钱吗？",
      "gridSize": {
        "rows": 6,
        "cols": 5
      },
      "gridContent": [
        [
          {"text": "吃国外IP的官谷", "type": "standard"},
          {"text": "玩cos并有多件cos服", "type": "standard"},
          {"text": "吃国内IP的官谷", "type": "standard"},
          {"text": "购入官方手办", "type": "standard"},
          {"text": "吃同人谷", "type": "standard"}
        ],
        [
          {"text": "单个游戏氪金超过2000", "type": "standard"},
          {"text": "玩cos并花钱约妆", "type": "standard"},
          {"text": "自己贴钱制作同人谷", "type": "standard"},
          {"text": "养bjd并花钱约头发", "type": "standard"},
          {"text": "拼高达", "type": "standard"}
        ],
        [
          {"text": "购买买断卡带游戏", "type": "standard"},
          {"text": "玩cos并花钱约毛", "type": "standard"},
          {"text": "给oc约稿", "type": "standard"},
          {"text": "一年去过多次漫展", "type": "standard"},
          {"text": "约过线下cos委托", "type": "standard"}
        ],
        [
          {"text": "拥有自己的游戏主机", "type": "standard"},
          {"text": "玩cos并花钱约摄影", "type": "standard"},
          {"text": "约同人稿", "type": "standard"},
          {"text": "超正常量购入周边", "type": "standard"},
          {"text": "搞特摄", "type": "standard"}
        ],
        [
          {"text": "购买全套实体谷", "type": "standard"},
          {"text": "玩cos并花钱约道具", "type": "standard"},
          {"text": "定制oc实体周边", "type": "standard"},
          {"text": "养bjd并花钱约妆", "type": "standard"},
          {"text": "为娃娃购入复数衣服", "type": "standard"}
        ]
      ],
      "category": "爱好",
      "tags": ["二次元", "动漫", "游戏"],
      "createdAt": "2025-01-21T10:05:00.000Z"
    }
  },
  "知识": {
    "kejidaren": {
      "bingoId": "kejidaren",
      "title": "科技达人宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你是前沿科技掌控者",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "首发抢购新品",
            "type": "standard"
          },
          {
            "text": "会编程语言",
            "type": "standard"
          },
          {
            "text": "拥有智能家居",
            "type": "standard"
          },
          {
            "text": "订阅科技媒体",
            "type": "standard"
          },
          {
            "text": "参加开发者大会",
            "type": "standard"
          }
        ],
        [
          {
            "text": "VR设备使用者",
            "type": "standard"
          },
          {
            "text": "自制电子产品",
            "type": "standard"
          },
          {
            "text": "关注芯片进展",
            "type": "standard"
          },
          {
            "text": "使用Linux系统",
            "type": "standard"
          },
          {
            "text": "拥有3D打印机",
            "type": "standard"
          }
        ],
        [
          {
            "text": "测试版软件用户",
            "type": "standard"
          },
          {
            "text": "搭建个人服务器",
            "type": "standard"
          },
          {
            "text": "加密货币玩家",
            "type": "standard"
          },
          {
            "text": "开源项目贡献",
            "type": "standard"
          },
          {
            "text": "电子设备维修",
            "type": "standard"
          }
        ],
        [
          {
            "text": "AI工具深度使用",
            "type": "standard"
          },
          {
            "text": "拥有无人机",
            "type": "standard"
          },
          {
            "text": "订阅学术论文",
            "type": "standard"
          },
          {
            "text": "参与众测项目",
            "type": "standard"
          },
          {
            "text": "写技术博客",
            "type": "standard"
          }
        ],
        [
          {
            "text": "掌握量子计算",
            "type": "standard"
          },
          {
            "text": "拥有穿戴设备",
            "type": "standard"
          },
          {
            "text": "搭建家庭实验室",
            "type": "standard"
          },
          {
            "text": "订阅专利动态",
            "type": "standard"
          },
          {
            "text": "机器人编程",
            "type": "standard"
          }
        ]
      ],
      "category": "知识",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.567Z"
    },
    "science_trivia": {
      "bingoId": "science_trivia",
      "title": "科学冷知识宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你是冷知识百科全书",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "章鱼有三颗心脏",
            "type": "standard"
          },
          {
            "text": "光年是距离单位",
            "type": "standard"
          },
          {
            "text": "蜂蜜永不腐坏",
            "type": "standard"
          },
          {
            "text": "火星有四季变化",
            "type": "standard"
          },
          {
            "text": "电可以在真空中传播",
            "type": "standard"
          }
        ],
        [
          {
            "text": "企鹅有膝盖",
            "type": "standard"
          },
          {
            "text": "香蕉是草本植物",
            "type": "standard"
          },
          {
            "text": "声音在水中传播更快",
            "type": "standard"
          },
          {
            "text": "黑洞也会蒸发",
            "type": "standard"
          },
          {
            "text": "光有质量",
            "type": "standard"
          }
        ],
        [
          {
            "text": "人类DNA有98%与黑猩猩相同",
            "type": "standard"
          },
          {
            "text": "火焰在太空中是球形",
            "type": "standard"
          },
          {
            "text": "闪电比太阳热",
            "type": "standard"
          },
          {
            "text": "冥王星曾是行星",
            "type": "standard"
          },
          {
            "text": "鲸鱼能“唱歌”交流",
            "type": "standard"
          }
        ],
        [
          {
            "text": "水可在常温下沸腾",
            "type": "standard"
          },
          {
            "text": "蜗牛有数千颗牙齿",
            "type": "standard"
          },
          {
            "text": "金属在太空会焊接在一起",
            "type": "standard"
          },
          {
            "text": "人体可制造维生素D",
            "type": "standard"
          },
          {
            "text": "宇宙在膨胀",
            "type": "standard"
          }
        ],
        [
          {
            "text": "章鱼会更换颜色伪装",
            "type": "standard"
          },
          {
            "text": "水熊虫能在真空中生存",
            "type": "standard"
          },
          {
            "text": "月球正在远离地球",
            "type": "standard"
          },
          {
            "text": "木星是太阳系最大行星",
            "type": "standard"
          },
          {
            "text": "磁场能影响动物迁徙",
            "type": "standard"
          }
        ]
      ],
      "category": "知识",
      "tags": [
        "冷知识",
        "科学",
        "自然"
      ],
      "createdAt": "2025-07-29T01:14:01.567Z"
    },
    "kexuesuyang": {
      "bingoId": "kexuesuyang",
      "title": "科学素养宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你具备优秀科学素养",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "理解相对论基础",
            "type": "standard"
          },
          {
            "text": "知道元素周期表规律",
            "type": "standard"
          },
          {
            "text": "了解DNA双螺旋结构",
            "type": "standard"
          },
          {
            "text": "熟悉牛顿三大定律",
            "type": "standard"
          },
          {
            "text": "能解释光合作用",
            "type": "standard"
          }
        ],
        [
          {
            "text": "理解量子纠缠概念",
            "type": "standard"
          },
          {
            "text": "知道细胞分裂过程",
            "type": "standard"
          },
          {
            "text": "了解大气环流原理",
            "type": "standard"
          },
          {
            "text": "熟悉火山形成机制",
            "type": "standard"
          },
          {
            "text": "能解释潮汐现象",
            "type": "standard"
          }
        ],
        [
          {
            "text": "理解黑洞基本原理",
            "type": "standard"
          },
          {
            "text": "知道人类进化阶段",
            "type": "standard"
          },
          {
            "text": "了解板块构造理论",
            "type": "standard"
          },
          {
            "text": "熟悉电磁感应定律",
            "type": "standard"
          },
          {
            "text": "能解释酸碱中和",
            "type": "standard"
          }
        ],
        [
          {
            "text": "理解基因编辑原理",
            "type": "standard"
          },
          {
            "text": "知道太阳系行星特征",
            "type": "standard"
          },
          {
            "text": "了解生态系统平衡",
            "type": "standard"
          },
          {
            "text": "熟悉光的波粒二象性",
            "type": "standard"
          },
          {
            "text": "能解释温室效应",
            "type": "standard"
          }
        ],
        [
          {
            "text": "理解纳米技术应用",
            "type": "standard"
          },
          {
            "text": "知道免疫系统工作原理",
            "type": "standard"
          },
          {
            "text": "了解量子计算机原理",
            "type": "standard"
          },
          {
            "text": "熟悉生物多样性价值",
            "type": "standard"
          },
          {
            "text": "能解释伯努利原理",
            "type": "standard"
          }
        ]
      ],
      "category": "知识",
      "tags": [
        "知识",
        "科普"
      ],
      "createdAt": "2025-07-29T01:14:01.568Z"
    },
    "lishitongshi": {
      "bingoId": "lishitongshi",
      "title": "历史通识宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你是历史知识达人",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "能说出四大文明古国",
            "type": "standard"
          },
          {
            "text": "知道春秋五霸是谁",
            "type": "standard"
          },
          {
            "text": "了解文艺复兴三杰",
            "type": "standard"
          },
          {
            "text": "熟悉中国朝代顺序",
            "type": "standard"
          },
          {
            "text": "能解释冷战概念",
            "type": "standard"
          }
        ],
        [
          {
            "text": "知道丝绸之路路线",
            "type": "standard"
          },
          {
            "text": "了解工业革命影响",
            "type": "standard"
          },
          {
            "text": "能说出战国七雄",
            "type": "standard"
          },
          {
            "text": "熟悉三国鼎立局面",
            "type": "standard"
          },
          {
            "text": "了解法国大革命",
            "type": "standard"
          }
        ],
        [
          {
            "text": "知道郑和下西洋",
            "type": "standard"
          },
          {
            "text": "了解美国独立战争",
            "type": "standard"
          },
          {
            "text": "能解释禅让制",
            "type": "standard"
          },
          {
            "text": "熟悉明治维新",
            "type": "standard"
          },
          {
            "text": "了解拜占庭帝国",
            "type": "standard"
          }
        ],
        [
          {
            "text": "知道玄武门之变",
            "type": "standard"
          },
          {
            "text": "了解启蒙运动",
            "type": "standard"
          },
          {
            "text": "能说出唐宋八大家",
            "type": "standard"
          },
          {
            "text": "熟悉地理大发现",
            "type": "standard"
          },
          {
            "text": "了解戊戌变法",
            "type": "standard"
          }
        ],
        [
          {
            "text": "知道诺曼征服",
            "type": "standard"
          },
          {
            "text": "了解贞观之治",
            "type": "standard"
          },
          {
            "text": "能解释圈地运动",
            "type": "standard"
          },
          {
            "text": "熟悉汉谟拉比法典",
            "type": "standard"
          },
          {
            "text": "了解鸦片战争",
            "type": "standard"
          }
        ]
      ],
      "category": "知识",
      "tags": [
        "知识",
        "通识"
      ],
      "createdAt": "2025-07-29T01:14:01.568Z"
    },
    "wenxuejingdian": {
      "bingoId": "wenxuejingdian",
      "title": "文学经典宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你博览文学经典",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "读过《红楼梦》全本",
            "type": "standard"
          },
          {
            "text": "知道莎士比亚四大悲剧",
            "type": "standard"
          },
          {
            "text": "了解魔幻现实主义",
            "type": "standard"
          },
          {
            "text": "熟悉唐诗三百首",
            "type": "standard"
          },
          {
            "text": "能分析鲁迅代表作",
            "type": "standard"
          }
        ],
        [
          {
            "text": "读过《百年孤独》",
            "type": "standard"
          },
          {
            "text": "知道古希腊三大悲剧家",
            "type": "standard"
          },
          {
            "text": "了解意识流写作手法",
            "type": "standard"
          },
          {
            "text": "熟悉宋词主要流派",
            "type": "standard"
          },
          {
            "text": "能背诵《离骚》选段",
            "type": "standard"
          }
        ],
        [
          {
            "text": "读过《战争与和平》",
            "type": "standard"
          },
          {
            "text": "知道诺贝尔文学奖得主",
            "type": "standard"
          },
          {
            "text": "了解后现代主义文学",
            "type": "standard"
          },
          {
            "text": "熟悉元曲四大家",
            "type": "standard"
          },
          {
            "text": "能赏析杜甫诗作",
            "type": "standard"
          }
        ],
        [
          {
            "text": "读过《追忆似水年华》",
            "type": "standard"
          },
          {
            "text": "知道唐宋八大家",
            "type": "standard"
          },
          {
            "text": "了解浪漫主义文学",
            "type": "standard"
          },
          {
            "text": "熟悉明清小说代表作",
            "type": "standard"
          },
          {
            "text": "能解读海明威风格",
            "type": "standard"
          }
        ],
        [
          {
            "text": "读过《堂吉诃德》",
            "type": "standard"
          },
          {
            "text": "知道鲁迅杂文特点",
            "type": "standard"
          },
          {
            "text": "了解自然主义文学",
            "type": "standard"
          },
          {
            "text": "熟悉现代诗歌流派",
            "type": "standard"
          },
          {
            "text": "能比较中西史诗差异",
            "type": "standard"
          }
        ]
      ],
      "category": "知识",
      "tags": [
        "知识",
        "阅读"
      ],
      "createdAt": "2025-07-29T01:14:01.568Z"
    },
    "yishujianshang": {
      "bingoId": "yishujianshang",
      "title": "艺术鉴赏宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你具备专业艺术鉴赏力",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "能识别印象派作品",
            "type": "standard"
          },
          {
            "text": "知道贝多芬交响曲",
            "type": "standard"
          },
          {
            "text": "了解京剧四大名旦",
            "type": "standard"
          },
          {
            "text": "熟悉文艺复兴三杰",
            "type": "standard"
          },
          {
            "text": "能分析哥特式建筑",
            "type": "standard"
          }
        ],
        [
          {
            "text": "能区分巴洛克与洛可可",
            "type": "standard"
          },
          {
            "text": "知道柴可夫斯基三大舞剧",
            "type": "standard"
          },
          {
            "text": "了解书法五种书体",
            "type": "standard"
          },
          {
            "text": "熟悉中国画技法",
            "type": "standard"
          },
          {
            "text": "能鉴赏古典歌剧",
            "type": "standard"
          }
        ],
        [
          {
            "text": "能识别超现实主义",
            "type": "standard"
          },
          {
            "text": "知道莫扎特代表作品",
            "type": "standard"
          },
          {
            "text": "了解昆曲艺术特点",
            "type": "standard"
          },
          {
            "text": "熟悉敦煌壁画价值",
            "type": "standard"
          },
          {
            "text": "能分析现代舞特征",
            "type": "standard"
          }
        ],
        [
          {
            "text": "能解读抽象表现主义",
            "type": "standard"
          },
          {
            "text": "知道肖邦音乐风格",
            "type": "standard"
          },
          {
            "text": "了解皮影戏历史",
            "type": "standard"
          },
          {
            "text": "熟悉青花瓷工艺",
            "type": "standard"
          },
          {
            "text": "能鉴赏芭蕾舞剧",
            "type": "standard"
          }
        ],
        [
          {
            "text": "能识别后现代艺术",
            "type": "standard"
          },
          {
            "text": "知道巴赫复调音乐",
            "type": "standard"
          },
          {
            "text": "了解剪纸艺术流派",
            "type": "standard"
          },
          {
            "text": "熟悉景泰蓝制作",
            "type": "standard"
          },
          {
            "text": "能分析装置艺术",
            "type": "standard"
          }
        ]
      ],
      "category": "知识",
      "tags": [
        "知识",
        "鉴赏"
      ],
      "createdAt": "2025-07-29T01:14:01.568Z"
    },
    "zhexuesibian": {
      "bingoId": "zhexuesibian",
      "title": "哲学思辨宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你善于哲学思考",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "理解苏格拉底问答法",
            "type": "standard"
          },
          {
            "text": "知道儒家核心思想",
            "type": "standard"
          },
          {
            "text": "了解存在主义主张",
            "type": "standard"
          },
          {
            "text": "熟悉辩证法原理",
            "type": "standard"
          },
          {
            "text": "能解释唯心唯物",
            "type": "standard"
          }
        ],
        [
          {
            "text": "理解柏拉图理念论",
            "type": "standard"
          },
          {
            "text": "知道道家主要观点",
            "type": "standard"
          },
          {
            "text": "了解实用主义哲学",
            "type": "standard"
          },
          {
            "text": "熟悉认识论问题",
            "type": "standard"
          },
          {
            "text": "能分析自由意志",
            "type": "standard"
          }
        ],
        [
          {
            "text": "理解亚里士多德四因说",
            "type": "standard"
          },
          {
            "text": "知道墨家兼爱思想",
            "type": "standard"
          },
          {
            "text": "了解结构主义理论",
            "type": "standard"
          },
          {
            "text": "熟悉伦理学范畴",
            "type": "standard"
          },
          {
            "text": "能解释形而上学",
            "type": "standard"
          }
        ],
        [
          {
            "text": "理解康德三大批判",
            "type": "standard"
          },
          {
            "text": "知道法家治国理念",
            "type": "standard"
          },
          {
            "text": "了解后现代哲学",
            "type": "standard"
          },
          {
            "text": "熟悉美学基本问题",
            "type": "standard"
          },
          {
            "text": "能分析功利主义",
            "type": "standard"
          }
        ],
        [
          {
            "text": "理解尼采超人哲学",
            "type": "standard"
          },
          {
            "text": "知道理学心学区别",
            "type": "standard"
          },
          {
            "text": "了解现象学方法",
            "type": "standard"
          },
          {
            "text": "熟悉逻辑学基础",
            "type": "standard"
          },
          {
            "text": "能解释决定论",
            "type": "standard"
          }
        ]
      ],
      "category": "知识",
      "tags": [
        "知识",
        "思辨"
      ],
      "createdAt": "2025-07-29T01:14:01.568Z"
    }
  },
  "生活": {
    "dagongren_bingo": {
      "bingoId": "dagongren_bingo",
      "title": "打工人宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是典型社畜，摸鱼大师或过劳斗士",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "每天都在盯打卡时间",
            "type": "standard"
          },
          {
            "text": "设置了10个以上闹钟起床",
            "type": "standard"
          },
          {
            "text": "上班前喝咖啡续命",
            "type": "standard"
          },
          {
            "text": "会议上只说“收到”",
            "type": "standard"
          },
          {
            "text": "早上起来不想动",
            "type": "standard"
          }
        ],
        [
          {
            "text": "工位抽屉塞满零食",
            "type": "standard"
          },
          {
            "text": "摸鱼工具收藏夹爆满",
            "type": "standard"
          },
          {
            "text": "不想加班但还是加了",
            "type": "standard"
          },
          {
            "text": "梦想退休但刚入职3年",
            "type": "standard"
          },
          {
            "text": "午休靠颈枕续命",
            "type": "standard"
          }
        ],
        [
          {
            "text": "老板一说话就紧张",
            "type": "standard"
          },
          {
            "text": "最怕的是“咱开个会吧”",
            "type": "standard"
          },
          {
            "text": "加班餐比晚饭还丰盛",
            "type": "standard"
          },
          {
            "text": "觉得周一比鬼还可怕",
            "type": "standard"
          },
          {
            "text": "经常对着屏幕发呆",
            "type": "standard"
          }
        ],
        [
          {
            "text": "听到“团建”就想请假",
            "type": "standard"
          },
          {
            "text": "假装忙其实在逛咸鱼",
            "type": "standard"
          },
          {
            "text": "excel玩得比QQ还溜",
            "type": "standard"
          },
          {
            "text": "常在厕所里待20分钟",
            "type": "standard"
          },
          {
            "text": "说“这就好”其实还没开始",
            "type": "standard"
          }
        ],
        [
          {
            "text": "节假日还在回复消息",
            "type": "standard"
          },
          {
            "text": "工作日过得比周末还快",
            "type": "standard"
          },
          {
            "text": "最怕的是“领导@我”",
            "type": "standard"
          },
          {
            "text": "办公桌像个小仓库",
            "type": "standard"
          },
          {
            "text": "随时能写辞职信但从没点发送",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [
        "打工人",
        "社畜",
        "摸鱼"
      ],
      "createdAt": "2025-07-29T01:14:01.569Z"
    },
    "daomei": {
      "bingoId": "daomei",
      "title": "倒霉宾果",
      "creator": "系统",
      "description": "如果连成一条线,那真的是很倒霉了",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "糟糕的形象被重要的人看到",
            "type": "standard"
          },
          {
            "text": "违纪一次被抓违纪多次的人无事发生",
            "type": "standard"
          },
          {
            "text": "快要破产依旧没有抽到想要的奖品",
            "type": "standard"
          },
          {
            "text": "无法融入朋友之间",
            "type": "standard"
          },
          {
            "text": "只有你负责的部分被一直找茬",
            "type": "standard"
          }
        ],
        [
          {
            "text": "抽奖抽到最赔钱的奖品",
            "type": "standard"
          },
          {
            "text": "发现讨厌的人风生水起",
            "type": "standard"
          },
          {
            "text": "明明是你最努力功劳被别入抢走",
            "type": "standard"
          },
          {
            "text": "别人主动找你却又抛弃你",
            "type": "standard"
          },
          {
            "text": "属于自己的东西被抢走",
            "type": "standard"
          }
        ],
        [
          {
            "text": "暗恋的人被别人伤害",
            "type": "standard"
          },
          {
            "text": "刚好是多余的那个",
            "type": "standard"
          },
          {
            "text": "不是你干的事情被陷害",
            "type": "standard"
          },
          {
            "text": "成对的东西损坏/丢失一个",
            "type": "standard"
          },
          {
            "text": "使用很久的东西你一用就坏掉",
            "type": "standard"
          }
        ],
        [
          {
            "text": "重要的日子遇见糟糕天气",
            "type": "standard"
          },
          {
            "text": "在将项目完成时被告知从买开始",
            "type": "standard"
          },
          {
            "text": "抽签抽到最不想要的",
            "type": "standard"
          },
          {
            "text": "喜欢的东西最后一个被人买走",
            "type": "standard"
          },
          {
            "text": "记住的事情关键时刻怎么都想不起来",
            "type": "standard"
          }
        ],
        [
          {
            "text": "到达具的地发现有东西没有拿",
            "type": "standard"
          },
          {
            "text": "许多人都违纪你明明守纪却也一起被罚",
            "type": "standard"
          },
          {
            "text": "到车站刚好车子离开",
            "type": "standard"
          },
          {
            "text": "喜欢的人性取向不是你的性别",
            "type": "standard"
          },
          {
            "text": "发现选择的东西别人的都比自己好",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [
        "倒霉"
      ],
      "createdAt": "2025-07-29T01:14:01.569Z"
    },
    "dashu": {
      "bingoId": "dashu",
      "title": "大叔宾果",
      "creator": "系统",
      "description": "五个连成一线，你已经变成大叔了",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "吃夜宵",
            "type": "standard"
          },
          {
            "text": "有一块腹肌",
            "type": "standard"
          },
          {
            "text": "背手走路",
            "type": "standard"
          },
          {
            "text": "喝茶",
            "type": "standard"
          },
          {
            "text": "需要上班",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看不懂部分网络用语",
            "type": "standard"
          },
          {
            "text": "吃保健品",
            "type": "standard"
          },
          {
            "text": "觉得周围很多傻逼",
            "type": "standard"
          },
          {
            "text": "相过亲",
            "type": "standard"
          },
          {
            "text": "拎个奶茶袋就能出门",
            "type": "standard"
          }
        ],
        [
          {
            "text": "不刮腿毛",
            "type": "standard"
          },
          {
            "text": "喜欢看扭曲剧情",
            "type": "standard"
          },
          {
            "text": "爱喝酒",
            "type": "standard"
          },
          {
            "text": "喜欢吹牛皮",
            "type": "standard"
          },
          {
            "text": "玩模型",
            "type": "standard"
          }
        ],
        [
          {
            "text": "在酒桌上聊过时政",
            "type": "standard"
          },
          {
            "text": "吃蒜",
            "type": "standard"
          },
          {
            "text": "喜欢NTR",
            "type": "standard"
          },
          {
            "text": "有知识焦虑",
            "type": "standard"
          },
          {
            "text": "总是休息不够",
            "type": "standard"
          }
        ],
        [
          {
            "text": "经常回忆往昔",
            "type": "standard"
          },
          {
            "text": "找不到另一只袜子",
            "type": "standard"
          },
          {
            "text": "不记得前天吃了什么",
            "type": "standard"
          },
          {
            "text": "喜欢人妻",
            "type": "standard"
          },
          {
            "text": "感觉自己快秃了",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.570Z"
    },
    "diqiuonline": {
      "bingoId": "diqiuonline",
      "title": "地球online宾果",
      "creator": "系统",
      "description": "不管勾了几个反正恭喜你又活一天",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "按时吃了早餐",
            "type": "standard"
          },
          {
            "text": "散步",
            "type": "standard"
          },
          {
            "text": "给植物浇水",
            "type": "standard"
          },
          {
            "text": "没有熬夜",
            "type": "standard"
          },
          {
            "text": "看电影",
            "type": "standard"
          }
        ],
        [
          {
            "text": "骂学校或工作",
            "type": "standard"
          },
          {
            "text": "作息时间规律正常",
            "type": "standard"
          },
          {
            "text": "和朋友约定聚餐",
            "type": "standard"
          },
          {
            "text": "按时吃了晚餐",
            "type": "standard"
          },
          {
            "text": "听歌",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看书",
            "type": "standard"
          },
          {
            "text": "做自己喜欢事",
            "type": "standard"
          },
          {
            "text": "把自己的感受放在第一位",
            "type": "standard"
          },
          {
            "text": "打扫了房间卫生",
            "type": "standard"
          },
          {
            "text": "摸了狗或者猫",
            "type": "standard"
          }
        ],
        [
          {
            "text": "出门游玩",
            "type": "standard"
          },
          {
            "text": "对别人的否定说去他妈的",
            "type": "standard"
          },
          {
            "text": "完成了今日工作",
            "type": "standard"
          },
          {
            "text": "没有吃垃圾食品",
            "type": "standard"
          },
          {
            "text": "坚持没有精神崩溃",
            "type": "standard"
          }
        ],
        [
          {
            "text": "扔垃圾",
            "type": "standard"
          },
          {
            "text": "按时吃了午餐",
            "type": "standard"
          },
          {
            "text": "保持身体健康",
            "type": "standard"
          },
          {
            "text": "接受自己的缺点",
            "type": "standard"
          },
          {
            "text": "按时起床",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.570Z"
    },
    "healthy_human_bingo": {
      "bingoId": "healthy_human_bingo",
      "title": "健康人类宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你是人类样本",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "晨起一杯水",
            "type": "standard"
          },
          {
            "text": "每日万步走",
            "type": "standard"
          },
          {
            "text": "12点前睡",
            "type": "standard"
          },
          {
            "text": "戒糖三个月",
            "type": "standard"
          },
          {
            "text": "BMI标准值",
            "type": "standard"
          }
        ],
        [
          {
            "text": "健身打卡党",
            "type": "standard"
          },
          {
            "text": "蔬菜占半盘",
            "type": "standard"
          },
          {
            "text": "年度体检户",
            "type": "standard"
          },
          {
            "text": "冥想十分钟",
            "type": "standard"
          },
          {
            "text": "喝水八杯整",
            "type": "standard"
          }
        ],
        [
          {
            "text": "零食只吃果",
            "type": "standard"
          },
          {
            "text": "不喝碳酸饮",
            "type": "standard"
          },
          {
            "text": "烟酒不沾边",
            "type": "standard"
          },
          {
            "text": "防晒全年涂",
            "type": "standard"
          },
          {
            "text": "情绪稳定剂",
            "type": "standard"
          }
        ],
        [
          {
            "text": "坐姿端正派",
            "type": "standard"
          },
          {
            "text": "眼保健操者",
            "type": "standard"
          },
          {
            "text": "定期牙医访",
            "type": "standard"
          },
          {
            "text": "手机不躺刷",
            "type": "standard"
          },
          {
            "text": "姨妈期忌口",
            "type": "standard"
          }
        ],
        [
          {
            "text": "便当自带族",
            "type": "standard"
          },
          {
            "text": "电梯改爬楼",
            "type": "standard"
          },
          {
            "text": "泡脚养生党",
            "type": "standard"
          },
          {
            "text": "维D按时补",
            "type": "standard"
          },
          {
            "text": "焦虑能自愈",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [
        "养生",
        "自律"
      ],
      "createdAt": "2025-07-29T01:14:01.570Z"
    },
    "jijianshenghuo": {
      "bingoId": "jijianshenghuo",
      "title": "极简生活宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你是极简主义实践者",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "衣物≤50件",
            "type": "standard"
          },
          {
            "text": "不用一次性用品",
            "type": "standard"
          },
          {
            "text": "无装饰性物品",
            "type": "standard"
          },
          {
            "text": "数字文件定期清理",
            "type": "standard"
          },
          {
            "text": "家具少于10件",
            "type": "standard"
          }
        ],
        [
          {
            "text": "购物清单制",
            "type": "standard"
          },
          {
            "text": "半年未购物",
            "type": "standard"
          },
          {
            "text": "所有物品有定位",
            "type": "standard"
          },
          {
            "text": "不用储物柜",
            "type": "standard"
          },
          {
            "text": "纸质书电子化",
            "type": "standard"
          }
        ],
        [
          {
            "text": "每周清理邮箱",
            "type": "standard"
          },
          {
            "text": "食物零浪费",
            "type": "standard"
          },
          {
            "text": "单色系衣柜",
            "type": "standard"
          },
          {
            "text": "无订阅服务",
            "type": "standard"
          },
          {
            "text": "墙面无悬挂",
            "type": "standard"
          }
        ],
        [
          {
            "text": "旅行20寸箱",
            "type": "standard"
          },
          {
            "text": "定期捐赠物品",
            "type": "standard"
          },
          {
            "text": "多功能家具",
            "type": "standard"
          },
          {
            "text": "不存包装盒",
            "type": "standard"
          },
          {
            "text": "护肤品≤3瓶",
            "type": "standard"
          }
        ],
        [
          {
            "text": "无实体相册",
            "type": "standard"
          },
          {
            "text": "餐具成套4件",
            "type": "standard"
          },
          {
            "text": "不买纪念品",
            "type": "standard"
          },
          {
            "text": "手机APP≤12个",
            "type": "standard"
          },
          {
            "text": "日历唯一装饰",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.570Z"
    },
    "lianai": {
      "bingoId": "lianai",
      "title": "恋爱甜死谁宾果",
      "creator": "系统",
      "description": "五个连成一线，你们想甜死谁！",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "早上起来和睡前最后一个联系的都是ta",
            "type": "standard"
          },
          {
            "text": "一起吃饭",
            "type": "standard"
          },
          {
            "text": "一起看电影",
            "type": "standard"
          },
          {
            "text": "一起去旅游/游玩",
            "type": "standard"
          },
          {
            "text": "给对方过生日",
            "type": "standard"
          }
        ],
        [
          {
            "text": "过年给对方红包",
            "type": "standard"
          },
          {
            "text": "和对方一起打游戏",
            "type": "standard"
          },
          {
            "text": "和对方一起学习阅读",
            "type": "standard"
          },
          {
            "text": "一起逛超市",
            "type": "standard"
          },
          {
            "text": "在公众场合做亲密动作",
            "type": "standard"
          }
        ],
        [
          {
            "text": "咬对方",
            "type": "standard"
          },
          {
            "text": "争吵过",
            "type": "standard"
          },
          {
            "text": "分手又复合了",
            "type": "standard"
          },
          {
            "text": "是自己的初恋",
            "type": "standard"
          },
          {
            "text": "是对方的初恋",
            "type": "standard"
          }
        ],
        [
          {
            "text": "为对方买衣服",
            "type": "standard"
          },
          {
            "text": "好朋友知道ta的存在",
            "type": "standard"
          },
          {
            "text": "带ta见过朋友",
            "type": "standard"
          },
          {
            "text": "使用亲昵的称呼如宝宝",
            "type": "standard"
          },
          {
            "text": "聊天背景或桌面壁纸用对方的照片",
            "type": "standard"
          }
        ],
        [
          {
            "text": "用一副耳机听歌",
            "type": "standard"
          },
          {
            "text": "在一起1年以上",
            "type": "standard"
          },
          {
            "text": "每天都会语音/视频聊天",
            "type": "standard"
          },
          {
            "text": "有共同爱好",
            "type": "standard"
          },
          {
            "text": "线下时间大于线上时间",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.570Z"
    },
    "lvxingdaren": {
      "bingoId": "lvxingdaren",
      "title": "旅行达人宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你是环球旅行专家",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "独自跨国旅行",
            "type": "standard"
          },
          {
            "text": "会说3门外语",
            "type": "standard"
          },
          {
            "text": "沙发客经历",
            "type": "standard"
          },
          {
            "text": "洲际旅行达人",
            "type": "standard"
          },
          {
            "text": "收集旅行印章",
            "type": "standard"
          }
        ],
        [
          {
            "text": "自驾穿越大陆",
            "type": "standard"
          },
          {
            "text": "住过青旅10+",
            "type": "standard"
          },
          {
            "text": "会看星空导航",
            "type": "standard"
          },
          {
            "text": "旅行手账达人",
            "type": "standard"
          },
          {
            "text": "会搭帐篷",
            "type": "standard"
          }
        ],
        [
          {
            "text": "旅行急救证书",
            "type": "standard"
          },
          {
            "text": "收集冰箱贴",
            "type": "standard"
          },
          {
            "text": "错峰旅行专家",
            "type": "standard"
          },
          {
            "text": "会搭顺风车",
            "type": "standard"
          },
          {
            "text": "深度文化体验",
            "type": "standard"
          }
        ],
        [
          {
            "text": "背包客装备",
            "type": "standard"
          },
          {
            "text": "会换旅行支票",
            "type": "standard"
          },
          {
            "text": "旅行摄影作品",
            "type": "standard"
          },
          {
            "text": "跨国义工经历",
            "type": "standard"
          },
          {
            "text": "会认世界货币",
            "type": "standard"
          }
        ],
        [
          {
            "text": "制作旅行视频",
            "type": "standard"
          },
          {
            "text": "火车旅行专家",
            "type": "standard"
          },
          {
            "text": "旅行美食地图",
            "type": "standard"
          },
          {
            "text": "克服时差大师",
            "type": "standard"
          },
          {
            "text": "会读等高线图",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.571Z"
    },
    "meishidashi": {
      "bingoId": "meishidashi",
      "title": "美食大师宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是美食大师！",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "香菜",
            "type": "standard"
          },
          {
            "text": "生吃大蒜",
            "type": "standard"
          },
          {
            "text": "螺蛳粉",
            "type": "standard"
          },
          {
            "text": "皮蛋/变蛋",
            "type": "standard"
          },
          {
            "text": "榴莲",
            "type": "standard"
          }
        ],
        [
          {
            "text": "折耳根",
            "type": "standard"
          },
          {
            "text": "蝎子/蜈蚣",
            "type": "standard"
          },
          {
            "text": "生腌/醉虾",
            "type": "standard"
          },
          {
            "text": "芹菜",
            "type": "standard"
          },
          {
            "text": "牛瘪火锅",
            "type": "standard"
          }
        ],
        [
          {
            "text": "长沙臭豆腐",
            "type": "standard"
          },
          {
            "text": "臭鳜鱼",
            "type": "standard"
          },
          {
            "text": "活珠子/毛鸡蛋",
            "type": "standard"
          },
          {
            "text": "锅底猪肝",
            "type": "standard"
          },
          {
            "text": "血",
            "type": "standard"
          }
        ],
        [
          {
            "text": "鲱鱼罐头",
            "type": "standard"
          },
          {
            "text": "蛇",
            "type": "standard"
          },
          {
            "text": "咸奶茶",
            "type": "standard"
          },
          {
            "text": "脑花",
            "type": "standard"
          },
          {
            "text": "蚕蛹",
            "type": "standard"
          }
        ],
        [
          {
            "text": "蚂蚱/蝗虫",
            "type": "standard"
          },
          {
            "text": "活章鱼",
            "type": "standard"
          },
          {
            "text": "肥肠",
            "type": "standard"
          },
          {
            "text": "鸡屁股/百里香",
            "type": "standard"
          },
          {
            "text": "豆汽",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.571Z"
    },
    "poverty_bingo": {
      "bingoId": "poverty_bingo",
      "title": "穷鬼宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你深谙生存之道",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "不开软件会员",
            "type": "standard"
          },
          {
            "text": "PDD常客",
            "type": "standard"
          },
          {
            "text": "加过很多捡漏群拼单群",
            "type": "standard"
          },
          {
            "text": "一年内没去外地旅游过",
            "type": "standard"
          },
          {
            "text": "经常在二手市场淘东西",
            "type": "standard"
          }
        ],
        [
          {
            "text": "吃自助餐一定要吃回本",
            "type": "standard"
          },
          {
            "text": "蹭公司水电",
            "type": "standard"
          },
          {
            "text": "喜欢超市试吃",
            "type": "standard"
          },
          {
            "text": "自己修电器",
            "type": "standard"
          },
          {
            "text": "关注超市打折区",
            "type": "standard"
          }
        ],
        [
          {
            "text": "衣服反季买",
            "type": "standard"
          },
          {
            "text": "走路省车费",
            "type": "standard"
          },
          {
            "text": "学生",
            "type": "standard"
          },
          {
            "text": "沐浴露/洗发水兑水",
            "type": "standard"
          },
          {
            "text": "手机用五年",
            "type": "standard"
          }
        ],
        [
          {
            "text": "复制疯狂星期四文案但从不买",
            "type": "standard"
          },
          {
            "text": "牙膏用力挤干净",
            "type": "standard"
          },
          {
            "text": "出门自带干粮",
            "type": "standard"
          },
          {
            "text": "熟练使用steam退款",
            "type": "standard"
          },
          {
            "text": "自己剪头发",
            "type": "standard"
          }
        ],
        [
          {
            "text": "外卖花10分钟凑满减",
            "type": "standard"
          },
          {
            "text": "买周边后会肉疼",
            "type": "standard"
          },
          {
            "text": "没有谈恋爱的打算",
            "type": "standard"
          },
          {
            "text": "打游戏从不氪金",
            "type": "standard"
          },
          {
            "text": "手机流量省着用",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [
        "生存智慧",
        "消费降级"
      ],
      "createdAt": "2025-07-29T01:14:01.571Z"
    },
    "shekong": {
      "bingoId": "shekong",
      "title": "社恐宾果",
      "creator": "系统",
      "description": "五个连成一线，你已进入社交节能模式",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "假装看手机避开熟人",
            "type": "standard"
          },
          {
            "text": "电话铃响就心跳加速",
            "type": "standard"
          },
          {
            "text": "外卖放门口才开门",
            "type": "standard"
          },
          {
            "text": "电梯里只有两人时最煎熬",
            "type": "standard"
          },
          {
            "text": "宁可绕路也不问路",
            "type": "standard"
          }
        ],
        [
          {
            "text": "群聊只发表情包",
            "type": "standard"
          },
          {
            "text": "聚会时专注喂宠物",
            "type": "standard"
          },
          {
            "text": "戴口罩才有安全感",
            "type": "standard"
          },
          {
            "text": "提前演练要说的话",
            "type": "standard"
          },
          {
            "text": "对未接来电恐惧",
            "type": "standard"
          }
        ],
        [
          {
            "text": "在厕所隔间等同事走光",
            "type": "standard"
          },
          {
            "text": "用快递柜代替驿站",
            "type": "standard"
          },
          {
            "text": "生日关闭提醒",
            "type": "standard"
          },
          {
            "text": "觉得微笑好累",
            "type": "standard"
          },
          {
            "text": "网购代替实体店",
            "type": "standard"
          }
        ],
        [
          {
            "text": "邻居出门就退回屋里",
            "type": "standard"
          },
          {
            "text": "把耳机当保护罩",
            "type": "standard"
          },
          {
            "text": "收到语音消息转文字",
            "type": "standard"
          },
          {
            "text": "走路紧盯地面",
            "type": "standard"
          },
          {
            "text": "超市自助结账区信徒",
            "type": "standard"
          }
        ],
        [
          {
            "text": "快递员敲门时装不在家",
            "type": "standard"
          },
          {
            "text": "朋友圈仅三天可见",
            "type": "standard"
          },
          {
            "text": "对团建活动生理不适",
            "type": "standard"
          },
          {
            "text": "把植物当理想社交对象",
            "type": "standard"
          },
          {
            "text": "觉得微信\"拍一拍\"是酷刑",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.571Z"
    },
    "shiwunaishou": {
      "bingoId": "shiwunaishou",
      "title": "食物耐受宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是食物耐受超人",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "脑",
            "type": "standard"
          },
          {
            "text": "鱼腥草又叫折耳根",
            "type": "standard"
          },
          {
            "text": "葱姜蒜",
            "type": "standard"
          },
          {
            "text": "燕窝",
            "type": "standard"
          },
          {
            "text": "血",
            "type": "standard"
          }
        ],
        [
          {
            "text": "内脏",
            "type": "standard"
          },
          {
            "text": "猫狗肉",
            "type": "standard"
          },
          {
            "text": "白煮蛋",
            "type": "standard"
          },
          {
            "text": "臭豆腐",
            "type": "standard"
          },
          {
            "text": "辣",
            "type": "standard"
          }
        ],
        [
          {
            "text": "生肉生鱼片等",
            "type": "standard"
          },
          {
            "text": "牛奶",
            "type": "standard"
          },
          {
            "text": "香菜",
            "type": "standard"
          },
          {
            "text": "海鲜",
            "type": "standard"
          },
          {
            "text": "虫或长得像虫如士笋冻",
            "type": "standard"
          }
        ],
        [
          {
            "text": "秋葵",
            "type": "standard"
          },
          {
            "text": "榴莲",
            "type": "standard"
          },
          {
            "text": "肥肉黄油",
            "type": "standard"
          },
          {
            "text": "皮蛋",
            "type": "standard"
          },
          {
            "text": "屁股尾巴如猪尾巴,鸡屁股",
            "type": "standard"
          }
        ],
        [
          {
            "text": "莲子",
            "type": "standard"
          },
          {
            "text": "烟熏制品如腊肉",
            "type": "standard"
          },
          {
            "text": "苦瓜",
            "type": "standard"
          },
          {
            "text": "头部鸡鸭鱼头等",
            "type": "standard"
          },
          {
            "text": "非正道获取的食品",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.572Z"
    },
    "sleep_disorder_bingo": {
      "bingoId": "sleep_disorder_bingo",
      "title": "睡眠障碍宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你与周公关系紧张",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "数羊到千只",
            "type": "standard"
          },
          {
            "text": "凌晨三点醒",
            "type": "standard"
          },
          {
            "text": "午觉睡不着",
            "type": "standard"
          },
          {
            "text": "起床如受刑",
            "type": "standard"
          },
          {
            "text": "咖啡当水喝",
            "type": "standard"
          }
        ],
        [
          {
            "text": "夜猫型选手",
            "type": "standard"
          },
          {
            "text": "多梦连环剧",
            "type": "standard"
          },
          {
            "text": "白天秒断片",
            "type": "standard"
          },
          {
            "text": "安眠药常备",
            "type": "standard"
          },
          {
            "text": "怕光又怕声",
            "type": "standard"
          }
        ],
        [
          {
            "text": "昼夜颠倒党",
            "type": "standard"
          },
          {
            "text": "鬼压床体验",
            "type": "standard"
          },
          {
            "text": "睡前刷手机",
            "type": "standard"
          },
          {
            "text": "鼾声如雷响",
            "type": "standard"
          },
          {
            "text": "眼罩收藏家",
            "type": "standard"
          }
        ],
        [
          {
            "text": "睡眠监测狂",
            "type": "standard"
          },
          {
            "text": "认床综合症",
            "type": "standard"
          },
          {
            "text": "周末补觉王",
            "type": "standard"
          },
          {
            "text": "梦游嫌疑犯",
            "type": "standard"
          },
          {
            "text": "褪黑素依赖",
            "type": "standard"
          }
        ],
        [
          {
            "text": "秒醒型选手",
            "type": "standard"
          },
          {
            "text": "闹钟连环炸",
            "type": "standard"
          },
          {
            "text": "睡前焦虑症",
            "type": "standard"
          },
          {
            "text": "黑眼圈焊脸",
            "type": "standard"
          },
          {
            "text": "白天哈欠精",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [
        "失眠",
        "生物钟紊乱"
      ],
      "createdAt": "2025-07-29T01:14:01.572Z"
    },
    "wobushibingshen": {
      "bingoId": "wobushibingshen",
      "title": "我不是病神宾果",
      "creator": "系统",
      "description": "五个连成一线成为病神",
      "gridSize": {
        "rows": 6,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "全身超过15种疾病",
            "type": "standard"
          },
          {
            "text": "得过肿瘤",
            "type": "standard"
          },
          {
            "text": "用过超过40种药",
            "type": "standard"
          },
          {
            "text": "每年必住院",
            "type": "standard"
          },
          {
            "text": "每天都吃药",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有心理疾病",
            "type": "standard"
          },
          {
            "text": "有精神疾病",
            "type": "standard"
          },
          {
            "text": "有重大疾病",
            "type": "standard"
          },
          {
            "text": "做过手术",
            "type": "standard"
          },
          {
            "text": "连续扎针超过48小时",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有无法治愈的疾病",
            "type": "standard"
          },
          {
            "text": "对某种药物过敏",
            "type": "standard"
          },
          {
            "text": "每天服用5片以上药物",
            "type": "standard"
          },
          {
            "text": "有很罕见的疾病",
            "type": "standard"
          },
          {
            "text": "家里无法支付治疗费",
            "type": "standard"
          }
        ],
        [
          {
            "text": "吃的药很贵",
            "type": "standard"
          },
          {
            "text": "缝过针",
            "type": "standard"
          },
          {
            "text": "被抢救过",
            "type": "standard"
          },
          {
            "text": "有严重的吃药副作用",
            "type": "standard"
          },
          {
            "text": "有疾病后遗症",
            "type": "standard"
          }
        ],
        [
          {
            "text": "骨折过",
            "type": "standard"
          },
          {
            "text": "晕针",
            "type": "standard"
          },
          {
            "text": "晕血",
            "type": "standard"
          },
          {
            "text": "自己一个人看病",
            "type": "standard"
          },
          {
            "text": "坐过救护车",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.572Z"
    },
    "wuyuzegang": {
      "bingoId": "wuyuzegang",
      "title": "无欲则刚宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是当代扫地僧",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "对双十一毫无波澜",
            "type": "standard"
          },
          {
            "text": "旧手机用出包浆",
            "type": "standard"
          },
          {
            "text": "拒绝无效社交",
            "type": "standard"
          },
          {
            "text": "被说佛系也不反驳",
            "type": "standard"
          },
          {
            "text": "衣柜只有基础款",
            "type": "standard"
          }
        ],
        [
          {
            "text": "食物只为生存",
            "type": "standard"
          },
          {
            "text": "删光购物车毫不心疼",
            "type": "standard"
          },
          {
            "text": "觉得奢侈品是智商税",
            "type": "standard"
          },
          {
            "text": "假期宅家赛神仙",
            "type": "standard"
          },
          {
            "text": "对升职无执念",
            "type": "standard"
          }
        ],
        [
          {
            "text": "别人晒娃你点赞",
            "type": "standard"
          },
          {
            "text": "旅行嫌麻烦",
            "type": "standard"
          },
          {
            "text": "生日愿望是别过生日",
            "type": "standard"
          },
          {
            "text": "朋友圈三年没更新",
            "type": "standard"
          },
          {
            "text": "觉得恋爱费能量",
            "type": "standard"
          }
        ],
        [
          {
            "text": "运动鞋穿到开口笑",
            "type": "standard"
          },
          {
            "text": "外卖超20元就肉疼",
            "type": "standard"
          },
          {
            "text": "对八卦毫无兴趣",
            "type": "standard"
          },
          {
            "text": "觉得攀比是酷刑",
            "type": "standard"
          },
          {
            "text": "理想是当门卫",
            "type": "standard"
          }
        ],
        [
          {
            "text": "喝白水很快乐",
            "type": "standard"
          },
          {
            "text": "被夸节俭暗喜",
            "type": "standard"
          },
          {
            "text": "拒绝网红打卡",
            "type": "standard"
          },
          {
            "text": "认为极简是美学",
            "type": "standard"
          },
          {
            "text": "口头禅\"都行\"",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.573Z"
    },
    "xiaozijiating": {
      "bingoId": "xiaozijiating",
      "title": "小资家庭宾果",
      "creator": "系统",
      "description": "五个连成一线你就超越了95%以上网友",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "生活受物价影响小",
            "type": "standard"
          },
          {
            "text": "从小在市区上学",
            "type": "standard"
          },
          {
            "text": "有三套及以上房产",
            "type": "standard"
          },
          {
            "text": "座驾>20w",
            "type": "standard"
          },
          {
            "text": "买衣服会经常考虑牌子",
            "type": "standard"
          }
        ],
        [
          {
            "text": "信息资讯超越多数大学同学",
            "type": "standard"
          },
          {
            "text": "家庭存款与各形式和投资不少于七位数",
            "type": "standard"
          },
          {
            "text": "独生子女",
            "type": "standard"
          },
          {
            "text": "出过国",
            "type": "standard"
          },
          {
            "text": "请过家教/一对一",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有小资情结",
            "type": "standard"
          },
          {
            "text": "家庭年收入>30w",
            "type": "standard"
          },
          {
            "text": "直系亲属有公务员",
            "type": "standard"
          },
          {
            "text": "去过至少五个省",
            "type": "standard"
          },
          {
            "text": "有过人均500以上餐饮消费",
            "type": "standard"
          }
        ],
        [
          {
            "text": "在东部省份地区",
            "type": "standard"
          },
          {
            "text": "有工薪以外的收入来源",
            "type": "standard"
          },
          {
            "text": "在二线及以上城市有房",
            "type": "standard"
          },
          {
            "text": "考虑出国/出国留学过",
            "type": "standard"
          },
          {
            "text": "上过不止一个兴趣班",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有过人均5k以上旅游经历",
            "type": "standard"
          },
          {
            "text": "在二线及以上城市生活",
            "type": "standard"
          },
          {
            "text": "父母有一方有本科学历",
            "type": "standard"
          },
          {
            "text": "大学恩格尔系数小于百分之四十",
            "type": "standard"
          },
          {
            "text": "有多项花钱的爱好",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.573Z"
    },
    "yangshengdaren": {
      "bingoId": "yangshengdaren",
      "title": "养生达人宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你是健康生活专家",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "晨起空腹喝水",
            "type": "standard"
          },
          {
            "text": "每日泡脚",
            "type": "standard"
          },
          {
            "text": "23点前入睡",
            "type": "standard"
          },
          {
            "text": "喝养生茶",
            "type": "standard"
          },
          {
            "text": "拒绝冰饮",
            "type": "standard"
          }
        ],
        [
          {
            "text": "穴位按摩",
            "type": "standard"
          },
          {
            "text": "记录生理周期",
            "type": "standard"
          },
          {
            "text": "自己做饭带餐",
            "type": "standard"
          },
          {
            "text": "定期艾灸",
            "type": "standard"
          },
          {
            "text": "站立办公",
            "type": "standard"
          }
        ],
        [
          {
            "text": "八段锦/太极拳",
            "type": "standard"
          },
          {
            "text": "食用超级食物",
            "type": "standard"
          },
          {
            "text": "午休30分钟",
            "type": "standard"
          },
          {
            "text": "喝够8杯水",
            "type": "standard"
          },
          {
            "text": "定期体检",
            "type": "standard"
          }
        ],
        [
          {
            "text": "控糖饮食",
            "type": "standard"
          },
          {
            "text": "晨间冥想",
            "type": "standard"
          },
          {
            "text": "使用药膳",
            "type": "standard"
          },
          {
            "text": "工间拉伸",
            "type": "standard"
          },
          {
            "text": "穴位贴敷",
            "type": "standard"
          }
        ],
        [
          {
            "text": "拒绝反式脂肪",
            "type": "standard"
          },
          {
            "text": "使用草本洗发",
            "type": "standard"
          },
          {
            "text": "足部反射疗法",
            "type": "standard"
          },
          {
            "text": "记录睡眠质量",
            "type": "standard"
          },
          {
            "text": "四季不同养生",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.573Z"
    },
    "homebody_bingo": {
      "bingoId": "homebody_bingo",
      "title": "宅家日常宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你是居家大师",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "睡衣全天候",
            "type": "standard"
          },
          {
            "text": "外卖到门口",
            "type": "standard"
          },
          {
            "text": "追剧马拉松",
            "type": "standard"
          },
          {
            "text": "快递不进门",
            "type": "standard"
          },
          {
            "text": "床是根据地",
            "type": "standard"
          }
        ],
        [
          {
            "text": "三天不洗头",
            "type": "standard"
          },
          {
            "text": "泡面当正餐",
            "type": "standard"
          },
          {
            "text": "游戏刷副本",
            "type": "standard"
          },
          {
            "text": "窗帘永紧闭",
            "type": "standard"
          },
          {
            "text": "社交软件瘫",
            "type": "standard"
          }
        ],
        [
          {
            "text": "步数不过百",
            "type": "standard"
          },
          {
            "text": "囤积速冻品",
            "type": "standard"
          },
          {
            "text": "昼夜时颠倒",
            "type": "standard"
          },
          {
            "text": "宠物当室友",
            "type": "standard"
          },
          {
            "text": "快递箱堆山",
            "type": "standard"
          }
        ],
        [
          {
            "text": "拒接视频聊",
            "type": "standard"
          },
          {
            "text": "网购解千愁",
            "type": "standard"
          },
          {
            "text": "地板积灰层",
            "type": "standard"
          },
          {
            "text": "水杯放床头",
            "type": "standard"
          },
          {
            "text": "充电器常插",
            "type": "standard"
          }
        ],
        [
          {
            "text": "综艺背景音",
            "type": "standard"
          },
          {
            "text": "外卖垃圾堆",
            "type": "standard"
          },
          {
            "text": "运动靠翻身",
            "type": "standard"
          },
          {
            "text": "门铃装聋哑",
            "type": "standard"
          },
          {
            "text": "日历不翻页",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [
        "居家生活",
        "数字游民"
      ],
      "createdAt": "2025-07-29T01:14:01.573Z"
    },
    "zhebeiziyoule": {
      "bingoId": "zhebeiziyoule",
      "title": "这辈子有了宾果",
      "creator": "系统",
      "description": "五个连成一线,你这辈子就彻彻底底完完全全地有了",
      "gridSize": {
        "rows": 6,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "休过学",
            "type": "standard"
          },
          {
            "text": "患难以治疗的慢性病",
            "type": "standard"
          },
          {
            "text": "听摇滚",
            "type": "standard"
          },
          {
            "text": "时常失眠",
            "type": "standard"
          },
          {
            "text": "觉得自己难以就业",
            "type": "standard"
          }
        ],
        [
          {
            "text": "认识的人都比自己厉害",
            "type": "standard"
          },
          {
            "text": "看一些挂壁或流浪的UP",
            "type": "standard"
          },
          {
            "text": "感觉自己缺爱/缺自尊",
            "type": "standard"
          },
          {
            "text": "害怕被人找麻烦",
            "type": "standard"
          },
          {
            "text": "喜欢读悲伤无奈的故事",
            "type": "standard"
          }
        ],
        [
          {
            "text": "很多知识储备都没有鸟用",
            "type": "standard"
          },
          {
            "text": "没有得到过令人骄傲的成功",
            "type": "standard"
          },
          {
            "text": "觉得自己没有性吸引力",
            "type": "standard"
          },
          {
            "text": "从政治上担忧未来",
            "type": "standard"
          },
          {
            "text": "性取向/性别表达不标准",
            "type": "standard"
          }
        ],
        [
          {
            "text": "觉得自己不幸福",
            "type": "standard"
          },
          {
            "text": "愿意为了巨款出卖身体和灵魂",
            "type": "standard"
          },
          {
            "text": "觉得很多事情只能将错就错",
            "type": "standard"
          },
          {
            "text": "无法执行生活计划",
            "type": "standard"
          },
          {
            "text": "多年以前有美好的梦想(忘差不多了)",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有过十几个半途而废的美好计划",
            "type": "standard"
          },
          {
            "text": "想毁灭自己或毁灭世界",
            "type": "standard"
          },
          {
            "text": "不想和其他人过多地争论(因为没有意义)",
            "type": "standard"
          },
          {
            "text": "哪怕悲伤痛苦",
            "type": "standard"
          },
          {
            "text": "看6时",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [
        "失眠",
        "生物钟紊乱"
      ],
      "createdAt": "2025-07-29T01:14:01.573Z"
    },
    "middle_class_bingo": {
      "bingoId": "middle_class_bingo",
      "title": "中产家庭宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你深陷中产围城",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "学区房焦虑",
            "type": "standard"
          },
          {
            "text": "有机食品控",
            "type": "standard"
          },
          {
            "text": "定期私教课",
            "type": "standard"
          },
          {
            "text": "海外游必晒",
            "type": "standard"
          },
          {
            "text": "儿童兴趣班",
            "type": "standard"
          }
        ],
        [
          {
            "text": "房贷压顶族",
            "type": "standard"
          },
          {
            "text": "中产三件套",
            "type": "standard"
          },
          {
            "text": "焦虑教育军",
            "type": "standard"
          },
          {
            "text": "精致露营派",
            "type": "standard"
          },
          {
            "text": "咖啡机必备",
            "type": "standard"
          }
        ],
        [
          {
            "text": "体检买套餐",
            "type": "standard"
          },
          {
            "text": "轻奢品傍身",
            "type": "standard"
          },
          {
            "text": "鸡娃不眠夜",
            "type": "standard"
          },
          {
            "text": "特斯拉车主",
            "type": "standard"
          },
          {
            "text": "中产式离婚",
            "type": "standard"
          }
        ],
        [
          {
            "text": "知识付费狂",
            "type": "standard"
          },
          {
            "text": "山姆会员卡",
            "type": "standard"
          },
          {
            "text": "滑雪季必去",
            "type": "standard"
          },
          {
            "text": "假装在减糖",
            "type": "standard"
          },
          {
            "text": "焦虑养老金",
            "type": "standard"
          }
        ],
        [
          {
            "text": "北欧风装修",
            "type": "standard"
          },
          {
            "text": "定期心理咨询",
            "type": "standard"
          },
          {
            "text": "拒绝预制菜",
            "type": "standard"
          },
          {
            "text": "中产返贫怕",
            "type": "standard"
          },
          {
            "text": "鄙视链站位",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [
        "消费主义",
        "阶级认同"
      ],
      "createdAt": "2025-07-29T01:14:01.574Z"
    },
    "zhongnianlaodeng": {
      "bingoId": "zhongnianlaodeng",
      "title": "中年老登宾果",
      "creator": "系统",
      "description": "五个连成一线你就是纯种老登! ",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "海鲜市场",
            "type": "standard"
          },
          {
            "text": "电脑硬件",
            "type": "standard"
          },
          {
            "text": "玩机",
            "type": "standard"
          },
          {
            "text": "服务器",
            "type": "standard"
          },
          {
            "text": "软路由",
            "type": "standard"
          }
        ],
        [
          {
            "text": "音响",
            "type": "standard"
          },
          {
            "text": "功放",
            "type": "standard"
          },
          {
            "text": "HIFI耳机",
            "type": "standard"
          },
          {
            "text": "玉石/文玩",
            "type": "standard"
          },
          {
            "text": "汽车,枪械",
            "type": "standard"
          }
        ],
        [
          {
            "text": "摄影",
            "type": "standard"
          },
          {
            "text": "电源",
            "type": "standard"
          },
          {
            "text": "打火机",
            "type": "standard"
          },
          {
            "text": "烟酒",
            "type": "standard"
          },
          {
            "text": "手办/航模",
            "type": "standard"
          }
        ],
        [
          {
            "text": "五金工具",
            "type": "standard"
          },
          {
            "text": "激光",
            "type": "standard"
          },
          {
            "text": "刀具",
            "type": "standard"
          },
          {
            "text": "普洱茶",
            "type": "standard"
          },
          {
            "text": "花鸟",
            "type": "standard"
          }
        ],
        [
          {
            "text": "钓鱼",
            "type": "standard"
          },
          {
            "text": "手电筒",
            "type": "standard"
          },
          {
            "text": "露营",
            "type": "standard"
          },
          {
            "text": "登山",
            "type": "standard"
          },
          {
            "text": "骑行",
            "type": "standard"
          }
        ]
      ],
      "category": "生活",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.574Z"
    },
    "xiaozhenzuotijia": {
      "bingoId": "xiaozhenzuotijia",
      "title": "小镇做题家宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是小镇做题家",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {"text": "英语口语普通", "type": "standard"},
          {"text": "很难向上社交", "type": "standard"},
          {"text": "多次做家教", "type": "standard"},
          {"text": "特长少", "type": "standard"},
          {"text": "家乡距离(新)一线城市>200km", "type": "standard"}
        ],
        [
          {"text": "家族同辈中第一个考入985、211", "type": "standard"},
          {"text": "相信越努力越幸运", "type": "standard"},
          {"text": "父母无法提供有效帮助", "type": "standard"},
          {"text": "经常感到不自信", "type": "standard"},
          {"text": "高中前从未出省", "type": "standard"}
        ],
        [
          {"text": "无职业规划", "type": "standard"},
          {"text": "高中有课程全班第一", "type": "standard"},
          {"text": "高考是人生高光时刻", "type": "standard"},
          {"text": "非常礼貌", "type": "standard"},
          {"text": "对未来感到焦虑", "type": "standard"}
        ],
        [
          {"text": "很少依赖他人", "type": "standard"},
          {"text": "父母亲人对你寄予厚望", "type": "standard"},
          {"text": "慕强", "type": "standard"},
          {"text": "不敢承担风险", "type": "standard"},
          {"text": "与同学朋友交往避免透露家境", "type": "standard"}
        ],
        [
          {"text": "中学保持年级前十", "type": "standard"},
          {"text": "独立自律", "type": "standard"},
          {"text": "坚韧，抗压能力强", "type": "standard"},
          {"text": "身上最贵的是手机", "type": "standard"},
          {"text": "喜欢简单的快乐但无法安心享乐", "type": "standard"}
        ]
      ],
      "category": "生活",
      "tags": ["教育", "社会", "成长"],
      "createdAt": "2025-01-21T10:07:00.000Z"
    },
    "tongxinweimin": {
      "bingoId": "tongxinweimin",
      "title": "童心未泯宾果",
      "creator": "系统",
      "description": "五个连成一线，你的心里依然住着一个小孩",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {"text": "喜欢跳起来摸高", "type": "standard"},
          {"text": "喜欢吹蒲公英", "type": "standard"},
          {"text": "喜欢折纸飞机、千纸鹤等等", "type": "standard"},
          {"text": "喜欢玩沙子/泥巴", "type": "standard"},
          {"text": "对着电风扇说话", "type": "standard"}
        ],
        [
          {"text": "给生活用品起名字", "type": "standard"},
          {"text": "玩转椅自转到头晕", "type": "standard"},
          {"text": "把东西顶在头上保持平衡", "type": "standard"},
          {"text": "洗澡的时候玩泡泡", "type": "standard"},
          {"text": "用笔在手上画纹身", "type": "standard"}
        ],
        [
          {"text": "喜欢比手影踩影子", "type": "standard"},
          {"text": "把手插进米缸", "type": "standard"},
          {"text": "喜欢捏泡泡纸", "type": "standard"},
          {"text": "把食物摆成各种形状/文字", "type": "standard"},
          {"text": "(想)吃儿童套餐/穿童装", "type": "standard"}
        ],
        [
          {"text": "睡觉要抱着东西睡才舒服", "type": "standard"},
          {"text": "吃辣条棒棒糖等童年零食", "type": "standard"},
          {"text": "走路不踩地砖缝/沿着地砖缝走", "type": "standard"},
          {"text": "和动物/植物说话", "type": "standard"},
          {"text": "随地捡木棍", "type": "standard"}
        ],
        [
          {"text": "喜欢观察小动物", "type": "standard"},
          {"text": "喜欢荡秋千", "type": "standard"},
          {"text": "喜欢观察云思考它们像什么形状", "type": "standard"},
          {"text": "在沾满水雾的玻璃上写字画画", "type": "standard"},
          {"text": "收集贴纸/包装标签等", "type": "standard"}
        ]
      ],
      "category": "生活",
      "tags": ["童心", "纯真", "生活乐趣"],
      "createdAt": "2025-01-21T10:08:00.000Z"
    },
    "tegongshenghuo": {
      "bingoId": "tegongshenghuo",
      "title": "特工生活宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是特工生活爱好者! ",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {"text": "不会把这张Bingo图发到朋友圈", "type": "standard"},
          {"text": "又是幻想自己在飞檐走壁", "type": "standard"},
          {"text": "熟悉枪械", "type": "standard"},
          {"text": "洗澡会听fall out boy等摇滚乐", "type": "standard"},
          {"text": "经常被噩梦惊醒", "type": "standard"}
        ],
        [
          {"text": "搜集信息的能力很强", "type": "standard"},
          {"text": "朋友少", "type": "standard"},
          {"text": "外人对自己评价是神秘", "type": "standard"},
          {"text": "中二病", "type": "standard"},
          {"text": "外卖头像和名字都是假的", "type": "standard"}
        ],
        [
          {"text": "饮食健康", "type": "standard"},
          {"text": "有各种黑衣服", "type": "standard"},
          {"text": "会开车", "type": "standard"},
          {"text": "身手敏捷", "type": "standard"},
          {"text": "身材匀称", "type": "standard"}
        ],
        [
          {"text": "有敌人/关系不好的人", "type": "standard"},
          {"text": "感恩帮助过自己的人", "type": "standard"},
          {"text": "有自己常用的AI助手", "type": "standard"},
          {"text": "懂一些急救技能", "type": "standard"},
          {"text": "有想要保护的人或动物", "type": "standard"}
        ],
        [
          {"text": "有特别多秘密", "type": "standard"},
          {"text": "翻过学校的墙", "type": "standard"},
          {"text": "擅长做饭", "type": "standard"},
          {"text": "善于运用电脑", "type": "standard"},
          {"text": "会品酒", "type": "standard"}
        ]
      ],
      "category": "生活",
      "tags": ["特工", "神秘", "中二"],
      "createdAt": "2025-01-21T10:09:00.000Z"
    },
    "xingfumoment": {
      "bingoId": "xingfumoment",
      "title": "幸福Moment宾果",
      "creator": "系统",
      "description": "五个连成一线，你有生活中的幸福Moment吗？",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {"text": "被路边猫咪蹭腿", "type": "standard"},
          {"text": "踩碎路边的落叶", "type": "standard"},
          {"text": "点到好吃的外卖", "type": "standard"},
          {"text": "一个人在公交车戴耳机听歌", "type": "standard"},
          {"text": "掰橘子瓣摆成小花", "type": "standard"}
        ],
        [
          {"text": "在备忘录/日记写下心愿", "type": "standard"},
          {"text": "在衣服口袋里发现钱", "type": "standard"},
          {"text": "发呆", "type": "standard"},
          {"text": "和喜欢的人一起看日出", "type": "standard"},
          {"text": "和朋友一起逛公园", "type": "standard"}
        ],
        [
          {"text": "过一个完美周末", "type": "standard"},
          {"text": "晒过的被子上有阳光的味道", "type": "standard"},
          {"text": "免费格子", "type": "standard"},
          {"text": "在超市里选零食", "type": "standard"},
          {"text": "在书店里看书", "type": "standard"}
        ],
        [
          {"text": "音乐软件随机播到喜欢的歌", "type": "standard"},
          {"text": "把脸埋进被子蹭来蹭去", "type": "standard"},
          {"text": "晚上十点的泡面/火鸡面", "type": "standard"},
          {"text": "黄昏时分漫无目的地散步", "type": "standard"},
          {"text": "吃到刚出炉的面包/薯条", "type": "standard"}
        ],
        [
          {"text": "偶然发现一个宝藏小店", "type": "standard"},
          {"text": "不定闹钟睡到阳光照进房间", "type": "standard"},
          {"text": "洗澡的时候播放喜欢的歌", "type": "standard"},
          {"text": "临睡前把枕头拍松", "type": "standard"},
          {"text": "相信自己总会拥抱幸福", "type": "standard"}
        ]
      ],
      "category": "生活",
      "tags": ["幸福", "生活", "美好"],
      "createdAt": "2025-01-21T10:10:00.000Z"
    }
  },
  "心理": {
    "adhd_traits": {
      "bingoId": "adhd_traits",
      "title": "ADHD特征宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你可能有ADHD倾向",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "经常丢三落四",
            "type": "standard"
          },
          {
            "text": "难以开始任务",
            "type": "standard"
          },
          {
            "text": "时间感知偏差",
            "type": "standard"
          },
          {
            "text": "同时做多件事",
            "type": "standard"
          },
          {
            "text": "打断别人说话",
            "type": "standard"
          }
        ],
        [
          {
            "text": "经常坐立不安",
            "type": "standard"
          },
          {
            "text": "工作5分钟玩手机1小时",
            "type": "standard"
          },
          {
            "text": "经常忘记约定",
            "type": "standard"
          },
          {
            "text": "经常冲动消费",
            "type": "standard"
          },
          {
            "text": "房间、桌面乱糟糟",
            "type": "standard"
          }
        ],
        [
          {
            "text": "经常迟到",
            "type": "standard"
          },
          {
            "text": "手里有小动作/撕手皮/咬指甲",
            "type": "standard"
          },
          {
            "text": "拖延严重",
            "type": "standard"
          },
          {
            "text": "情绪波动大",
            "type": "standard"
          },
          {
            "text": "摔烂过手机/其他东西",
            "type": "standard"
          }
        ],
        [
          {
            "text": "话多且语速快",
            "type": "standard"
          },
          {
            "text": "聊天话题调得太快",
            "type": "standard"
          },
          {
            "text": "回避冗长任务",
            "type": "standard"
          },
          {
            "text": "常丢/忘带钥匙手机",
            "type": "standard"
          },
          {
            "text": "有睡眠问题",
            "type": "standard"
          }
        ],
        [
          {
            "text": "所有计划都坚持不下来",
            "type": "standard"
          },
          {
            "text": "健忘",
            "type": "standard"
          },
          {
            "text": "或许有成瘾问题",
            "type": "standard"
          },
          {
            "text": "回避社交场合",
            "type": "standard"
          },
          {
            "text": "常换兴趣爱好",
            "type": "standard"
          }
        ]
      ],
      "category": "心理",
      "tags": [
        "ADHD",
        "神经多样性"
      ],
      "createdAt": "2025-07-29T01:14:01.574Z"
    },
    "bianjiegan": {
      "bingoId": "bianjiegan",
      "title": "边界感宾果",
      "creator": "系统",
      "description": "五个连成一线，你就很有边界感",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "只愿与非人事物建立情感联结",
            "type": "standard"
          },
          {
            "text": "不需要任何人帮助",
            "type": "standard"
          },
          {
            "text": "非黑即白的边界",
            "type": "standard"
          },
          {
            "text": "严格划分责任",
            "type": "standard"
          },
          {
            "text": "回避深度对话",
            "type": "standard"
          }
        ],
        [
          {
            "text": "拒绝展现脆弱",
            "type": "standard"
          },
          {
            "text": "恐惧承诺",
            "type": "standard"
          },
          {
            "text": "极少分享真实感受",
            "type": "standard"
          },
          {
            "text": "婉拒他人情感倾诉",
            "type": "standard"
          },
          {
            "text": "用逻辑替代情感",
            "type": "standard"
          }
        ],
        [
          {
            "text": "我的事不用你管",
            "type": "standard"
          },
          {
            "text": "随时准备从关系中撤退",
            "type": "standard"
          },
          {
            "text": "不喜欢肢体接触",
            "type": "standard"
          },
          {
            "text": "情感疏离",
            "type": "standard"
          },
          {
            "text": "反复解释边界",
            "type": "standard"
          }
        ],
        [
          {
            "text": "熟练掌握课题分离",
            "type": "standard"
          },
          {
            "text": "依赖等于软弱",
            "type": "standard"
          },
          {
            "text": "回避型\\恐惧型依恋",
            "type": "standard"
          },
          {
            "text": "对被帮助有很强亏欠感",
            "type": "standard"
          },
          {
            "text": "对私人问题感到冒犯",
            "type": "standard"
          }
        ],
        [
          {
            "text": "需要帮助时不会主动开口",
            "type": "standard"
          },
          {
            "text": "独立成瘾",
            "type": "standard"
          },
          {
            "text": "用愤怒来维护边界",
            "type": "standard"
          },
          {
            "text": "严格划分社交圈",
            "type": "standard"
          },
          {
            "text": "冷漠",
            "type": "standard"
          }
        ]
      ],
      "category": "心理",
      "tags": [
        "边界感"
      ],
      "createdAt": "2025-07-29T01:14:01.575Z"
    },
    "chihuozhishu": {
      "bingoId": "chihuozhishu",
      "title": "吃货指数宾果",
      "creator": "系统",
      "description": "五个连成一线, 证明你是个纯正的吃货！",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "手机相册里美食多于自拍",
            "type": "standard"
          },
          {
            "text": "为了吃可以排长队",
            "type": "standard"
          },
          {
            "text": "知道三家以上的外卖神店",
            "type": "standard"
          },
          {
            "text": "吃饭前必先拍照",
            "type": "standard"
          },
          {
            "text": "深夜发美食图'放毒'",
            "type": "standard"
          }
        ],
        [
          {
            "text": "能分辨不同产地的同一种水果",
            "type": "standard"
          },
          {
            "text": "旅行的意义在于吃",
            "type": "standard"
          },
          {
            "text": "对'限定'二字没有抵抗力",
            "type": "standard"
          },
          {
            "text": "不开心就想吃东西",
            "type": "standard"
          },
          {
            "text": "有第二个胃装甜点",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看美食视频会流口水",
            "type": "standard"
          },
          {
            "text": "熟悉各种酱料的搭配",
            "type": "standard"
          },
          {
            "text": "Free Space (自由发挥)",
            "type": "standard"
          },
          {
            "text": "冰箱里永远有存货",
            "type": "standard"
          },
          {
            "text": "能说出每种食物的最佳吃法",
            "type": "standard"
          }
        ],
        [
          {
            "text": "为吃一家餐厅专程跑很远",
            "type": "standard"
          },
          {
            "text": "朋友聚会负责找餐厅",
            "type": "standard"
          },
          {
            "text": "吃自助餐有自己的策略",
            "type": "standard"
          },
          {
            "text": "尝过奇怪的食物组合",
            "type": "standard"
          },
          {
            "text": "对食物有独特的仪式感",
            "type": "standard"
          }
        ],
        [
          {
            "text": "喜欢逛菜市场/超市",
            "type": "standard"
          },
          {
            "text": "收藏了很多餐厅/菜谱",
            "type": "standard"
          },
          {
            "text": "点单时什么都想吃",
            "type": "standard"
          },
          {
            "text": "看别人吃饭都觉得香",
            "type": "standard"
          },
          {
            "text": "能接受香菜/榴莲/臭豆腐",
            "type": "standard"
          }
        ]
      ],
      "category": "心理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.575Z"
    },
    "gudu": {
      "bingoId": "gudu",
      "title": "孤独谱系宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你可能是孤独谱系个体",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "不会见人说人话见鬼说鬼话",
            "type": "standard"
          },
          {
            "text": "在社交场合掩饰自己",
            "type": "standard"
          },
          {
            "text": "需要一致的日程来维持正常生活",
            "type": "standard"
          },
          {
            "text": "表情严肃或“太傻”",
            "type": "standard"
          },
          {
            "text": "经常模仿台词/文章/对话的一部分",
            "type": "standard"
          }
        ],
        [
          {
            "text": "被人评价“身体姿势奇怪”",
            "type": "standard"
          },
          {
            "text": "有被同学集体排挤的经历",
            "type": "standard"
          },
          {
            "text": "长期专注于某些强烈的兴趣",
            "type": "standard"
          },
          {
            "text": "被评价“爱钻牛角尖\"",
            "type": "standard"
          },
          {
            "text": "寻求视觉刺激,或害怕强光",
            "type": "standard"
          }
        ],
        [
          {
            "text": "维持双向对话困难",
            "type": "standard"
          },
          {
            "text": "重复动作",
            "type": "standard"
          },
          {
            "text": "避免眼神接触",
            "type": "standard"
          },
          {
            "text": "经常需要耳塞/耳罩/隔音耳机",
            "type": "standard"
          },
          {
            "text": "需要独处来恢复能量",
            "type": "standard"
          }
        ],
        [
          {
            "text": "触觉敏感(对衣服材质/标签敏感)",
            "type": "standard"
          },
          {
            "text": "语调太平淡或太夸张",
            "type": "standard"
          },
          {
            "text": "很想交朋友但交不到/维持不久",
            "type": "standard"
          },
          {
            "text": "长期收集某些感兴趣的物品",
            "type": "standard"
          },
          {
            "text": "在觉得自己很礼貌时被人评价没礼貌",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有一些需要遵守的个人规则",
            "type": "standard"
          },
          {
            "text": "非常挑食(无法忍受某些食物)",
            "type": "standard"
          },
          {
            "text": "述情障碍(难以识别和描述情绪)",
            "type": "standard"
          },
          {
            "text": "经常社交耗竭",
            "type": "standard"
          },
          {
            "text": "对话时注视对方的眉毛/鼻子以下",
            "type": "standard"
          }
        ]
      ],
      "category": "心理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.575Z"
    },
    "jiaolv": {
      "bingoId": "jiaolv",
      "title": "焦虑宾果",
      "creator": "系统",
      "description": "五个连成一线，你的焦虑值已爆表",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "凌晨三点查百度症状",
            "type": "standard"
          },
          {
            "text": "同时担心五件未发生的事",
            "type": "standard"
          },
          {
            "text": "反复检查门锁",
            "type": "standard"
          },
          {
            "text": "把消息提示音当催命符",
            "type": "standard"
          },
          {
            "text": "对未接电话恐慌",
            "type": "standard"
          }
        ],
        [
          {
            "text": "心跳加速时测脉搏",
            "type": "standard"
          },
          {
            "text": "收藏从未打开的冥想教程",
            "type": "standard"
          },
          {
            "text": "觉得休息是犯罪",
            "type": "standard"
          },
          {
            "text": "把小事灾难化",
            "type": "standard"
          },
          {
            "text": "备忘录列满待办事项",
            "type": "standard"
          }
        ],
        [
          {
            "text": "反复修改已发送的消息",
            "type": "standard"
          },
          {
            "text": "担心手机没电像世界末日",
            "type": "standard"
          },
          {
            "text": "预定心理咨询要排三个月",
            "type": "standard"
          },
          {
            "text": "对未读红点焦虑",
            "type": "standard"
          },
          {
            "text": "觉得别人都在进步",
            "type": "standard"
          }
        ],
        [
          {
            "text": "身体无原因疼痛",
            "type": "standard"
          },
          {
            "text": "下载又删除五个时间管理APP",
            "type": "standard"
          },
          {
            "text": "在朋友圈假装岁月静好",
            "type": "standard"
          },
          {
            "text": "睡前大脑自动回放尴尬场面",
            "type": "standard"
          },
          {
            "text": "对未知行程恐惧",
            "type": "standard"
          }
        ],
        [
          {
            "text": "囤积未拆封的减压玩具",
            "type": "standard"
          },
          {
            "text": "把天气预报当重要参考",
            "type": "standard"
          },
          {
            "text": "担心地球明天毁灭",
            "type": "standard"
          },
          {
            "text": "对选择困难到瘫痪",
            "type": "standard"
          },
          {
            "text": "查星座运势做决策",
            "type": "standard"
          }
        ]
      ],
      "category": "心理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.575Z"
    },
    "mental_state": {
      "bingoId": "mental_state",
      "title": "精神状态宾果",
      "creator": "系统",
      "description": "五个连成一线，是时候关心自己的心理健康了",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "不明原因情绪低落",
            "type": "standard"
          },
          {
            "text": "常常感觉自己没意义",
            "type": "standard"
          },
          {
            "text": "失眠/入睡困难",
            "type": "standard"
          },
          {
            "text": "社交后极度疲惫",
            "type": "standard"
          },
          {
            "text": "一整天都提不起劲",
            "type": "standard"
          }
        ],
        [
          {
            "text": "工作/学习注意力难集中",
            "type": "standard"
          },
          {
            "text": "对爱好也提不起兴趣",
            "type": "standard"
          },
          {
            "text": "常常想一个人躲起来",
            "type": "standard"
          },
          {
            "text": "明明没事却想哭",
            "type": "standard"
          },
          {
            "text": "需要靠剧/游戏麻痹自己",
            "type": "standard"
          }
        ],
        [
          {
            "text": "觉得朋友其实不喜欢自己",
            "type": "standard"
          },
          {
            "text": "害怕面对未来",
            "type": "standard"
          },
          {
            "text": "反复怀疑自己",
            "type": "standard"
          },
          {
            "text": "觉得自己是负担",
            "type": "standard"
          },
          {
            "text": "感受到压力但说不出来",
            "type": "standard"
          }
        ],
        [
          {
            "text": "容易爆发小情绪",
            "type": "standard"
          },
          {
            "text": "长时间无所事事",
            "type": "standard"
          },
          {
            "text": "过度使用社交媒体逃避",
            "type": "standard"
          },
          {
            "text": "对身体症状过度焦虑",
            "type": "standard"
          },
          {
            "text": "觉得世界灰暗",
            "type": "standard"
          }
        ],
        [
          {
            "text": "生活节奏完全混乱",
            "type": "standard"
          },
          {
            "text": "自我贬低成日常",
            "type": "standard"
          },
          {
            "text": "过度思考别人的话",
            "type": "standard"
          },
          {
            "text": "拒绝求助或倾诉",
            "type": "standard"
          },
          {
            "text": "意识到问题但不知从哪开始",
            "type": "standard"
          }
        ]
      ],
      "category": "心理",
      "tags": [
        "心理健康",
        "情绪状态"
      ],
      "createdAt": "2025-07-29T01:14:01.575Z"
    },
    "love_master": {
      "bingoId": "love_master",
      "title": "恋爱小天才宾果",
      "creator": "系统",
      "description": "五个连成一线，你的恋爱智商值得羡慕！",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "谈恋爱不emo",
            "type": "standard"
          },
          {
            "text": "擅长表达情绪",
            "type": "standard"
          },
          {
            "text": "知道怎么给对方安全感",
            "type": "standard"
          },
          {
            "text": "会为关系制定共同目标",
            "type": "standard"
          },
          {
            "text": "分寸感极强",
            "type": "standard"
          }
        ],
        [
          {
            "text": "不翻旧账",
            "type": "standard"
          },
          {
            "text": "冷静沟通不冷暴力",
            "type": "standard"
          },
          {
            "text": "尊重彼此空间",
            "type": "standard"
          },
          {
            "text": "主动制造小惊喜",
            "type": "standard"
          },
          {
            "text": "感情稳定不作",
            "type": "standard"
          }
        ],
        [
          {
            "text": "遇到问题及时沟通",
            "type": "standard"
          },
          {
            "text": "不会轻易说分手",
            "type": "standard"
          },
          {
            "text": "不强求对方改变",
            "type": "standard"
          },
          {
            "text": "会主动道歉",
            "type": "standard"
          },
          {
            "text": "和对方的朋友相处融洽",
            "type": "standard"
          }
        ],
        [
          {
            "text": "懂得共情与聆听",
            "type": "standard"
          },
          {
            "text": "保持独立也懂依赖",
            "type": "standard"
          },
          {
            "text": "恋爱时也会照顾好自己",
            "type": "standard"
          },
          {
            "text": "不会把情绪强加于人",
            "type": "standard"
          },
          {
            "text": "不会偷窥对方手机",
            "type": "standard"
          }
        ],
        [
          {
            "text": "遇到分歧会找折中方案",
            "type": "standard"
          },
          {
            "text": "能坦诚说出自己的需求",
            "type": "standard"
          },
          {
            "text": "遇到挫折会共同面对",
            "type": "standard"
          },
          {
            "text": "喜欢也不失自我",
            "type": "standard"
          },
          {
            "text": "知道什么时候需要边界",
            "type": "standard"
          }
        ]
      ],
      "category": "心理",
      "tags": [
        "恋爱技巧",
        "情感智慧"
      ],
      "createdAt": "2025-07-29T01:14:01.576Z"
    },
    "neihua_index": {
      "bingoId": "neihua_index",
      "title": "内耗指数宾果",
      "creator": "系统",
      "description": "五个连成一线，说明你正在自我攻击，请抱抱自己",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "因为回复晚了开始焦虑",
            "type": "standard"
          },
          {
            "text": "跟人说话前先在脑子里彩排三遍",
            "type": "standard"
          },
          {
            "text": "回到家开始反思今天说的话",
            "type": "standard"
          },
          {
            "text": "听到语气重一点就觉得别人不喜欢我",
            "type": "standard"
          },
          {
            "text": "别人在发火我会觉得是我错了",
            "type": "standard"
          }
        ],
        [
          {
            "text": "即使不喜欢也不敢拒绝",
            "type": "standard"
          },
          {
            "text": "每天都要怀疑自己能力",
            "type": "standard"
          },
          {
            "text": "总想让所有人满意",
            "type": "standard"
          },
          {
            "text": "突然想到以前的尴尬事就满脸通红",
            "type": "standard"
          },
          {
            "text": "明明没事但脑子一直在转",
            "type": "standard"
          }
        ],
        [
          {
            "text": "没做事也觉得累，是心累",
            "type": "standard"
          },
          {
            "text": "经常想逃避现实",
            "type": "standard"
          },
          {
            "text": "总担心别人误会我",
            "type": "standard"
          },
          {
            "text": "道歉成口头禅",
            "type": "standard"
          },
          {
            "text": "容易因为小事否定自己",
            "type": "standard"
          }
        ],
        [
          {
            "text": "做决定前反复纠结",
            "type": "standard"
          },
          {
            "text": "因为没回消息而担心对方生气",
            "type": "standard"
          },
          {
            "text": "别人皱眉就以为是我惹的祸",
            "type": "standard"
          },
          {
            "text": "经常觉得“我是不是太差了”",
            "type": "standard"
          },
          {
            "text": "自己跟自己吵架",
            "type": "standard"
          }
        ],
        [
          {
            "text": "明明是别人错但自己更内疚",
            "type": "standard"
          },
          {
            "text": "总是反复检查自己说过的话",
            "type": "standard"
          },
          {
            "text": "被夸了也不敢相信是真的",
            "type": "standard"
          },
          {
            "text": "很在意别人对我的看法",
            "type": "standard"
          },
          {
            "text": "常觉得自己让人失望",
            "type": "standard"
          }
        ]
      ],
      "category": "心理",
      "tags": [
        "自我内耗",
        "社交焦虑"
      ],
      "createdAt": "2025-07-29T01:14:01.576Z"
    },
    "qingxulengmo": {
      "bingoId": "qingxulengmo",
      "title": "情绪冷漠宾果",
      "creator": "系统",
      "description": "五个连成一线，你的情绪已进入节能模式",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "对节日毫无感觉",
            "type": "standard"
          },
          {
            "text": "被说\"你好冷漠\"也不解释",
            "type": "standard"
          },
          {
            "text": "觉得恋爱麻烦",
            "type": "standard"
          },
          {
            "text": "对他人痛苦共情失败",
            "type": "standard"
          },
          {
            "text": "取消所有生日提醒",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看悲剧电影吃爆米花",
            "type": "standard"
          },
          {
            "text": "用\"哦\"结束对话",
            "type": "standard"
          },
          {
            "text": "对八卦毫无兴趣",
            "type": "standard"
          },
          {
            "text": "觉得庆祝仪式多余",
            "type": "standard"
          },
          {
            "text": "收到礼物毫无波澜",
            "type": "standard"
          }
        ],
        [
          {
            "text": "对别人告白说\"谢谢\"",
            "type": "standard"
          },
          {
            "text": "把表情包当情绪代餐",
            "type": "standard"
          },
          {
            "text": "拒绝深度聊天",
            "type": "standard"
          },
          {
            "text": "对工作表扬无感",
            "type": "standard"
          },
          {
            "text": "觉得宠物比人可爱",
            "type": "standard"
          }
        ],
        [
          {
            "text": "十年没哭过",
            "type": "standard"
          },
          {
            "text": "把\"随便\"当口头禅",
            "type": "standard"
          },
          {
            "text": "对惊喜感到负担",
            "type": "standard"
          },
          {
            "text": "认为热情是消耗品",
            "type": "standard"
          },
          {
            "text": "对别人冷战毫无察觉",
            "type": "standard"
          }
        ],
        [
          {
            "text": "朋友圈三年没更新",
            "type": "standard"
          },
          {
            "text": "觉得表情符号虚伪",
            "type": "standard"
          },
          {
            "text": "对离别不说再见",
            "type": "standard"
          },
          {
            "text": "用AI写祝福语",
            "type": "standard"
          },
          {
            "text": "理想状态是植物",
            "type": "standard"
          }
        ]
      ],
      "category": "心理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.576Z"
    },
    "shaonv": {
      "bingoId": "shaonv",
      "title": "少女宾果",
      "creator": "系统",
      "description": "五个连成一线，你还是18岁！",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "喜欢可爱的小动物",
            "type": "standard"
          },
          {
            "text": "喜欢甜点",
            "type": "standard"
          },
          {
            "text": "经常背痛包",
            "type": "standard"
          },
          {
            "text": "喜欢收集",
            "type": "standard"
          },
          {
            "text": "性格活泼",
            "type": "standard"
          }
        ],
        [
          {
            "text": "喜欢粉色的衣服",
            "type": "standard"
          },
          {
            "text": "曾经为了一个叶子/树枝/云朵而开心半天",
            "type": "standard"
          },
          {
            "text": "喜欢好看的裙子",
            "type": "standard"
          },
          {
            "text": "经常幻想美好剧情",
            "type": "standard"
          },
          {
            "text": "拥有十条以上小裙子",
            "type": "standard"
          }
        ],
        [
          {
            "text": "喜欢果冻/棒棒糖泡芙/小蛋糕",
            "type": "standard"
          },
          {
            "text": "喜欢彩虹",
            "type": "standard"
          },
          {
            "text": "喜欢桃子汽水",
            "type": "standard"
          },
          {
            "text": "喜欢可爱的玩具",
            "type": "standard"
          },
          {
            "text": "使用钥匙/手机挂件",
            "type": "standard"
          }
        ],
        [
          {
            "text": "喜欢纯爱",
            "type": "standard"
          },
          {
            "text": "做手账",
            "type": "standard"
          },
          {
            "text": "比较在意环境或者氛围",
            "type": "standard"
          },
          {
            "text": "喜欢马卡龙色系",
            "type": "standard"
          },
          {
            "text": "喜欢赋予意义",
            "type": "standard"
          }
        ],
        [
          {
            "text": "爱发颜文字或者可爱表情包",
            "type": "standard"
          },
          {
            "text": "对生活观察细致",
            "type": "standard"
          },
          {
            "text": "会给自己打气加油",
            "type": "standard"
          },
          {
            "text": "喜欢被夸夸",
            "type": "standard"
          },
          {
            "text": "爱看恋综",
            "type": "standard"
          }
        ]
      ],
      "category": "心理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.576Z"
    },
    "shehuizhishu": {
      "bingoId": "shehuizhishu",
      "title": "社会指数宾果",
      "creator": "系统",
      "description": "五个连成一线,说明你不社会,还可能很社恐",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "不玩王者吃鸡，",
            "type": "standard"
          },
          {
            "text": "不喜欢轰趴, KTV",
            "type": "standard"
          },
          {
            "text": "不刷短视频",
            "type": "standard"
          },
          {
            "text": "休息日喜欢宅在家(大部分是床上)",
            "type": "standard"
          },
          {
            "text": "天天玩qq",
            "type": "standard"
          }
        ],
        [
          {
            "text": "很少发朋友圈",
            "type": "standard"
          },
          {
            "text": "没纹身",
            "type": "standard"
          },
          {
            "text": "没去过酒吧",
            "type": "standard"
          },
          {
            "text": "不追星",
            "type": "standard"
          },
          {
            "text": "不嚼槟郎",
            "type": "standard"
          }
        ],
        [
          {
            "text": "异性朋友不超过2个",
            "type": "standard"
          },
          {
            "text": "没染过发",
            "type": "standard"
          },
          {
            "text": "没打过耳洞",
            "type": "standard"
          },
          {
            "text": "过年不打麻将扑克",
            "type": "standard"
          },
          {
            "text": "不喜欢综艺,看剧",
            "type": "standard"
          }
        ],
        [
          {
            "text": "不爱看电影",
            "type": "standard"
          },
          {
            "text": "觉得一个人出门吃饭完全没问题",
            "type": "standard"
          },
          {
            "text": "没谈过恋爱",
            "type": "standard"
          },
          {
            "text": "没有穿鞋出门",
            "type": "standard"
          },
          {
            "text": "没在朋友圈发过自拍",
            "type": "standard"
          }
        ],
        [
          {
            "text": "没有擅长的运动",
            "type": "standard"
          },
          {
            "text": "不抽烟",
            "type": "standard"
          },
          {
            "text": "出门习惯性戴☐罩",
            "type": "standard"
          },
          {
            "text": "不喜欢和人打交道",
            "type": "standard"
          },
          {
            "text": "不戴手表,项链之类的东西",
            "type": "standard"
          }
        ]
      ],
      "category": "心理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.576Z"
    },
    "sheniu_index": {
      "bingoId": "sheniu_index",
      "title": "社牛指数宾果",
      "creator": "系统",
      "description": "五个连成一线，你是名副其实的社交王者",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "和陌生人搭讪完全没障碍",
            "type": "standard"
          },
          {
            "text": "主动组织聚会",
            "type": "standard"
          },
          {
            "text": "在群聊里秒回",
            "type": "standard"
          },
          {
            "text": "不怕冷场，能随时接梗",
            "type": "standard"
          },
          {
            "text": "朋友圈更新比天气还勤",
            "type": "standard"
          }
        ],
        [
          {
            "text": "自来熟属性",
            "type": "standard"
          },
          {
            "text": "喜欢公共场合表演",
            "type": "standard"
          },
          {
            "text": "参加陌生局毫无压力",
            "type": "standard"
          },
          {
            "text": "永远是话题中心",
            "type": "standard"
          },
          {
            "text": "当众发言不带稿",
            "type": "standard"
          }
        ],
        [
          {
            "text": "经常被说“你太能聊了”",
            "type": "standard"
          },
          {
            "text": "喜欢交新朋友",
            "type": "standard"
          },
          {
            "text": "任何时候都能开启聊天模式",
            "type": "standard"
          },
          {
            "text": "敢在KTV唱第一首",
            "type": "standard"
          },
          {
            "text": "看到熟人必须打招呼",
            "type": "standard"
          }
        ],
        [
          {
            "text": "坐电梯也能搭话",
            "type": "standard"
          },
          {
            "text": "给别人起外号是日常操作",
            "type": "standard"
          },
          {
            "text": "拍照发朋友圈毫无心理负担",
            "type": "standard"
          },
          {
            "text": "会在社交场合主动照顾社恐朋友",
            "type": "standard"
          },
          {
            "text": "社交电量永远满格",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有自己的小圈子+大圈子",
            "type": "standard"
          },
          {
            "text": "给每个朋友都有备注",
            "type": "standard"
          },
          {
            "text": "不怕尴尬，怕冷场",
            "type": "standard"
          },
          {
            "text": "任何社交局都能控场",
            "type": "standard"
          },
          {
            "text": "声音响亮、情绪外放",
            "type": "standard"
          }
        ]
      ],
      "category": "心理",
      "tags": [
        "社交能力",
        "社牛",
        "外向"
      ],
      "createdAt": "2025-07-29T01:14:01.577Z"
    },
    "shijian": {
      "bingoId": "shijian",
      "title": "视奸宾果",
      "creator": "系统",
      "description": "五个连成一线，你还是放不下ta?",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "有专门的文档储存ta的相关信息",
            "type": "standard"
          },
          {
            "text": "视奸没有被ta本人发现过",
            "type": "standard"
          },
          {
            "text": "日记里有大篇幅对ta的记录",
            "type": "standard"
          },
          {
            "text": "被ta讨厌",
            "type": "standard"
          },
          {
            "text": "几乎掌握了ta主流平台的所有账号",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有专门用来视奸的小号",
            "type": "standard"
          },
          {
            "text": "保存过ta使用过的物品",
            "type": "standard"
          },
          {
            "text": "被视奸对象发现过你在视奸ta",
            "type": "standard"
          },
          {
            "text": "ta不知情的情况下使用过ta的东西",
            "type": "standard"
          },
          {
            "text": "了解ta的大部分喜好与厌恶",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有时候很偏执",
            "type": "standard"
          },
          {
            "text": "ta对自己印象很好",
            "type": "standard"
          },
          {
            "text": "这种行为持续了1个月以上",
            "type": "standard"
          },
          {
            "text": "在深夜对着ta的聊天框(只是)发呆",
            "type": "standard"
          },
          {
            "text": "被ta的朋友知道你在视奸ta",
            "type": "standard"
          }
        ],
        [
          {
            "text": "摸清ta的生活规律",
            "type": "standard"
          },
          {
            "text": "为了视奸ta而做一些不感兴趣的事",
            "type": "standard"
          },
          {
            "text": "偷偷拍过ta的照片独自欣赏",
            "type": "standard"
          },
          {
            "text": "有时觉得自己很过分但很快就原谅自己",
            "type": "standard"
          },
          {
            "text": "只是觉得好玩才选择视奸",
            "type": "standard"
          }
        ],
        [
          {
            "text": "在ta必经之路上装作偶遇",
            "type": "standard"
          },
          {
            "text": "曾经给ta寄过/塞过匿名书信",
            "type": "standard"
          },
          {
            "text": "认识(知道)ta的朋友",
            "type": "standard"
          },
          {
            "text": "受到ta的信赖",
            "type": "standard"
          },
          {
            "text": "厌恶在ta周围出现的太多数人",
            "type": "standard"
          }
        ]
      ],
      "category": "心理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.577Z"
    },
    "shuimianzhangai": {
      "bingoId": "shuimianzhangai",
      "title": "睡眠障碍宾果",
      "creator": "系统",
      "description": "五个连成一线，证明你的睡眠比纸片还脆弱",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "数羊数到三位数",
            "type": "standard"
          },
          {
            "text": "凌晨3点刷美食视频",
            "type": "standard"
          },
          {
            "text": "白天咖啡当水喝",
            "type": "standard"
          },
          {
            "text": "做梦在赶DDL",
            "type": "standard"
          },
          {
            "text": "午睡后更懵圈",
            "type": "standard"
          }
        ],
        [
          {
            "text": "听白噪音听到耳鸣",
            "type": "standard"
          },
          {
            "text": "被子必须掖成蚕蛹",
            "type": "standard"
          },
          {
            "text": "对光线敏感如吸血鬼",
            "type": "standard"
          },
          {
            "text": "幻想砸了闹钟",
            "type": "standard"
          },
          {
            "text": "记得所有夜剧台词",
            "type": "standard"
          }
        ],
        [
          {
            "text": "白天站着也能打盹",
            "type": "standard"
          },
          {
            "text": "深夜思考人生意义",
            "type": "standard"
          },
          {
            "text": "拥有3种褪黑素",
            "type": "standard"
          },
          {
            "text": "床上有4个枕头",
            "type": "standard"
          },
          {
            "text": "被鸟叫惊醒",
            "type": "standard"
          }
        ],
        [
          {
            "text": "午休=昏迷2小时",
            "type": "standard"
          },
          {
            "text": "恐惧清晨闹铃",
            "type": "standard"
          },
          {
            "text": "能秒睡但只睡10分钟",
            "type": "standard"
          },
          {
            "text": "研究睡眠周期图",
            "type": "standard"
          },
          {
            "text": "买过助眠喷雾",
            "type": "standard"
          }
        ],
        [
          {
            "text": "凌晨发朋友圈仅自己见",
            "type": "standard"
          },
          {
            "text": "认床认枕头认窗帘",
            "type": "standard"
          },
          {
            "text": "把失眠归咎于月亮",
            "type": "standard"
          },
          {
            "text": "试过\"478呼吸法\"",
            "type": "standard"
          },
          {
            "text": "觉得睡觉是浪费时间",
            "type": "standard"
          }
        ]
      ],
      "category": "心理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.577Z"
    },
    "tuoyanzhengzhishu": {
      "bingoId": "tuoyanzhengzhishu",
      "title": "拖延症指数宾果",
      "creator": "系统",
      "description": "五个连成一线, 说明你是拖延症晚期患者。",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "不到最后不动手",
            "type": "standard"
          },
          {
            "text": "准备工作前先打扫卫生",
            "type": "standard"
          },
          {
            "text": "先吃点东西再说",
            "type": "standard"
          },
          {
            "text": "口头禅：'明天一定开始'",
            "type": "standard"
          },
          {
            "text": "还有时间, 不急",
            "type": "standard"
          }
        ],
        [
          {
            "text": "打开文档, 先刷会手机",
            "type": "standard"
          },
          {
            "text": "DDL是第一生产力",
            "type": "standard"
          },
          {
            "text": "收藏=学会了",
            "type": "standard"
          },
          {
            "text": "计划表只是心理安慰",
            "type": "standard"
          },
          {
            "text": "经常说'五分钟后就做'",
            "type": "standard"
          }
        ],
        [
          {
            "text": "因为拖延而熬夜",
            "type": "standard"
          },
          {
            "text": "把闹钟按掉继续睡",
            "type": "standard"
          },
          {
            "text": "Free Space (自由发挥)",
            "type": "standard"
          },
          {
            "text": "任务越难越想拖",
            "type": "standard"
          },
          {
            "text": "先玩一局游戏",
            "type": "standard"
          }
        ],
        [
          {
            "text": "总是在寻找'最佳状态'",
            "type": "standard"
          },
          {
            "text": "衣服堆成山才洗",
            "type": "standard"
          },
          {
            "text": "消息看到但等会再回",
            "type": "standard"
          },
          {
            "text": "买的书只看了封面",
            "type": "standard"
          },
          {
            "text": "夏天结束了才想起要减肥",
            "type": "standard"
          }
        ],
        [
          {
            "text": "同时开很多任务但都没完成",
            "type": "standard"
          },
          {
            "text": "为逃避大任务去做一堆小事",
            "type": "standard"
          },
          {
            "text": "手机APP通知超过99+",
            "type": "standard"
          },
          {
            "text": "会员快过期了才想起来用",
            "type": "standard"
          },
          {
            "text": "经常幻想自己高效完成任务",
            "type": "standard"
          }
        ]
      ],
      "category": "心理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.577Z"
    },
      "category": "心理",
      "tags": [
        "极简主义",
        "精神修行"
      ],
      "createdAt": "2025-07-29T01:14:01.577Z"
    },
    "xuanzekunnan": {
      "bingoId": "xuanzekunnan",
      "title": "选择困难症宾果",
      "creator": "系统",
      "description": "五个连成一线, 你是不是什么都想要？",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "点外卖超过20分钟",
            "type": "standard"
          },
          {
            "text": "经常说'随便'",
            "type": "standard"
          },
          {
            "text": "让朋友/店员推荐",
            "type": "standard"
          },
          {
            "text": "买东西喜欢买两个颜色",
            "type": "standard"
          },
          {
            "text": "出门前换好几套衣服",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看菜单从头看到尾",
            "type": "standard"
          },
          {
            "text": "用抛硬币/转盘做决定",
            "type": "standard"
          },
          {
            "text": "最后选了第一个看中的",
            "type": "standard"
          },
          {
            "text": "因为选错而后悔一天",
            "type": "standard"
          },
          {
            "text": "淘宝购物车里超过50件商品",
            "type": "standard"
          }
        ],
        [
          {
            "text": "吃饭时想尝尝别人点的",
            "type": "standard"
          },
          {
            "text": "买完东西还在看同类商品",
            "type": "standard"
          },
          {
            "text": "Free Space (自由发挥)",
            "type": "standard"
          },
          {
            "text": "害怕做重大决定",
            "type": "standard"
          },
          {
            "text": "在超市里来回踱步",
            "type": "standard"
          }
        ],
        [
          {
            "text": "问遍所有朋友的意见",
            "type": "standard"
          },
          {
            "text": "如果可以, 希望'全都要'",
            "type": "standard"
          },
          {
            "text": "A和B都好, 那就选C",
            "type": "standard"
          },
          {
            "text": "看电影选座位要很久",
            "type": "standard"
          },
          {
            "text": "经常搜索'XX和XX哪个好'",
            "type": "standard"
          }
        ],
        [
          {
            "text": "剪头发前纠结很久",
            "type": "standard"
          },
          {
            "text": "旅游做攻略做到想放弃",
            "type": "standard"
          },
          {
            "text": "需要别人帮你做决定",
            "type": "standard"
          },
          {
            "text": "口头禅是'让我想想'",
            "type": "standard"
          },
          {
            "text": "套餐是你的救星",
            "type": "standard"
          }
        ]
      ],
      "category": "心理",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.577Z"
    },
  "学生": {
    "dubo": {
      "bingoId": "dubo",
      "title": "读博指数宾果",
      "creator": "系统",
      "description": "五个连成一线,你是一个苦逼博士生",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "不玩电子游戏",
            "type": "standard"
          },
          {
            "text": "延毕",
            "type": "standard"
          },
          {
            "text": "不刷社交媒体",
            "type": "standard"
          },
          {
            "text": "休息日很少出门",
            "type": "standard"
          },
          {
            "text": "天天写论文",
            "type": "standard"
          }
        ],
        [
          {
            "text": "经常熬夜",
            "type": "standard"
          },
          {
            "text": "经常点外卖",
            "type": "standard"
          },
          {
            "text": "经常借酒消愁",
            "type": "standard"
          },
          {
            "text": "每天读文献",
            "type": "standard"
          },
          {
            "text": "没有时间旅游",
            "type": "standard"
          }
        ],
        [
          {
            "text": "没有稳定的作息",
            "type": "standard"
          },
          {
            "text": "一周工作超过60小时",
            "type": "standard"
          },
          {
            "text": "没有时间健身",
            "type": "standard"
          },
          {
            "text": "经常喝咖啡",
            "type": "standard"
          },
          {
            "text": "很少参加社交活动",
            "type": "standard"
          }
        ],
        [
          {
            "text": "经常参加学术会议",
            "type": "standard"
          },
          {
            "text": "觉得实验室是第二个家",
            "type": "standard"
          },
          {
            "text": "没有时间陪家人",
            "type": "standard"
          },
          {
            "text": "习惯使用LaTeX写作",
            "type": "standard"
          },
          {
            "text": "很少休假",
            "type": "standard"
          }
        ],
        [
          {
            "text": "很少运动",
            "type": "standard"
          },
          {
            "text": "不喜欢聚会/团建",
            "type": "standard"
          },
          {
            "text": "没发过sci",
            "type": "standard"
          },
          {
            "text": "不会花时间打扮",
            "type": "standard"
          },
          {
            "text": "经常在实验室过夜",
            "type": "standard"
          }
        ]
      ],
      "category": "学生",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.578Z"
    },
    "gaozhongweiji": {
      "bingoId": "gaozhongweiji",
      "title": "高中违纪宾果",
      "creator": "系统",
      "description": "五个连成一线,说明你是不合格的高中生！",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "偷玩电子设备",
            "type": "standard"
          },
          {
            "text": "考试作弊",
            "type": "standard"
          },
          {
            "text": "旷课",
            "type": "standard"
          },
          {
            "text": "校内抽烟",
            "type": "standard"
          },
          {
            "text": "发型不合格(染/烫/不符合学校的长度要求)",
            "type": "standard"
          }
        ],
        [
          {
            "text": "抄作业",
            "type": "standard"
          },
          {
            "text": "携带违规电子设备",
            "type": "standard"
          },
          {
            "text": "点外卖",
            "type": "standard"
          },
          {
            "text": "旷自习",
            "type": "standard"
          },
          {
            "text": "不按要求穿校服",
            "type": "standard"
          }
        ],
        [
          {
            "text": "自习/上课时玩棋牌游戏(麻将/打牌/下棋等",
            "type": "standard"
          },
          {
            "text": "谈恋爱",
            "type": "standard"
          },
          {
            "text": "上课睡觉",
            "type": "standard"
          },
          {
            "text": "逃学",
            "type": "standard"
          },
          {
            "text": "美甲",
            "type": "standard"
          }
        ],
        [
          {
            "text": "辱骂老师",
            "type": "standard"
          },
          {
            "text": "进入校内不允许进入的区域",
            "type": "standard"
          },
          {
            "text": "戴首饰",
            "type": "standard"
          },
          {
            "text": "打架",
            "type": "standard"
          },
          {
            "text": "扰乱课堂/自习/晚休秩序",
            "type": "standard"
          }
        ],
        [
          {
            "text": "校内饮酒",
            "type": "standard"
          },
          {
            "text": "携带管制刀具",
            "type": "standard"
          },
          {
            "text": "旷操",
            "type": "standard"
          },
          {
            "text": "违规充电/使用电器",
            "type": "standard"
          },
          {
            "text": "破坏公物",
            "type": "standard"
          }
        ]
      ],
      "category": "学生",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.578Z"
    },
    "goodqingchun": {
      "bingoId": "goodqingchun",
      "title": "Good青春宾果",
      "creator": "系统",
      "description": "五个连成一条线,说明你有一个非常幸福的青春,恭喜你! ",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "有养过5年以上的宠物",
            "type": "standard"
          },
          {
            "text": "各不同年龄段被同学称赞过外貌",
            "type": "standard"
          },
          {
            "text": "小时候能经常吃到肯德基麦当劳",
            "type": "standard"
          },
          {
            "text": "父母不因考试成绩打压你",
            "type": "standard"
          },
          {
            "text": "网上发布过作品被很多人关注",
            "type": "standard"
          }
        ],
        [
          {
            "text": "请假和不写作业总能得到父母配合",
            "type": "standard"
          },
          {
            "text": "每个阶段都有联系到现在的朋友",
            "type": "standard"
          },
          {
            "text": "家庭二线以上市区有房",
            "type": "standard"
          },
          {
            "text": "能和父母谈心并总能得到支持",
            "type": "standard"
          },
          {
            "text": "高中前与大学后没有早晚自习",
            "type": "standard"
          }
        ],
        [
          {
            "text": "被朋友悄悄筹划过生日庆祝",
            "type": "standard"
          },
          {
            "text": "有至少三个能稳定沉浸的爱好",
            "type": "standard"
          },
          {
            "text": "离开电子产品能坦然和自己独处",
            "type": "standard"
          },
          {
            "text": "谈过3次以上恋爱",
            "type": "standard"
          },
          {
            "text": "特意去过非本地演唱会",
            "type": "standard"
          }
        ],
        [
          {
            "text": "初中以前就能自由使用电子产品",
            "type": "standard"
          },
          {
            "text": "身边的人总能理解自己的爱好",
            "type": "standard"
          },
          {
            "text": "小时候家里就有地暖/空调且常开",
            "type": "standard"
          },
          {
            "text": "喜欢自拍且有能帮你拍照的朋友",
            "type": "standard"
          },
          {
            "text": "去过5个以上省份玩耍",
            "type": "standard"
          }
        ],
        [
          {
            "text": "受到过多次他人的表白",
            "type": "standard"
          },
          {
            "text": "生病会被多个朋友关心",
            "type": "standard"
          },
          {
            "text": "没有寄宿学校等强制集体生活经历",
            "type": "standard"
          },
          {
            "text": "没有人劝考研考公结婚买房生子",
            "type": "standard"
          },
          {
            "text": "即使以上都不符合也不会失落难过",
            "type": "standard"
          }
        ]
      ],
      "category": "学生",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.578Z"
    },
    "kubideqingchun": {
      "bingoId": "kubideqingchun",
      "title": "苦逼的青春宾果",
      "creator": "系统",
      "description": "五个连成一线，你的青春疼痛文学可拍80集",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "食堂菜吃出橡皮",
            "type": "standard"
          },
          {
            "text": "暗恋对象有12个情敌",
            "type": "standard"
          },
          {
            "text": "月考总在生病",
            "type": "standard"
          },
          {
            "text": "被补习班掏空钱包",
            "type": "standard"
          },
          {
            "text": "校服总大两码",
            "type": "standard"
          }
        ],
        [
          {
            "text": "自行车总掉链子",
            "type": "standard"
          },
          {
            "text": "偷带手机被没收",
            "type": "standard"
          },
          {
            "text": "家长会前夜失眠",
            "type": "standard"
          },
          {
            "text": "写小说被当检讨书收",
            "type": "standard"
          },
          {
            "text": "表白撞上对方恋爱",
            "type": "standard"
          }
        ],
        [
          {
            "text": "永远抢不到球场",
            "type": "standard"
          },
          {
            "text": "饭卡总在最饿时没钱",
            "type": "standard"
          },
          {
            "text": "剪发像劳改犯",
            "type": "standard"
          },
          {
            "text": "假期作业最后一天抄",
            "type": "standard"
          },
          {
            "text": "被比较\"别人家孩子\"",
            "type": "standard"
          }
        ],
        [
          {
            "text": "偶像塌房在你生日",
            "type": "standard"
          },
          {
            "text": "长痘长在鼻尖正中间",
            "type": "standard"
          },
          {
            "text": "重要考试必拉肚子",
            "type": "standard"
          },
          {
            "text": "全班就你没情侣",
            "type": "standard"
          },
          {
            "text": "手机掉进汤碗里",
            "type": "standard"
          }
        ],
        [
          {
            "text": "熬夜复习却考原题",
            "type": "standard"
          },
          {
            "text": "新鞋必被踩脏",
            "type": "standard"
          },
          {
            "text": "抽卡永远保底",
            "type": "standard"
          },
          {
            "text": "追公交摔个劈叉",
            "type": "standard"
          },
          {
            "text": "存钱买的东西降价",
            "type": "standard"
          }
        ]
      ],
      "category": "学生",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.579Z"
    },
    "liuzi": {
      "bingoId": "liuzi",
      "title": "留子宾果",
      "creator": "系统",
      "description": "五个连成一线，恭喜你解锁全球流浪者成就",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "凌晨四点写due写到流泪",
            "type": "standard"
          },
          {
            "text": "把老干妈当传家宝",
            "type": "standard"
          },
          {
            "text": "在超市比价一小时",
            "type": "standard"
          },
          {
            "text": "被问\"什么时候回国\"就焦虑",
            "type": "standard"
          },
          {
            "text": "朋友圈有时差",
            "type": "standard"
          }
        ],
        [
          {
            "text": "学会用五种语言点菜",
            "type": "standard"
          },
          {
            "text": "租房遇到奇葩室友",
            "type": "standard"
          },
          {
            "text": "在图书馆通宵见过日出",
            "type": "standard"
          },
          {
            "text": "行李箱总超重",
            "type": "standard"
          },
          {
            "text": "给家人代购到手软",
            "type": "standard"
          }
        ],
        [
          {
            "text": "把IKEA当第二个家",
            "type": "standard"
          },
          {
            "text": "用计算器心算汇率",
            "type": "standard"
          },
          {
            "text": "遭遇过种族歧视",
            "type": "standard"
          },
          {
            "text": "靠泡面活过期末周",
            "type": "standard"
          },
          {
            "text": "在唐人街找乡愁",
            "type": "standard"
          }
        ],
        [
          {
            "text": "被当免费翻译工具人",
            "type": "standard"
          },
          {
            "text": "练就十分钟做饭技能",
            "type": "standard"
          },
          {
            "text": "收到过海关警告单",
            "type": "standard"
          },
          {
            "text": "解释过中餐不是左宗棠鸡",
            "type": "standard"
          },
          {
            "text": "在机场丢过行李",
            "type": "standard"
          }
        ],
        [
          {
            "text": "把微信当生命线",
            "type": "standard"
          },
          {
            "text": "看过急诊破产",
            "type": "standard"
          },
          {
            "text": "用VPN比用筷子熟",
            "type": "standard"
          },
          {
            "text": "对家乡菜产生执念",
            "type": "standard"
          },
          {
            "text": "练成报喜不报忧神功",
            "type": "standard"
          }
        ]
      ],
      "category": "学生",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.579Z"
    },
    "meiguoliuzi": {
      "bingoId": "meiguoliuzi",
      "title": "美国留子宾果",
      "creator": "系统",
      "description": "五个连成一线，恭喜解锁北美生存专家成就",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "在Costco买大包装",
            "type": "standard"
          },
          {
            "text": "学会假笑说I'm fine",
            "type": "standard"
          },
          {
            "text": "被黑人兄弟喊bro",
            "type": "standard"
          },
          {
            "text": "有中超会员卡",
            "type": "standard"
          },
          {
            "text": "把Thanksgiving当吃鸡日",
            "type": "standard"
          }
        ],
        [
          {
            "text": "在纽约地铁迷路",
            "type": "standard"
          },
          {
            "text": "分得清各种咖啡尺寸",
            "type": "standard"
          },
          {
            "text": "被小费文化逼疯",
            "type": "standard"
          },
          {
            "text": "在奥特莱斯代购",
            "type": "standard"
          },
          {
            "text": "把老干妈当奢侈品",
            "type": "standard"
          }
        ],
        [
          {
            "text": "遭遇过零元购",
            "type": "standard"
          },
          {
            "text": "学会用Y'all装本地人",
            "type": "standard"
          },
          {
            "text": "在图书馆通宵写paper",
            "type": "standard"
          },
          {
            "text": "被警察pull over",
            "type": "standard"
          },
          {
            "text": "买过天价教科书",
            "type": "standard"
          }
        ],
        [
          {
            "text": "在黄石公园遇熊",
            "type": "standard"
          },
          {
            "text": "把亚米网当救星",
            "type": "standard"
          },
          {
            "text": "被问是不是日本人",
            "type": "standard"
          },
          {
            "text": "在拉斯维加斯输过钱",
            "type": "standard"
          },
          {
            "text": "把中餐外卖当生命线",
            "type": "standard"
          }
        ],
        [
          {
            "text": "参加过于热情的教会活动",
            "type": "standard"
          },
          {
            "text": "有学校周边帽衫",
            "type": "standard"
          },
          {
            "text": "被流浪汉要过钱",
            "type": "standard"
          },
          {
            "text": "学会用Bro/Dude称呼",
            "type": "standard"
          },
          {
            "text": "把\"It is what it is\"当口头禅",
            "type": "standard"
          }
        ]
      ],
      "category": "学生",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.579Z"
    },
    "qimoka": {
      "bingoId": "qimoka",
      "title": "期末考宾果",
      "creator": "系统",
      "description": "五个连成一线，你已进入学术生存模式",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "一周学完一学期内容",
            "type": "standard"
          },
          {
            "text": "咖啡当水喝",
            "type": "standard"
          },
          {
            "text": "打印店排队到凌晨",
            "type": "standard"
          },
          {
            "text": "发现重点全没背",
            "type": "standard"
          },
          {
            "text": "在书上发现新笔记",
            "type": "standard"
          }
        ],
        [
          {
            "text": "图书馆抢座大战",
            "type": "standard"
          },
          {
            "text": "用荧光笔画成彩虹书",
            "type": "standard"
          },
          {
            "text": "梦见考试迟到惊醒",
            "type": "standard"
          },
          {
            "text": "创造记忆口诀",
            "type": "standard"
          },
          {
            "text": "向学霸借笔记被拒",
            "type": "standard"
          }
        ],
        [
          {
            "text": "发现老师划的重点是整本书",
            "type": "standard"
          },
          {
            "text": "用便利贴贴满墙",
            "type": "standard"
          },
          {
            "text": "在考场传纸条被抓",
            "type": "standard"
          },
          {
            "text": "带错准考证",
            "type": "standard"
          },
          {
            "text": "考完集体对答案",
            "type": "standard"
          }
        ],
        [
          {
            "text": "复习到呕吐",
            "type": "standard"
          },
          {
            "text": "凌晨发朋友圈哀嚎",
            "type": "standard"
          },
          {
            "text": "发现重点章节没看",
            "type": "standard"
          },
          {
            "text": "用光十支笔芯",
            "type": "standard"
          },
          {
            "text": "拜考神",
            "type": "standard"
          }
        ],
        [
          {
            "text": "考试时大脑空白",
            "type": "standard"
          },
          {
            "text": "提前交卷的都是学霸",
            "type": "standard"
          },
          {
            "text": "带小抄不敢看",
            "type": "standard"
          },
          {
            "text": "考完发誓下学期努力",
            "type": "standard"
          },
          {
            "text": "成绩出来前天天查系统",
            "type": "standard"
          }
        ]
      ],
      "category": "学生",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.579Z"
    },
    "qingchun": {
      "bingoId": "qingchun",
      "title": "热烈的青春宾果",
      "creator": "系统",
      "description": "五个连成一线，你有过很热烈难忘的青春",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "和同学一起逛商场",
            "type": "standard"
          },
          {
            "text": "去过同学家玩",
            "type": "standard"
          },
          {
            "text": "在校运会上取得好成绩",
            "type": "standard"
          },
          {
            "text": "代表班级/学校拿奖",
            "type": "standard"
          },
          {
            "text": "成绩稳在前十",
            "type": "standard"
          }
        ],
        [
          {
            "text": "用学校大屏打游戏/放视频/音乐",
            "type": "standard"
          },
          {
            "text": "和好朋友一起过过生日",
            "type": "standard"
          },
          {
            "text": "没被同学背刺过",
            "type": "standard"
          },
          {
            "text": "拿过学校的处分",
            "type": "standard"
          },
          {
            "text": "和朋友在一起干一些没头没脑的傻事",
            "type": "standard"
          }
        ],
        [
          {
            "text": "和朋友一起畅聊过人生",
            "type": "standard"
          },
          {
            "text": "有过喜欢的人",
            "type": "standard"
          },
          {
            "text": "和同桌前后桌关系很好",
            "type": "standard"
          },
          {
            "text": "和同学一起上课聊天/分享零食",
            "type": "standard"
          },
          {
            "text": "当过课代表",
            "type": "standard"
          }
        ],
        [
          {
            "text": "和同学去过KTV",
            "type": "standard"
          },
          {
            "text": "吃过学校附近地摊/小店",
            "type": "standard"
          },
          {
            "text": "在年级乃至学校都很有名",
            "type": "standard"
          },
          {
            "text": "代表年级/班级发表演讲/做主持人",
            "type": "standard"
          },
          {
            "text": "举报过如培优班之类的补课",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有个组乐队的想法",
            "type": "standard"
          },
          {
            "text": "和朋友是游戏好友并一起开黑",
            "type": "standard"
          },
          {
            "text": "在学校有同好",
            "type": "standard"
          },
          {
            "text": "有自己的精神寄托",
            "type": "standard"
          },
          {
            "text": "热爱创作(画作/诗歌/小说等)",
            "type": "standard"
          }
        ]
      ],
      "category": "学生",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.579Z"
    },
    "ribenliuzi": {
      "bingoId": "ribenliuzi",
      "title": "日本留子宾果",
      "creator": "系统",
      "description": "五个连成一线、你就是标准的日本留子",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "朋友圈发过粉色夕阳照片",
            "type": "standard"
          },
          {
            "text": "在便利店打过工",
            "type": "standard"
          },
          {
            "text": "听不懂大学或专门老师的日语",
            "type": "standard"
          },
          {
            "text": "被亲戚说过汉奸",
            "type": "standard"
          },
          {
            "text": "认识的人在小红书上被挂过",
            "type": "standard"
          }
        ],
        [
          {
            "text": "身边有同学穿山本耀司",
            "type": "standard"
          },
          {
            "text": "囤的食物过期",
            "type": "standard"
          },
          {
            "text": "在新宿駔迷路过",
            "type": "standard"
          },
          {
            "text": "在高马/大久保上过语校",
            "type": "standard"
          },
          {
            "text": "拍过留学生活vlog",
            "type": "standard"
          }
        ],
        [
          {
            "text": "叉里之前会接代购",
            "type": "standard"
          },
          {
            "text": "被私塾坑过",
            "type": "standard"
          },
          {
            "text": "免费格子",
            "type": "standard"
          },
          {
            "text": "有东北人朋友",
            "type": "standard"
          },
          {
            "text": "自己的透明伞被别人拿走",
            "type": "standard"
          }
        ],
        [
          {
            "text": "冬天去过北海道",
            "type": "standard"
          },
          {
            "text": "半夜被警报声_ (地震、警车吵醒",
            "type": "standard"
          },
          {
            "text": "喜欢二次元",
            "type": "standard"
          },
          {
            "text": "路上被日本人撞过",
            "type": "standard"
          },
          {
            "text": "出闲置被鸽过",
            "type": "standard"
          }
        ],
        [
          {
            "text": "平常都只吃中餐",
            "type": "standard"
          },
          {
            "text": "说过本来要去其他国家留学",
            "type": "standard"
          },
          {
            "text": "转运被没收过肉制品",
            "type": "standard"
          },
          {
            "text": "不吃早餐",
            "type": "standard"
          },
          {
            "text": "接过自称是大使馆的诈骗电话",
            "type": "standard"
          }
        ]
      ],
      "category": "学生",
      "tags": [
        "日本留子"
      ],
      "createdAt": "2025-07-29T01:14:01.580Z"
    },
    "tongxinweimin": {
      "bingoId": "tongxinweimin",
      "title": "童心未泯宾果",
      "creator": "系统",
      "description": "五个连成一线，恭喜你永驻快乐星球！",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "认真和玩偶开会",
            "type": "standard"
          },
          {
            "text": "踩水坑必溅最高",
            "type": "standard"
          },
          {
            "text": "收集卡通橡皮",
            "type": "standard"
          },
          {
            "text": "相信冰箱有零食精灵",
            "type": "standard"
          },
          {
            "text": "给云朵编故事",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看到泡泡机走不动路",
            "type": "standard"
          },
          {
            "text": "吃儿童套餐为玩具",
            "type": "standard"
          },
          {
            "text": "和小孩抢滑梯",
            "type": "standard"
          },
          {
            "text": "保留小学课本涂鸦",
            "type": "standard"
          },
          {
            "text": "给家电起名字",
            "type": "standard"
          }
        ],
        [
          {
            "text": "沉迷拼图/乐高",
            "type": "standard"
          },
          {
            "text": "看动画片哭得比娃惨",
            "type": "standard"
          },
          {
            "text": "坚信玩沙是顶级娱乐",
            "type": "standard"
          },
          {
            "text": "收到贴纸会狂喜",
            "type": "standard"
          },
          {
            "text": "吹风扇啊啊叫",
            "type": "standard"
          }
        ],
        [
          {
            "text": "按颜色分类糖果",
            "type": "standard"
          },
          {
            "text": "偷吃宝宝辅食",
            "type": "standard"
          },
          {
            "text": "给蚂蚁让路",
            "type": "standard"
          },
          {
            "text": "追着影子踩",
            "type": "standard"
          },
          {
            "text": "相信玩火会尿床",
            "type": "standard"
          }
        ],
        [
          {
            "text": "用吸管吹饮料冒泡",
            "type": "standard"
          },
          {
            "text": "捏泡泡纸不舍得丢",
            "type": "standard"
          },
          {
            "text": "给流浪猫编史诗身世",
            "type": "standard"
          },
          {
            "text": "看到彩虹必拍照",
            "type": "standard"
          },
          {
            "text": "至今怕黑要开灯睡",
            "type": "standard"
          }
        ]
      ],
      "category": "学生",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.580Z"
    },
    "wanmeizhongsheng": {
      "bingoId": "wanmeizhongsheng",
      "title": "完美中学生宾果",
      "creator": "系统",
      "description": "五个连成一线，你就是校园传说级人物",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "有喜欢的异性",
            "type": "standard"
          },
          {
            "text": "作业被当范本展示",
            "type": "standard"
          },
          {
            "text": "考过全班第一",
            "type": "standard"
          },
          {
            "text": "上课笔记彩色分区",
            "type": "standard"
          },
          {
            "text": "有特别厉害的科目",
            "type": "standard"
          }
        ],
        [
          {
            "text": "经常被老师在全班表扬",
            "type": "standard"
          },
          {
            "text": "单科考过满分",
            "type": "standard"
          },
          {
            "text": "和喜欢的人在一起了",
            "type": "standard"
          },
          {
            "text": "被异性表白过",
            "type": "standard"
          },
          {
            "text": "拒绝早恋专心学习",
            "type": "standard"
          }
        ],
        [
          {
            "text": "当过班长",
            "type": "standard"
          },
          {
            "text": "运动会获得过奖牌/奖状",
            "type": "standard"
          },
          {
            "text": "艺术节上台表演",
            "type": "standard"
          },
          {
            "text": "当过课代表",
            "type": "standard"
          },
          {
            "text": "和好友开过黑",
            "type": "standard"
          }
        ],
        [
          {
            "text": "有特别要好的朋友",
            "type": "standard"
          },
          {
            "text": "没有特别差的科目",
            "type": "standard"
          },
          {
            "text": "有拿手的体育项目",
            "type": "standard"
          },
          {
            "text": "其他年级有很多人认识你",
            "type": "standard"
          },
          {
            "text": "放学后有社团/娱乐活动",
            "type": "standard"
          }
        ],
        [
          {
            "text": "在学校大会上发言",
            "type": "standard"
          },
          {
            "text": "班里有和自己相关的梗",
            "type": "standard"
          },
          {
            "text": "经常去同学家玩",
            "type": "standard"
          },
          {
            "text": "过生日有朋友送礼物",
            "type": "standard"
          },
          {
            "text": "帮老师改过作业/试卷",
            "type": "standard"
          }
        ]
      ],
      "category": "学生",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.580Z"
    },
    "xianggangliuzi": {
      "bingoId": "xianggangliuzi",
      "title": "香港留子宾果",
      "creator": "系统",
      "description": "五个连成一线，你已修炼成港岛生存大师",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "在5平米房间学会收纳",
            "type": "standard"
          },
          {
            "text": "掌握茶餐厅暗语",
            "type": "standard"
          },
          {
            "text": "被冷气冻出老寒腿",
            "type": "standard"
          },
          {
            "text": "挤过早晚高峰地铁",
            "type": "standard"
          },
          {
            "text": "用八达通比用钱熟练",
            "type": "standard"
          }
        ],
        [
          {
            "text": "在重庆大厦迷过路",
            "type": "standard"
          },
          {
            "text": "学会粤语粗口",
            "type": "standard"
          },
          {
            "text": "被台风困在屋里",
            "type": "standard"
          },
          {
            "text": "在维港拍过夜景",
            "type": "standard"
          },
          {
            "text": "吐槽过天价水果",
            "type": "standard"
          }
        ],
        [
          {
            "text": "参加过抗议活动",
            "type": "standard"
          },
          {
            "text": "在图书馆抢插座",
            "type": "standard"
          },
          {
            "text": "被菲佣姐姐照顾过",
            "type": "standard"
          },
          {
            "text": "学会用\"唔该\"开路",
            "type": "standard"
          },
          {
            "text": "有深圳口岸通关经验",
            "type": "standard"
          }
        ],
        [
          {
            "text": "在旺角街头被推销",
            "type": "standard"
          },
          {
            "text": "吃遍711车仔面",
            "type": "standard"
          },
          {
            "text": "被繁体字作业逼疯",
            "type": "standard"
          },
          {
            "text": "在太平山顶挤过观景台",
            "type": "standard"
          },
          {
            "text": "买过黄道益活络油",
            "type": "standard"
          }
        ],
        [
          {
            "text": "学会用纸币不找零",
            "type": "standard"
          },
          {
            "text": "在红馆看过演唱会",
            "type": "standard"
          },
          {
            "text": "被蟑螂吓到尖叫",
            "type": "standard"
          },
          {
            "text": "吐槽过电梯速度",
            "type": "standard"
          },
          {
            "text": "把\"湿湿碎\"当口头禅",
            "type": "standard"
          }
        ]
      ],
      "category": "学生",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.581Z"
    },
    "yingguoliuzi": {
      "bingoId": "yingguoliuzi",
      "title": "英国留子宾果",
      "creator": "系统",
      "description": "五个连成一线，恭喜解锁伦敦生存专家成就",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "学会用英式假笑",
            "type": "standard"
          },
          {
            "text": "吐槽过炸鱼薯条",
            "type": "standard"
          },
          {
            "text": "在摄政街被鸽子袭击",
            "type": "standard"
          },
          {
            "text": "遭遇过罢工取消行程",
            "type": "standard"
          },
          {
            "text": "把中超当精神家园",
            "type": "standard"
          }
        ],
        [
          {
            "text": "练成雨天不打伞神功",
            "type": "standard"
          },
          {
            "text": "分得清各种口音鄙视链",
            "type": "standard"
          },
          {
            "text": "在图书馆抢不到座位",
            "type": "standard"
          },
          {
            "text": "被英国水质逼到秃头",
            "type": "standard"
          },
          {
            "text": "有Tesco会员卡",
            "type": "standard"
          }
        ],
        [
          {
            "text": "参加过于无聊的pub聚会",
            "type": "standard"
          },
          {
            "text": "学会吐槽天气开场白",
            "type": "standard"
          },
          {
            "text": "被火车延误坑过",
            "type": "standard"
          },
          {
            "text": "在博物馆打过地铺",
            "type": "standard"
          },
          {
            "text": "买过天价教材",
            "type": "standard"
          }
        ],
        [
          {
            "text": "被误认为日韩游客",
            "type": "standard"
          },
          {
            "text": "在康沃尔冻成狗",
            "type": "standard"
          },
          {
            "text": "学会用\"Cheers\"代替谢谢",
            "type": "standard"
          },
          {
            "text": "被英国菜逼成大厨",
            "type": "standard"
          },
          {
            "text": "在巨石阵拍过游客照",
            "type": "standard"
          }
        ],
        [
          {
            "text": "参加哈利波特巡礼",
            "type": "standard"
          },
          {
            "text": "有英超球队周边",
            "type": "standard"
          },
          {
            "text": "在公寓防火演习中冻醒",
            "type": "standard"
          },
          {
            "text": "学会优雅排队",
            "type": "standard"
          },
          {
            "text": "把\"Sorry\"当口头禅",
            "type": "standard"
          }
        ]
      ],
      "category": "学生",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.581Z"
    },
    "zhongerbing": {
      "bingoId": "zhongerbing",
      "title": "中二病宾果",
      "creator": "系统",
      "description": "五个连成一线，体内封印着暗夜之力！",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "对着镜子练邪魅一笑",
            "type": "standard"
          },
          {
            "text": "觉得自己有点阴暗",
            "type": "standard"
          },
          {
            "text": "总有假想敌",
            "type": "standard"
          },
          {
            "text": "突然在雨中奔跑",
            "type": "standard"
          },
          {
            "text": "有时暗念奇怪咒语",
            "type": "standard"
          }
        ],
        [
          {
            "text": "看剧时会把自己代入角色",
            "type": "standard"
          },
          {
            "text": "梦想征服天下称霸世界",
            "type": "standard"
          },
          {
            "text": "学过忍者跑",
            "type": "standard"
          },
          {
            "text": "哈利波特分院帽测试",
            "type": "standard"
          },
          {
            "text": "幻想被异世界召唤",
            "type": "standard"
          }
        ],
        [
          {
            "text": "给技能取过超长名字",
            "type": "standard"
          },
          {
            "text": "觉得自己独一无二",
            "type": "standard"
          },
          {
            "text": "内心嘲笑哪些不懂自己的人",
            "type": "standard"
          },
          {
            "text": "日常会给自己一个人设",
            "type": "standard"
          },
          {
            "text": "“今天的风儿甚是喧嚣”",
            "type": "standard"
          }
        ],
        [
          {
            "text": "觉得伤口是勋章",
            "type": "standard"
          },
          {
            "text": "习惯性假装自己很正常",
            "type": "standard"
          },
          {
            "text": "偷偷练习结印手势",
            "type": "standard"
          },
          {
            "text": "把楼梯当魔王城堡爬",
            "type": "standard"
          },
          {
            "text": "男人/女人只会影响我拔剑的速度",
            "type": "standard"
          }
        ],
        [
          {
            "text": "对电闪雷鸣兴奋",
            "type": "standard"
          },
          {
            "text": "“错的不是我，是这个世界”",
            "type": "standard"
          },
          {
            "text": "背包的时候会往肩上一甩",
            "type": "standard"
          },
          {
            "text": "上课突然自言自语",
            "type": "standard"
          },
          {
            "text": "爱猫人士",
            "type": "standard"
          }
        ]
      ],
      "category": "学生",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.581Z"
    },
    "zhognxueshengweiji": {
      "bingoId": "zhognxueshengweiji",
      "title": "中学生违纪宾果",
      "creator": "系统",
      "description": "五个连成一线，你该退学了",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {
            "text": "考试作弊",
            "type": "standard"
          },
          {
            "text": "开黄腔,颜色笑话",
            "type": "standard"
          },
          {
            "text": "上课玩手机",
            "type": "standard"
          },
          {
            "text": "旷课",
            "type": "standard"
          },
          {
            "text": "不写作业",
            "type": "standard"
          }
        ],
        [
          {
            "text": "校内抽烟",
            "type": "standard"
          },
          {
            "text": "染发,或奇装异服",
            "type": "standard"
          },
          {
            "text": "学校里点外卖",
            "type": "standard"
          },
          {
            "text": "逃晚自习",
            "type": "standard"
          },
          {
            "text": "不穿校服",
            "type": "standard"
          }
        ],
        [
          {
            "text": "谈恋爱",
            "type": "standard"
          },
          {
            "text": "上课睡觉",
            "type": "standard"
          },
          {
            "text": "免费格子",
            "type": "standard"
          },
          {
            "text": "美甲/化妆上学",
            "type": "standard"
          },
          {
            "text": "辱骂老师",
            "type": "standard"
          }
        ],
        [
          {
            "text": "和同学打架",
            "type": "standard"
          },
          {
            "text": "进入校内不允许进入的区域",
            "type": "standard"
          },
          {
            "text": "扰乱课堂/自戴首饰上学习秩序",
            "type": "standard"
          },
          {
            "text": "不去学校",
            "type": "standard"
          },
          {
            "text": "去酒吧",
            "type": "standard"
          }
        ],
        [
          {
            "text": "去网吧上网",
            "type": "standard"
          },
          {
            "text": "旗不参加",
            "type": "standard"
          },
          {
            "text": "破坏学校公共设施",
            "type": "standard"
          },
          {
            "text": "抄作业",
            "type": "standard"
          },
          {
            "text": "用班级电脑打游戏",
            "type": "standard"
          }
        ]
      ],
      "category": "学生",
      "tags": [],
      "createdAt": "2025-07-29T01:14:01.581Z"
    },
    "keyanren": {
      "bingoId": "keyanren",
      "title": "科研人宾果",
      "creator": "系统",
      "description": "五个连成一线,你是一个苦逼科研人",
      "gridSize": {
        "rows": 5,
        "cols": 5
      },
      "gridContent": [
        [
          {"text": "腰椎肩颈的各种疾病", "type": "standard"},
          {"text": "生命在于咖啡", "type": "standard"},
          {"text": "不刷社交媒体", "type": "standard"},
          {"text": "睡眠不足", "type": "standard"},
          {"text": "还在靠父母救济", "type": "standard"}
        ],
        [
          {"text": "拒信收藏家", "type": "standard"},
          {"text": "自我抄袭专家", "type": "standard"},
          {"text": "把各个期刊的名字挂在嘴边", "type": "standard"},
          {"text": "每天读文献", "type": "standard"},
          {"text": "资深短话长说专家", "type": "standard"}
        ],
        [
          {"text": "没有稳定的作息", "type": "standard"},
          {"text": "邮箱里有800封未读邮件", "type": "standard"},
          {"text": "收藏了一大堆文献(但都没看)", "type": "standard"},
          {"text": "很难保持健身习惯", "type": "standard"},
          {"text": "很少参加社交活动", "type": "standard"}
        ],
        [
          {"text": "讲课前一天光速生成课程大纲", "type": "standard"},
          {"text": "觉得实验室/办公室是第二个家", "type": "standard"},
          {"text": "没有时间陪家人", "type": "standard"},
          {"text": "休息日能不出门就不出门", "type": "standard"},
          {"text": "'好的老师'", "type": "standard"}
        ],
        [
          {"text": "随地大小睡", "type": "standard"},
          {"text": "不喜欢聚会/团建", "type": "standard"},
          {"text": "梦到过paper被accept", "type": "standard"},
          {"text": "不会花时间打扮", "type": "standard"},
          {"text": "曾经在实验室过夜", "type": "standard"}
        ]
      ],
      "category": "学生",
      "tags": ["科研", "学术"],
      "createdAt": "2025-01-21T10:06:00.000Z"
    }
  }
};

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
  saveUserCreatedGames,
  bingos
};
