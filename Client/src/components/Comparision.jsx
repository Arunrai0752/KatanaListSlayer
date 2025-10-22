import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  const competitors = [
    { name: "Katana", isUs: true },
    { name: "Competitor A", isUs: false },
    { name: "Competitor B", isUs: false },
    { name: "Competitor C", isUs: false }
  ];

  const features = [
    { name: "AI-Powered Detection", katana: true, compA: false, compB: true, compC: false },
    { name: "99.9% Accuracy Rate", katana: true, compA: false, compB: false, compC: true },
    { name: "Real-Time Processing", katana: true, compA: true, compB: false, compC: false },
    { name: "Bulk Cleaning (1M+)", katana: true, compA: false, compB: true, compC: false },
    { name: "API Integration", katana: true, compA: true, compB: false, compC: true },
    { name: "GDPR Compliant", katana: true, compA: true, compB: true, compC: false },
    { name: "Dashboard Analytics", katana: true, compA: false, compB: false, compC: true },
    { name: "Lightning Fast (<2s)", katana: true, compA: false, compB: false, compC: false },
    { name: "Affordable Pricing", katana: true, compA: false, compB: true, compC: false }
  ];

  return (
    <section className="relative py-20  bg-linear-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full px-5 py-3 mb-8"
          >
            <span className="text-sm font-bold text-[#00d4ff] tracking-wide">WHY CHOOSE KATANA</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
          >
            The Clear
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] mt-2">
              Winner
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            See how we stack up against the competition. No contest.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="min-w-[800px] bg-[#1a1a2e] rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-5 gap-4 p-8 bg-gradient-to-r from-[#00d4ff]/10 to-[#8b5cf6]/10 border-b border-gray-700">
              <div className="font-bold text-lg text-white">Features</div>
              {competitors.map((comp, i) => (
                <div key={i} className="text-center">
                  <div className={`font-bold text-lg ${comp.isUs ? 'text-[#00d4ff]' : 'text-gray-400'}`}>
                    {comp.name}
                  </div>
                </div>
              ))}
            </div>

            {features.map((feature, rowIndex) => (
              <motion.div
                key={rowIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: rowIndex * 0.05 }}
                className="grid grid-cols-5 gap-4 p-6 border-b border-gray-700 hover:bg-gray-800/20 transition-all duration-300"
              >
                <div className="text-gray-300 font-medium">{feature.name}</div>
                <div className="flex justify-center">
                  {feature.katana ? (
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center shadow-lg">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                      <X className="w-5 h-5 text-gray-600" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {feature.compA ? (
                    <div className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center">
                      <Check className="w-4 h-4 text-gray-400" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center">
                      <X className="w-4 h-4 text-gray-600" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {feature.compB ? (
                    <div className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center">
                      <Check className="w-4 h-4 text-gray-400" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center">
                      <X className="w-4 h-4 text-gray-600" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {feature.compC ? (
                    <div className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center">
                      <Check className="w-4 h-4 text-gray-400" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center">
                      <X className="w-4 h-4 text-gray-600" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}