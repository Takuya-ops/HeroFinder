'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useStore } from '../../lib/store'

const questions = [
  {
    id: 1,
    title: '今のあなたに一番近いものを教えてください',
    subtitle: 'Which age group are you in?',
    options: [
      { value: 'below12', label: '小学生以下 (below 12 yrs old)' },
      { value: 'highschool', label: '中高生 (high school)' },
      { value: 'university', label: '大学・大学院生 (Undergrad/grad)' },
      { value: 'adult20s', label: '社会人 (20-30\'s)' },
      { value: 'adult40s', label: '社会人 (40-50\'s)' },
      { value: 'adult60s', label: '社会人 (60-70\'s)' },
      { value: 'adult80s', label: '社会人 (80\'s and beyond)' },
      { value: 'nocomment', label: '答えたくない (No comment)' }
    ],
    type: 'single'
  },
  {
    id: 2,
    title: '社会のために役立つ活動をして得たいものは？（複数可）',
    subtitle: 'What incentivise you to be engaged in social giving? (multiple)',
    options: [
      { value: 'fulfillment', label: '充足感・幸福感\nI want to feel good!' },
      { value: 'networking', label: '人とのつながりや新たな経験\nI want to expand network/exp' },
      { value: 'impact', label: '社会への貢献やインパクト\nI want to make impact' },
      { value: 'application', label: '学校や就職に活かす実績\nSchool or job application' },
      { value: 'none', label: 'あてはまらない\nNone of the above' }
    ],
    type: 'multiple'
  },
  {
    id: 3,
    title: 'あなたの得意なことを一つ選んでください',
    subtitle: 'Choose one that you are good at.',
    options: [
      { value: 'empathy', label: '共感力\n人に共感できる\nI have empathy' },
      { value: 'creativity', label: '創造力\n何かを作り出す\nI am creative' },
      { value: 'listening', label: '傾聴力\n人の話を聞く\nI listen to others' },
      { value: 'collaboration', label: '強調力\n力を合わせる\nI am collaborative' },
      { value: 'leadership', label: '統率力\n人を引っ張る\nI lead others' },
      { value: 'skip', label: '回答しない\nSkip' }
    ],
    type: 'single'
  },
  {
    id: 4,
    title: 'あなたが習得したいことを一つ選んでください',
    subtitle: 'Choose one that you want to be good at.',
    options: [
      { value: 'empathy', label: '共感力\n人に共感できる\nI have empathy' },
      { value: 'creativity', label: '創造力\n何かを作り出す\nI am creative' },
      { value: 'listening', label: '傾聴力\n人の話を聞く\nI listen to others' },
      { value: 'collaboration', label: '強調力\n力を合わせる\nI am collaborative' },
      { value: 'leadership', label: '統率力\n人を引っ張る\nI lead others' },
      { value: 'skip', label: '回答しない\nSkip' }
    ],
    type: 'single'
  },
  {
    id: 5,
    title: 'あなたが関心のあることやってみたいことは何ですか？',
    subtitle: 'What is your area of concerns?',
    options: [
      { value: 'environment', label: '環境問題\nちきゅうを\nたいせつに\nEnvironment and Climate Change' },
      { value: 'peace', label: '平和活動\nへいわを\nまもる\nPeace & Human Rights' },
      { value: 'community', label: '地域貢献\nじぶんの\nまちのために\nCommunity Development' },
      { value: 'children', label: '児童福祉\nこどもの\nしあわせ\nChild Welfare' },
      { value: 'diversity', label: '多様性\nみんなちがって\nいていい\nDiversity & Inclusion' },
      { value: 'skip', label: '回答しない\nSkip' }
    ],
    type: 'single'
  }
]

export default function AssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{[key: number]: string | string[]}>({})
  const router = useRouter()
  const { setAssessmentData } = useStore()

  const handleAnswer = (questionId: number, answer: string | string[]) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      // Save assessment data and redirect to results
      const assessmentData = {
        ageGroup: (answers[1] as string) || '',
        motivations: Array.isArray(answers[2]) ? answers[2] : [],
        goodAt: (answers[3] as string) || '',
        wantToLearn: (answers[4] as string) || '',
        concerns: (answers[5] as string) || ''
      }
      setAssessmentData(assessmentData)
      router.push('/results')
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const currentQ = questions[currentQuestion]
  const currentAnswer = answers[currentQ.id] || (currentQ.type === 'multiple' ? [] : '')

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-gray-200">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                HERO TEST
              </h1>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                ヒーロー診断
              </h2>
            </div>

            <div className="mb-8">
              <div className="text-center mb-6">
                <span className="inline-block bg-herofinder-orange text-white px-4 py-2 rounded-full text-lg font-bold">
                  Q{currentQ.id}.
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {currentQ.title}
              </h3>
              <p className="text-gray-600 text-center mb-6">
                {currentQ.subtitle}
              </p>

              <div className="space-y-4">
                {currentQ.options.map((option, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type={currentQ.type === 'multiple' ? 'checkbox' : 'radio'}
                      id={`option-${index}`}
                      name={`question-${currentQ.id}`}
                      value={option.value}
                      checked={
                        currentQ.type === 'multiple' 
                          ? Array.isArray(currentAnswer) && currentAnswer.includes(option.value)
                          : currentAnswer === option.value
                      }
                      onChange={(e) => {
                        if (currentQ.type === 'multiple') {
                          const currentAnswers = Array.isArray(currentAnswer) ? currentAnswer : []
                          if (e.target.checked) {
                            handleAnswer(currentQ.id, [...currentAnswers, option.value])
                          } else {
                            handleAnswer(currentQ.id, currentAnswers.filter(a => a !== option.value))
                          }
                        } else {
                          handleAnswer(currentQ.id, option.value)
                        }
                      }}
                      className="h-4 w-4 text-herofinder-orange focus:ring-herofinder-orange border-gray-300 rounded"
                    />
                    <label htmlFor={`option-${index}`} className="ml-3 text-gray-700 whitespace-pre-line">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`px-6 py-3 rounded-lg font-bold ${
                  currentQuestion === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-500 text-white hover:bg-gray-600'
                }`}
              >
                戻る
              </button>
              
              <div className="text-sm text-gray-500">
                {currentQuestion + 1} / {questions.length}
              </div>
              
              <button
                onClick={handleNext}
                className="btn-primary"
              >
                {currentQuestion === questions.length - 1 ? '結果を見る' : '次へ'}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 