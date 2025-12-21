import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineArrowLeft, HiOutlineCalendar } from 'react-icons/hi';
import { getInsightBySlug, getRelatedInsights, getCategoryLabel } from '../data/insights';
import InsightCard from '../components/sections/insights/InsightCard';
import useReducedMotion from '../hooks/useReducedMotion';

/**
 * InsightDetail Page
 * Full article view for individual insights
 * Requirements: 5.4 - Navigate to full article view
 */
const InsightDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  
  const insight = getInsightBySlug(slug);
  const relatedInsights = insight ? getRelatedInsights(slug, 3) : [];

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.01 : 0.5 }
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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

  // Handle 404 - insight not found
  if (!insight) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">
            Article Not Found
          </h1>
          <p className="text-neutral-600 mb-8">
            The insight you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 bg-accent-600 text-white px-6 py-3 
                       rounded-lg font-semibold hover:bg-accent-700 transition-colors min-h-[44px]"
          >
            <HiOutlineArrowLeft className="w-5 h-5" />
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Back Navigation */}
          <button
            onClick={() => navigate('/insights')}
            className="inline-flex items-center gap-2 text-primary-200 hover:text-white 
                       transition-colors mb-8 min-h-[44px]"
          >
            <HiOutlineArrowLeft className="w-5 h-5" />
            Back to Insights
          </button>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Category Badge */}
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${getCategoryColor(insight.category)}`}>
              {getCategoryLabel(insight.category)}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {insight.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-primary-200">
              <div className="flex items-center gap-2">
                <HiOutlineCalendar className="w-5 h-5" />
                <time dateTime={insight.publishedDate}>
                  {formatDate(insight.publishedDate)}
                </time>
              </div>
              <span>•</span>
              <span>{insight.author}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <motion.article
        className="py-12 md:py-16"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image */}
            <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
              <img
                src={insight.imageUrl || '/sangabriel-hero-image.jpg'}
                alt={insight.title}
                className="w-full h-64 md:h-96 object-cover"
                onError={(e) => {
                  e.target.src = '/sangabriel-hero-image.jpg';
                }}
              />
            </div>

            {/* Excerpt */}
            <p className="text-xl text-neutral-700 leading-relaxed mb-8 font-medium">
              {insight.excerpt}
            </p>

            {/* Main Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-primary-900 
                         prose-p:text-neutral-700 prose-a:text-accent-600 
                         prose-strong:text-primary-800 prose-ul:text-neutral-700
                         prose-li:marker:text-accent-500"
              dangerouslySetInnerHTML={{ 
                __html: insight.content
                  .replace(/## /g, '<h2 class="text-2xl font-bold mt-8 mb-4">')
                  .replace(/\n\n/g, '</p><p class="mb-4">')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\n(\d+)\. /g, '</p><p class="mb-2 pl-4">$1. ')
              }}
            />
          </div>
        </div>
      </motion.article>

      {/* CTA Section */}
      <section className="bg-primary-50 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
            Want to Learn More?
          </h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss how these insights can be applied to your business.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent-600 text-white px-8 py-4 rounded-lg 
                       font-semibold hover:bg-accent-700 transition-colors min-h-[44px]"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      {relatedInsights.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 text-center">
              Related Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedInsights.map((related, index) => (
                <InsightCard
                  key={related.id}
                  id={related.id}
                  title={related.title}
                  category={related.category}
                  excerpt={related.excerpt}
                  publishedDate={related.publishedDate}
                  imageUrl={related.imageUrl}
                  slug={related.slug}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default InsightDetail;
