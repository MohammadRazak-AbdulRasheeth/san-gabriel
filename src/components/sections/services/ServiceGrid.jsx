import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { getAgencyServicesByOrder } from '../../../data/agencyServices';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * ServiceGrid Component
 * Display all 5 agency services in grid layout maintaining service order (1-5)
 * Requirements: 6.2 (san-gabriel-agency-rebrand)
 */
const ServiceGrid = () => {
  const services = getAgencyServicesByOrder();
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

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          order={service.order}
          name={service.name}
          shortDescription={service.shortDescription}
          offerings={service.offerings}
          cta={service.cta}
        />
      ))}
    </motion.div>
  );
};

export default ServiceGrid;
