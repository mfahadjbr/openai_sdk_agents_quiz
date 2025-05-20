"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Timer } from "@/components/timer"
import { QuestionCard } from "@/components/question-card"
import { useQuiz } from "@/context/quiz-context"

export default function QuizContent({ userName }: { userName: string }) {
  const router = useRouter()
  const { startQuiz, isQuizActive, isQuizCompleted } = useQuiz()

  // Start quiz when component mounts
  useEffect(() => {
      startQuiz()
  }, []) // Empty dependency array to run only once on mount

  // Handle quiz completion
  useEffect(() => {
    if (isQuizCompleted) {
      router.push("/results")
    }
  }, [isQuizCompleted, router])

  return (
    <main className="min-h-screen bg-[#0a1b36] text-white flex flex-col items-center p-4">
      <div className="max-w-3xl w-full space-y-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
          <h1 className="text-3xl font-bold order-1 w-full text-center sm:text-left sm:w-auto">
            OpenAI Agents Quiz
          </h1>
          <div className="text-purple-300 order-2 w-full text-center sm:text-right sm:w-auto">
            Welcome, {userName}
          </div>
        </div>

        <Timer />

        <QuestionCard />
      </div>
    </main>
  )
}
