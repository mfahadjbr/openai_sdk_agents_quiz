"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

function RedirectHandler() {
  const router = useRouter()

  useEffect(() => {
    // Check if the user is logged in by making an API call
    fetch("/api/auth/me")
      .then((response) => {
        if (response.ok) {
          // User is logged in, redirect to dashboard
          router.push("/dashboard")
        } else {
          // User is not logged in, redirect to login
          router.push("/login")
        }
      })
      .catch(() => {
        // Error occurred, redirect to login
        router.push("/login")
      })
  }, [router])

  // Show a loading state while redirecting
  return (
    <div className="min-h-screen bg-[#0a1b36] text-white flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
        <p className="mt-4 text-lg">Redirecting...</p>
      </div>
    </div>
  )
}

export default function Home() {
  return <RedirectHandler />
}
