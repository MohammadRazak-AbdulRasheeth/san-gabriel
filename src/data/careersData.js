/**
 * Careers Data
 * Content and configuration for the Careers page
 * Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 5.4, 5.5
 */

export const careersData = {
  // Compensation structure - Requirements: 1.1, 1.2, 1.3, 1.4, 1.5
  compensation: {
    rate: '10-15%',
    basis: 'collected and paid revenue',
    cap: 'No cap on earnings',
    flexibility:
      'Commission rates for large accounts, bundled packages, regional deals, or special campaigns may be discussed and adjusted on a case-by-case basis.',
    disclaimer:
      'All positions are commission-based only. There is no salary, hourly wage, or guaranteed income.',
  },

  // Sales roles - Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 3.4
  roles: [
    {
      id: 'inventory',
      title: 'Inventory Acquisition Sales Partner',
      subtitle: 'Supply-Side Sales',
      summary:
        'Bring advertising inventory into the San Gabriel advertising network.',
      responsibilities: [
        'Storefront windows',
        'High-traffic business locations',
        'Property owners',
        'Short-haul trucks',
        'LTL trucks, trailers, and fleets',
        'Owner-operators',
      ],
      pitchExamples: [
        'Earn money from your window.',
        'Turn your truck into a paid billboard.',
        'No extra work. Just extra income.',
      ],
      compensation: [
        '10–15% commission on revenue generated from inventory you onboard',
        'Recurring commission while inventory remains active',
        'Potential for higher rates on volume or regional onboarding',
      ],
      idealCandidate: [
        'Comfortable speaking with business owners',
        'Walk-in sales friendly',
        'Trucking or logistics connections',
        'Self-driven and results-focused',
      ],
    },
    {
      id: 'advertising',
      title: 'Advertising Sales Partner',
      subtitle: 'Demand-Side Sales',
      summary: 'Sell advertising campaigns to businesses and nonprofits.',
      targetCustomers: [
        'Small businesses',
        'Nonprofit organizations',
        'Community groups',
        'Local service providers',
      ],
      pitchExamples: [
        'Advertise on real storefronts.',
        'Get your business seen on local trucks.',
        'Affordable alternatives to digital advertising.',
      ],
      compensation: [
        '10–15% commission on all advertising revenue sold',
        'Recurring commission on campaign renewals',
        'Flexible commission structures for large or bundled campaigns',
      ],
      idealCandidate: [
        'Sales or marketing background',
        'Strong local network',
        'Comfortable presenting value-based offers',
      ],
    },
  ],

  // Unified hiring advertisement - Requirements: 4.1, 5.4, 5.5
  hiringAd: {
    title: 'Sales Partners Wanted – Commission Based',
    description:
      'San Gabriel Solutions is expanding a location-based advertising network using storefronts, windows, banners, and trucking fleets.',
    responsibilities: [
      'Help businesses and truckers earn extra income',
      'Sell affordable advertising to small businesses and nonprofits',
    ],
    benefits: [
      'Earn 10–15% commission on revenue you bring in',
      'No cap on earnings',
      'Flexible, local opportunities',
      'Training, scripts, and materials provided',
      'One application. Two sales paths.',
      'Placement based on your strengths.',
    ],
  },

  // Application form configuration - Requirements: 4.4, 4.5
  applicationForm: {
    screeningQuestion: 'Which best describes you?',
    options: [
      {
        value: 'inventory',
        label:
          'I prefer onboarding businesses or truckers to help them earn revenue',
      },
      {
        value: 'advertising',
        label: 'I prefer selling advertising and campaigns',
      },
    ],
  },
};
