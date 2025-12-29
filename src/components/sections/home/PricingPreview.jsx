import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import PricingCard from '../pricing/PricingCard';
import { VEHICLE_PRICING } from '../../../data/vehiclePricing';
import { SECONDARY_CTAS } from '../../../data/ctaConfig';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * PricingPreview Component
 * Shows top 3 pricing options with CTAs on the homepage
 * Links to full pricing page
 * 
 * Requirements: 2.1
 */
const PricingPreview = () => {
  const prefersReducedMotion = useReducedMotion();
  
  // Get top 3 individual pricing options
  const topPricingOptions = VEHICLE_PRICING.individual.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Transparent <span className="text-primary-600">Pricing</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            No hidden fees. Professional design and installation included with every service.
          </p>
        </motion.div>

        {/* Pricing Cards Grid - Mobile optimized */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 md:gap-8 mb-8 sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {topPricingOptions.map((option) => (
            <motion.div key={option.id} variants={itemVariants}>
              <PricingCard
                id={option.id}
                name={option.name}
                price={option.price}
                priceUnit={option.priceUnit}
                description={option.description}
                features={option.features}
                badge={option.badge}
                material={option.material}
                image={option.image}
                ctaText={option.ctaText}
                ctaHref={option.ctaHref}
                highlighted={option.badge === 'best-seller'}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Pricing CTA */}
        <motion.div
          className="text-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            Looking for bundle packages? Check out our complete pricing options.
          </p>
          <Button
            variant="outline"
            size="lg"
            to={SECONDARY_CTAS.viewPricing.href}
            className="w-full sm:w-auto"
          >
            {SECONDARY_CTAS.viewPricing.text}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPreview;
