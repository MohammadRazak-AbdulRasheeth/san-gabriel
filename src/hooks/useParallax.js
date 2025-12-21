import { useState, useEffect, useCallback, useRef } from 'react';
import useReducedMotion from './useReducedMotion';

/**
 * Custom hook for parallax scroll effects
 * Requirements: 1.1, 1.4 - Parallax scrolling with reduced motion support
 * 
 * @param {number} speed - Parallax speed (0-1), higher = more movement
 * @param {string} direction - 'vertical' or 'horizontal'
 * @returns {object} { offset, ref } - Current offset value and ref to attach to element
 */
const useParallax = (speed = 0.5, direction = 'vertical') => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef(null);
  const rafRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Clamp speed between 0 and 1
  const clampedSpeed = Math.max(0, Math.min(1, speed));

  const calculateOffset = useCallback(() => {
    if (prefersReducedMotion || !elementRef.current) {
      setOffset(0);
      return;
    }

    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate how far the element is from the center of the viewport
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;
    const distanceFromCenter = elementCenter - viewportCenter;
    
    // Calculate parallax offset based on distance and speed
    // Multiply by speed factor (0-1) to control intensity
    const parallaxOffset = distanceFromCenter * clampedSpeed * 0.3;
    
    setOffset(parallaxOffset);
  }, [clampedSpeed, prefersReducedMotion]);

  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(calculateOffset);
  }, [calculateOffset]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setOffset(0);
      return;
    }

    // Initial calculation
    calculateOffset();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll, calculateOffset, prefersReducedMotion]);

  // Return transform style based on direction
  const getTransformStyle = () => {
    if (prefersReducedMotion) return {};
    
    return direction === 'horizontal'
      ? { transform: `translateX(${offset}px)` }
      : { transform: `translateY(${offset}px)` };
  };

  return {
    offset,
    ref: elementRef,
    style: getTransformStyle(),
    isReduced: prefersReducedMotion
  };
};

/**
 * Calculate parallax offset for testing purposes
 * @param {number} distanceFromCenter - Distance from viewport center
 * @param {number} speed - Parallax speed (0-1)
 * @returns {number} Calculated offset
 */
export const calculateParallaxOffset = (distanceFromCenter, speed) => {
  const clampedSpeed = Math.max(0, Math.min(1, speed));
  return distanceFromCenter * clampedSpeed * 0.3;
};

export default useParallax;
