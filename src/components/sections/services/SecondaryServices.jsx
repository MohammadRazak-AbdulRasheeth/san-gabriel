import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { services } from '../../../data/services';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * SecondaryServices Component
 * Displays other services below vehicle advertising with de-emphasized styling
 * Requirements: 3.3 - Move other services to secondary section below vehicle advertising
 * Requirements: 3.5 - Services SHALL NOT display with equal prominence
 */

// Filter out vehicle-related services to show only secondary services
const secondaryServices = services.filter(service => 
  !['mobile-advertising'].includes(service.id)
).slice(0, 6); // Limit to 6 secondary services

const SecondaryServiceCard = ({ service, index }) => {
  const prefersReducedMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.4,
        delay: prefersReducedMotion ? 0 : index * 0.05
      }
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg border border-gray-200 p-5 hover:border-gray-300 hover:shadow-md transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {service.name}
      </h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {service.tagline}
      </p>
      <Link
        to={`/services/${service.id}`}
        className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors"
      >
        Learn More
        <HiOutlineArrowRight className="ml-1 w-4 h-4" />
      </Link>
    </motion.div>
  );
};

const SecondaryServices = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.3,
        staggerChildren: prefersReducedMotion ? 0 : 0.05
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.4 }
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header - De-emphasized styling */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-3">
            Additional Services
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Beyond vehicle advertising, we offer a range of complementary services 
            to support your business growth.
          </p>
        </motion.div>

        {/* Services Grid - Smaller cards, less prominent */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {secondaryServices.map((service, index) => (
            <SecondaryServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          className="text-center mt-8"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            to="/services"
            className="inline-flex items-center text-gray-600 hover:text-orange-600 font-medium transition-colors"
          >
            View All Services
            <HiOutlineArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SecondaryServices;
