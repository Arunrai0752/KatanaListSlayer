import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowDown } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Liam Rodriguez",
      role: "Growth Marketing Lead",
      company: "GrowthMark Agency",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      content: "Katana cleaned 1M emails in minutes and boosted our campaign open rate by 42%. This tool is an absolute game-changer for agencies.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Email Marketing Director",
      company: "TechFlow Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      content: "We were losing thousands on bad emails. Katana's AI detection saved us over $15K in the first month alone. Worth every penny.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Founder & CEO",
      company: "EmailPro",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      content: "The most accurate email cleaner I've ever used. Real-time validation is lightning fast, and the dashboard is beautiful. Highly recommend.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Digital Marketing Manager",
      company: "BrandVibe",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      content: "Katana's spam trap detection is unmatched. Our sender reputation improved dramatically, and inbox rates jumped from 67% to 94%.",
      rating: 5
    },
    {
      name: "David Park",
      role: "Head of Operations",
      company: "ScaleUp Marketing",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      content: "Integration was seamless. The API works flawlessly with our CRM. Customer support is phenomenal. Can't imagine running campaigns without it.",
      rating: 5
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="relative py-20 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00d4ff]/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full px-5 py-3 mb-8"
          >
            <Star className="w-4 h-4 text-[#00d4ff] mr-2" />
            <span className="text-sm font-bold text-[#00d4ff] tracking-wide">TRUSTED BY THOUSANDS</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
          >
            Loved by
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] mt-2">
              Marketing Teams
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            See what our customers are saying about transforming their email marketing with Katana
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -6,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="relative h-full bg-[#1a1a2e] rounded-xl p-6 border border-gray-700 hover:border-[#00d4ff]/50 transition-all duration-300 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#00d4ff] text-[#00d4ff]" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-colors duration-300">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-[#00d4ff]/30 group-hover:border-[#00d4ff]/60 transition-all duration-300"
                  />
                  <div>
                    <div className="font-semibold text-white group-hover:text-[#00d4ff] transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={itemVariants}
            whileHover={{ 
              y: -6,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="group"
          >
            <div className="relative h-full bg-[#1a1a2e] rounded-xl p-8 border border-gray-700 hover:border-[#00d4ff]/50 transition-all duration-300 shadow-lg flex flex-col justify-center items-center text-center">
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-[#00d4ff]/10 flex items-center justify-center group-hover:bg-[#00d4ff]/20 transition-all duration-300 mb-4">
                  <ArrowDown className="w-8 h-8 text-[#00d4ff]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">More Success Stories</h3>
                <p className="text-gray-400 text-sm">Discover how others are transforming their email marketing</p>
              </div>
              
              <motion.button
                onClick={() => console.log('Load more reviews')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] text-white font-bold rounded-lg hover:shadow-[#00d4ff]/25 transition-all duration-300 group"
              >
                Load More Reviews
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}