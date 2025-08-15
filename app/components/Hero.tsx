'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, Download, Mail, Github, Linkedin, Twitter, Code, Zap, Star, MessageCircle, Phone, MapPin } from 'lucide-react'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const floatingIcons = [
    { icon: Code, delay: 0, position: 'top-20 left-10' },
    { icon: Zap, delay: 0.5, position: 'top-40 right-20' },
    { icon: Star, delay: 1, position: 'bottom-40 left-20' },
    { icon: Code, delay: 1.5, position: 'bottom-20 right-10' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 0.1, scale: 1 } : {}}
          transition={{ delay: item.delay, duration: 1 }}
          className={`absolute ${item.position} text-primary-500/30`}
        >
          <item.icon className="w-8 h-8 animate-float" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Discord Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-4 bg-discord-dark border border-discord-blurple/20 rounded-xl px-6 py-4 shadow-lg"
          >
            {/* Discord Avatar */}
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-discord-blurple to-discord-fuchsia rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-discord-green rounded-full border-2 border-discord-dark"></div>
            </div>
            
            {/* Discord Info */}
            <div className="text-left">
              <div className="flex items-center space-x-2">
                <span className="text-white font-semibold">Developer#1234</span>
                <span className="text-discord-green text-xs">● Online</span>
              </div>
              <div className="text-gray-400 text-sm">Full-Stack Developer</div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="gradient-text">Full-Stack</span>
            <br />
            <span className="text-white">Developer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting digital experiences with modern technologies. 
            <span className="text-primary-400"> React</span>, 
            <span className="text-primary-400"> Node.js</span>, and 
            <span className="text-primary-400"> Next.js</span> enthusiast.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-discord-blurple to-discord-fuchsia text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-discord-blurple/25 transition-all duration-300 flex items-center space-x-2"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download CV</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-discord-blurple text-discord-blurple px-8 py-4 rounded-full font-semibold text-lg hover:bg-discord-blurple hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Discord Me</span>
            </motion.button>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {[
              { icon: MessageCircle, href: '#', label: 'Discord', color: 'hover:text-discord-blurple' },
              { icon: Mail, href: '#', label: 'Email', color: 'hover:text-discord-green' },
              { icon: Phone, href: '#', label: 'Phone', color: 'hover:text-discord-yellow' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`text-gray-400 ${social.color} transition-colors duration-300 p-2 rounded-full hover:bg-discord-dark/50`}
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 hover:text-discord-blurple transition-colors cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
