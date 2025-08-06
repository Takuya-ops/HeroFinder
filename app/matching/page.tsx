'use client'
import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useStore } from '../../lib/store'

const mockOpportunities = [
  {
    id: 1,
    title: '地域清掃活動',
    organization: '大阪市環境局',
    description: '大阪万博会場周辺の清掃活動に参加しませんか？環境保護に関心がある方におすすめです。',
    category: '環境問題',
    location: '大阪市',
    date: '2025年2月15日',
    duration: '2時間',
    participants: '10名',
    skills: ['体力', '環境への関心'],
    match: 95
  },
  {
    id: 2,
    title: '子供向け教育支援',
    organization: '関西教育支援会',
    description: '小学生向けの学習支援ボランティアを募集しています。教育に関心がある方歓迎です。',
    category: '児童福祉',
    location: '大阪市',
    date: '2025年2月20日',
    duration: '3時間',
    participants: '5名',
    skills: ['教育', 'コミュニケーション'],
    match: 87
  },
  {
    id: 3,
    title: '多文化交流イベント',
    organization: '国際交流協会',
    description: '外国人観光客との交流イベントのサポートスタッフを募集しています。',
    category: '多様性',
    location: '大阪市',
    date: '2025年2月25日',
    duration: '4時間',
    participants: '8名',
    skills: ['語学', '国際感覚'],
    match: 78
  }
]

export default function MatchingPage() {
  const { user, assessmentData } = useStore()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showDetails, setShowDetails] = useState<number | null>(null)

  const filteredOpportunities = selectedCategory === 'all' 
    ? mockOpportunities 
    : mockOpportunities.filter(op => op.category === selectedCategory)

  const handleApply = (opportunityId: number) => {
    alert(`ボランティア活動に応募しました！（ID: ${opportunityId}）`)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              マッチング結果
            </h1>
            <p className="text-gray-600 mb-6">
              あなたの診断結果に基づいて、おすすめのボランティア活動をご紹介します。
            </p>
            
            {/* Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === 'all'
                    ? 'bg-herofinder-orange text-white'
                    : 'bg-white text-gray-700 border border-gray-300'
                }`}
              >
                すべて
              </button>
              {['環境問題', '児童福祉', '多様性', '平和活動', '地域貢献'].map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-herofinder-orange text-white'
                      : 'bg-white text-gray-700 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {opportunity.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {opportunity.organization}
                    </p>
                    <span className="inline-block bg-herofinder-orange text-white px-2 py-1 rounded-full text-xs">
                      {opportunity.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                      {opportunity.match}% マッチ
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 text-sm">
                  {opportunity.description}
                </p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">開催日:</span>
                    <span className="font-medium">{opportunity.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">時間:</span>
                    <span className="font-medium">{opportunity.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">場所:</span>
                    <span className="font-medium">{opportunity.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">募集人数:</span>
                    <span className="font-medium">{opportunity.participants}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">求められるスキル:</p>
                  <div className="flex flex-wrap gap-1">
                    {opportunity.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setShowDetails(showDetails === opportunity.id ? null : opportunity.id)}
                    className="flex-1 btn-secondary text-sm"
                  >
                    {showDetails === opportunity.id ? '詳細を閉じる' : '詳細を見る'}
                  </button>
                  <button
                    onClick={() => handleApply(opportunity.id)}
                    className="flex-1 btn-primary text-sm"
                  >
                    応募する
                  </button>
                </div>

                {showDetails === opportunity.id && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold mb-2">活動詳細</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      この活動では、{opportunity.category}に関する取り組みを行います。
                      参加者同士で協力しながら、地域社会に貢献することができます。
                    </p>
                    <div className="text-sm">
                      <p><strong>持参品:</strong> 動きやすい服装、タオル、飲み物</p>
                      <p><strong>集合場所:</strong> 大阪万博会場前</p>
                      <p><strong>連絡先:</strong> {opportunity.organization}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredOpportunities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">選択されたカテゴリに該当する活動が見つかりませんでした。</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
} 