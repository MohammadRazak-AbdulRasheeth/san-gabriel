/**
 * Compliance Data Configuration
 * 
 * This file contains material specifications, safety regulations,
 * and disclaimers for vehicle advertising services.
 * 
 * Requirements: 4.1, 4.2, 4.3, 4.4, 4.5
 */

export const COMPLIANCE = {
  materials: [
    {
      id: 'perforated-vinyl',
      placement: 'Rear Window',
      material: 'Perforated Vinyl',
      safetyNote: 'See-through material maintains driver visibility while displaying your advertisement',
      isRequired: true,
      description: 'The ONLY material approved for rear window installations'
    },
    {
      id: '3m-blockout',
      placement: 'Side Panels, Doors, Hood',
      material: '3M IJ35 Blockout Vinyl',
      safetyNote: 'Premium blockout vinyl for non-window surfaces',
      isRequired: true,
      description: 'High-quality vinyl for all non-window vehicle surfaces'
    }
  ],
  
  regulations: [
    {
      id: 'ontario-hta',
      title: 'Ontario Highway Traffic Act Compliance',
      description: 'All installations comply with Ontario Highway Traffic Act visibility requirements'
    },
    {
      id: 'no-solid-rear',
      title: 'No Solid Vinyl on Rear Windows',
      description: 'We never use solid vinyl on rear windows to ensure driver safety and legal compliance'
    },
    {
      id: 'professional-install',
      title: 'Professional Installation',
      description: 'All installations performed by certified professionals to ensure safety compliance'
    }
  ],
  
  disclaimers: [
    {
      id: 'pricing-variance',
      text: 'Pricing may vary based on vehicle size and complexity',
      type: 'pricing'
    },
    {
      id: 'no-performance-guarantee',
      text: 'Advertising results vary by location, design, and driving patterns. No specific performance outcomes are guaranteed.',
      type: 'performance'
    },
    {
      id: 'installation-time',
      text: 'Installation times vary by vehicle type and service selected',
      type: 'service'
    },
    {
      id: 'design-approval',
      text: 'Final design subject to customer approval before installation',
      type: 'service'
    }
  ],
  
  safetyStatements: [
    'All rear window installations use perforated vinyl that maintains driver visibility',
    'Our materials and installation methods comply with Ontario safety regulations',
    'Professional installation ensures proper application and safety compliance'
  ]
};

// Helper function to get material by placement type
export const getMaterialByPlacement = (placement) => {
  const lowerPlacement = placement.toLowerCase();
  
  if (lowerPlacement.includes('rear') && lowerPlacement.includes('window')) {
    return COMPLIANCE.materials.find(m => m.id === 'perforated-vinyl');
  }
  
  return COMPLIANCE.materials.find(m => m.id === '3m-blockout');
};

// Helper function to get all disclaimers by type
export const getDisclaimersByType = (type) => {
  return COMPLIANCE.disclaimers.filter(d => d.type === type);
};

// Helper function to get formatted compliance footer text
export const getComplianceFooterText = () => {
  return {
    materials: COMPLIANCE.materials.map(m => `${m.placement}: ${m.material}`),
    regulations: COMPLIANCE.regulations.map(r => r.description),
    disclaimers: COMPLIANCE.disclaimers.map(d => d.text)
  };
};

export default COMPLIANCE;
