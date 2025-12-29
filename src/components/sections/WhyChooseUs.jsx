import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUsPoints } from '../../data/content';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-primary-50">
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
            Why Choose San Gabriel?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We're not just another advertising company. Here's what sets us apart from the competition.
          </p>
        </motion.div>

        {/* Points grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsPoints.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg border border-neutral-100 hover:shadow-xl hover:border-accent-200 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-100 transition-colors duration-300">
                  {React.createElement(point.icon, { className: "w-8 h-8 text-accent-500" })}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary-900 mb-4">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;