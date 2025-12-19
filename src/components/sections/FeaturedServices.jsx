import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { featuredServices } from '../../data/services';
import Button from '../ui/Button';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * FeaturedServices Section with Advanced Animations
 * Features:
 * - Tab switching with 3D flip animation
 * - Glass morphism cards
 * - Animated pricing display
 * - Staggered list animations
 */
const FeaturedServices = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Tab button variants
  const tabVariants = {
    inactive: { 
      scale: 1, 
      backgroundColor: "rgb(255, 255, 255)",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)"
    },
    active: { 
      scale: prefersReducedMotion ? 1 : 1.05, 
      backgroundColor: "rgb(249, 115, 22)",
      boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)"
    }
  };

  // Content animation variants
  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 30,
      rotateX: prefersReducedMotion ? 0 : -10,
      scale: prefersReducedMotion ? 1 : 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : -20,
      rotateX: prefersReducedMotion ? 0 : 10,
      scale: prefersReducedMotion ? 1 : 0.95,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.3
      }
    }
  };

  // List item stagger variants
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.4 }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Animated background */}
      {!prefersReducedMotion && (
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ scale: backgroundScale }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent-50 to-transparent rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-3xl opacity-50" />
        </motion.div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
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
            Featured Services
          </motion.h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our most popular solutions that deliver exceptional results for businesses like yours
          </p>
        </motion.div>

        {/* Service tabs container with glass morphism */}
        <motion.div 
          className="bg-neutral-50/80 backdrop-blur-sm rounded-2xl p-8 border border-neutral-200/50 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Tab navigation with animated indicator */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {featuredServices.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveTab(index)}
                variants={tabVariants}
                animate={activeTab === index ? "active" : "inactive"}
                whileHover={prefersReducedMotion ? {} : { 
                  scale: activeTab === index ? 1.05 : 1.08,
                  y: -3
                }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  activeTab === index
                    ? 'text-white'
                    : 'text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                {service.name}
              </motion.button>
            ))}
          </div>

          {/* Tab content with 3D flip animation */}
          <div className="perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-xl p-8 shadow-lg border border-neutral-100"
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Service content */}
                  <div>
                    <motion.h3 
                      className="text-2xl font-bold text-primary-900 mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: prefersReducedMotion ? 0 : 0.2 }}
                    >
                      {featuredServices[activeTab].name}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-neutral-600 text-lg mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: prefersReducedMotion ? 0 : 0.3 }}
                    >
                      {featuredServices[activeTab].description}
                    </motion.p>

                    {/* Animated pricing display */}
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: prefersReducedMotion ? 0 : 0.4, type: "spring" }}
                    >
                      <span className="text-sm text-neutral-500 uppercase tracking-wide font-semibold">
                        Starting at
                      </span>
                      <motion.div 
                        className="text-3xl font-bold text-accent-500"
                        whileHover={prefersReducedMotion ? {} : {
                          scale: 1.1,
                          textShadow: "0 0 20px rgba(249, 115, 22, 0.3)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        ${featuredServices[activeTab].pricing.startingAt.toLocaleString()}
                      </motion.div>
                    </motion.div>

                    <motion.div
                      whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -3 }}
                      whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
                    >
                      <Button 
                        variant="primary" 
                        size="lg"
                        onClick={scrollToForm}
                        className="relative overflow-hidden group"
                      >
                        <span className="relative z-10">Get Started</span>
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
                  </div>

                  {/* Service details with staggered list */}
                  <div>
                    {/* Deliverables */}
                    <div className="mb-8">
                      <motion.h4 
                        className="text-lg font-semibold text-primary-900 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: prefersReducedMotion ? 0 : 0.3 }}
                      >
                        What's Included:
                      </motion.h4>
                      <motion.ul 
                        className="space-y-2"
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {featuredServices[activeTab].deliverables.map((item, index) => (
                          <motion.li 
                            key={index} 
                            variants={itemVariants}
                            className="flex items-center text-neutral-600 group"
                          >
                            <motion.span 
                              className="text-accent-500 mr-3 flex-shrink-0"
                              whileHover={prefersReducedMotion ? {} : { 
                                scale: 1.3, 
                                rotate: 360,
                                transition: { duration: 0.3 }
                              }}
                            >
                              <HiOutlineCheckCircle className="w-5 h-5" />
                            </motion.span>
                            <span className="group-hover:text-primary-900 transition-colors">
                              {item}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>

                    {/* Best for - animated tags */}
                    <div>
                      <motion.h4 
                        className="text-lg font-semibold text-primary-900 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: prefersReducedMotion ? 0 : 0.5 }}
                      >
                        Best For:
                      </motion.h4>
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {featuredServices[activeTab].bestFor.map((item, index) => (
                          <motion.span 
                            key={index}
                            variants={itemVariants}
                            whileHover={prefersReducedMotion ? {} : { 
                              scale: 1.1, 
                              y: -3,
                              backgroundColor: "#f97316",
                              color: "#ffffff",
                              transition: { duration: 0.2 }
                            }}
                            className="px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-sm font-medium cursor-default"
                          >
                            {item}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;
