import React from "react";
import { motion } from "framer-motion";
import { Upload, BarChart3, Download, Play, Sparkles } from "lucide-react";

export default function ScreenshotsSection() {
  const screenshots = [
    {
      title: "Upload Interface",
      description: "Drag & drop or paste your email list with instant validation",
      icon: Upload,
      gradient: "from-[#00d4ff] to-[#06b6d4]",
      stats: "Process 10K+ emails in seconds",
      badge: "Smart Detection"
    },
    {
      title: "Real-Time Analytics",
      description: "Watch your list get cleaned with live progress metrics",
      icon: BarChart3,
      gradient: "from-[#8b5cf6] to-[#c084fc]",
      stats: "95% accuracy guaranteed",
      badge: "Live Preview"
    },
    {
      title: "Export Results",
      description: "Download multiple formats with detailed reports",
      icon: Download,
      gradient: "from-[#06b6d4] to-[#8b5cf6]",
      stats: "Zero data loss",
      badge: "Multi-Format"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <section id="demo" className="relative py-24 bg-[#0a0a0f] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00d4ff]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#8b5cf6]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#06b6d4]/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#00d4ff]" />
            <span className="text-sm font-medium text-[#00d4ff]">Live Demo</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">See </span>
            <span className="glow-text bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent">
              Katana
            </span>
            <span className="text-white"> in Action</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience the most powerful email cleaning dashboard with real-time processing, 
            advanced analytics, and instant results.
          </p>
        </motion.div>

        {/* Screenshots Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group cursor-pointer"
            >
              <motion.div
                variants={hoverVariants}
                className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-3xl overflow-hidden border border-gray-800 hover:border-[#00d4ff]/40 transition-all duration-500 shadow-2xl shadow-black/50"
              >
                {/* Animated Border Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${screenshot.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-sm`} />
                
                {/* Card Content */}
                <div className="relative bg-[#0a0a0f] rounded-3xl m-0.5">
                  {/* Mock Screenshot */}
                  <div className="aspect-video bg-gradient-to-br from-gray-900 to-[#0a0a0f] p-6 relative overflow-hidden">
                    {/* Animated Gradient Overlay */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${screenshot.gradient} opacity-5`}
                      animate={{
                        opacity: [0.05, 0.1, 0.05],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                    
                    {/* Floating Icon */}
                    <div className="relative z-10 flex items-center justify-center h-full">
                      <motion.div 
                        className="w-24 h-24 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-[#00d4ff]/20 transition-all duration-500"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <screenshot.icon className="w-12 h-12 text-white" />
                      </motion.div>
                    </div>

                    {/* Mock Browser UI */}
                    <div className="absolute top-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/80 group-hover:bg-red-400 transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80 group-hover:bg-yellow-400 transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80 group-hover:bg-green-400 transition-colors" />
                      </div>
                      <motion.div 
                        className="h-2 bg-white/10 rounded-full w-3/4 overflow-hidden"
                        whileHover={{ width: "85%" }}
                      >
                        <div className={`h-full bg-gradient-to-r ${screenshot.gradient} rounded-full`} />
                      </motion.div>
                    </div>

                    {/* Stats Badge */}
                    <div className="absolute bottom-4 right-4">
                      <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                        <span className="text-xs font-medium text-white/80">
                          {screenshot.stats}
                        </span>
                      </div>
                    </div>

                    {/* Hover Play Button */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center shadow-2xl shadow-[#00d4ff]/40">
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Info Section */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#00d4ff] group-hover:to-[#8b5cf6] group-hover:bg-clip-text transition-all duration-500">
                        {screenshot.title}
                      </h3>
                      <div className="px-2 py-1 rounded-md bg-gradient-to-r from-[#00d4ff]/20 to-[#8b5cf6]/20 border border-[#00d4ff]/30">
                        <span className="text-xs font-semibold text-[#00d4ff]">
                          {screenshot.badge}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed mb-4">
                      {screenshot.description}
                    </p>
                    
                    {/* Progress Indicator */}
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${screenshot.gradient} rounded-full`}
                          initial={{ width: "0%" }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.3 + 0.5, duration: 1.5 }}
                        />
                      </div>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white font-semibold rounded-2xl shadow-2xl shadow-[#00d4ff]/30 hover:shadow-[#00d4ff]/50 transition-all duration-300"
          >
            Try Live Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}