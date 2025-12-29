import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineExternalLink } from 'react-icons/hi';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * PortfolioItem Component for Vehicle Advertising
 * Individual portfolio item with mockup/concept labeling
 * Requirements: 5.3 - Label mockups/concepts as "Sample" or "Concept"
 */
const PortfolioItem = ({ item, index = 0 }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const prefersReducedMotion = useReducedMotion();

  const hasLink = item.url && item.url.length > 0;
  const isMockup = item.isMockup || item.isConcept;
  const mockupLabel = item.isConcept ? 'Concept' : 'Sample';
  
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

  const placeholderImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='16' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(item.title)}%3C/text%3E%3C/svg%3E`;

  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const CardContent = () => (
    <motion.div
      className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={hoverVariants}
      data-testid="portfolio-item"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-neutral-200 animate-pulse" />
        )}
        
        <img
          src={imageError ? placeholderImage : item.imageUrl}
          alt={item.title}
          loading="lazy"
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`
            w-full h-full object-cover
            ${prefersReducedMotion ? '' : 'transition-transform duration-500 group-hover:scale-110'}
            ${imageLoaded ? 'opacity-100' : 'opacity-0'}
          `}
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
          <h3 className="text-white font-bold text-lg md:text-xl mb-1">
            {item.title}
          </h3>
          <p className="text-white/90 text-sm md:text-base mb-2">
            {item.description}
          </p>
          
          {hasLink && (
            <span className="inline-flex items-center gap-1 text-accent-300 text-sm mt-2">
              <HiOutlineExternalLink className="w-4 h-4" />
              View Details
            </span>
          )}
        </div>

        {/* Mockup/Concept Label - Requirements 5.3 */}
        {isMockup && (
          <div className="absolute top-3 left-3" data-testid="mockup-label">
            <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              {mockupLabel}
            </span>
          </div>
        )}

        {/* Vehicle Type Badge */}
        {item.vehicleType && (
          <div className={`absolute top-3 ${isMockup ? 'left-24' : 'left-3'}`}>
            <span className="bg-white/90 backdrop-blur-sm text-neutral-700 text-xs font-medium px-3 py-1 rounded-full capitalize">
              {item.vehicleType}
            </span>
          </div>
        )}

        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Featured
            </span>
          </div>
        )}

        {/* Before/After Indicator */}
        {item.beforeAfter && (
          <div className="absolute bottom-3 left-3">
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              Before & After
            </span>
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="p-4">
        <h3 className="font-semibold text-primary-900 text-base md:text-lg truncate">
          {item.title}
        </h3>
        <p className="text-neutral-600 text-sm truncate">
          {item.description}
        </p>
        
        {/* Mockup disclaimer in footer */}
        {isMockup && (
          <p className="text-amber-600 text-xs mt-2 italic" data-testid="mockup-disclaimer">
            This is a {mockupLabel.toLowerCase()} visualization
          </p>
        )}
      </div>
    </motion.div>
  );

  if (hasLink) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 rounded-xl"
        aria-label={`View ${item.title}${isMockup ? ` (${mockupLabel})` : ''} - opens in new tab`}
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default PortfolioItem;
