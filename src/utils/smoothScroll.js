/**
 * Smooth scroll utility functions
 * Requirements: Design document - Smooth scroll to sections on navigation
 */

/**
 * Smoothly scrolls to an element by ID
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Optional offset from the top (for fixed headers)
 */
export const scrollToElement = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.scrollTo({
    top: offsetPosition,
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  });
};

/**
 * Smoothly scrolls to the top of the page
 */
export const scrollToTop = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  });
};

/**
 * Handles anchor link clicks for smooth scrolling
 * @param {Event} event - The click event
 * @param {string} targetId - The ID of the target element
 */
export const handleAnchorClick = (event, targetId) => {
  event.preventDefault();
  scrollToElement(targetId);
};
