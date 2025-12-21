import { motion } from 'framer-motion';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * CategoryFilter Component
 * Filter buttons for insight categories
 * Requirements: 5.1, 5.2 - Display and filter insights by category
 */
const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div 
      className="flex flex-wrap gap-2 md:gap-3 justify-center mb-8"
      role="group"
      aria-label="Filter insights by category"
    >
      {categories.map((category) => {
        const isSelected = selectedCategory === category.id;
        
        return (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`
              px-4 py-2 md:px-6 md:py-3 rounded-full font-medium text-sm md:text-base
              transition-all duration-200 min-h-[44px]
              ${isSelected 
                ? 'bg-accent-600 text-white shadow-md' 
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-900'
              }
            `}
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
            aria-pressed={isSelected}
            data-testid={`category-filter-${category.id}`}
          >
            {category.label}
          </motion.button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
