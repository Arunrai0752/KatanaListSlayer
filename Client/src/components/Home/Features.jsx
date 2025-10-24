import React from "react";
import { motion } from "framer-motion";
import { Brain, Zap, Lock, Code, BarChart3, Shield, Clock, Globe } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "AI-Based Validation",
      description: "Advanced machine learning detects patterns humans can't see"
    },
    {
      icon: Zap,
      title: "Real-Time Detection",
      description: "Instant spam trap and temporary email identification"
    },
    {
      icon: Lock,
      title: "Bulk Cleaning",
      description: "Process millions of emails in minutes, not hours"
    },
    {
      icon: Code,
      title: "API Integration",
      description: "Seamlessly integrate with your existing workflow"
    },
    {
      icon: Shield,
      title: "GDPR Compliant",
      description: "Enterprise-grade security for your sensitive data"
    },
    {
      icon: BarChart3,
      title: "Dashboard Analytics",
      description: "Track progress and quality metrics in real-time"
    },
    {
      icon: Clock,
      title: "Lightning Fast",
      description: "99.9% uptime with average 2-second response time"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Validate emails from 200+ countries and territories"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="features" className="relative py-20 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00d4ff]/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full px-5 py-3 mb-8"
          >
            <Zap className="w-4 h-4 text-[#00d4ff] mr-2" />
            <span className="text-sm font-bold text-[#00d4ff] tracking-wide">POWERFUL FEATURES</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
          >
            Cutting-Edge
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#00d4ff] to-[#8b5cf6] mt-2">
              Technology
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Every feature designed to give you the cleanest, most reliable email list possible
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative bg-[#1a1a2e] rounded-xl p-6 border border-gray-700 hover:border-[#00d4ff]/50 transition-all duration-300 h-full overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-linear-to-br from-[#00d4ff]/3 to-[#8b5cf6]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <motion.div 
                    className="mb-5"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-14 h-14 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center group-hover:bg-[#00d4ff]/20 transition-all duration-300 border border-[#00d4ff]/20">
                      <feature.icon className="w-7 h-7 text-[#00d4ff]" />
                    </div>
                  </motion.div>

                  <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#00d4ff] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#00d4ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-6 py-4 bg-[#1a1a2e] border border-gray-600 rounded-xl hover:border-[#00d4ff]/50 transition-all duration-300 shadow-lg"
          >
            <Shield className="w-5 h-5 text-[#00d4ff] mr-3" />
            <span className="text-white font-semibold text-lg">Enterprise-Grade Security & Performance</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}