/**
 * Badge Component
 * Reusable badge for highlighting products and features
 * Requirements: 2.2 - Best Seller badge for Rear Window Ad
 * Requirements: 8.4 - Visual badges where appropriate
 */
const Badge = ({ 
  variant = 'best-seller', 
  children,
  className = '',
  size = 'md',
  ...props 
}) => {
  // Base styles for all badges
  const baseStyles = `
    inline-flex items-center justify-center font-semibold rounded-full
    transition-all duration-300 whitespace-nowrap
  `;

  // Variant styles for different badge types
  const variantStyles = {
    'best-seller': `
      bg-gradient-to-r from-orange-500 to-orange-600 text-white
      shadow-md shadow-orange-500/30
    `,
    'popular': `
      bg-gradient-to-r from-blue-500 to-blue-600 text-white
      shadow-md shadow-blue-500/30
    `,
    'new': `
      bg-gradient-to-r from-green-500 to-green-600 text-white
      shadow-md shadow-green-500/30
    `,
    'savings': `
      bg-gradient-to-r from-emerald-500 to-emerald-600 text-white
      shadow-md shadow-emerald-500/30
    `
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base'
  };

  // Default text for variants if no children provided
  const defaultText = {
    'best-seller': 'Best Seller',
    'popular': 'Popular',
    'new': 'New',
    'savings': 'Save'
  };

  // Combine all styles
  const badgeClasses = `
    ${baseStyles} 
    ${variantStyles[variant] || variantStyles['best-seller']} 
    ${sizeStyles[size]} 
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <span className={badgeClasses} {...props}>
      {children || defaultText[variant]}
    </span>
  );
};

export default Badge;
