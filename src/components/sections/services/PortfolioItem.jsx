import { useState } from 'react';
import { motion } from 'framer-motion';
import { WEBSITE_ATTRIBUTION } from '../../../data/portfolio';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * PortfolioItem Component
 * Individual portfolio item display with image, title, description, and hover effects
 * Requirements: 12.1, 12.4
 * Requirements: 14.3, 14.4 - Smooth animations and hover effects with reduced motion support
 */
const PortfolioItem = ({ item, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Respect reduced motion preferences (Requirements: 14.3, 14.4)
  const prefersReducedMotion = useReducedMotion();

  const isWebsite = item.type === 'websites';
  const hasLink = item.url && item.url.length > 0;
  
  // Animation variants that respect reduced motion
  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.01 : 0.5, 
        delay: prefersReducedMotion ? 0 : index * 0.1 
      }
    }
  };
  
  const hoverVariants = prefersReducedMotion ? {} : { y: -8, scale: 1.02 };

  // Placeholder image for failed loads or missing images
  const placeholderImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='16' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(item.title)}%3C/text%3E%3C/svg%3E`;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const CardContent = () => (
    <motion.div
      className="group relative bg-white rounded-xl overflow-hidden shadow-md portfolio-hover"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={hoverVariants}
    >
      {/* Image Container with Lazy Loading */}
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        {/* Skeleton loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
        )}
        
        {/* Actual Image with lazy loading */}
        <img
          src={imageError ? placeholderImage : item.imageUrl}
          alt={item.title}
          loading="lazy"
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`
            w-full h-full object-cover portfolio-image
            ${prefersReducedMotion ? '' : 'transition-transform duration-500 group-hover:scale-110'}
            ${imageLoaded ? 'opacity-100' : 'opacity-0'}
          `}
        />

        {/* Hover Overlay with Details */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
          <h3 className="text-white font-bold text-lg md:text-xl mb-1">
            {item.title}
          </h3>
          <p className="text-white/90 text-sm md:text-base mb-2">
            {item.description}
          </p>
          
          {/* Website Attribution (Requirements 8.4, 12.3) */}
          {isWebsite && item.attribution && (
            <p className="text-green-300 text-xs md:text-sm italic">
              {item.attribution}
            </p>
          )}

          {/* Link indicator for websites */}
          {hasLink && (
            <span className="inline-flex items-center gap-1 text-accent-300 text-sm mt-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Visit Site
            </span>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-neutral-700 text-xs font-medium px-3 py-1 rounded-full capitalize">
            {item.type}
          </span>
        </div>

        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Card Footer - Always Visible */}
      <div className="p-4">
        <h3 className="font-semibold text-primary-900 text-base md:text-lg truncate">
          {item.title}
        </h3>
        <p className="text-neutral-600 text-sm truncate">
          {item.description}
        </p>
        
        {/* Website Attribution - Always visible for website items */}
        {isWebsite && (
          <p className="text-green-600 text-xs mt-2 italic">
            {WEBSITE_ATTRIBUTION}
          </p>
        )}
      </div>
    </motion.div>
  );

  // Wrap in link if URL exists
  if (hasLink) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 rounded-xl"
        aria-label={`View ${item.title} - opens in new tab`}
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default PortfolioItem;
