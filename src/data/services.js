import { MarketingIcon, StrategyIcon, TechnologyIcon, BrandingIcon } from '../components/ui/Icons';

// Service Categories
export const serviceCategories = [
  {
    id: 'marketing-outreach',
    name: 'Marketing & Outreach Services',
    description: 'Grow your brand with social media, advertising, and community engagement.',
    icon: MarketingIcon,
    slug: 'marketing-outreach'
  },
  {
    id: 'strategy-consulting',
    name: 'Strategy & Consulting',
    description: 'Strategic guidance to optimize operations and accelerate growth.',
    icon: StrategyIcon,
    slug: 'strategy-consulting'
  },
  {
    id: 'technology-ai',
    name: 'Technology & AI Solutions',
    description: 'Cutting-edge tech solutions and AI integration for modern businesses.',
    icon: TechnologyIcon,
    slug: 'technology-ai'
  },
  {
    id: 'branding-solutions',
    name: 'Branding Solutions',
    description: 'Complete brand identity and design services for lasting impact.',
    icon: BrandingIcon,
    slug: 'branding-solutions'
  }
];

// Individual Services
export const services = [
  {
    id: 'social-media-management',
    name: 'Social Media Management',
    description: 'End-to-end social media management designed to grow your online presence and engage your audience effectively.',
    deliverables: [
      'Monthly content calendar',
      '12–20 curated posts per month',
      'Engagement monitoring & response',
      'Analytics and performance reports',
      'Hashtag research and optimization'
    ],
    bestFor: ['Small businesses', 'Brands launching products', 'Influencers', 'E-commerce stores'],
    category: 'marketing-outreach',
    featured: true,
    pricing: {
      startingAt: 1500,
      currency: 'USD'
    }
  },
  {
    id: 'business-strategy',
    name: 'Business Strategy Consulting',
    description: 'Comprehensive strategic planning to identify growth opportunities and optimize your business operations.',
    deliverables: [
      'Market analysis and competitive research',
      'Strategic roadmap development',
      'Growth opportunity identification',
      'Operational efficiency recommendations',
      'Monthly progress reviews'
    ],
    bestFor: ['Scaling businesses', 'Startups', 'Family-owned companies', 'Service providers'],
    category: 'strategy-consulting',
    featured: true,
    pricing: {
      startingAt: 2500,
      currency: 'USD'
    }
  },
  {
    id: 'ai-automation',
    name: 'AI & Automation Solutions',
    description: 'Custom AI implementations and process automation to streamline operations and boost productivity.',
    deliverables: [
      'Process automation setup',
      'AI tool integration',
      'Custom workflow development',
      'Staff training and documentation',
      'Ongoing support and optimization'
    ],
    bestFor: ['Tech-forward businesses', 'Professional services', 'Data-driven companies'],
    category: 'technology-ai',
    featured: true,
    pricing: {
      startingAt: 3000,
      currency: 'USD'
    }
  },
  {
    id: 'brand-identity',
    name: 'Brand Identity Design',
    description: 'Complete brand identity development including logo design, color schemes, and brand guidelines.',
    deliverables: [
      'Logo design and variations',
      'Brand color palette',
      'Typography selection',
      'Brand guidelines document',
      'Marketing collateral templates'
    ],
    bestFor: ['New businesses', 'Rebranding companies', 'Franchises', 'Professional services'],
    category: 'branding-solutions',
    featured: false,
    pricing: {
      startingAt: 2000,
      currency: 'USD'
    }
  }
];

// Featured Services (subset of services marked as featured)
export const featuredServices = services.filter(service => service.featured);