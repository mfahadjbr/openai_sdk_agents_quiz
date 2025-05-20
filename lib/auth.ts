import { cookies } from "next/headers"
import bcrypt from "bcryptjs"
import { SignJWT, jwtVerify } from "jose"
import { getUserById } from "./db"

// Make sure we're using the correct JWT secret
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "fallback-secret-key-for-development-only")
const COOKIE_NAME = "auth_token"

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10)
}

export async function comparePasswords(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword)
}

export async function generateToken(userId: number) {
  try {
    return await new SignJWT({ userId })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(JWT_SECRET)
  } catch (error) {
    console.error("Error generating token:", error)
    throw new Error("Failed to generate authentication token")
  }
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    return payload as { userId: number }
  } catch (error) {
    console.error("Error verifying token:", error)
    return null
  }
}

export function setAuthCookie(token: string) {
  try {
    cookies().set({
      name: COOKIE_NAME,
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    console.log("Auth cookie set successfully")
  } catch (error) {
    console.error("Error setting auth cookie:", error)
    throw new Error("Failed to set authentication cookie")
  }
}

export function removeAuthCookie() {
  try {
    cookies().delete(COOKIE_NAME)
  } catch (error) {
    console.error("Error removing auth cookie:", error)
  }
}

export function getAuthToken() {
  try {
    return cookies().get(COOKIE_NAME)?.value
  } catch (error) {
    console.error("Error getting auth token:", error)
    return null
  }
}

export async function getCurrentUser() {
  try {
    const token = getAuthToken()
    if (!token) {
      console.log("No auth token found")
      return null
    }

    const payload = await verifyToken(token)
    if (!payload) {
      console.log("Invalid auth token")
      return null
    }

    const user = await getUserById(payload.userId)
    if (!user) {
      console.log(`User not found for ID: ${payload.userId}`)
      return null
    }

    return user
  } catch (error) {
    console.error("Error getting current user:", error)
    return null
  }
}
