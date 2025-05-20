import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

// Initialize the database connection with proper error handling
const sql = neon(process.env.DATABASE_URL!)
export const db = drizzle(sql)

// User-related functions with better error handling
export async function createUser(name: string, email: string, passwordHash: string) {
  try {
    const result = await sql`
      INSERT INTO users (name, email, password_hash)
      VALUES (${name}, ${email}, ${passwordHash})
      RETURNING id, name, email, created_at
    `
    return result[0]
  } catch (error) {
    console.error("Error creating user:", error)
    throw new Error("Failed to create user")
  }
}

export async function getUserByEmail(email: string) {
  try {
    const result = await sql`
      SELECT id, name, email, password_hash, created_at
      FROM users
      WHERE email = ${email}
    `
    return result[0] || null
  } catch (error) {
    console.error("Error getting user by email:", error)
    return null
  }
}

export async function getUserById(id: number) {
  try {
    const result = await sql`
      SELECT id, name, email, created_at
      FROM users
      WHERE id = ${id}
    `
    return result[0] || null
  } catch (error) {
    console.error("Error getting user by ID:", error)
    return null
  }
}

// Quiz result functions
export async function saveQuizResult(
  userId: number,
  score: number,
  totalQuestions: number,
  correctAnswers: number,
  incorrectAnswers: number,
  unattempted: number,
  timeTaken: number,
) {
  try {
    const result = await sql`
      INSERT INTO quiz_results (
        user_id, score, total_questions, correct_answers, 
        incorrect_answers, unattempted, time_taken
      )
      VALUES (
        ${userId}, ${score}, ${totalQuestions}, ${correctAnswers}, 
        ${incorrectAnswers}, ${unattempted}, ${timeTaken}
      )
      RETURNING id
    `
    return result[0]
  } catch (error) {
    console.error("Error saving quiz result:", error)
    throw new Error("Failed to save quiz result")
  }
}

export async function saveUserAnswers(
  quizResultId: number,
  questionId: number,
  userAnswer: string | null,
  isCorrect: boolean | null,
) {
  try {
    await sql`
      INSERT INTO user_answers (quiz_result_id, question_id, user_answer, is_correct)
      VALUES (${quizResultId}, ${questionId}, ${userAnswer}, ${isCorrect})
    `
  } catch (error) {
    console.error("Error saving user answer:", error)
    throw new Error("Failed to save user answer")
  }
}

// Add the missing getUserQuizResults function
export async function getUserQuizResults(userId: number) {
  try {
    const results = await sql`
      SELECT id, score, total_questions, correct_answers, incorrect_answers, 
             unattempted, completed_at, time_taken
      FROM quiz_results
      WHERE user_id = ${userId}
      ORDER BY completed_at DESC
    `
    return results
  } catch (error) {
    console.error("Error getting user quiz results:", error)
    return []
  }
}

export async function getQuizResultDetails(resultId: number) {
  try {
    const result = await sql`
      SELECT qr.*, u.name as user_name, u.email as user_email
      FROM quiz_results qr
      JOIN users u ON qr.user_id = u.id
      WHERE qr.id = ${resultId}
    `

    const answers = await sql`
      SELECT *
      FROM user_answers
      WHERE quiz_result_id = ${resultId}
      ORDER BY question_id
    `

    return {
      result: result[0],
      answers,
    }
  } catch (error) {
    console.error("Error getting quiz result details:", error)
    throw new Error("Failed to get quiz result details")
  }
}

export async function getQuizResult(id: string) {
  try {
    const result = await sql`
      SELECT qr.*, u.name as user_name
      FROM quiz_results qr
      JOIN users u ON qr.user_id = u.id
      WHERE qr.id = ${id}
    `
    return result[0] || null
  } catch (error) {
    console.error("Error fetching quiz result:", error)
    throw error
  }
}
