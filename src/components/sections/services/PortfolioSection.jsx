import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioCategories, getPortfolioByCategory } from '../../../data/portfolio';
import PortfolioItem from './PortfolioItem';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * PortfolioSection Component
 * Visual-first portfolio showcase with category filtering
 * Requirements: 12.1, 12.2
 * Requirements: 14.3, 14.4 - Smooth animations and hover effects with reduced motion support
 */
const PortfolioSection = ({ className = '' }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredItems, setFilteredItems] = useState(getPortfolioByCategory('all'));
  
  // Respect reduced motion preferences (Requirements: 14.3, 14.4)
  const prefersReducedMotion = useReducedMotion();

  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
    setFilteredItems(getPortfolioByCategory(categoryId));
  }, []);
  
  // Animation variants for staggered grid items
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1
      }
    },
    exit: { opacity: 0 }
  };
  
  const filterButtonVariants = {
    hover: prefersReducedMotion ? {} : { scale: 1.05, y: -2 },
    tap: prefersReducedMotion ? {} : { scale: 0.98 }
  };

  return (
    <section 
      id="portfolio-section"
      className={`py-16 md:py-24 bg-neutral-50 ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Our Work in Action
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Visual proof of executed campaigns across windows, trucks, banners, websites, and events.
          </p>
        </motion.div>

        {/* Category Filters - Scrollable on mobile, wrapped on larger screens */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 px-2"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.4, delay: prefersReducedMotion ? 0 : 0.1 }}
          data-testid="portfolio-filters"
        >
          {portfolioCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              variants={filterButtonVariants}
              whileHover="hover"
              whileTap="tap"
              className={`
                px-4 py-2 md:px-6 md:py-3 rounded-full font-medium text-sm md:text-base
                transition-all duration-300 min-h-[44px] min-w-[44px]
                ${activeCategory === category.id
                  ? 'bg-accent-500 text-white shadow-lg'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                }
              `}
              aria-pressed={activeCategory === category.id}
              data-testid={`filter-${category.id}`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid with staggered animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.3 }}
          >
            {filteredItems.map((item, index) => (
              <PortfolioItem
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-neutral-500 text-lg">
              No portfolio items found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
