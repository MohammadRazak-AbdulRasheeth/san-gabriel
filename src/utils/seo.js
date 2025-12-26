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
    "description": "Affordable advertising platform and professional signage provider. Vehicle-based advertising network for cars, vans, and trucks.",
    "url": window.location.origin,
    "logo": `${window.location.origin}/logo512.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-437-344-3563",
      "contactType": "Customer Service",
      "areaServed": ["CA"],
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2967 Dundas Street West",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "addressCountry": "CA"
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
    title: 'San Gabriel Solutions | Affordable Advertising & High-Impact Signage',
    description: 'Affordable advertising from $1/sq.ft/month. Professional signage provider. Vehicle-based advertising network for cars, vans, and trucks. Toronto, Canada.',
    keywords: 'affordable advertising, signage, vehicle advertising, storefront signs, window decals, truck advertising, Toronto advertising',
    ogImage: '/sangabriel-hero-image.jpg',
    ogType: 'website'
  },
  about: {
    title: 'About Us | San Gabriel Solutions',
    description: 'San Gabriel Solutions is a professional signage provider and affordable advertising platform. We help businesses advertise on store signs and vehicles.',
    keywords: 'about san gabriel solutions, signage company, advertising platform, Toronto signage',
    ogImage: '/heroimages/aboutsectionimage.jpeg',
    ogType: 'website'
  },
  services: {
    title: 'Signage & Advertising Services | San Gabriel Solutions',
    description: 'Storefront signs, window decals, vehicle wraps, and advertising services. Design, print, and professional installation. Starting from $1/sq.ft/month.',
    keywords: 'signage services, storefront signs, window decals, vehicle wraps, advertising services, sign installation',
    ogImage: '/heroimages/servicesherosectionimage.jpeg',
    ogType: 'website'
  },
  advertising: {
    title: 'Advertise on Our Signs | San Gabriel Solutions',
    description: 'Affordable advertising from $1/sq.ft/month. Advertise on store signs and vehicles with flexible monthly pricing. Real-world visibility without digital ad fatigue.',
    keywords: 'affordable advertising, sign advertising, vehicle advertising, local advertising, monthly advertising',
    ogImage: '/sangabriel-hero-image.jpg',
    ogType: 'website'
  },
  vehiclePartner: {
    title: 'Vehicle Partner Program | San Gabriel Solutions',
    description: 'Earn money with your vehicle. Turn your daily commute into income with San Gabriel Solutions vehicle advertising program. No installation or removal costs.',
    keywords: 'vehicle advertising, earn with car, driver income, vehicle partner, car advertising program',
    ogImage: '/sangabriel-hero-image.jpg',
    ogType: 'website'
  },
  industries: {
    title: 'Industries We Serve | San Gabriel Solutions',
    description: 'Signage and advertising solutions for retail, restaurants, real estate, and local businesses. Professional design and installation.',
    keywords: 'retail signage, restaurant signs, real estate signs, local business advertising',
    ogImage: '/sangabriel-hero-image.jpg',
    ogType: 'website'
  },
  caseStudies: {
    title: 'Case Studies & Success Stories | San Gabriel Solutions',
    description: 'See how businesses have grown with our affordable advertising and signage solutions. Real results from real clients.',
    keywords: 'advertising case studies, signage success stories, client results',
    ogImage: '/sangabriel-hero-image.jpg',
    ogType: 'website'
  },
  insights: {
    title: 'Insights & Tips | San Gabriel Solutions',
    description: 'Tips and insights on signage, advertising, and growing your business visibility. Expert advice from San Gabriel Solutions.',
    keywords: 'signage tips, advertising insights, business visibility, marketing advice',
    ogImage: '/sangabriel-hero-image.jpg',
    ogType: 'website'
  },
  contact: {
    title: 'Contact Us | San Gabriel Solutions',
    description: 'Get a free quote for signage or advertising. Contact San Gabriel Solutions at 437-344-3563 or visit us at 2967 Dundas Street West, Toronto.',
    keywords: 'contact san gabriel, signage quote, advertising inquiry, Toronto signage company',
    ogImage: '/sangabriel-hero-image.jpg',
    ogType: 'website'
  },
  careers: {
    title: 'Careers - Join Our Team | San Gabriel Solutions',
    description: 'Join San Gabriel Solutions as a sales partner. Earn commission on advertising and signage sales. Flexible, entrepreneurial opportunities.',
    keywords: 'sales jobs, advertising sales, signage sales, commission sales, Toronto jobs',
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
