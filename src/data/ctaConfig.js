/**
 * CTA (Call-to-Action) Configuration
 * 
 * This file contains all approved CTA text options and navigation targets.
 * Primary CTAs must use ONLY the approved text options specified here.
 * 
 * Requirements: 8.1, 8.3
 */

// Approved primary CTA text options (Requirement 8.1)
export const APPROVED_CTA_TEXT = [
  'Get My Vehicle Wrapped',
  'Advertise While You Drive',
  'Get Realtor Package'
];

// Primary CTA configurations with navigation targets
export const PRIMARY_CTAS = {
  getWrapped: {
    id: 'get-wrapped',
    text: 'Get My Vehicle Wrapped',
    href: '/contact',
    variant: 'primary',
    description: 'Navigate to quote form for vehicle wrap services'
  },
  realtorPackage: {
    id: 'realtor-package',
    text: 'Get Realtor Package',
    href: '/pricing#realtor-starter',
    variant: 'secondary',
    description: 'Navigate to pricing page with realtor package highlighted'
  },
  advertise: {
    id: 'advertise',
    text: 'Advertise While You Drive',
    href: '/services',
    variant: 'primary',
    description: 'Navigate to services page'
  }
};

// Secondary CTA configurations for supporting actions
export const SECONDARY_CTAS = {
  viewPricing: {
    id: 'view-pricing',
    text: 'View Pricing',
    href: '/pricing',
    variant: 'outline',
    description: 'Navigate to full pricing page'
  },
  viewPortfolio: {
    id: 'view-portfolio',
    text: 'View Our Work',
    href: '/portfolio',
    variant: 'outline',
    description: 'Navigate to portfolio page'
  },
  contactUs: {
    id: 'contact-us',
    text: 'Contact Us',
    href: '/contact',
    variant: 'outline',
    description: 'Navigate to contact page'
  }
};

// CTA variant styling configuration
export const CTA_VARIANTS = {
  primary: {
    className: 'bg-primary-600 hover:bg-primary-700 text-white font-semibold',
    size: 'lg'
  },
  secondary: {
    className: 'bg-secondary-500 hover:bg-secondary-600 text-white font-semibold',
    size: 'lg'
  },
  outline: {
    className: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 font-semibold',
    size: 'md'
  }
};

// Helper function to validate CTA text against approved options
export const isApprovedCTAText = (text) => {
  return APPROVED_CTA_TEXT.includes(text);
};

// Helper function to get CTA by ID
export const getCTAById = (id) => {
  const allCTAs = { ...PRIMARY_CTAS, ...SECONDARY_CTAS };
  return Object.values(allCTAs).find(cta => cta.id === id) || null;
};

// Helper function to get navigation target for CTA
export const getCTANavigationTarget = (ctaId) => {
  const cta = getCTAById(ctaId);
  return cta ? cta.href : null;
};

// Hero section CTA configuration
export const HERO_CTAS = {
  primary: PRIMARY_CTAS.getWrapped,
  secondary: PRIMARY_CTAS.realtorPackage
};

// Combined CTA configuration export
const ctaConfig = {
  APPROVED_CTA_TEXT,
  PRIMARY_CTAS,
  SECONDARY_CTAS,
  CTA_VARIANTS,
  HERO_CTAS
};

export default ctaConfig;
