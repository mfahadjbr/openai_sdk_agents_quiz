"use client"

import { useEffect, useState } from "react"
import { useQuiz } from "@/context/quiz-context"
import { Progress } from "@/components/ui/progress"
import { Clock } from "lucide-react"

export function Timer() {
  const { timeRemaining } = useQuiz()
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    // Calculate progress percentage (180 seconds = 100%)
    const percentage = (timeRemaining / 180) * 100
    setProgress(percentage)
  }, [timeRemaining])

  // Format time as MM:SS
  const minutes = Math.floor(timeRemaining / 60)
  const seconds = timeRemaining % 60
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

  // Determine color based on time remaining
  const getColorClass = () => {
    if (timeRemaining > 60) return "text-green-500"
    if (timeRemaining > 30) return "text-yellow-500"
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
        indicatorClassName={timeRemaining > 60 ? "bg-green-500" : timeRemaining > 30 ? "bg-yellow-500" : "bg-red-500"}
      />
    </div>
  )
}
