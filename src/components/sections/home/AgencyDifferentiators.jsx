import React from 'react';
import { motion } from 'framer-motion';
import { differentiators } from '../../../data/differentiators';
import {
  HiOutlineLightBulb,
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlinePuzzle
} from 'react-icons/hi';

/**
 * Icon mapping for differentiators
 */
const iconMap = {
  'LightBulbIcon': HiOutlineLightBulb,
  'ChartBarIcon': HiOutlineChartBar,
  'UsersIcon': HiOutlineUsers,
  'PuzzlePieceIcon': HiOutlinePuzzle
};

/**
 * AgencyDifferentiators Component
 * Display 3-4 key differentiators in grid
 * Professional, confident presentation
 * Requirements: 3.1, 3.2
 */
const AgencyDifferentiators = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  // Sort differentiators by order
  const sortedDifferentiators = [...differentiators].sort((a, b) => a.order - b.order);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why San Gabriel Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring strategic thinking, ethical execution, and long-term partnership 
            to every engagement. Your success is our measure of excellence.
          </p>
        </div>

        {/* Differentiators grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {sortedDifferentiators.map((differentiator) => {
            const IconComponent = iconMap[differentiator.icon] || HiOutlineLightBulb;
            
            return (
              <motion.div
                key={differentiator.id}
                variants={itemVariants}
                className="text-center group"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-10 h-10" />
                  </div>
                </div>

                {/* Headline */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {differentiator.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {differentiator.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AgencyDifferentiators;
