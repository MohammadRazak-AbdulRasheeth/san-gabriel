/**
 * SEO Utility Functions
 * Manages meta tags, Open Graph tags, and structured data for SEO optimization
 * Requirements: 19.1, 19.4 (san-gabriel-agency-rebrand)
 */

/**
 * Updates document meta tags dynamically
 * @param {Object} seoData - SEO configuration object
 */
export const updateMetaTags = (seoData) => {
  const {
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    canonicalUrl
  } = seoData;

  // Update document title
  if (title) {
    document.title = title;
  }

  // Helper function to update or create meta tag
  const updateMetaTag = (selector, content, attribute = 'content') => {
    if (!content) return;
    
    let element = document.querySelector(selector);
    if (element) {
      element.setAttribute(attribute, content);
    } else {
      element = document.createElement('meta');
      const selectorParts = selector.match(/\[(.+?)="(.+?)"\]/);
      if (selectorParts) {
        element.setAttribute(selectorParts[1], selectorParts[2]);
        element.setAttribute(attribute, content);
        document.head.appendChild(element);
      }
    }
  };

  // Update standard meta tags
  updateMetaTag('meta[name="description"]', description);
  updateMetaTag('meta[name="keywords"]', keywords);

  // Update Open Graph tags
  updateMetaTag('meta[property="og:title"]', ogTitle || title);
  updateMetaTag('meta[property="og:description"]', ogDescription || description);
  updateMetaTag('meta[property="og:image"]', ogImage);
  updateMetaTag('meta[property="og:url"]', ogUrl || window.location.href);
  updateMetaTag('meta[property="og:type"]', ogType);
  updateMetaTag('meta[property="og:site_name"]', 'San Gabriel Solutions');

  // Update Twitter Card tags
  updateMetaTag('meta[name="twitter:card"]', twitterCard);
  updateMetaTag('meta[name="twitter:title"]', ogTitle || title);
  updateMetaTag('meta[name="twitter:description"]', ogDescription || description);
  updateMetaTag('meta[name="twitter:image"]', ogImage);

  // Update canonical URL
  if (canonicalUrl) {
    let linkElement = document.querySelector('link[rel="canonical"]');
    if (linkElement) {
      linkElement.setAttribute('href', canonicalUrl);
    } else {
      linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'canonical');
      linkElement.setAttribute('href', canonicalUrl);
      document.head.appendChild(linkElement);
    }
  }
};

/**
 * Generates structured data (JSON-LD) for organization
 * @returns {string} JSON-LD structured data
 */
export const getOrganizationStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "San Gabriel Solutions",
    "description": "Strategic marketing and advertising agency providing integrated services for business growth",
    "url": window.location.origin,
    "logo": `${window.location.origin}/logo512.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "Customer Service",
      "areaServed": ["CA", "US"],
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA",
      "addressRegion": "North America"
    },
    "sameAs": []
  };

  return JSON.stringify(structuredData);
};

/**
 * Generates structured data for services
 * @param {Object} service - Service object
 * @returns {string} JSON-LD structured data
 */
export const getServiceStructuredData = (service) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.fullDescription || service.shortDescription,
    "provider": {
      "@type": "Organization",
      "name": "San Gabriel Solutions"
    },
    "serviceType": service.name,
    "areaServed": {
      "@type": "Place",
      "name": "North America"
    }
  };

  if (service.offerings && service.offerings.length > 0) {
    structuredData.hasOfferCatalog = {
      "@type": "OfferCatalog",
      "name": `${service.name} Offerings`,
      "itemListElement": service.offerings.map((offering, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": offering
        },
        "position": index + 1
      }))
    };
  }

  return JSON.stringify(structuredData);
};

/**
 * Injects structured data into the page
 * @param {string} structuredData - JSON-LD structured data
 * @param {string} id - Unique identifier for the script tag
 */
export const injectStructuredData = (structuredData, id = 'structured-data') => {
  // Remove existing structured data with this ID
  const existingScript = document.getElementById(id);
  if (existingScript) {
    existingScript.remove();
  }

  // Create and inject new structured data
  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.textContent = structuredData;
  document.head.appendChild(script);
};

/**
 * SEO configuration for each page
 */
export const pageSEOConfig = {
  home: {
    title: 'San Gabriel Solutions | Strategic Marketing & Advertising Agency',
    description: 'Professional marketing and advertising agency delivering strategic planning, brand development, campaign management, and digital growth services. Partner with us for measurable results.',
    keywords: 'marketing agency, advertising agency, strategic marketing, brand development, digital marketing, campaign management, business consulting, marketing strategy',
    ogImage: '/sangabriel-hero-image.jpg',
    ogType: 'website'
  },
  about: {
    title: 'About Us | San Gabriel Solutions Marketing Agency',
    description: 'Learn about San Gabriel Solutions\' strategy-first approach to marketing and advertising. We deliver ethical, data-driven results through long-term partnerships.',
    keywords: 'about san gabriel solutions, marketing agency philosophy, strategy-first marketing, ethical marketing, data-driven advertising',
    ogImage: '/heroimages/aboutsectionimage.jpeg',
    ogType: 'website'
  },
  services: {
    title: 'Marketing & Advertising Services | San Gabriel Solutions',
    description: 'Integrated marketing and advertising services: strategic planning, brand development, campaign management, digital presence, and business consulting. Aligned with your business goals.',
    keywords: 'marketing services, advertising services, strategic planning, brand development, campaign management, digital marketing, business consulting',
    ogImage: '/heroimages/servicesherosectionimage.jpeg',
    ogType: 'website'
  },
  industries: {
    title: 'Industries We Serve | San Gabriel Solutions',
    description: 'Strategic marketing expertise across professional services, real estate, healthcare, retail, and technology sectors. Proven results across diverse business industries.',
    keywords: 'marketing for professional services, real estate marketing, healthcare marketing, retail marketing, technology marketing, industry expertise',
    ogImage: '/sangabriel-hero-image.jpg',
    ogType: 'website'
  },
  caseStudies: {
    title: 'Case Studies & Success Stories | San Gabriel Solutions',
    description: 'Real-world marketing and advertising success stories with measurable outcomes. See how we help businesses achieve strategic growth and results.',
    keywords: 'marketing case studies, advertising success stories, client results, marketing roi, business growth examples',
    ogImage: '/sangabriel-hero-image.jpg',
    ogType: 'website'
  },
  insights: {
    title: 'Marketing Insights & Perspectives | San Gabriel Solutions',
    description: 'Strategic insights on marketing, advertising, and business growth. Expert perspectives and practical guidance for informed marketing decisions.',
    keywords: 'marketing insights, advertising trends, business growth strategies, marketing blog, industry perspectives',
    ogImage: '/sangabriel-hero-image.jpg',
    ogType: 'website'
  },
  contact: {
    title: 'Contact Us | Schedule a Consultation | San Gabriel Solutions',
    description: 'Ready to transform your marketing? Contact San Gabriel Solutions to schedule a discovery call. Serving clients across Canada and North America.',
    keywords: 'contact marketing agency, schedule consultation, discovery call, marketing inquiry, advertising consultation',
    ogImage: '/sangabriel-hero-image.jpg',
    ogType: 'website'
  }
};

/**
 * Generates service-specific SEO configuration
 * @param {Object} service - Service object
 * @returns {Object} SEO configuration
 */
export const getServiceSEOConfig = (service) => {
  return {
    title: `${service.name} | San Gabriel Solutions`,
    description: service.fullDescription || service.shortDescription,
    keywords: `${service.name.toLowerCase()}, ${service.offerings?.join(', ').toLowerCase() || ''}`,
    ogImage: '/heroimages/servicesherosectionimage.jpeg',
    ogType: 'website'
  };
};
