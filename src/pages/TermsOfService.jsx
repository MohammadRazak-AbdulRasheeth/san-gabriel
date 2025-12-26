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

These terms apply to all visitors, users, advertisers, vehicle partners, and others who access or use our services. We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the website following any changes constitutes acceptance of those changes.`
    },
    {
      id: 'services',
      icon: HiOutlineDocumentText,
      title: 'Our Services',
      content: `San Gabriel Solutions provides affordable advertising and professional signage services. Our services include but are not limited to:

• Advertising on store signs and vehicles (from $1/sq.ft/month)
• Storefront signs, window decals, indoor signage
• Vehicle decals, wraps, and trailer signage
• Design, print, and professional installation
• Vehicle partner advertising program

All services are provided as agreed upon in separate service agreements. The specific terms, deliverables, timelines, and pricing for each engagement will be outlined in individual contracts.`
    },
    {
      id: 'advertising-terms',
      icon: HiOutlineScale,
      title: 'Advertising Terms',
      content: `For advertisers using our platform:

• San Gabriel Solutions owns all advertising materials placed on partner locations and vehicles
• No permanent alterations will be made to vehicles or properties
• Advertiser approval is required before campaign launch
• All ads are time-based with clear campaign durations
• Ads are removed immediately after campaign end
• San Gabriel schedules and manages all installation and removal
• Flexible monthly pricing with no long-term commitments required`
    },
    {
      id: 'vehicle-partner-terms',
      icon: HiOutlineBan,
      title: 'Vehicle Partner Terms',
      content: `For drivers participating in our vehicle advertising program:

• San Gabriel Solutions owns all advertising materials
• No permanent vehicle alterations will be made
• Drivers must maintain vehicle in good condition
• No unauthorized third-party ads permitted on enrolled vehicles
• All ads are time-based with clear end dates
• Ads removed immediately after campaign end
• San Gabriel schedules and manages all removal
• Vehicles restored professionally at no cost to driver
• Drivers agree to vehicle inspection before and after campaigns`
    }
  ];

  const additionalTerms = [
    {
      title: 'Ad Material Ownership',
      content: 'San Gabriel Solutions owns all advertising materials including designs, prints, decals, and wraps. Materials remain our property throughout and after campaigns. Advertisers license the use of their brand assets for campaign duration only.'
    },
    {
      title: 'Ad Removal Policy',
      content: 'All advertisements are time-based with clear end dates. Ads are removed immediately after campaign completion. San Gabriel schedules and manages all removal. Vehicles and properties are restored professionally at no additional cost.'
    },
    {
      title: 'Limitation of Liability',
      content: 'San Gabriel Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific services giving rise to the claim.'
    },
    {
      title: 'Governing Law',
      content: 'These Terms of Service shall be governed by and construed in accordance with the laws of Ontario, Canada. Any disputes shall be resolved in the courts of Toronto, Ontario.'
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
                href="mailto:contact@sangabrielsolutions.com"
                className="inline-flex items-center px-6 py-3 border-2 border-primary-900 text-primary-900 font-semibold rounded-lg hover:bg-primary-900 hover:text-white transition-colors"
              >
                contact@sangabrielsolutions.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
