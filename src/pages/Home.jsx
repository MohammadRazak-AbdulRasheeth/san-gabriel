import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import section components
import Hero from '../components/sections/Hero';
import TrustIndicators from '../components/sections/TrustIndicators';
import HowItWorks from '../components/sections/HowItWorks';
import ServicesOverview from '../components/sections/ServicesOverview';
import FeaturedServices from '../components/sections/FeaturedServices';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import LeadForm from '../components/sections/LeadForm';
import useReducedMotion from '../hooks/useReducedMotion';

/**
 * Home Page with Advanced Animations
 * Features:
 * - Card stacking/racking scroll animation
 * - Parallax scrolling effects
 * - Gradient border animations
 * - Glass morphism effects
 * - Fade-in on scroll
 */
export default function Home() {
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  
  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Parallax transforms for background elements
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Animated Background Particles - Parallax Effect */}
      {!prefersReducedMotion && (
        <motion.div 
          className="fixed inset-0 pointer-events-none z-0"
          style={{ y: backgroundY, opacity: backgroundOpacity }}
        >
          {/* Floating gradient orbs */}
          <motion.div
            className="absolute w-96 h-96 rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
              top: '10%',
              left: '5%',
            }}
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute w-80 h-80 rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
              top: '40%',
              right: '10%',
            }}
            animate={{
              x: [0, -40, 0],
              y: [0, 50, 0],
              scale: [1.1, 0.9, 1.1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute w-64 h-64 rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
              bottom: '20%',
              left: '20%',
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -40, 0],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </motion.div>
      )}

      {/* Main Content with Stacking Card Effect */}
      <div className="relative z-10">
        {/* Hero Section - Fixed at top during scroll */}
        <Hero />
        
        {/* Stacking Card Sections */}
        <StackingSection index={0} prefersReducedMotion={prefersReducedMotion}>
          <TrustIndicators />
        </StackingSection>
        
        <StackingSection index={1} prefersReducedMotion={prefersReducedMotion}>
          <HowItWorks />
        </StackingSection>
        
        <StackingSection index={2} prefersReducedMotion={prefersReducedMotion}>
          <ServicesOverview />
        </StackingSection>
        
        <StackingSection index={3} prefersReducedMotion={prefersReducedMotion}>
          <FeaturedServices />
        </StackingSection>
        
        <StackingSection index={4} prefersReducedMotion={prefersReducedMotion}>
          <WhyChooseUs />
        </StackingSection>
        
        <StackingSection index={5} prefersReducedMotion={prefersReducedMotion} isLast>
          <LeadForm />
        </StackingSection>
      </div>
    </div>
  );
}

/**
 * StackingSection Component
 * Creates the card stacking/racking effect as user scrolls
 * Each section slides up and slightly overlaps the previous one
 */
function StackingSection({ children, index, prefersReducedMotion, isLast = false }) {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Scale down slightly as section scrolls past
  const scale = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.7, 1], 
    prefersReducedMotion ? [1, 1, 1, 1] : [0.95, 1, 1, 0.98]
  );
  
  // Subtle rotation for depth effect
  const rotateX = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.7, 1], 
    prefersReducedMotion ? [0, 0, 0, 0] : [2, 0, 0, -1]
  );
  
  // Opacity fade for smooth transitions
  const opacity = useTransform(
    scrollYProgress, 
    [0, 0.1, 0.9, 1], 
    prefersReducedMotion ? [1, 1, 1, 1] : [0.8, 1, 1, 0.9]
  );
  
  // Y translation for stacking effect
  const y = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    prefersReducedMotion ? [0, 0, 0] : [50, 0, -20]
  );

  return (
    <motion.div
      ref={sectionRef}
      style={{
        scale,
        rotateX,
        opacity,
        y,
        transformPerspective: 1000,
        transformOrigin: "center top",
      }}
      className={`relative ${!isLast ? 'mb-[-20px]' : ''}`}
    >
      {/* Gradient border effect on section */}
      <div className="relative">
        {/* Animated gradient border (top) */}
        {!prefersReducedMotion && index > 0 && (
          <motion.div
            className="absolute top-0 left-0 right-0 h-1 z-20"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.5), rgba(59, 130, 246, 0.5), transparent)',
              backgroundSize: '200% 100%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '200% 0%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        )}
        
        {/* Section content with glass morphism shadow */}
        <div className={`relative ${!prefersReducedMotion ? 'shadow-2xl' : ''}`}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}
