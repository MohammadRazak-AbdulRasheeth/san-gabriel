import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Custom hook to track viewport size with debounced updates
 * Requirements: 6.1 - Mobile-optimized animations
 * 
 * @param {number} debounceMs - Debounce delay in ms (default 100)
 * @returns {object} { width, height, isMobile, isTablet, isDesktop }
 */
const useViewportSize = (debounceMs = 100) => {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  });
  
  const timeoutRef = useRef(null);

  const updateViewport = useCallback(() => {
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  const debouncedUpdate = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(updateViewport, debounceMs);
  }, [updateViewport, debounceMs]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initial update
    updateViewport();

    window.addEventListener('resize', debouncedUpdate, { passive: true });

    return () => {
      window.removeEventListener('resize', debouncedUpdate);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [debouncedUpdate, updateViewport]);

  // Breakpoint flags
  const isMobile = viewport.width < 768;
  const isTablet = viewport.width >= 768 && viewport.width < 1024;
  const isDesktop = viewport.width >= 1024;

  return {
    width: viewport.width,
    height: viewport.height,
    isMobile,
    isTablet,
    isDesktop
  };
};

/**
 * Get animation settings optimized for device type
 * @param {boolean} isMobile - Is mobile device
 * @returns {object} Animation settings
 */
export const getOptimizedAnimationSettings = (isMobile) => {
  if (isMobile) {
    return {
      parallaxSpeed: 0.2,
      revealDirection: 'fade',
      tiltEnabled: false,
      floatAmplitude: 8,
      staggerDelay: 0.05
    };
  }
  
  return {
    parallaxSpeed: 0.5,
    revealDirection: 'up',
    tiltEnabled: true,
    floatAmplitude: 15,
    staggerDelay: 0.1
  };
};

export default useViewportSize;
