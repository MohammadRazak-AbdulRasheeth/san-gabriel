import { motion } from 'framer-motion';
import ScrollReveal from '../../ui/ScrollReveal';
import { careersData } from '../../../data/careersData';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * CompensationSection Component
 * Displays commission structure prominently with visual hierarchy
 * Commission-only positioning - no fixed income or guaranteed pay language
 * Requirements: 7.2 - No salary language, focus on commission structure
 */
const CompensationSection = () => {
  const { compensation } = careersData;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          {/* Section header - Commission-focused */}
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Commission-Only Opportunity
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Your Earnings, Your Control
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Earn commissions on every vehicle advertising sale you close. 
              The more you sell, the more you earn.
            </p>
          </div>
        </ScrollReveal>

        {/* Main compensation display */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-5xl mx-auto">
            {/* Prominent commission rate display */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 sm:p-12 mb-8 border-2 border-green-200 shadow-lg">
              <div className="text-center">
                <div className="inline-block mb-4">
                  <div className="flex items-center justify-center gap-2 text-green-700 mb-2">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg font-semibold uppercase tracking-wide">
                      Commission Rate
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
              {/* No cap on earnings */}
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
                      Your earning potential is unlimited. The more you close, the more you earn in commissions.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Commission basis */}
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

            {/* Earning examples - Commission focus */}
            <ScrollReveal delay={0.3}>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-200">
                <h4 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Commission Examples
                </h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-500 mb-1">Rear Window Ad ($349)</p>
                    <p className="text-xl font-bold text-green-600">$35-$52</p>
                    <p className="text-xs text-gray-500">per sale</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-500 mb-1">Professional Package ($999)</p>
                    <p className="text-xl font-bold text-green-600">$100-$150</p>
                    <p className="text-xs text-gray-500">per sale</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <p className="text-sm text-gray-500 mb-1">Truck Package ($3,299)</p>
                    <p className="text-xl font-bold text-green-600">$330-$495</p>
                    <p className="text-xs text-gray-500">per sale</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Flexibility clause */}
            <ScrollReveal delay={0.4}>
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

            {/* Commission-only notice - Clear and prominent */}
            <ScrollReveal delay={0.5}>
              <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">
                      Commission-Only Position
                    </h4>
                    <p className="text-gray-800 font-medium leading-relaxed">
                      This is a commission-only sales opportunity. Your income is directly tied to your sales performance. 
                      There is no guaranteed income — you earn based on the revenue you generate.
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
