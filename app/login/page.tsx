"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<string | null>(null)

  useEffect(() => {
    if (searchParams.get("registered") === "true") {
      setSuccess("Account created successfully! Please log in.")
    }
  }, [searchParams])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError(null)
    setDebugInfo(null)

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    try {
      setDebugInfo("Sending login request...")
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()
      setDebugInfo(`Response status: ${response.status}, data: ${JSON.stringify(data)}`)

      if (!response.ok) {
        throw new Error(data.error || "Failed to log in")
      }

      setDebugInfo("Login successful, redirecting to dashboard...")
      // Add a small delay before redirecting to ensure cookie is set
      setTimeout(() => {
        router.push("/dashboard")
      }, 500)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      setDebugInfo(`Error: ${err instanceof Error ? err.message : "Unknown error"}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#0a1b36] text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full">
        <Card className="w-full bg-[#1a2a47] border-purple-500 border">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Log In</CardTitle>
            <CardDescription className="text-purple-300">Log in to your account to continue</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && (
                <div className="bg-red-500/20 p-3 rounded-md flex items-center gap-2 text-red-300 border border-red-800">
                  <AlertCircle className="h-5 w-5" />
                  <p>{error}</p>
                </div>
              )}

              {success && (
                <div className="bg-green-500/20 p-3 rounded-md flex items-center gap-2 text-green-300 border border-green-800">
                  <CheckCircle className="h-5 w-5" />
                  <p>{success}</p>
                </div>
              )}

              {debugInfo && process.env.NODE_ENV !== "production" && (
                <div className="bg-blue-500/20 p-3 rounded-md text-blue-300 border border-blue-800 text-xs">
                  <pre className="whitespace-pre-wrap">{debugInfo}</pre>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="bg-[#0d2145] border-purple-800 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  required
                  className="bg-[#0d2145] border-purple-800 text-white"
                />
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Log In"}
              </Button>

              <p className="text-sm text-center text-purple-300">
                Don't have an account?{" "}
                <Link href="/signup" className="text-purple-400 hover:underline">
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </main>
  )
}
