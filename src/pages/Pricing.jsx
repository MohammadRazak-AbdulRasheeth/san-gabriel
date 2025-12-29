import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import useReducedMotion from '../hooks/useReducedMotion';
import PricingCard from '../components/sections/pricing/PricingCard';
import BundleCard from '../components/sections/pricing/BundleCard';
import ComplianceFooter from '../components/sections/pricing/ComplianceFooter';
import { VEHICLE_PRICING } from '../data/vehiclePricing';
import Button from '../components/ui/Button';

/**
 * Pricing Page
 * Displays vehicle advertising pricing with individual services and bundles
 * Requirements: 2.1 - Display pricing cards with exact amounts
 * Requirements: 2.9 - Include compliance footnotes about materials and safety
 * Requirements: 11.1 - Highlight bundle packages
 */
const Pricing = () => {
  const prefersReducedMotion = useReducedMotion();

  const { individual, bundles } = VEHICLE_PRICING;

  return (
    <div className="pt-20">
      <SEO 
        title="Pricing | Vehicle Advertising Packages | San Gabriel Solutions"
        description="Transparent pricing for vehicle advertising. Rear window ads from $349, side panels from $299. Bundle packages available for realtors and commercial fleets."
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 md:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Transparent Pricing
            </h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Turn your vehicle into a 24/7 moving billboard with our professional advertising solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Individual Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
              Individual Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-900 mt-2 mb-3 sm:mb-4">
              Vehicle Advertising Options
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
              Choose the placement that works best for your advertising needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {individual.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PricingCard
                  id={service.id}
                  name={service.name}
                  price={service.price}
                  priceUnit={service.priceUnit}
                  description={service.description}
                  features={service.features}
                  badge={service.badge}
                  material={service.material}
                  image={service.image}
                  ctaText={service.ctaText}
                  ctaHref={service.ctaHref}
                  highlighted={service.badge === 'best-seller'}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
              Bundle Packages
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-900 mt-2 mb-3 sm:mb-4">
              Save with Our Packages
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
              Get more value with our curated bundle packages designed for different needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {bundles.map((bundle, index) => (
              <motion.div
                key={bundle.id}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <BundleCard
                  id={bundle.id}
                  name={bundle.name}
                  price={bundle.price}
                  targetAudience={bundle.targetAudience}
                  description={bundle.description}
                  includes={bundle.includes}
                  savings={bundle.savings}
                  badge={bundle.badge}
                  image={bundle.image}
                  ctaText={bundle.ctaText}
                  ctaHref={bundle.ctaHref}
                  featured={bundle.id === 'realtor-starter'}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Footer Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComplianceFooter 
            showMaterials={true}
            showRegulations={true}
            showDisclaimers={true}
            variant="light"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Advertise While You Drive?
            </h2>
            <p className="text-blue-200 mb-6 max-w-xl mx-auto">
              Get a custom quote for your vehicle advertising needs. Our team will help you choose the best option.
            </p>
            <Button 
              variant="primary" 
              size="lg" 
              to="/contact" 
              className="bg-accent-500 hover:bg-accent-600"
            >
              Get My Vehicle Wrapped
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
