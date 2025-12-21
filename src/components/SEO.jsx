import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { updateMetaTags, injectStructuredData, getOrganizationStructuredData } from '../utils/seo';

/**
 * SEO Component
 * Manages meta tags and structured data for each page
 * Requirements: 19.1, 19.4 (san-gabriel-agency-rebrand)
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.keywords - SEO keywords
 * @param {string} props.ogImage - Open Graph image URL
 * @param {string} props.ogType - Open Graph type (default: 'website')
 * @param {string} props.structuredData - Optional JSON-LD structured data
 * @param {string} props.structuredDataId - ID for structured data script tag
 */
const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  structuredData,
  structuredDataId = 'page-structured-data'
}) => {
  const location = useLocation();

  useEffect(() => {
    // Build full URL for Open Graph
    const baseUrl = window.location.origin;
    const fullUrl = `${baseUrl}${location.pathname}`;
    const fullImageUrl = ogImage ? `${baseUrl}${ogImage}` : null;

    // Update meta tags
    updateMetaTags({
      title,
      description,
      keywords,
      ogTitle: title,
      ogDescription: description,
      ogImage: fullImageUrl,
      ogUrl: fullUrl,
      ogType,
      canonicalUrl: fullUrl
    });

    // Inject organization structured data (always present)
    injectStructuredData(getOrganizationStructuredData(), 'organization-structured-data');

    // Inject page-specific structured data if provided
    if (structuredData) {
      injectStructuredData(structuredData, structuredDataId);
    }

    // Cleanup function to remove page-specific structured data when component unmounts
    return () => {
      const scriptElement = document.getElementById(structuredDataId);
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, [title, description, keywords, ogImage, ogType, location.pathname, structuredData, structuredDataId]);

  // This component doesn't render anything
  return null;
};

export default SEO;
