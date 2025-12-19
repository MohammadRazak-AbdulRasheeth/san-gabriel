import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * ServiceSection Component
 * Alternating left/right layout with image and content
 * Matches the design from sangabrielconsulting.com/our-services/
 */

// Map service IDs to their corresponding images
// Using promotional images where they fit best
const serviceImages = {
  'revenue-generating-advertising': '/11servicesimages/1.REVENUE-GENERATING ADVERTISING SOLUTIONS .png',
  'branding-banners-signs': '/requirementimage/White-Label-Conferences.png', // Conference essentials - banners, swag
  'mobile-advertising': '/11servicesimages/3.MOBILE ADVERTISING – TRUCKING FLEETS .png',
  'monetize-location': '/11servicesimages/4.MONETIZE YOUR LOCATION.png',
  'advertise-with-us': '/requirementimage/White-Label-Healthcare.png', // Healthcare/SMB prints
  'social-media-digital': '/11servicesimages/6.SOCIAL MEDIA & DIGITAL ADVERTISING SERVICES.png',
  'website-design': '/11servicesimages/7.WEBSITE DESIGN & DEVELOPMENT.png',
  'events-community': '/requirementimage/Community-Charity-Events.png', // Community events - marathon merchandise
  'incorporation-services': '/11servicesimages/9.INCORPORATION & NOT-FOR-PROFIT SERVICES .png',
  'strategy-technology-ai': '/11servicesimages/10.STRATEGY, TECHNOLOGY & AI.png',
};

const ServiceSection = ({ service, index }) => {
  const prefersReducedMotion = useReducedMotion();
  const isEven = index % 2 === 0;
  const imageUrl = serviceImages[service.id];

  const containerVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.6 }
    }
  };

  return (
    <motion.section
      id={`service-${service.id}`}
      className="py-16 md:py-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}>
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : (isEven ? -30 : 30) }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src={imageUrl}
                alt={service.name}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: prefersReducedMotion ? 0 : (isEven ? 30 : -30) }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, delay: 0.3 }}
          >
            {/* Service Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              {service.name}
            </h2>

            {/* Decorative Wavy Line */}
            <div className="mb-6">
              <svg 
                width="120" 
                height="12" 
                viewBox="0 0 120 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary-900"
              >
                <path 
                  d="M2 6C2 6 7 2 12 6C17 10 22 6 22 6C22 6 27 2 32 6C37 10 42 6 42 6C42 6 47 2 52 6C57 10 62 6 62 6C62 6 67 2 72 6C77 10 82 6 82 6C82 6 87 2 92 6C97 10 102 6 102 6C102 6 107 2 112 6C117 10 118 6 118 6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Description */}
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              {service.fullDescription ? service.fullDescription.split('\n\n')[0] : service.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to={`/contact?service=${service.id}`}>
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-3 rounded-md font-medium"
                >
                  Contact us
                </Button>
              </Link>
              <Link to={`/services/${service.id}`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary-900 text-primary-900 hover:bg-primary-900 hover:text-white px-8 py-3 rounded-md font-medium"
                >
                  Know more
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceSection;
