import { useState, useRef, useCallback } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * TiltCard Component
 * Creates 3D tilt effect based on mouse position
 * Requirements: 4.2 - Interactive tilt effects on cards
 * 
 * @param {number} maxTilt - Maximum tilt angle in degrees (default 15)
 * @param {number} scale - Scale on hover (default 1.02)
 * @param {boolean} glare - Show glare effect (default false)
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Card content
 */
const TiltCard = ({
  maxTilt = 15,
  scale = 1.02,
  glare = false,
  className = '',
  children
}) => {
  const [transform, setTransform] = useState('');
  const [glareStyle, setGlareStyle] = useState({});
  const cardRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = useCallback((e) => {
    if (prefersReducedMotion || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Calculate tilt angles (inverted for natural feel)
    const tiltX = (mouseY / (rect.height / 2)) * -maxTilt;
    const tiltY = (mouseX / (rect.width / 2)) * maxTilt;
    
    setTransform(`perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`);

    // Calculate glare position
    if (glare) {
      const glareX = ((e.clientX - rect.left) / rect.width) * 100;
      const glareY = ((e.clientY - rect.top) / rect.height) * 100;
      setGlareStyle({
        background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
        opacity: 1
      });
    }
  }, [maxTilt, scale, glare, prefersReducedMotion]);

  const handleMouseLeave = useCallback(() => {
    setTransform('');
    setGlareStyle({ opacity: 0 });
  }, []);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={cardRef}
      className={`relative transition-transform duration-200 ease-out ${className}`}
      style={{ 
        transform: transform || 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      
      {/* Glare overlay */}
      {glare && (
        <div
          className="absolute inset-0 pointer-events-none rounded-inherit transition-opacity duration-300"
          style={glareStyle}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

/**
 * Calculate tilt angles from mouse position for testing
 * @param {number} mouseX - Mouse X relative to center
 * @param {number} mouseY - Mouse Y relative to center
 * @param {number} halfWidth - Half of card width
 * @param {number} halfHeight - Half of card height
 * @param {number} maxTilt - Maximum tilt angle
 * @returns {object} { tiltX, tiltY }
 */
export const calculateTilt = (mouseX, mouseY, halfWidth, halfHeight, maxTilt) => {
  const tiltX = (mouseY / halfHeight) * -maxTilt;
  const tiltY = (mouseX / halfWidth) * maxTilt;
  return { tiltX, tiltY };
};

export default TiltCard;
