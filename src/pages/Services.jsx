import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceAlternatingLayout from '../components/sections/services/ServiceAlternatingLayout';
import Button from '../components/ui/Button';
import useReducedMotion from '../hooks/useReducedMotion';
import SEO from '../components/SEO';
import { pageSEOConfig } from '../utils/seo';

/**
 * Services Page
 * Displays all 5 agency services with introduction emphasizing integrated services
 * Requirements: 6.1, 6.2, 6.3 (san-gabriel-agency-rebrand)
 */
const Services = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pt-20">
      {/* SEO Meta Tags - Requirements: 19.1, 19.4 */}
      <SEO {...pageSEOConfig.services} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url('/heroimages/servicesherosectionimage.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/70 to-primary-900/70" />
        
        {/* Animated Dot Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
            animate={prefersReducedMotion ? {} : {
              backgroundPosition: ['0px 0px', '40px 40px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Integrated Marketing & Advertising Services
            </h1>
            <div className="flex justify-center mb-6">
              <svg width="120" height="12" viewBox="0 0 120 12" fill="none" className="text-accent-400">
                <path d="M2 6C2 6 7 2 12 6C17 10 22 6 22 6C22 6 27 2 32 6C37 10 42 6 42 6C42 6 47 2 52 6C57 10 62 6 62 6C62 6 67 2 72 6C77 10 82 6 82 6C82 6 87 2 92 6C97 10 102 6 102 6C102 6 107 2 112 6C117 10 118 6 118 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Strategic marketing and advertising services aligned with your business goals, 
              professional execution, and measurable results. We don't just deliver tactics—we 
              build integrated strategies that drive sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Alternating Layout Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              From strategic planning to execution and optimization, we provide comprehensive 
              marketing and advertising services that work together to achieve your business objectives.
            </p>
          </motion.div>

          <ServiceAlternatingLayout />
        </div>
      </section>

      {/* Trust Signals Section - Requirements: 19.3 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              See how our integrated services deliver measurable outcomes for businesses like yours
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Case Studies Link */}
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary-900">Success Stories</h3>
              </div>
              <p className="text-neutral-700 mb-6">
                Explore real-world examples of how we've helped clients achieve strategic growth 
                and measurable results across industries.
              </p>
              <Link
                to="/case-studies"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
              >
                View Case Studies
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* Insights Link */}
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
              className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary-900">Expert Insights</h3>
              </div>
              <p className="text-neutral-700 mb-6">
                Learn from our team's expertise with strategic insights on marketing, 
                advertising, and business growth.
              </p>
              <Link
                to="/insights"
                className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700"
              >
                Read Insights
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="py-16 md:py-24 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Marketing?
            </h2>
            <div className="flex justify-center mb-6">
              <svg width="120" height="12" viewBox="0 0 120 12" fill="none" className="text-accent-400">
                <path d="M2 6C2 6 7 2 12 6C17 10 22 6 22 6C22 6 27 2 32 6C37 10 42 6 42 6C42 6 47 2 52 6C57 10 62 6 62 6C62 6 67 2 72 6C77 10 82 6 82 6C82 6 87 2 92 6C97 10 102 6 102 6C102 6 107 2 112 6C117 10 118 6 118 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how our integrated marketing and advertising services can help 
              you achieve your business goals. Schedule a consultation to get started.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md font-medium min-w-[200px]"
                >
                  Schedule a Consultation
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-900 px-8 py-3 rounded-md font-medium min-w-[200px]"
                >
                  Learn About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
