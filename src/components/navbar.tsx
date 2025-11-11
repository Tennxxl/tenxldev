'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GitHubStats {
  followers: number
  publicRepos: number
}

interface DiscordStats {
  online: number
  total: number
}

interface NavbarProps {
  profileAvatar?: string | null
  profileName?: string | null
  alwaysVisible?: boolean
}

export function Navbar({ profileAvatar, profileName, alwaysVisible = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = useState(false)
  const [showGitHubTooltip, setShowGitHubTooltip] = useState(false)
  const [showDiscordTooltip, setShowDiscordTooltip] = useState(false)
  const [githubStats, setGithubStats] = useState<GitHubStats>({ followers: 0, publicRepos: 0 })
  const [discordStats, setDiscordStats] = useState<DiscordStats>({ online: 0, total: 0 })
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    fetch('/api/github-stats')
      .then((res) => res.json())
      .then((data) => {
        setGithubStats(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching GitHub stats:', err)
        setLoading(false)
      })

    fetch('/api/discord-stats')
      .then((res) => res.json())
      .then((data) => {
        setDiscordStats(data)
      })
      .catch((err) => {
        console.error('Error fetching Discord stats:', err)
      })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k'
    }
    return num.toString()
  }

  const shouldShow = alwaysVisible || scrolled

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.nav
          initial={alwaysVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
          }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-50 pt-2 px-4"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-between h-12 px-4 rounded-2xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl backdrop-saturate-150 border border-white/20 dark:border-zinc-800/50 shadow-lg">
              {/* Logo with Profile Image */}
              <Link href="/" className="flex items-center gap-2 group">
                {profileAvatar ? (
                  <motion.div
                    layoutId="profile-image"
                    className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-700"
                    transition={{ 
                      duration: 0.8, 
                      ease: [0.34, 1.56, 0.64, 1],
                      layout: {
                        duration: 0.8,
                        ease: [0.34, 1.56, 0.64, 1],
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }
                    }}
                  >
                    <Image
                      src={profileAvatar}
                      alt={profileName || 'Profile'}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">T</span>
                  </div>
                )}
                <span className="font-semibold text-base text-zinc-900 dark:text-zinc-100">Tenxl</span>
              </Link>

          {/*Budospicsába*/}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/#about"
              className="text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/discord-check"
              className="text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Discord Check
            </Link>
          </div>

          {/* Right Side - Stats & Theme Toggle */}
          <div className="flex items-center gap-2">
            {/* GitHub Stats */}
            <a
              href="https://github.com/Tennxxl"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-white/50 dark:hover:bg-zinc-800/50 transition-colors"
              onMouseEnter={() => setShowGitHubTooltip(true)}
              onMouseLeave={() => setShowGitHubTooltip(false)}
            >
              <Github className="h-3.5 w-3.5 text-zinc-700 dark:text-zinc-300" />
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                {loading ? '...' : formatNumber(githubStats.followers)}
              </span>
              
              {/* Tooltip */}
              {showGitHubTooltip && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-lg shadow-lg border border-zinc-200/50 dark:border-zinc-700/50 whitespace-nowrap z-50">
                  <p className="text-xs font-medium text-zinc-900 dark:text-zinc-100">View on GitHub</p>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 -mb-1 w-2 h-2 bg-white/90 dark:bg-zinc-800/90 border-l border-t border-zinc-200/50 dark:border-zinc-700/50 rotate-45"></div>
                </div>
              )}
            </a>

            {/* Discord Stats */}
            <a
              href="https://discord.gg/9uS8xZgHPW"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-white/50 dark:hover:bg-zinc-800/50 transition-colors"
              onMouseEnter={() => setShowDiscordTooltip(true)}
              onMouseLeave={() => setShowDiscordTooltip(false)}
            >
              <svg
                className="h-3.5 w-3.5 text-zinc-700 dark:text-zinc-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                {loading ? '...' : discordStats.online || 0}
              </span>
              
              {/* Faszom kivan ezzel a tooltip gecivel */}
              {showDiscordTooltip && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-lg shadow-lg border border-zinc-200/50 dark:border-zinc-700/50 whitespace-nowrap z-50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <p className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
                      {discordStats.online || 0} members online in our Discord community
                    </p>
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 -mb-1 w-2 h-2 bg-white/90 dark:bg-zinc-800/90 border-l border-t border-zinc-200/50 dark:border-zinc-700/50 rotate-45"></div>
                </div>
              )}
            </a>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

