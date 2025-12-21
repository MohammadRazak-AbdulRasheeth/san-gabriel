import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { industries } from '../../../data/industries';
import {
  HiOutlineBriefcase,
  HiOutlineBuildingOffice,
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiOutlineCpuChip
} from 'react-icons/hi2';
import AnimatedCounter from '../../ui/AnimatedCounter';
import TiltCard from '../../ui/TiltCard';
import useViewportSize from '../../../hooks/useViewportSize';

/**
 * Icon mapping for industries
 */
const iconMap = {
  'BriefcaseIcon': HiOutlineBriefcase,
  'BuildingOfficeIcon': HiOutlineBuildingOffice,
  'HeartIcon': HiOutlineHeart,
  'ShoppingBagIcon': HiOutlineShoppingBag,
  'CpuChipIcon': HiOutlineCpuChip
};

/**
 * AgencyProofSection Component
 * Display metrics, outcomes, and industries served
 * Link to case studies for validation
 * Requirements: 4.1, 4.2, 4.3, 3.2 (impressive-animations)
 */
const AgencyProofSection = () => {
  const { isMobile } = useViewportSize();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics and outcomes */}
        <motion.div
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring strategic expertise and measurable outcomes to businesses across diverse sectors.
            </p>
          </div>

          {/* Key metrics with animated counters */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                <AnimatedCounter target={15} suffix="+" duration={2000} />
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                <AnimatedCounter target={200} suffix="+" duration={2500} />
              </div>
              <div className="text-gray-600 font-medium">Clients Served</div>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                <AnimatedCounter target={50} prefix="$" suffix="M+" duration={2200} />
              </div>
              <div className="text-gray-600 font-medium">Revenue Generated</div>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                <AnimatedCounter target={95} suffix="%" duration={2000} />
              </div>
              <div className="text-gray-600 font-medium">Client Retention</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Industries served */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our strategic approach adapts to your industry's unique challenges and opportunities.
            </p>
          </div>

          {/* Industry cards with tilt effect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {industries.map((industry) => {
              const IconComponent = iconMap[industry.icon] || HiOutlineBriefcase;
              
              const cardContent = (
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center h-full">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {industry.name}
                  </h4>
                </div>
              );
              
              return (
                <motion.div
                  key={industry.id}
                  variants={itemVariants}
                >
                  {isMobile ? (
                    cardContent
                  ) : (
                    <TiltCard maxTilt={10} scale={1.03}>
                      {cardContent}
                    </TiltCard>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Link to case studies */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-gray-600 mb-6">
              See how we've helped businesses like yours achieve measurable growth.
            </p>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              View Case Studies
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgencyProofSection;
