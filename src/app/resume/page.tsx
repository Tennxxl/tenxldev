import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Navbar } from '@/components/navbar'

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 relative">
      <Navbar />
      <div className="pt-24 flex items-center justify-center px-6 min-h-screen">
        <div className="max-w-4xl w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-8 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-8 shadow-lg">
            <h1 className="text-3xl font-bold mb-4 font-mono">Resume</h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Resume content will be displayed here. You can embed a PDF or add resume content.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}


