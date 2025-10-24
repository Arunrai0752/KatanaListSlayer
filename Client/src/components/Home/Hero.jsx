import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Upload, Zap } from 'lucide-react'
import Sideimage from "../../assets/Sideimage.png"

const heroVariant = {
  hidden: { opacity: 0, x: -40 },
  enter: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  },
}

const imageVariant = {
  hidden: { opacity: 0, x: 40, scale: 0.9 },
  enter: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { 
      delay: 0.4, 
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    } 
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const glowVariant = {
  initial: { opacity: 0.2 },
  hover: { 
    opacity: 0.3,
    scale: 1.02,
    transition: { duration: 0.3 }
  }
}

export default function Hero() {
  return (
    <section className="relative flex justify-center bg-linear-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00d4ff]/10 via-transparent to-transparent"></div>
      
      <motion.div 
        className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center py-16 md:py-24"
        variants={staggerContainer}
        initial="hidden"
        animate="enter"
      >
        <motion.div 
          className="md:col-span-7 flex flex-col justify-center" 
          variants={heroVariant}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 mb-6 group hover:border-[#00d4ff]/40 transition-all w-fit"
            variants={itemVariant}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-[#00d4ff] mr-2" />
            <span className="text-xs font-semibold text-[#00d4ff] tracking-wide">⚡ LIMITED TIME OFFER</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight"
            variants={itemVariant}
          >
            Slash Invalid Emails. 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00d4ff] to-[#8b5cf6] block mt-3">
              Boost Deliverability.
            </span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-lg text-gray-300 max-w-2xl leading-relaxed"
            variants={itemVariant}
          >
            Automatically scan, verify, and eliminate invalid, duplicate, and risky email addresses in real-time.
            <span className="block mt-3 font-semibold text-white bg-linear-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent">
              Clean lists. Higher delivery. Protected reputation.
            </span>
          </motion.p>

          <motion.div 
            className="mt-8 flex flex-wrap gap-4 text-base"
            variants={itemVariant}
          >
            <motion.div 
              className="flex items-center bg-[#1a1a2e] px-4 py-2 rounded-lg border border-gray-800 hover:border-[#00d4ff]/30 transition-all group"
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <div className="w-2 h-2 bg-[#00d4ff] rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
              <span>25,000 Emails/Day</span>
            </motion.div>
            <motion.div 
              className="flex items-center bg-[#1a1a2e] px-4 py-2 rounded-lg border border-gray-800 hover:border-[#8b5cf6]/30 transition-all group"
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <div className="w-2 h-2 bg-[#8b5cf6] rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
              <span>99% Accuracy</span>
            </motion.div>
            <motion.div 
              className="flex items-center bg-[#1a1a2e] px-4 py-2 rounded-lg border border-gray-800 hover:border-[#06b6d4]/30 transition-all group"
              whileHover={{ y: -2, scale: 1.02 }}
            >
              <div className="w-2 h-2 bg-[#06b6d4] rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
              <span>Lifetime License</span>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-10 flex flex-wrap gap-4 items-center"
            variants={itemVariant}
          >
            <motion.a 
              href="#" 
              className="inline-flex items-center px-8 py-4 bg-linear-to-r from-[#00d4ff] to-[#8b5cf6] text-white font-bold rounded-xl shadow-lg hover:shadow-[#00d4ff]/25 transition-all group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Zap className="w-5 h-5 mr-3" />
              Start Cleaning Now
            </motion.a>
            <motion.a 
              href="#" 
              className="inline-flex items-center px-8 py-4 bg-[#1a1a2e] backdrop-blur-sm border border-gray-700 text-white font-semibold rounded-xl hover:border-[#00d4ff]/30 hover:bg-[#1a1a2e]/80 transition-all group"
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <Upload className="w-5 h-5 mr-3 text-[#00d4ff]" />
              Watch Demo
            </motion.a>
          </motion.div>

          <motion.div 
            className="mt-8 p-4 bg-linear-to-r from-[#00d4ff]/10 to-[#8b5cf6]/10 border border-[#00d4ff]/20 rounded-xl backdrop-blur-sm"
            variants={itemVariant}
            whileHover={{ scale: 1.01 }}
          >
            <p className="text-[#00d4ff] text-sm font-semibold text-center">
              🎉 Exclusive Deal: Lifetime License $299 (Was $1499) - Limited Time Only!
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="md:col-span-5 flex justify-center md:justify-end items-center" 
          variants={imageVariant}
        >
          <motion.div 
            className="relative w-full max-w-md"
            whileHover="hover"
            initial="initial"
          >
            <motion.div 
              className="absolute -inset-4 bg-linear-to-r from-[#00d4ff] via-[#8b5cf6] to-[#06b6d4] rounded-2xl blur-xl"
              variants={glowVariant}
            />
            
            <div className="relative bg-[#1a1a2e] rounded-2xl shadow-xl overflow-hidden border border-gray-800 group-hover:border-[#00d4ff]/30 transition-all">
              <motion.img 
                src={Sideimage} 
                alt="Email Verification Dashboard" 
                className="w-full h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
              
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                <div className="flex justify-between text-sm">
                  <div className="text-[#00d4ff]">
                    <div className="font-semibold text-xs opacity-90">Valid</div>
                    <div className="text-lg font-bold">94.2%</div>
                  </div>
                  <div className="text-[#8b5cf6]">
                    <div className="font-semibold text-xs opacity-90">Invalid</div>
                    <div className="text-lg font-bold">3.1%</div>
                  </div>
                  <div className="text-[#06b6d4]">
                    <div className="font-semibold text-xs opacity-90">Risky</div>
                    <div className="text-lg font-bold">2.7%</div>
                  </div>
                </div>
              </div>

              <motion.div 
                className="absolute top-4 right-4"
                whileHover={{ scale: 1.05 }}
              >
                <span className="bg-linear-to-r from-[#00d4ff] to-[#8b5cf6] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  SPECIAL OFFER
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}