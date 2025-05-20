import { getCurrentUser } from "@/lib/auth"
import { getQuizResult } from "@/lib/db"
import { QuizResultView } from "./QuizResultView"
import { AuthRedirect } from "../AuthRedirect"

export default async function QuizResultPage({ params }: { params: { id: string } }) {
  const user = await getCurrentUser()

  if (!user) {
    return <AuthRedirect />
  }

  try {
    const dbResult = await getQuizResult(params.id)
    
    if (!dbResult) {
      return (
        <div className="min-h-screen bg-[#0a1b36] text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Quiz Result Not Found</h1>
            <p className="text-gray-400">The quiz result you're looking for doesn't exist.</p>
          </div>
        </div>
      )
    }

    const result = {
      id: dbResult.id.toString(),
      user_id: dbResult.user_id.toString(),
      score: dbResult.score,
      correct_answers: dbResult.correct_answers,
      incorrect_answers: dbResult.incorrect_answers,
      unattempted: dbResult.unattempted,
      time_taken: dbResult.time_taken,
      completed_at: dbResult.completed_at,
      answers: dbResult.answers || []
    }

    return <QuizResultView result={result} userName={user.name} />
  } catch (error) {
    console.error("Error fetching quiz result:", error)
    return (
      <div className="min-h-screen bg-[#0a1b36] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Error Loading Quiz Result</h1>
          <p className="text-gray-400">There was a problem loading the quiz result.</p>
        </div>
      </div>
    )
  }
} 