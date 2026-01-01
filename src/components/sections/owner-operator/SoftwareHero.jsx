import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import useReducedMotion from '../../../hooks/useReducedMotion';
import { ownerOperatorContent } from '../../../data/ownerOperatorContent';
import { scrollToElement } from '../../../utils/smoothScroll';

/**
 * SoftwareHero Component
 * Hero section for Owner-Operator Software landing page
 * Requirements: 2.1-2.7
 */
const SoftwareHero = () => {
  const prefersReducedMotion = useReducedMotion();
  const { hero } = ownerOperatorContent;

  const handlePrimaryCTA = () => {
    scrollToElement('calendar-section');
  };

  const handleSecondaryCTA = () => {
    scrollToElement('solution-section');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: prefersReducedMotion ? 0 : 0.15, 
        delayChildren: prefersReducedMotion ? 0 : 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.01 : 0.7, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden min-h-[80vh] flex items-center">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/90 to-primary-900/90" />
      
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Headline - Requirement 2.1 */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            variants={itemVariants}
          >
            {hero.headline}
          </motion.h1>

          {/* Subheadline - Requirement 2.2 */}
          <motion.p
            className="text-xl sm:text-2xl text-primary-100 mb-8 leading-relaxed max-w-3xl mx-auto"
            variants={itemVariants}
          >
            {hero.subheadline}
          </motion.p>

          {/* Trust line - Requirement 2.3 */}
          <motion.p
            className="text-lg text-primary-200 mb-10 font-medium"
            variants={itemVariants}
          >
            {hero.trustLine}
          </motion.p>

          {/* CTAs - Requirements 2.4, 2.5, 2.6, 2.7 */}
          <motion.div
            className="flex flex-col gap-4 sm:flex-row sm:gap-5 justify-center w-full px-4 sm:px-0"
            variants={itemVariants}
          >
            {/* Primary CTA - Requirement 2.4, 2.6 */}
            <Button
              variant="primary"
              size="lg"
              onClick={handlePrimaryCTA}
              className="w-full sm:w-auto !min-h-[56px] !text-lg !font-bold !px-10 !rounded-xl"
            >
              {hero.primaryCTA}
            </Button>
            
            {/* Secondary CTA - Requirement 2.5, 2.7 */}
            <Button
              variant="secondary"
              size="lg"
              onClick={handleSecondaryCTA}
              className="!bg-white/10 !backdrop-blur-sm !border-2 !border-white/80 !text-white hover:!bg-white hover:!text-primary-900 w-full sm:w-auto !min-h-[56px] !text-lg !font-bold !px-10 !rounded-xl"
            >
              {hero.secondaryCTA}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default SoftwareHero;
