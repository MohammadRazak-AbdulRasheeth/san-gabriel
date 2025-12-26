/**
 * San Gabriel Solutions - Homepage Offerings Data
 * ORDER IS MANDATORY as per master plan
 */

export const homeOfferings = [
  {
    id: 'advertise-on-signs',
    order: 1,
    title: 'Advertise on Our Signs',
    description: 'Advertise on store signs and vehicles starting from $1 per sq.ft per month.',
    pricing: 'From $1/sq.ft/month',
    cta: { label: 'Start Advertising', to: '/advertising' },
    icon: 'megaphone',
    features: [
      'Prime retail locations',
      'Vehicle advertising network',
      'Flexible monthly terms',
      'Real-world visibility'
    ]
  },
  {
    id: 'signs-at-stores',
    order: 2,
    title: 'Signs at Stores',
    description: 'Storefront signs, window decals, indoor signage (design, print, install).',
    cta: { label: 'Get a Quote', to: '/services/branding-banners-signs' },
    icon: 'storefront',
    features: [
      'Storefront signage',
      'Window decals',
      'Indoor signage',
      'Professional installation'
    ]
  },
  {
    id: 'signs-on-vehicles',
    order: 3,
    title: 'Signs on Cars, Vans & Trucks',
    description: 'Vehicle decals, wraps, trailer signage (design, print, install, removal).',
    cta: { label: 'Learn More', to: '/services/mobile-advertising' },
    icon: 'truck',
    features: [
      'Vehicle decals & wraps',
      'Trailer signage',
      'Professional installation',
      'Clean removal service'
    ]
  }
];

export const howItWorks = [
  {
    step: 1,
    title: 'Contact Us',
    description: 'Tell us about your advertising needs or signage project.'
  },
  {
    step: 2,
    title: 'Get a Custom Plan',
    description: 'We create a tailored solution that fits your budget and goals.'
  },
  {
    step: 3,
    title: 'Launch & Grow',
    description: 'We handle design, production, and installation. You see results.'
  }
];

export default homeOfferings;
