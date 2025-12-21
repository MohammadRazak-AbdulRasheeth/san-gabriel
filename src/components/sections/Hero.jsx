import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * Hero Section - Professional design matching San Gabriel Solutions branding
 * Clean, modern layout with background image and centered content
 */
const Hero = ({ 
  backgroundImage = '/heroimages/homeherosection1.jpeg',
  title = 'Transform Your Business With Expert Solutions',
  subtitle = 'San Gabriel Solutions delivers comprehensive business solutions across advertising, strategy, technology, and branding to help your company thrive.',
  showButtons = true,
  accentText = 'Expert Solutions'
}) => {
  const prefersReducedMotion = useReducedMotion();

  const scrollToServices = () => {
    document
      .getElementById('services-overview')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  const getDuration = (duration) => (prefersReducedMotion ? 0.01 : duration);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary-900/75" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: getDuration(0.6) }}
        >
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title.includes(accentText) ? (
              <>
                {title.split(accentText)[0]}
                <span className="text-accent-500">{accentText}</span>
                {title.split(accentText)[1]}
              </>
            ) : (
              title
            )}
          </h1>

          {/* Decorative Wavy Line */}
          <div className="flex justify-center mb-6">
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
          </div>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: getDuration(0.6), delay: 0.2 }}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          {showButtons && (
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: getDuration(0.6), delay: 0.3 }}
            >
              <Link to="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-md font-medium min-w-[220px]"
                >
                  Schedule a Consultation
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToServices}
                className="border-white text-white hover:bg-white hover:text-primary-900 px-8 py-3 rounded-md font-medium min-w-[220px]"
              >
                View Our Services
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
