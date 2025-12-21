import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAgencyServiceById } from '../data/agencyServices';
import { caseStudies } from '../data/caseStudies';
import { insights } from '../data/insights';
import ServiceDetailContent from '../components/sections/services/ServiceDetailContent';
import useReducedMotion from '../hooks/useReducedMotion';
import SEO from '../components/SEO';
import { getServiceSEOConfig, getServiceStructuredData } from '../utils/seo';

/**
 * ServiceDetail Page
 * Individual agency service page with breadcrumb navigation
 * Integrates ServiceDetailContent component and handles routing for all 5 services
 * Requirements: 6.4 (san-gabriel-agency-rebrand)
 */
const ServiceDetail = () => {
  const { category } = useParams();
  const prefersReducedMotion = useReducedMotion();
  
  const service = getAgencyServiceById(category);
  
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Get related case studies (filter by service ID if available)
  const relatedCaseStudies = caseStudies
    .filter(cs => cs.services?.includes(service.id))
    .slice(0, 3);

  // Get related insights (simple approach - get recent insights)
  const relatedInsights = insights.slice(0, 3);

  // Generate SEO config and structured data for this service
  const seoConfig = getServiceSEOConfig(service);
  const structuredData = getServiceStructuredData(service);

  return (
    <div className="pt-20">
      {/* SEO Meta Tags - Requirements: 19.1, 19.4 */}
      <SEO 
        {...seoConfig} 
        structuredData={structuredData}
        structuredDataId={`service-${service.id}-structured-data`}
      />
      {/* Hero Section with Breadcrumb */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.6 }}
          >
            {/* Breadcrumb Navigation */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-gray-300">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li>/</li>
                <li className="text-white font-medium">{service.name}</li>
              </ol>
            </nav>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {service.name}
            </h1>

            {/* Decorative Wavy Line */}
            <div className="mb-6">
              <svg 
                width="120" 
                height="12" 
                viewBox="0 0 120 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-accent-400"
              >
                <path 
                  d="M2 6C2 6 7 2 12 6C17 10 22 6 22 6C22 6 27 2 32 6C37 10 42 6 42 6C42 6 47 2 52 6C57 10 62 6 62 6C62 6 67 2 72 6C77 10 82 6 82 6C82 6 87 2 92 6C97 10 102 6 102 6C102 6 107 2 112 6C117 10 118 6 118 6" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Short Description */}
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
              {service.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Content */}
      <ServiceDetailContent 
        service={service}
        relatedCaseStudies={relatedCaseStudies}
        relatedInsights={relatedInsights}
      />
    </div>
  );
};

export default ServiceDetail;
