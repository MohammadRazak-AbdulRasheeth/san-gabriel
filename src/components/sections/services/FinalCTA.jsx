import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * FinalCTA Component
 * Bottom of page CTA section with headline and three action buttons
 * Requirements: 13.1, 13.2, 13.3
 * Requirements: 14.3, 14.4 - Smooth animations and hover effects with reduced motion support
 * 
 * Feature: san-gabriel-website, Property 6: Final CTA Section Presence
 * Validates: Requirements 13.1, 13.2
 */

// CTA configuration for the three required buttons
export const finalCTAConfig = {
  headline: 'Turn Visibility Into Revenue',
  description: 'Ready to monetize your traffic, advertise your business, or earn with your fleet?',
  ctas: [
    {
      label: 'Monetize My Location',
      servicePreselect: 'monetize-location',
      primary: true
    },
    {
      label: 'Advertise My Business',
      servicePreselect: 'advertise-with-us',
      primary: false
    },
    {
      label: 'Earn With My Trucks',
      servicePreselect: 'mobile-advertising',
      primary: false
    }
  ]
};

const FinalCTA = () => {
  // Respect reduced motion preferences (Requirements: 14.3, 14.4)
  const prefersReducedMotion = useReducedMotion();
  
  // Animation variants that respect reduced motion
  const containerVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.01 : 0.6,
        staggerChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.4 }
    }
  };
  
  return (
    <section 
      className="py-16 md:py-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white"
      data-testid="final-cta-section"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Headline - Requirements 13.1 */}
          <h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            data-testid="final-cta-headline"
          >
            {finalCTAConfig.headline}
          </h2>
          
          <p className="text-xl text-gray-200 mb-8">
            {finalCTAConfig.description}
          </p>
          
          {/* Three CTA Buttons - Requirements 13.2, 13.3 - Stack vertically on mobile */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0"
            data-testid="final-cta-buttons"
          >
            {finalCTAConfig.ctas.map((cta, index) => (
              <motion.div
                key={cta.servicePreselect}
                variants={buttonVariants}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, y: -2 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              >
                <Link 
                  to={`/contact?service=${cta.servicePreselect}`}
                  data-testid={`final-cta-button-${index}`}
                  className="w-full sm:w-auto block"
                >
                  <Button 
                    variant={cta.primary ? 'primary' : 'outline'}
                    size="lg" 
                    className={`w-full sm:w-auto sm:min-w-[200px] min-h-[44px] cta-hover-effect ${
                      !cta.primary ? 'border-white text-white hover:bg-white hover:text-primary-900' : ''
                    }`}
                  >
                    {cta.label}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
