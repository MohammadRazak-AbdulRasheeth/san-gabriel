import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineCalendar, HiOutlineArrowRight } from 'react-icons/hi';
import useReducedMotion from '../../../hooks/useReducedMotion';
import { getCategoryLabel } from '../../../data/insights';

/**
 * InsightCard Component
 * Displays individual insight article preview with title, category, excerpt, and publication date
 * Requirements: 5.3, 5.4 - Display insight card content and navigate to full article
 */
const InsightCard = ({
  id,
  title,
  category,
  excerpt,
  publishedDate,
  imageUrl,
  slug,
  index = 0
}) => {
  const prefersReducedMotion = useReducedMotion();

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.4,
        delay: prefersReducedMotion ? 0 : index * 0.1
      }
    }
  };

  // Category color mapping
  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'marketing-strategy':
        return 'bg-blue-100 text-blue-700';
      case 'industry-trends':
        return 'bg-green-100 text-green-700';
      case 'business-growth':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <motion.article
      className="bg-white rounded-xl border border-neutral-200 shadow-md overflow-hidden 
                 transition-all duration-300 hover:shadow-xl hover:border-accent-300 
                 flex flex-col h-full group"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
      data-testid="insight-card"
    >
      {/* Image Section with lazy loading */}
      <div className="relative h-48 overflow-hidden bg-neutral-100">
        <img
          src={imageUrl || '/insights/default-insight.jpg'}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 
                     group-hover:scale-105"
          onError={(e) => {
            e.target.src = '/sangabriel-hero-image.jpg';
          }}
        />
        {/* Category Badge */}
        <span 
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold 
                     ${getCategoryColor(category)}`}
          data-testid="insight-category"
        >
          {getCategoryLabel(category)}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Publication Date */}
        <div className="flex items-center gap-2 text-neutral-500 text-sm mb-3" data-testid="insight-date">
          <HiOutlineCalendar className="w-4 h-4" />
          <time dateTime={publishedDate}>{formatDate(publishedDate)}</time>
        </div>

        {/* Title */}
        <h3 
          className="text-xl font-bold text-primary-900 mb-3 line-clamp-2 
                     group-hover:text-accent-600 transition-colors"
          data-testid="insight-title"
        >
          {title}
        </h3>

        {/* Excerpt */}
        <p 
          className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow"
          data-testid="insight-excerpt"
        >
          {excerpt}
        </p>

        {/* Read More Link */}
        <Link
          to={`/insights/${slug}`}
          className="inline-flex items-center gap-2 text-accent-600 font-semibold 
                     hover:text-accent-700 transition-colors mt-auto min-h-[44px]"
          aria-label={`Read more about ${title}`}
        >
          Read Article
          <HiOutlineArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
};

export default InsightCard;
