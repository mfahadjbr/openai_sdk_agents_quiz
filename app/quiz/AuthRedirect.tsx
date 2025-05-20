"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function AuthRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.push("/login")
  }, [router])

  return (
    <div className="min-h-screen bg-[#0a1b36] text-white flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4 text-lg">Redirecting to login...</p>
      </div>
    </div>
  )
} 