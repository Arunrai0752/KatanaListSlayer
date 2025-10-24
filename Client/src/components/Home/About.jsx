import React from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Shield, Sword } from "lucide-react";

export default function AboutSection() {
  const benefits = [
    {
      icon: Target,
      title: "Higher Deliverability",
      description: "Reach real inboxes, not spam folders. Improve open rates by up to 45%."
    },
    {
      icon: TrendingUp,
      title: "Better ROI",
      description: "Stop wasting money on dead emails. Every dollar counts in your campaigns."
    },
    {
      icon: Shield,
      title: "Protect Your Reputation",
      description: "Keep your sender score pristine. Avoid blacklists and maintain trust."
    }
  ];

  return (
    <section className="relative py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Animated Sword Metaphor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Animated circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-[#00d4ff]/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-[#8b5cf6]/20"
              />
              
              {/* Center sword */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sword className="w-32 h-32 text-[#00d4ff] transform rotate-45" />
                  <div className="absolute inset-0 blur-2xl bg-[#00d4ff] opacity-50" />
                </motion.div>
              </div>

              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-[#00d4ff] rounded-full"
                  style={{
                    top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                    left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.25,
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-[#00d4ff] font-semibold">Built by Marketers, for Marketers</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">The Samurai of</span>
              <br />
              <span className="glow-text text-amber-300">Email List Cleaning</span>
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              We built Katana because we were tired of bloated email lists costing us thousands in wasted sends. 
              Like a samurai's blade cutting through chaos, Katana precisely eliminates every invalid, temporary, 
              spam trap, and dead email from your list — leaving only the sharpest, highest-quality contacts.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-4 p-4 rounded-xl bg-linear-to-r from-[#1a1a2e] to-transparent border border-gray-800 hover:border-[#00d4ff]/30 transition-all group"
                >
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-linear-to-br from-[#00d4ff]/20 to-[#8b5cf6]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-yellow-300 text-lg mb-1">{benefit.title}</h3>
                    <p className="text-gray-400">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
