import Badge from '../../ui/Badge';
import Button from '../../ui/Button';

/**
 * BundleCard Component
 * Displays bundle package pricing with target audience, includes list, and savings
 * Requirements: 11.1 - Highlight bundle packages
 * Requirements: 11.2 - Explain what each bundle includes
 * Requirements: 11.3 - Position Real Estate Starter Pack as ideal for realtors
 */
const BundleCard = ({
  id,
  name,
  price,
  targetAudience,
  description,
  includes = [],
  savings,
  badge,
  ctaText = 'Get Started',
  ctaHref = '/contact',
  className = '',
  featured = false,
  ...props
}) => {
  // Base card styles with enhanced styling for bundles - mobile-optimized padding
  // Requirements: 9.1, 9.2 - Mobile-first responsive layouts
  const cardStyles = `
    bg-white rounded-xl shadow-lg border-2 p-4 sm:p-6 
    transition-all duration-300 
    hover:shadow-xl hover:transform hover:scale-[1.02] hover:-translate-y-1
    flex flex-col h-full relative overflow-hidden
    ${featured ? 'border-orange-500 ring-2 ring-orange-500/20 bg-gradient-to-b from-orange-50/50 to-white' : 'border-gray-200 hover:border-orange-300'}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={cardStyles} {...props}>
      {/* Badge positioned at top right */}
      {badge && (
        <div className="absolute top-4 right-4">
          <Badge variant={badge} size="sm" />
        </div>
      )}

      {/* Savings badge if applicable */}
      {savings && (
        <div className="absolute top-4 left-4">
          <Badge variant="savings" size="sm">
            {savings}
          </Badge>
        </div>
      )}

      {/* Header section */}
      <div className="mb-3 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 pr-16 sm:pr-20">
          {name}
        </h3>
        
        {/* Target audience highlight */}
        {targetAudience && (
          <p className="text-orange-600 font-medium text-xs sm:text-sm mb-1 sm:mb-2">
            {targetAudience}
          </p>
        )}
        
        {description && (
          <p className="text-gray-600 text-xs sm:text-sm">
            {description}
          </p>
        )}
      </div>

      {/* Price section */}
      <div className="mb-4 sm:mb-6">
        <div className="flex items-baseline">
          <span className="text-3xl sm:text-4xl font-bold text-gray-900">
            ${price.toLocaleString()}
          </span>
          <span className="ml-2 text-gray-500 text-xs sm:text-sm">
            complete package
          </span>
        </div>
      </div>

      {/* Includes list */}
      <div className="flex-grow mb-4 sm:mb-6">
        <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3 uppercase tracking-wide">
          Package Includes:
        </p>
        <ul className="space-y-2 sm:space-y-3">
          {includes.map((item, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700 text-xs sm:text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Value proposition for bundles */}
      <div className="mb-4 sm:mb-6 p-2 sm:p-3 bg-orange-50 rounded-lg border border-orange-100">
        <p className="text-xs sm:text-sm text-orange-700 font-medium text-center">
          ✨ All-inclusive pricing • No hidden fees
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-auto">
        <Button
          variant={featured || badge === 'popular' ? 'primary' : 'secondary'}
          size="md"
          to={ctaHref}
          className="w-full"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

export default BundleCard;
