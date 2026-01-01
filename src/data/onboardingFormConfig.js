/**
 * Onboarding Form Configuration
 * 
 * Defines form versions, field options, and configuration for the owner-operator onboarding process.
 * Supports both short form (for calendar calls) and full form (for post-approval onboarding).
 */

export const onboardingFormConfig = {
  // Short form configuration - used during calendar calls
  shortForm: {
    steps: [
      'businessInformation',
      'qualification',
      'confirmationConsent'
    ],
    title: 'Quick Onboarding Form',
    description: 'Complete this short form during your calendar call'
  },
  
  // Full form configuration - used for post-approval onboarding
  fullForm: {
    steps: [
      'businessInformation',
      'qualification',
      'timeWorkflow',
      'currentSystems',
      'technicalSetup',
      'confirmationConsent',
      'optionalInformation'
    ],
    title: 'Owner-Operator Onboarding',
    description: 'Help us set up your account and understand your needs'
  },
  
  // Business type options
  businessTypes: [
    'Trucking/Transportation',
    'Construction',
    'Landscaping',
    'Plumbing',
    'Electrical',
    'HVAC',
    'General Contracting',
    'Other'
  ],
  
  // Device options
  devices: [
    'Mobile',
    'Desktop',
    'Tablet'
  ],
  
  // Operating system options
  operatingSystems: [
    'iOS',
    'Android',
    'Windows',
    'Mac'
  ],
  
  // Contact method options
  contactMethods: [
    'Phone',
    'Email',
    'Text Message'
  ],
  
  // Time zone options (North American time zones)
  timeZones: [
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'America/Toronto',
    'America/Vancouver'
  ],
  
  // Field validation rules
  validation: {
    email: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    },
    phone: {
      pattern: /^[\d\s\-()]+$/,
      message: 'Please enter a valid phone number'
    },
    textareaMaxLength: 500
  },
  
  // Step labels for progress indicator
  stepLabels: {
    businessInformation: 'Business Information',
    qualification: 'Qualification',
    timeWorkflow: 'Time & Workflow',
    currentSystems: 'Current Systems',
    technicalSetup: 'Technical Setup',
    confirmationConsent: 'Confirmation & Consent',
    optionalInformation: 'Optional Information'
  }
};

export default onboardingFormConfig;
