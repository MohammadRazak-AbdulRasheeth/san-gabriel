import { motion } from 'framer-motion';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';
import { VEHICLE_PRICING } from '../../../data/vehiclePricing';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * VehicleServices Component
 * Displays vehicle advertising services as the primary/dominant section
 * Requirements: 3.1 - Display Vehicle Advertising as first and dominant section
 * Requirements: 3.2 - Clearly explain: Rear Window Ads, Side/Door Ads, Hood Branding, Truck & Trailer
 * Requirements: 3.4 - Include pricing for each option
 */

// Additional vehicle service for Truck & Trailer (not in individual pricing)
const truckTrailerService = {
  id: 'truck-trailer',
  name: 'Truck & Trailer Advertising',
  price: 3299,
  badge: null,
  description: 'Full visibility solution for commercial vehicles and trailers',
  features: [
    'Full truck wrap',
    'Trailer panel advertising',
    'Fleet branding options',
    'Professional design included'
  ],
  material: '3M IJ35 Blockout Vinyl',
  ctaText: 'Get My Vehicle Wrapped',
  ctaHref: '/contact'
};

// Combine individual services with truck/trailer
const vehicleServices = [
  ...VEHICLE_PRICING.individual,
  truckTrailerService
];

const VehicleServiceCard = ({ service, index }) => {
  const prefersReducedMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        delay: prefersReducedMotion ? 0 : index * 0.1
      }
    }
  };

  const isHighlighted = service.badge === 'best-seller';

  return (
    <motion.div
      className={`
        bg-white rounded-xl shadow-lg border-2 p-6 
        transition-all duration-300 
        hover:shadow-xl hover:transform hover:scale-[1.02] hover:-translate-y-1
        flex flex-col h-full relative overflow-hidden
        ${isHighlighted ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-gray-200 hover:border-orange-300'}
      `}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Badge */}
      {service.badge && (
        <div className="absolute top-4 right-4">
          <Badge variant={service.badge} size="sm" />
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2 pr-20">
          {service.name}
        </h3>
        <p className="text-gray-600 text-sm">
          {service.description}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-gray-900">
            ${service.price.toLocaleString()}
          </span>
          {service.priceUnit && (
            <span className="ml-2 text-gray-500 text-sm">
              {service.priceUnit}
            </span>
          )}
        </div>
      </div>

      {/* Features */}
      <div className="flex-grow mb-6">
        <ul className="space-y-3">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <HiOutlineCheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Material */}
      {service.material && (
        <div className="mb-6 p-3 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
            Material
          </p>
          <p className="text-sm font-medium text-gray-700">
            {service.material}
          </p>
        </div>
      )}

      {/* CTA */}
      <div className="mt-auto">
        <Button
          variant={isHighlighted ? 'primary' : 'secondary'}
          size="md"
          to={service.ctaHref}
          className="w-full"
        >
          {service.ctaText}
        </Button>
      </div>
    </motion.div>
  );
};

const VehicleServices = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.3,
        staggerChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.5 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
            Our Primary Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Vehicle Advertising Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Turn your vehicle into a 24/7 moving billboard. Professional installation, 
            premium materials, and Ontario safety compliant.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {vehicleServices.map((service, index) => (
            <VehicleServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            Not sure which option is right for you?
          </p>
          <Button
            variant="primary"
            size="lg"
            to="/pricing"
          >
            View All Pricing & Bundles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default VehicleServices;
