import { motion } from 'framer-motion';
import { howItWorksSteps } from '../../data/content';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * HowItWorks Section - Clean, professional design
 */
const HowItWorks = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">
            How It Works
          </h2>
          {/* Decorative Wavy Line */}
          <div className="flex justify-center mb-4">
            <svg
              width="100"
              height="10"
              viewBox="0 0 100 10"
              fill="none"
              className="text-primary-900"
            >
              <path
                d="M2 5C2 5 7 2 12 5C17 8 22 5 22 5C22 5 27 2 32 5C37 8 42 5 42 5C42 5 47 2 52 5C57 8 62 5 62 5C62 5 67 2 72 5C77 8 82 5 82 5C82 5 87 2 92 5C97 8 98 5 98 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our proven three-step process ensures you get exactly what you need
            to grow your business
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {howItWorksSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.6,
                delay: prefersReducedMotion ? 0 : index * 0.15,
              }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-neutral-50 rounded-xl p-8 h-full hover:shadow-lg transition-shadow border border-neutral-100">
                {/* Step number badge */}
                <div className="w-14 h-14 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 shadow-md">
                  {step.stepNumber}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon && <step.icon className="w-8 h-8 text-white" />}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary-900 mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
