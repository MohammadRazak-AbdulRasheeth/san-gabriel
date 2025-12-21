import { motion, AnimatePresence } from 'framer-motion';
import InsightCard from './InsightCard';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * InsightGrid Component
 * Responsive grid layout for insight cards with filtering
 * Requirements: 5.1, 5.2 - Display grid of insights with category filtering
 */
const InsightGrid = ({
  insights,
  selectedCategory
}) => {
  const prefersReducedMotion = useReducedMotion();

  // Filter insights by category
  const filteredInsights = selectedCategory === 'all'
    ? insights
    : insights.filter(insight => insight.category === selectedCategory);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  };

  if (filteredInsights.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-600 text-lg">
          No insights found in this category.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      data-testid="insight-grid"
    >
      <AnimatePresence mode="popLayout">
        {filteredInsights.map((insight, index) => (
          <motion.div
            key={insight.id}
            layout={!prefersReducedMotion}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.3 }}
          >
            <InsightCard
              id={insight.id}
              title={insight.title}
              category={insight.category}
              excerpt={insight.excerpt}
              publishedDate={insight.publishedDate}
              imageUrl={insight.imageUrl}
              slug={insight.slug}
              index={index}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default InsightGrid;
