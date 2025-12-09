import React from 'react';
import { motion } from 'framer-motion';
import { howItWorksSteps } from '../../data/content';

const HowItWorks = () => {
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
            How It Works
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Our proven three-step process ensures you get exactly what you need to grow your business
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {howItWorksSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              {/* Connection line (hidden on mobile, shown on desktop) */}
              {index < howItWorksSteps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-12 h-0.5 bg-accent-500 transform -translate-x-6">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  </div>
                </div>
              )}

              {/* Step card */}
              <div className="bg-white rounded-xl p-8 shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300">
                {/* Icon */}
                <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.createElement(step.icon, { className: "w-8 h-8 text-white" })}
                </div>

                {/* Step number */}
                <div className="text-accent-500 font-bold text-lg mb-2">
                  STEP {step.stepNumber}
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