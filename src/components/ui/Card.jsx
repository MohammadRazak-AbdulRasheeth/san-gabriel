import React from 'react';
import Button from './Button';

const Card = ({ 
  title, 
  description, 
  icon, 
  action,
  className = '',
  variant = 'default',
  ...props 
}) => {
  // Base styles for all cards
  const baseStyles = `
    bg-white rounded-lg shadow-md border border-gray-200 p-6 
    transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105
    flex flex-col h-full
  `;

  // Variant styles for different card types
  const variantStyles = {
    default: 'hover:border-orange-200',
    service: 'hover:border-blue-200 hover:bg-blue-50/30',
    feature: 'hover:border-orange-200 hover:bg-orange-50/30'
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
        <div className="flex justify-center mb-4">
          {typeof icon === 'string' ? (
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <span className="text-orange-600 text-xl font-bold">
                {icon.charAt(0).toUpperCase()}
              </span>
            </div>
          ) : (
            <div className="w-12 h-12 text-orange-600 flex items-center justify-center">
              {icon}
            </div>
          )}
        </div>
      )}

      {/* Content section */}
      <div className="flex-grow">
        {/* Title */}
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
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
        <div className="mt-auto pt-4">
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