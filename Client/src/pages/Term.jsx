import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Shield, FileText, Lock, CreditCard, Ban, Server, AlertTriangle, Mail, Calendar } from "lucide-react";

export default function Terms() {
  const [openSection, setOpenSection] = useState(null);

  const termsSections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      icon: FileText,
      content: "By accessing and using Katana List Slayer (\"the Service\"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our Service."
    },
    {
      id: 2,
      title: "Use License",
      icon: Shield,
      content: {
        description: "Permission is granted to temporarily use the Service for personal or commercial email list cleaning purposes. This license includes:",
        points: [
          "Access to email validation and cleaning tools",
          "Use of API integrations as per your subscription plan",
          "Download of cleaned email lists",
          "Real-time analytics and reporting features"
        ]
      }
    },
    {
      id: 3,
      title: "Data Privacy & Security",
      icon: Lock,
      content: {
        description: "We are committed to protecting your data with enterprise-grade security measures:",
        points: [
          "All uploaded data is encrypted with AES-256 encryption",
          "Full GDPR and CCPA compliance",
          "Your data is never shared with third parties",
          "Uploaded files are automatically deleted after 24 hours",
          "SOC 2 Type II certified infrastructure"
        ]
      }
    },
    {
      id: 4,
      title: "Subscription & Billing",
      icon: CreditCard,
      content: "Subscriptions are billed monthly or annually based on your chosen plan. You may cancel your subscription at any time. Refunds are available within 14 days of purchase as per our refund policy. Enterprise plans may have custom billing cycles."
    },
    {
      id: 5,
      title: "Prohibited Uses",
      icon: Ban,
      content: {
        description: "You may not use the Service for any illegal or unauthorized purpose including:",
        points: [
          "Violate any applicable laws or regulations",
          "Process stolen or illegally obtained email lists",
          "Attempt to circumvent usage limits or security measures",
          "Resell or redistribute our service without permission",
          "Spam or unsolicited email campaigns"
        ]
      }
    },
    {
      id: 6,
      title: "Service Availability",
      icon: Server,
      content: "We guarantee 99.9% uptime for all paid plans. Scheduled maintenance occurs on weekends with 72 hours notice. Emergency maintenance may be performed with immediate notification to affected users."
    },
    {
      id: 7,
      title: "Limitation of Liability",
      icon: AlertTriangle,
      content: "Katana List Slayer shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use the Service. Our maximum liability shall not exceed the amount paid by you for the service in the past 6 months."
    },
    {
      id: 8,
      title: "Changes to Terms",
      icon: Calendar,
      content: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of the Service after changes constitutes acceptance of the new terms. Major changes will be communicated via email 30 days in advance."
    },
    {
      id: 9,
      title: "Contact Information",
      icon: Mail,
      content: "For questions about these Terms & Conditions, please contact our support team. We typically respond within 2 hours during business hours."
    }
  ];

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00d4ff]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#8b5cf6]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#00d4ff]/10 to-[#8b5cf6]/10 border border-[#00d4ff]/20 mb-6">
            <Shield className="w-5 h-5 text-[#00d4ff]" />
            <span className="text-sm font-semibold text-[#00d4ff]">Legal Documentation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Terms & </span>
            <span className="glow-text bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using Katana List Slayer. 
            By using our service, you agree to be bound by these terms.
          </p>
        </motion.div>

        {/* Quick Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { icon: Lock, label: "GDPR Compliant", value: "100% Secure" },
            { icon: Server, label: "Service Uptime", value: "99.9%" },
            { icon: CreditCard, label: "Money Back", value: "14 Days" }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 border border-gray-800 hover:border-[#00d4ff]/30 transition-all duration-300"
            >
              <item.icon className="w-8 h-8 text-[#00d4ff] mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Terms Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {termsSections.map((section) => (
            <motion.div
              key={section.id}
              variants={itemVariants}
              className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff]/10 to-[#8b5cf6]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <section.icon className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00d4ff] transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Section {section.id} of 9
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openSection === section.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors"
                >
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 border-t border-gray-800 pt-6">
                      {typeof section.content === 'string' ? (
                        <p className="text-gray-300 leading-relaxed">
                          {section.content}
                        </p>
                      ) : (
                        <div>
                          <p className="text-gray-300 leading-relaxed mb-4">
                            {section.content.description}
                          </p>
                          <ul className="space-y-3">
                            {section.content.points.map((point, index) => (
                              <li key={index} className="flex items-start gap-3 text-gray-300">
                                <div className="w-2 h-2 rounded-full bg-[#00d4ff] mt-2 flex-shrink-0" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Special contact info for contact section */}
                      {section.id === 9 && (
                        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#00d4ff]/10 to-[#8b5cf6]/10 border border-[#00d4ff]/20">
                          <p className="text-white font-semibold mb-2">Get in Touch</p>
                          <p className="text-gray-300">
                            Email: <span className="text-[#00d4ff]">support@katanalistslayer.com</span>
                          </p>
                          <p className="text-gray-300 mt-1">
                            Response Time: <span className="text-green-400">Within 2 hours</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#1a1a2e] to-[#16213e] border border-gray-800"
        >
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-2">
            <Calendar className="w-4 h-4" />
            <span>Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <p className="text-gray-500 text-sm">
            By using Katana List Slayer, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
          </p>
        </motion.div>
      </div>
    </div>
  );
}