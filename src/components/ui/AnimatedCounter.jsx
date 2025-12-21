import { useState, useEffect, useRef, useCallback } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * AnimatedCounter Component
 * Animates a number from 0 to target value when in viewport
 * Requirements: 3.2 - Animated counters for statistics
 * 
 * @param {number} target - Target number to count to
 * @param {number} duration - Animation duration in ms (default 2000)
 * @param {string} prefix - Text before number (e.g., '$')
 * @param {string} suffix - Text after number (e.g., '%', '+')
 * @param {number} decimals - Number of decimal places (default 0)
 * @param {string} className - Additional CSS classes
 */
const AnimatedCounter = ({
  target = 0,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = ''
}) => {
  // Ensure target is a valid number FIRST before any hooks
  const safeTarget = typeof target === 'number' && !isNaN(target) ? target : 0;
  
  const [count, setCount] = useState(safeTarget); // Start with target value as fallback
  const [isVisible, setIsVisible] = useState(true); // Default to visible
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);
  const rafRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Easing function for smooth animation
  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

  // Animation function
  const runAnimation = useCallback(() => {
    if (hasAnimated) return;
    setHasAnimated(true);

    // If reduced motion, just set the final value
    if (prefersReducedMotion) {
      setCount(safeTarget);
      return;
    }

    const startTime = performance.now();
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      
      setCount(easedProgress * safeTarget);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
  }, [safeTarget, duration, prefersReducedMotion, hasAnimated]);

  // Set up intersection observer
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if already visible on mount
    const rect = element.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInView) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { 
        threshold: 0,
        rootMargin: '100px 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  // Trigger animation when visible
  useEffect(() => {
    if (isVisible && !hasAnimated) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        runAnimation();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, hasAnimated, runAnimation]);

  // Format the number
  const formattedCount = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.round(count).toLocaleString();

  return (
    <span ref={elementRef} className={className}>
      {prefix}{formattedCount}{suffix}
    </span>
  );
};

/**
 * Interpolate counter value for testing
 * @param {number} progress - Animation progress (0-1)
 * @param {number} target - Target value
 * @returns {number} Interpolated value
 */
export const interpolateCounter = (progress, target) => {
  const clampedProgress = Math.max(0, Math.min(1, progress));
  const easedProgress = 1 - Math.pow(1 - clampedProgress, 4);
  return easedProgress * target;
};

export default AnimatedCounter;
