// San Gabriel Solutions - Services Data
// Core business model: Traffic → Visibility → Monetization

/**
 * All 10 services in required order as per master instructions
 * Each service includes: id, order, name, tagline, businessCase, services, advantages, pricing, ctas
 * Extended with detailed content for individual service pages
 */
export const services = [
  {
    id: 'revenue-generating-advertising',
    order: 1,
    name: 'Revenue-Generating Advertising Solutions',
    tagline: 'Turn existing traffic into new income streams',
    shortDescription: 'San Gabriel Solutions turns existing traffic—foot traffic, vehicle traffic, delivery routes, and digital attention—into new income streams.',
    fullDescription: `San Gabriel Solutions exists to identify high-traffic physical and digital environments and convert them into revenue-generating assets for vulnerable businesses, trucking companies, property owners, small businesses, and nonprofit organizations.

We do this through a combination of physical advertising, digital infrastructure, and execution services. Everything connects back to: Traffic → Visibility → Monetization.

Our approach is simple but powerful: we find where attention already exists and help you capture value from it. Whether you own a storefront on a busy street, operate a trucking fleet, or manage a high-traffic property, we can help you turn that visibility into consistent revenue.`,
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Digital advertising costs are rising',
        'Small businesses and nonprofits are priced out',
        'Physical traffic still exists but is under-monetized',
        'Vulnerable businesses need additional revenue, not just marketing spend'
      ]
    },
    howItWorks: [
      { step: 1, title: 'Traffic Assessment', description: 'We analyze your location, routes, or assets to identify monetization potential' },
      { step: 2, title: 'Asset Deployment', description: 'We deploy physical and mobile advertising assets optimized for your environment' },
      { step: 3, title: 'Advertiser Matching', description: 'We connect you with advertisers looking for your specific audience and location' },
      { step: 4, title: 'Revenue Generation', description: 'You earn passive income while we manage design, placement, and optimization' }
    ],
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
    isCore: true,
    benefits: [
      'Generate passive income from existing assets',
      'No upfront investment required',
      'Professional management of all advertising',
      'Flexible terms and transparent pricing'
    ]
  },
  {
    id: 'branding-banners-signs',
    order: 2,
    name: 'Branding, Banners & Signs',
    tagline: 'Banners, signs, and visual branding are not decoration — they are revenue-producing infrastructure',
    shortDescription: 'Professional banners, signs, and visual branding designed to maximize visibility and drive action.',
    fullDescription: `Banners, signs, and visual branding are not decoration — they are revenue-producing infrastructure. Every piece of signage we create is designed with one goal: to convert visibility into action.

Our design team understands that physical advertising operates differently than digital. Signs need to be readable from a distance, banners need to work in motion, and every element needs to communicate instantly. We combine strategic design with high-quality production to deliver materials that perform.

From roll-up banners for trade shows to large-format storefront graphics, we handle the entire process from concept to installation.`,
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Visibility drives action',
        'Poor design wastes exposure',
        'Physical advertising outperforms digital locally',
        'Events, storefronts, and fleets need fast execution'
      ]
    },
    howItWorks: [
      { step: 1, title: 'Consultation', description: 'We discuss your goals, location, and target audience' },
      { step: 2, title: 'Design', description: 'Our team creates high-impact designs optimized for your use case' },
      { step: 3, title: 'Production', description: 'We produce your materials using premium materials and printing' },
      { step: 4, title: 'Delivery', description: 'Fast turnaround with quality assurance on every order' }
    ],
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
    isCore: false,
    benefits: [
      'Professional design that stands out',
      'Fast turnaround times',
      'Durable, weather-resistant materials',
      'Consistent branding across all materials'
    ]
  },
  {
    id: 'mobile-advertising',
    order: 3,
    name: 'Mobile Advertising – Trucking Fleets',
    tagline: 'Short-haul and LTL trucks are moving billboards operating daily on high-traffic routes',
    shortDescription: 'Transform your trucking fleet into moving billboards and earn $300-$500 per truck while driving your regular routes.',
    fullDescription: `Short-haul and LTL trucks are moving billboards operating daily on high-traffic routes. Every mile you drive is an opportunity to generate additional revenue.

Trucking margins are thin, but your visibility is valuable. We help trucking companies and owner-operators monetize their vehicles by connecting them with advertisers who want to reach audiences along your routes.

Our advertising formats are designed to work with your operations, not against them. From full vinyl wraps to magnetic signage that can be removed when needed, we offer flexible solutions that fit your business.`,
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Trucking margins are thin',
        'Visibility already exists but is unused',
        'Advertising offsets fuel, insurance, and operating costs'
      ]
    },
    howItWorks: [
      { step: 1, title: 'Fleet Assessment', description: 'We evaluate your vehicles, routes, and operating schedule' },
      { step: 2, title: 'Advertiser Matching', description: 'We connect you with advertisers targeting your routes and demographics' },
      { step: 3, title: 'Installation', description: 'Professional installation of wraps, panels, or magnetic signage' },
      { step: 4, title: 'Earn Revenue', description: 'Receive monthly payments while you drive your normal routes' }
    ],
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
    isCore: false,
    benefits: [
      'Earn $300-$500 per truck monthly',
      'No impact on your operations',
      'Professional installation included',
      'Flexible advertising formats'
    ]
  },
  {
    id: 'monetize-location',
    order: 4,
    name: 'Monetize Your Location',
    tagline: 'Businesses and property owners can earn advertising income from windows, storefronts, and high-traffic frontage they already have',
    shortDescription: 'Turn your windows, storefronts, and high-traffic frontage into passive income streams earning $200+ per window.',
    fullDescription: `Businesses and property owners can earn advertising income from windows, storefronts, and high-traffic frontage they already have. If people walk or drive past your location, you have an asset that can generate revenue.

Rising rents and operating costs put pressure on every business. But idle visibility is lost revenue. Your windows and storefront space can work for you 24/7, generating passive income without any additional effort on your part.

We handle everything: finding advertisers, designing the ads, installing the materials, and managing the relationship. You just collect the payments.`,
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Rising rents and operating costs',
        'Idle visibility = lost revenue',
        'Advertising creates passive income'
      ]
    },
    howItWorks: [
      { step: 1, title: 'Location Assessment', description: 'We evaluate your traffic patterns and visibility potential' },
      { step: 2, title: 'Space Identification', description: 'We identify the best windows and spaces for advertising' },
      { step: 3, title: 'Advertiser Placement', description: 'We match your space with relevant advertisers' },
      { step: 4, title: 'Passive Income', description: 'Receive monthly payments for your advertising space' }
    ],
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
    isCore: false,
    benefits: [
      'Earn $200+ per window monthly',
      'Zero effort after setup',
      'Professional ad management',
      'Non-intrusive to your business'
    ]
  },
  {
    id: 'advertise-with-us',
    order: 5,
    name: 'Advertise With Us',
    tagline: 'We provide affordable, physical and digital advertising for organizations priced out of traditional media',
    shortDescription: 'Affordable physical and digital advertising solutions for small businesses and nonprofits priced out of traditional media.',
    fullDescription: `We provide affordable, physical and digital advertising for organizations priced out of traditional media. If you're a small business, nonprofit, or community organization looking to reach local audiences, we have options that fit your budget.

Traditional advertising—billboards, TV, radio—is expensive and often out of reach for smaller organizations. But physical advertising in the right locations can be just as effective at a fraction of the cost.

Our network of windows, storefronts, trucks, and event spaces gives you access to high-traffic advertising placements that reach your target audience where they live, work, and shop.`,
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Traditional media is expensive',
        'Small businesses need affordable options',
        'Local reach matters for community businesses',
        'Physical advertising delivers measurable results'
      ]
    },
    howItWorks: [
      { step: 1, title: 'Campaign Planning', description: 'We discuss your goals, budget, and target audience' },
      { step: 2, title: 'Placement Selection', description: 'We identify the best locations and formats for your campaign' },
      { step: 3, title: 'Creative Development', description: 'We design eye-catching ads that drive action' },
      { step: 4, title: 'Campaign Launch', description: 'Your ads go live across our network of placements' }
    ],
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
    isCore: false,
    benefits: [
      'Affordable local advertising',
      'High-traffic placements',
      'Professional ad design included',
      'Flexible campaign durations'
    ]
  },
  {
    id: 'social-media-digital',
    order: 6,
    name: 'Social Media & Digital Advertising',
    tagline: 'We help businesses extend physical visibility into digital reach, supporting campaigns with social media and online presence',
    shortDescription: 'Extend your physical advertising into digital reach with social media management and online presence support.',
    fullDescription: `We help businesses extend physical visibility into digital reach, supporting campaigns with social media and online presence. Physical and digital advertising work best together.

When someone sees your ad on a truck or in a window, they often look you up online. If your social media presence is weak or inconsistent, you lose that potential customer. We help you maintain a strong digital presence that supports your physical advertising efforts.

Our services range from basic account setup to full social media management, depending on your needs and budget.`,
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Physical ads work best when supported digitally',
        'Businesses need consistent messaging',
        'Social proof builds trust'
      ]
    },
    howItWorks: [
      { step: 1, title: 'Audit', description: 'We review your current digital presence and identify gaps' },
      { step: 2, title: 'Strategy', description: 'We develop a plan aligned with your physical advertising' },
      { step: 3, title: 'Execution', description: 'We create and post content that reinforces your brand' },
      { step: 4, title: 'Reporting', description: 'Monthly analytics show your growth and engagement' }
    ],
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
    isCore: false,
    benefits: [
      'Consistent brand messaging',
      'Professional content creation',
      'Integrated with physical campaigns',
      'Monthly performance reports'
    ]
  },
  {
    id: 'website-design',
    order: 7,
    name: 'Website Design & Development',
    tagline: 'We build conversion-focused websites that support advertising, credibility, and lead generation',
    shortDescription: 'Conversion-focused websites that support your advertising efforts and turn traffic into leads.',
    fullDescription: `We build conversion-focused websites that support advertising, credibility, and lead generation. Your website is the foundation of your digital presence—if it's weak, your advertising dollars leak leads.

Advertising without a strong website is like running a store with a broken front door. People might see your ads and want to learn more, but if your website doesn't convert them, you've wasted that attention.

We build websites designed to convert. Mobile-optimized, SEO-ready, and focused on turning visitors into customers.`,
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Advertising without a strong website leaks leads',
        'Businesses need credibility to convert traffic',
        'Websites are core infrastructure, not optional'
      ]
    },
    howItWorks: [
      { step: 1, title: 'Discovery', description: 'We learn about your business, goals, and target audience' },
      { step: 2, title: 'Design', description: 'We create a custom design focused on conversion' },
      { step: 3, title: 'Development', description: 'We build your site with clean code and fast performance' },
      { step: 4, title: 'Launch', description: 'We deploy your site and provide training on updates' }
    ],
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
    isCore: false,
    benefits: [
      'Conversion-focused design',
      'Mobile-optimized for all devices',
      'SEO-ready structure',
      'Fast loading performance'
    ]
  },
  {
    id: 'events-community',
    order: 8,
    name: 'Events & Community Advertising',
    tagline: 'We support events by providing advertising inventory, sponsor visibility, and execution',
    shortDescription: 'Complete event branding and advertising support including banners, sponsor walls, and on-site layouts.',
    fullDescription: `We support events by providing advertising inventory, sponsor visibility, and execution. Whether you're organizing a community event, conference, or fundraiser, we help you look professional and deliver value to your sponsors.

Events are high-visibility opportunities, but they require professional execution to maximize impact. From sponsor walls that showcase your partners to event banners that guide attendees, every element needs to work together.

We also help you think beyond the event itself. Post-event materials can be reused strategically, extending the value of your investment.`,
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Events need professional advertising support',
        'Sponsors require visibility guarantees',
        'Post-event materials can be reused strategically'
      ]
    },
    howItWorks: [
      { step: 1, title: 'Event Planning', description: 'We discuss your event, sponsors, and branding needs' },
      { step: 2, title: 'Design & Production', description: 'We create all banners, signage, and sponsor materials' },
      { step: 3, title: 'On-Site Support', description: 'We help with layout and installation at your venue' },
      { step: 4, title: 'Post-Event Strategy', description: 'We advise on reusing materials for future events' }
    ],
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
    isCore: false,
    benefits: [
      'Professional event branding',
      'Sponsor visibility guaranteed',
      'Complete production support',
      'Reusable materials strategy'
    ]
  },
  {
    id: 'incorporation-services',
    order: 9,
    name: 'Incorporation & Not-for-Profit Services',
    tagline: 'We help organizations set up properly so they can operate, advertise, and partner legally',
    shortDescription: 'Business incorporation, NUANS® searches, and not-for-profit setup to establish your organization properly.',
    fullDescription: `We help organizations set up properly so they can operate, advertise, and partner legally. Before you can monetize traffic or run advertising campaigns, you need a proper legal structure.

Many of our clients come to us with great ideas but no formal organization. We help them incorporate as businesses or not-for-profits, ensuring they have the foundation needed to operate professionally and access opportunities.

This service supports the ecosystem—it's the foundation that enables everything else we do together.`,
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Organizations need proper legal structure',
        'Partnerships require incorporated entities',
        'Not-for-profits have specific requirements'
      ]
    },
    howItWorks: [
      { step: 1, title: 'Consultation', description: 'We discuss your goals and recommend the right structure' },
      { step: 2, title: 'Name Search', description: 'We conduct NUANS® searches to secure your business name' },
      { step: 3, title: 'Filing', description: 'We prepare and file all incorporation documents' },
      { step: 4, title: 'Governance Setup', description: 'We help establish bylaws and governance structure' }
    ],
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
    isFoundational: true,
    benefits: [
      'Professional legal structure',
      'NUANS® name protection',
      'Proper governance setup',
      'Foundation for partnerships'
    ]
  },
  {
    id: 'strategy-technology-ai',
    order: 10,
    name: 'Strategy, Technology & AI',
    tagline: 'We help clients scale, automate, and optimize operations and campaigns',
    shortDescription: 'Strategic planning, automation, and AI-powered tools to scale your operations and optimize campaigns.',
    fullDescription: `We help clients scale, automate, and optimize operations and campaigns. As your advertising and monetization efforts grow, you need systems that can keep up.

Manual processes limit growth. If you're spending hours on tasks that could be automated, you're leaving money on the table. We help you implement CRM systems, automation workflows, and reporting dashboards that give you visibility and control.

Our AI-assisted engagement tools help you respond faster, personalize communications, and make data-driven decisions that improve outcomes.`,
    businessCase: {
      title: 'Why This Service Exists',
      problems: [
        'Scaling requires strategic planning',
        'Manual processes limit growth',
        'Data-driven decisions improve outcomes'
      ]
    },
    howItWorks: [
      { step: 1, title: 'Assessment', description: 'We analyze your current operations and identify bottlenecks' },
      { step: 2, title: 'Strategy', description: 'We develop a roadmap for scaling and automation' },
      { step: 3, title: 'Implementation', description: 'We set up CRM, automation, and reporting systems' },
      { step: 4, title: 'Optimization', description: 'We continuously improve based on data and results' }
    ],
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
    isCore: false,
    benefits: [
      'Strategic growth planning',
      'Automated workflows',
      'Real-time reporting dashboards',
      'AI-powered engagement'
    ]
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
