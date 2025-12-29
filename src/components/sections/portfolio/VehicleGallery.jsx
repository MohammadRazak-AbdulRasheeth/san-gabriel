import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioItem from './PortfolioItem';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * Vehicle advertising portfolio data
 * Requirements: 5.1, 5.2, 5.4 - Display vehicle advertising visuals with variety
 */
const vehiclePortfolioItems = [
  // Real executed work
  {
    id: 'rear-window-realtor-1',
    title: 'Realtor Rear Window Wrap',
    description: 'Professional rear window advertising for real estate agent',
    imageUrl: '/product-image/Realtor Rear Window Wrap.png',
    vehicleType: 'sedan',
    featured: true,
    isMockup: false,
    beforeAfter: false
  },
  {
    id: 'truck-full-wrap-1',
    title: 'Delivery Truck Full Wrap',
    description: 'Complete vinyl wrap for commercial delivery truck',
    imageUrl: '/heroimages/servicesherosectionimage.jpeg',
    vehicleType: 'truck',
    featured: true,
    isMockup: false,
    beforeAfter: false
  },
  {
    id: 'trailer-branding-1',
    title: 'Trailer Side Panel Branding',
    description: 'Large format advertising on commercial trailer',
    imageUrl: '/product-image/truck-backandside-ad.png',
    vehicleType: 'trailer',
    featured: false,
    isMockup: false,
    beforeAfter: false
  },
  // Mockups/Concepts - Requirements 5.3
  {
    id: 'suv-concept-1',
    title: 'SUV Side Panel Design',
    description: 'Concept design for SUV door and side panel advertising',
    imageUrl: '/product-image/truck-side-ad.png',
    vehicleType: 'suv',
    featured: false,
    isMockup: true,
    isConcept: true,
    beforeAfter: false
  },
  {
    id: 'van-sample-1',
    title: 'Van Fleet Branding Sample',
    description: 'Sample design for fleet van branding package',
    imageUrl: '/11servicesimages/3.MOBILE ADVERTISING – TRUCKING FLEETS .png',
    vehicleType: 'van',
    featured: false,
    isMockup: true,
    isConcept: false,
    beforeAfter: false
  },
  // Before/After examples - Requirements 5.2
  {
    id: 'sedan-before-after-1',
    title: 'Sedan Transformation',
    description: 'Before and after rear window advertising installation',
    imageUrl: '/product-image/Sedan Transformation.png',
    vehicleType: 'sedan',
    featured: true,
    isMockup: false,
    beforeAfter: true
  },
  {
    id: 'hood-branding-concept',
    title: 'Hood Branding Design',
    description: 'Concept visualization for vehicle hood advertising',
    imageUrl: '/product-image/Hoodwrap-ad.png',
    vehicleType: 'sedan',
    featured: false,
    isMockup: true,
    isConcept: true,
    beforeAfter: false
  },
  {
    id: 'truck-fleet-sample',
    title: 'Fleet Truck Package',
    description: 'Sample design for coordinated fleet branding',
    imageUrl: '/heroimages/Truck-hero-home.png',
    vehicleType: 'truck',
    featured: true,
    isMockup: true,
    isConcept: false,
    beforeAfter: false
  }
];

/**
 * Vehicle type filter categories
 */
const vehicleCategories = [
  { id: 'all', name: 'All Vehicles' },
  { id: 'sedan', name: 'Sedans & Cars' },
  { id: 'suv', name: 'SUVs' },
  { id: 'truck', name: 'Trucks' },
  { id: 'van', name: 'Vans' },
  { id: 'trailer', name: 'Trailers' }
];

/**
 * VehicleGallery Component
 * Display vehicle advertising visuals with filtering
 * Requirements: 5.1, 5.2, 5.4
 */
const VehicleGallery = ({ className = '' }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const prefersReducedMotion = useReducedMotion();

  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
  }, []);

  const filteredItems = activeCategory === 'all'
    ? vehiclePortfolioItems
    : vehiclePortfolioItems.filter(item => item.vehicleType === activeCategory);

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
      id="vehicle-gallery"
      className={`py-16 md:py-24 bg-neutral-50 ${className}`}
      data-testid="vehicle-gallery"
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
            Vehicle Advertising Gallery
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            See our vehicle advertising work in action. From rear window ads to full truck wraps, 
            we transform vehicles into mobile billboards.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 px-2"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0.01 : 0.4, delay: prefersReducedMotion ? 0 : 0.1 }}
          data-testid="vehicle-filters"
        >
          {vehicleCategories.map((category) => (
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

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.3 }}
            data-testid="vehicle-grid"
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
              No vehicle advertising examples found in this category.
            </p>
          </motion.div>
        )}

        {/* Legend for mockup labels */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: prefersReducedMotion ? 0 : 0.3 }}
        >
          <div className="inline-flex flex-wrap justify-center gap-4 text-sm text-neutral-600">
            <span className="flex items-center gap-2">
              <span className="bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                SAMPLE
              </span>
              Design visualization
            </span>
            <span className="flex items-center gap-2">
              <span className="bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                CONCEPT
              </span>
              Concept artwork
            </span>
            <span className="flex items-center gap-2">
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                Before & After
              </span>
              Transformation showcase
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VehicleGallery;

// Export portfolio data for testing
export { vehiclePortfolioItems, vehicleCategories };
