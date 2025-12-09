import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { trustIndicators } from '../../data/content';

const TrustIndicators = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const AnimatedCounter = ({ value, delay }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isVisible) return;
      
      const timer = setTimeout(() => {
        let startTime;
        const startCount = 0;
        const endCount = parseInt(value.replace(/[^0-9]/g, '')) || 0;
        const duration = 2000; // 2 seconds
        
        const updateCount = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.floor(easeOutQuart * (endCount - startCount) + startCount);
          
          setCount(currentCount);
          
          if (progress < 1) {
            requestAnimationFrame(updateCount);
          }
        };
        
        requestAnimationFrame(updateCount);
      }, delay);
      
      return () => clearTimeout(timer);
    }, [value, delay]); // eslint-disable-line react-hooks/exhaustive-deps

    const formatValue = () => {
      if (value.includes('%')) return `${count}%`;
      if (value.includes('$') && value.includes('M')) return `$${count}M+`;
      if (value.includes('+')) return `${count}+`;
      return count.toString();
    };

    return (
      <motion.span
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: delay / 1000 }}
        className="text-4xl md:text-5xl font-bold text-primary-900"
      >
        {formatValue()}
      </motion.span>
    );
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-primary-50 to-accent-50 relative overflow-hidden">
      {/* Dynamic Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(249, 115, 22, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={indicator.id}
              className="text-center group perspective-1000 cursor-pointer"
              initial={{ opacity: 0, y: 60, rotateY: -30 }}
              animate={isVisible ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 60, rotateY: -30 }}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                z: 30,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              transition={{ duration: 0.8, delay: indicator.animationDelay / 1000, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div
                className="relative p-6 bg-white rounded-xl shadow-lg transform-gpu border border-white/50"
                whileHover={{
                  boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.2)",
                  borderColor: "rgba(249, 115, 22, 0.3)",
                  transition: { duration: 0.3 }
                }}
              >
                {/* Animated Icon */}
                <motion.div 
                  className="text-3xl mb-3"
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  {React.createElement(indicator.icon, { 
                    className: "w-12 h-12 text-accent-500 mx-auto transition-colors group-hover:text-primary-600" 
                  })}
                </motion.div>
                
                {/* Animated Number */}
                <motion.div
                  className="text-4xl font-bold text-primary-900 mb-2"
                  whileHover={{
                    scale: 1.15,
                    color: "#f97316",
                    textShadow: "0 0 20px rgba(249, 115, 22, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <AnimatedCounter 
                    value={indicator.value} 
                    delay={indicator.animationDelay + 500}
                  />
                </motion.div>
                
                {/* Label with hover effect */}
                <motion.p 
                  className="text-neutral-600 font-medium"
                  whileHover={{
                    y: -2,
                    color: "#374151",
                    transition: { duration: 0.2 }
                  }}
                >
                  {indicator.label}
                </motion.p>
                
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 pointer-events-none"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicators;