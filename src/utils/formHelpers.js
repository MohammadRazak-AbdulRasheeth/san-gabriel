/**
 * Form Helper Utilities
 * 
 * Shared utilities for form validation, error handling, and accessibility.
 */

/**
 * Get props for field wrapper div to support error highlighting and scroll-to-error
 * @param {string} fieldName - The name of the field
 * @param {object} errors - The errors object
 * @returns {object} Props to spread on the wrapper div
 */
export const getFieldWrapperProps = (fieldName, errors) => ({
  'data-error': errors[fieldName] ? 'true' : 'false'
});

/**
 * Get accessibility props for input elements
 * @param {string} fieldName - The name of the field
 * @param {object} errors - The errors object
 * @returns {object} Props to spread on the input element
 */
export const getInputProps = (fieldName, errors) => ({
  'aria-invalid': errors[fieldName] ? 'true' : 'false',
  'aria-describedby': errors[fieldName] ? `${fieldName}-error` : undefined
});

/**
 * Get CSS classes for input elements with error state
 * @param {string} fieldName - The name of the field
 * @param {object} errors - The errors object
 * @param {string} baseClasses - Optional base classes to include
 * @returns {string} Complete class string
 */
export const getInputClasses = (fieldName, errors, baseClasses = '') => {
  const defaultClasses = `
    w-full px-4 py-3 border rounded-lg 
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent
    focus:shadow-lg focus:scale-[1.01]
    touch-manipulation min-h-[48px]
  `;
  
  const errorClasses = errors[fieldName] 
    ? 'border-red-500 bg-red-50 focus:ring-red-500' 
    : 'border-gray-300 hover:border-gray-400 focus:border-orange-500';
  
  return `${defaultClasses} ${errorClasses} ${baseClasses}`.trim();
};

/**
 * Get CSS classes for label elements with required indicator
 * @param {boolean} required - Whether the field is required
 * @returns {string} Complete class string
 */
export const getLabelClasses = (required = true) => `
  block text-sm font-medium text-gray-700 mb-2
  ${required ? "after:content-['*'] after:text-red-500 after:ml-1" : ''}
`;

/**
 * Render error message for a field
 * @param {string} fieldName - The name of the field
 * @param {object} errors - The errors object
 * @returns {JSX.Element|null} Error message element or null
 */
export const renderErrorMessage = (fieldName, errors) => {
  if (!errors[fieldName]) return null;
  
  return (
    <p id={`${fieldName}-error`} className="mt-2 text-sm text-red-600" role="alert">
      {errors[fieldName]}
    </p>
  );
};

/**
 * Format phone number as user types
 * @param {string} value - The input value
 * @returns {string} Formatted phone number
 */
export const formatPhoneNumber = (value) => {
  // Remove all non-digit characters
  const cleaned = value.replace(/\D/g, '');
  
  // Format as (XXX) XXX-XXXX
  if (cleaned.length <= 3) {
    return cleaned;
  } else if (cleaned.length <= 6) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
  } else {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  }
};

/**
 * Scroll to the first error in the form
 * @param {number} delay - Optional delay in milliseconds before scrolling
 */
export const scrollToFirstError = (delay = 100) => {
  setTimeout(() => {
    const firstErrorElement = document.querySelector('[data-error="true"]');
    if (firstErrorElement) {
      firstErrorElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      // Focus the input if it's focusable
      const input = firstErrorElement.querySelector('input, select, textarea');
      if (input) {
        input.focus();
      }
    }
  }, delay);
};
