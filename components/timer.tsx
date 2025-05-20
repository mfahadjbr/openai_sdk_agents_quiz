"use client"

import { useEffect, useState } from "react"
import { useQuiz } from "@/context/quiz-context"
import { Progress } from "@/components/ui/progress"
import { Clock } from "lucide-react"

export function Timer() {
  const { timeRemaining } = useQuiz()
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    // Calculate progress percentage (3600 seconds = 100%)
    const percentage = (timeRemaining / 3600) * 100
    setProgress(percentage)
  }, [timeRemaining])

  // Format time as HH:MM:SS
  const hours = Math.floor(timeRemaining / 3600)
  const minutes = Math.floor((timeRemaining % 3600) / 60)
  const seconds = timeRemaining % 60
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

  // Determine color based on time remaining
  const getColorClass = () => {
    if (timeRemaining > 1800) return "text-green-500" // More than 30 minutes
    if (timeRemaining > 900) return "text-yellow-500" // More than 15 minutes
    return "text-red-500 animate-pulse"
  }

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className={getColorClass()} size={20} />
          <span className={`font-mono font-bold ${getColorClass()}`}>{formattedTime}</span>
        </div>
        <span className="text-sm text-purple-300">Time Remaining</span>
      </div>
      <Progress
        value={progress}
        className="h-2 bg-[#0d2145]"
        indicatorClassName={timeRemaining > 1800 ? "bg-green-500" : timeRemaining > 900 ? "bg-yellow-500" : "bg-red-500"}
      />
    </div>
  )
}
