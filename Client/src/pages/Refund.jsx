import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  DollarSign, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Mail, 
  Calendar,
  ChevronDown,
  Shield,
  Zap,
  CreditCard,
  Ban,
  Users,
  HelpCircle,
  TrendingUp,
  AlertTriangle
} from "lucide-react";

export default function Refund() {
  const [openSection, setOpenSection] = useState(null);

  const refundSections = [
    {
      id: 1,
      title: "14-Day Money-Back Guarantee",
      icon: Shield,
      type: "guarantee",
      content: {
        description: "We stand behind the quality of Katana List Slayer. If you're not completely satisfied with our service within the first 14 days of your initial subscription, we'll provide a full refund, no questions asked.",
        features: [
          "Full refund within 14 days",
          "No questions asked policy",
          "Quick processing (2-3 business days)",
          "First-time subscribers only"
        ]
      }
    },
    {
      id: 2,
      title: "Eligibility for Refunds",
      icon: CheckCircle,
      type: "eligibility",
      content: {
        description: "Refunds are available under the following conditions:",
        points: [
          { text: "Request made within 14 days of initial purchase", icon: Clock },
          { text: "First-time subscribers only (one refund per customer)", icon: Users },
          { text: "No excessive usage (under 500,000 emails processed)", icon: TrendingUp },
          { text: "No violation of our Terms & Conditions", icon: Ban }
        ]
      }
    },
    {
      id: 3,
      title: "Non-Refundable Scenarios",
      icon: XCircle,
      type: "non-refundable",
      content: {
        description: "Refunds will NOT be issued in the following cases:",
        scenarios: [
          { scenario: "Requests after 14-day window", severity: "high" },
          { scenario: "Renewal payments", severity: "medium" },
          { scenario: "Enterprise custom plans", severity: "medium" },
          { scenario: "Terms of Service violations", severity: "high" },
          { scenario: "Abuse of refund policy", severity: "high" }
        ]
      }
    },
    {
      id: 4,
      title: "How to Request a Refund",
      icon: Mail,
      type: "process",
      content: {
        description: "To request a refund, follow these simple steps:",
        steps: [
          { step: 1, action: "Email us at support@katanalistslayer.com", details: "Include your account email" },
          { step: 2, action: "Provide subscription details", details: "Transaction ID or account email" },
          { step: 3, action: "Brief reason for request", details: "Optional but helpful for improvement" },
          { step: 4, action: "We process within 2-3 business days", details: "Quick review and approval" },
          { step: 5, action: "Refund in 5-10 business days", details: "Back to your original payment method" }
        ]
      }
    },
    {
      id: 5,
      title: "Cancellations",
      icon: CreditCard,
      type: "cancellation",
      content: {
        description: "You can cancel your subscription at any time from your dashboard:",
        points: [
          "Access continues until end of billing period",
          "No refund for unused time in current period",
          "No automatic renewal charges after cancellation",
          "Reactivate subscription anytime"
        ]
      }
    },
    {
      id: 6,
      title: "Free Trial Policy",
      icon: Zap,
      type: "trial",
      content: {
        description: "Our 14-day free trial allows you to test all features before committing:",
        features: [
          { feature: "No credit card required", highlight: true },
          { feature: "Full access to plan features", highlight: true },
          { feature: "Cancel anytime with no charges", highlight: true },
          { feature: "Trial doesn't count toward refund window", highlight: false }
        ]
      }
    },
    {
      id: 7,
      title: "Partial Refunds",
      icon: DollarSign,
      type: "partial",
      content: {
        description: "We do not offer partial refunds or prorated refunds for:",
        items: [
          { item: "Mid-cycle cancellations", reason: "Full period access provided" },
          { item: "Unused email credits", reason: "Credits don't expire" },
          { item: "Downgrading plans", reason: "Upgrade/downgrade immediately" }
        ]
      }
    },
    {
      id: 8,
      title: "Chargebacks",
      icon: AlertTriangle,
      type: "chargebacks",
      content: {
        description: "Please contact us directly before initiating a chargeback:",
        warning: "Chargebacks may result in:",
        consequences: [
          "Immediate account suspension",
          "Permanent ban from our service",
          "Legal action for fraudulent chargebacks"
        ],
        note: "We're committed to resolving all payment disputes fairly and promptly."
      }
    },
    {
      id: 9,
      title: "Enterprise Plans",
      icon: Users,
      type: "enterprise",
      content: "Custom Enterprise plans have separate refund terms outlined in your service agreement. Please refer to your contract or contact your account manager for specific details about enterprise-level refund policies."
    },
    {
      id: 10,
      title: "Need Help?",
      icon: HelpCircle,
      type: "contact",
      content: {
        description: "If you have any questions about our refund policy, we're here to help:",
        contact: {
          email: "support@katanalistslayer.com",
          response: "Typically within 2 hours",
          hours: "24/7 support for urgent matters"
        }
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

  const GuaranteeBadge = () => (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: "spring" }}
      className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6"
    >
      <Shield className="w-6 h-6 text-green-400" />
      <div className="text-left">
        <div className="font-bold text-green-400 text-lg">14-Day Money Back Guarantee</div>
        <div className="text-green-300 text-sm">No questions asked • Full refund</div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-20 pt-30 ">
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
            <DollarSign className="w-5 h-5 text-[#00d4ff]" />
            <span className="text-sm font-semibold text-[#00d4ff]">Fair & Transparent</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Refund </span>
            <span className="glow-text bg-gradient-to-r from-[#00d4ff] to-[#8b5cf6] bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            We believe in our service and want you to feel completely confident in your purchase.
          </p>

          <GuaranteeBadge />
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: "Refund Window", value: "14 Days", icon: Clock },
            { label: "Approval Rate", value: "98%", icon: CheckCircle },
            { label: "Process Time", value: "2-3 Days", icon: Zap },
            { label: "Support Response", value: "< 2 Hours", icon: Mail }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 text-center border border-gray-800 hover:border-[#00d4ff]/30 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-[#00d4ff] mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Refund Sections */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {refundSections.map((section) => (
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
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                    section.type === 'non-refundable' || section.type === 'chargebacks' 
                      ? 'bg-red-500/10' 
                      : section.type === 'guarantee'
                      ? 'bg-green-500/10'
                      : 'bg-[#00d4ff]/10'
                  }`}>
                    <section.icon className={`w-6 h-6 ${
                      section.type === 'non-refundable' || section.type === 'chargebacks' 
                        ? 'text-red-400' 
                        : section.type === 'guarantee'
                        ? 'text-green-400'
                        : 'text-[#00d4ff]'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#00d4ff] transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      Section {section.id} of {refundSections.length}
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
                      ) : section.content.features ? (
                        // Guarantee section
                        <div>
                          <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            {section.content.description}
                          </p>
                          <div className="grid md:grid-cols-2 gap-4">
                            {section.content.features.map((feature, index) => (
                              <div key={index} className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <span className="text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : section.content.points ? (
                        // Eligibility section
                        <div>
                          <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            {section.content.description}
                          </p>
                          <div className="space-y-3">
                            {section.content.points.map((point, index) => (
                              <div key={index} className="flex items-center gap-4 p-3 bg-gray-900/30 rounded-lg">
                                <point.icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                                <span className="text-gray-300">{point.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : section.content.scenarios ? (
                        // Non-refundable section
                        <div>
                          <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            {section.content.description}
                          </p>
                          <div className="space-y-3">
                            {section.content.scenarios.map((item, index) => (
                              <div key={index} className={`flex items-center gap-3 p-3 rounded-lg border ${
                                item.severity === 'high' 
                                  ? 'bg-red-500/10 border-red-500/20' 
                                  : 'bg-yellow-500/10 border-yellow-500/20'
                              }`}>
                                <XCircle className={`w-5 h-5 ${
                                  item.severity === 'high' ? 'text-red-400' : 'text-yellow-400'
                                }`} />
                                <span className="text-gray-300">{item.scenario}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : section.content.steps ? (
                        // Process section
                        <div>
                          <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            {section.content.description}
                          </p>
                          <div className="space-y-4">
                            {section.content.steps.map((step, index) => (
                              <div key={index} className="flex gap-4 p-4 bg-gray-900/30 rounded-lg">
                                <div className="w-8 h-8 rounded-full bg-[#00d4ff] flex items-center justify-center flex-shrink-0">
                                  <span className="text-white font-bold text-sm">{step.step}</span>
                                </div>
                                <div>
                                  <div className="font-semibold text-white mb-1">{step.action}</div>
                                  <div className="text-sm text-gray-400">{step.details}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : section.content.items ? (
                        // Partial refunds section
                        <div>
                          <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            {section.content.description}
                          </p>
                          <div className="space-y-3">
                            {section.content.items.map((item, index) => (
                              <div key={index} className="flex justify-between items-start p-3 bg-gray-900/30 rounded-lg">
                                <div className="font-semibold text-white">{item.item}</div>
                                <div className="text-sm text-gray-400 text-right">{item.reason}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : section.content.consequences ? (
                        // Chargebacks section
                        <div>
                          <p className="text-gray-300 leading-relaxed text-lg mb-4">
                            {section.content.description}
                          </p>
                          <p className="text-red-400 font-semibold mb-3">{section.content.warning}</p>
                          <div className="space-y-2 mb-4">
                            {section.content.consequences.map((consequence, index) => (
                              <div key={index} className="flex items-center gap-3 text-red-300">
                                <Ban className="w-4 h-4" />
                                <span>{consequence}</span>
                              </div>
                            ))}
                          </div>
                          <p className="text-gray-400 text-sm">{section.content.note}</p>
                        </div>
                      ) : section.content.contact ? (
                        // Contact section
                        <div>
                          <p className="text-gray-300 leading-relaxed text-lg mb-6">
                            {section.content.description}
                          </p>
                          <div className="bg-gradient-to-r from-[#00d4ff]/10 to-[#8b5cf6]/10 rounded-xl p-6 border border-[#00d4ff]/20">
                            <div className="font-semibold text-white mb-2">Contact Support</div>
                            <div className="text-[#00d4ff] text-lg mb-1">{section.content.contact.email}</div>
                            <div className="text-gray-400 text-sm">
                              Response: {section.content.contact.response}
                            </div>
                            <div className="text-gray-400 text-sm">
                              Hours: {section.content.contact.hours}
                            </div>
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
            We're committed to fair and transparent refund practices. Your satisfaction is our priority.
          </p>
        </motion.div>
      </div>
    </div>
  );
}