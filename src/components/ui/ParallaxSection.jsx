import { useRef, useState, useEffect, useCallback } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * ParallaxSection Component
 * Creates parallax scrolling effect for background images
 * Requirements: 1.1, 1.2 - Parallax backgrounds with configurable speed
 * 
 * @param {string} backgroundImage - URL of background image
 * @param {number} speed - Parallax speed (0-1), default 0.5
 * @param {string} height - Section height (CSS value)
 * @param {boolean} overlay - Show dark overlay for text readability
 * @param {number} overlayOpacity - Overlay opacity (0-1)
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Content to render over parallax
 */
const ParallaxSection = ({
  backgroundImage,
  speed = 0.5,
  height = '500px',
  overlay = true,
  overlayOpacity = 0.5,
  className = '',
  children
}) => {
  const sectionRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);
  const rafRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Clamp speed between 0 and 1
  const clampedSpeed = Math.max(0, Math.min(1, speed));

  const handleScroll = useCallback(() => {
    if (prefersReducedMotion || !sectionRef.current) return;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only calculate when section is in view
      if (rect.bottom > 0 && rect.top < windowHeight) {
        // Calculate offset based on scroll position
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const maxOffset = rect.height * clampedSpeed;
        const offset = (scrollProgress - 0.5) * maxOffset;
        
        setOffsetY(offset);
      }
    });
  }, [clampedSpeed, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setOffsetY(0);
      return;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
      style={{ height }}
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: prefersReducedMotion ? 'none' : `translateY(${offsetY}px) scale(1.1)`,
          top: '-5%',
          height: '110%',
        }}
        aria-hidden="true"
      />

      {/* Optional Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-primary-900"
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;
