"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      })

      if (response.ok) {
        router.push("/login")
      }
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="border-purple-500 text-purple-300"
      onClick={handleLogout}
    >
      <LogOut className="h-4 w-4 mr-2" /> Log Out
    </Button>
  )
} 