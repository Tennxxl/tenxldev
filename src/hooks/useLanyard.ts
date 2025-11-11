'use client'

import { useEffect, useState } from 'react'

interface LanyardData {
  success: boolean
  data: {
    discord_user: {
      id: string
      username: string
      discriminator: string
      avatar: string
    }
    discord_status: 'online' | 'idle' | 'dnd' | 'offline'
    kv?: Record<string, string>
    spotify?: {
      track_id: string
      timestamps: {
        start: number
        end: number
      }
      song: string
      artist: string
      album_art_url: string
      album: string
    }
    listening_to_spotify: boolean
    active_on_discord_mobile?: boolean
    active_on_discord_desktop?: boolean
    activities?: Array<{
      name: string
      details?: string
      state?: string
      type: number
      timestamps?: {
        start?: number
        end?: number
      }
      assets?: {
        large_image?: string
        large_text?: string
        small_image?: string
        small_text?: string
      }
    }>
  }
}

export function useLanyard(userId: string) {
  const [data, setData] = useState<LanyardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!userId) {
      setLoading(false)
      return
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch Lanyard data')
        }
        const json: LanyardData = await response.json()
        if (json.success) {
          setData(json)
          setError(null)
        } else {
          throw new Error('Lanyard API returned unsuccessful response')
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    
    const interval = setInterval(fetchData, 10000)

    return () => clearInterval(interval)
  }, [userId])

  return { data, loading, error }
}

