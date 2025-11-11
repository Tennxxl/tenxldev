'use client'

import { cn } from '@/lib/utils'
import './marquee.css'

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children?: React.ReactNode
  vertical?: boolean
  repeat?: number
  [key: string]: any
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        'group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem]',
        vertical ? 'flex-col' : 'flex-row',
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              'flex shrink-0 [gap:var(--gap)]',
              vertical ? 'flex-col' : 'flex-row',
              'will-change-transform',
              reverse ? 'marquee-reverse' : 'marquee'
            )}
            style={{
              animationPlayState: pauseOnHover ? 'paused' : 'running',
              animationDuration: 'var(--duration, 40s)',
            }}
          >
            {children}
          </div>
        ))}
    </div>
  )
}
