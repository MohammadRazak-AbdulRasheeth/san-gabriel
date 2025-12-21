/**
 * Animation utility functions
 * Requirements: Design document - Ensure animations are optional
 */

/**
 * Gets animation duration based on reduced motion preference
 * @param {boolean} prefersReducedMotion - User's reduced motion preference
 * @param {number} normalDuration - Normal animation duration in seconds
 * @returns {number} Animation duration
 */
export const getAnimationDuration = (prefersReducedMotion, normalDuration = 0.6) => {
  return prefersReducedMotion ? 0.01 : normalDuration;
};

/**
 * Gets animation delay based on reduced motion preference
 * @param {boolean} prefersReducedMotion - User's reduced motion preference
 * @param {number} normalDelay - Normal animation delay in seconds
 * @returns {number} Animation delay
 */
export const getAnimationDelay = (prefersReducedMotion, normalDelay = 0) => {
  return prefersReducedMotion ? 0 : normalDelay;
};

/**
 * Gets Framer Motion animation variants with reduced motion support
 * @param {boolean} prefersReducedMotion - User's reduced motion preference
 * @returns {object} Animation variants
 */
export const getFadeInVariants = (prefersReducedMotion) => {
  if (prefersReducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.01 } }
    };
  }

  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };
};

/**
 * Gets stagger animation configuration
 * @param {boolean} prefersReducedMotion - User's reduced motion preference
 * @param {number} staggerDelay - Delay between staggered items
 * @returns {object} Stagger configuration
 */
export const getStaggerConfig = (prefersReducedMotion, staggerDelay = 0.1) => {
  if (prefersReducedMotion) {
    return {
      staggerChildren: 0,
      delayChildren: 0
    };
  }

  return {
    staggerChildren: staggerDelay,
    delayChildren: 0.1
  };
};

/**
 * Gets scale animation variants
 * @param {boolean} prefersReducedMotion - User's reduced motion preference
 * @returns {object} Scale animation variants
 */
export const getScaleVariants = (prefersReducedMotion) => {
  if (prefersReducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.01 } }
    };
  }

  return {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };
};

/**
 * Gets slide animation variants
 * @param {boolean} prefersReducedMotion - User's reduced motion preference
 * @param {string} direction - Direction to slide from ('left', 'right', 'up', 'down')
 * @returns {object} Slide animation variants
 */
export const getSlideVariants = (prefersReducedMotion, direction = 'up') => {
  if (prefersReducedMotion) {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.01 } }
    };
  }

  const directionMap = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 }
  };

  return {
    hidden: { opacity: 0, ...directionMap[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };
};

/**
 * Checks if user prefers reduced motion
 * @returns {boolean} true if user prefers reduced motion
 */
export const checkReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
