import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { saveQuizResult, saveUserAnswers } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { score, totalQuestions, correctAnswers, incorrectAnswers, unattempted, timeTaken, answers } =
      await request.json()

    // Save quiz result
    const result = await saveQuizResult(
      user.id,
      score,
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
      unattempted,
      timeTaken,
    )

    // Save individual answers
    for (const answer of answers) {
      await saveUserAnswers(result.id, answer.questionId, answer.userAnswer, answer.isCorrect)
    }

    return NextResponse.json({ message: "Quiz result saved successfully", quizResultId: result.id }, { status: 200 })
  } catch (error) {
    console.error("Save quiz result error:", error)
    return NextResponse.json({ error: "Failed to save quiz result" }, { status: 500 })
  }
}
