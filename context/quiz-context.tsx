"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { quizData } from "@/data/quiz-data"

type QuizContextType = {
  currentQuestion: number
  answers: (string | null)[]
  timeRemaining: number
  isQuizActive: boolean
  isQuizCompleted: boolean
  quizResultId: number | null
  startQuiz: () => void
  selectAnswer: (answer: string) => void
  nextQuestion: () => void
  previousQuestion: () => void
  calculateScore: () => number
  countUnattempted: () => number
  resetQuiz: () => void
  endQuiz: () => Promise<void>
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<(string | null)[]>(Array(quizData.length).fill(null))
  const [timeRemaining, setTimeRemaining] = useState(180) // 3 minutes in seconds
  const [isQuizActive, setIsQuizActive] = useState(false)
  const [isQuizCompleted, setIsQuizCompleted] = useState(false)
  const [quizResultId, setQuizResultId] = useState<number | null>(null)
  const [startTime, setStartTime] = useState<number | null>(null)

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isQuizActive && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1)
      }, 1000)
    } else if (isQuizActive && timeRemaining === 0) {
      // Time's up
      endQuiz()
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [isQuizActive, timeRemaining])

  const startQuiz = () => {
    setIsQuizActive(true)
    setCurrentQuestion(0)
    setAnswers(Array(quizData.length).fill(null))
    setTimeRemaining(180)
    setIsQuizCompleted(false)
    setQuizResultId(null)
    setStartTime(Date.now())
  }

  const selectAnswer = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answer
    setAnswers(newAnswers)
  }

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // Last question
      endQuiz()
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let correctAnswers = 0

    quizData.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctAnswers++
      }
    })

    return Math.round((correctAnswers / quizData.length) * 100)
  }

  const countUnattempted = () => {
    return answers.filter((answer) => answer === null).length
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers(Array(quizData.length).fill(null))
    setTimeRemaining(180)
    setIsQuizActive(false)
    setIsQuizCompleted(false)
    setQuizResultId(null)
    setStartTime(null)
  }

  const endQuiz = async () => {
    setIsQuizActive(false)
    setIsQuizCompleted(true)

    // Calculate quiz statistics
    const score = calculateScore()
    const correctAnswers = answers.filter((answer, index) => answer === quizData[index].correctAnswer).length
    const incorrectAnswers = answers.filter(
      (answer, index) => answer !== null && answer !== quizData[index].correctAnswer,
    ).length
    const unattempted = countUnattempted()
    const timeTaken = startTime ? Math.floor((Date.now() - startTime) / 1000) : 180 - timeRemaining

    try {
      // Save quiz result to database
      const response = await fetch("/api/quiz/save-result", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          score,
          totalQuestions: quizData.length,
          correctAnswers,
          incorrectAnswers,
          unattempted,
          timeTaken,
          answers: answers.map((answer, index) => ({
            questionId: quizData[index].id,
            userAnswer: answer,
            isCorrect: answer === quizData[index].correctAnswer,
          })),
        }),
      })

      if (response.ok) {
        const data = await response.json()
        setQuizResultId(data.quizResultId)
      }
    } catch (error) {
      console.error("Failed to save quiz result:", error)
    }

    router.push("/results")
  }

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        answers,
        timeRemaining,
        isQuizActive,
        isQuizCompleted,
        quizResultId,
        startQuiz,
        selectAnswer,
        nextQuestion,
        previousQuestion,
        calculateScore,
        countUnattempted,
        resetQuiz,
        endQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export function useQuiz() {
  const context = useContext(QuizContext)
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider")
  }
  return context
}
