"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useQuiz } from "@/context/quiz-context"
import { quizData } from "@/data/quiz-data"
import { CheckCircle, XCircle, Clock, Trophy, AlertTriangle, Flag, Home } from "lucide-react"

export default function ResultsPage() {
  const router = useRouter()
  const { answers, isQuizCompleted, calculateScore, countUnattempted, timeRemaining, resetQuiz, isPassingScore } = useQuiz()
  const [user, setUser] = useState<{ name: string } | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const score = calculateScore()
  const hasPassed = isPassingScore(score)
  const isTimeUp = timeRemaining === 0
  const unattempted = countUnattempted()

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

  useEffect(() => {
    // Redirect to dashboard if no quiz was taken
    if (score === 0) {
      router.push("/dashboard")
    }
  }, [score, router])

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

        <Card className="bg-[#1a2a47] border-purple-500 border">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Quiz Results</CardTitle>
            <CardDescription className="text-purple-300">
              {hasPassed ? "Congratulations! You've passed the quiz!" : "Keep practicing! You can do better next time."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg text-white">Your Score:</span>
                <span className={`text-2xl font-bold ${hasPassed ? "text-green-400" : "text-red-400"}`}>
                  {score}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg text-white">Status:</span>
                <span className={`text-xl font-bold ${hasPassed ? "text-green-400" : "text-red-400"}`}>
                  {hasPassed ? "PASS" : "FAIL"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg text-white">Unattempted Questions:</span>
                <span className="text-xl font-bold text-yellow-400">{unattempted}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/dashboard">
              <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-900 hover:text-white">
                Back to Dashboard
              </Button>
            </Link>
            <Button
              onClick={() => {
                resetQuiz()
                router.push("/quiz")
              }}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Try Again
            </Button>
          </CardFooter>
        </Card>

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
      </div>
    </main>
  )
}
