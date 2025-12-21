// San Gabriel Solutions - Agency Services Data
// Professional marketing and advertising agency services

/**
 * All 5 agency services in required order
 * Each service includes: id, order, name, shortDescription, fullDescription, offerings, benefits, process, cta, icon
 */
export const agencyServices = [
  {
    id: 'marketing-strategy-planning',
    order: 1,
    name: 'Marketing Strategy & Planning',
    heroImage: '/11servicesimages/10.STRATEGY, TECHNOLOGY & AI.png',
    shortDescription: 'Strategic foundation for marketing success through data-driven planning and competitive positioning',
    fullDescription: `Comprehensive strategic planning that aligns marketing initiatives with business objectives. We begin every engagement with strategic thinking, ensuring tactics serve your broader goals rather than existing in isolation.

Our approach combines market research, competitive analysis, and performance measurement to create actionable frameworks that drive measurable results. We don't just plan—we build systems that enable your team to execute with confidence and adapt as markets evolve.

Strategic planning is the foundation of effective marketing. Without clear direction, even the best tactics fail to deliver sustainable growth.`,
    offerings: [
      'Market research and analysis',
      'Competitive positioning',
      'Go-to-market strategies',
      'Campaign planning frameworks',
      'Performance measurement systems'
    ],
    benefits: [
      'Clear strategic direction aligned with business goals',
      'Data-driven decision making that reduces risk',
      'Competitive advantage through informed positioning',
      'Measurable frameworks for ongoing optimization'
    ],
    process: [
      { step: 1, title: 'Discovery', description: 'Deep dive into your business, market position, and objectives' },
      { step: 2, title: 'Analysis', description: 'Comprehensive market and competitive research' },
      { step: 3, title: 'Strategy Development', description: 'Creation of actionable strategic frameworks' },
      { step: 4, title: 'Implementation Planning', description: 'Roadmap for execution and measurement' }
    ],
    cta: 'Request a Strategy Session',
    icon: 'ChartBarIcon'
  },
  {
    id: 'brand-development-positioning',
    order: 2,
    name: 'Brand Development & Positioning',
    heroImage: '/11servicesimages/2.BRANDING, BANNERS & SIGNS (HIGH-YIELD .png',
    shortDescription: 'Build distinctive brand identities that resonate with target audiences and drive long-term value',
    fullDescription: `Brand development that goes beyond visual identity to create meaningful differentiation in competitive markets. Your brand is the foundation of customer perception—it influences every interaction and drives long-term business value.

We develop brand strategies that clarify your unique value proposition, establish consistent messaging frameworks, and create systems that maintain brand integrity across all touchpoints. Whether building a new brand or evolving an existing one, we focus on strategic positioning that supports business growth.

Strong brands command premium pricing, attract better talent, and build customer loyalty that transcends individual transactions.`,
    offerings: [
      'Brand strategy and identity direction',
      'Messaging and positioning frameworks',
      'Brand consistency systems',
      'Rebranding and brand evolution support'
    ],
    benefits: [
      'Distinctive market positioning that differentiates from competitors',
      'Consistent brand experience across all customer touchpoints',
      'Clear messaging that resonates with target audiences',
      'Strategic foundation for all marketing initiatives'
    ],
    process: [
      { step: 1, title: 'Brand Audit', description: 'Assessment of current brand perception and positioning' },
      { step: 2, title: 'Strategy Development', description: 'Definition of brand positioning and messaging architecture' },
      { step: 3, title: 'Identity Creation', description: 'Development of visual and verbal brand systems' },
      { step: 4, title: 'Implementation', description: 'Rollout planning and brand consistency guidelines' }
    ],
    cta: 'Develop Your Brand',
    icon: 'SparklesIcon'
  },
  {
    id: 'advertising-campaign-management',
    order: 3,
    name: 'Advertising & Campaign Management',
    heroImage: '/11servicesimages/1.REVENUE-GENERATING ADVERTISING SOLUTIONS .png',
    shortDescription: 'Integrated advertising strategies that drive results through strategic planning and continuous optimization',
    fullDescription: `Comprehensive campaign management that integrates digital and traditional advertising channels to achieve business objectives. We don't just run ads—we build integrated strategies that maximize reach, engagement, and conversion.

Our approach combines audience targeting, creative development, and performance optimization to deliver measurable results. We manage campaigns across multiple channels while maintaining strategic coherence and brand consistency.

Effective advertising requires both strategic planning and tactical execution. We handle both, ensuring your campaigns deliver ROI while building long-term brand value.`,
    offerings: [
      'Integrated advertising strategies',
      'Digital and traditional campaign oversight',
      'Audience targeting and segmentation',
      'Optimization and performance reporting'
    ],
    benefits: [
      'Coordinated campaigns across multiple channels',
      'Data-driven optimization for maximum ROI',
      'Professional creative that drives action',
      'Transparent reporting on campaign performance'
    ],
    process: [
      { step: 1, title: 'Campaign Planning', description: 'Strategic planning aligned with business objectives' },
      { step: 2, title: 'Creative Development', description: 'Design and messaging optimized for target audiences' },
      { step: 3, title: 'Execution', description: 'Campaign launch and channel management' },
      { step: 4, title: 'Optimization', description: 'Continuous improvement based on performance data' }
    ],
    cta: 'Launch a Campaign',
    icon: 'MegaphoneIcon'
  },
  {
    id: 'digital-presence-growth',
    order: 4,
    name: 'Digital Presence & Growth',
    heroImage: '/11servicesimages/7.WEBSITE DESIGN & DEVELOPMENT.png',
    shortDescription: 'Build and optimize your digital presence to attract, engage, and convert your target audience',
    fullDescription: `Strategic digital presence development that transforms your online channels into growth engines. Your digital presence is often the first—and sometimes only—interaction potential customers have with your brand.

We help you build websites, content strategies, and digital infrastructure that support business growth. From SEO foundations to conversion optimization, we focus on creating digital experiences that turn visitors into customers.

Digital presence isn't just about having a website—it's about creating a cohesive online ecosystem that supports your business objectives and delivers measurable results.`,
    offerings: [
      'Website strategy and structure',
      'Content and visibility planning',
      'SEO foundations',
      'Conversion optimization'
    ],
    benefits: [
      'Professional digital presence that builds credibility',
      'Improved visibility in search and discovery',
      'Optimized conversion paths that drive leads',
      'Scalable digital infrastructure for growth'
    ],
    process: [
      { step: 1, title: 'Digital Audit', description: 'Assessment of current digital presence and opportunities' },
      { step: 2, title: 'Strategy Development', description: 'Planning for website, content, and visibility' },
      { step: 3, title: 'Implementation', description: 'Building and optimizing digital assets' },
      { step: 4, title: 'Growth', description: 'Ongoing optimization and expansion' }
    ],
    cta: 'Strengthen Your Digital Presence',
    icon: 'GlobeAltIcon'
  },
  {
    id: 'business-marketing-consulting',
    order: 5,
    name: 'Business & Marketing Consulting',
    heroImage: '/11servicesimages/6.SOCIAL MEDIA & DIGITAL ADVERTISING SERVICES.png',
    shortDescription: 'Strategic advisory support to guide marketing decisions and drive business growth',
    fullDescription: `Expert consulting that provides strategic guidance without the overhead of full-time leadership. Many businesses need senior marketing expertise but can't justify a full-time CMO or marketing director.

We provide fractional marketing leadership, strategic audits, and ongoing advisory support that helps you make better decisions, avoid costly mistakes, and accelerate growth. Our consulting engagements are flexible and focused on delivering actionable insights.

Strategic consulting fills the gap between execution and leadership, providing the perspective and expertise needed to make confident marketing decisions.`,
    offerings: [
      'Marketing audits',
      'Growth consulting',
      'Ongoing advisory support',
      'Fractional marketing leadership'
    ],
    benefits: [
      'Access to senior marketing expertise without full-time costs',
      'Objective assessment of marketing effectiveness',
      'Strategic guidance for growth initiatives',
      'Flexible engagement models that fit your needs'
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Comprehensive review of current marketing and business situation' },
      { step: 2, title: 'Strategic Recommendations', description: 'Actionable insights and prioritized opportunities' },
      { step: 3, title: 'Implementation Support', description: 'Guidance on executing recommended strategies' },
      { step: 4, title: 'Ongoing Advisory', description: 'Continued support as your business evolves' }
    ],
    cta: 'Book a Consultation',
    icon: 'LightBulbIcon'
  }
];

/**
 * Get agency services sorted by order
 * @returns {Array} Agency services sorted by order property
 */
export const getAgencyServicesByOrder = () => {
  return [...agencyServices].sort((a, b) => a.order - b.order);
};

/**
 * Get an agency service by ID
 * @param {string} id - Service ID
 * @returns {Object|undefined} Service object or undefined
 */
export const getAgencyServiceById = (id) => {
  return agencyServices.find(service => service.id === id);
};

/**
 * Get agency service by order number
 * @param {number} order - Order number (1-5)
 * @returns {Object|undefined} Service object or undefined
 */
export const getAgencyServiceByOrder = (order) => {
  return agencyServices.find(service => service.order === order);
};

/**
 * Validate that all services have required fields
 * @returns {boolean} True if all services are valid
 */
export const validateAgencyServices = () => {
  const requiredFields = ['id', 'order', 'name', 'shortDescription', 'fullDescription', 'offerings', 'benefits', 'process', 'cta', 'icon'];
  
  return agencyServices.every(service => {
    return requiredFields.every(field => {
      const hasField = service.hasOwnProperty(field);
      const isNotEmpty = Array.isArray(service[field]) ? service[field].length > 0 : Boolean(service[field]);
      return hasField && isNotEmpty;
    });
  });
};
