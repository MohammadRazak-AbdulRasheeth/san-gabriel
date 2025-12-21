import { motion } from 'framer-motion';
import ScrollReveal from '../../ui/ScrollReveal';
import { careersData } from '../../../data/careersData';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * CompensationSection Component
 * Displays commission structure prominently with visual hierarchy
 * Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 5.1, 5.2, 6.1, 6.3
 */
const CompensationSection = () => {
  const { compensation } = careersData;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Commission on Revenue
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Performance-based compensation that rewards your success
            </p>
          </div>
        </ScrollReveal>

        {/* Main compensation display */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-5xl mx-auto">
            {/* Prominent commission rate display - Requirement 1.1 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 sm:p-12 mb-8 border-2 border-green-200 shadow-lg">
              <div className="text-center">
                <div className="inline-block mb-4">
                  <div className="flex items-center justify-center gap-2 text-green-700 mb-2">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg font-semibold uppercase tracking-wide">
                      Standard Commission Rate
                    </span>
                  </div>
                </div>
                <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-green-600 mb-4">
                  {compensation.rate}
                </div>
                <p className="text-xl sm:text-2xl text-gray-700 font-medium">
                  Commission on {compensation.basis}
                </p>
              </div>
            </div>

            {/* Key compensation details grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* No cap on earnings - Requirement 1.3 */}
              <motion.div
                className="bg-white rounded-xl p-6 border-2 border-orange-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {compensation.cap}
                    </h3>
                    <p className="text-gray-600">
                      Your earning potential is unlimited. The more you close, the more you earn.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Commission basis - Requirement 1.2 */}
              <motion.div
                className="bg-white rounded-xl p-6 border-2 border-blue-200 shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Earn What You Close
                    </h3>
                    <p className="text-gray-600">
                      Commission calculated on {compensation.basis} you generate.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Flexibility clause - Requirement 1.4 */}
            <ScrollReveal delay={0.3}>
              <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Flexible Commission Structures
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {compensation.flexibility}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Disclaimer - Requirement 1.5 */}
            <ScrollReveal delay={0.4}>
              <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">
                      Important Notice
                    </h4>
                    <p className="text-gray-800 font-medium leading-relaxed">
                      {compensation.disclaimer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CompensationSection;
