"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  FileText,
  UserCheck,
  Database,
  Share2,
  Lock,
  HardDrive,
  Scale,
  Globe,
  RefreshCw
} from "lucide-react";

export default function PrivacyPage() {
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
              Privacy{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                Policy
              </span>
            </h1>

            <p className="text-gray-400 text-lg">
              Last Updated: November 25, 2025 • Effective Immediately
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
                This Privacy Policy ("Policy") describes how{" "}
                <span className="text-red-500 font-semibold">
                  Aventus Digital, LLC
                </span>{" "}
                ("Aventus Digital," "Aventus," "Company," "we," "our," or "us")
                collects, uses, shares, and protects personal information
                obtained through:
              </p>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>
                  The Aventus Digital website:{" "}
                  <span className="text-red-500">www.Aventus.Digital</span> (the
                  "Site")
                </li>
                <li>
                  Affiliate, publisher, and advertiser dashboards (the
                  "Platform")
                </li>
                <li>
                  Any services, technologies, tracking tools, APIs, software, or
                  communication channels we provide (collectively, the
                  "Services")
                </li>
              </ul>
              <p className="mt-4 text-gray-300">
                By accessing or using the Services, you consent to the practices
                described in this Privacy Policy. If you do not agree, you must
                discontinue use of the Services.
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

            {/* Your Rights Highlight */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-950/20 to-transparent border border-blue-600/20">
                <Eye className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">
                  CCPA Rights (California)
                </h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Request to know data collected</li>
                  <li>• Request deletion of data</li>
                  <li>• Request correction of data</li>
                  <li>• Opt out of data sales</li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-950/20 to-transparent border border-purple-600/20">
                <Shield className="w-10 h-10 text-purple-500 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">
                  GDPR Rights (EU)
                </h3>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Access your data</li>
                  <li>• Correct inaccuracies</li>
                  <li>• Request data deletion</li>
                  <li>• Data portability</li>
                </ul>
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
            <FileText className="w-12 h-12 text-red-500 mx-auto mb-4" />
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
            <p className="mt-4 text-sm text-gray-500">
              For privacy requests, please email with subject: "Privacy Request"
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const sections = [
  {
    title: "Adults Only",
    icon: UserCheck,
    content: `
      <p>Aventus Digital does not knowingly collect information from individuals under the age of 18.</p>
      <p class="mt-2 text-red-400">If you are under 18, you may not use the Site or Services.</p>
    `,
  },
  {
    title: "Categories of Personal Information We Collect",
    icon: Database,
    content: `
      <p>We collect the following types of personal information, depending on your interaction with us:</p>
      <p class="mt-3 font-semibold text-white">A. Identifiers</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>Full name, business name</li>
        <li>Email address, telephone number</li>
        <li>Physical and mailing address</li>
        <li>Payment or banking information</li>
        <li>W-9/W-8 tax details</li>
        <li>Username, passwords, login credentials</li>
        <li>IP address, device identifiers</li>
      </ul>
      <p class="mt-3 font-semibold text-white">B. Commercial & Business Information</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>Campaign performance data</li>
        <li>Conversion information</li>
        <li>Tracking logs, timestamps, redirects</li>
        <li>Spend, earnings, invoices, and payment history</li>
      </ul>
      <p class="mt-3 font-semibold text-white">C. Internet or Network Activity</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>IP address and domain</li>
        <li>Browser type, operating system</li>
        <li>Device type</li>
        <li>Landing pages, referring URLs</li>
        <li>Clickstream data</li>
        <li>Pixel interactions and postbacks</li>
        <li>Activity on our Platform</li>
      </ul>
      <p class="mt-3 font-semibold text-white">D. Sensitive Personal Information</p>
      <p class="mt-2">When required by law: Identity verification documents, SSN/EIN (securely stored)</p>
      <p class="mt-2 text-gray-500 text-sm">We do not collect biometric data, health information, or sensitive categories beyond what is necessary for compliance.</p>
    `,
  },
  {
    title: "How We Use Personal Information",
    icon: FileText,
    content: `
      <p>Aventus Digital uses personal information for legally permissible business purposes, including:</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>Operating and improving the marketplace</li>
        <li>Verifying identity and traffic sources</li>
        <li>Preventing fraud, invalid traffic, and policy violations</li>
        <li>Processing payments and tax documentation</li>
        <li>Managing advertiser and affiliate relationships</li>
        <li>Detecting security incidents</li>
        <li>Ensuring compliance with FTC, TCPA, CAN-SPAM, GDPR, and state laws</li>
        <li>Enforcing contractual obligations</li>
        <li>Responding to legal requests or investigations</li>
        <li>Providing customer support</li>
        <li>Internal analytics, reporting, and optimization</li>
      </ul>
      <p class="mt-3">We do not use personal data for automated decision-making that has legal or significant effects.</p>
    `,
  },
  {
    title: "Sharing of Personal Information",
    icon: Share2,
    content: `
      <p>We may share personal data with:</p>
      <p class="mt-3 font-semibold text-white">A. Service Providers & Vendors</p>
      <p class="mt-2">For: Hosting, payment processing, accounting, fraud prevention, compliance tools, identity verification, email systems</p>
      <p class="mt-3 font-semibold text-white">B. Advertisers / Campaign Partners</p>
      <p class="mt-2">Only data required for: Validating conversions, traffic quality evaluation, billing reconciliation</p>
      <p class="mt-2 text-red-400">We do not sell consumer data for marketing purposes.</p>
      <p class="mt-3 font-semibold text-white">C. Legal, Compliance, and Safety</p>
      <p class="mt-2">We may disclose data when required by: Law enforcement, government requests, court orders, fraud investigations, regulatory agencies</p>
      <p class="mt-3 font-semibold text-white">D. Corporate Transactions</p>
      <p class="mt-2">If Aventus Digital engages in: Merger, acquisition, asset sale, or bankruptcy—personal data may transfer to the successor entity.</p>
    `,
  },
  {
    title: "Data Security",
    icon: Lock,
    content: `
      <p>We implement administrative, technical, and physical safeguards to protect your information, including:</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>Encryption</li>
        <li>Access controls</li>
        <li>Monitoring</li>
        <li>Fraud detection systems</li>
        <li>Secure hosting infrastructure</li>
      </ul>
      <p class="mt-3 text-yellow-400">However, no method of transmission is 100% secure.</p>
    `,
  },
  {
    title: "Data Retention",
    icon: HardDrive,
    content: `
      <p>We retain personal data only as long as:</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>Required by law</li>
        <li>Necessary for tax or accounting</li>
        <li>Needed for fraud prevention</li>
        <li>Required to enforce agreements</li>
        <li>Necessary to operate the marketplace</li>
      </ul>
      <p class="mt-3">We may retain traffic logs for up to <strong>7 years</strong>, consistent with industry compliance standards.</p>
    `,
  },
  {
    title: "Your Rights (CCPA/CPRA & California Residents)",
    icon: Scale,
    content: `
      <p>California residents have the right to:</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>Request to know the personal information we collect</li>
        <li>Request deletion of personal information</li>
        <li>Request correction of inaccurate information</li>
        <li>Request disclosure of categories of data shared</li>
        <li>Opt out of the sale or sharing of personal information (we do not sell data)</li>
        <li>Not be discriminated against for exercising privacy rights</li>
      </ul>
      <p class="mt-3 font-semibold text-white">How to Submit a Privacy Request</p>
      <p class="mt-2">Email: <a href="mailto:Manager@Aventus.Digital" class="text-red-500">Manager@Aventus.Digital</a></p>
      <p class="mt-1">Subject: Privacy Request</p>
      <p class="mt-2 text-sm text-gray-500">We will verify your identity before releasing or deleting data.</p>
    `,
  },
  {
    title: "GDPR Rights (EU Visitors)",
    icon: Globe,
    content: `
      <p>Individuals in the European Economic Area may have the right to:</p>
      <ul class="list-disc ml-6 mt-2 space-y-1">
        <li>Access their personal data</li>
        <li>Correct inaccuracies</li>
        <li>Request data deletion</li>
        <li>Object to processing</li>
        <li>Request data portability</li>
        <li>Restrict processing</li>
      </ul>
      <p class="mt-3">Legal bases for processing include consent, contract performance, legal obligation, and legitimate interest.</p>
    `,
  },
  {
    title: "Changes to This Policy",
    icon: RefreshCw,
    content: `
      <p>We may revise this Privacy Policy at any time.</p>
      <p class="mt-2">Continued use of the Site or Services constitutes acceptance of any updates.</p>
    `,
  },
];
