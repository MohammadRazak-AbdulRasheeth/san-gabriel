import Badge from '../../ui/Badge';
import Button from '../../ui/Button';

/**
 * PricingCard Component
 * Premium pricing card with professional styling
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
  // Premium card styles with sophisticated hover effects
  const cardStyles = `
    bg-white rounded-2xl overflow-hidden
    transition-all duration-500 ease-out
    flex flex-col h-full relative
    ${highlighted 
      ? 'shadow-2xl shadow-orange-500/20 ring-2 ring-orange-500 scale-[1.02]' 
      : 'shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-gray-300/50 hover:-translate-y-2'
    }
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className={cardStyles} {...props}>
      {/* Badge positioned at top right */}
      {badge && (
        <div className="absolute top-4 right-4 z-20">
          <Badge variant={badge} size="sm" />
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        {/* Header section */}
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            {name}
          </h3>
          {description && (
            <p className="text-gray-500 text-sm leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Price section */}
        <div className="mb-6 pb-6 border-b border-gray-100">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl sm:text-5xl font-bold text-gray-900">
              ${price.toLocaleString()}
            </span>
            {priceUnit && (
              <span className="text-gray-400 text-sm font-medium">
                {priceUnit}
              </span>
            )}
          </div>
        </div>

        {/* Features list */}
        <div className="flex-grow mb-6">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3 h-3 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Material specification */}
        {material && (
          <div className="mb-6 p-4 bg-gray-50 rounded-xl">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">
              Material
            </p>
            <p className="text-sm font-semibold text-gray-700">
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
    </div>
  );
};

export default PricingCard;
