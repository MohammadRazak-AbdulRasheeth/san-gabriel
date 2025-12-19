import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineTruck, HiOutlineEye, HiOutlineCurrencyDollar, HiOutlineArrowRight, HiOutlineArrowDown } from 'react-icons/hi';
import Button from '../../ui/Button';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * ServiceHero Component
 * Hero section introducing traffic monetization as the core value proposition
 * Displays: Traffic → Visibility → Monetization flow
 * Requirements: 1.1, 1.2
 * Requirements: 14.3, 14.4 - Smooth animations and hover effects with reduced motion support
 */
const ServiceHero = () => {
  const prefersReducedMotion = useReducedMotion();
  const flowSteps = [
    { label: 'Traffic', Icon: HiOutlineTruck, description: 'High-traffic locations & routes' },
    { label: 'Visibility', Icon: HiOutlineEye, description: 'Physical & digital advertising' },
    { label: 'Monetization', Icon: HiOutlineCurrencyDollar, description: 'Revenue-generating assets' }
  ];

  // Animation duration helper
  const getDuration = (duration) => prefersReducedMotion ? 0.01 : duration;
  const getDelay = (delay) => prefersReducedMotion ? 0 : delay;

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white relative overflow-hidden">
      {/* Animated Background Elements - Only animate if reduced motion is not preferred */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ scale: 0.8, rotate: 0 }}
        animate={prefersReducedMotion ? { scale: 1, rotate: 0 } : { scale: 1.2, rotate: 360 }}
        transition={{ duration: prefersReducedMotion ? 0 : 20, repeat: prefersReducedMotion ? 0 : Infinity, ease: "linear" }}
      >
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent-500 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-500 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-500 rounded-full blur-xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: getDuration(0.8) }}
          className="text-center"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: getDuration(0.8), delay: getDelay(0.2) }}
          >
            Turn{' '}
            <span className="text-accent-500">High-Traffic Environments</span>
            <br />
            Into Revenue-Generating Assets
          </motion.h1>

          {/* Subheadline - Core Value Proposition */}
          <motion.p
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: getDuration(0.8), delay: getDelay(0.4) }}
          >
            San Gabriel Solutions converts foot traffic, vehicle traffic, delivery routes, 
            and digital attention into new income streams for businesses, trucking companies, 
            property owners, and nonprofit organizations.
          </motion.p>

          {/* Traffic → Visibility → Monetization Flow - Stacks vertically on mobile */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: getDuration(0.8), delay: getDelay(0.6) }}
            data-testid="flow-steps"
          >
            {flowSteps.map((step, index) => (
              <div key={step.label} className="flex flex-col md:flex-row items-center">
                <motion.div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center w-full max-w-[200px] md:min-w-[160px]"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  transition={{ duration: getDuration(0.2) }}
                >
                  <div className="flex justify-center mb-2">
                    <step.Icon className="w-10 h-10 md:w-12 md:h-12 text-accent-400" />
                  </div>
                  <div className="text-lg md:text-xl font-bold text-accent-500">{step.label}</div>
                  <div className="text-xs md:text-sm text-gray-300 mt-1">{step.description}</div>
                </motion.div>
                
                {/* Arrow between steps - horizontal on desktop */}
                {index < flowSteps.length - 1 && (
                  <motion.div
                    className="hidden md:block text-accent-500 mx-4"
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: getDuration(0.5), delay: getDelay(0.8 + index * 0.2) }}
                  >
                    <HiOutlineArrowRight className="w-8 h-8" />
                  </motion.div>
                )}
                
                {/* Mobile arrow (vertical) */}
                {index < flowSteps.length - 1 && (
                  <motion.div
                    className="md:hidden text-accent-500 my-2"
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: getDuration(0.5), delay: getDelay(0.8 + index * 0.2) }}
                  >
                    <HiOutlineArrowDown className="w-8 h-8" />
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons - Stack vertically on mobile with full width */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: getDuration(0.8), delay: getDelay(0.8) }}
            data-testid="hero-ctas"
          >
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <Link to="/contact?service=revenue-generating-advertising" className="w-full sm:w-auto block">
                <Button variant="primary" size="lg" className="w-full sm:w-auto sm:min-w-[220px] min-h-[44px] cta-hover-effect">
                  Turn My Traffic Into Revenue
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto sm:min-w-[220px] min-h-[44px] border-white text-white hover:bg-white hover:text-primary-900 cta-hover-effect"
                onClick={() => {
                  document.getElementById('services-list')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore All Services
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: getDuration(0.8), delay: getDelay(1.2) }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center cursor-pointer"
            animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: prefersReducedMotion ? 0 : Infinity }}
            onClick={() => {
              document.getElementById('services-list')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <motion.div
              className="w-1.5 h-3 bg-white/70 rounded-full mt-2"
              animate={prefersReducedMotion ? {} : { opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: prefersReducedMotion ? 0 : Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
