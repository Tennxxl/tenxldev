'use client'

import { cn } from '@/lib/utils'
import './ShinyText.css'

interface ShinyTextProps {
  text?: string
  children?: React.ReactNode
  disabled?: boolean
  speed?: number
  className?: string
}

export function ShinyText({ 
  text, 
  children, 
  disabled = false, 
  speed = 5, 
  className = '' 
}: ShinyTextProps) {
  const animationDuration = `${speed}s`
  const isGreen = className?.includes('green')
  const content = text || children || ''

  const cleanClassName = className
    ?.split(' ')
    .filter(cls => !cls.includes('green') && !cls.includes('text-green') && cls.trim())
    .join(' ') || ''

  if (!content) return null

  return (
    <span
      className={cn(
        'shiny-text',
        disabled && 'disabled',
        isGreen && 'green',
        cleanClassName
      )}
      style={{ animationDuration }}
    >
      {content}
    </span>
  )
}



