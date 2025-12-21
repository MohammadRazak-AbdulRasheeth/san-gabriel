import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';
import MissionSection from '../components/sections/about/MissionSection';
import ApproachSection from '../components/sections/about/ApproachSection';
import ValuesSection from '../components/sections/about/ValuesSection';
import SEO from '../components/SEO';
import { pageSEOConfig } from '../utils/seo';

const AboutUs = () => {
  return (
    <div className="pt-20">
      {/* SEO Meta Tags - Requirements: 19.1, 19.4 */}
      <SEO {...pageSEOConfig.about} />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white relative overflow-hidden" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0 z-0">
          <img 
            src="/heroimages/aboutsectionimage.jpeg" 
            alt="About San Gabriel Solutions" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/60 via-primary-700/60 to-primary-600/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2 }} 
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6" 
              id="about-hero-heading"
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1, delay: 0.3 }}
            >
              About San Gabriel Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto" 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Your strategic partner in marketing and advertising excellence
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <MissionSection />

      {/* Approach Section */}
      <ApproachSection />

      {/* Values Section */}
      <ValuesSection />

      {/* Trust Signals Section - Requirements: 19.3 */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Experience, expertise, and proven results across diverse industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-md text-center"
            >
              <div className="text-5xl font-bold text-primary-600 mb-3">15+</div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Years of Experience</h3>
              <p className="text-neutral-600">
                Over a decade of delivering strategic marketing solutions
              </p>
            </motion.div>

            {/* Case Studies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-md text-center"
            >
              <div className="text-5xl font-bold text-primary-600 mb-3">200+</div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Successful Projects</h3>
              <p className="text-neutral-600 mb-4">
                Proven results across multiple industries
              </p>
              <Link
                to="/case-studies"
                className="text-accent-600 font-medium hover:text-accent-700 inline-flex items-center"
              >
                View Case Studies
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-md text-center"
            >
              <div className="text-5xl font-bold text-primary-600 mb-3">50+</div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Published Insights</h3>
              <p className="text-neutral-600 mb-4">
                Thought leadership on marketing strategy
              </p>
              <Link
                to="/insights"
                className="text-accent-600 font-medium hover:text-accent-700 inline-flex items-center"
              >
                Read Insights
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Let's discuss how our strategy-first approach can help you achieve your business goals.
            </p>
            <Link to="/contact">
              <Button variant="primary" size="lg">Schedule a Consultation</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
