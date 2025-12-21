import { useRef, useEffect } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * FloatingElement Component
 * Creates a gentle floating animation effect
 * Requirements: 3.1, 3.4 - Floating decorative elements with reduced motion support
 * 
 * @param {number} amplitude - Float distance in pixels (default 15)
 * @param {number} duration - Animation duration in seconds (default 4)
 * @param {number} delay - Animation delay in seconds (default 0)
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Content to float
 */
const FloatingElement = ({
  amplitude = 15,
  duration = 4,
  delay = 0,
  className = '',
  children
}) => {
  const elementRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !elementRef.current) return;

    const element = elementRef.current;
    
    // Apply CSS animation
    element.style.animation = `floating-element ${duration}s ease-in-out ${delay}s infinite`;
    element.style.setProperty('--float-amplitude', `${amplitude}px`);

    return () => {
      element.style.animation = '';
    };
  }, [amplitude, duration, delay, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={elementRef}
      className={`will-change-transform ${className}`}
      style={{
        animation: `floating-element ${duration}s ease-in-out ${delay}s infinite`,
        '--float-amplitude': `${amplitude}px`
      }}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
