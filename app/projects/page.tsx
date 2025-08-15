'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, Globe, Star, Code, MessageSquare, Users, Youtube } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  category: 'Web Development' | 'Bot Development' | 'Backend Development' | 'Data Visualization' | 'AI/ML' | 'Productivity';
  image?: string; // optional cover image (public/ or remote if configured)
  youtubeUrl?: string; // optional YouTube video link
  linkUrl?: string; // optional generic link
  linkLabel?: string; // optional label for generic link
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Vouch System',
    description: 'Easy to use vouch system for discord servers',
    tags: ['JS', 'Discord.js'],
    image: 'https://i.imgur.com/zFmbiLe.jpeg',
linkUrl: 'https://builtbybit.com/resources/vouch-system-make-your-server-better.54345/',
linkLabel: 'Cehck out'
    ,category: 'Web Development'
  },
  {
    id: 2,
    title: 'Minecraft Dashboard',
    description: 'Dashboard made for minecraft servers integrated with STRIPE API.',
    tags: ['PHP', 'Bootstrap', 'Stripe'],
image: 'https://i.imgur.com/xZNzLK9.jpeg',
linkUrl: 'https://builtbybit.com/resources/minecraft-dashboard.54112/',
linkLabel: 'Check out',
youtubeUrl: 'https://www.youtube.com/watch?v=Edb60yacjk4'
    ,category: 'Web Development'
  },
  {
    id: 3,
    title: 'Tweak Shops',
    description: 'Highly customizable shop for FiveM servers.',
    tags: ['JS', 'CSS', 'HTML', 'LUA'],
    youtubeUrl: 'https://www.youtube.com/watch?v=Z_8Xup0T1FA',
    image: 'https://i.imgur.com/841kjog.png',
    linkUrl: 'https://tweakdevelopment.tebex.io/package/6683780/',
    linkLabel: 'Check out'
    ,category: 'Data Visualization'
  },
  {
    id: 4,
    title: 'Zetsu Bot',
    description: 'Unique discord bot with a lot of features.',
    tags: ['JS', 'Discord.js'],
linkUrl: 'https://www.zetsubot.eu/',
linkLabel: 'Website',
image: 'https://i.imgur.com/fpEl1n1.png'
    ,category: 'AI/ML'
  }
];

const headerGradients = [
  'from-teal-500/20 via-teal-600/10 to-transparent',
  'from-cyan-500/18 via-cyan-600/9 to-transparent',
  'from-emerald-500/22 via-emerald-600/11 to-transparent'
];

// Normalize image paths so users can write '../p.jpg' or './p.jpg' and we resolve to '/p.jpg'
const normalizeImageSrc = (src?: string): string | undefined => {
  if (!src) return undefined;
  if (src.startsWith('http') || src.startsWith('/')) return src;
  const cleaned = src.replace(/^(\.\.\/|\.\/)+/, '');
  return `/${cleaned}`;
};

const categories: Array<Project['category'] | 'All'> = [
  'All',
  'Web Development',
  'Bot Development',
  'Backend Development',
  'Data Visualization',
  'AI/ML',
  'Productivity'
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('All');
  const visibleProjects = selectedCategory === 'All' ? projects : projects.filter(p => p.category === selectedCategory);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState<string>('');
  const [notificationText, setNotificationText] = useState<string>('');

  const showContact = () => {
    setNotificationTitle('Contact');
    setNotificationText('Add me on Discord: tennxl');
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };
  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Pure Black Background with Moving Teal Orbs (same as home) */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black"></div>
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

      {/* Left Navigation - same style as home */}
      <div className="hidden lg:flex fixed left-4 sm:left-8 md:left-16 lg:left-32 top-1/2 transform -translate-y-1/2 flex-col space-y-4 sm:space-y-6 z-50">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center space-y-2 cursor-pointer group transform -rotate-12 hover:scale-110 transition-transform duration-300"
        >
          <Link href="/">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center group-hover:bg-teal-500/20 group-hover:border-teal-400/30 transition-all duration-300 group-hover:rotate-12 shadow-lg">
              <Code className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white/80 group-hover:text-teal-300 transition-colors duration-300" />
            </div>
          </Link>
          <span className="text-white/70 text-xs sm:text-sm font-medium group-hover:text-white transition-colors duration-300 bg-black/40 px-2 py-1 rounded-full backdrop-blur-sm">Home</span>
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

      {/* Right Navigation - same style as home */}
      <div className="hidden lg:flex fixed right-4 sm:right-8 md:right-16 lg:right-32 top-1/2 transform -translate-y-1/2 flex-col space-y-4 sm:space-y-6 z-50">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center space-y-2 cursor-pointer group transform rotate-8 hover:scale-110 transition-transform duration-300"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); showContact(); }}
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

      {/* Header */}
      <header className="px-6 md:px-10 pt-8 pb-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="bg-white text-black px-3 py-2 font-bold text-lg">TENXL</div>
        </div>
      </header>

      {/* Hero title */
      }
      <section className="relative z-10 px-6 md:px-10 pt-4 pb-8">
        <div className="max-w-6xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="mt-3 text-white/70 max-w-2xl">A curated selection of recent work. Built with care, motion, and modern stacks.</p>
        </div>
      </section>

      {/* Section spacer */}
      <div className="h-2" />

      {/* Projects timeline layout (distinct look, matches homepage colors) */}
      <section className="relative z-10 px-6 md:px-10 pb-28">
        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative grid grid-cols-12 gap-6 md:gap-8 items-stretch mb-14"
            >
              {/* Center dot on the timeline */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 w-3 h-3 rounded-full bg-teal-400 shadow-[0_0_0_4px_rgba(20,184,166,0.15)]" />

              {/* Card */}
              <div className={`col-span-12 md:col-span-6 ${idx % 2 === 0 ? 'md:col-start-1' : 'md:col-start-7'}`}>
                <article className="group rounded-2xl border border-white/20 bg-black/75 backdrop-blur-md overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:border-teal-400/40 hover:bg-black/90 transition-all">
                  <div className="relative h-48 overflow-hidden">
                    {project.image ? (
                      <Image src={normalizeImageSrc(project.image)!} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-95" />
                    ) : (
                      <>
                        <div className={`absolute inset-0 bg-gradient-to-br ${headerGradients[idx % headerGradients.length]}`} />
                        <div className="absolute inset-0 bg-[radial-gradient(1000px_300px_at_10%_10%,rgba(255,255,255,0.06),transparent),radial-gradient(700px_260px_at_90%_80%,rgba(255,255,255,0.05),transparent)]" />
                      </>
                    )}
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                      <div className="flex items-center gap-2 text-white/70">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white/90 transition-colors">
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-white/90 transition-colors">
                            <Globe className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] border border-white/15 text-white/80 bg-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-white/60">
                        <Star className="w-3.5 h-3.5 text-yellow-300/80" />
                        <span>Featured</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        {project.youtubeUrl && (
                          <a className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-red-400/40 text-red-300 hover:text-red-200 hover:border-red-300/60 transition-colors" href={project.youtubeUrl} target="_blank" rel="noreferrer">
                            YouTube <Youtube className="w-3.5 h-3.5" />
                          </a>
                        )}
                        {project.linkUrl && (
                          <a className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-teal-400/30 text-teal-300 hover:text-teal-200 hover:border-teal-300/60 transition-colors" href={project.linkUrl} target="_blank" rel="noreferrer">
                            {project.linkLabel ?? 'Visit'} <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mobile Bottom Navigation (same as home) */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 lg:hidden">
        <div className="flex space-x-3 bg-black/80 backdrop-blur-md border border-white/20 rounded-2xl p-3">
          <Link href="/">
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
          <motion.div
            className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-400/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MessageSquare className="w-5 h-5 text-white/80" />
          </motion.div>
          <motion.div
            className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-green-600/20 hover:border-green-500/30 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Users className="w-5 h-5 text-white/80" />
          </motion.div>
        </div>
      </div>

      
    </main>
  );
}