'use client'
import React from 'react'
import Link from 'next/link'
import { useStore } from '../lib/store'

export default function Header() {
  const { isAuthenticated, user, logout } = useStore()

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-herofinder-orange">
              herofinder
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-herofinder-orange">
              ホーム
            </Link>
            <Link href="/assessment" className="text-gray-700 hover:text-herofinder-orange">
              ヒーロー診断
            </Link>
            <Link href="/matching" className="text-gray-700 hover:text-herofinder-orange">
              マッチング
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link href="/profile" className="text-gray-700 hover:text-herofinder-orange">
                  プロフィール
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-herofinder-orange"
                >
                  ログアウト
                </button>
              </>
            ) : (
              <Link href="/auth" className="btn-primary">
                サインアップ・ログイン
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
} 