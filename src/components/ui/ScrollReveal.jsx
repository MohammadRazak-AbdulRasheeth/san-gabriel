import { motion } from 'framer-motion';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * Animation variant presets for professional feel
 * Requirements: 2.1, 2.3 - Enhanced scroll animations
 */
export const animationPresets = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 }
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  },
  fadeRight: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};

/**
 * Custom easing curves for professional animations
 */
export const easings = {
  smooth: [0.25, 0.46, 0.45, 0.94],
  bounce: [0.68, -0.55, 0.265, 1.55],
  snappy: [0.4, 0, 0.2, 1]
};

/**
 * ScrollReveal Component
 * Provides fade-in animations as elements enter viewport
 * Requirements: 2.1, 2.2 - Enhanced scroll animations with stagger support
 * 
 * @param {number} delay - Animation delay in seconds
 * @param {string} direction - Animation direction: 'up', 'down', 'left', 'right', 'scale', 'fade'
 * @param {number} duration - Animation duration in seconds
 * @param {string} easing - Easing type: 'smooth', 'bounce', 'snappy'
 * @param {string} className - Additional CSS classes
 */
const ScrollReveal = ({ 
  children, 
  delay = 0,
  direction = 'up',
  duration = 0.6,
  easing = 'smooth',
  className = ''
}) => {
  const prefersReducedMotion = useReducedMotion();

  // Direction-based initial positions
  const directionVariants = {
    up: { opacity: 0, y: 30 },
    down: { opacity: 0, y: -30 },
    left: { opacity: 0, x: 30 },
    right: { opacity: 0, x: -30 },
    scale: { opacity: 0, scale: 0.9 },
    fade: { opacity: 0 }
  };

  const variants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : directionVariants[direction],
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: easings[easing] || easings.smooth
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * StaggeredScrollReveal Component
 * Provides staggered fade-in animations for lists/grids
 * Requirements: 2.2 - Staggered animation for card grids
 * 
 * @param {number} staggerDelay - Delay between each child animation
 * @param {string} direction - Animation direction for children
 * @param {number} duration - Animation duration for each child
 * @param {string} className - Additional CSS classes
 */
export const StaggeredScrollReveal = ({ 
  children, 
  staggerDelay = 0.1,
  direction = 'up',
  duration = 0.5,
  className = ''
}) => {
  const prefersReducedMotion = useReducedMotion();

  // Direction-based initial positions for children
  const directionVariants = {
    up: { opacity: 0, y: 20 },
    down: { opacity: 0, y: -20 },
    left: { opacity: 0, x: 20 },
    right: { opacity: 0, x: -20 },
    scale: { opacity: 0, scale: 0.9 },
    fade: { opacity: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
        delayChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : directionVariants[direction],
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : duration,
        ease: easings.smooth
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className={className}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

/**
 * Calculate stagger delay for a given index
 * @param {number} index - Item index
 * @param {number} baseDelay - Base delay between items
 * @returns {number} Calculated delay
 */
export const calculateStaggerDelay = (index, baseDelay = 0.1) => {
  return index * baseDelay;
};

export default ScrollReveal;
