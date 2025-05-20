import { NextResponse } from "next/server"
import { getUserByEmail } from "@/lib/db"
import { comparePasswords, generateToken, setAuthCookie } from "@/lib/auth"

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    // Find user
    const user = await getUserByEmail(email)
    if (!user) {
      console.log(`Login failed: No user found with email ${email}`)
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Verify password
    const isPasswordValid = await comparePasswords(password, user.password_hash)
    if (!isPasswordValid) {
      console.log(`Login failed: Invalid password for user ${email}`)
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    // Generate token and set cookie
    const token = await generateToken(user.id)
    setAuthCookie(token)

    console.log(`Login successful for user ${email} (ID: ${user.id})`)
    return NextResponse.json({ message: "Logged in successfully", userId: user.id }, { status: 200 })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Failed to log in", details: String(error) }, { status: 500 })
  }
}
