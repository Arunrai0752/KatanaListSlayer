import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaCog, FaUpload, FaClock, FaCheckCircle, FaMagic } from "react-icons/fa";
import InstallImg from "../../assets/Install.png"
import UploadImg from "../../assets/Upload.png"
import ProcessingImg from "../../assets/Procecing.png"
import CompleteImg from "../../assets/Complete.png"
import DownloadImg from "../../assets/Download.png"

const steps = [
  {
    id: 1,
    title: "Download Software",
    subtitle: "Get Started in Seconds",
    icon: FaDownload,
    img: DownloadImg,
    desc: "Visit our official website and click the 'Download Now' button. Your download begins automatically. Save the installer in an accessible folder for quick setup.",
    color: "#00d4ff"
  },
  {
    id: 2,
    title: "Install Application",
    subtitle: "Quick Setup Process",
    icon: FaCog,
    img: InstallImg,
    desc: "Locate the installer file and double-click to start. Follow the intuitive setup wizard. Within seconds, Katana List Slayer is ready on your desktop.",
    color: "#8b5cf6"
  },
  {
    id: 3,
    title: "Upload Email List",
    subtitle: "Drag & Drop Interface",
    icon: FaUpload,
    img: UploadImg,
    desc: "Launch the software and upload your email list file (.csv, .txt, or .xlsx). Our system automatically begins processing your data upon upload.",
    color: "#06b6d4"
  },
  {
    id: 4,
    title: "AI Processing",
    subtitle: "30-45 Minute Scan",
    icon: FaClock,
    img: ProcessingImg,
    desc: "Our AI engine scans and filters invalid, duplicate, and risky emails in real-time. Typical processing completes within 30-45 minutes for optimal accuracy.",
    color: "#00d4ff"
  },
  {
    id: 5,
    title: "Download Clean List",
    subtitle: "Ready-to-Use Data",
    icon: FaCheckCircle,
    img: CompleteImg,
    desc: "Receive instant notification when processing completes. Download your verified, high-quality email list ready for immediate campaign use.",
    color: "#8b5cf6"
  }
];

const ProductUse = () => {
  return (
    <section className="relative py-24 bg-linear-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00d4ff]/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 mb-6">
            <FaMagic className="w-4 h-4 text-[#00d4ff] mr-2" />
            <span className="text-sm font-semibold text-[#00d4ff]">STEP-BY-STEP GUIDE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">How To Use </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00d4ff] to-[#8b5cf6]">Our Software</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Follow these simple steps to transform your email list from cluttered to crystal clear. 
            Get started in minutes and see results in under an hour.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="space-y-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Card */}
              <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-linear-to-r from-[#00d4ff] via-[#8b5cf6] to-[#06b6d4] rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="relative bg-[#1a1a2e] rounded-2xl p-2 border border-gray-800 group-hover:border-[#00d4ff]/30 transition-all overflow-hidden">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-auto rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-linear-to-br from-[#00d4ff] to-[#8b5cf6] flex items-center justify-center font-bold text-white border-4 border-[#1a1a2e] shadow-lg">
                    {step.id}
                  </div>
                </div>
              </div>

              {/* Content Card */}
              <div className="lg:w-1/2">
                <div className="relative bg-[#1a1a2e] rounded-2xl p-8 border border-gray-800 hover:border-[#00d4ff]/30 transition-all group h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform mb-4"
                      style={{ 
                        background: `linear-gradient(135deg, ${step.color}20 0%, transparent 100%)`,
                        border: `1px solid ${step.color}40`
                      }}
                    >
                      <step.icon className="w-8 h-8" style={{ color: step.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#00d4ff] font-semibold mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10"
                    style={{ background: step.color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-[#1a1a2e] rounded-2xl p-8 border border-gray-800 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Email List?
            </h3>
            <p className="text-gray-400 mb-6 text-lg">
              Join thousands of marketers who trust Katana List Slayer for pristine email lists and superior deliverability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#download"
                className="inline-flex items-center px-8 py-4 bg-linear-to-r from-[#00d4ff] to-[#8b5cf6] text-white font-bold rounded-xl shadow-lg hover:shadow-[#00d4ff]/25 transition-all hover:scale-105 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="w-5 h-5 mr-3" />
                Download Now
              </motion.a>
              
              <motion.a
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-[#1a1a2e] border border-gray-700 text-white font-semibold rounded-xl hover:border-[#00d4ff]/30 transition-all group"
                whileHover={{ scale: 1.02 }}
              >
                <FaMagic className="w-5 h-5 mr-3 text-[#00d4ff]" />
                View Pricing
              </motion.a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-[#00d4ff] font-semibold text-sm">
              <FaMagic className="w-4 h-4" />
              <span>30-day money-back guarantee • No credit card required</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductUse;