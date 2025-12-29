// San Gabriel Solutions - Portfolio Data
// Visual-first portfolio showcasing real executions

/**
 * Portfolio item categories
 */
export const portfolioCategories = [
  { id: 'all', name: 'All Work' },
  { id: 'windows', name: 'Window Advertising' },
  { id: 'trucks', name: 'Truck & Fleet Advertising' },
  { id: 'banners', name: 'Banners & Signs' },
  { id: 'websites', name: 'Websites' },
  { id: 'events', name: 'Events' }
];

/**
 * Portfolio items - visual showcase of executed work
 * Each item includes: id, type, title, description, imageUrl, url (optional), featured, relatedServices
 */
export const portfolioItems = [
  // Website Portfolio - MUST include kavin10oc.com and luxuryautocollision.ca
  {
    id: 'kavin10oc-website',
    type: 'websites',
    title: 'kavin10oc.com',
    description: 'Professional website for Kavin 10 OC',
    imageUrl: '/heroimages/servicesherosectionimage.jpeg',
    url: 'https://kavin10oc.com',
    featured: true,
    relatedServices: ['website-design'],
    attribution: 'Websites built and launched by San Gabriel Solutions'
  },
  {
    id: 'luxuryautocollision-website',
    type: 'websites',
    title: 'luxuryautocollision.ca',
    description: 'Auto collision repair business website',
    imageUrl: '/heroimages/Truck-hero-home.png',
    url: 'https://luxuryautocollision.ca',
    featured: true,
    relatedServices: ['website-design'],
    attribution: 'Websites built and launched by San Gabriel Solutions'
  },

  // Window Advertising Portfolio
  {
    id: 'storefront-window-1',
    type: 'windows',
    title: 'Storefront Window Display',
    description: 'High-traffic storefront window advertising placement',
    imageUrl: '/product-image/rear-window-ad.webp',
    url: null,
    featured: true,
    relatedServices: ['monetize-location', 'advertise-with-us']
  },
  {
    id: 'storefront-window-2',
    type: 'windows',
    title: 'Retail Window Campaign',
    description: 'Multi-window advertising campaign for local business',
    imageUrl: '/product-image/rear-window-ad.webp',
    url: null,
    featured: false,
    relatedServices: ['monetize-location', 'advertise-with-us']
  },

  // Truck & Fleet Advertising Portfolio
  {
    id: 'truck-wrap-1',
    type: 'trucks',
    title: 'Full Truck Wrap',
    description: 'Complete vinyl wrap on delivery truck',
    imageUrl: '/heroimages/servicesherosectionimage.jpeg',
    url: null,
    featured: true,
    relatedServices: ['mobile-advertising']
  },
  {
    id: 'trailer-ad-1',
    type: 'trucks',
    title: 'Trailer Side Panel',
    description: 'Large format trailer advertising panel',
    imageUrl: '/product-image/truck-backandside-ad.png',
    url: null,
    featured: false,
    relatedServices: ['mobile-advertising']
  },
  {
    id: 'fleet-branding',
    type: 'trucks',
    title: 'Fleet Branding Campaign',
    description: 'Coordinated branding across multiple vehicles',
    imageUrl: '/11servicesimages/3.MOBILE ADVERTISING – TRUCKING FLEETS .png',
    url: null,
    featured: true,
    relatedServices: ['mobile-advertising', 'branding-banners-signs']
  },

  // Banners & Signs Portfolio
  {
    id: 'rollup-banner-1',
    type: 'banners',
    title: 'Roll-up Banner Set',
    description: 'Professional roll-up banners for trade show',
    imageUrl: '/product-image/truck-side-ad.png',
    url: null,
    featured: true,
    relatedServices: ['branding-banners-signs']
  },
  {
    id: 'step-repeat-1',
    type: 'banners',
    title: 'Step and Repeat Backdrop',
    description: 'Event backdrop with sponsor logos',
    imageUrl: '/product-image/Hoodwrap-ad.png',
    url: null,
    featured: false,
    relatedServices: ['branding-banners-signs', 'events-community']
  },
  {
    id: 'storefront-signage',
    type: 'banners',
    title: 'Storefront Signage',
    description: 'Custom storefront graphics and signage',
    imageUrl: '/heroimages/Truck-hero-home.png',
    url: null,
    featured: true,
    relatedServices: ['branding-banners-signs']
  },

  // Events Portfolio
  {
    id: 'community-event-1',
    type: 'events',
    title: 'Community Event Branding',
    description: 'Complete event branding package with banners and signage',
    imageUrl: '/requirementimage/Community-Charity-Events.png',
    url: null,
    featured: true,
    relatedServices: ['events-community', 'branding-banners-signs']
  },
  {
    id: 'school-spirit-event',
    type: 'events',
    title: 'School Spirit & Homecoming',
    description: 'High quality print and apparel for school events - banners, t-shirts, caps, and promotional materials',
    imageUrl: '/requirementimage/White_Label_Homecoming.png',
    url: null,
    featured: true,
    relatedServices: ['events-community', 'branding-banners-signs']
  },
  {
    id: 'conference-essentials',
    type: 'banners',
    title: 'Conference Essentials',
    description: 'Transform every handshake into a potential deal with conference prints and swags - roll-up banners, tote bags, caps, and branded merchandise',
    imageUrl: '/requirementimage/White-Label-Conferences.png',
    url: null,
    featured: true,
    relatedServices: ['branding-banners-signs', 'events-community']
  },
  {
    id: 'healthcare-prints',
    type: 'banners',
    title: 'Healthcare & Professional Prints',
    description: 'High-impact materials for healthcare and professional services - signage, brochures, roll-up banners, and business cards',
    imageUrl: '/requirementimage/White-Label-Healthcare.png',
    url: null,
    featured: true,
    relatedServices: ['advertise-with-us', 'branding-banners-signs']
  },
  {
    id: 'sponsor-wall-1',
    type: 'events',
    title: 'Sponsor Wall Display',
    description: 'Large format sponsor recognition wall',
    imageUrl: '/product-image/truck-side-ad.png',
    url: null,
    featured: false,
    relatedServices: ['events-community']
  }
];

/**
 * Website portfolio attribution text (required by Requirements 8.4, 12.3)
 */
export const WEBSITE_ATTRIBUTION = 'Websites built and launched by San Gabriel Solutions';

/**
 * Get portfolio items by category
 * @param {string} category - Category ID (windows, trucks, banners, websites, events, or 'all')
 * @returns {Array} Filtered portfolio items
 */
export const getPortfolioByCategory = (category) => {
  if (category === 'all') {
    return portfolioItems;
  }
  return portfolioItems.filter(item => item.type === category);
};

/**
 * Get featured portfolio items
 * @returns {Array} Featured portfolio items
 */
export const getFeaturedPortfolio = () => {
  return portfolioItems.filter(item => item.featured);
};

/**
 * Get portfolio items by related service
 * @param {string} serviceId - Service ID
 * @returns {Array} Portfolio items related to the service
 */
export const getPortfolioByService = (serviceId) => {
  return portfolioItems.filter(item => 
    item.relatedServices && item.relatedServices.includes(serviceId)
  );
};

/**
 * Get website portfolio items (must include kavin10oc.com and luxuryautocollision.ca)
 * @returns {Array} Website portfolio items with attribution
 */
export const getWebsitePortfolio = () => {
  return portfolioItems.filter(item => item.type === 'websites');
};

/**
 * Verify required websites are in portfolio
 * @returns {boolean} True if both required websites are present
 */
export const hasRequiredWebsites = () => {
  const websites = getWebsitePortfolio();
  const hasKavin = websites.some(w => w.title === 'kavin10oc.com');
  const hasLuxury = websites.some(w => w.title === 'luxuryautocollision.ca');
  return hasKavin && hasLuxury;
};
