'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Monitor, 
  Headphones, 
  BookOpen, 
  Smartphone, 
  MonitorSmartphone,
  Clock,
  Activity,
  Music,
  Code,
  Gamepad2,
  MessageCircle,
  ExternalLink
} from 'lucide-react'

interface DiscordUser {
  id: string
  username: string
  discriminator: string
  avatar: string
  status: string
  activities: Array<{
    id?: string
    name: string
    type: number
    application_id?: string
    details?: string
    state?: string
    sync_id?: string
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
     spotify?: {
     track_id: string
     song: string
     artist: string
     album: string
     album_art_url: string
     timestamps: {
       start: number
       end: number
     }
   }
  listening_to_spotify: boolean
  active_on_discord_mobile: boolean
  active_on_discord_desktop: boolean
  kv?: Record<string, any>
}

interface DiscordProfileProps {
  userId: string
}

export default function DiscordProfile({ userId }: DiscordProfileProps) {
  const [discordData, setDiscordData] = useState<DiscordUser | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)


  useEffect(() => {
    const fetchDiscordStatus = async () => {
      try {
        const response = await fetch(`/api/discord?userId=${userId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch Discord data')
        }
                 const data = await response.json()
         console.log('Discord Data:', data)
         if (data.spotify) {
           console.log('Spotify Data:', data.spotify)
         }
         setDiscordData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchDiscordStatus()
    const interval = setInterval(fetchDiscordStatus, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [userId])



  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500'
      case 'idle': return 'bg-yellow-500'
      case 'dnd': return 'bg-red-500'
      case 'offline': return 'bg-gray-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return 'Online'
      case 'idle': return 'Idle'
      case 'dnd': return 'Do Not Disturb'
      case 'offline': return 'Offline'
      default: return 'Unknown'
    }
  }

  const getActivityIcon = (activity: any) => {
    if (activity.name === 'Spotify' || activity.id?.startsWith('spotify:')) return <Music className="w-4 h-4" />
    if (activity.application_id === '383226320970055681') return <Code className="w-4 h-4" />
    if (activity.application_id === 'steam') return <Gamepad2 className="w-4 h-4" />
    if (activity.type === 1) return <Monitor className="w-4 h-4" />
    return <Activity className="w-4 h-4" />
  }

  const getActivityType = (activity: any) => {
    switch (activity.type) {
      case 0: return 'Playing'
      case 1: return 'Streaming'
      case 2: return 'Listening to'
      case 3: return 'Watching'
      case 4: return 'Custom'
      case 5: return 'Competing in'
      default: return 'Playing'
    }
  }

  const formatActivityText = (activity: any) => {
    if (activity.name === 'Spotify' || activity.id?.startsWith('spotify:')) {
      return `${activity.details} • ${activity.state}`
    }
    return activity.details || activity.name
  }

  const getDeviceIcon = () => {
    if (discordData?.active_on_discord_mobile && discordData?.active_on_discord_desktop) {
      return <MonitorSmartphone className="w-4 h-4" />
    } else if (discordData?.active_on_discord_mobile) {
      return <Smartphone className="w-4 h-4" />
    } else if (discordData?.active_on_discord_desktop) {
      return <Monitor className="w-4 h-4" />
    }
    return <Monitor className="w-4 h-4" />
  }

  if (loading) {
    return (
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"
        />
        <p className="text-white/60 text-sm">Loading status...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center">
        <p className="text-red-400 text-sm">Error: {error}</p>
      </div>
    )
  }

  if (!discordData) {
    return (
      <div className="text-center">
        <p className="text-white/60 text-sm">No data available</p>
      </div>
    )
  }

  const spotifyActivity = discordData.activities?.find(activity => activity.name === 'Spotify' || activity.id?.startsWith('spotify:'))
  const otherActivities = discordData.activities?.filter(activity => activity.name !== 'Spotify' && !activity.id?.startsWith('spotify:')) || []

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      {/* Profile Header */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="flex items-center"
      >
        <div className="relative">
          <motion.img
            src="https://cdn.discordapp.com/avatars/1081084405260496937/de6cc8a1ab8f62ecfd9d760fb00184d5.webp"
            alt={discordData.username}
            className="w-16 h-16 rounded-full border-2 border-white/20 hover:border-purple-400/50 transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          />
          <motion.div 
            className={`absolute -bottom-1 -right-1 w-5 h-5 ${getStatusColor(discordData.status)} rounded-full border-2 border-black`}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <div className="ml-2">
          <motion.h3 
            className="text-xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {discordData.username}
          </motion.h3>
          <motion.div 
            className="flex items-center space-x-2 mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-white/60 text-sm">{getStatusText(discordData.status)}</span>
            <span className="text-white/40">•</span>
            <span className="text-white/60 text-sm">{discordData.active_on_discord_mobile ? 'Mobile' : 'Desktop'}</span>
          </motion.div>
        </div>
      </motion.div>

             {/* Spotify Section */}
       {discordData.listening_to_spotify && spotifyActivity ? (
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5, duration: 0.5 }}
           className="bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-lg p-3 hover:bg-green-500/15 transition-all max-w-sm"
           whileHover={{ scale: 1.02 }}
         >
           <motion.div 
             className="flex items-center space-x-2 mb-2"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6 }}
           >
             <Music className="w-4 h-4 text-green-400" />
             <span className="text-white font-medium text-xs">Listening to Spotify</span>
             <motion.button
               className="ml-auto w-5 h-5 bg-green-500/20 hover:bg-green-500/30 rounded-full flex items-center justify-center transition-colors"
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               onClick={() => {
                 const trackId = discordData.spotify?.track_id || spotifyActivity?.sync_id
                 if (trackId) {
                   window.open(`https://open.spotify.com/track/${trackId}`, '_blank')
                 }
               }}
               title="Open in Spotify"
             >
               <ExternalLink className="w-2.5 h-2.5 text-green-400" />
             </motion.button>
          </motion.div>
          <motion.div 
             className="flex items-center space-x-3"
             initial={{ opacity: 0, x: -10 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.7 }}
           >
             {(discordData.spotify?.album_art_url || (spotifyActivity?.assets?.large_image && spotifyActivity.assets.large_image.startsWith('spotify:'))) ? (
               <motion.img
                 src={discordData.spotify?.album_art_url || 
                      (spotifyActivity?.assets?.large_image?.startsWith('spotify:') 
                        ? `https://i.scdn.co/image/${spotifyActivity.assets.large_image.split(':')[1]}`
                        : spotifyActivity?.assets?.large_image)}
                 alt="Album Art"
                 className="w-16 h-16 rounded border border-white/20"
                 whileHover={{ scale: 1.05 }}
                 onError={(e) => {
                   console.log('Album art failed to load:', e.currentTarget.src)
                   e.currentTarget.style.display = 'none'
                 }}
               />
             ) : (
               <motion.div
                 className="w-16 h-16 rounded border border-white/20 bg-green-500/20 flex items-center justify-center"
                 whileHover={{ scale: 1.05 }}
               >
                 <Music className="w-8 h-8 text-green-400" />
               </motion.div>
             )}
             <div className="flex-1 min-w-0">
               <p className="text-white font-medium text-sm truncate">
                 {discordData.spotify?.song || spotifyActivity?.details}
               </p>
               <p className="text-white/60 text-xs truncate">
                 {discordData.spotify?.artist || spotifyActivity?.state}
               </p>
               {(discordData.spotify?.album || spotifyActivity?.assets?.large_text) && (
                 <p className="text-white/40 text-xs truncate">
                   {discordData.spotify?.album || spotifyActivity?.assets?.large_text}
                 </p>
               )}
             </div>
           </motion.div>
        </motion.div>
            ) : (
        /* Dark Minimal Project Card */
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-black/70 backdrop-blur-sm border border-white/10 rounded-lg p-5 hover:border-white/20 transition-all duration-300"
          whileHover={{ scale: 1.01 }}
        >
          {/* Header */}
          <motion.div 
            className="flex items-center space-x-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.div 
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <h3 className="text-white font-medium text-sm">Open for any type of project</h3>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <p className="text-white/80 text-sm leading-relaxed">
              Discord bots, personal websites, web applications, or anything else you have in mind.
            </p>
            
            <p className="text-white/60 text-xs">
              Ready to bring your ideas to life with modern technologies and clean code.
            </p>
          </motion.div>

          {/* Skills Tags */}
          <motion.div 
            className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            {['Discord Bots', 'Web Apps', 'APIs', 'React/Next.js'].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="px-2 py-1 bg-white/5 border border-white/10 rounded text-white/70 text-xs hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div 
            className="flex items-center justify-between mt-4 pt-3 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
              <span className="text-green-400/80 text-xs">Available now</span>
            </div>
            
            <motion.button
              className="text-white/70 hover:text-white text-xs hover:bg-white/10 px-3 py-1 rounded border border-white/10 hover:border-white/20 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                navigator.clipboard.writeText('tennxl')
              }}
            >
              Contact: tennxl
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* Activities Section */}
      
       
   

      {/* Status Info */}
      <motion.div 
        className="flex items-center justify-between text-white/40 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Clock className="w-3 h-3" />
          </motion.div>
          <span>Updated now</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
