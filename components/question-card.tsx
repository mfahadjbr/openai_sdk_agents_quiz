"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useQuiz } from "@/context/quiz-context"
import { quizData } from "@/data/quiz-data"
import { ChevronLeft, ChevronRight, Flag } from "lucide-react"

export function QuestionCard() {
  const { currentQuestion, answers, selectAnswer, nextQuestion, previousQuestion, endQuiz } = useQuiz()

  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const question = quizData[currentQuestion]

  // Update selected option when changing questions
  useEffect(() => {
    setSelectedOption(answers[currentQuestion])
  }, [currentQuestion, answers])

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value)
    selectAnswer(value)
  }

  return (
    <Card className="w-full bg-[#1a2a47] border-purple-500 border">
      <CardHeader>
        <CardTitle className="text-xl text-white flex items-center gap-2">
          <span className="bg-purple-700 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
            {currentQuestion + 1}
          </span>
          <span>{question.question}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedOption || ""} className="space-y-4">
          {Object.entries(question.options).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center space-x-2 p-3 rounded-lg border border-purple-800 hover:bg-[#2a0f4a] transition-colors"
            >
              <RadioGroupItem
                value={key}
                id={`option-${key}`}
                onClick={() => handleOptionSelect(key)}
                className="text-purple-500 border-purple-500"
              />
              <Label htmlFor={`option-${key}`} className="flex-1 cursor-pointer text-white">
                <span className="font-semibold mr-2">{key.toUpperCase()})</span> {value}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={previousQuestion}
          disabled={currentQuestion === 0}
          className="border-purple-500 text-purple-300 hover:bg-purple-900 hover:text-white"
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <div className="text-sm text-purple-300">
          {currentQuestion + 1} of {quizData.length}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={endQuiz}
            className="border-yellow-500 text-yellow-300 hover:bg-yellow-900/30 hover:text-yellow-200"
          >
            <Flag className="mr-2 h-4 w-4" /> Finish Quiz
          </Button>
          <Button onClick={nextQuestion} className="bg-purple-600 hover:bg-purple-700 text-white">
            {currentQuestion === quizData.length - 1 ? "Finish" : "Next"} <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
