'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Moon, Code, ExternalLink, MessageSquare, Users, Zap, Database, Globe, Smartphone } from 'lucide-react'
import Link from 'next/link'
import DiscordProfile from './components/DiscordProfile'


export default function Home() {
  const [showLoading, setShowLoading] = useState(true)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationTitle, setNotificationTitle] = useState<string>('')
  const [notificationText, setNotificationText] = useState<string>('')


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])



  const handleMoonClick = () => {
    setNotificationTitle('Light Mode Not Available')
    setNotificationText("Come on, we're developers here! Dark mode is the only way to go. Your eyes will thank you later! 😄")
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  const handleContactClick = () => {
    setNotificationTitle('Contact')
    setNotificationText('Add me on Discord: tennxl')
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 3000)
  }

  if (showLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-teal-400 bg-clip-text text-transparent mb-8"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            TENXL
          </motion.div>
          <motion.div
            className="flex space-x-2 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-purple-500 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white font-sans relative">
      {/* Pure Black Background with Moving Teal Orbs */}
      <div className="fixed inset-0 z-0">
        {/* Pure black base */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Large moving teal blur orbs */}
        <div className="absolute w-96 h-96 bg-gradient-radial from-teal-500/20 via-teal-600/10 to-transparent rounded-full blur-3xl" 
             style={{ 
               animation: 'horizontalFloat 20s ease-in-out infinite',
               top: '15%',
               left: '10%'
             }}></div>
        
        <div className="absolute w-80 h-80 bg-gradient-radial from-cyan-500/18 via-cyan-600/9 to-transparent rounded-full blur-3xl" 
             style={{ 
               animation: 'horizontalFloat 25s ease-in-out infinite reverse',
               animationDelay: '5s',
               top: '60%',
               right: '10%'
             }}></div>
        
        <div className="absolute w-72 h-72 bg-gradient-radial from-emerald-500/22 via-emerald-600/11 to-transparent rounded-full blur-3xl" 
             style={{ 
               animation: 'horizontalFloat 18s ease-in-out infinite',
               animationDelay: '8s',
               bottom: '20%',
               left: '5%'
             }}></div>
        
        <div className="absolute w-64 h-64 bg-gradient-radial from-teal-400/16 via-teal-500/8 to-transparent rounded-full blur-3xl" 
             style={{ 
               animation: 'horizontalFloat 22s ease-in-out infinite reverse',
               animationDelay: '3s',
               top: '40%',
               right: '5%'
             }}></div>
        
        <div className="absolute w-56 h-56 bg-gradient-radial from-cyan-400/20 via-cyan-500/10 to-transparent rounded-full blur-3xl" 
             style={{ 
               animation: 'horizontalFloat 30s ease-in-out infinite',
               animationDelay: '12s',
               top: '5%',
               left: '50%'
             }}></div>

      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="bg-white text-black px-3 py-2 font-bold text-lg">
            TENXL
          </div>
          
          {/* Theme Toggle */}
          <motion.button 
            className="text-white hover:text-teal-400 transition-colors"
            onClick={handleMoonClick}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            title="Light mode? Uhm no.."
          >
            <Moon className="w-6 h-6" />
          </motion.button>
        </div>
            </header>

      {/* Left Navigation - Hidden on mobile */}
      <div className="hidden lg:flex fixed left-4 sm:left-8 md:left-16 lg:left-32 top-1/2 transform -translate-y-1/2 flex-col space-y-4 sm:space-y-6 z-50">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center space-y-2 cursor-pointer group transform -rotate-12 hover:scale-110 transition-transform duration-300"
        >
          <Link href="/projects">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center group-hover:bg-teal-500/20 group-hover:border-teal-400/30 transition-all duration-300 group-hover:rotate-12 shadow-lg">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white/80 group-hover:text-teal-300 transition-colors duration-300" />
            </div>
          </Link>
          <span className="text-white/70 text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-300 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">Projects</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center space-y-2 cursor-pointer group transform rotate-6 hover:scale-110 transition-transform duration-300"
        >
          <a href="https://builtbybit.com/creators/tenxl.406697" target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-400/30 transition-all duration-300 group-hover:-rotate-6 shadow-lg">
            <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white/80 group-hover:text-emerald-300 transition-colors duration-300" />
          </a>
          <span className="text-white/70 text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-300 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">BuiltByBit</span>
        </motion.div>
      </div>

      {/* Right Navigation - Hidden on mobile */}
      <div className="hidden lg:flex fixed right-4 sm:right-8 md:right-16 lg:right-32 top-1/2 transform -translate-y-1/2 flex-col space-y-4 sm:space-y-6 z-50">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center space-y-2 cursor-pointer group transform rotate-8 hover:scale-110 transition-transform duration-300"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleContactClick(); }}
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-400/30 transition-all duration-300 group-hover:-rotate-8 shadow-lg">
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white/80 group-hover:text-cyan-300 transition-colors duration-300" />
          </div>
          <span className="text-white/70 text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-300 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">Contact</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center space-y-2 cursor-pointer group transform -rotate-10 hover:scale-110 transition-transform duration-300"
        >
          <a href="https://discord.gg/tyb5ajvSJJ" target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center group-hover:bg-green-600/20 group-hover:border-green-500/30 transition-all duration-300 group-hover:rotate-10 shadow-lg">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white/80 group-hover:text-green-300 transition-colors duration-300" />
          </a>
          <span className="text-white/70 text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-300 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">Discord Server</span>
        </motion.div>

        {/* Project overlay removed in favor of dedicated /projects page */}
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
        <div className="flex space-x-3 bg-black/80 backdrop-blur-md border border-white/20 rounded-2xl p-3">
          <Link href="/projects">
            <motion.div
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-teal-500/20 hover:border-teal-400/30 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Code className="w-5 h-5 text-white/80" />
            </motion.div>
          </Link>
          
          <motion.a
            href="https://builtbybit.com/creators/tenxl.406697"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-emerald-500/20 hover:border-emerald-400/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink className="w-5 h-5 text-white/80" />
          </motion.a>
          
          <motion.button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleContactClick(); }}
            className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-400/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MessageSquare className="w-5 h-5 text-white/80" />
          </motion.button>
          
          <motion.a
            href="https://discord.gg/tyb5ajvSJJ"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-green-600/20 hover:border-green-500/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Users className="w-5 h-5 text-white/80" />
          </motion.a>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          {/* Discord Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">
              <DiscordProfile userId="1081084405260496937" />
            </div>
          </motion.div>


        </motion.div>
      </div>

      {/* Notification - centered at top, slides down and fades out */}
      <AnimatePresence mode="wait">
        {showNotification && (
          <div className="fixed inset-x-0 top-6 z-50 flex justify-center px-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: -24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 420, damping: 30, mass: 0.8 }}
              className="pointer-events-auto bg-black/60 backdrop-blur-2xl border border-white/15 rounded-2xl px-5 py-4 shadow-[0_12px_40px_rgba(0,0,0,.5)] max-w-sm w-full"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">i</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white mb-1">{notificationTitle || 'Notification'}</p>
                  <p className="text-xs text-white/85">{notificationText}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Projects section removed; now available at /projects */}
    </main>
  )
}