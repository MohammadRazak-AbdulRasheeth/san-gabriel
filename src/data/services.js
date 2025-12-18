// San Gabriel Solutions - Services Data
// Core business model: Traffic → Visibility → Monetization

/**
 * All 10 services in required order as per master instructions
 * Each service includes: id, order, name, tagline, businessCase, services, advantages, pricing, ctas
 */
export const services = [
  {
    id: 'revenue-generating-advertising',
    order: 1,
    name: 'Revenue-Generating Advertising Solutions',
    tagline: 'Turn existing traffic into new income streams',
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Digital advertising costs are rising',
        'Small businesses and nonprofits are priced out',
        'Physical traffic still exists but is under-monetized',
        'Vulnerable businesses need additional revenue, not just marketing spend'
      ]
    },
    services: [
      'Identify high-traffic locations and routes',
      'Deploy physical and mobile advertising assets',
      'Match advertisers to locations, windows, trucks, and routes',
      'Manage design, pricing, placement, and monetization'
    ],
    advantages: [],
    pricing: null,
    ctas: [
      { label: 'Turn My Traffic Into Revenue', action: 'lead-form', servicePreselect: 'revenue-generating-advertising', primary: true },
      { label: 'Explore Advertising Options', action: 'scroll-services', primary: false }
    ],
    portfolioItems: [],
    isCore: true
  },
  {
    id: 'branding-banners-signs',
    order: 2,
    name: 'Branding, Banners & Signs',
    tagline: 'Banners, signs, and visual branding are not decoration — they are revenue-producing infrastructure',
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Visibility drives action',
        'Poor design wastes exposure',
        'Physical advertising outperforms digital locally',
        'Events, storefronts, and fleets need fast execution'
      ]
    },
    services: [
      'Roll-up banners',
      'Vinyl & mesh banners',
      'Step-and-repeat backdrops',
      'Storefront & window graphics',
      'Lawn signs & coroplast',
      'Posters & large-format signage',
      'Vehicle decals & wraps'
    ],
    advantages: [
      'Designed for distance & motion',
      'High-contrast layouts',
      'QR codes & calls-to-action',
      'Print-ready accuracy'
    ],
    pricing: null,
    ctas: [
      { label: 'Request Banner & Sign Quote', action: 'lead-form', servicePreselect: 'branding-banners-signs', primary: true }
    ],
    portfolioItems: ['banners'],
    isCore: false
  },
  {
    id: 'mobile-advertising',
    order: 3,
    name: 'Mobile Advertising – Trucking Fleets',
    tagline: 'Short-haul and LTL trucks are moving billboards operating daily on high-traffic routes',
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Trucking margins are thin',
        'Visibility already exists but is unused',
        'Advertising offsets fuel, insurance, and operating costs'
      ]
    },
    services: [
      'Vinyl wraps (full or partial)',
      'Trailer-side panels',
      'Rear-door ads',
      'Magnetic signage',
      'QR-enabled ads'
    ],
    advantages: [],
    pricing: {
      amount: '$300–$500',
      unit: 'per truck or trailer',
      note: 'depending on size, route, and duration'
    },
    ctas: [
      { label: 'Earn With My Trucks', action: 'lead-form', servicePreselect: 'mobile-advertising', primary: true }
    ],
    portfolioItems: ['trucks'],
    isCore: false
  },
  {
    id: 'monetize-location',
    order: 4,
    name: 'Monetize Your Location',
    tagline: 'Businesses and property owners can earn advertising income from windows, storefronts, and high-traffic frontage they already have',
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Rising rents and operating costs',
        'Idle visibility = lost revenue',
        'Advertising creates passive income'
      ]
    },
    services: [
      'Window advertising placement',
      'Storefront visibility monetization',
      'High-traffic frontage advertising',
      'Passive income generation'
    ],
    advantages: [],
    pricing: {
      amount: '$200',
      unit: 'per window',
      note: 'location, traffic, and duration dependent'
    },
    ctas: [
      { label: 'Monetize My Location', action: 'lead-form', servicePreselect: 'monetize-location', primary: true }
    ],
    portfolioItems: ['windows'],
    isCore: false
  },
  {
    id: 'advertise-with-us',
    order: 5,
    name: 'Advertise With Us',
    tagline: 'We provide affordable, physical and digital advertising for organizations priced out of traditional media',
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Traditional media is expensive',
        'Small businesses need affordable options',
        'Local reach matters for community businesses',
        'Physical advertising delivers measurable results'
      ]
    },
    services: [
      'Window advertising',
      'Storefront signage',
      'Event banners',
      'Truck & trailer advertising',
      'Campaign-based placements'
    ],
    advantages: [],
    pricing: null,
    ctas: [
      { label: 'Advertise My Business', action: 'lead-form', servicePreselect: 'advertise-with-us', primary: true }
    ],
    portfolioItems: [],
    isCore: false
  },
  {
    id: 'social-media-digital',
    order: 6,
    name: 'Social Media & Digital Advertising',
    tagline: 'We help businesses extend physical visibility into digital reach, supporting campaigns with social media and online presence',
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Physical ads work best when supported digitally',
        'Businesses need consistent messaging',
        'Social proof builds trust'
      ]
    },
    services: [
      'Social media account setup',
      'Content creation & posting',
      'Campaign support for physical ads',
      'Community & local engagement',
      'Analytics & reporting'
    ],
    advantages: [],
    pricing: {
      amount: 'Custom',
      unit: 'monthly packages',
      note: 'Campaign-based pricing available. Exact pricing shown after consultation.'
    },
    ctas: [
      { label: 'Grow My Online Presence', action: 'lead-form', servicePreselect: 'social-media-digital', primary: true }
    ],
    portfolioItems: [],
    isCore: false
  },
  {
    id: 'website-design',
    order: 7,
    name: 'Website Design & Development',
    tagline: 'We build conversion-focused websites that support advertising, credibility, and lead generation',
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Advertising without a strong website leaks leads',
        'Businesses need credibility to convert traffic',
        'Websites are core infrastructure, not optional'
      ]
    },
    services: [
      'Business websites',
      'Landing pages for campaigns',
      'Mobile-optimized builds',
      'SEO-ready structure'
    ],
    advantages: [],
    pricing: null,
    ctas: [
      { label: 'Build My Website', action: 'lead-form', servicePreselect: 'website-design', primary: true }
    ],
    portfolioItems: ['websites'],
    portfolioProof: {
      websites: [
        { name: 'kavin10oc.com', url: 'https://kavin10oc.com' },
        { name: 'luxuryautocollision.ca', url: 'https://luxuryautocollision.ca' }
      ],
      attribution: 'Websites built and launched by San Gabriel Solutions'
    },
    isCore: false
  },
  {
    id: 'events-community',
    order: 8,
    name: 'Events & Community Advertising',
    tagline: 'We support events by providing advertising inventory, sponsor visibility, and execution',
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Events need professional advertising support',
        'Sponsors require visibility guarantees',
        'Post-event materials can be reused strategically'
      ]
    },
    services: [
      'Event banners',
      'Sponsor walls',
      'On-site layouts',
      'Post-event reuse strategies'
    ],
    advantages: [],
    pricing: null,
    ctas: [
      { label: 'Brand My Event', action: 'lead-form', servicePreselect: 'events-community', primary: true }
    ],
    portfolioItems: ['events'],
    isCore: false
  },
  {
    id: 'incorporation-services',
    order: 9,
    name: 'Incorporation & Not-for-Profit Services',
    tagline: 'We help organizations set up properly so they can operate, advertise, and partner legally',
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Organizations need proper legal structure',
        'Partnerships require incorporated entities',
        'Not-for-profits have specific requirements'
      ]
    },
    services: [
      'Business incorporation',
      'NUANS® name searches',
      'Not-for-profit incorporation',
      'Governance guidance'
    ],
    advantages: [],
    pricing: null,
    ctas: [
      { label: 'Start My Organization', action: 'lead-form', servicePreselect: 'incorporation-services', primary: true }
    ],
    portfolioItems: [],
    isCore: false,
    isFoundational: true // This service supports the ecosystem — it does not lead it
  },
  {
    id: 'strategy-technology-ai',
    order: 10,
    name: 'Strategy, Technology & AI',
    tagline: 'We help clients scale, automate, and optimize operations and campaigns',
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Scaling requires strategic planning',
        'Manual processes limit growth',
        'Data-driven decisions improve outcomes'
      ]
    },
    services: [
      'Campaign strategy',
      'CRM & automation',
      'Reporting dashboards',
      'AI-assisted engagement'
    ],
    advantages: [],
    pricing: null,
    ctas: [
      { label: 'Scale My Operations', action: 'lead-form', servicePreselect: 'strategy-technology-ai', primary: true }
    ],
    portfolioItems: [],
    isCore: false
  }
];

/**
 * Get services sorted by order
 * @returns {Array} Services sorted by order property
 */
export const getServicesByOrder = () => {
  return [...services].sort((a, b) => a.order - b.order);
};

/**
 * Get a service by ID
 * @param {string} id - Service ID
 * @returns {Object|undefined} Service object or undefined
 */
export const getServiceById = (id) => {
  return services.find(service => service.id === id);
};

/**
 * Get services with pricing
 * @returns {Array} Services that have pricing defined
 */
export const getServicesWithPricing = () => {
  return services.filter(service => service.pricing !== null);
};

/**
 * Get the core service (Revenue-Generating Advertising)
 * @returns {Object} The core service
 */
export const getCoreService = () => {
  return services.find(service => service.isCore);
};

// Export for backward compatibility with existing code
export const serviceCategories = services.map(service => ({
  id: service.id,
  name: service.name,
  description: service.tagline,
  slug: service.id
}));

/**
 * Featured services for homepage display
 * Includes the top 3 revenue-generating services with detailed info
 */
export const featuredServices = [
  {
    id: 'revenue-generating-advertising',
    name: 'Revenue-Generating Advertising',
    description: 'Turn your high-traffic locations, windows, and routes into income streams. We match advertisers to your visibility assets.',
    pricing: { startingAt: 200 },
    deliverables: [
      'Location assessment and traffic analysis',
      'Advertiser matching and placement',
      'Design and production of advertising assets',
      'Ongoing monetization management'
    ],
    bestFor: ['Property Owners', 'Storefronts', 'High-Traffic Locations']
  },
  {
    id: 'mobile-advertising',
    name: 'Mobile Advertising – Trucking',
    description: 'Transform your trucking fleet into moving billboards. Earn $300-$500 per truck while you drive your regular routes.',
    pricing: { startingAt: 300 },
    deliverables: [
      'Fleet assessment and route analysis',
      'Vinyl wraps or magnetic signage',
      'Advertiser matching',
      'Revenue sharing setup'
    ],
    bestFor: ['Trucking Companies', 'Delivery Fleets', 'LTL Carriers']
  },
  {
    id: 'website-design',
    name: 'Website Design & Development',
    description: 'Conversion-focused websites that support your advertising and turn traffic into leads. Mobile-optimized and SEO-ready.',
    pricing: { startingAt: 1500 },
    deliverables: [
      'Custom website design',
      'Mobile-responsive development',
      'SEO optimization',
      'Lead capture integration'
    ],
    bestFor: ['Small Businesses', 'Startups', 'Local Services']
  }
];
