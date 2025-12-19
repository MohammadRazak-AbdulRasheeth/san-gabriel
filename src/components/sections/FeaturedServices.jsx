import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { featuredServices } from '../../data/services';
import Button from '../ui/Button';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * FeaturedServices Section - Clean, professional design
 */
const FeaturedServices = () => {
  const [activeTab, setActiveTab] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
  };

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
            Featured Services
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
            Our most popular solutions that deliver exceptional results for
            businesses like yours
          </p>
        </motion.div>

        {/* Service tabs container */}
        <motion.div
          className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Tab navigation */}
          <div className="flex flex-wrap justify-center mb-10 gap-4">
            {featuredServices.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-primary-900 text-white shadow-lg'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.4 }}
              className="bg-white rounded-xl p-8 shadow-md border border-neutral-100"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Service content */}
                <div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">
                    {featuredServices[activeTab].name}
                  </h3>

                  <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                    {featuredServices[activeTab].description}
                  </p>

                  {/* Pricing display */}
                  <div className="mb-6">
                    <span className="text-sm text-neutral-500 uppercase tracking-wide font-semibold">
                      Starting at
                    </span>
                    <div className="text-3xl font-bold text-accent-500">
                      $
                      {featuredServices[
                        activeTab
                      ].pricing.startingAt.toLocaleString()}
                    </div>
                  </div>

                  <Button variant="primary" size="lg" onClick={scrollToForm}>
                    Get Started
                  </Button>
                </div>

                {/* Service details */}
                <div>
                  {/* Deliverables */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-primary-900 mb-4">
                      What's Included:
                    </h4>
                    <ul className="space-y-3">
                      {featuredServices[activeTab].deliverables.map(
                        (item, index) => (
                          <li
                            key={index}
                            className="flex items-start text-neutral-600"
                          >
                            <HiOutlineCheckCircle className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Best for */}
                  <div>
                    <h4 className="text-lg font-semibold text-primary-900 mb-4">
                      Best For:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredServices[activeTab].bestFor.map((item, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedServices;
