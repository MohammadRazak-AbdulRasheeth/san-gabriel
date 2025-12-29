/**
 * Vehicle Advertising Pricing Configuration
 * 
 * This file contains all approved pricing for vehicle advertising services.
 * Pricing amounts are FINAL and must match exactly as specified in requirements.
 * 
 * Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7
 */

export const VEHICLE_PRICING = {
  individual: [
    {
      id: 'rear-window',
      name: 'Rear Window Ad',
      price: 349,
      badge: 'best-seller',
      description: 'Perforated vinyl rear window advertising',
      features: [
        'Professional design included',
        'Installation included',
        'Perforated vinyl (see-through)',
        'Ontario safety compliant'
      ],
      material: 'Perforated Vinyl',
      ctaText: 'Get My Vehicle Wrapped',
      ctaHref: '/contact'
    },
    {
      id: 'vehicle-side',
      name: 'Vehicle Side / Door',
      price: 299,
      priceUnit: 'per side',
      badge: null,
      description: 'Side or door panel advertising',
      features: [
        'Professional design included',
        'Installation included',
        '3M IJ35 Blockout Vinyl',
        'Durable weather-resistant'
      ],
      material: '3M IJ35 Blockout Vinyl',
      ctaText: 'Get My Vehicle Wrapped',
      ctaHref: '/contact'
    },
    {
      id: 'hood-branding',
      name: 'Vehicle Hood Branding',
      price: 449,
      badge: null,
      description: 'Hood wrap advertising',
      features: [
        'Professional design included',
        'Installation included',
        '3M IJ35 Blockout Vinyl',
        'High visibility placement'
      ],
      material: '3M IJ35 Blockout Vinyl',
      ctaText: 'Get My Vehicle Wrapped',
      ctaHref: '/contact'
    }
  ],
  bundles: [
    {
      id: 'realtor-starter',
      name: 'Real Estate Starter Pack',
      price: 699,
      badge: 'popular',
      targetAudience: 'Ideal for Realtors',
      description: 'Perfect starter package for real estate professionals',
      includes: [
        'Rear window ad',
        'Side panel branding',
        'Professional design'
      ],
      savings: null,
      ctaText: 'Get Realtor Package',
      ctaHref: '/contact'
    },
    {
      id: 'professional-package',
      name: 'Professional Vehicle Package',
      price: 999,
      badge: null,
      targetAudience: 'Complete vehicle branding',
      description: 'Comprehensive branding for maximum visibility',
      includes: [
        'Rear window ad',
        'Both sides branding',
        'Hood branding',
        'Professional design'
      ],
      savings: null,
      ctaText: 'Get My Vehicle Wrapped',
      ctaHref: '/contact'
    },
    {
      id: 'truck-visibility',
      name: 'Straight Truck Visibility Package',
      price: 3299,
      badge: null,
      targetAudience: 'Commercial fleets',
      description: 'Full visibility solution for commercial vehicles',
      includes: [
        'Full truck wrap',
        'Trailer panels',
        'Fleet branding',
        'Professional design'
      ],
      savings: null,
      ctaText: 'Get My Vehicle Wrapped',
      ctaHref: '/contact'
    }
  ]
};

// Badge configuration for visual styling
export const BADGE_CONFIG = {
  'best-seller': {
    text: 'Best Seller',
    variant: 'primary',
    className: 'bg-primary-600 text-white'
  },
  'popular': {
    text: 'Popular',
    variant: 'secondary',
    className: 'bg-secondary-500 text-white'
  },
  'new': {
    text: 'New',
    variant: 'accent',
    className: 'bg-accent-500 text-white'
  }
};

// Helper function to get pricing by ID
export const getPricingById = (id) => {
  const individual = VEHICLE_PRICING.individual.find(item => item.id === id);
  if (individual) return { ...individual, type: 'individual' };
  
  const bundle = VEHICLE_PRICING.bundles.find(item => item.id === id);
  if (bundle) return { ...bundle, type: 'bundle' };
  
  return null;
};

// Helper function to get flagship product (rear window)
export const getFlagshipProduct = () => {
  return VEHICLE_PRICING.individual.find(item => item.badge === 'best-seller');
};

export default VEHICLE_PRICING;
