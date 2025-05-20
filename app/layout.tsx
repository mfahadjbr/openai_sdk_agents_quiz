import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { QuizProvider } from "@/context/quiz-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "OpenAI SDK Agents Quiz",
  description: "Test your knowledge of OpenAI SDK Agents",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <QuizProvider>{children}</QuizProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
