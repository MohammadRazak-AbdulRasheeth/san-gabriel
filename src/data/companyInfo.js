/**
 * San Gabriel Solutions - Company Information
 * Single source of truth for company details
 */

export const companyInfo = {
  name: 'San Gabriel Solutions',
  tagline: 'Affordable Advertising & High-Impact Signage',
  address: {
    street: '2967 Dundas Street West',
    city: 'Toronto',
    province: 'ON',
    country: 'Canada',
    full: '2967 Dundas Street West, Toronto, ON, Canada'
  },
  phone: '753-726-4227',
  phoneFormatted: '(753) SAN-GABR',
  email: 'contact@sangabrielsolutions.com',
  salesEmail: 'sales@sangabrielsolutions.com',
  
  // Installation locations with operating days
  installationLocations: [
    {
      day: 'Tuesday',
      address: '1460 The Queensway',
      city: 'Etobicoke',
      province: 'ON',
      postalCode: 'M8Z 1S4',
      full: '1460 The Queensway, Etobicoke, ON M8Z 1S4'
    },
    {
      day: 'Wednesday',
      address: '285 Taunton Rd E',
      city: 'Oshawa',
      province: 'ON',
      postalCode: 'L1G 3V2',
      full: '285 Taunton Rd E, Oshawa, ON L1G 3V2'
    },
    {
      day: 'Thursday',
      address: '8901 Airport Rd',
      city: 'Brampton',
      province: 'ON',
      postalCode: 'L6T 5T2',
      full: '8901 Airport Rd, Brampton, ON L6T 5T2'
    }
  ],
  
  // Core value proposition
  valueProposition: {
    headline: 'Affordable Advertising That Works Every Day',
    subheadline: 'Real-world visibility without digital ad fatigue',
    pricing: 'From $1 per sq.ft per month'
  },

  // Core positioning
  positioning: [
    'A professional signage provider',
    'An affordable advertising platform (from $1/sq.ft/month)',
    'A vehicle-based advertising network (cars, vans, trucks)'
  ],

  // Social links (placeholders)
  social: {
    linkedin: 'https://linkedin.com/company/sangabrielsolutions',
    facebook: 'https://facebook.com/sangabrielsolutions',
    instagram: 'https://instagram.com/sangabrielsolutions',
    twitter: 'https://twitter.com/sangabrielsol'
  }
};

export default companyInfo;
