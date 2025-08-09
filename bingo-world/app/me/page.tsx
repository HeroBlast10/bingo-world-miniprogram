"use client"

import { Home, User, Edit3, Plus, Folder, Settings, ChevronRight } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function MePage() {
  const [activeTab, setActiveTab] = useState("me")
  const [isEditingNickname, setIsEditingNickname] = useState(false)
  const [nickname, setNickname] = useState("宾果玩家")
  const [tempNickname, setTempNickname] = useState(nickname)
  const router = useRouter()

  const menuItems = [
    {
      id: "create",
      title: "制作我的宾果",
      icon: Plus,
      color: "text-coral-500",
      bgColor: "bg-coral-50",
      onClick: () => router.push("/create"),
    },
    {
      id: "saved",
      title: "已保存宾果",
      icon: Folder,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      onClick: () => router.push("/saved"),
    },
    {
      id: "settings",
      title: "设置",
      icon: Settings,
      color: "text-gray-500",
      bgColor: "bg-gray-50",
      onClick: () => router.push("/settings"),
    },
  ]

  const handleEditNickname = () => {
    setTempNickname(nickname)
    setIsEditingNickname(true)
  }

  const handleSaveNickname = () => {
    setNickname(tempNickname)
    setIsEditingNickname(false)
  }

  const handleCancelEdit = () => {
    setTempNickname(nickname)
    setIsEditingNickname(false)
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (tab === "home") {
      router.push("/")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 pb-20">
        {/* Profile Section */}
        <div className="bg-white px-6 py-8">
          <div className="flex items-center space-x-4">
            {/* Avatar */}
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-coral-600 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              {/* Online indicator */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>

            {/* Nickname Section */}
            <div className="flex-1">
              {isEditingNickname ? (
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={tempNickname}
                    onChange={(e) => setTempNickname(e.target.value)}
                    className="flex-1 text-xl font-semibold text-gray-900 bg-gray-50 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-coral-500"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveNickname}
                    className="text-coral-500 hover:text-coral-600 font-medium text-sm"
                  >
                    保存
                  </button>
                  <button onClick={handleCancelEdit} className="text-gray-500 hover:text-gray-600 font-medium text-sm">
                    取消
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <h2 className="text-xl font-semibold text-gray-900">{nickname}</h2>
                  <button
                    onClick={handleEditNickname}
                    className="p-1 text-gray-400 hover:text-coral-500 transition-colors"
                  >
                    <Edit3 className="h-4 w-4" />
                  </button>
                </div>
              )}
              <p className="text-sm text-gray-500 mt-1">宾果世界探索者</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">12</div>
              <div className="text-xs text-gray-500">已完成</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">5</div>
              <div className="text-xs text-gray-500">已创建</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">28</div>
              <div className="text-xs text-gray-500">已保存</div>
            </div>
          </div>
        </div>

        {/* Menu List */}
        <div className="mt-4 px-4">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={item.id}>
                  <button
                    onClick={item.onClick}
                    className="w-full flex items-center px-6 py-4 hover:bg-gray-50 transition-colors active:bg-gray-100"
                  >
                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-full ${item.bgColor} flex items-center justify-center mr-4`}>
                      <IconComponent className={`h-5 w-5 ${item.color}`} />
                    </div>

                    {/* Title */}
                    <span className="flex-1 text-left text-gray-900 font-medium">{item.title}</span>

                    {/* Chevron */}
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </button>

                  {/* Separator line (except for last item) */}
                  {index < menuItems.length - 1 && <div className="h-px bg-gray-100 mx-6" />}
                </div>
              )
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 px-6 text-center">
          <p className="text-xs text-gray-400">宾了个果 v1.0.3</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex">
          {/* Home Tab */}
          <button
            onClick={() => handleTabChange("home")}
            className={`flex-1 py-3 px-4 flex flex-col items-center space-y-1 ${
              activeTab === "home" ? "text-coral-500" : "text-gray-400"
            }`}
          >
            <Home className="h-6 w-6" />
            <span className="text-xs font-medium">首页</span>
          </button>

          {/* Me Tab */}
          <button
            onClick={() => handleTabChange("me")}
            className={`flex-1 py-3 px-4 flex flex-col items-center space-y-1 ${
              activeTab === "me" ? "text-coral-500" : "text-gray-400"
            }`}
          >
            <User className="h-6 w-6" />
            <span className="text-xs font-medium">我的</span>
          </button>
        </div>
      </div>
    </div>
  )
}
