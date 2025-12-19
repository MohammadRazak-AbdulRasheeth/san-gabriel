import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { trustIndicators } from '../../data/content';
import useReducedMotion from '../../hooks/useReducedMotion';

// AnimatedCounter component moved outside to avoid dependency issues
const AnimatedCounter = ({ value, delay, isVisible, prefersReducedMotion }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    if (prefersReducedMotion) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
      setCount(numericValue);
      return;
    }

    const timer = setTimeout(() => {
      let startTime;
      const endCount = parseInt(value.replace(/[^0-9]/g, '')) || 0;
      const duration = 2000;

      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * endCount);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay, isVisible, prefersReducedMotion]);

  const formatValue = useCallback(() => {
    if (value.includes('%')) return `${count}%`;
    if (value.includes('$') && value.includes('M')) return `$${count}M+`;
    if (value.includes('+')) return `${count}+`;
    return count.toString();
  }, [value, count]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-primary-900">
      {formatValue()}
    </span>
  );
};

const TrustIndicators = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 bg-gradient-to-r from-primary-50 to-accent-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {trustIndicators.map((indicator) => (
            <motion.div
              key={indicator.id}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.6,
                delay: prefersReducedMotion ? 0 : indicator.animationDelay / 1000,
              }}
            >
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                {/* Icon */}
                <div className="mb-4">
                  {React.createElement(indicator.icon, {
                    className: 'w-10 h-10 text-accent-500 mx-auto',
                  })}
                </div>

                {/* Animated Number */}
                <div className="mb-2">
                  <AnimatedCounter
                    value={indicator.value}
                    delay={indicator.animationDelay + 300}
                    isVisible={isVisible}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                </div>

                {/* Label */}
                <p className="text-neutral-600 font-medium">{indicator.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicators;
