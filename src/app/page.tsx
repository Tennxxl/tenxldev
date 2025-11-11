'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Tabs } from '@/components/tabs'
import { GitHubContributions } from '@/components/github-contributions'
import LogoLoop from '@/components/ui/logo-loop'
import { Tree, Folder, File } from '@/components/ui/file-tree'
import { motion } from 'framer-motion'
import { useLanyard } from '@/hooks/useLanyard'
import Aurora from '@/components/ui/aurora'
import { ShinyText } from '@/components/ui/shiny-text'
import { SpotifyWidget } from '@/components/ui/spotify-widget'
import { cn } from '@/lib/utils'

import { SiNextdotjs, SiReact, SiVite, SiVuedotjs, SiJavascript, SiPython, SiLua } from 'react-icons/si'

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')
  const discordUserId = process.env.NEXT_PUBLIC_DISCORD_USER_ID || ''
  const { data: lanyardData, loading: lanyardLoading } = useLanyard(discordUserId)

  const tabs = [
    { id: 'about', label: 'About' },
  ]

  const discordUser = lanyardData?.data?.discord_user
  const profileName = discordUser?.username 
    ? discordUser.username.charAt(0).toUpperCase() + discordUser.username.slice(1).toLowerCase()
    : null
  
  const profileAvatar = discordUser?.id && !lanyardLoading
    ? `https://api.lanyard.rest/${discordUser.id}.png`
    : null

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const techStack = [
    { node: <SiNextdotjs />, title: 'Next.js' },
    { node: <SiReact />, title: 'React.js' },
    { node: <SiVite />, title: 'Vite' },
    { node: <SiVuedotjs />, title: 'Vue' },
    { node: <SiJavascript />, title: 'JavaScript' },
    { node: <SiPython />, title: 'Python' },
    { node: <SiLua />, title: 'Lua' },
  ]

  return (
    <main className="min-h-screen text-zinc-900 dark:text-zinc-100 relative">
      {/* Navbar */}
      <Navbar profileAvatar={profileAvatar} profileName={profileName} />
      
      {/* Aurora Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Aurora
          colorStops={['#111827', '#064e3b', '#022c22']}
          amplitude={0.8}
          blend={0.4}
          speed={0.3}
          />
        </div>
      
      {/* Content with backdrop */}
      <div className="relative z-10 min-h-screen">


      <div className="container mx-auto px-6 pt-24 pb-12 max-w-4xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 mb-12"
        >
          {/* Profile Image - Above username, animates to navbar when scrolled */}
          {profileAvatar && !scrolled && (
            <motion.div
              layoutId="profile-image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1,
                opacity: 1,
              }}
              transition={{ 
                duration: 0.8, 
                ease: [0.34, 1.56, 0.64, 1],
                layout: { 
                  duration: 0.8, 
                  ease: [0.34, 1.56, 0.64, 1],
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }
              }}
              whileHover={{ scale: 1.05 }}
              className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-zinc-200 dark:border-zinc-800 shadow-lg"
            >
              <Image
                src={profileAvatar}
                alt={`Profile Photo of ${profileName || 'User'}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          )}

          {/* Name and Title */}
          {profileName && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center gap-2"
            >
              <motion.h1
                className="font-mono font-semibold leading-10 text-3xl text-zinc-900 dark:text-zinc-100"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <ShinyText>{profileName}</ShinyText>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="font-mono font-semibold text-zinc-600 dark:text-zinc-400 text-center"
              >
                <ShinyText>Building modern web experiences</ShinyText> • <ShinyText>Discord automation</ShinyText> • <ShinyText>Mobile solutions</ShinyText>
              </motion.p>
            </motion.div>
          )}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-4 flex-wrap justify-center"
          >
            <a
              href="https://github.com/Tennxxl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800/50 transition-colors"
            >
              <Github className="h-4 w-4" />
              <p className="text-sm">Github</p>
            </a>
            <a
              href="https://discord.gg/9uS8xZgHPW"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800/50 transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <p className="text-sm">Discord</p>
            </a>
            <a
              href="https://reddit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800/50 transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
              </svg>
              <p className="text-sm">Reddit</p>
            </a>
            <a
              href="https://www.fiverr.com/users/velynor_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800/50 transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.034 0-.05.016-.05.05v.9c0 .033.016.05.05.05h.85c.033 0 .05-.017.05-.05v-.9c0-.034-.017-.05-.05-.05zm-1.146 4.61a.477.477 0 0 0-.344-.15h-1.5a.476.476 0 0 0-.344.15.48.48 0 0 0-.15.345v1.5c0 .133.05.25.15.345a.48.48 0 0 0 .345.15h1.5a.48.48 0 0 0 .345-.15.48.48 0 0 0 .15-.345v-1.5a.48.48 0 0 0-.15-.345zm-2.146-13.732H2.39c-.75 0-1.36.61-1.36 1.36v9.23c0 .75.61 1.36 1.36 1.36h3.58v2.28a.5.5 0 0 0 .8.4l2.64-2.68h11.34c.75 0 1.36-.61 1.36-1.36V4.16c0-.75-.61-1.36-1.36-1.36z" />
              </svg>
              <p className="text-sm">Fiverr</p>
            </a>
            <a
              href="https://builtbybit.com/creators/tenxl.406697/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800/50 transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <p className="text-sm">BuiltBybit</p>
            </a>
          </motion.div>
        </motion.div>

        {/* Tabs */}
        <Tabs tabs={tabs} defaultTab="about" onTabChange={setActiveTab} />

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 p-6 rounded-lg bg-zinc-100/30 dark:bg-zinc-900/30 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-mono font-semibold text-2xl mb-4"
          >
            <ShinyText text="About" speed={3} />
          </motion.h2>
          <div className="space-y-4 text-zinc-700 dark:text-zinc-300 font-mono text-base leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Hi, I'm <ShinyText text={profileName || 'Tennxl'} speed={3} className="green" />, an <ShinyText text="18-year-old developer" speed={3} className="green" /> living in <ShinyText text="Hungary" speed={3} className="green" />.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              I love building <ShinyText text="web applications" speed={3} className="green" />, and <ShinyText text="mobile apps" speed={3} className="green" /> are my new area of interest. I work with technologies like <ShinyText text="Next.js" speed={3} className="green" />, <ShinyText text="React" speed={3} className="green" />, <ShinyText text="JavaScript" speed={3} className="green" />, and <ShinyText text="Vite" speed={3} className="green" />.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              When I'm not coding, I'm <ShinyText text="traveling" speed={3} className="green" /> and exploring new places around the world.
            </motion.p>
          </div>
        </motion.div>

        {/* GitHub Contributions */}
        <GitHubContributions username="Tennxxl" />

        {/* File Tree Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 p-8 rounded-lg bg-zinc-900/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-zinc-800/50 min-h-[400px]"
        >
          <Tree>
            <Folder name="portfolio" defaultOpen={true} alwaysOpen={true}>
              <Folder name="projects" defaultOpen={true} alwaysOpen={true}>
                <Folder name="Worked" defaultOpen={true} alwaysOpen={true}>
                  <File>
                    <a href="https://tweakdevelopment.tebex.io/package/6683780" target="_blank" rel="noopener noreferrer" className="hover:underline text-lg">
                      Tweak Shops
                    </a>
                  </File>
                  <File icon="https://builtbybit.com/favicon.ico">
                    <a href="https://builtbybit.com/resources/minecraft-dashboard.54112/" target="_blank" rel="noopener noreferrer" className="hover:underline text-lg">
                      Minecraft Dashboard
                    </a>
                  </File>
                  <File icon="https://builtbybit.com/favicon.ico">
                    <a href="https://builtbybit.com/resources/webhook-sender-website-code-generator.81865/" target="_blank" rel="noopener noreferrer" className="hover:underline text-lg">
                      Webhook sender
                    </a>
                  </File>
                </Folder>
                <Folder name="Working on" defaultOpen={true} alwaysOpen={true}>
                  <File icon="https://zetsubot.eu/favicon.ico">
                    <a href="https://zetsubot.eu" target="_blank" rel="noopener noreferrer" className="hover:underline text-lg">
                      Zetsu bot
                    </a>
                  </File>
                  <File>
                    <span className="text-lg">
                      Azúr látvány e-book oldal <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-2">(soon)</span>
                    </span>
                  </File>
                </Folder>
              </Folder>
            </Folder>
          </Tree>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono font-semibold text-4xl mb-8 text-center"
          >
            <ShinyText>My Tech Stack</ShinyText>
          </motion.h1>
          <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
            <LogoLoop
              logos={techStack}
              speed={40}
              direction="left"
              logoHeight={48}
              gap={40}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#111827"
              ariaLabel="Technology stack"
            />
          </div>
          <div style={{ height: '80px', position: 'relative', overflow: 'hidden', marginTop: '1rem' }}>
            <LogoLoop
              logos={techStack}
              speed={40}
              direction="right"
              logoHeight={48}
              gap={40}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#111827"
              ariaLabel="Technology stack"
            />
          </div>
        </motion.div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-4 pb-8">
          <p className="text-center opacity-70 max-w-[580px] font-mono font-semibold text-base tracking-tight text-zinc-600 dark:text-zinc-400">
            Made with <span className="text-red-500">♥</span> by tennxl
          </p>
        </div>
      </div>
      </div>

      {/* Spotify Widget */}
      {discordUserId && (
        <SpotifyWidget discordUserId={discordUserId} />
      )}
    </main>
  )
}
