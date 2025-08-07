"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface SavedBingo {
  id: string
  title: string
  creator?: string
  gridSize: { rows: number; columns: number }
  cells: Array<{ text: string; selected?: boolean }>
  createdAt: string
  completedAt?: string
}

// Mock data for created bingos
const createdBingos: SavedBingo[] = [
  {
    id: "created-1",
    title: "古典音乐宾果",
    gridSize: { rows: 5, columns: 5 },
    cells: Array(25)
      .fill(null)
      .map((_, i) => ({
        text: i === 12 ? "免费格子" : `音乐项目 ${i + 1}`,
        selected: false,
      })),
    createdAt: "2024-01-15",
  },
  {
    id: "created-2",
    title: "旅行体验宾果",
    gridSize: { rows: 4, columns: 4 },
    cells: Array(16)
      .fill(null)
      .map((_, i) => ({
        text: `旅行体验 ${i + 1}`,
        selected: false,
      })),
    createdAt: "2024-01-10",
  },
  {
    id: "created-3",
    title: "美食探索宾果",
    gridSize: { rows: 5, columns: 5 },
    cells: Array(25)
      .fill(null)
      .map((_, i) => ({
        text: i === 12 ? "免费格子" : `美食项目 ${i + 1}`,
        selected: false,
      })),
    createdAt: "2024-01-08",
  },
]

// Mock data for completed bingos
const completedBingos: SavedBingo[] = [
  {
    id: "completed-1",
    title: "社会指数宾果",
    creator: "社交达人",
    gridSize: { rows: 5, columns: 5 },
    cells: [
      { text: "不玩王者吃鸡", selected: true },
      { text: "不喜欢蹦迪、ktv", selected: true },
      { text: "不刷短视频", selected: false },
      { text: "休息日喜欢宅在家", selected: true },
      { text: "天天玩qq", selected: false },
      { text: "很少发朋友圈", selected: false },
      { text: "没纹身", selected: true },
      { text: "没去过酒吧", selected: false },
      { text: "不追星", selected: true },
      { text: "不嗑磕郎", selected: true },
      { text: "异性朋友不超过2个", selected: false },
      { text: "没染过发", selected: false },
      { text: "免费格子", selected: true },
      { text: "过年不打麻将扑克", selected: false },
      { text: "不喜欢综艺、看剧", selected: false },
      { text: "不爱看电影", selected: false },
      { text: "觉得一个人出门吃饭完全没问题", selected: true },
      { text: "没谈过恋爱", selected: false },
      { text: "不抽烟", selected: true },
      { text: "没在朋友圈发过自拍", selected: false },
      { text: "没有撸长的运动", selected: false },
      { text: "喜欢二次元", selected: true },
      { text: "出门习惯性戴口罩", selected: false },
      { text: "没有穿过拖鞋出门", selected: true },
      { text: "不戴手表，顶链之类的东西", selected: false },
    ],
    createdAt: "2024-01-12",
    completedAt: "2024-01-14",
  },
  {
    id: "completed-2",
    title: "二次元指数宾果",
    creator: "小明",
    gridSize: { rows: 5, columns: 5 },
    cells: Array(25)
      .fill(null)
      .map((_, i) => ({
        text: i === 12 ? "免费格子" : `二次元项目 ${i + 1}`,
        selected: Math.random() > 0.6,
      })),
    createdAt: "2024-01-05",
    completedAt: "2024-01-07",
  },
  {
    id: "completed-3",
    title: "运动健身宾果",
    creator: "健身教练",
    gridSize: { rows: 4, columns: 4 },
    cells: Array(16)
      .fill(null)
      .map((_, i) => ({
        text: `健身项目 ${i + 1}`,
        selected: Math.random() > 0.5,
      })),
    createdAt: "2024-01-01",
    completedAt: "2024-01-03",
  },
]

export default function SavedBingosPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<"created" | "completed">("created")

  const handleBack = () => {
    router.back()
  }

  const handleBingoClick = (bingoId: string) => {
    router.push(`/game/${bingoId}`)
  }

  const currentBingos = activeTab === "created" ? createdBingos : completedBingos

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center">
        <button onClick={handleBack} className="p-2 -ml-2 text-gray-600 hover:text-coral-500 transition-colors">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="flex-1 text-center text-lg font-semibold text-gray-900">已保存宾果</h1>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100 mt-4">
        <div className="flex justify-center gap-12 px-8">
          <button
            onClick={() => setActiveTab("created")}
            className={`py-4 px-12 text-center font-medium transition-colors relative ${
              activeTab === "created" ? "text-coral-500" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            我设计的宾果
            {activeTab === "created" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-coral-500 rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`py-4 px-12 text-center font-medium transition-colors relative ${
              activeTab === "completed" ? "text-coral-500" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            我填写的宾果
            {activeTab === "completed" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-coral-500 rounded-full" />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-5">
        {currentBingos.length > 0 ? (
          <div className={`grid gap-4 ${activeTab === "completed" ? "grid-cols-1" : "grid-cols-2"}`}>
            {currentBingos.map((bingo) => (
              <div
                key={bingo.id}
                onClick={() => handleBingoClick(bingo.id)}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-[0.98]"
              >
                {/* Bingo Title */}
                <div className="mb-3">
                  <h3 className="font-semibold text-gray-900 text-sm truncate">{bingo.title}</h3>
                  {bingo.creator && <p className="text-xs text-gray-500 mt-1">制作人：{bingo.creator}</p>}
                </div>

                {/* Bingo Grid Thumbnail */}
                <div className="mb-3">
                  <div
                    className="grid gap-0.5 w-full aspect-square"
                    style={{
                      gridTemplateColumns: `repeat(${bingo.gridSize.columns}, minmax(0, 1fr))`,
                      gridTemplateRows: `repeat(${bingo.gridSize.rows}, minmax(0, 1fr))`,
                    }}
                  >
                    {bingo.cells.map((cell, index) => (
                      <div
                        key={index}
                        className={`
                          text-[6px] leading-tight p-0.5 border border-gray-200 flex items-center justify-center text-center
                          ${
                            activeTab === "completed" && cell.selected
                              ? "bg-coral-500 text-white border-coral-500"
                              : "bg-white text-gray-600"
                          }
                        `}
                      >
                        <span className="truncate">
                          {cell.text && cell.text.length > 6 ? cell.text.slice(0, 4) + "..." : (cell.text || "")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>
                    {bingo.gridSize.rows}×{bingo.gridSize.columns}
                  </span>
                  <span>
                    {activeTab === "completed" && bingo.completedAt
                      ? `完成于 ${bingo.completedAt}`
                      : `创建于 ${bingo.createdAt}`}
                  </span>
                </div>

                {/* Completion Stats for completed bingos */}
                {activeTab === "completed" && (
                  <div className="mt-2 text-xs text-gray-500">
                    已选择 {bingo.cells.filter((cell) => cell.selected).length}/{bingo.cells.length} 个
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center">
                <div className="grid grid-cols-3 gap-1">
                  {Array(9)
                    .fill(null)
                    .map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 bg-gray-300 rounded-sm" />
                    ))}
                </div>
              </div>
            </div>
            <p className="text-gray-500 mb-2">
              {activeTab === "created" ? "还没有创建任何宾果" : "还没有完成任何宾果"}
            </p>
            <p className="text-sm text-gray-400">
              {activeTab === "created" ? "快去创建你的第一个宾果吧！" : "快去探索有趣的宾果游戏吧！"}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
