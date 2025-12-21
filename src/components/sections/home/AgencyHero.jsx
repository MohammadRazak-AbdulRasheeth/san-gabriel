import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import useReducedMotion from '../../../hooks/useReducedMotion';
import FloatingElement from '../../ui/FloatingElement';
import AnimatedCounter from '../../ui/AnimatedCounter';

/**
 * AgencyHero Component
 * Homepage hero section with value proposition, CTAs, and parallax effects
 * Requirements: 1.1, 1.2, 3.1, 3.2 (impressive-animations)
 */
const AgencyHero = () => {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // Parallax scroll handler
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 will-change-transform"
        style={{
          backgroundImage: `url('/heroimages/homeherosection1.jpeg')`,
          transform: prefersReducedMotion ? 'none' : `translateY(${parallaxOffset}px) scale(1.1)`,
          top: '-5%',
          height: '110%',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-800/60 to-blue-900/60" />
      
      {/* Floating decorative elements */}
      {!prefersReducedMotion && (
        <>
          <FloatingElement amplitude={20} duration={6} delay={0} className="absolute top-20 right-10 opacity-20 hidden lg:block">
            <div className="w-32 h-32 rounded-full bg-orange-400/30 blur-xl" />
          </FloatingElement>
          <FloatingElement amplitude={15} duration={5} delay={1} className="absolute bottom-40 left-10 opacity-20 hidden lg:block">
            <div className="w-24 h-24 rounded-full bg-blue-300/30 blur-xl" />
          </FloatingElement>
          <FloatingElement amplitude={12} duration={7} delay={2} className="absolute top-1/3 right-1/4 opacity-10 hidden lg:block">
            <div className="w-16 h-16 rounded-full bg-white/20 blur-lg" />
          </FloatingElement>
        </>
      )}
      
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

          {/* Trust indicators with animated counters */}
          <motion.div
            className="mt-12 pt-8 border-t border-blue-700/50"
            variants={itemVariants}
          >
            <div className="flex flex-wrap gap-8 text-sm text-blue-200">
              <div>
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter target={15} suffix="+" duration={2000} />
                </div>
                <div>Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter target={200} suffix="+" duration={2500} />
                </div>
                <div>Clients Served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter target={5} duration={1500} />
                </div>
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
