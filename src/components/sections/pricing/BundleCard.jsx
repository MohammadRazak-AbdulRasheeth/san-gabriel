import Badge from '../../ui/Badge';
import Button from '../../ui/Button';

/**
 * BundleCard Component
 * Premium bundle card with professional styling
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
  // Premium card styles with sophisticated hover effects
  const cardStyles = `
    bg-white rounded-2xl overflow-hidden
    transition-all duration-500 ease-out
    flex flex-col h-full relative
    ${featured 
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

      {/* Savings badge if applicable */}
      {savings && (
        <div className="absolute top-4 left-4 z-20">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white shadow-lg">
            {savings}
          </span>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        {/* Header section */}
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            {name}
          </h3>
          
          {/* Target audience highlight */}
          {targetAudience && (
            <p className="text-orange-600 font-semibold text-sm mb-2">
              {targetAudience}
            </p>
          )}
          
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
            <span className="text-gray-400 text-sm font-medium">
              complete package
            </span>
          </div>
        </div>

        {/* Includes list */}
        <div className="flex-grow mb-6">
          <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-4">
            Package Includes
          </p>
          <ul className="space-y-3">
            {includes.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-3 h-3 text-orange-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Value proposition */}
        <div className="mb-6 p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100">
          <p className="text-sm text-orange-700 font-medium text-center flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
            </svg>
            All-inclusive pricing • No hidden fees
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
    </div>
  );
};

export default BundleCard;
