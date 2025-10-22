import React from "react";
import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold mb-8 glow-text">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed mb-4">
                We collect the following types of information:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Information:</strong> Name, email address, billing details</li>
                <li><strong>Email Lists:</strong> Email addresses you upload for cleaning (temporarily stored)</li>
                <li><strong>Usage Data:</strong> Service usage statistics, API calls, cleaning history</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">
                Your information is used to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain the email cleaning service</li>
                <li>Process your email lists and deliver results</li>
                <li>Send service updates and support communications</li>
                <li>Improve our algorithms and service quality</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
              <p className="leading-relaxed mb-4">
                We implement robust security measures:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>End-to-end encryption for all data transmission</li>
                <li>Secure cloud infrastructure with regular security audits</li>
                <li>Automatic deletion of uploaded files after processing</li>
                <li>Employee access controls and confidentiality agreements</li>
                <li>GDPR compliance and data protection standards</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Retention</h2>
              <p className="leading-relaxed">
                Uploaded email lists are processed and deleted within 24 hours. Account information and usage statistics are retained while your account is active and for up to 2 years after closure for legal compliance purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Sharing</h2>
              <p className="leading-relaxed mb-4">
                We do not sell your data. We only share information with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Payment processors, cloud hosting</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect rights</li>
                <li><strong>Business Transfers:</strong> In the event of a merger or acquisition</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="leading-relaxed mb-4">
                Under GDPR and other privacy laws, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Export your data in a portable format</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies & Tracking</h2>
              <p className="leading-relaxed">
                We use essential cookies for authentication and service functionality. We also use analytics cookies to improve our service. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
              <p className="leading-relaxed">
                Your data may be processed in servers located in different countries. We ensure all transfers comply with applicable data protection laws and use standard contractual clauses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our service is not intended for users under 18. We do not knowingly collect information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Privacy Policy</h2>
              <p className="leading-relaxed">
                We may update this policy periodically. Material changes will be communicated via email or prominent notice on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <p className="leading-relaxed">
                For privacy-related questions or to exercise your rights:
                <br />
                <span className="text-[#00d4ff]">privacy@katanalistslayer.com</span>
                <br />
                Data Protection Officer: Katana List Slayer
              </p>
            </section>

            <p className="text-sm text-gray-500 mt-12">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

