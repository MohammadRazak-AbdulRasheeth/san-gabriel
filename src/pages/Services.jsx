import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getServicesByOrder } from '../data/services';
import ServiceHero from '../components/sections/services/ServiceHero';
import ServiceCard from '../components/sections/services/ServiceCard';
import PortfolioSection from '../components/sections/services/PortfolioSection';
import FinalCTA from '../components/sections/services/FinalCTA';
import useReducedMotion from '../hooks/useReducedMotion';

/**
 * Services Page
 * Displays all 10 services in required order with ServiceHero at top
 * Integrates PortfolioSection for visual showcase
 * Requirements: 1.1, 1.2, 1.3
 * Requirements: 14.3, 14.4 - Smooth animations and hover effects with reduced motion support
 */
const Services = () => {
  const services = getServicesByOrder();
  const location = useLocation();
  
  // Respect reduced motion preferences (Requirements: 14.3, 14.4)
  const prefersReducedMotion = useReducedMotion();

  // Handle smooth scroll navigation from hash links
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  // Animation variants for staggered service cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5
      }
    }
  };

  return (
    <div className="pt-20">
      {/* ServiceHero - Traffic → Visibility → Monetization */}
      <ServiceHero />

      {/* Services List - All 10 services in required order */}
      <section id="services-list" className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              From traffic monetization to digital presence, we provide comprehensive solutions 
              to help your business generate revenue and grow.
            </p>
          </motion.div>

          {/* Services Grid - All 10 services in required order with staggered animations */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
              >
                <ServiceCard
                  id={service.id}
                  order={service.order}
                  name={service.name}
                  tagline={service.tagline}
                  businessCase={service.businessCase}
                  services={service.services}
                  advantages={service.advantages}
                  pricing={service.pricing}
                  ctas={service.ctas}
                  portfolioProof={service.portfolioProof}
                  isCore={service.isCore}
                  isFoundational={service.isFoundational}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section - Visual showcase of executed work */}
      {/* Requirements: 12.1, 12.2, 12.3, 12.4 */}
      <PortfolioSection />

      {/* Final CTA Section - Requirements 13.1, 13.2, 13.3 */}
      <FinalCTA />
    </div>
  );
};

export default Services;
