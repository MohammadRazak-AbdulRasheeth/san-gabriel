import React from 'react';

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick, 
  href, 
  className = '',
  disabled = false,
  type = 'button',
  ...props 
}) => {
  // Base styles for all buttons
  const baseStyles = `
    font-semibold rounded-lg transition-all duration-200 cursor-pointer 
    inline-flex items-center justify-center text-center border-2 
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'transform hover:scale-105'}
  `;

  // Variant styles
  const variantStyles = {
    primary: `
      bg-orange-500 hover:bg-orange-600 text-white border-orange-500 
      hover:border-orange-600 focus:ring-orange-500
      ${disabled ? '' : 'hover:shadow-lg'}
    `,
    secondary: `
      bg-transparent border-orange-500 text-orange-500 
      hover:bg-orange-500 hover:text-white focus:ring-orange-500
    `,
    outline: `
      bg-transparent border-blue-900 text-blue-900 
      hover:bg-blue-900 hover:text-white focus:ring-blue-900
    `
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
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

  // If href is provided, render as a link
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