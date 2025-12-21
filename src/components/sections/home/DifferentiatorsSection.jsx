import { motion } from 'framer-motion';
import { differentiators } from '../../../data/differentiators';
import { Icons } from '../../ui/ServiceIcons';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * DifferentiatorsSection - "Why San Gabriel Solutions" section
 * Displays 4 key differentiators: strategic, professional, trustworthy, results-focused
 * Requirements: 2.1, 2.2
 */
const DifferentiatorsSection = () => {
  const prefersReducedMotion = useReducedMotion();

  // Map icon names to icon components
  const getIconComponent = (iconName) => {
    return Icons[iconName] || Icons.Star;
  };

  return (
    <section className="py-20 bg-white" id="differentiators">
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
            Why San Gabriel Solutions
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
            We deliver strategic marketing solutions that drive measurable results for growing businesses.
          </p>
        </motion.div>

        {/* Differentiators grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((diff, index) => {
            const IconComponent = getIconComponent(diff.icon);
            return (
              <motion.div
                key={diff.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: prefersReducedMotion ? 0.01 : 0.6,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-neutral-50 rounded-xl p-8 shadow-md h-full hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-accent-300">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-100 transition-colors">
                    <IconComponent className="w-8 h-8 text-accent-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-primary-900 mb-4 group-hover:text-accent-600 transition-colors">
                    {diff.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
