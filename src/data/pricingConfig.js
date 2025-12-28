/**
 * San Gabriel Solutions - Pricing Configuration
 * Centralized pricing data for easy updates without code changes
 * 
 * CRITICAL BUSINESS RULES:
 * - Advertising (media space): $1 per sq ft per month
 * - Signage & Wraps (production + install): Package-based pricing
 * - Driver earnings: $0.50-$1.00 per sq ft per month (contingent on verified activity)
 */

// Advertising Pricing - Media Space Only ($1/sq ft/month)
export const advertisingPricing = {
  rate: 1,
  unit: 'sq ft',
  period: 'month',
  displayText: '$1 per square foot per month',
  includes: [
    'Ad placement on vehicle/storefront',
    'Campaign management',
    'Performance reporting',
    'Advertiser matching',
    'Route optimization'
  ],
  excludes: [
    'Design services',
    'Printing/production',
    'Installation labor',
    'Material costs',
    'Removal services'
  ],
  note: 'Media space pricing only. Production and installation available separately.'
};

// Signage & Wraps - Package Pricing (NOT $1/sq ft)
export const signagePackages = {
  cars: {
    title: 'Cars & Sedans',
    packages: [
      { name: 'Back Panel', price: 249, priceDisplay: '$249', description: 'Rear window or trunk decal' },
      { name: 'Hood Wrap', price: 399, priceDisplay: '$399', description: 'Full hood coverage' },
      { name: 'Full Branding', priceRange: '699-999', priceDisplay: '$699–$999', description: 'Complete vehicle branding package' }
    ],
    includes: ['Design', 'Premium materials', 'Professional installation']
  },
  straightTrucks: {
    title: 'Straight Trucks & Box Trucks',
    packages: [
      { name: 'One Side', priceFrom: 1500, priceDisplay: '$1,500+', description: 'Single side wrap' },
      { name: 'Both Sides + Rear', priceRange: '3000-3500', priceDisplay: '$3,000–$3,500', description: 'Full coverage package' }
    ],
    includes: ['Design', 'Commercial-grade materials', 'Professional installation']
  },
  trailers: {
    title: '53\' Trailers',
    packages: [
      { name: 'One Side', priceFrom: 3500, priceDisplay: '$3,500+', description: 'Single side wrap' },
      { name: 'Full Wrap (2 Sides + Rear)', priceRange: '6500-7500', priceDisplay: '$6,500–$7,500', description: 'Complete trailer branding' }
    ],
    includes: ['Design', 'Fleet-grade materials', 'Professional installation']
  }
};

// Driver Compensation Structure
export const driverCompensation = {
  ratePerSqFt: {
    min: 0.50,
    max: 1.00,
    displayText: '$0.50–$1.00 per square foot per month'
  },
  earningsByVehicle: [
    { type: 'Car/Van', monthlyMin: 50, monthlyMax: 150, display: '$50–$150/month' },
    { type: 'Straight Truck', monthlyMin: 150, monthlyMax: 300, display: '$150–$300/month' },
    { type: '53\' Trailer', monthlyMin: 250, monthlyMax: 500, display: '$250–$500+/month' }
  ],
  paymentTerms: 'Monthly, contingent on verified activity and active campaign',
  requirements: [
    'Minimum daily movement threshold must be met',
    'Vehicle activity must be verified (manual upload or tracking)',
    'Campaign must be active during payment period'
  ]
};

// Activity Verification Options
export const verificationOptions = {
  manualUpload: {
    name: 'Daily Trip Upload',
    description: 'Upload dispatch/ELD/GPS summaries or delivery logs',
    frequency: 'Daily or weekly batch (configurable)',
    requirements: ['Trip documentation', 'Mileage records', 'Route evidence']
  },
  automatedTracking: {
    name: 'Automated Tracking',
    description: 'Opt-in tracking to validate KM travelled automatically',
    frequency: 'Continuous (background)',
    requirements: ['App installation', 'Location permission', 'Explicit consent'],
    privacyNote: 'Used only to verify advertising activity, not for productivity monitoring'
  }
};

// Revenue Per Vehicle Data
export const revenuePerVehicle = {
  carVan: {
    type: 'Car/Van',
    adSpace: '20-50 sq ft',
    monthlyRevenue: '$20–$50',
    driverShare: '$10–$25',
    networkOps: '$10–$25',
    routes: 'Urban commute, delivery routes'
  },
  straightTruck: {
    type: 'Straight Truck',
    adSpace: '100-200 sq ft',
    monthlyRevenue: '$100–$200',
    driverShare: '$50–$100',
    networkOps: '$50–$100',
    routes: 'Commercial zones, highways'
  },
  trailer53: {
    type: '53\' Trailer',
    adSpace: '300-500 sq ft',
    monthlyRevenue: '$300–$500',
    driverShare: '$150–$250',
    networkOps: '$150–$250',
    routes: 'Interstate, industrial corridors'
  }
};

// Budget Ranges for Contact Form
export const budgetRanges = [
  { value: '100-250', label: '$100–$250/month' },
  { value: '250-500', label: '$250–$500/month' },
  { value: '500-1000', label: '$500–$1,000/month' },
  { value: '1000+', label: '$1,000+/month' }
];

// Audience Types for Contact Form
export const audienceTypes = [
  { value: 'advertiser', label: 'Advertiser' },
  { value: 'driver', label: 'Driver' },
  { value: 'fleet', label: 'Fleet Owner' },
  { value: 'property', label: 'Property/Location Partner' },
  { value: 'other', label: 'Other' }
];

// Service Types for Contact Form
export const serviceTypes = [
  { value: 'advertising', label: 'Advertising (Monthly Media)' },
  { value: 'signage-wraps', label: 'Signage & Wraps (Production)' },
  { value: 'fleet-branding', label: 'Fleet Branding' },
  { value: 'both', label: 'Both Advertising & Branding' }
];

// Footer Disclaimers (Mandatory)
export const footerDisclaimers = {
  pricingSeparation: 'Advertising space pricing is separate from signage production and installation.',
  driverEarnings: 'Earnings vary by campaign; subject to verified vehicle activity and eligibility.',
  trackingDisclaimer: 'Tracking is used only to verify advertising activity; not for productivity monitoring.'
};

// Helper functions
export const formatPrice = (price) => {
  if (typeof price === 'number') {
    return `$${price.toLocaleString()}`;
  }
  return price;
};

export const getVehicleEarnings = (vehicleType) => {
  return driverCompensation.earningsByVehicle.find(v => 
    v.type.toLowerCase().includes(vehicleType.toLowerCase())
  );
};
