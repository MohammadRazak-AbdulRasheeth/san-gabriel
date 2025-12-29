import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { VehicleGallery } from '../components/sections/portfolio';
import Button from '../components/ui/Button';
import SEO from '../components/SEO';
import useReducedMotion from '../hooks/useReducedMotion';

/**
 * Portfolio Page
 * Vehicle Advertising Rebrand:
 * - Integrate VehicleGallery component
 * - Display vehicle advertising visuals prominently
 * 
 * Requirements: 5.1 (vehicle-advertising-rebrand)
 */
const Portfolio = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pt-20">
      <SEO 
        title="Portfolio | Vehicle Advertising Gallery | San Gabriel Solutions"
        description="Browse our portfolio of vehicle advertising work including rear window ads, full wraps, and fleet branding across the Greater Toronto Area."
        keywords="vehicle advertising portfolio, car wrap gallery, fleet branding examples, rear window advertising, Toronto vehicle wraps"
      />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/heroimages/servicesherosectionimage.jpeg')`,
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Work
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              See how we've transformed vehicles into powerful mobile advertising platforms 
              for businesses across the Greater Toronto Area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vehicle Gallery - Requirements: 5.1, 5.2, 5.3, 5.4 */}
      <VehicleGallery />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Portfolio?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let us transform your vehicle into a 24/7 moving billboard. 
              Get a free quote today and see your brand on the road.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md font-medium min-w-[200px]"
                >
                  Get My Vehicle Wrapped
                </Button>
              </Link>
              <Link to="/pricing">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-900 px-8 py-3 rounded-md font-medium min-w-[200px]"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
