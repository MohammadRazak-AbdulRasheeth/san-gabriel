import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * AgencyHero Component
 * Homepage hero section with value proposition and CTAs
 * Requirements: 1.1, 1.2
 */
const AgencyHero = () => {
  const prefersReducedMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url('/heroimages/homeherosection1.jpeg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/60 to-blue-900/60" />
      
      {/* Subtle animated background pattern */}
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

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline - Value proposition */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            variants={itemVariants}
          >
            Strategic Marketing Partner.{' '}
            <span className="text-orange-400">Measurable Results.</span>
          </motion.h1>

          {/* Subheadline - Authority and results-driven messaging */}
          <motion.p
            className="text-xl sm:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl"
            variants={itemVariants}
          >
            We transform marketing from cost center to growth engine through 
            strategy-first thinking, ethical execution, and data-driven optimization. 
            Your success is our only metric.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            {/* Primary CTA */}
            <Button
              variant="primary"
              size="lg"
              to="/contact"
              className="shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </Button>

            {/* Secondary CTA */}
            <Button
              variant="secondary"
              size="lg"
              to="/services"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-900"
            >
              Explore Services
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 pt-8 border-t border-blue-700/50"
            variants={itemVariants}
          >
            <div className="flex flex-wrap gap-8 text-sm text-blue-200">
              <div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div>Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">200+</div>
                <div>Clients Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">5</div>
                <div>Core Services</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default AgencyHero;
