'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function AnimatedThemeToggler() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = stored || (systemPrefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
    document.documentElement.classList.toggle('dark', initialTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  if (!mounted) {
    return (
      <button
        type="button"
        className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/50 dark:hover:bg-zinc-800/50 transition-colors"
        aria-label="Toggle color theme"
      >
        <Moon className="h-3.5 w-3.5 text-zinc-700 dark:text-zinc-300" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/50 dark:hover:bg-zinc-800/50 transition-colors overflow-hidden"
      aria-label="Toggle color theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute"
      >
        <Moon className="h-3.5 w-3.5 text-zinc-700 dark:text-zinc-300" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : -180,
          scale: theme === 'light' ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute"
      >
        <Sun className="h-3.5 w-3.5 text-zinc-700 dark:text-zinc-300" />
      </motion.div>
    </button>
  )
}

