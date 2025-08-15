'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Calendar, MapPin, Mail, Github, Linkedin, Download, Code, Zap, Target } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { label: 'Years Experience', value: '3+', icon: Calendar },
    { label: 'Projects Completed', value: '50+', icon: Code },
    { label: 'Happy Clients', value: '30+', icon: User },
    { label: 'Technologies', value: '15+', icon: Zap },
  ]

  const highlights = [
    'Full-stack web development with modern frameworks',
    'Mobile app development with React Native',
    'Database design and API development',
    'UI/UX design and implementation',
    'DevOps and cloud deployment',
    'Performance optimization and testing',
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative digital solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Turning Ideas Into{' '}
                <span className="gradient-text">Digital Reality</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I'm a passionate full-stack developer with over 3 years of experience crafting 
                digital experiences that make a difference. My journey in tech started with 
                curiosity and has evolved into a deep love for solving complex problems 
                through elegant code.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community. 
                I believe in writing clean, maintainable code and creating user experiences 
                that delight and inspire.
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Target className="w-5 h-5 text-primary-500 mr-2" />
                What I Do
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-2 text-gray-400"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span>{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="mailto:hello@example.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hello@example.com</span>
              </motion.a>
              <motion.a
                href="https://github.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 text-center group hover:border-primary-500/50 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Profile Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="relative"
            >
              <div className="glass-card p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Your Name</h4>
                <p className="text-gray-400 mb-4">Full-Stack Developer</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center space-x-2 mx-auto"
                >
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
