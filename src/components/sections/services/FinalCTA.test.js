import * as fc from 'fast-check';
import { finalCTAConfig } from './FinalCTA';
import { getServiceById } from '../../../data/services';

/**
 * Feature: san-gabriel-website, Property 6: Final CTA Section Presence
 * For any complete render of the Services page, the bottom of the page SHALL display
 * the final CTA section with headline "Turn Visibility Into Revenue" and exactly three
 * CTA options: "Monetize My Location", "Advertise My Business", "Earn With My Trucks".
 * Validates: Requirements 13.1, 13.2
 */
describe('Property 6: Final CTA Section Presence', () => {
  // Test that the headline is exactly as required
  test('FinalCTA has correct headline "Turn Visibility Into Revenue"', () => {
    fc.assert(
      fc.property(
        fc.constant(null),
        () => {
          expect(finalCTAConfig.headline).toBe('Turn Visibility Into Revenue');
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that exactly three CTAs are present
  test('FinalCTA has exactly three CTA buttons', () => {
    fc.assert(
      fc.property(
        fc.constant(null),
        () => {
          expect(finalCTAConfig.ctas).toBeDefined();
          expect(Array.isArray(finalCTAConfig.ctas)).toBe(true);
          expect(finalCTAConfig.ctas.length).toBe(3);
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that the three required CTA labels are present
  test('FinalCTA has the three required CTA labels', () => {
    fc.assert(
      fc.property(
        fc.constant(null),
        () => {
          const labels = finalCTAConfig.ctas.map(cta => cta.label);
          
          expect(labels).toContain('Monetize My Location');
          expect(labels).toContain('Advertise My Business');
          expect(labels).toContain('Earn With My Trucks');
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that CTAs are in the correct order
  test('FinalCTA buttons are in correct order', () => {
    fc.assert(
      fc.property(
        fc.constant(null),
        () => {
          expect(finalCTAConfig.ctas[0].label).toBe('Monetize My Location');
          expect(finalCTAConfig.ctas[1].label).toBe('Advertise My Business');
          expect(finalCTAConfig.ctas[2].label).toBe('Earn With My Trucks');
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that each CTA has a valid servicePreselect that maps to a real service
  test('each FinalCTA button has a valid servicePreselect', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...finalCTAConfig.ctas),
        (cta) => {
          expect(cta.servicePreselect).toBeDefined();
          expect(typeof cta.servicePreselect).toBe('string');
          expect(cta.servicePreselect.length).toBeGreaterThan(0);
          
          // Verify the servicePreselect maps to a real service
          const service = getServiceById(cta.servicePreselect);
          expect(service).toBeDefined();
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test specific service preselections for each CTA
  test('FinalCTA buttons have correct service preselections', () => {
    fc.assert(
      fc.property(
        fc.constant(null),
        () => {
          // "Monetize My Location" should preselect monetize-location service
          const monetizeCta = finalCTAConfig.ctas.find(cta => cta.label === 'Monetize My Location');
          expect(monetizeCta.servicePreselect).toBe('monetize-location');
          
          // "Advertise My Business" should preselect advertise-with-us service
          const advertiseCta = finalCTAConfig.ctas.find(cta => cta.label === 'Advertise My Business');
          expect(advertiseCta.servicePreselect).toBe('advertise-with-us');
          
          // "Earn With My Trucks" should preselect mobile-advertising service
          const trucksCta = finalCTAConfig.ctas.find(cta => cta.label === 'Earn With My Trucks');
          expect(trucksCta.servicePreselect).toBe('mobile-advertising');
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that the first CTA is marked as primary
  test('first FinalCTA button is marked as primary', () => {
    fc.assert(
      fc.property(
        fc.constant(null),
        () => {
          expect(finalCTAConfig.ctas[0].primary).toBe(true);
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that the config has a description
  test('FinalCTA has a description', () => {
    fc.assert(
      fc.property(
        fc.constant(null),
        () => {
          expect(finalCTAConfig.description).toBeDefined();
          expect(typeof finalCTAConfig.description).toBe('string');
          expect(finalCTAConfig.description.length).toBeGreaterThan(0);
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});
