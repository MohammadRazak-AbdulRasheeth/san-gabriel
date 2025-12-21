/**
 * Content Verification Tests
 * Task: 15.2 Verify content completeness
 */

import {
  verifyServicesCompleteness,
  verifyCaseStudiesCompleteness,
  verifyCTAPresence,
  verifySupportingData,
  verifyAllContent,
  formatVerificationResults
} from './contentVerification';

describe('Content Verification - Task 15.2', () => {
  describe('Services Completeness', () => {
    it('should verify all 5 services exist', () => {
      const results = verifyServicesCompleteness();
      expect(results.summary.totalServices).toBe(5);
    });

    it('should verify all services have required fields', () => {
      const results = verifyServicesCompleteness();
      expect(results.passed).toBe(true);
      expect(results.errors).toHaveLength(0);
    });

    it('should verify services are in correct order', () => {
      const results = verifyServicesCompleteness();
      const orderErrors = results.errors.filter(e => 
        typeof e === 'object' && e.errors?.some(err => err.includes('Order mismatch'))
      );
      expect(orderErrors).toHaveLength(0);
    });

    it('should verify all services have CTAs', () => {
      const results = verifyServicesCompleteness();
      const ctaErrors = results.errors.filter(e => 
        typeof e === 'object' && e.errors?.some(err => err.includes('cta'))
      );
      expect(ctaErrors).toHaveLength(0);
    });
  });

  describe('Case Studies Completeness', () => {
    it('should verify case studies have required elements', () => {
      const results = verifyCaseStudiesCompleteness();
      expect(results.passed).toBe(true);
      expect(results.errors).toHaveLength(0);
    });

    it('should verify each case study has challenge, strategy, execution, outcomes', () => {
      const results = verifyCaseStudiesCompleteness();
      const structureErrors = results.errors.filter(e => 
        typeof e === 'object' && e.errors?.some(err => 
          err.includes('challenge') || 
          err.includes('strategy') || 
          err.includes('execution') || 
          err.includes('outcomes')
        )
      );
      expect(structureErrors).toHaveLength(0);
    });

    it('should verify outcomes have metric, result, and timeframe', () => {
      const results = verifyCaseStudiesCompleteness();
      const outcomeErrors = results.errors.filter(e => 
        typeof e === 'object' && e.errors?.some(err => err.includes('Outcome'))
      );
      expect(outcomeErrors).toHaveLength(0);
    });
  });

  describe('CTA Presence', () => {
    it('should verify all services have CTAs', () => {
      const results = verifyCTAPresence();
      expect(results.passed).toBe(true);
    });

    it('should verify expected service CTAs are present', () => {
      const results = verifyCTAPresence();
      const missingCTAs = results.errors.filter(e => e.includes('Missing expected service CTA'));
      expect(missingCTAs).toHaveLength(0);
    });

    it('should verify CTA count matches expected', () => {
      const results = verifyCTAPresence();
      expect(results.summary.totalServiceCTAs).toBe(results.summary.expectedServiceCTAs);
    });
  });

  describe('Supporting Data', () => {
    it('should verify differentiators are complete', () => {
      const results = verifySupportingData();
      const diffErrors = results.errors.filter(e => e.includes('Differentiator'));
      expect(diffErrors).toHaveLength(0);
    });

    it('should verify industries are complete', () => {
      const results = verifySupportingData();
      const industryErrors = results.errors.filter(e => e.includes('Industry'));
      expect(industryErrors).toHaveLength(0);
    });

    it('should have at least 3 differentiators', () => {
      const results = verifySupportingData();
      expect(results.summary.totalDifferentiators).toBeGreaterThanOrEqual(3);
    });

    it('should have at least 5 industries', () => {
      const results = verifySupportingData();
      expect(results.summary.totalIndustries).toBeGreaterThanOrEqual(5);
    });
  });

  describe('Overall Verification', () => {
    it('should pass all verification checks', () => {
      const results = verifyAllContent();
      expect(results.passed).toBe(true);
    });

    it('should have no critical errors', () => {
      const results = verifyAllContent();
      expect(results.summary.totalErrors).toBe(0);
    });

    it('should format results correctly', () => {
      const results = verifyAllContent();
      const formatted = formatVerificationResults(results);
      expect(formatted).toContain('CONTENT VERIFICATION RESULTS');
      expect(formatted).toContain('SERVICES');
      expect(formatted).toContain('CASE STUDIES');
      expect(formatted).toContain('CTAs');
    });
  });
});
