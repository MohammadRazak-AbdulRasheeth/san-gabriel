import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiOutlineArrowLeft, HiOutlineCalendar, HiOutlineClock, HiOutlineUser } from 'react-icons/hi';
import { getInsightBySlug, getRelatedInsights, getCategoryLabel } from '../data/insights';
import InsightCard from '../components/sections/insights/InsightCard';
import useReducedMotion from '../hooks/useReducedMotion';
import SEO from '../components/SEO';

/**
 * InsightDetail Page
 * Full article view for individual insights with improved typography
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

  // Estimate reading time
  const getReadingTime = (content) => {
    if (!content) return '5 min';
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  // Category color mapping
  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'marketing-strategy':
        return 'bg-blue-600 text-white';
      case 'industry-trends':
        return 'bg-emerald-600 text-white';
      case 'business-growth':
        return 'bg-purple-600 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

  // Parse and render content with proper formatting
  const renderContent = (content) => {
    if (!content) return null;
    
    // Split content into sections
    const sections = content.split(/(?=## )/);
    
    return sections.map((section, index) => {
      // Check if section starts with heading
      const headingMatch = section.match(/^## (.+)\n/);
      
      if (headingMatch) {
        const heading = headingMatch[1];
        const body = section.replace(/^## .+\n/, '');
        
        return (
          <div key={index} className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6 
                          border-l-4 border-accent-500 pl-4">
              {heading}
            </h2>
            {renderParagraphs(body)}
          </div>
        );
      }
      
      return <div key={index}>{renderParagraphs(section)}</div>;
    });
  };

  // Render paragraphs with proper styling
  const renderParagraphs = (text) => {
    if (!text) return null;
    
    const paragraphs = text.split('\n\n').filter(p => p.trim());
    
    return paragraphs.map((para, idx) => {
      // Check for numbered lists
      if (/^\d+\.\s/.test(para.trim())) {
        const items = para.split(/\n/).filter(item => item.trim());
        return (
          <ol key={idx} className="list-none space-y-4 mb-8">
            {items.map((item, itemIdx) => {
              const match = item.match(/^(\d+)\.\s*\*\*(.+?)\*\*\s*(.*)$/);
              if (match) {
                return (
                  <li key={itemIdx} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-accent-500 text-white 
                                   rounded-full flex items-center justify-center font-bold text-sm">
                      {match[1]}
                    </span>
                    <div>
                      <span className="font-semibold text-primary-900">{match[2]}</span>
                      <span className="text-neutral-700"> {match[3]}</span>
                    </div>
                  </li>
                );
              }
              return (
                <li key={itemIdx} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-accent-500 text-white 
                                 rounded-full flex items-center justify-center font-bold text-sm">
                    {itemIdx + 1}
                  </span>
                  <span className="text-neutral-700">{item.replace(/^\d+\.\s*/, '')}</span>
                </li>
              );
            })}
          </ol>
        );
      }
      
      // Regular paragraph with bold text support
      const formattedPara = para
        .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-primary-900">$1</strong>');
      
      return (
        <p 
          key={idx} 
          className="text-lg leading-relaxed text-neutral-700 mb-6"
          dangerouslySetInnerHTML={{ __html: formattedPara }}
        />
      );
    });
  };

  // Handle 404 - insight not found
  if (!insight) {
    return (
      <div className="min-h-screen bg-neutral-50 pt-20 flex items-center justify-center">
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
    <div className="min-h-screen bg-white pt-20">
      {/* SEO Meta Tags */}
      {insight && (
        <SEO
          title={`${insight.title} | San Gabriel Solutions Insights`}
          description={insight.excerpt}
          keywords={`${getCategoryLabel(insight.category)}, marketing insights, ${insight.title}`}
          ogImage={insight.imageUrl || '/sangabriel-hero-image.jpg'}
          ogType="article"
        />
      )}
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}
          />
        </div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          {/* Back Navigation */}
          <button
            onClick={() => navigate('/insights')}
            className="inline-flex items-center gap-2 text-primary-200 hover:text-white 
                       transition-colors mb-8 min-h-[44px] group"
          >
            <HiOutlineArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Insights</span>
          </button>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            {/* Category Badge */}
            <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${getCategoryColor(insight.category)}`}>
              {getCategoryLabel(insight.category)}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight tracking-tight">
              {insight.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-primary-200">
              <div className="flex items-center gap-2">
                <HiOutlineUser className="w-5 h-5" />
                <span className="font-medium">{insight.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineCalendar className="w-5 h-5" />
                <time dateTime={insight.publishedDate}>
                  {formatDate(insight.publishedDate)}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineClock className="w-5 h-5" />
                <span>{getReadingTime(insight.content)}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <motion.article
        className="py-12 md:py-20"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Featured Image */}
            <div className="mb-12 -mt-16 relative z-10">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={insight.imageUrl || '/sangabriel-hero-image.jpg'}
                  alt={insight.title}
                  className="w-full h-64 md:h-[400px] object-cover"
                  onError={(e) => {
                    e.target.src = '/sangabriel-hero-image.jpg';
                  }}
                />
              </div>
            </div>

            {/* Excerpt / Lead paragraph */}
            <div className="mb-12 pb-8 border-b border-neutral-200">
              <p className="text-xl md:text-2xl text-neutral-800 leading-relaxed font-medium">
                {insight.excerpt}
              </p>
            </div>

            {/* Main Content */}
            <div className="article-content">
              {renderContent(insight.content)}
            </div>

            {/* Tags / Share section */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 text-sm">Category:</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(insight.category)}`}>
                    {getCategoryLabel(insight.category)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.article>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Apply These Insights?
          </h2>
          <p className="text-primary-200 mb-8 max-w-2xl mx-auto text-lg">
            Let's discuss how these strategies can drive growth for your business.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent-500 text-white px-8 py-4 rounded-lg 
                       font-semibold hover:bg-accent-600 transition-colors min-h-[44px]
                       shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      {relatedInsights.length > 0 && (
        <section className="py-16 md:py-20 bg-neutral-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-10 text-center">
              Related Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
