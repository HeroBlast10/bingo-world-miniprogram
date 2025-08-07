"use client"

import { ArrowLeft, Check } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface ColorOption {
  id: string
  name: string
  color: string
  bgColor: string
  borderColor: string
}

const colorOptions: ColorOption[] = [
  {
    id: "coral",
    name: "珊瑚粉",
    color: "text-white",
    bgColor: "bg-coral-500",
    borderColor: "border-coral-500",
  },
  {
    id: "blue",
    name: "天空蓝",
    color: "text-white",
    bgColor: "bg-blue-500",
    borderColor: "border-blue-500",
  },
  {
    id: "purple",
    name: "薰衣草紫",
    color: "text-white",
    bgColor: "bg-purple-500",
    borderColor: "border-purple-500",
  },
  {
    id: "green",
    name: "薄荷绿",
    color: "text-white",
    bgColor: "bg-green-500",
    borderColor: "border-green-500",
  },
  {
    id: "pink",
    name: "樱花粉",
    color: "text-white",
    bgColor: "bg-pink-500",
    borderColor: "border-pink-500",
  },
  {
    id: "orange",
    name: "活力橙",
    color: "text-white",
    bgColor: "bg-orange-500",
    borderColor: "border-orange-500",
  },
]

export default function SettingsPage() {
  const router = useRouter()
  const [selectedColor, setSelectedColor] = useState("coral")
  const [notifications, setNotifications] = useState(true)
  const [autoSave, setAutoSave] = useState(true)

  const handleBack = () => {
    router.back()
  }

  const handleColorSelect = (colorId: string) => {
    setSelectedColor(colorId)
    // Here you would typically save to localStorage or user preferences
    localStorage.setItem("bingoColor", colorId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center">
        <button onClick={handleBack} className="p-2 -ml-2 text-gray-600 hover:text-coral-500 transition-colors">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="flex-1 text-center text-lg font-semibold text-gray-900">设置</h1>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Bingo Color Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">宾果颜色</h3>
          <p className="text-sm text-gray-500 mb-6">选择你喜欢的宾果选中颜色</p>

          <div className="grid grid-cols-2 gap-4">
            {colorOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleColorSelect(option.id)}
                className={`relative p-4 rounded-xl border-2 transition-all ${
                  selectedColor === option.id
                    ? `${option.borderColor} bg-gray-50`
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full ${option.bgColor} flex items-center justify-center`}>
                    {selectedColor === option.id && <Check className="h-4 w-4 text-white" />}
                  </div>
                  <span className="font-medium text-gray-900">{option.name}</span>
                </div>

                {/* Preview Grid */}
                <div className="mt-3 grid grid-cols-3 gap-1">
                  {Array(9)
                    .fill(null)
                    .map((_, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded text-xs flex items-center justify-center ${
                          i === 1 || i === 4 || i === 7
                            ? `${option.bgColor} ${option.color}`
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {i === 4 ? "✓" : ""}
                      </div>
                    ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Other Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">通用设置</h3>

          {/* Notifications Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">推送通知</p>
              <p className="text-sm text-gray-500">接收新宾果和活动通知</p>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notifications ? "bg-coral-500" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  notifications ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Auto Save Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">自动保存</p>
              <p className="text-sm text-gray-500">自动保存宾果进度</p>
            </div>
            <button
              onClick={() => setAutoSave(!autoSave)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                autoSave ? "bg-coral-500" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  autoSave ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">关于</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>版本</span>
              <span>1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span>开发者</span>
              <span>宾果世界团队</span>
            </div>
            <div className="flex justify-between">
              <span>反馈</span>
              <span className="text-coral-500">联系我们</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
