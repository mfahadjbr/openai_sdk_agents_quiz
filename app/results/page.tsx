"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useQuiz } from "@/context/quiz-context"
import { quizData } from "@/data/quiz-data"
import { CheckCircle, XCircle, Clock, Trophy, AlertTriangle, Flag, Home } from "lucide-react"

export default function ResultsPage() {
  const router = useRouter()
  const { answers, isQuizCompleted, calculateScore, countUnattempted, timeRemaining, resetQuiz } = useQuiz()
  const [user, setUser] = useState<{ name: string } | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const score = calculateScore()
  const isPassed = score >= 60
  const isTimeUp = timeRemaining === 0
  const unattemptedCount = countUnattempted()

  useEffect(() => {
    // If quiz is not completed, redirect to home
    if (!isQuizCompleted) {
      router.push("/")
      return
    }

    // Fetch current user
    async function fetchUser() {
      try {
        const response = await fetch("/api/auth/me")
        if (response.ok) {
          const data = await response.json()
          setUser(data.user)
        }
      } catch (error) {
        console.error("Failed to fetch user:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [isQuizCompleted, router])

  if (!isQuizCompleted || isLoading) {
    return (
      <div className="min-h-screen bg-[#0a1b36] text-white flex items-center justify-center">
        <div className="animate-pulse text-xl">Loading results...</div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#0a1b36] text-white flex flex-col items-center p-4">
      <div className="max-w-3xl w-full space-y-6 py-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Quiz Results</h1>
          <Link href="/dashboard">
            <Button variant="outline" className="border-purple-500 text-purple-300">
              <Home className="mr-2 h-4 w-4" /> Dashboard
            </Button>
          </Link>
        </div>

        {user && (
          <Card className="w-full bg-[#1a2a47] border-blue-500 border mb-4">
            <CardHeader className="py-3">
              <CardDescription className="text-blue-300 text-sm">Results for</CardDescription>
              <CardTitle className="text-xl text-white">{user.name}</CardTitle>
            </CardHeader>
          </Card>
        )}

        {isTimeUp ? (
          <Card className="w-full bg-[#1a2a47] border-yellow-500 border mb-8">
            <CardHeader className="flex flex-row items-center gap-4">
              <Clock className="h-12 w-12 text-yellow-500" />
              <div>
                <CardTitle className="text-2xl text-white">Time's Up!</CardTitle>
                <CardDescription className="text-yellow-300">
                  You ran out of time before completing the quiz.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        ) : (
          <Card className="w-full bg-[#1a2a47] border-purple-500 border mb-8">
            <CardHeader className="flex flex-row items-center gap-4">
              {unattemptedCount === quizData.length ? (
                <Flag className="h-12 w-12 text-yellow-500" />
              ) : isPassed ? (
                <Trophy className="h-12 w-12 text-green-500" />
              ) : (
                <AlertTriangle className="h-12 w-12 text-red-500" />
              )}
              <div>
                <CardTitle className="text-2xl text-white">
                  {unattemptedCount === quizData.length
                    ? "Quiz Submitted"
                    : isPassed
                      ? "Congratulations!"
                      : "Better Luck Next Time"}
                </CardTitle>
                <CardDescription
                  className={
                    unattemptedCount === quizData.length
                      ? "text-yellow-300"
                      : isPassed
                        ? "text-green-300"
                        : "text-red-300"
                  }
                >
                  {unattemptedCount === quizData.length
                    ? "You didn't attempt any questions."
                    : isPassed
                      ? "You passed the quiz!"
                      : "You didn't reach the passing score of 60%."}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-6">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold">{score}%</span>
                  </div>
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      className="text-gray-700 stroke-current"
                      strokeWidth="10"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                    ></circle>
                    <circle
                      className={`${
                        unattemptedCount === quizData.length
                          ? "text-yellow-500"
                          : isPassed
                            ? "text-green-500"
                            : "text-red-500"
                      } stroke-current`}
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${score * 2.51} 251`}
                      strokeDashoffset="0"
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      transform="rotate(-90 50 50)"
                    ></circle>
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-[#1a2a47] p-4 rounded-lg">
                  <p className="text-sm text-purple-300">Correct Answers</p>
                  <p className="text-2xl font-bold text-green-400">
                    {answers.filter((answer, index) => answer === quizData[index].correctAnswer).length}
                  </p>
                </div>
                <div className="bg-[#1a2a47] p-4 rounded-lg">
                  <p className="text-sm text-purple-300">Incorrect Answers</p>
                  <p className="text-2xl font-bold text-red-400">
                    {
                      answers.filter((answer, index) => answer !== null && answer !== quizData[index].correctAnswer)
                        .length
                    }
                  </p>
                </div>
                <div className="bg-[#1a2a47] p-4 rounded-lg">
                  <p className="text-sm text-purple-300">Not Attempted</p>
                  <p className="text-2xl font-bold text-yellow-400">{unattemptedCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <h2 className="text-2xl font-semibold mt-8 mb-4">Detailed Results</h2>

        <Accordion type="single" collapsible className="w-full">
          {quizData.map((question, index) => {
            const userAnswer = answers[index]
            const isCorrect = userAnswer === question.correctAnswer
            const isAnswered = userAnswer !== null

            return (
              <AccordionItem key={question.id} value={`question-${question.id}`} className="border-purple-800">
                <AccordionTrigger className="text-left hover:no-underline hover:bg-[#2a0f4a] px-4 py-2 rounded-t-lg">
                  <div className="flex items-center gap-3">
                    {isAnswered ? (
                      isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      )
                    ) : (
                      <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    )}
                    <span className="text-sm md:text-base">
                      Question {index + 1}: {question.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-[#2a0f4a] p-4 rounded-b-lg">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {Object.entries(question.options).map(([key, value]) => (
                        <div
                          key={key}
                          className={`p-3 rounded-lg border ${
                            key === question.correctAnswer
                              ? "border-green-500 bg-green-500/10"
                              : userAnswer === key && userAnswer !== question.correctAnswer
                                ? "border-red-500 bg-red-500/10"
                                : "border-purple-800"
                          }`}
                        >
                          <span className="font-semibold mr-2">{key.toUpperCase()})</span> {value}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 p-4 bg-purple-900/30 rounded-lg">
                      <h4 className="font-semibold mb-2">Concept:</h4>
                      <p className="text-purple-200">{question.concept}</p>
                    </div>

                    {isAnswered && !isCorrect && (
                      <div className="p-3 bg-red-900/20 border border-red-800 rounded-lg">
                        <p className="text-red-300">
                          <span className="font-semibold">Your answer:</span> {userAnswer?.toUpperCase()}){" "}
                          {question.options[userAnswer as keyof typeof question.options]}
                        </p>
                        <p className="text-green-300 mt-1">
                          <span className="font-semibold">Correct answer:</span> {question.correctAnswer.toUpperCase()}){" "}
                          {question.options[question.correctAnswer as keyof typeof question.options]}
                        </p>
                      </div>
                    )}

                    {!isAnswered && (
                      <div className="p-3 bg-yellow-900/20 border border-yellow-800 rounded-lg">
                        <p className="text-yellow-300 font-bold">
                          <span className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            Not Attempted
                          </span>
                        </p>
                        <p className="text-green-300 mt-1">
                          <span className="font-semibold">Correct answer:</span> {question.correctAnswer.toUpperCase()}){" "}
                          {question.options[question.correctAnswer as keyof typeof question.options]}
                        </p>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>

        <div className="flex justify-center gap-4 mt-8">
          <Link href="/dashboard">
            <Button variant="outline" className="border-purple-500 text-purple-300">
              <Home className="mr-2 h-4 w-4" /> Dashboard
            </Button>
          </Link>
          <Link href="/quiz">
            <Button onClick={resetQuiz} className="bg-purple-600 hover:bg-purple-700 text-white">
              Try Again
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
