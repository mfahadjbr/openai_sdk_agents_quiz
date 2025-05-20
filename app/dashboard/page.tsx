import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getCurrentUser } from "@/lib/auth"
import { getUserQuizResults } from "@/lib/db"
import { formatDate } from "@/lib/utils"
import { Trophy, Clock, BarChart } from "lucide-react"
import { LogoutButton } from "../components/LogoutButton"
import { AuthRedirect } from "./AuthRedirect"

export default async function DashboardPage() {
  console.log("Dashboard page: Checking authentication...")
  const user = await getCurrentUser()

  // If no user is found, render a client-side redirect component
  if (!user) {
    console.log("Dashboard page: No authenticated user found, redirecting to login")
    return <AuthRedirect />
  }

  console.log(`Dashboard page: User authenticated (${user.name}, ID: ${user.id})`)

  try {
    const quizResults = await getUserQuizResults(user.id)
    console.log(`Dashboard page: Fetched ${quizResults.length} quiz results`)

    return (
      <main className="min-h-screen bg-[#0a1b36] text-white">
        <header className="bg-[#1a2a47] border-b border-purple-800 p-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-0">
            <h1 className="text-2xl font-bold w-full text-center sm:text-left sm:w-auto">OpenAI Agents Quiz</h1>
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 w-full text-center sm:text-right sm:w-auto">
              <span className="text-purple-300">Welcome, {user.name}</span>
              <LogoutButton />
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Dashboard</h2>
            <Link href="/quiz">
              <Button className="bg-purple-600 hover:bg-purple-700">Take Quiz</Button>
            </Link>
          </div>

          {quizResults.length === 0 ? (
            <Card className="bg-[#1a2a47] border-purple-500 border">
              <CardHeader>
                <CardTitle className="text-white">No Quiz Results Yet</CardTitle>
                <CardDescription className="text-purple-300">
                  Take your first quiz to see your results here
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Start your first quiz to track your progress and see your performance over time.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/quiz" className="w-full">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Start Quiz</Button>
                </Link>
              </CardFooter>
            </Card>
          ) : (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Your Quiz History</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quizResults.map((result) => (
                  <Card key={result.id} className="bg-[#1a2a47] border-purple-500 border">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg text-white">Quiz Result #{result.id}</CardTitle>
                        <span className={`text-lg font-bold ${result.score >= 60 ? "text-green-400" : "text-red-400"}`}>
                          {result.score}%
                        </span>
                      </div>
                      <CardDescription className="text-purple-300">
                        Completed on {formatDate(result.completed_at)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-5 w-5 text-green-500" />
                          <div>
                            <p className="text-sm text-gray-400">Correct</p>
                            <p className="font-semibold text-white">{result.correct_answers}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <BarChart className="h-5 w-5 text-red-500" />
                          <div>
                            <p className="text-sm text-gray-400">Incorrect</p>
                            <p className="font-semibold text-white">{result.incorrect_answers}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-yellow-500" />
                          <div>
                            <p className="text-sm text-gray-400">Unattempted</p>
                            <p className="font-semibold text-white">{result.unattempted}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5 text-blue-500" />
                          <div>
                            <p className="text-sm text-gray-400">Time Taken</p>
                            <p className="font-semibold text-white">{formatTime(result.time_taken)}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className={`w-full text-center font-bold text-lg ${result.score >= 60 ? 'text-green-400' : 'text-red-400'}`}>
                        {result.score >= 60 ? 'Pass' : 'Fail'}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    )
  } catch (error) {
    console.error("Error fetching quiz results:", error)
    return (
      <div className="min-h-screen bg-[#0a1b36] text-white flex items-center justify-center">
        <Card className="w-full max-w-md bg-[#1a2a47] border-red-500 border">
          <CardHeader>
            <CardTitle>Error Loading Dashboard</CardTitle>
            <CardDescription className="text-red-300">There was a problem loading your quiz results</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              We encountered an error while trying to load your dashboard. Please try again later.
            </p>
            {process.env.NODE_ENV !== "production" && (
              <pre className="mt-4 p-2 bg-red-900/20 text-red-300 rounded text-xs overflow-auto">{String(error)}</pre>
            )}
          </CardContent>
          <CardFooter>
            <Link href="/quiz" className="w-full">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Take Quiz Instead</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
  }
}

function formatTime(seconds: number | null): string {
  if (!seconds) return "00:00"
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
}
