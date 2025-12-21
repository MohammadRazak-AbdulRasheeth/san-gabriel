import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceGrid from '../components/sections/services/ServiceGrid';
import Button from '../components/ui/Button';
import useReducedMotion from '../hooks/useReducedMotion';

/**
 * Services Page
 * Displays all 5 agency services with introduction emphasizing integrated services
 * Requirements: 6.1, 6.2, 6.3 (san-gabriel-agency-rebrand)
 */
const Services = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Services Grid Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              From strategic planning to execution and optimization, we provide comprehensive 
              marketing and advertising services that work together to achieve your business objectives.
            </p>
          </motion.div>

          <ServiceGrid />
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
