/**
 * Content Verification Utility
 * Verifies that all services, case studies, and CTAs meet requirements
 * Task: 15.2 Verify content completeness
 */

import { agencyServices } from '../data/agencyServices';
import { caseStudies } from '../data/caseStudies';
import { differentiators } from '../data/differentiators';
import { industries } from '../data/industries';

/**
 * Verify all services have complete information
 * Requirements: 6.2, 7.1, 8.1, 9.1, 10.1, 11.1
 */
export const verifyServicesCompleteness = () => {
  const results = {
    passed: true,
    errors: [],
    warnings: [],
    summary: {}
  };

  // Required fields for each service
  const requiredFields = [
    'id',
    'order',
    'name',
    'shortDescription',
    'fullDescription',
    'offerings',
    'benefits',
    'process',
    'cta',
    'icon'
  ];

  // Expected services in order
  const expectedServices = [
    { order: 1, id: 'marketing-strategy-planning', name: 'Marketing Strategy & Planning' },
    { order: 2, id: 'brand-development-positioning', name: 'Brand Development & Positioning' },
    { order: 3, id: 'advertising-campaign-management', name: 'Advertising & Campaign Management' },
    { order: 4, id: 'digital-presence-growth', name: 'Digital Presence & Growth' },
    { order: 5, id: 'business-marketing-consulting', name: 'Business & Marketing Consulting' }
  ];

  // Check we have exactly 5 services
  if (agencyServices.length !== 5) {
    results.passed = false;
    results.errors.push(`Expected 5 services, found ${agencyServices.length}`);
  }

  // Verify each service
  agencyServices.forEach((service, index) => {
    const serviceErrors = [];

    // Check all required fields exist and are not empty
    requiredFields.forEach(field => {
      if (!service.hasOwnProperty(field)) {
        serviceErrors.push(`Missing field: ${field}`);
      } else if (Array.isArray(service[field])) {
        if (service[field].length === 0) {
          serviceErrors.push(`Empty array for field: ${field}`);
        }
      } else if (typeof service[field] === 'string') {
        if (!service[field].trim()) {
          serviceErrors.push(`Empty string for field: ${field}`);
        }
      } else if (!service[field]) {
        serviceErrors.push(`Empty value for field: ${field}`);
      }
    });

    // Check service order matches expected
    const expected = expectedServices[index];
    if (expected) {
      if (service.order !== expected.order) {
        serviceErrors.push(`Order mismatch: expected ${expected.order}, got ${service.order}`);
      }
      if (service.id !== expected.id) {
        serviceErrors.push(`ID mismatch: expected ${expected.id}, got ${service.id}`);
      }
      if (service.name !== expected.name) {
        serviceErrors.push(`Name mismatch: expected ${expected.name}, got ${service.name}`);
      }
    }

    // Check offerings array has at least 3 items
    if (service.offerings && service.offerings.length < 3) {
      results.warnings.push(`Service "${service.name}" has only ${service.offerings.length} offerings (recommended: 3+)`);
    }

    // Check benefits array has at least 2 items
    if (service.benefits && service.benefits.length < 2) {
      results.warnings.push(`Service "${service.name}" has only ${service.benefits.length} benefits (recommended: 2+)`);
    }

    // Check process array has at least 3 steps
    if (service.process && service.process.length < 3) {
      results.warnings.push(`Service "${service.name}" has only ${service.process.length} process steps (recommended: 3+)`);
    }

    // Check CTA is present and meaningful
    if (service.cta && service.cta.length < 5) {
      results.warnings.push(`Service "${service.name}" has very short CTA: "${service.cta}"`);
    }

    if (serviceErrors.length > 0) {
      results.passed = false;
      results.errors.push({
        service: service.name || `Service ${index + 1}`,
        errors: serviceErrors
      });
    }
  });

  results.summary.totalServices = agencyServices.length;
  results.summary.expectedServices = 5;
  results.summary.servicesComplete = results.errors.length === 0;

  return results;
};

/**
 * Verify all case studies have required elements
 * Requirements: 13.1, 13.2
 */
export const verifyCaseStudiesCompleteness = () => {
  const results = {
    passed: true,
    errors: [],
    warnings: [],
    summary: {}
  };

  // Required fields for each case study
  const requiredFields = [
    'id',
    'title',
    'client',
    'industry',
    'services',
    'challenge',
    'strategy',
    'execution',
    'outcomes'
  ];

  // Check we have at least 3 case studies
  if (caseStudies.length < 3) {
    results.warnings.push(`Only ${caseStudies.length} case studies found (recommended: 3+)`);
  }

  // Verify each case study
  caseStudies.forEach((caseStudy, index) => {
    const caseStudyErrors = [];

    // Check all required fields exist and are not empty
    requiredFields.forEach(field => {
      if (!caseStudy.hasOwnProperty(field)) {
        caseStudyErrors.push(`Missing field: ${field}`);
      } else if (Array.isArray(caseStudy[field])) {
        if (caseStudy[field].length === 0) {
          caseStudyErrors.push(`Empty array for field: ${field}`);
        }
      } else if (typeof caseStudy[field] === 'string') {
        if (!caseStudy[field].trim()) {
          caseStudyErrors.push(`Empty string for field: ${field}`);
        }
      } else if (!caseStudy[field]) {
        caseStudyErrors.push(`Empty value for field: ${field}`);
      }
    });

    // Check outcomes array has at least 2 metrics
    if (caseStudy.outcomes && caseStudy.outcomes.length < 2) {
      results.warnings.push(`Case study "${caseStudy.title}" has only ${caseStudy.outcomes.length} outcome (recommended: 2+)`);
    }

    // Verify each outcome has required fields
    if (caseStudy.outcomes) {
      caseStudy.outcomes.forEach((outcome, outcomeIndex) => {
        if (!outcome.metric || !outcome.result || !outcome.timeframe) {
          caseStudyErrors.push(`Outcome ${outcomeIndex + 1} missing required fields (metric, result, timeframe)`);
        }
      });
    }

    // Check challenge, strategy, execution have meaningful content (at least 50 chars)
    ['challenge', 'strategy', 'execution'].forEach(field => {
      if (caseStudy[field] && caseStudy[field].length < 50) {
        results.warnings.push(`Case study "${caseStudy.title}" has short ${field} (${caseStudy[field].length} chars)`);
      }
    });

    if (caseStudyErrors.length > 0) {
      results.passed = false;
      results.errors.push({
        caseStudy: caseStudy.title || `Case Study ${index + 1}`,
        errors: caseStudyErrors
      });
    }
  });

  results.summary.totalCaseStudies = caseStudies.length;
  results.summary.recommendedMinimum = 3;
  results.summary.caseStudiesComplete = results.errors.length === 0;

  return results;
};

/**
 * Verify CTAs are present on all pages
 * Requirements: 1.5, 18.1, 18.3
 */
export const verifyCTAPresence = () => {
  const results = {
    passed: true,
    errors: [],
    warnings: [],
    summary: {}
  };

  // Expected CTAs by page/component
  const expectedCTAs = {
    'AgencyHero': ['Schedule a Consultation', 'Explore Services'],
    'Services': ['Schedule a Consultation'],
    'ServiceCard': ['Request a Strategy Session', 'Develop Your Brand', 'Launch a Campaign', 'Strengthen Your Digital Presence', 'Book a Consultation'],
    'About': ['Schedule a Consultation'],
    'CaseStudies': ['Schedule a Consultation'],
    'Contact': ['Schedule a Discovery Call'],
    'ServiceDetail': ['Contact Us', 'Schedule a Consultation']
  };

  // Verify service CTAs match expected
  const serviceCTAs = agencyServices.map(s => s.cta);
  const expectedServiceCTAs = [
    'Request a Strategy Session',
    'Develop Your Brand',
    'Launch a Campaign',
    'Strengthen Your Digital Presence',
    'Book a Consultation'
  ];

  expectedServiceCTAs.forEach(expectedCTA => {
    if (!serviceCTAs.includes(expectedCTA)) {
      results.errors.push(`Missing expected service CTA: "${expectedCTA}"`);
      results.passed = false;
    }
  });

  // Check all services have CTAs
  agencyServices.forEach(service => {
    if (!service.cta || service.cta.trim().length === 0) {
      results.errors.push(`Service "${service.name}" missing CTA`);
      results.passed = false;
    }
  });

  results.summary.totalServiceCTAs = serviceCTAs.length;
  results.summary.expectedServiceCTAs = expectedServiceCTAs.length;
  results.summary.ctasComplete = results.errors.length === 0;

  return results;
};

/**
 * Verify supporting data structures
 */
export const verifySupportingData = () => {
  const results = {
    passed: true,
    errors: [],
    warnings: [],
    summary: {}
  };

  // Check differentiators
  if (differentiators.length < 3) {
    results.warnings.push(`Only ${differentiators.length} differentiators found (recommended: 3-4)`);
  }

  differentiators.forEach(diff => {
    if (!diff.id || !diff.title || !diff.description || !diff.icon || !diff.order) {
      results.errors.push(`Differentiator "${diff.title || 'Unknown'}" missing required fields`);
      results.passed = false;
    }
  });

  // Check industries
  if (industries.length < 5) {
    results.warnings.push(`Only ${industries.length} industries found (recommended: 5+)`);
  }

  industries.forEach(industry => {
    if (!industry.id || !industry.name || !industry.description || !industry.icon) {
      results.errors.push(`Industry "${industry.name || 'Unknown'}" missing required fields`);
      results.passed = false;
    }
  });

  results.summary.totalDifferentiators = differentiators.length;
  results.summary.totalIndustries = industries.length;
  results.summary.supportingDataComplete = results.errors.length === 0;

  return results;
};

/**
 * Run all verification checks
 */
export const verifyAllContent = () => {
  const servicesResults = verifyServicesCompleteness();
  const caseStudiesResults = verifyCaseStudiesCompleteness();
  const ctaResults = verifyCTAPresence();
  const supportingDataResults = verifySupportingData();

  const allResults = {
    passed: servicesResults.passed && caseStudiesResults.passed && ctaResults.passed && supportingDataResults.passed,
    services: servicesResults,
    caseStudies: caseStudiesResults,
    ctas: ctaResults,
    supportingData: supportingDataResults,
    summary: {
      totalErrors: 
        servicesResults.errors.length + 
        caseStudiesResults.errors.length + 
        ctaResults.errors.length + 
        supportingDataResults.errors.length,
      totalWarnings: 
        servicesResults.warnings.length + 
        caseStudiesResults.warnings.length + 
        ctaResults.warnings.length + 
        supportingDataResults.warnings.length
    }
  };

  return allResults;
};

/**
 * Format verification results for console output
 */
export const formatVerificationResults = (results) => {
  let output = '\n=== CONTENT VERIFICATION RESULTS ===\n\n';

  // Overall status
  output += `Overall Status: ${results.passed ? '✅ PASSED' : '❌ FAILED'}\n`;
  output += `Total Errors: ${results.summary.totalErrors}\n`;
  output += `Total Warnings: ${results.summary.totalWarnings}\n\n`;

  // Services
  output += '--- SERVICES ---\n';
  output += `Status: ${results.services.passed ? '✅ PASSED' : '❌ FAILED'}\n`;
  output += `Total Services: ${results.services.summary.totalServices}/${results.services.summary.expectedServices}\n`;
  if (results.services.errors.length > 0) {
    output += 'Errors:\n';
    results.services.errors.forEach(error => {
      if (typeof error === 'string') {
        output += `  - ${error}\n`;
      } else {
        output += `  - ${error.service}:\n`;
        error.errors.forEach(e => output += `    - ${e}\n`);
      }
    });
  }
  if (results.services.warnings.length > 0) {
    output += 'Warnings:\n';
    results.services.warnings.forEach(warning => output += `  - ${warning}\n`);
  }
  output += '\n';

  // Case Studies
  output += '--- CASE STUDIES ---\n';
  output += `Status: ${results.caseStudies.passed ? '✅ PASSED' : '❌ FAILED'}\n`;
  output += `Total Case Studies: ${results.caseStudies.summary.totalCaseStudies}\n`;
  if (results.caseStudies.errors.length > 0) {
    output += 'Errors:\n';
    results.caseStudies.errors.forEach(error => {
      if (typeof error === 'string') {
        output += `  - ${error}\n`;
      } else {
        output += `  - ${error.caseStudy}:\n`;
        error.errors.forEach(e => output += `    - ${e}\n`);
      }
    });
  }
  if (results.caseStudies.warnings.length > 0) {
    output += 'Warnings:\n';
    results.caseStudies.warnings.forEach(warning => output += `  - ${warning}\n`);
  }
  output += '\n';

  // CTAs
  output += '--- CTAs ---\n';
  output += `Status: ${results.ctas.passed ? '✅ PASSED' : '❌ FAILED'}\n`;
  output += `Service CTAs: ${results.ctas.summary.totalServiceCTAs}/${results.ctas.summary.expectedServiceCTAs}\n`;
  if (results.ctas.errors.length > 0) {
    output += 'Errors:\n';
    results.ctas.errors.forEach(error => output += `  - ${error}\n`);
  }
  if (results.ctas.warnings.length > 0) {
    output += 'Warnings:\n';
    results.ctas.warnings.forEach(warning => output += `  - ${warning}\n`);
  }
  output += '\n';

  // Supporting Data
  output += '--- SUPPORTING DATA ---\n';
  output += `Status: ${results.supportingData.passed ? '✅ PASSED' : '❌ FAILED'}\n`;
  output += `Differentiators: ${results.supportingData.summary.totalDifferentiators}\n`;
  output += `Industries: ${results.supportingData.summary.totalIndustries}\n`;
  if (results.supportingData.errors.length > 0) {
    output += 'Errors:\n';
    results.supportingData.errors.forEach(error => output += `  - ${error}\n`);
  }
  if (results.supportingData.warnings.length > 0) {
    output += 'Warnings:\n';
    results.supportingData.warnings.forEach(warning => output += `  - ${warning}\n`);
  }
  output += '\n';

  output += '=== END VERIFICATION ===\n';

  return output;
};

export default {
  verifyServicesCompleteness,
  verifyCaseStudiesCompleteness,
  verifyCTAPresence,
  verifySupportingData,
  verifyAllContent,
  formatVerificationResults
};
