import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { agencyServices } from '../../../data/agencyServices';
import useReducedMotion from '../../../hooks/useReducedMotion';
import {
  HiOutlineChartBar,
  HiOutlineSparkles,
  HiOutlineSpeakerphone,
  HiOutlineGlobe,
  HiOutlineLightBulb
} from 'react-icons/hi';

/**
 * Icon mapping for agency services
 */
const iconMap = {
  'ChartBarIcon': HiOutlineChartBar,
  'SparklesIcon': HiOutlineSparkles,
  'MegaphoneIcon': HiOutlineSpeakerphone,
  'GlobeAltIcon': HiOutlineGlobe,
  'LightBulbIcon': HiOutlineLightBulb
};

/**
 * AgencyServicesOverview Component
 * Displays 5 agency service cards in grid layout
 * Requirements: 2.1, 2.2, 2.3
 */
const AgencyServicesOverview = () => {
  const prefersReducedMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section intro - emphasize integrated approach */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Integrated Marketing & Advertising Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to execution, our services work together to drive business growth. 
            We don't just deliver tactics—we build comprehensive marketing systems aligned with your goals.
          </p>
        </div>

        {/* Service cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {agencyServices.map((service) => {
            const IconComponent = iconMap[service.icon] || HiOutlineChartBar;
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <Link to={`/services/${service.id}`} className="block p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>

                  {/* Service name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.name}
                  </h3>

                  {/* Brief description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Learn More link */}
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                    <span>Learn More</span>
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Not sure which service is right for you?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AgencyServicesOverview;
