import { useState, useCallback } from 'react';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * RippleButton Component
 * Button with ripple effect on click
 * Requirements: 4.3 - Ripple effects on interactive elements
 * 
 * @param {string} color - Ripple color (default 'rgba(255,255,255,0.4)')
 * @param {number} duration - Ripple duration in ms (default 600)
 * @param {string} className - Additional CSS classes
 * @param {function} onClick - Click handler
 * @param {React.ReactNode} children - Button content
 */
const RippleButton = ({
  color = 'rgba(255,255,255,0.4)',
  duration = 600,
  className = '',
  onClick,
  children,
  ...props
}) => {
  const [ripples, setRipples] = useState([]);
  const prefersReducedMotion = useReducedMotion();

  const createRipple = useCallback((e) => {
    if (prefersReducedMotion) {
      onClick?.(e);
      return;
    }

    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    
    // Calculate ripple position
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate ripple size (should cover entire button)
    const size = Math.max(rect.width, rect.height) * 2;
    
    const newRipple = {
      id: Date.now(),
      x,
      y,
      size
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, duration);

    onClick?.(e);
  }, [onClick, duration, prefersReducedMotion]);

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={createRipple}
      {...props}
    >
      {children}
      
      {/* Ripple effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none animate-ripple"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: color,
            animation: `ripple-expand ${duration}ms ease-out forwards`
          }}
          aria-hidden="true"
        />
      ))}
    </button>
  );
};

export default RippleButton;
