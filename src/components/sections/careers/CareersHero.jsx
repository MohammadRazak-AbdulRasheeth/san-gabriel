import React from 'react';
import { motion } from 'framer-motion';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * CareersHero Component
 * Hero section for careers page with commission-only sales-focused messaging
 * Requirements: 7.1, 7.3, 7.4 - Commission-only positioning, sales-focused recruitment, earning potential emphasis
 */
const CareersHero = () => {
  const prefersReducedMotion = useReducedMotion();

  // Animation variants for staggered content
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
        duration: prefersReducedMotion ? 0.01 : 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('/heroimages/servicesherosectionimage.jpeg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/70 to-blue-900/70" />
      
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
          {/* Badge - Commission-only emphasis */}
          <motion.div
            className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 rounded-full px-4 py-2 mb-6"
            variants={itemVariants}
          >
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            <span className="text-orange-300 font-medium text-sm">Commission-Only Sales Opportunities</span>
          </motion.div>

          {/* Headline - Sales-focused and earning potential emphasis */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            variants={itemVariants}
          >
            Sell Vehicle Advertising.{' '}
            <span className="text-orange-400">Earn Unlimited Commissions.</span>
          </motion.h1>

          {/* Subheadline - Commission-based messaging with earning potential */}
          <motion.p
            className="text-xl sm:text-2xl text-blue-100 mb-10 leading-relaxed max-w-3xl"
            variants={itemVariants}
          >
            Join our sales team and earn 10-15% commission on every vehicle wrap you sell. 
            No cap on earnings. No limits on your success. 
            Turn your sales skills into real income with our growing vehicle advertising business.
          </motion.p>

          {/* Key highlights - Commission and earning potential focus */}
          <motion.div
            className="flex flex-wrap gap-6 text-sm sm:text-base"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2 bg-green-500/20 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-green-100 font-medium">10-15% Commission Per Sale</span>
            </div>
            <div className="flex items-center gap-2 bg-green-500/20 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-green-100 font-medium">Unlimited Earning Potential</span>
            </div>
            <div className="flex items-center gap-2 bg-green-500/20 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-green-100 font-medium">Flexible Sales Partnership</span>
            </div>
          </motion.div>

          {/* Earning example - Emphasize commission potential */}
          <motion.div
            className="mt-10 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
            variants={itemVariants}
          >
            <p className="text-blue-100 text-lg">
              <span className="text-white font-semibold">Example:</span> Sell a $999 Professional Vehicle Package and earn{' '}
              <span className="text-orange-400 font-bold">$100-$150 commission</span>. 
              Close 10 deals a month and you're earning{' '}
              <span className="text-orange-400 font-bold">$1,000-$1,500+</span> in commissions.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default CareersHero;
