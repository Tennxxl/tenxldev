'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Github } from 'lucide-react'
import { AnimatedCard } from '@/components/reactbits/animated-card'
import { GlowCard } from '@/components/reactbits/glow-card'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  imageAlt?: string
  link?: string
  githubLink?: string
  status?: 'active' | 'inactive'
  type?: 'solo' | 'team'
  tags?: string[]
  index?: number
}

export function ProjectCard({
  title,
  description,
  image,
  imageAlt = title,
  link,
  githubLink,
  status = 'active',
  type = 'solo',
  tags = [],
  index = 0,
}: ProjectCardProps) {
  return (
    <AnimatedCard delay={index * 0.1} direction="up">
      <div className="flex flex-col gap-[10px]">
        <GlowCard
          className="p-0 overflow-hidden"
          glowColor={status === 'active' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(113, 113, 122, 0.3)'}
        >
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="px-2 py-1 text-xs font-medium rounded-md bg-zinc-800/90 backdrop-blur-sm text-zinc-300">
                {type === 'solo' ? 'Solo Work' : 'Team Work'}
              </span>
              <span
                className={cn(
                  'px-2 py-1 text-xs font-medium rounded-md backdrop-blur-sm flex items-center gap-1.5',
                  status === 'active'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-zinc-700/50 text-zinc-400 border border-zinc-600/30'
                )}
              >
                <span
                  className={cn(
                    'w-1.5 h-1.5 rounded-full',
                    status === 'active' ? 'bg-green-400 animate-pulse' : 'bg-zinc-500'
                  )}
                />
                {status === 'active' ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
          <div className="p-4">
            <p className="font-mono tracking-tight leading-relaxed font-medium text-zinc-400 text-sm">
              {description}
            </p>
          </div>
          {(link || githubLink) && (
            <div className="px-4 pb-4 flex items-center justify-end gap-2">
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 size-9 h-9 w-9 rounded-full hover:bg-zinc-800/50 border border-zinc-700/50"
                  aria-label={`Open ${title} live project`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}
              {githubLink && (
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 size-9 h-9 w-9 rounded-full hover:bg-zinc-800/50 border border-zinc-700/50"
                  aria-label={`View ${title} on GitHub`}
                >
                  <Github className="h-4 w-4" />
                </Link>
              )}
            </div>
          )}
        </GlowCard>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 px-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs font-medium rounded-md bg-zinc-800/50 text-zinc-400 border border-zinc-700/30"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </AnimatedCard>
  )
}



