import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { howItWorksSteps } from '../../data/content';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * HowItWorks Section with Advanced Animations
 * Features:
 * - 3D card perspective on hover
 * - Staggered fade-in animations
 * - Animated connection lines
 * - Glass morphism effects
 */
const HowItWorks = () => {
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Animated line progress
  const lineProgress = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header with 3D text effect */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary-900 mb-4"
            whileHover={prefersReducedMotion ? {} : {
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            How It Works
          </motion.h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our proven three-step process ensures you get exactly what you need to grow your business
          </p>
        </motion.div>

        {/* Steps with animated connection line */}
        <div className="relative">
          {/* Animated connection line (desktop only) */}
          {!prefersReducedMotion && (
            <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-1 bg-neutral-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-500 via-blue-500 to-green-500"
                style={{ scaleX: lineProgress, transformOrigin: 'left' }}
              />
            </div>
          )}
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: prefersReducedMotion ? 0.01 : 0.7, 
                  delay: prefersReducedMotion ? 0 : index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
                className="relative text-center perspective-1000"
              >
                {/* Step card with 3D hover effect */}
                <motion.div 
                  className="bg-white rounded-xl p-8 shadow-lg border border-neutral-100 h-full relative overflow-hidden group"
                  whileHover={prefersReducedMotion ? {} : {
                    y: -10,
                    rotateY: 5,
                    rotateX: 5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    borderColor: "rgba(249, 115, 22, 0.3)",
                    transition: { duration: 0.4 }
                  }}
                >
                  {/* Animated background gradient on hover */}
                  {!prefersReducedMotion && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.4 }}
                    />
                  )}
                  
                  {/* Step number badge */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10"
                    whileHover={prefersReducedMotion ? {} : {
                      scale: 1.2,
                      rotate: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {step.stepNumber}
                  </motion.div>
                  
                  {/* Icon with magnetic effect */}
                  <motion.div 
                    className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10"
                    whileHover={prefersReducedMotion ? {} : {
                      scale: 1.15,
                      boxShadow: "0 0 30px rgba(249, 115, 22, 0.5)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {step.icon && (
                      <step.icon className="w-8 h-8 text-white" />
                    )}
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-xl font-bold text-primary-900 mb-4 relative z-10"
                    whileHover={prefersReducedMotion ? {} : {
                      color: "#f97316",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-neutral-600 leading-relaxed relative z-10">
                    {step.description}
                  </p>
                  
                  {/* Decorative corner accent */}
                  {!prefersReducedMotion && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-accent-100 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.4 }}
                    />
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
