import { motion } from 'framer-motion';
import { getServicesByOrder } from '../data/services';
import ServiceHero from '../components/sections/services/ServiceHero';
import ServiceCard from '../components/sections/services/ServiceCard';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

/**
 * Services Page
 * Displays all 10 services in required order with ServiceHero at top
 * Requirements: 1.1, 1.2, 1.3
 */
const Services = () => {
  const services = getServicesByOrder();

  return (
    <div className="pt-20">
      {/* ServiceHero - Traffic → Visibility → Monetization */}
      <ServiceHero />

      {/* Services List - All 10 services in required order */}
      <section id="services-list" className="py-16 md:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              From traffic monetization to digital presence, we provide comprehensive solutions 
              to help your business generate revenue and grow.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="space-y-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                order={service.order}
                name={service.name}
                tagline={service.tagline}
                businessCase={service.businessCase}
                services={service.services}
                advantages={service.advantages}
                pricing={service.pricing}
                ctas={service.ctas}
                portfolioProof={service.portfolioProof}
                isCore={service.isCore}
                isFoundational={service.isFoundational}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Turn Visibility Into Revenue
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Ready to monetize your traffic, advertise your business, or earn with your fleet?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact?service=monetize-location">
                <Button variant="primary" size="lg" className="min-w-[200px]">
                  Monetize My Location
                </Button>
              </Link>
              <Link to="/contact?service=advertise-with-us">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary-900"
                >
                  Advertise My Business
                </Button>
              </Link>
              <Link to="/contact?service=mobile-advertising">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary-900"
                >
                  Earn With My Trucks
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
