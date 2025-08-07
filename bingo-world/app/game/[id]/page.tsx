"use client"

import { ArrowLeft, Bookmark, Download, Share } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface BingoCell {
  id: number
  text: string
  selected: boolean
}

// Sample bingo data - this would typically come from an API
const sampleBingoData = {
  title: "古典音乐宾果",
  creator: "张三",
  subtitle: "五个连成一线，说明你是古典音乐爱好者",
  cells: [
    "听过贝多芬第九交响曲",
    "知道莫扎特的安魂曲",
    "去过音乐厅听音乐会",
    "会演奏一种乐器",
    "收藏黑胶唱片",
    "知道巴赫的平均律",
    "听过瓦格纳的歌剧",
    "了解古典音乐历史",
    "有最喜欢的指挥家",
    "知道四季的作曲家",
    "听过现场交响乐",
    "知道什么是奏鸣曲",
    "免费格子",
    "收藏古典音乐CD",
    "知道肖邦的夜曲",
    "了解不同乐器音色",
    "听过室内乐演出",
    "知道古典音乐流派",
    "有音乐理论基础",
    "关注古典音乐家",
    "参加过音乐节",
    "知道协奏曲形式",
    "听过歌剧演出",
    "了解音乐家生平",
    "有古典音乐启蒙",
  ],
}

export default function BingoGamePage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [bingoGrid, setBingoGrid] = useState<BingoCell[]>(
    sampleBingoData.cells.map((text, index) => ({
      id: index,
      text,
      selected: index === 12, // Center cell (free space) is pre-selected
    })),
  )

  const handleBack = () => {
    router.back()
  }

  const toggleCell = (cellId: number) => {
    // Don't allow toggling the center free space
    if (cellId === 12) return

    setBingoGrid((prev) => prev.map((cell) => (cell.id === cellId ? { ...cell, selected: !cell.selected } : cell)))
  }

  const handleSave = () => {
    console.log("Save bingo")
    // Implement save functionality
  }

  const handleDownload = () => {
    console.log("Download bingo")
    // Implement download functionality
  }

  const handleShare = () => {
    console.log("Share bingo")
    // Implement share functionality
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="flex items-center mb-2">
          <button onClick={handleBack} className="p-2 -ml-2 text-gray-600 hover:text-coral-500 transition-colors">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <div className="flex-1" />
        </div>

        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-1">{sampleBingoData.title}</h1>
          <p className="text-sm text-gray-500">制作人：{sampleBingoData.creator}</p>
          <p className="text-xs text-gray-400 mt-2">{sampleBingoData.subtitle}</p>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="flex-1 px-4 py-6 pb-24">
        {/* Bingo Grid */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="grid grid-cols-5 gap-2">
            {bingoGrid.map((cell) => (
              <button
                key={cell.id}
                onClick={() => toggleCell(cell.id)}
                className={`
                  aspect-square p-2 rounded-lg border text-xs font-medium transition-all duration-200 active:scale-95
                  ${
                    cell.selected
                      ? "bg-coral-500 text-white border-coral-500 shadow-md"
                      : "bg-white text-gray-700 border-gray-200 hover:border-coral-300"
                  }
                  ${cell.id === 12 ? "cursor-default" : "cursor-pointer"}
                `}
                disabled={cell.id === 12}
              >
                <span className="leading-tight">{cell.id === 12 ? "免费格子" : cell.text}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Game Info */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">宾果ID: {params.id}</p>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="flex justify-around">
          {/* Save Button */}
          <button
            onClick={handleSave}
            className="flex flex-col items-center space-y-1 text-gray-600 hover:text-coral-500 transition-colors"
          >
            <div className="p-2">
              <Bookmark className="h-6 w-6" />
            </div>
            <span className="text-xs font-medium">保存</span>
          </button>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="flex flex-col items-center space-y-1 text-gray-600 hover:text-coral-500 transition-colors"
          >
            <div className="p-2">
              <Download className="h-6 w-6" />
            </div>
            <span className="text-xs font-medium">下载</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="flex flex-col items-center space-y-1 text-gray-600 hover:text-coral-500 transition-colors"
          >
            <div className="p-2">
              <Share className="h-6 w-6" />
            </div>
            <span className="text-xs font-medium">分享</span>
          </button>
        </div>
      </div>
    </div>
  )
}
