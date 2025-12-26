import { motion } from 'framer-motion';
import { howItWorks } from '../../../data/homeOfferings';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * HomeHowItWorks Component
 * 3-step process section
 */
const HomeHowItWorks = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-neutral-600">
            Getting started is simple
          </p>
        </div>

        {/* Steps */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {howItWorks.map((step, index) => (
            <motion.div
              key={step.step}
              variants={itemVariants}
              className="relative text-center"
            >
              {/* Connector Line (desktop only) */}
              {index < howItWorks.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-primary-200" />
              )}

              {/* Step Number */}
              <div className="relative z-10 w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-bold text-white">{step.step}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary-900 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHowItWorks;
