'use client'

import { cn } from '@/lib/utils'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function GlowCard({ children, className, glowColor = 'rgba(59, 130, 246, 0.5)' }: GlowCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-lg border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-zinc-700/80',
        className
      )}
      style={{
        boxShadow: `0 0 20px ${glowColor}`,
      }}
    >
      {children}
    </div>
  )
}



