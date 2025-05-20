import { getCurrentUser } from "@/lib/auth"
import QuizContent from "./quiz-content"
import { AuthRedirect } from "./AuthRedirect"

export default async function QuizPage() {
  const user = await getCurrentUser()

  if (!user) {
    return <AuthRedirect />
  }

  return <QuizContent userName={user.name} />
}
