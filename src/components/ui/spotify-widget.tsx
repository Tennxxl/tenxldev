'use client'

import { useState } from 'react'
import { useLanyard } from '@/hooks/useLanyard'
import { Music2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SpotifyWidgetProps {
  discordUserId: string
}

export function SpotifyWidget({ discordUserId }: SpotifyWidgetProps) {
  const { data: lanyardData } = useLanyard(discordUserId)
  const [isHovered, setIsHovered] = useState(false)

  const spotify = lanyardData?.data?.spotify
  const isListening = lanyardData?.data?.listening_to_spotify

  if (!isListening || !spotify) {
    return null
  }

  const spotifyUrl = `https://open.spotify.com/search/${encodeURIComponent(`${spotify.song} ${spotify.artist}`)}`

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed bottom-6 right-6 z-50 hidden md:block"
      >
        <a
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-full bg-zinc-900/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-zinc-800/50 dark:border-zinc-900/50 shadow-lg flex items-center justify-center cursor-pointer hover:bg-zinc-800/95 dark:hover:bg-zinc-900/95 transition-colors"
          >
            <Music2 className="h-6 w-6 text-green-500 group-hover:text-green-400 transition-colors" />
          </motion.div>
          
          {/* Tooltip */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0 
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.9, 
                  y: 5 
                }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full right-0 mb-3 px-4 py-3 bg-zinc-900/98 dark:bg-zinc-950/98 backdrop-blur-xl rounded-xl shadow-2xl border border-zinc-800/60 dark:border-zinc-900/60 pointer-events-none z-50 min-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm font-semibold text-green-500">Listening on Spotify</p>
                </div>
                <p className="text-base font-semibold text-zinc-100 mb-1 leading-tight">{spotify.song}</p>
                <p className="text-sm text-zinc-400">{spotify.artist}</p>
                <div className="absolute top-full right-6 -mt-1.5 w-3 h-3 bg-zinc-900/98 dark:bg-zinc-950/98 border-r border-b border-zinc-800/60 dark:border-zinc-900/60 rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </a>
      </motion.div>
    </AnimatePresence>
  )
}

