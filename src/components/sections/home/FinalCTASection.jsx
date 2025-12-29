import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import useReducedMotion from '../../../hooks/useReducedMotion';
import { PRIMARY_CTAS, SECONDARY_CTAS } from '../../../data/ctaConfig';

/**
 * Final CTA Block with Book/Quote
 * Uses approved CTAs from ctaConfig
 * 
 * Requirements: 8.1, 8.2
 */
const FinalCTASection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Whether you want to advertise your business or brand your fleet, 
            we're here to help you succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="primary" 
              size="lg" 
              to={PRIMARY_CTAS.getWrapped.href}
              className="bg-accent-500 hover:bg-accent-600"
            >
              {PRIMARY_CTAS.getWrapped.text}
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              to={SECONDARY_CTAS.viewPricing.href}
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary-900"
            >
              {SECONDARY_CTAS.viewPricing.text}
            </Button>
          </div>

          {/* What happens next */}
          <p className="text-sm text-blue-300">
            We typically respond within 24 hours. No obligation, no pressure.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
