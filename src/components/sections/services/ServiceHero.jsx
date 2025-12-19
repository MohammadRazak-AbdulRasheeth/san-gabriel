import { motion } from 'framer-motion';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * ServiceHero Component
 * Hero section with background image and centered title
 * Matches the design from sangabrielconsulting.com/our-services/
 */
const ServiceHero = () => {
  const prefersReducedMotion = useReducedMotion();

  const getDuration = (duration) => (prefersReducedMotion ? 0.01 : duration);

  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/11servicesimages/1.REVENUE-GENERATING ADVERTISING SOLUTIONS .png')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary-900/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: getDuration(0.6) }}
        >
          Our Services
        </motion.h1>

        {/* Decorative Wavy Line */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: getDuration(0.6), delay: 0.2 }}
        >
          <svg
            width="150"
            height="12"
            viewBox="0 0 150 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M2 6C2 6 8 2 14 6C20 10 26 6 26 6C26 6 32 2 38 6C44 10 50 6 50 6C50 6 56 2 62 6C68 10 74 6 74 6C74 6 80 2 86 6C92 10 98 6 98 6C98 6 104 2 110 6C116 10 122 6 122 6C122 6 128 2 134 6C140 10 148 6 148 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>

        {/* Optional Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-200 mt-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: getDuration(0.6), delay: 0.3 }}
        >
          Comprehensive solutions to help your business generate revenue and grow
        </motion.p>
      </div>
    </section>
  );
};

export default ServiceHero;
