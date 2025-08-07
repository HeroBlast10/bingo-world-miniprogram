"use client"

import { ArrowLeft, ChevronRight, Play } from "lucide-react"
import { useRouter } from "next/navigation"

interface BingoGame {
  id: string
  title: string
  creator: string
  playerCount?: number
  difficulty?: "简单" | "中等" | "困难"
}

// Mock data for different categories
const categoryData: Record<string, { title: string; games: BingoGame[] }> = {
  hobbies: {
    title: "爱好",
    games: [
      { id: "1018", title: "二次元指数宾果", creator: "小明", playerCount: 1234 },
      { id: "1019", title: "摄影爱好者宾果", creator: "摄影师小李", playerCount: 856 },
      { id: "1020", title: "音乐发烧友宾果", creator: "音乐达人", playerCount: 2341 },
      { id: "1021", title: "运动健身宾果", creator: "健身教练", playerCount: 1876 },
      { id: "1022", title: "美食探索宾果", creator: "吃货小王", playerCount: 3421 },
      { id: "1023", title: "旅行达人宾果", creator: "环球旅行者", playerCount: 987 },
    ],
  },
  mbti: {
    title: "MBTI",
    games: [
      { id: "1024", title: "INFP专属宾果", creator: "心理学爱好者", playerCount: 2156 },
      { id: "1025", title: "ENFJ社交宾果", creator: "人际关系专家", playerCount: 1543 },
      { id: "1026", title: "INTJ策略宾果", creator: "逻辑思维者", playerCount: 876 },
    ],
  },
  lifestyle: {
    title: "生活",
    games: [
      { id: "1027", title: "都市生活宾果", creator: "城市达人", playerCount: 4321 },
      { id: "1028", title: "居家生活宾果", creator: "生活家", playerCount: 2876 },
      { id: "1029", title: "购物达人宾果", creator: "省钱小能手", playerCount: 1654 },
    ],
  },
}

export default function CategoryListPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const category = categoryData[params.slug] || { title: "未知分类", games: [] }

  const handleBack = () => {
    router.back()
  }

  const handleGameClick = (gameId: string) => {
    router.push(`/game/${gameId}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center w-full">
        <button onClick={handleBack} className="p-2 -ml-2 text-gray-600 hover:text-coral-500 transition-colors">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="flex-1 text-center text-lg font-semibold text-gray-900">{category.title}</h1>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>

      {/* Game List */}
      <div className="px-2 py-4 w-full">
        <div className="space-y-3 w-full">
          {category.games.map((game, index) => (
            <div key={game.id} className="w-full mx-0">
              <div
                onClick={() => handleGameClick(game.id)}
                className="w-full !w-full bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-[0.98] min-h-[80px] flex items-center"
                style={{ width: '100%', margin: 0 }}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex-1 min-w-0 pr-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 break-words leading-tight">{game.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 flex-wrap">
                      <span className="break-words">制作人：{game.creator}</span>
                      {game.playerCount && <span className="whitespace-nowrap">{game.playerCount.toLocaleString()} 人玩过</span>}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <button className="bg-coral-500 hover:bg-coral-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1 transition-colors whitespace-nowrap">
                      <Play className="h-4 w-4" />
                      <span>开始</span>
                    </button>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Separator line (except for last item) */}
              {index < category.games.length - 1 && <div className="h-px bg-gray-100 mx-0 my-3 w-full" />}
            </div>
          ))}
        </div>

        {/* Empty state */}
        {category.games.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-2">
              <Play className="h-12 w-12 mx-auto mb-4 opacity-50" />
            </div>
            <p className="text-gray-500">暂无游戏</p>
            <p className="text-sm text-gray-400 mt-1">快来创建第一个宾果游戏吧！</p>
          </div>
        )}
      </div>
    </div>
  )
}
