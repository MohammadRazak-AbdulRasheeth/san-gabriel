import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { featuredServices } from '../../data/services';
import Button from '../ui/Button';

const FeaturedServices = () => {
  const [activeTab, setActiveTab] = useState(0);

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
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Featured Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our most popular solutions that deliver exceptional results for businesses like yours
          </p>
        </motion.div>

        {/* Service tabs */}
        <div className="bg-neutral-50 rounded-2xl p-8">
          {/* Tab navigation */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {featuredServices.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-accent-500 text-white shadow-lg'
                    : 'bg-white text-neutral-600 hover:bg-neutral-100'
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Service content */}
                <div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-4">
                    {featuredServices[activeTab].name}
                  </h3>
                  
                  <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
                    {featuredServices[activeTab].description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6">
                    <span className="text-sm text-neutral-500 uppercase tracking-wide font-semibold">
                      Starting at
                    </span>
                    <div className="text-3xl font-bold text-accent-500">
                      ${featuredServices[activeTab].pricing.startingAt.toLocaleString()}
                    </div>
                  </div>

                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={scrollToForm}
                  >
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
                    <ul className="space-y-2">
                      {featuredServices[activeTab].deliverables.map((item, index) => (
                        <li key={index} className="flex items-center text-neutral-600">
                          <span className="text-accent-500 mr-3">✓</span>
                          {item}
                        </li>
                      ))}
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
                          className="px-3 py-1 bg-accent-50 text-accent-700 rounded-full text-sm font-medium"
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
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;