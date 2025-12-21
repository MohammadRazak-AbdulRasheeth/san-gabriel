import { Link } from 'react-router-dom';

/**
 * Button Component
 * Reusable button with multiple variants and sizes
 * Requirements: 14.4 - Visual feedback through hover effects
 * Design document - Button hover states with subtle scale
 * Requirements: 18.1, 18.3 - CTA navigation integrity
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick, 
  href, 
  to,
  className = '',
  disabled = false,
  type = 'button',
  ...props 
}) => {
  // Base styles for all buttons with enhanced hover effects and micro-interactions
  // touch-manipulation improves touch responsiveness on mobile devices
  const baseStyles = `
    font-semibold rounded-lg transition-all duration-300 cursor-pointer 
    inline-flex items-center justify-center text-center border-2 
    focus:outline-none focus:ring-2 focus:ring-offset-2 touch-manipulation
    relative overflow-hidden
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg active:scale-100 active:translate-y-0'}
  `;

  // Variant styles with enhanced micro-interactions
  const variantStyles = {
    primary: `
      bg-orange-500 hover:bg-orange-600 text-white border-orange-500 
      hover:border-orange-600 focus:ring-orange-500
      ${disabled ? '' : 'hover:shadow-xl shadow-orange-500/50'}
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
      before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700
    `,
    secondary: `
      bg-transparent border-orange-500 text-orange-500 
      hover:bg-orange-500 hover:text-white focus:ring-orange-500
      before:absolute before:inset-0 before:bg-orange-500 before:scale-x-0 before:origin-left
      hover:before:scale-x-100 before:transition-transform before:duration-300 before:-z-10
    `,
    outline: `
      bg-transparent border-blue-900 text-blue-900 
      hover:bg-blue-900 hover:text-white focus:ring-blue-900
      before:absolute before:inset-0 before:bg-blue-900 before:scale-x-0 before:origin-left
      hover:before:scale-x-100 before:transition-transform before:duration-300 before:-z-10
    `,
    revenue: `
      bg-green-600 hover:bg-green-700 text-white border-green-600 
      hover:border-green-700 focus:ring-green-500
      ${disabled ? '' : 'hover:shadow-xl shadow-green-500/50'}
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
      before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700
    `
  };

  // Size styles - All sizes ensure minimum 44px touch target for accessibility
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm min-h-[44px]',
    md: 'px-6 py-3 text-base min-h-[44px]',
    lg: 'px-8 py-4 text-lg min-h-[44px]'
  };

  // Combine all styles
  const buttonClasses = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${className}
  `.replace(/\s+/g, ' ').trim();

  // Common props for both button and link
  const commonProps = {
    className: buttonClasses,
    disabled,
    ...props
  };

  // If 'to' prop is provided, use React Router Link for client-side navigation
  if (to) {
    return (
      <Link 
        to={to} 
        {...commonProps}
        style={{ textDecoration: 'none', position: 'relative', zIndex: 0 }}
      >
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  // If href is provided, render as external link
  if (href) {
    return (
      <a 
        href={href} 
        {...commonProps}
        style={{ textDecoration: 'none', position: 'relative', zIndex: 0 }}
      >
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button 
      type={type}
      onClick={onClick}
      {...commonProps}
      style={{ position: 'relative', zIndex: 0 }}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;