import { useState, useRef, useEffect } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * ImageReveal Component
 * Reveals images with blur-to-sharp or slide effects
 * Requirements: 4.4 - Image reveal animations
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Image alt text
 * @param {string} effect - Reveal effect: 'blur', 'slide-up', 'slide-left', 'fade' (default 'blur')
 * @param {number} duration - Animation duration in ms (default 800)
 * @param {string} placeholder - Placeholder color or image
 * @param {string} className - Additional CSS classes
 */
const ImageReveal = ({
  src,
  alt,
  effect = 'blur',
  duration = 800,
  placeholder = '#f3f4f6',
  className = ''
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Get animation styles based on effect
  const getAnimationStyles = () => {
    if (prefersReducedMotion || !isInView) {
      return {
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease'
      };
    }

    const baseTransition = `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;

    switch (effect) {
      case 'blur':
        return {
          filter: isLoaded ? 'blur(0px)' : 'blur(20px)',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'scale(1)' : 'scale(1.1)',
          transition: baseTransition
        };
      case 'slide-up':
        return {
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
          transition: baseTransition
        };
      case 'slide-left':
        return {
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateX(0)' : 'translateX(30px)',
          transition: baseTransition
        };
      case 'fade':
      default:
        return {
          opacity: isLoaded ? 1 : 0,
          transition: baseTransition
        };
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: placeholder }}
    >
      {/* Placeholder shimmer */}
      {!isLoaded && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{ backgroundColor: placeholder }}
          aria-hidden="true"
        />
      )}

      {/* Actual image */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className="w-full h-full object-cover"
          style={getAnimationStyles()}
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span className="text-gray-400 text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default ImageReveal;
