import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineDocumentText, HiOutlineScale, HiOutlineBan, HiOutlineClipboardCheck } from 'react-icons/hi';
import SEO from '../components/SEO';

/**
 * Terms of Service Page
 * Comprehensive terms of service for San Gabriel Solutions
 */
const TermsOfService = () => {
  const lastUpdated = 'December 21, 2025';

  const sections = [
    {
      id: 'acceptance',
      icon: HiOutlineClipboardCheck,
      title: 'Acceptance of Terms',
      content: `By accessing and using the San Gabriel Solutions website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.

These terms apply to all visitors, users, and others who access or use our services. We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the website following any changes constitutes acceptance of those changes.`
    },
    {
      id: 'services',
      icon: HiOutlineDocumentText,
      title: 'Our Services',
      content: `San Gabriel Solutions provides marketing, advertising, branding, and strategic consulting services. Our services include but are not limited to:

• Strategic marketing planning and execution
• Brand development and identity design
• Digital advertising and campaign management
• Website design and development
• Content creation and marketing
• Market research and analysis

All services are provided on a project or retainer basis as agreed upon in separate service agreements. The specific terms, deliverables, timelines, and pricing for each engagement will be outlined in individual contracts or statements of work.`
    },
    {
      id: 'intellectual-property',
      icon: HiOutlineScale,
      title: 'Intellectual Property',
      content: `All content on this website, including text, graphics, logos, images, and software, is the property of San Gabriel Solutions or its content suppliers and is protected by United States and international copyright laws.

Client Work: Unless otherwise specified in a service agreement, upon full payment, clients receive ownership of final deliverables created specifically for their projects. San Gabriel Solutions retains the right to display work in portfolios and case studies unless otherwise agreed.

Website Content: You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from our website without our express written permission.

Trademarks: San Gabriel Solutions, our logo, and other marks are trademarks of San Gabriel Solutions. You may not use these marks without our prior written consent.`
    },
    {
      id: 'user-conduct',
      icon: HiOutlineBan,
      title: 'Prohibited Conduct',
      content: `When using our website and services, you agree not to:

• Use our services for any unlawful purpose or in violation of any applicable laws
• Attempt to gain unauthorized access to our systems or networks
• Interfere with or disrupt the integrity or performance of our website
• Transmit any viruses, malware, or other malicious code
• Collect or harvest any information from our website without permission
• Impersonate any person or entity or misrepresent your affiliation
• Use our services to send unsolicited communications (spam)
• Engage in any activity that could damage our reputation or business

We reserve the right to terminate your access to our services for any violation of these terms.`
    }
  ];

  const additionalTerms = [
    {
      title: 'Limitation of Liability',
      content: 'San Gabriel Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our total liability shall not exceed the amount paid by you for the specific services giving rise to the claim.'
    },
    {
      title: 'Indemnification',
      content: 'You agree to indemnify and hold harmless San Gabriel Solutions, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our services or violation of these terms.'
    },
    {
      title: 'Governing Law',
      content: 'These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Los Angeles County, California.'
    },
    {
      title: 'Severability',
      content: 'If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEO 
        title="Terms of Service | San Gabriel Solutions"
        description="Read the terms and conditions governing the use of San Gabriel Solutions website and services."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HiOutlineDocumentText className="w-16 h-16 mx-auto mb-6 text-accent-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-primary-200">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm text-primary-300 mt-4">Last updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Main Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-bold text-primary-900">{section.title}</h2>
              </div>
              
              <div className="pl-16">
                <p className="text-neutral-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Additional Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-neutral-200"
          >
            <h2 className="text-2xl font-bold text-primary-900 mb-8">Additional Terms</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {additionalTerms.map((term, index) => (
                <div key={index} className="bg-neutral-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-primary-800 mb-3">{term.title}</h3>
                  <p className="text-neutral-700 text-sm leading-relaxed">{term.content}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 p-8 bg-primary-50 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Questions About These Terms?</h2>
            <p className="text-neutral-700 mb-6">
              If you have any questions about these Terms of Service, please contact us.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-900 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="mailto:legal@sangabrielsolutions.com"
                className="inline-flex items-center px-6 py-3 border-2 border-primary-900 text-primary-900 font-semibold rounded-lg hover:bg-primary-900 hover:text-white transition-colors"
              >
                legal@sangabrielsolutions.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
