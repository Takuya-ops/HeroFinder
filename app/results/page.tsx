'use client'
import React from 'react'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useStore } from '../../lib/store'

export default function ResultsPage() {
  const { assessmentData } = useStore()

  if (!assessmentData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">診断結果が見つかりません</h1>
            <Link href="/assessment" className="btn-primary">
              診断を受ける
            </Link>
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
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                HERO TEST
              </h1>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ヒーロー診断結果
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card">
                <h3 className="text-xl font-bold mb-4">あなたのヒーロータイプ</h3>
                <div className="bg-herofinder-orange text-white p-6 rounded-lg text-center">
                  <h4 className="text-2xl font-bold mb-2">共感型ヒーロー</h4>
                  <p>人の気持ちを理解し、支援することが得意なあなたは、コミュニティサポートに向いています。</p>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4">推奨されるボランティア活動</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <h4 className="font-bold">地域コミュニティサポート</h4>
                    <p className="text-sm text-gray-600">地域の高齢者や子供たちのサポート活動</p>
                  </div>
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <h4 className="font-bold">教育支援</h4>
                    <p className="text-sm text-gray-600">学習支援や図書館活動</p>
                  </div>
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <h4 className="font-bold">福祉活動</h4>
                    <p className="text-sm text-gray-600">障がい者支援や高齢者ケア</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4">あなたの回答</h3>
                <div className="space-y-2 text-sm">
                  <div><strong>年齢層:</strong> {assessmentData.ageGroup}</div>
                  <div><strong>動機:</strong> {Array.isArray(assessmentData.motivations) ? assessmentData.motivations.join(', ') : assessmentData.motivations}</div>
                  <div><strong>得意なこと:</strong> {assessmentData.goodAt}</div>
                  <div><strong>学びたいこと:</strong> {assessmentData.wantToLearn}</div>
                  <div><strong>関心分野:</strong> {assessmentData.concerns}</div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-bold mb-4">次のステップ</h3>
                <div className="space-y-3">
                  <Link href="/matching" className="block w-full btn-primary text-center">
                    マッチングを開始する
                  </Link>
                  <Link href="/profile" className="block w-full btn-secondary text-center">
                    プロフィールを編集する
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 