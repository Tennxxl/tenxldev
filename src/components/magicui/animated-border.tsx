'use client'

import React, { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedBorderProps {
  children: React.ReactNode
  className?: string
  borderWidth?: number
  borderColor?: string
  borderRadius?: string
  duration?: number
}

export function AnimatedBorder({
  children,
  className,
  borderWidth = 2,
  borderColor = 'rgba(255, 255, 255, 0.1)',
  borderRadius = '0.5rem',
  duration = 3,
}: AnimatedBorderProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const style = document.createElement('style')
    style.textContent = `
      @keyframes border-animation {
        0%, 100% {
          border-image-source: linear-gradient(0deg, transparent, ${borderColor}, transparent);
        }
        25% {
          border-image-source: linear-gradient(90deg, transparent, ${borderColor}, transparent);
        }
        50% {
          border-image-source: linear-gradient(180deg, transparent, ${borderColor}, transparent);
        }
        75% {
          border-image-source: linear-gradient(270deg, transparent, ${borderColor}, transparent);
        }
      }
    `
    document.head.appendChild(style)

    container.style.borderWidth = `${borderWidth}px`
    container.style.borderStyle = 'solid'
    container.style.borderImageSlice = '1'
    container.style.borderRadius = borderRadius
    container.style.animation = `border-animation ${duration}s linear infinite`

    return () => {
      document.head.removeChild(style)
    }
  }, [borderWidth, borderColor, borderRadius, duration])

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {children}
    </div>
  )
}



