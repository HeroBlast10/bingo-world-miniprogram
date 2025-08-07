"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

interface BingoCell {
  id: number
  text: string
}

const gridSizeOptions = [
  { value: 4, label: "4x4" },
  { value: 5, label: "5x5" },
  { value: 6, label: "6x6" },
]

export default function CreateBingoPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("5个连成一线，你就是游戏高手")
  const [rows, setRows] = useState(5)
  const [columns, setColumns] = useState(5)
  const [showCredit, setShowCredit] = useState(true)
  const [cells, setCells] = useState<BingoCell[]>([])
  const [editingCell, setEditingCell] = useState<number | null>(null)

  // Initialize cells when grid size changes
  useEffect(() => {
    const totalCells = rows * columns
    const newCells: BingoCell[] = []

    for (let i = 0; i < totalCells; i++) {
      const existingCell = cells[i]
      newCells.push({
        id: i,
        text: existingCell?.text || "",
      })
    }

    setCells(newCells)
  }, [rows, columns])

  const handleBack = () => {
    router.back()
  }

  const handleDone = () => {
    // Validate and save the bingo
    if (!title.trim()) {
      alert("请输入宾果标题")
      return
    }

    const filledCells = cells.filter((cell) => cell.text.trim()).length
    if (filledCells < Math.floor(cells.length / 2)) {
      alert("请至少填写一半的格子内容")
      return
    }

    console.log("Creating bingo:", {
      title,
      description,
      rows,
      columns,
      showCredit,
      cells,
    })

    // Navigate back or to success page
    router.back()
  }

  const updateCell = (cellId: number, text: string) => {
    setCells((prev) => prev.map((cell) => (cell.id === cellId ? { ...cell, text } : cell)))
  }

  const handleGridSizeChange = (dimension: "rows" | "columns", value: number) => {
    if (dimension === "rows") {
      setRows(value)
    } else {
      setColumns(value)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <button onClick={handleBack} className="p-2 -ml-2 text-gray-600 hover:text-coral-500 transition-colors">
          <ArrowLeft className="h-6 w-6" />
        </button>

        <h1 className="text-lg font-semibold text-gray-900">创建我的宾果</h1>

        <button
          onClick={handleDone}
          className="bg-coral-500 hover:bg-coral-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
        >
          完成
        </button>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Form Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-6">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">宾果标题</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="给你的宾果起个有趣的名字"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors"
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">说明</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="为你的宾果添加说明，比如游戏规则或有趣的描述"
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors resize-none"
            />
          </div>

          {/* Grid Size Controls */}
          <div className="grid grid-cols-2 gap-4">
            {/* Rows */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">行数</label>
              <div className="flex space-x-2">
                {gridSizeOptions.map((option) => (
                  <button
                    key={`rows-${option.value}`}
                    onClick={() => handleGridSizeChange("rows", option.value)}
                    className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${
                      rows === option.value
                        ? "bg-coral-500 text-white border-coral-500"
                        : "bg-white text-gray-700 border-gray-200 hover:border-coral-300"
                    }`}
                  >
                    {option.label.split("x")[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Columns */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">列数</label>
              <div className="flex space-x-2">
                {gridSizeOptions.map((option) => (
                  <button
                    key={`columns-${option.value}`}
                    onClick={() => handleGridSizeChange("columns", option.value)}
                    className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${
                      columns === option.value
                        ? "bg-coral-500 text-white border-coral-500"
                        : "bg-white text-gray-700 border-gray-200 hover:border-coral-300"
                    }`}
                  >
                    {option.label.split("x")[1]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Credit Toggle */}
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700">在标题下方显示我的昵称</label>
            <button
              onClick={() => setShowCredit(!showCredit)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                showCredit ? "bg-coral-500" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  showCredit ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Preview Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">预览</h3>

          {/* Preview Header */}
          <div className="text-center mb-4">
            <h4 className="text-xl font-bold text-gray-900">{title || "宾果标题"}</h4>
            {showCredit && <p className="text-sm text-gray-500 mt-1">制作人：宾果玩家</p>}
            <p className="text-xs text-gray-400 mt-2">{description}</p>
          </div>

          {/* Grid Preview */}
          <div
            className="grid gap-2 mx-auto max-w-sm"
            style={{
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
            }}
          >
            {cells.map((cell) => (
              <div key={cell.id} className="aspect-square">
                {editingCell === cell.id ? (
                  <textarea
                    value={cell.text}
                    onChange={(e) => updateCell(cell.id, e.target.value)}
                    onBlur={() => setEditingCell(null)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        setEditingCell(null)
                      }
                    }}
                    placeholder="点击填写"
                    className="w-full h-full p-2 text-xs border border-coral-500 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-coral-500"
                    autoFocus
                  />
                ) : (
                  <button
                    onClick={() => setEditingCell(cell.id)}
                    className="w-full h-full p-2 text-xs border border-gray-200 rounded-lg hover:border-coral-300 transition-colors text-left"
                  >
                    {cell.text || <span className="text-gray-400">点击填写</span>}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Grid Info */}
          <div className="mt-4 text-center text-sm text-gray-500">
            {rows} × {columns} 网格 · {cells.filter((cell) => cell.text.trim()).length}/{cells.length} 已填写
          </div>
        </div>
      </div>
    </div>
  )
}
