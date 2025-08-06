import { create } from 'zustand'

interface User {
  id: string
  name: string
  email: string
  type: 'individual' | 'organization'
  profileData?: any
}

interface AssessmentData {
  ageGroup: string
  motivations: string[]
  goodAt: string
  wantToLearn: string
  concerns: string
}

interface AppState {
  user: User | null
  assessmentData: AssessmentData | null
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  setAssessmentData: (data: AssessmentData) => void
  logout: () => void
}

export const useStore = create<AppState>((set) => ({
  user: null,
  assessmentData: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setAssessmentData: (data) => set({ assessmentData: data }),
  logout: () => set({ user: null, assessmentData: null, isAuthenticated: false }),
})) 