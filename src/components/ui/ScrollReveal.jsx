import { motion } from 'framer-motion';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * ScrollReveal Component
 * Provides fade-in animations as elements enter viewport
 * Requirements: Design document - Scroll animations
 */
const ScrollReveal = ({ 
  children, 
  delay = 0,
  direction = 'up', // 'up', 'down', 'left', 'right', 'scale'
  className = ''
}) => {
  const prefersReducedMotion = useReducedMotion();

  // Direction-based initial positions
  const directionVariants = {
    up: { opacity: 0, y: 30 },
    down: { opacity: 0, y: -30 },
    left: { opacity: 0, x: 30 },
    right: { opacity: 0, x: -30 },
    scale: { opacity: 0, scale: 0.9 }
  };

  const variants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : directionVariants[direction],
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.6,
        delay: prefersReducedMotion ? 0 : delay,
        ease: 'easeOut'
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
 * Requirements: Design document - Staggered animation for card grids
 */
export const StaggeredScrollReveal = ({ 
  children, 
  staggerDelay = 0.1,
  className = ''
}) => {
  const prefersReducedMotion = useReducedMotion();

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        ease: 'easeOut'
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

export default ScrollReveal;
