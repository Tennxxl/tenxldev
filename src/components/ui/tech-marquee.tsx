'use client'

import Image from 'next/image'
import Marquee from '@/components/magicui/marquee'

interface TechItem {
  name: string
  icon?: string
  alt?: string
}

interface TechMarqueeProps {
  items: TechItem[]
  className?: string
  reverse?: boolean
}

export function TechMarquee({ items, className, reverse = false }: TechMarqueeProps) {
  return (
    <div className={className}>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:35s]" reverse={reverse}>
          {items.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm hover:border-zinc-700/80 transition-colors mx-2"
            >
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={item.alt || item.name}
                  width={20}
                  height={20}
                  className="object-contain"
                />
              )}
              <p className="font-mono text-sm font-medium text-zinc-300 whitespace-nowrap">
                {item.name}
              </p>
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-zinc-950 to-transparent z-10" />
      </div>
    </div>
  )
}
