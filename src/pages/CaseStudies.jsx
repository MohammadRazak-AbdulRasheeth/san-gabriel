import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CaseStudyGrid from '../components/sections/case-studies/CaseStudyGrid';
import SEO from '../components/SEO';
import { pageSEOConfig } from '../utils/seo';

/**
 * Case Studies Page
 * Displays client success stories and case studies
 * Requirements: 13.1, 13.2, 13.4
 */
const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags - Requirements: 19.1, 19.4 */}
      <SEO {...pageSEOConfig.caseStudies} />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-neutral-600 mb-4">
              Real-world results demonstrating strategic impact and measurable outcomes
            </p>
            <p className="text-lg text-neutral-600">
              Explore how we've helped businesses across industries achieve their marketing and growth objectives through strategic thinking and professional execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudyGrid />
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our strategic approach can drive measurable results for your business.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn more about the strategic services that drive these results
            </p>
          </div>
          <div className="text-center">
            <Link
              to="/services"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
