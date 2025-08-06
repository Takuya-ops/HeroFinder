'use client'
import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useStore } from '../../lib/store'

export default function ProfilePage() {
  const { user, assessmentData } = useStore()
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: '',
    skills: '',
    interests: '',
    availability: '',
    location: ''
  })

  const handleSave = () => {
    // Save profile data (would normally send to API)
    setIsEditing(false)
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">ログインが必要です</h1>
            <p className="text-gray-600">プロフィールを見るにはログインしてください。</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                {user.type === 'individual' ? '個人プロフィール' : '法人プロフィール'}
              </h1>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={isEditing ? 'btn-secondary' : 'btn-primary'}
              >
                {isEditing ? 'キャンセル' : 'プロフィール編集'}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Basic Information */}
              <div className="card">
                <h2 className="text-xl font-bold mb-4">基本情報</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">名前</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-herofinder-orange"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">メールアドレス</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-herofinder-orange"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">自己紹介</label>
                    {isEditing ? (
                      <textarea
                        value={profileData.bio}
                        onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-herofinder-orange"
                        placeholder="自己紹介を入力してください"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.bio || '未設定'}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Skills and Interests */}
              <div className="card">
                <h2 className="text-xl font-bold mb-4">スキルと興味</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">スキル</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.skills}
                        onChange={(e) => setProfileData({...profileData, skills: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-herofinder-orange"
                        placeholder="例: プログラミング、語学、料理"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.skills || '未設定'}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">興味・関心</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.interests}
                        onChange={(e) => setProfileData({...profileData, interests: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-herofinder-orange"
                        placeholder="例: 環境問題、教育、地域貢献"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.interests || '未設定'}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">活動可能時間</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.availability}
                        onChange={(e) => setProfileData({...profileData, availability: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-herofinder-orange"
                        placeholder="例: 平日夜間、土日祝日"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.availability || '未設定'}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Assessment Results */}
              {assessmentData && (
                <div className="card">
                  <h2 className="text-xl font-bold mb-4">診断結果</h2>
                  <div className="space-y-2 text-sm">
                    <div><strong>年齢層:</strong> {assessmentData.ageGroup}</div>
                    <div><strong>動機:</strong> {Array.isArray(assessmentData.motivations) ? assessmentData.motivations.join(', ') : assessmentData.motivations}</div>
                    <div><strong>得意なこと:</strong> {assessmentData.goodAt}</div>
                    <div><strong>学びたいこと:</strong> {assessmentData.wantToLearn}</div>
                    <div><strong>関心分野:</strong> {assessmentData.concerns}</div>
                  </div>
                </div>
              )}

              {/* Badges */}
              <div className="card">
                <h2 className="text-xl font-bold mb-4">獲得バッジ</h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-herofinder-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-2">
                      🏆
                    </div>
                    <p className="text-sm">初心者バッジ</p>
                  </div>
                  <div className="text-center opacity-50">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl mx-auto mb-2">
                      🌟
                    </div>
                    <p className="text-sm">参加者バッジ</p>
                  </div>
                  <div className="text-center opacity-50">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 font-bold text-xl mx-auto mb-2">
                      💎
                    </div>
                    <p className="text-sm">エキスパートバッジ</p>
                  </div>
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleSave}
                  className="btn-primary"
                >
                  保存
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 