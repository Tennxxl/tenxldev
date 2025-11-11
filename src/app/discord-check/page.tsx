'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { useLanyard } from '@/hooks/useLanyard'
import Image from 'next/image'
import Aurora from '@/components/ui/aurora'
import { Search, User, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { getDiscordAvatarUrl } from '@/lib/utils'

export default function DiscordCheckPage() {
  const tennxlUserId = process.env.NEXT_PUBLIC_DISCORD_USER_ID || ''
  const { data: tennxlData } = useLanyard(tennxlUserId)
  
  const [inputUserId, setInputUserId] = useState('')
  const [currentUserId, setCurrentUserId] = useState('')
  const { data: lanyardData, loading, error } = useLanyard(currentUserId)
  
  const discordUser = lanyardData?.data?.discord_user
  const profileName = discordUser?.username 
    ? discordUser.username.charAt(0).toUpperCase() + discordUser.username.slice(1).toLowerCase()
    : null
  
  const profileAvatar = discordUser?.id && !loading
    ? getDiscordAvatarUrl(discordUser.id, discordUser.avatar || null)
    : null

  const tennxlDiscordUser = tennxlData?.data?.discord_user
  const tennxlProfileName = tennxlDiscordUser?.username 
    ? tennxlDiscordUser.username.charAt(0).toUpperCase() + tennxlDiscordUser.username.slice(1).toLowerCase()
    : null
  
  const tennxlProfileAvatar = tennxlDiscordUser?.id
    ? getDiscordAvatarUrl(tennxlDiscordUser.id, tennxlDiscordUser.avatar || null)
    : null

  const handleSearch = () => {
    if (inputUserId.trim()) {
      setCurrentUserId(inputUserId.trim())
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const spotify = lanyardData?.data?.spotify
  const activities = lanyardData?.data?.activities || []
  const status = lanyardData?.data?.discord_status || 'offline'

  return (
    <main className="min-h-screen text-zinc-900 dark:text-zinc-100 relative">
      <Navbar profileAvatar={tennxlProfileAvatar} profileName={tennxlProfileName} alwaysVisible />
      
      <div className="fixed inset-0 w-full h-full z-0">
        <Aurora
          colorStops={['#111827', '#064e3b', '#022c22']}
          amplitude={0.8}
          blend={0.4}
          speed={0.3}
        />
      </div>
      
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-6 pt-32 pb-12 max-w-4xl">
          <div className="mb-8">
            <h1 className="font-mono font-semibold text-4xl mb-4 text-center">
              Discord Status Check
            </h1>
            <p className="text-center text-zinc-600 dark:text-zinc-400 font-mono mb-6">
              Enter a Discord User ID to check their status
            </p>
            
            <div className="max-w-md mx-auto mb-8">
              <div className="flex items-center gap-2 p-4 rounded-lg bg-zinc-100/30 dark:bg-zinc-900/30 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50">
                <User className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
                <input
                  type="text"
                  value={inputUserId}
                  onChange={(e) => setInputUserId(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter Discord User ID (e.g., 123456789012345678)"
                  className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 dark:placeholder:text-zinc-400"
                />
                <button
                  onClick={handleSearch}
                  disabled={!inputUserId.trim() || loading}
                  className="px-4 py-2 rounded-lg bg-zinc-800 dark:bg-zinc-700 text-zinc-100 hover:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-mono text-sm"
                >
                  <Search className="h-4 w-4" />
                  Search
                </button>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-2 text-center">
                To find your Discord User ID, enable Developer Mode in Discord settings, then right-click on a user and select "Copy User ID"
              </p>
            </div>
          </div>

          {error && (
            <div className="p-6 rounded-lg bg-red-900/20 dark:bg-red-900/30 backdrop-blur-md border border-red-800/50 dark:border-red-800/50 mb-6">
              <p className="font-mono text-red-400 text-center">
                Error: {error}
              </p>
            </div>
          )}

          {loading ? (
            <div className="flex items-center justify-center p-12">
              <div className="text-zinc-400 font-mono">Loading...</div>
            </div>
          ) : (
            <div className="space-y-6">
              {discordUser && (
                <div className="p-6 rounded-lg bg-zinc-100/30 dark:bg-zinc-900/30 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50">
                  <div>
                    <h2 className="font-mono font-semibold text-xl mb-2">{profileName || 'User'}</h2>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                      ID: {discordUser.id}
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                      Status: <span className={`capitalize ${status === 'online' ? 'text-green-500' : status === 'idle' ? 'text-yellow-500' : status === 'dnd' ? 'text-red-500' : 'text-zinc-500'}`}>{status}</span>
                    </p>
                  </div>
                </div>
              )}

              {spotify && (
                <div className="p-6 rounded-lg bg-zinc-100/30 dark:bg-zinc-900/30 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50">
                  <h3 className="font-mono font-semibold text-lg mb-3">Listening to Spotify</h3>
                  <div className="flex items-center gap-4">
                    {spotify.album_art_url && (
                      <Image
                        src={spotify.album_art_url}
                        alt={spotify.song || 'Album art'}
                        width={64}
                        height={64}
                        className="rounded-lg"
                      />
                    )}
                    <div>
                      <p className="font-mono font-medium">{spotify.song}</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">by {spotify.artist}</p>
                    </div>
                  </div>
                </div>
              )}

              {activities.length > 0 && (
                <div className="p-6 rounded-lg bg-zinc-100/30 dark:bg-zinc-900/30 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50">
                  <h3 className="font-mono font-semibold text-lg mb-3">Activities</h3>
                  <div className="space-y-3">
                    {activities.map((activity: any, index: number) => (
                      <div key={index} className="p-3 rounded bg-zinc-200/50 dark:bg-zinc-800/50">
                        <p className="font-mono font-medium">{activity.name}</p>
                        {activity.details && (
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">{activity.details}</p>
                        )}
                        {activity.state && (
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">{activity.state}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!discordUser && !loading && currentUserId && (
                <div className="p-6 rounded-lg bg-zinc-100/30 dark:bg-zinc-900/30 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 text-center">
                  <p className="font-mono text-zinc-600 dark:text-zinc-400 mb-4">
                    No Discord data found for this User ID.
                  </p>
                  <p className="font-mono text-zinc-600 dark:text-zinc-400 mb-4">
                    To see your Discord status, join our Discord server:
                  </p>
                  <Link
                    href="https://discord.gg/gc2yZgkCVy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-mono font-medium transition-colors"
                  >
                    Join Discord Server
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                  <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 mt-4">
                    After joining, your status will appear here automatically.
                  </p>
                </div>
              )}

              {!currentUserId && !loading && (
                <div className="p-6 rounded-lg bg-zinc-100/30 dark:bg-zinc-900/30 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 text-center">
                  <p className="font-mono text-zinc-600 dark:text-zinc-400">
                    Enter a Discord User ID above to check their status.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
