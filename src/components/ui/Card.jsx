import Button from './Button';

/**
 * Card Component
 * Reusable card with hover effects and micro-interactions
 * Design document - Card hover effects with shadow
 */
const Card = ({ 
  title, 
  description, 
  icon, 
  action,
  className = '',
  variant = 'default',
  ...props 
}) => {
  // Base styles for all cards with enhanced micro-interactions
  const baseStyles = `
    bg-white rounded-lg shadow-md border border-gray-200 p-6 
    transition-all duration-300 
    hover:shadow-xl hover:transform hover:scale-[1.02] hover:-translate-y-1
    active:scale-100 active:translate-y-0 touch-manipulation
    flex flex-col h-full
    relative overflow-hidden
    before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:to-gray-50/50
    before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
  `;

  // Variant styles for different card types with enhanced hover effects
  const variantStyles = {
    default: 'hover:border-orange-300 hover:shadow-orange-100',
    service: 'hover:border-blue-300 hover:bg-blue-50/30 hover:shadow-blue-100',
    feature: 'hover:border-orange-300 hover:bg-orange-50/30 hover:shadow-orange-100'
  };

  // Combine all styles
  const cardClasses = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={cardClasses} {...props}>
      {/* Icon section */}
      {icon && (
        <div className="flex justify-center mb-4 relative z-10">
          {typeof icon === 'string' ? (
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-200">
              <span className="text-orange-600 text-xl font-bold">
                {icon.charAt(0).toUpperCase()}
              </span>
            </div>
          ) : (
            <div className="w-12 h-12 text-orange-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              {icon}
            </div>
          )}
        </div>
      )}

      {/* Content section */}
      <div className="flex-grow relative z-10">
        {/* Title */}
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center transition-colors duration-300">
            {title}
          </h3>
        )}

        {/* Description */}
        {description && (
          <p className="text-gray-600 text-center leading-relaxed mb-4">
            {description}
          </p>
        )}
      </div>

      {/* Action section */}
      {action && (
        <div className="mt-auto pt-4 relative z-10">
          <div className="flex justify-center">
            <Button
              variant={action.variant || 'outline'}
              size={action.size || 'sm'}
              href={action.href}
              onClick={action.onClick}
              className="w-full sm:w-auto"
            >
              {action.label || 'Learn More'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;