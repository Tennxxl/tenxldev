'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface GitHubContributionsProps {
  username: string
}

const themes = {
  github: { bg: '#0d1117', grid: '#161b22', text: '#8b949e', active: '#39d353' },
  ocean: { bg: '#0a1929', grid: '#132f4c', text: '#7dd3fc', active: '#06b6d4' },
  gray: { bg: '#1a1a1a', grid: '#2a2a2a', text: '#a0a0a0', active: '#ffffff' },
  purple: { bg: '#1a0a2e', grid: '#2d1b3d', text: '#a78bfa', active: '#8b5cf6' },
  fire: { bg: '#1a0a0a', grid: '#2d1b1b', text: '#fca5a5', active: '#f97316' },
}

export function GitHubContributions({ username }: GitHubContributionsProps) {
  const [selectedTheme, setSelectedTheme] = useState<keyof typeof themes>('github')

  return (
    <div className="font-mono w-full mx-auto mb-6 p-4 rounded-xl backdrop-blur-md bg-black/60 dark:bg-zinc-900/60 border border-white/10 dark:border-zinc-800/50 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-3">
        <div className="flex items-center gap-3">
          <h3 className="font-bold text-xl text-zinc-100 dark:text-zinc-100">My GitHub</h3>
        </div>
        <label className="flex items-center gap-2 text-xs sm:text-sm">
          <span className="opacity-70 font-semibold underline text-zinc-300">Theme</span>
          <select
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value as keyof typeof themes)}
            className="text-white rounded-md px-2 py-1 outline-none font-semibold border-2 border-white/20 dark:border-zinc-700 bg-slate-900 dark:bg-zinc-800 border-dashed text-xs"
            aria-label="Select contributions theme"
          >
            <option value="github">Github</option>
            <option value="ocean">Ocean</option>
            <option value="gray">Pearl</option>
            <option value="purple">Grape</option>
            <option value="fire">Orange</option>
          </select>
        </label>
      </div>

      {/* GitHub Stats */}
      <div className="mb-4 flex justify-center">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&theme=vue-dark&show_icons=true&hide_border=true&count_private=true`}
          alt="GitHub Stats"
          className="w-full max-w-2xl"
        />
      </div>
    </div>
  )
}

