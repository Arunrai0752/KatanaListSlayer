import React from "react";
import { motion } from "framer-motion";
import { Upload, Sparkles, Download } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload Your List",
      description: "Import your email list in CSV or TXT format. Drag & drop or paste directly.",
      color: "#00d4ff"
    },
    {
      number: "02",
      icon: Sparkles,
      title: "AI Scans & Slashes",
      description: "Our AI engine detects and eliminates spam traps, invalid addresses, and temporary emails in real-time.",
      color: "#8b5cf6"
    },
    {
      number: "03",
      icon: Download,
      title: "Download Clean List",
      description: "Get your verified, high-quality list ready for campaigns. Export and integrate instantly.",
      color: "#06b6d4"
    }
  ];

  return (
  <section className="relative py-24 bg-linear-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">How It Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three simple steps to a pristine email list. Clean thousands of emails in minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-linear-to-r from-[#00d4ff] via-[#8b5cf6] to-[#06b6d4] opacity-30" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="relative bg-[#1a1a2e] rounded-2xl p-8 border border-gray-800 hover:border-[#00d4ff]/30 transition-all group">
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-linear-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center font-bold text-xl border-4 border-[#0a0a0f]">
                  {step.number}
                </div>

                <div className="mb-6 mt-4">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ 
                      background: `linear-gradient(135deg, ${step.color}20 0%, transparent 100%)`,
                      border: `1px solid ${step.color}40`
                    }}
                  >
                    <step.icon className="w-8 h-8" style={{ color: step.color }} />
                  </div>
                </div>

                <h3 className="text-2xl text-yellow-500 font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>

                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10"
                  style={{ background: step.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Start cleaning your list in under 2 minutes</p>
          <div className="inline-flex items-center gap-2 text-[#00d4ff] font-semibold">
            <Sparkles className="w-5 h-5" />
            <span>No credit card required for trial</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
