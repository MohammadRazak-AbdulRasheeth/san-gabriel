/**
 * San Gabriel Solutions - Vehicle Partner Program Data
 */

export const vehiclePartnerData = {
  headline: 'Earn Money With Your Vehicle',
  subheadline: 'Turn your daily commute into income',
  description: 'Drivers earn income with no installation or removal costs. We handle everything — you just drive.',

  eligibleVehicles: [
    { type: 'Cars', description: 'Sedans, hatchbacks, coupes' },
    { type: 'Vans', description: 'Minivans, cargo vans, passenger vans' },
    { type: 'Trucks', description: 'Pickup trucks, box trucks' },
    { type: 'Delivery Vehicles', description: 'Commercial delivery vehicles' }
  ],

  benefits: [
    'No installation costs',
    'No removal costs',
    'Flexible commitment',
    'Professional ad materials',
    'Easy payout system',
    'Vehicle restored professionally after campaign'
  ],

  payoutModels: [
    {
      name: 'Flat Monthly Rate',
      description: 'Guaranteed fixed monthly payment regardless of miles driven'
    },
    {
      name: 'Revenue Share',
      description: 'Earn a percentage based on campaign performance and visibility'
    },
    {
      name: 'Hybrid (Base + Bonus)',
      description: 'Base monthly rate plus bonuses for high-traffic routes'
    }
  ],

  formFields: {
    driverInfo: [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
      { name: 'email', label: 'Email Address', type: 'email', required: true },
      { name: 'city', label: 'City', type: 'text', required: true }
    ],
    vehicleInfo: [
      { name: 'vehicleType', label: 'Vehicle Type', type: 'select', options: ['Car', 'Van', 'Truck', 'Delivery Vehicle'], required: true },
      { name: 'make', label: 'Make', type: 'text', required: true },
      { name: 'model', label: 'Model', type: 'text', required: true },
      { name: 'year', label: 'Year', type: 'number', required: true },
      { name: 'color', label: 'Color', type: 'text', required: true },
      { name: 'platePartial', label: 'License Plate (last 4 characters)', type: 'text', required: true }
    ],
    usage: [
      { name: 'drivingArea', label: 'Primary Driving Area', type: 'text', required: true },
      { name: 'kmPerDay', label: 'Average KM/Day', type: 'number', required: true },
      { name: 'availableSpace', label: 'Available Ad Space', type: 'select', options: ['Rear Window', 'Side Panels', 'Full Wrap', 'Partial Wrap'], required: true }
    ],
    consent: [
      { name: 'temporaryAds', label: 'I agree to display temporary advertisements on my vehicle', type: 'checkbox', required: true },
      { name: 'removalConsent', label: 'I understand ads will be removed after campaign end', type: 'checkbox', required: true },
      { name: 'inspectionConsent', label: 'I agree to vehicle inspection before and after campaigns', type: 'checkbox', required: true }
    ]
  },

  adRemovalPolicy: {
    title: 'Ad Removal Policy',
    points: [
      'All ads are time-based with clear end dates',
      'Ads removed immediately after campaign end',
      'San Gabriel schedules and manages all removal',
      'Vehicles restored professionally at no cost to driver'
    ]
  }
};

export default vehiclePartnerData;
