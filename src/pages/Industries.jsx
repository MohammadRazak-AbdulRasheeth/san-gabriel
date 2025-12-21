import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import IndustryGrid from '../components/sections/industries/IndustryGrid';
import Button from '../components/ui/Button';
import useReducedMotion from '../hooks/useReducedMotion';
import SEO from '../components/SEO';
import { pageSEOConfig } from '../utils/seo';

/**
 * Industries Page
 * Displays industries served by San Gabriel Solutions
 * Requirements: 12.1, 12.2, 12.3 (san-gabriel-agency-rebrand)
 */
const Industries = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags - Requirements: 19.1, 19.4 */}
      <SEO {...pageSEOConfig.industries} />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-neutral-50 to-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/heroimages/aboutsectionimage.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-neutral-50/80" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-neutral-600">
              Strategic marketing and advertising expertise across diverse business sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              San Gabriel Solutions brings strategic marketing and advertising expertise to businesses across multiple sectors. 
              Our industry experience informs our approach, but we're not limited by it—we adapt our proven methodologies 
              to meet the unique challenges and opportunities of your business.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're in professional services, real estate, healthcare, retail, or technology, 
              our integrated marketing services are designed to drive measurable results aligned with your business goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      {/* Requirements: 12.1, 12.2 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IndustryGrid />
        </div>
      </section>

      {/* Link to Services Section */}
      {/* Requirements: 12.3 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Elevate Your Marketing?
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Explore our comprehensive marketing and advertising services designed to help businesses 
              like yours achieve strategic growth and measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button variant="primary" size="lg">
                  Explore Our Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Schedule a Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
