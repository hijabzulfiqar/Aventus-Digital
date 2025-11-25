"use client";

import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  AlertCircle,
  UserCheck,
  RefreshCw,
  UserPlus,
  Briefcase,
  Ban,
  AlertTriangle,
  Gavel
} from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#0f1420] to-[#0a0e1a]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 -right-20 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
        />
      </div>

      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 mt-6">
              Terms &{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                Conditions
              </span>
            </h1>

            <p className="text-gray-400 text-lg">
              Last Updated: November 24th, 2025
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-950/20 to-transparent border border-red-600/20 mb-8">
              <p className="text-gray-300 leading-relaxed">
                These Terms & Conditions ("Terms") constitute a legally binding
                agreement between you ("you," "User") and{" "}
                <span className="text-red-500 font-semibold">
                  Aventus Digital, LLC
                </span>
                , a limited liability company ("Aventus Digital," "Company,"
                "we," "us," or "our"), governing your access to and use of:
              </p>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>
                  The Aventus Digital website located at www.Aventus.Digital
                  (the "Site");
                </li>
                <li>
                  Any affiliate, advertiser, or partner dashboards or portals
                  (the "Platform");
                </li>
                <li>
                  Any services, content, tracking tools, integrations,
                  communications, or features made available through the Site or
                  Platform (collectively, the "Services").
                </li>
              </ul>
              <p className="mt-4 text-gray-300">
                By accessing or using the Services, you agree to be bound by
                these Terms and our Privacy Policy, incorporated herein by
                reference. If you do not agree, you must immediately discontinue
                use of the Services.
              </p>
            </div>

            {/* Sections */}
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <div
                  key={index}
                  className="mb-8 p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-transparent border border-gray-800 hover:border-red-600/30 transition-colors"
                >
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 flex items-center justify-center bg-red-600/20 rounded-full text-red-500">
                      <IconComponent className="w-5 h-5" />
                    </span>
                    {section.title}
                  </h2>
                  <div
                    className="text-gray-400 space-y-4"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              );
            })}

            {/* Acceptance */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-red-600/10 to-transparent border-2 border-red-600/30">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Acceptance
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    BY USING THE SITE OR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE
                    READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS &
                    CONDITIONS.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-transparent border border-gray-800 text-center"
          >
            <Shield className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-3">
              Contact Information
            </h3>
            <p className="text-gray-400">
              Aventus Digital, LLC
              <br />
              100 Duffy Avenue, Suite 510
              <br />
              Hicksville, NY 11801
              <br />
              <a
                href="mailto:Manager@Aventus.Digital"
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                Manager@Aventus.Digital
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const sections = [
  {
    title: "Eligibility",
    icon: UserCheck,
    content: `
      <p>You must be at least 18 years old and capable of entering into a legally binding contract. By using the Services, you represent that:</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>You are acting on behalf of yourself or a lawful business entity;</li>
        <li>All information you provide is true and complete;</li>
        <li>You have authority to bind the business you represent.</li>
      </ul>
    `,
  },
  {
    title: "Changes to These Terms",
    icon: RefreshCw,
    content: `
      <p>Aventus Digital may update or revise these Terms at any time, in its sole discretion, by posting the updated Terms on the Site. All modifications are effective immediately upon posting.</p>
      <p class="mt-2">Your continued use of the Services constitutes acceptance of the revised Terms.</p>
    `,
  },
  {
    title: "Account Registration",
    icon: UserPlus,
    content: `
      <p>Certain features of the Services require an account ("Account"). You agree that:</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>You will provide accurate information and keep it updated;</li>
        <li>You are responsible for maintaining the confidentiality of your login credentials;</li>
        <li>You are responsible for all activity under your Account, whether authorized or not.</li>
      </ul>
      <p class="mt-2">Aventus Digital may suspend or terminate your Account at any time for any reason, including suspected fraud, abuse, or violation of these Terms.</p>
    `,
  },
  {
    title: "Role of Aventus Digital",
    icon: Briefcase,
    content: `
      <p>Aventus Digital operates as a performance marketing and affiliate marketplace, facilitating relationships between:</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>Affiliates/Publishers/Media Buyers ("Affiliates"), and</li>
        <li>Advertisers/Offer Owners ("Advertisers").</li>
      </ul>
      <p class="mt-2">Aventus Digital is not a party to the transaction between Affiliates and Advertisers unless expressly stated in a separate written agreement.</p>
      <p class="mt-2"><strong>We do not:</strong></p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>Guarantee campaign performance;</li>
        <li>Guarantee affiliate earnings;</li>
        <li>Guarantee advertiser traffic quality;</li>
        <li>Provide legal, tax, or financial advice;</li>
        <li>Validate claims made by Advertisers or Affiliates.</li>
      </ul>
      <p class="mt-2 text-red-400">Use of the Services is solely at your risk.</p>
    `,
  },
  {
    title: "Prohibited Conduct",
    icon: Ban,
    content: `
      <p>You agree not to engage in, facilitate, or attempt:</p>
      <p class="mt-3 font-semibold text-white">A. Fraudulent or Misleading Marketing</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>Fake news / false claims</li>
        <li>Unsubstantiated health, finance, or weight-loss claims</li>
        <li>Deceptive advertorials</li>
        <li>Fake testimonials or endorsements</li>
        <li>Misleading landing pages</li>
      </ul>
      <p class="mt-3 font-semibold text-white">B. Prohibited Traffic</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>Bot, automated, or fraudulent traffic</li>
        <li>Incentivized traffic unless expressly allowed</li>
        <li>Cookie stuffing, pixel stuffing, forced clicks</li>
        <li>Misleading redirects or cloaking</li>
        <li>Traffic that violates CAN-SPAM, TCPA, or FTC rules</li>
      </ul>
      <p class="mt-3 font-semibold text-white">C. Brand Violations</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>Trademark bidding or brand-term PPC without approval</li>
        <li>Typosquatting or confusing domain names</li>
      </ul>
      <p class="mt-3 font-semibold text-white">D. Security Violations</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>Unauthorized access to data or systems</li>
        <li>Penetration testing without permission</li>
        <li>Uploading viruses, malware, harmful code</li>
        <li>Interfering with platform performance</li>
      </ul>
      <p class="mt-3 text-red-400">Any violation may result in immediate termination and forfeiture of unpaid commissions.</p>
    `,
  },
  {
    title: "Limitation of Liability",
    icon: AlertTriangle,
    content: `
      <p class="text-white font-semibold">TO THE FULLEST EXTENT PERMITTED BY LAW:</p>
      <p class="mt-2">Aventus Digital shall not be liable for ANY:</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>Indirect, incidental, consequential, punitive, or special damages</li>
        <li>Lost profits, lost revenue, lost data, or business interruptions</li>
        <li>Errors in tracking, reporting, or analytics</li>
        <li>Actions of Affiliates, Advertisers, partners, or third parties</li>
      </ul>
      <p class="mt-3">In no event shall Aventus Digital's total liability exceed the greater of: <strong>$500</strong> or the total amount paid to you in the 3 months preceding the claim.</p>
    `,
  },
  {
    title: "Governing Law & Arbitration",
    icon: Gavel,
    content: `
      <p>These Terms are governed by the laws of the <strong>State of New York</strong>, without regard to conflicts of laws principles.</p>
      <p class="mt-3 font-semibold text-white">Binding Arbitration</p>
      <p class="mt-2">Any dispute that cannot be resolved informally shall be settled by binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Rules.</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>Venue: Nassau County, New York</li>
        <li>Language: English</li>
        <li>Arbitrator: One (1)</li>
        <li>No class actions, no consolidated claims</li>
      </ul>
      <p class="mt-3 font-semibold text-red-400">Class Action Waiver</p>
      <p class="mt-2">YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION OR COLLECTIVE ACTION AGAINST AVENTUS DIGITAL.</p>
    `,
  },
];
