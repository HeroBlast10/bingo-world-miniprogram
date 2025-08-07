"use client"

import { Search, Home, User, Brain, Heart, Coffee, BookOpen, MapPin, GraduationCap, Rabbit, Zap } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function BingoWorldHome() {
  const [activeTab, setActiveTab] = useState("home")
  const router = useRouter()

  const categories = [
    { id: "mbti", name: "MBTI", icon: Brain, color: "bg-purple-100 text-purple-600", slug: "mbti" },
    { id: "hobbies", name: "爱好", icon: Heart, color: "bg-pink-100 text-pink-600", slug: "hobbies" },
    { id: "lifestyle", name: "生活", icon: Coffee, color: "bg-orange-100 text-orange-600", slug: "lifestyle" },
    { id: "knowledge", name: "知识", icon: BookOpen, color: "bg-blue-100 text-blue-600", slug: "knowledge" },
    { id: "region", name: "地理", icon: MapPin, color: "bg-green-100 text-green-600", slug: "region" },
    { id: "student", name: "学生", icon: GraduationCap, color: "bg-indigo-100 text-indigo-600", slug: "student" },
    { id: "animals", name: "动物", icon: Rabbit, color: "bg-emerald-100 text-emerald-600", slug: "animals" },
    { id: "psychology", name: "心理", icon: Zap, color: "bg-yellow-100 text-yellow-600", slug: "psychology" },
  ]

  const handleCategoryClick = (slug: string) => {
    router.push(`/category/${slug}`)
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    if (tab === "me") {
      router.push("/me")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 px-4 pt-6 pb-20">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border-0 rounded-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:bg-white transition-colors"
              placeholder="搜索你感兴趣的宾果"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.slug)}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-[0.98]"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span className="text-gray-800 font-medium text-sm">{category.name}</span>
                </div>
              </div>
            )
          })}
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
