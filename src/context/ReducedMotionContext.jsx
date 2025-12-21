import { createContext, useContext } from 'react';
import useReducedMotion from '../hooks/useReducedMotion';

/**
 * ReducedMotionContext
 * Provides reduced motion preference throughout the app
 * Requirements: Design document - Respect prefers-reduced-motion
 */
const ReducedMotionContext = createContext(false);

export const ReducedMotionProvider = ({ children }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <ReducedMotionContext.Provider value={prefersReducedMotion}>
      {children}
    </ReducedMotionContext.Provider>
  );
};

/**
 * Hook to access reduced motion preference
 * @returns {boolean} true if user prefers reduced motion
 */
export const useReducedMotionContext = () => {
  return useContext(ReducedMotionContext);
};

export default ReducedMotionContext;
