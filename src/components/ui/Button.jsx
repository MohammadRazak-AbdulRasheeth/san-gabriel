import { Link } from 'react-router-dom';

/**
 * Button Component
 * Premium button with professional hover effects and micro-interactions
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
  // Base styles for all buttons with premium hover effects
  const baseStyles = `
    font-semibold rounded-lg cursor-pointer 
    inline-flex items-center justify-center text-center
    focus:outline-none focus:ring-2 focus:ring-offset-2 touch-manipulation
    relative overflow-hidden isolate
    transition-all duration-300 ease-out
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;

  // Premium variant styles with sophisticated hover effects
  const variantStyles = {
    primary: `
      bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0
      shadow-md shadow-orange-500/25
      focus:ring-orange-500
      ${disabled ? '' : `
        hover:from-orange-600 hover:to-orange-700
        hover:shadow-xl hover:shadow-orange-500/40
        hover:-translate-y-0.5
        active:translate-y-0 active:shadow-md
      `}
    `,
    secondary: `
      bg-white text-gray-800 border-2 border-gray-300
      shadow-sm
      focus:ring-orange-500
      ${disabled ? '' : `
        hover:border-orange-500 hover:text-orange-600
        hover:shadow-lg hover:shadow-orange-500/10
        hover:-translate-y-0.5
        active:translate-y-0 active:shadow-sm
      `}
    `,
    outline: `
      bg-transparent text-primary-900 border-2 border-primary-900
      focus:ring-primary-900
      ${disabled ? '' : `
        hover:bg-primary-900 hover:text-white
        hover:shadow-lg hover:shadow-primary-900/20
        hover:-translate-y-0.5
        active:translate-y-0
      `}
    `,
    ghost: `
      bg-transparent text-gray-700 border-0
      focus:ring-gray-500
      ${disabled ? '' : `
        hover:bg-gray-100 hover:text-gray-900
        active:bg-gray-200
      `}
    `,
    revenue: `
      bg-gradient-to-r from-green-500 to-green-600 text-white border-0
      shadow-md shadow-green-500/25
      focus:ring-green-500
      ${disabled ? '' : `
        hover:from-green-600 hover:to-green-700
        hover:shadow-xl hover:shadow-green-500/40
        hover:-translate-y-0.5
        active:translate-y-0 active:shadow-md
      `}
    `,
    dark: `
      bg-gray-900 text-white border-0
      shadow-md shadow-gray-900/25
      focus:ring-gray-700
      ${disabled ? '' : `
        hover:bg-gray-800
        hover:shadow-xl hover:shadow-gray-900/40
        hover:-translate-y-0.5
        active:translate-y-0 active:shadow-md
      `}
    `
  };

  // Size styles - All sizes ensure minimum 44px touch target for accessibility
  const sizeStyles = {
    sm: 'px-5 py-2.5 text-sm min-h-[44px] gap-2',
    md: 'px-7 py-3 text-base min-h-[48px] gap-2',
    lg: 'px-9 py-4 text-lg min-h-[52px] gap-3'
  };

  // Combine all styles
  const buttonClasses = `
    ${baseStyles} 
    ${variantStyles[variant] || variantStyles.primary} 
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
        style={{ textDecoration: 'none' }}
      >
        {children}
      </Link>
    );
  }

  // If href is provided, render as external link
  if (href) {
    return (
      <a 
        href={href} 
        {...commonProps}
        style={{ textDecoration: 'none' }}
      >
        {children}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button 
      type={type}
      onClick={onClick}
      {...commonProps}
    >
      {children}
    </button>
  );
};

export default Button;
