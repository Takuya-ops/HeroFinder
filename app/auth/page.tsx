'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useStore } from '../../lib/store'

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'individual'
  })
  const router = useRouter()
  const { setUser } = useStore()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate authentication
    const user = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      type: formData.userType as 'individual' | 'organization'
    }
    setUser(user)
    router.push('/assessment')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {isSignUp ? 'サインアップ（初回）' : 'ログイン（2回目以降）'}
              </h2>
              <p className="text-gray-600">
                {isSignUp 
                  ? '氏・名・Email・メール送信による認証、プライバシーポリシーとT&Cチェックボックス、パスワード設定。' 
                  : 'Email・パスワードでログイン。Forget Password設定。'
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && (
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-herofinder-orange"
                    required
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-herofinder-orange"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  パスワード
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-herofinder-orange"
                  required
                />
              </div>

              {isSignUp && (
                <>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                      パスワード確認
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-herofinder-orange"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-2">
                      ユーザータイプ
                    </label>
                    <select
                      id="userType"
                      value={formData.userType}
                      onChange={(e) => setFormData({...formData, userType: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-herofinder-orange"
                    >
                      <option value="individual">個人</option>
                      <option value="organization">法人</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 text-herofinder-orange focus:ring-herofinder-orange border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                      プライバシーポリシーと利用規約に同意する
                    </label>
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full btn-primary"
              >
                {isSignUp ? '登録' : 'ログイン'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-herofinder-orange hover:text-herofinder-orange-dark"
              >
                {isSignUp ? 'すでにアカウントをお持ちの方' : '新規アカウント作成'}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 