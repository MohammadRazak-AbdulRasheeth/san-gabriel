import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import useReducedMotion from '../../../hooks/useReducedMotion';
import { HERO_CTAS } from '../../../data/ctaConfig';

/**
 * VehicleHero Component
 * Hero section for Vehicle Advertising positioning
 * Headline: "Advertise While You Drive"
 * Subheadline: "Turn Your Vehicle Into a 24/7 Moving Billboard"
 * 
 * Requirements: 1.1, 1.2, 1.3
 */
const VehicleHero = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  const handleScroll = useCallback(() => {
    if (prefersReducedMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.bottom > 0 && rect.top < windowHeight) {
      const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const offset = (scrollProgress - 0.5) * rect.height * 0.3;
      setParallaxOffset(offset);
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, prefersReducedMotion]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 will-change-transform"
        style={{
          backgroundImage: `url('/heroimages/homeherosection1.jpeg')`,
          transform: prefersReducedMotion ? 'none' : `translateY(${parallaxOffset}px) scale(1.1)`,
          top: '-5%',
          height: '110%',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/70 via-primary-800/70 to-primary-900/70" />
      
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline - Requirement 1.1 */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            variants={itemVariants}
          >
            Advertise While You{' '}
            <span className="text-accent-400">Drive</span>
          </motion.h1>

          {/* Subheadline - Requirement 1.2 */}
          <motion.p
            className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Turn Your Vehicle Into a 24/7 Moving Billboard
          </motion.p>

          {/* Value proposition - mobile optimized */}
          <motion.div
            className="inline-flex items-center bg-accent-500/20 border border-accent-400/30 rounded-full px-4 sm:px-8 py-3 sm:py-4 mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <span className="text-accent-300 font-semibold text-base sm:text-xl">
              Professional Vehicle Wraps Starting at <span className="text-white text-2xl sm:text-3xl font-bold">$299</span>
            </span>
          </motion.div>

          {/* CTAs - Requirement 1.3, 9.4 (Mobile CTA visibility) */}
          <motion.div
            className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center w-full px-4 sm:px-0"
            variants={itemVariants}
          >
            <Button
              variant="primary"
              size="lg"
              to={HERO_CTAS.primary.href}
              className="bg-accent-500 hover:bg-accent-600 shadow-lg w-full sm:w-auto min-h-[48px] text-base sm:text-lg font-semibold"
            >
              {HERO_CTAS.primary.text}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              to={HERO_CTAS.secondary.href}
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary-900 w-full sm:w-auto min-h-[48px] text-base sm:text-lg font-semibold"
            >
              {HERO_CTAS.secondary.text}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default VehicleHero;
