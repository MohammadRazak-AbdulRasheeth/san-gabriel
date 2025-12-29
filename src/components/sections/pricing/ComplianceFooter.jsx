import { COMPLIANCE } from '../../../data/compliance';

/**
 * ComplianceFooter Component
 * Displays material specifications, safety regulations, and disclaimers
 * Requirements: 2.9 - Include compliance footnotes about materials and safety
 * Requirements: 4.1 - Specify Perforated Vinyl for rear windows
 * Requirements: 4.2 - Specify 3M IJ35 Blockout Vinyl for non-rear window placements
 * Requirements: 4.3 - State no solid vinyl on rear windows
 * Requirements: 4.4 - Reference Ontario visibility and safety regulations
 */
const ComplianceFooter = ({
  showMaterials = true,
  showRegulations = true,
  showDisclaimers = true,
  className = '',
  variant = 'default',
  ...props
}) => {
  const { materials, regulations, disclaimers } = COMPLIANCE;

  // Variant styles
  const variantStyles = {
    default: 'bg-gray-50 border-gray-200',
    dark: 'bg-gray-900 border-gray-700 text-gray-300',
    light: 'bg-white border-gray-100'
  };

  const textStyles = {
    default: {
      heading: 'text-gray-700',
      text: 'text-gray-600',
      icon: 'text-gray-400'
    },
    dark: {
      heading: 'text-gray-200',
      text: 'text-gray-400',
      icon: 'text-gray-500'
    },
    light: {
      heading: 'text-gray-700',
      text: 'text-gray-500',
      icon: 'text-gray-400'
    }
  };

  const styles = textStyles[variant] || textStyles.default;

  return (
    <div
      className={`rounded-xl border p-6 mt-8 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      <div className="max-w-4xl mx-auto">
        {/* Materials Section */}
        {showMaterials && materials && materials.length > 0 && (
          <div className="mb-6">
            <h4 className={`text-sm font-semibold uppercase tracking-wide mb-3 ${styles.heading}`}>
              Material Specifications
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {materials.map((material) => (
                <div
                  key={material.id}
                  className="flex items-start space-x-3"
                >
                  <svg
                    className={`w-5 h-5 mt-0.5 flex-shrink-0 ${styles.icon}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <p className={`text-sm font-medium ${styles.heading}`}>
                      {material.placement}
                    </p>
                    <p className={`text-sm ${styles.text}`}>
                      {material.material}
                    </p>
                    <p className={`text-xs mt-1 ${styles.text}`}>
                      {material.safetyNote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regulations Section */}
        {showRegulations && regulations && regulations.length > 0 && (
          <div className="mb-6">
            <h4 className={`text-sm font-semibold uppercase tracking-wide mb-3 ${styles.heading}`}>
              Safety & Compliance
            </h4>
            <ul className="space-y-2">
              {regulations.map((regulation) => (
                <li
                  key={regulation.id}
                  className="flex items-start space-x-2"
                >
                  <svg
                    className={`w-4 h-4 mt-0.5 flex-shrink-0 text-green-500`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={`text-sm ${styles.text}`}>
                    {regulation.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Disclaimers Section */}
        {showDisclaimers && disclaimers && disclaimers.length > 0 && (
          <div className="pt-4 border-t border-gray-200">
            <p className={`text-xs ${styles.text} leading-relaxed`}>
              <span className="font-medium">Please Note: </span>
              {disclaimers.map((disclaimer, index) => (
                <span key={disclaimer.id}>
                  {disclaimer.text}
                  {index < disclaimers.length - 1 ? ' • ' : ''}
                </span>
              ))}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplianceFooter;
