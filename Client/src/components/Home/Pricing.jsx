import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
}

const cardHover = { 
  hover: { 
    scale: 1.05,
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" }
  } 
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 35,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { days, hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 }
        } else if (minutes > 0) {
          return { ...prev, minutes: minutes - 1, seconds: 59 }
        } else if (hours > 0) {
          return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 }
        } else if (days > 0) {
          return { ...prev, days: days - 1, hours: 23, minutes: 59, seconds: 59 }
        } else {
          clearInterval(timer)
          return prev
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full bg-gradient-to-r from-[#00d4ff]/10 to-[#8b5cf6]/10 border border-[#00d4ff]/30 rounded-xl p-4 mt-8 mb-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-[#00d4ff] font-bold text-sm">OFFER ENDS IN</span>
        </div>
        <div className="flex justify-center items-center gap-4 md:gap-8">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.days}</div>
            <div className="text-xs text-gray-400">DAYS</div>
          </div>
          <div className="text-2xl text-[#00d4ff] font-bold">:</div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
            <div className="text-xs text-gray-400">HOURS</div>
          </div>
          <div className="text-2xl text-[#00d4ff] font-bold">:</div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            <div className="text-xs text-gray-400">MIN</div>
          </div>
          <div className="text-2xl text-[#00d4ff] font-bold">:</div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
            <div className="text-xs text-gray-400">SEC</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PriceCard({ title, price, originalPrice, description, features, popular, limited, savings }) {
  return (
    <motion.div 
      whileHover="hover" 
      variants={cardHover}
      className={`relative p-8 rounded-2xl border-2 ${
        popular 
          ? 'bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] text-white border-transparent' 
          : limited
          ? 'bg-gradient-to-br from-gray-900 to-black text-white border-[#00d4ff]'
          : 'bg-[#1a1a2e] text-white border-gray-700'
      } shadow-xl hover:shadow-2xl transition-all duration-300`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            ⚡ MOST POPULAR
          </span>
        </div>
      )}
      
      {limited && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            🔥 LIMITED OFFER
          </span>
        </div>
      )}

      {savings && (
        <div className="absolute -top-4 right-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            SAVE {savings}
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2 text-white">
        {title}
      </h3>
      
      <p className={`text-sm mb-6 ${popular ? 'text-blue-100' : 'text-gray-300'}`}>
        {description}
      </p>

      <div className="mb-6">
        {originalPrice && (
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg text-gray-400 line-through">${originalPrice}</span>
            <span className="bg-[#00d4ff] text-white px-2 py-1 rounded text-xs font-bold">
              SPECIAL DEAL
            </span>
          </div>
        )}
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-extrabold text-white">
            {price}
          </span>
          {price !== 'Custom' && !limited && (
            <span className={`text-lg ${popular ? 'text-blue-100' : 'text-gray-300'}`}>/year</span>
          )}
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
              popular ? 'bg-white/20' : 'bg-[#00d4ff]/20'
            }`}>
              <svg className={`w-3 h-3 ${popular ? 'text-white' : 'text-[#00d4ff]'}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className={popular ? 'text-blue-50' : 'text-gray-200'}>{feature}</span>
          </li>
        ))}
      </ul>

      <motion.a 
        href="#" 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`block w-full text-center py-4 font-bold rounded-xl transition-all duration-300 ${
          popular 
            ? 'bg-white text-[#00d4ff] hover:bg-gray-100 hover:shadow-lg' 
            : limited
            ? 'bg-[#00d4ff] text-white hover:bg-[#00b4cc] hover:shadow-lg'
            : 'bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white hover:shadow-lg hover:shadow-[#00d4ff]/25'
        }`}
      >
        {limited ? '🚀 GRAB LIFETIME DEAL' : 'GET STARTED NOW'}
      </motion.a>

      {limited && (
        <div className="text-center mt-4">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-[#00d4ff] h-2 rounded-full w-3/4"></div>
          </div>
          <p className="text-[#00d4ff] text-xs mt-2">🔥 67% claimed - Limited seats left!</p>
        </div>
      )}
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28 bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 mb-4"
          >
            <span className="text-sm font-semibold text-[#00d4ff]">⚡ LIMITED TIME OFFER</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6]">Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose the plan that works best for your business. No hidden fees, no surprises.
          </p>
          
          <CountdownTimer />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={container}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <PriceCard 
            title="1-YEAR LICENSE" 
            price="$99"
            originalPrice="$799"
            description="Full access for 12 months"
            savings="88%"
            features={[
              "25,000 emails per day",
              "All validation features",
              "Priority email support",
              "Bulk processing",
              "Duplicate removal",
              "Spam trap detection",
              "1-year updates included"
            ]}
            popular={true}
          />
          
          <PriceCard 
            title="LIFETIME LICENSE" 
            price="$299"
            originalPrice="$1499"
            description="One-time payment, forever access"
            savings="80%"
            features={[
              "25,000 emails per day - FOREVER",
              "All current & future features",
              "Lifetime updates & support",
              "Premium priority support",
              "White-label option available",
              "API access unlimited",
              "No monthly fees ever"
            ]}
            limited={true}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="bg-[#1a1a2e] rounded-2xl p-8 border border-[#00d4ff]/30 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">🚀 Ready to Clean Your Email List?</h3>
            <p className="text-gray-300 mb-6">
              Join thousands of marketers who trust our platform to maintain clean lists and maximize deliverability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white font-bold rounded-xl hover:shadow-[#00d4ff]/25 transition-all text-lg"
              >
                ⚡ GET STARTED NOW
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-xl hover:bg-[#1a1a2e] hover:border-[#00d4ff]/30 transition-all"
              >
                📞 Book Demo Call
              </motion.a>
            </div>
            <p className="text-gray-400 text-sm mt-4">🔒 30-day money-back guarantee • ⚡ Instant access</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}