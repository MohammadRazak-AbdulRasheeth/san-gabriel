import Badge from '../../ui/Badge';
import Button from '../../ui/Button';

/**
 * PricingCard Component
 * Displays individual service pricing with features, badge, and CTA
 * Requirements: 2.1 - Display pricing cards with exact amounts
 * Requirements: 2.8 - Explain what is included (installation, design)
 * Requirements: 4.2 - Specify material for non-rear window placements
 */
const PricingCard = ({
  id,
  name,
  price,
  priceUnit,
  description,
  features = [],
  badge,
  material,
  ctaText = 'Get Started',
  ctaHref = '/contact',
  className = '',
  highlighted = false,
  ...props
}) => {
  // Base card styles with hover effects - mobile-optimized padding
  // Requirements: 9.1, 9.2 - Mobile-first responsive layouts
  const cardStyles = `
    bg-white rounded-xl shadow-lg border-2 p-4 sm:p-6 
    transition-all duration-300 
    hover:shadow-xl hover:transform hover:scale-[1.02] hover:-translate-y-1
    flex flex-col h-full relative overflow-hidden
    ${highlighted ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-gray-200 hover:border-orange-300'}
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

      {/* Header section */}
      <div className="mb-3 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 pr-16 sm:pr-20">
          {name}
        </h3>
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
          {priceUnit && (
            <span className="ml-2 text-gray-500 text-xs sm:text-sm">
              {priceUnit}
            </span>
          )}
        </div>
      </div>

      {/* Features list */}
      <div className="flex-grow mb-4 sm:mb-6">
        <ul className="space-y-2 sm:space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700 text-xs sm:text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Material specification */}
      {material && (
        <div className="mb-4 sm:mb-6 p-2 sm:p-3 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            Material
          </p>
          <p className="text-xs sm:text-sm font-medium text-gray-700">
            {material}
          </p>
        </div>
      )}

      {/* CTA Button */}
      <div className="mt-auto">
        <Button
          variant={highlighted || badge === 'best-seller' ? 'primary' : 'secondary'}
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

export default PricingCard;
