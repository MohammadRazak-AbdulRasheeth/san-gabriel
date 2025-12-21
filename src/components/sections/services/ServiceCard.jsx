import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineCheckCircle, HiOutlineArrowRight } from 'react-icons/hi';
import Button from '../../ui/Button';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * ServiceCard Component
 * Display agency service with name, description, offerings list, and CTA
 * Clean card design with hover effects that links to Service_Detail_Page
 * Requirements: 6.3 (san-gabriel-agency-rebrand)
 */
const ServiceCard = ({
  id,
  order,
  name,
  shortDescription,
  offerings,
  cta,
  heroImage
}) => {
  // Respect reduced motion preferences
  const prefersReducedMotion = useReducedMotion();
  
  // Animation variants that respect reduced motion
  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.01 : 0.5, 
        delay: prefersReducedMotion ? 0 : order * 0.1 
      }
    }
  };

  return (
    <motion.div
      id={`service-${id}`}
      className="rounded-xl border-2 border-neutral-200 bg-white overflow-hidden shadow-lg hover:shadow-xl hover:border-primary-500 transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
    >
      {/* Service Image */}
      {heroImage && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={heroImage}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}
      
      <div className="p-6 md:p-8">
        {/* Service Name */}
        <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">
          {name}
        </h3>

      {/* Short Description */}
      <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
        {shortDescription}
      </p>

      {/* Offerings List */}
      {offerings && offerings.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-primary-800 mb-3">What We Offer</h4>
          <ul className="space-y-2">
            {offerings.map((offering, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-neutral-700"
              >
                <HiOutlineCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{offering}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

        {/* CTA Button - Links to Service Detail Page */}
        <div className="flex gap-3 mt-6">
          <Link
            to={`/services/${id}`}
            className="w-full"
          >
            <Button
              variant="primary"
              size="md"
              className="w-full min-h-[44px] bg-primary-900 hover:bg-primary-800 text-white"
            >
              <span className="flex items-center justify-center gap-2">
                {cta} <HiOutlineArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
