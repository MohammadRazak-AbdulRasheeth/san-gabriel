import { motion } from 'framer-motion';
import { industries } from '../../../data/industries';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * Industry Icons
 * Custom icons for each industry sector
 */
const BriefcaseIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const BuildingOfficeIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const HeartIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const ShoppingBagIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const CpuChipIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

const iconMap = {
  BriefcaseIcon,
  BuildingOfficeIcon,
  HeartIcon,
  ShoppingBagIcon,
  CpuChipIcon
};

/**
 * IndustryCard Component
 * Individual industry card with icon, name, and description
 */
const IndustryCard = ({ industry }) => {
  const prefersReducedMotion = useReducedMotion();
  const IconComponent = iconMap[industry.icon] || BriefcaseIcon;

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
      variants={cardVariants}
    >
      <div className="flex flex-col items-start space-y-4">
        {/* Icon */}
        <div className="text-blue-600">
          <IconComponent className="w-12 h-12" />
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-gray-900">
          {industry.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {industry.description}
        </p>
      </div>
    </motion.div>
  );
};

/**
 * IndustryGrid Component
 * Display industry cards in grid layout
 * Demonstrates breadth without limiting
 * Requirements: 12.1, 12.2 (san-gabriel-agency-rebrand)
 */
const IndustryGrid = () => {
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
      {industries.map((industry) => (
        <IndustryCard key={industry.id} industry={industry} />
      ))}
    </motion.div>
  );
};

export default IndustryGrid;
