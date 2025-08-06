import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-herofinder-gray-light py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Herefinderのプラットフォームの概要と<br />
                魅力的なビジュアルを提供する。
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                万博でのボランティア活動を通じて、あなたの可能性を発見しましょう
              </p>
              <Link href="/assessment" className="btn-primary text-lg">
                ヒーロー診断を始める
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center mb-12">特徴リストセクション</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="feature-card text-center">
                <h3 className="text-xl font-bold mb-4">ヒーローヘッダーセクション</h3>
                <p className="text-gray-600">
                  Herefinderのプラットフォームの概要と魅力的なビジュアルを提供する。
                </p>
              </div>
              <div className="feature-card text-center">
                <h3 className="text-xl font-bold mb-4">特徴リストセクション</h3>
                <p className="text-gray-600">
                  Herefinderの主要な機能について簡潔に説明する。所要時間のマッチングサービス、デジタルバッジの収集、サステナビリティレポートの生成。
                </p>
              </div>
              <div className="feature-card text-center">
                <h3 className="text-xl font-bold mb-4">ベネフィットセクション</h3>
                <p className="text-gray-600">
                  Herefinderのサービスを利用することによるメリットを発明する。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-herofinder-orange py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">CTAセクション</h2>
            <p className="text-xl text-white mb-8">
              ユーザーを次のステップに誘導するための行動喚起（例：今すぐ登録）。
            </p>
            <Link href="/auth" className="btn-secondary">
              今すぐ始める
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 