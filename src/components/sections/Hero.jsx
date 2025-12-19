import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * Hero Section with Advanced Animations
 * Features:
 * - Parallax scrolling background
 * - Morphing gradient shapes
 * - 3D text animations
 * - Animated gradient borders
 * - Glass morphism effects
 */
const Hero = () => {
  const heroRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  
  // Scroll-based parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToServices = () => {
    document.getElementById('services-overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white overflow-hidden"
    >
      {/* Animated Morphing Background Shapes */}
      {!prefersReducedMotion && (
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          {/* Large morphing blob - top right */}
          <motion.div
            className="absolute w-[600px] h-[600px] -top-32 -right-32"
            style={{
              background: 'radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, transparent 70%)',
            }}
            animate={{
              borderRadius: [
                '60% 40% 30% 70% / 60% 30% 70% 40%',
                '30% 60% 70% 40% / 50% 60% 30% 60%',
                '60% 40% 30% 70% / 60% 30% 70% 40%'
              ],
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Medium morphing blob - bottom left */}
          <motion.div
            className="absolute w-[400px] h-[400px] -bottom-20 -left-20"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, transparent 70%)',
            }}
            animate={{
              borderRadius: [
                '40% 60% 70% 30% / 40% 50% 60% 50%',
                '70% 30% 50% 50% / 30% 30% 70% 70%',
                '40% 60% 70% 30% / 40% 50% 60% 50%'
              ],
              scale: [1.1, 0.9, 1.1],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Small accent blob - center */}
          <motion.div
            className="absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
            }}
            animate={{
              borderRadius: [
                '50% 50% 50% 50%',
                '60% 40% 60% 40%',
                '50% 50% 50% 50%'
              ],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </motion.div>
      )}

      {/* Floating Particles */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.3 + Math.random() * 0.4,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20" />
      
      {/* Content */}
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 min-h-screen flex items-center"
        style={{ y: prefersReducedMotion ? 0 : contentY, opacity: prefersReducedMotion ? 1 : opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Animated headline with 3D effect */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            >
              <motion.span
                className="inline-block"
                whileHover={prefersReducedMotion ? {} : {
                  scale: 1.05,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
              >
                Transform Your Business With{' '}
              </motion.span>
              <motion.span 
                className="text-accent-500 inline-block"
                whileHover={prefersReducedMotion ? {} : {
                  scale: 1.1,
                  textShadow: "0 0 30px rgba(249, 115, 22, 0.5)",
                  transition: { duration: 0.3 }
                }}
              >
                Expert Solutions
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
            >
              San Gabriel Consulting delivers comprehensive business solutions across marketing, strategy, technology, and branding to help your company thrive in today's competitive landscape.
            </motion.p>
            
            {/* CTA Buttons with hover effects */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/contact">
                <motion.div
                  whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -3 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                >
                  <Button 
                    variant="primary" 
                    size="lg"
                    className="shadow-2xl w-full sm:w-auto relative overflow-hidden group"
                  >
                    <span className="relative z-10">Request a Free Consultation</span>
                    {/* Shine effect */}
                    {!prefersReducedMotion && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                  </Button>
                </motion.div>
              </Link>
              
              <motion.div
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -3 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={scrollToServices}
                  className="bg-white bg-opacity-10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-900 w-full sm:w-auto"
                >
                  View Our Services
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right column - Visual element with animated border */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ 
              duration: prefersReducedMotion ? 0.01 : 1, 
              delay: prefersReducedMotion ? 0 : 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="hidden lg:block perspective-1000"
          >
            <div className="relative">
              {/* Animated gradient border container */}
              <motion.div 
                className="absolute -inset-1 rounded-xl"
                style={{
                  background: 'linear-gradient(45deg, #f97316, #3b82f6, #10b981, #f97316)',
                  backgroundSize: '300% 300%'
                }}
                animate={prefersReducedMotion ? {} : {
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Glass morphism card */}
              <motion.div 
                className="relative w-full h-96 bg-white/10 rounded-lg backdrop-blur-md overflow-hidden border border-white/20"
                whileHover={prefersReducedMotion ? {} : {
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02,
                  transition: { duration: 0.4 }
                }}
              >
                <motion.img 
                  src="/sangabriel-hero-image.jpg"
                  alt="Business Growth Analytics"
                  className="w-full h-full object-cover"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
              </motion.div>
              
              {/* Floating decorative elements */}
              <motion.div 
                animate={prefersReducedMotion ? {} : { 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-accent-500 rounded-2xl opacity-80 shadow-lg"
              />
              <motion.div 
                animate={prefersReducedMotion ? {} : { 
                  y: [10, -10, 10],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm"
              />
              
              {/* Glowing accent */}
              {!prefersReducedMotion && (
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Enhanced scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: prefersReducedMotion ? 0 : 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          className="text-white text-center cursor-pointer group"
          onClick={scrollToServices}
          whileHover={prefersReducedMotion ? {} : { scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.p 
            className="text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity"
            animate={prefersReducedMotion ? {} : { opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to explore
          </motion.p>
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative overflow-hidden group-hover:border-accent-500 transition-colors"
          >
            <motion.div
              className="w-1 h-3 bg-white/80 rounded-full mt-2 group-hover:bg-accent-500"
              animate={prefersReducedMotion ? {} : { y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
