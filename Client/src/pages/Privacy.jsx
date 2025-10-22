import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Lock, 
  Database, 
  Users, 
  Eye, 
  Cookie, 
  Globe, 
//   Child, 
  Mail, 
  Calendar,
  ChevronDown,
  CheckCircle,
  FileText,
  Server,
  Download,
  Bell
} from "lucide-react";

import { FaChildReaching } from "react-icons/fa6";


export default function Privacy() {
  const [openSection, setOpenSection] = useState(null);

  const privacySections = [
    {
      id: 1,
      title: "Information We Collect",
      icon: Database,
      content: {
        description: "We collect the following types of information to provide and improve our services:",
        categories: [
          {
            title: "Account Information",
            items: ["Name", "Email address", "Billing details", "Company information"]
          },
          {
            title: "Email Lists",
            items: ["Email addresses you upload for cleaning", "Temporary processing data", "Validation results"]
          },
          {
            title: "Usage Data",
            items: ["Service usage statistics", "API call logs", "Cleaning history", "Feature usage patterns"]
          },
          {
            title: "Technical Data",
            items: ["IP address", "Browser type", "Device information", "Operating system"]
          }
        ]
      }
    },
    {
      id: 2,
      title: "How We Use Your Information",
      icon: Users,
      content: {
        description: "Your information is used exclusively to enhance your experience and provide our services:",
        points: [
          "Provide and maintain the email cleaning service",
          "Process your email lists and deliver accurate results",
          "Send important service updates and support communications",
          "Improve our algorithms and service quality through analytics",
          "Prevent fraud, abuse, and ensure platform security",
          "Develop new features and services"
        ]
      }
    },
    {
      id: 3,
      title: "Data Security",
      icon: Lock,
      content: {
        description: "We implement enterprise-grade security measures to protect your data:",
        features: [
          { icon: Shield, text: "End-to-end encryption for all data transmission" },
          { icon: Server, text: "SOC 2 Type II certified cloud infrastructure" },
          { icon: CheckCircle, text: "Automatic deletion of uploaded files within 24 hours" },
          { icon: Users, text: "Role-based access controls for employees" },
          { icon: FileText, text: "Regular security audits and penetration testing" },
          { icon: Shield, text: "GDPR, CCPA, and PIPEDA compliance" }
        ]
      }
    },
    {
      id: 4,
      title: "Data Retention",
      icon: Calendar,
      content: {
        description: "We follow strict data retention policies to minimize data exposure:",
        retention: [
          { type: "Uploaded Email Lists", duration: "24 hours", reason: "Immediate deletion after processing" },
          { type: "Processing Results", duration: "30 days", reason: "Allow for result verification" },
          { type: "Account Information", duration: "Active account period", reason: "Service provision" },
          { type: "Usage Analytics", duration: "2 years after account closure", reason: "Legal compliance & analytics" }
        ]
      }
    },
    {
      id: 5,
      title: "Third-Party Sharing",
      icon: Users,
      content: {
        description: "We maintain a strict no-sale policy for your data. Limited sharing occurs only with:",
        categories: [
          {
            title: "Essential Service Providers",
            items: ["Payment processors (Stripe, PayPal)", "Cloud hosting (AWS, Google Cloud)", "Email service providers"]
          },
          {
            title: "Legal Requirements",
            items: ["When required by law enforcement", "To protect our legal rights", "During legal proceedings"]
          },
          {
            title: "Business Transfers",
            items: ["In the event of merger or acquisition", "During company restructuring"]
          }
        ]
      }
    },
    {
      id: 6,
      title: "Your Rights",
      icon: Eye,
      content: {
        description: "Under GDPR, CCPA, and other privacy laws, you have comprehensive rights:",
        rights: [
          { right: "Access", description: "View all personal data we hold" },
          { right: "Correction", description: "Update inaccurate or incomplete data" },
          { right: "Deletion", description: "Request erasure of your data" },
          { right: "Portability", description: "Export your data in machine-readable format" },
          { right: "Objection", description: "Opt-out of specific processing activities" },
          { right: "Restriction", description: "Limit how we use your data" }
        ]
      }
    },
    {
      id: 7,
      title: "Cookies & Tracking",
      icon: Cookie,
      content: {
        description: "We use cookies and similar technologies to enhance your experience:",
        cookies: [
          { type: "Essential", purpose: "Authentication, security, and core functionality" },
          { type: "Analytics", purpose: "Service improvement and performance monitoring" },
          { type: "Preference", purpose: "Remember your settings and preferences" }
        ],
        note: "You can control cookie preferences through your browser settings or our cookie banner."
      }
    },
    {
      id: 8,
      title: "International Data Transfers",
      icon: Globe,
      content: "Your data may be processed on servers located in different countries. We ensure all international transfers comply with GDPR requirements through Standard Contractual Clauses (SCCs) and maintain EU-US Data Privacy Framework certification for US data processing."
    },
    {
      id: 9,
      title: "Children's Privacy",
      icon: FaChildReaching ,
      content: "Our service is not intended for users under 18 years of age. We do not knowingly collect information from children. If we become aware of such collection, we will immediately delete the information."
    },
    {
      id: 10,
      title: "Policy Changes",
      icon: Bell,
      content: "We may update this policy to reflect changes in our practices or legal requirements. Material changes will be communicated via email 30 days in advance and prominent notices on our website. Continued use after changes constitutes acceptance."
    },
    {
      id: 11,
      title: "Contact Information",
      icon: Mail,
      content: {
        description: "For privacy-related questions or to exercise your rights, contact our dedicated privacy team:",
        contacts: [
          { method: "Email", value: "privacy@katanalistslayer.com", response: "Within 24 hours" },
          { method: "Data Protection Officer", value: "dpo@katanalistslayer.com", response: "Within 48 hours" },
          { method: "Postal Mail", value: "Katana List Slayer, Data Privacy Team, 123 Security Lane, Tech City, TC 10101", response: "Within 7 business days" }
        ]
      }
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

  const SecurityBadges = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {[
        { label: "GDPR Compliant", color: "from-green-500 to-emerald-500" },
        { label: "CCPA Ready", color: "from-blue-500 to-cyan-500" },
        { label: "SOC 2 Certified", color: "from-purple-500 to-pink-500" },
        { label: "AES-256 Encryption", color: "from-orange-500 to-red-500" }
      ].map((badge, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + 0.5 }}
          className={`bg-gradient-to-r ${badge.color} rounded-xl p-4 text-center shadow-lg`}
        >
          <div className="text-white font-semibold text-sm">{badge.label}</div>
        </motion.div>
      ))}
    </div>
  );

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
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#00d4ff]/10 to-[#8b5cf6]/10 border border-[#00d4ff]/20 mb-6">
            <Lock className="w-5 h-5 text-[#00d4ff]" />
            <span className="text-sm font-semibold text-[#00d4ff]">Your Privacy Matters</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Privacy </span>
            <span className="glow-text bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            We are committed to protecting your privacy and being transparent about how we handle your data.
          </p>

          <SecurityBadges />
        </motion.div>

        {/* Privacy Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {privacySections.map((section) => (
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
                      Section {section.id} of {privacySections.length}
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
                      {/* Render different content structures based on section type */}
                      {typeof section.content === 'string' ? (
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {section.content}
                        </p>
                      ) : section.content.categories ? (
                        // Information We Collect & Third-Party Sharing
                        <div>
                          <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            {section.content.description}
                          </p>
                          <div className="grid md:grid-cols-2 gap-6">
                            {section.content.categories.map((category, index) => (
                              <div key={index} className="bg-gray-900/50 rounded-xl p-4">
                                <h4 className="font-semibold text-white mb-3">{category.title}</h4>
                                <ul className="space-y-2">
                                  {category.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-start gap-2 text-gray-300">
                                      <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] mt-2 flex-shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : section.content.points ? (
                        // How We Use Your Information
                        <div>
                          <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            {section.content.description}
                          </p>
                          <ul className="space-y-3">
                            {section.content.points.map((point, index) => (
                              <li key={index} className="flex items-start gap-3 text-gray-300">
                                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-lg">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : section.content.features ? (
                        // Data Security
                        <div>
                          <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            {section.content.description}
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            {section.content.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-3 p-3 bg-gray-900/30 rounded-lg">
                                <feature.icon className="w-5 h-5 text-[#00d4ff]" />
                                <span className="text-gray-300">{feature.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : section.content.retention ? (
                        // Data Retention
                        <div>
                          <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            {section.content.description}
                          </p>
                          <div className="space-y-4">
                            {section.content.retention.map((item, index) => (
                              <div key={index} className="flex justify-between items-center p-4 bg-gray-900/30 rounded-lg">
                                <div>
                                  <div className="font-semibold text-white">{item.type}</div>
                                  <div className="text-sm text-gray-400">{item.reason}</div>
                                </div>
                                <div className="px-3 py-1 bg-[#00d4ff]/20 rounded-full text-[#00d4ff] font-semibold">
                                  {item.duration}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : section.content.rights ? (
                        // Your Rights
                        <div>
                          <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            {section.content.description}
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            {section.content.rights.map((right, index) => (
                              <div key={index} className="bg-gray-900/30 rounded-lg p-4">
                                <div className="font-semibold text-[#00d4ff] mb-2">{right.right}</div>
                                <div className="text-gray-300 text-sm">{right.description}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : section.content.cookies ? (
                        // Cookies & Tracking
                        <div>
                          <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            {section.content.description}
                          </p>
                          <div className="space-y-3 mb-4">
                            {section.content.cookies.map((cookie, index) => (
                              <div key={index} className="flex justify-between items-center p-3 bg-gray-900/30 rounded-lg">
                                <span className="font-semibold text-white">{cookie.type}</span>
                                <span className="text-gray-300 text-sm">{cookie.purpose}</span>
                              </div>
                            ))}
                          </div>
                          <p className="text-gray-400 text-sm">{section.content.note}</p>
                        </div>
                      ) : section.content.contacts ? (
                        // Contact Information
                        <div>
                          <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            {section.content.description}
                          </p>
                          <div className="space-y-4">
                            {section.content.contacts.map((contact, index) => (
                              <div key={index} className="bg-gradient-to-r from-[#00d4ff]/10 to-[#8b5cf6]/10 rounded-xl p-4 border border-[#00d4ff]/20">
                                <div className="font-semibold text-white mb-1">{contact.method}</div>
                                <div className="text-[#00d4ff] mb-2">{contact.value}</div>
                                <div className="text-sm text-gray-400">Response: {contact.response}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}
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
            We are committed to protecting your privacy and being transparent about our data practices. 
            Your trust is our highest priority.
          </p>
        </motion.div>
      </div>
    </div>
  );
}