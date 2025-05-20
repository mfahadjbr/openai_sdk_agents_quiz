export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a1b36] text-white">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-purple-500 border-r-transparent"></div>
        <p className="mt-4 text-lg">Loading login...</p>
      </div>
    </div>
  )
} 