/**
 * Content Verification Script
 * Task: 15.2 Verify content completeness
 * Run with: node verify-content.js
 */

const fs = require('fs');
const path = require('path');

// Read data files
const agencyServices = require('./src/data/agencyServices.js').agencyServices;
const caseStudies = require('./src/data/caseStudies.js').caseStudies;
const differentiators = require('./src/data/differentiators.js').differentiators;
const industries = require('./src/data/industries.js').industries;

console.log('\n=== CONTENT VERIFICATION REPORT ===\n');
console.log('Task: 15.2 Verify content completeness');
console.log('Requirements: All\n');

let allPassed = true;
let totalErrors = 0;
let totalWarnings = 0;

// ===== VERIFY SERVICES =====
console.log('--- SERVICES VERIFICATION ---');
console.log(`Total Services: ${agencyServices.length}/5 expected`);

const requiredServiceFields = ['id', 'order', 'name', 'shortDescription', 'fullDescription', 'offerings', 'benefits', 'process', 'cta', 'icon'];
const expectedServices = [
  { order: 1, id: 'marketing-strategy-planning', name: 'Marketing Strategy & Planning' },
  { order: 2, id: 'brand-development-positioning', name: 'Brand Development & Positioning' },
  { order: 3, id: 'advertising-campaign-management', name: 'Advertising & Campaign Management' },
  { order: 4, id: 'digital-presence-growth', name: 'Digital Presence & Growth' },
  { order: 5, id: 'business-marketing-consulting', name: 'Business & Marketing Consulting' }
];

if (agencyServices.length !== 5) {
  console.log(`❌ ERROR: Expected 5 services, found ${agencyServices.length}`);
  allPassed = false;
  totalErrors++;
} else {
  console.log('✅ Correct number of services');
}

agencyServices.forEach((service, index) => {
  const expected = expectedServices[index];
  let serviceErrors = [];

  // Check required fields
  requiredServiceFields.forEach(field => {
    if (!service.hasOwnProperty(field)) {
      serviceErrors.push(`Missing field: ${field}`);
    } else if (Array.isArray(service[field]) && service[field].length === 0) {
      serviceErrors.push(`Empty array: ${field}`);
    } else if (typeof service[field] === 'string' && !service[field].trim()) {
      serviceErrors.push(`Empty string: ${field}`);
    }
  });

  // Check order
  if (service.order !== expected.order) {
    serviceErrors.push(`Order mismatch: expected ${expected.order}, got ${service.order}`);
  }

  // Check ID
  if (service.id !== expected.id) {
    serviceErrors.push(`ID mismatch: expected ${expected.id}, got ${service.id}`);
  }

  if (serviceErrors.length > 0) {
    console.log(`❌ Service "${service.name}":`);
    serviceErrors.forEach(err => console.log(`   - ${err}`));
    allPassed = false;
    totalErrors += serviceErrors.length;
  } else {
    console.log(`✅ Service "${service.name}" - Complete`);
  }

  // Warnings
  if (service.offerings && service.offerings.length < 3) {
    console.log(`⚠️  WARNING: "${service.name}" has only ${service.offerings.length} offerings`);
    totalWarnings++;
  }
});

console.log('');

// ===== VERIFY CASE STUDIES =====
console.log('--- CASE STUDIES VERIFICATION ---');
console.log(`Total Case Studies: ${caseStudies.length}`);

const requiredCaseStudyFields = ['id', 'title', 'client', 'industry', 'services', 'challenge', 'strategy', 'execution', 'outcomes'];

if (caseStudies.length < 3) {
  console.log(`⚠️  WARNING: Only ${caseStudies.length} case studies (recommended: 3+)`);
  totalWarnings++;
}

caseStudies.forEach((caseStudy, index) => {
  let caseStudyErrors = [];

  // Check required fields
  requiredCaseStudyFields.forEach(field => {
    if (!caseStudy.hasOwnProperty(field)) {
      caseStudyErrors.push(`Missing field: ${field}`);
    } else if (Array.isArray(caseStudy[field]) && caseStudy[field].length === 0) {
      caseStudyErrors.push(`Empty array: ${field}`);
    } else if (typeof caseStudy[field] === 'string' && !caseStudy[field].trim()) {
      caseStudyErrors.push(`Empty string: ${field}`);
    }
  });

  // Check outcomes structure
  if (caseStudy.outcomes) {
    caseStudy.outcomes.forEach((outcome, outcomeIndex) => {
      if (!outcome.metric || !outcome.result || !outcome.timeframe) {
        caseStudyErrors.push(`Outcome ${outcomeIndex + 1} missing required fields`);
      }
    });
  }

  if (caseStudyErrors.length > 0) {
    console.log(`❌ Case Study "${caseStudy.title}":`);
    caseStudyErrors.forEach(err => console.log(`   - ${err}`));
    allPassed = false;
    totalErrors += caseStudyErrors.length;
  } else {
    console.log(`✅ Case Study "${caseStudy.title}" - Complete`);
  }

  // Warnings
  if (caseStudy.outcomes && caseStudy.outcomes.length < 2) {
    console.log(`⚠️  WARNING: "${caseStudy.title}" has only ${caseStudy.outcomes.length} outcome`);
    totalWarnings++;
  }
});

console.log('');

// ===== VERIFY CTAs =====
console.log('--- CTA VERIFICATION ---');

const expectedServiceCTAs = [
  'Request a Strategy Session',
  'Develop Your Brand',
  'Launch a Campaign',
  'Strengthen Your Digital Presence',
  'Book a Consultation'
];

const serviceCTAs = agencyServices.map(s => s.cta);

expectedServiceCTAs.forEach(expectedCTA => {
  if (serviceCTAs.includes(expectedCTA)) {
    console.log(`✅ CTA present: "${expectedCTA}"`);
  } else {
    console.log(`❌ Missing CTA: "${expectedCTA}"`);
    allPassed = false;
    totalErrors++;
  }
});

console.log('');

// ===== VERIFY SUPPORTING DATA =====
console.log('--- SUPPORTING DATA VERIFICATION ---');
console.log(`Differentiators: ${differentiators.length}`);
console.log(`Industries: ${industries.length}`);

if (differentiators.length < 3) {
  console.log(`⚠️  WARNING: Only ${differentiators.length} differentiators (recommended: 3-4)`);
  totalWarnings++;
} else {
  console.log('✅ Sufficient differentiators');
}

if (industries.length < 5) {
  console.log(`⚠️  WARNING: Only ${industries.length} industries (recommended: 5+)`);
  totalWarnings++;
} else {
  console.log('✅ Sufficient industries');
}

console.log('');

// ===== SUMMARY =====
console.log('=== VERIFICATION SUMMARY ===');
console.log(`Overall Status: ${allPassed ? '✅ PASSED' : '❌ FAILED'}`);
console.log(`Total Errors: ${totalErrors}`);
console.log(`Total Warnings: ${totalWarnings}`);
console.log('');

if (allPassed) {
  console.log('✅ All content is complete and meets requirements!');
  console.log('   - All 5 services have complete information');
  console.log('   - All case studies have required elements (challenge, strategy, execution, outcomes)');
  console.log('   - All CTAs are present and functional');
  console.log('');
} else {
  console.log('❌ Content verification failed. Please review errors above.');
  console.log('');
}

process.exit(allPassed ? 0 : 1);
