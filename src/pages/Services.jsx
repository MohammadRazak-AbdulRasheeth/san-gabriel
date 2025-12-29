import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import VehicleServices from '../components/sections/services/VehicleServices';
import SecondaryServices from '../components/sections/services/SecondaryServices';
import Button from '../components/ui/Button';
import useReducedMotion from '../hooks/useReducedMotion';
import SEO from '../components/SEO';
import { pageSEOConfig } from '../utils/seo';
import SectionDivider from '../components/ui/SectionDivider';
import TiltCard from '../components/ui/TiltCard';
import useViewportSize from '../hooks/useViewportSize';

/**
 * Services Page
 * Vehicle Advertising Rebrand:
 * - VehicleServices as first and dominant section
 * - SecondaryServices below with de-emphasized styling
 * 
 * Requirements: 3.1, 3.2, 3.3 (vehicle-advertising-rebrand)
 */
const Services = () => {
  const prefersReducedMotion = useReducedMotion();
  const { isMobile } = useViewportSize();
  const heroRef = useRef(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  // Parallax scroll handler
  const handleScroll = useCallback(() => {
    if (prefersReducedMotion || !heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.bottom > 0 && rect.top < windowHeight) {
      const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const offset = (scrollProgress - 0.5) * rect.height * (isMobile ? 0.15 : 0.3);
      setParallaxOffset(offset);
    }
  }, [prefersReducedMotion, isMobile]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, prefersReducedMotion]);

  return (
    <div className="pt-20">
      {/* SEO Meta Tags */}
      <SEO {...pageSEOConfig.services} />
      
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 md:py-28 overflow-hidden">
        {/* Parallax Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 will-change-transform"
          style={{
            backgroundImage: `url('/heroimages/servicesherosectionimage.jpeg')`,
            transform: prefersReducedMotion ? 'none' : `translateY(${parallaxOffset}px) scale(1.1)`,
            top: '-5%',
            height: '110%',
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
              Vehicle Advertising & Mobile Visibility Solutions
            </h1>
            <div className="flex justify-center mb-6">
              <svg width="120" height="12" viewBox="0 0 120 12" fill="none" className="text-accent-400">
                <path d="M2 6C2 6 7 2 12 6C17 10 22 6 22 6C22 6 27 2 32 6C37 10 42 6 42 6C42 6 47 2 52 6C57 10 62 6 62 6C62 6 67 2 72 6C77 10 82 6 82 6C82 6 87 2 92 6C97 10 102 6 102 6C102 6 107 2 112 6C117 10 118 6 118 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Turn your vehicle into a 24/7 moving billboard. Professional installation, 
              premium materials, and Ontario safety compliant solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Services - Primary/Dominant Section (Requirements: 3.1, 3.2, 3.4) */}
      <VehicleServices />

      {/* Secondary Services - De-emphasized (Requirements: 3.3, 3.5) */}
      <SecondaryServices />

      {/* Trust Signals Section */}
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
              See how our vehicle advertising solutions deliver measurable outcomes for businesses like yours
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Case Studies Link with TiltCard */}
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
            >
              {isMobile ? (
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900">Success Stories</h3>
                  </div>
                  <p className="text-neutral-700 mb-6">
                    Explore real-world examples of how we've helped clients achieve visibility 
                    and measurable results with vehicle advertising.
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
                </div>
              ) : (
                <TiltCard maxTilt={8} scale={1.02}>
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-primary-900">Success Stories</h3>
                    </div>
                    <p className="text-neutral-700 mb-6">
                      Explore real-world examples of how we've helped clients achieve visibility 
                      and measurable results with vehicle advertising.
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
                  </div>
                </TiltCard>
              )}
            </motion.div>

            {/* Portfolio Link with TiltCard */}
            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
            >
              {isMobile ? (
                <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900">Our Work</h3>
                  </div>
                  <p className="text-neutral-700 mb-6">
                    Browse our portfolio of vehicle wraps, rear window ads, and fleet branding 
                    projects across the GTA.
                  </p>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700"
                  >
                    View Portfolio
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ) : (
                <TiltCard maxTilt={8} scale={1.02}>
                  <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-primary-900">Our Work</h3>
                    </div>
                    <p className="text-neutral-700 mb-6">
                      Browse our portfolio of vehicle wraps, rear window ads, and fleet branding 
                      projects across the GTA.
                    </p>
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center text-accent-600 font-semibold hover:text-accent-700"
                    >
                      View Portfolio
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </TiltCard>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider type="curve" fillColor="#1e3a5f" bgColor="white" height={60} />

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
              Ready to Advertise While You Drive?
            </h2>
            <div className="flex justify-center mb-6">
              <svg width="120" height="12" viewBox="0 0 120 12" fill="none" className="text-accent-400">
                <path d="M2 6C2 6 7 2 12 6C17 10 22 6 22 6C22 6 27 2 32 6C37 10 42 6 42 6C42 6 47 2 52 6C57 10 62 6 62 6C62 6 67 2 72 6C77 10 82 6 82 6C82 6 87 2 92 6C97 10 102 6 102 6C102 6 107 2 112 6C117 10 118 6 118 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Get a free quote for your vehicle advertising project. Professional design 
              and installation included with every service.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md font-medium min-w-[200px]"
                >
                  Get My Vehicle Wrapped
                </Button>
              </Link>
              <Link to="/pricing">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-900 px-8 py-3 rounded-md font-medium min-w-[200px]"
                >
                  View Pricing
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
