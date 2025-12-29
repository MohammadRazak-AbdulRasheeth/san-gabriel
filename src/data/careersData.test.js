import { careersData } from './careersData';

/**
 * Unit tests for careersData
 * Tests data structure completeness and content accuracy
 * Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 3.1, 3.2, 3.3
 */

describe('Careers Data Structure', () => {
  describe('Compensation Structure - Requirements 1.1, 1.2, 1.3, 1.4, 1.5', () => {
    test('compensation object exists with all required fields', () => {
      expect(careersData.compensation).toBeDefined();
      expect(careersData.compensation.rate).toBeDefined();
      expect(careersData.compensation.basis).toBeDefined();
      expect(careersData.compensation.cap).toBeDefined();
      expect(careersData.compensation.flexibility).toBeDefined();
      expect(careersData.compensation.disclaimer).toBeDefined();
    });

    test('commission rate is 10-15% (Requirement 1.1)', () => {
      expect(careersData.compensation.rate).toBe('10-15%');
    });

    test('commission basis states collected and paid revenue (Requirement 1.2)', () => {
      expect(careersData.compensation.basis).toBe('collected and paid revenue');
    });

    test('earnings cap states no cap on earnings (Requirement 1.3)', () => {
      expect(careersData.compensation.cap).toBe('No cap on earnings');
    });

    test('flexibility clause mentions case-by-case adjustment (Requirement 1.4)', () => {
      expect(careersData.compensation.flexibility).toContain('case-by-case');
    });

    test('disclaimer states commission-only with no guaranteed income (Requirement 1.5)', () => {
      expect(careersData.compensation.disclaimer).toContain('commission-only');
      expect(careersData.compensation.disclaimer).toContain('no guaranteed income');
    });
  });

  describe('Roles Structure - Requirements 2.1, 2.2', () => {
    test('roles array exists with exactly two roles', () => {
      expect(careersData.roles).toBeDefined();
      expect(Array.isArray(careersData.roles)).toBe(true);
      expect(careersData.roles).toHaveLength(2);
    });

    test('Inventory Acquisition role exists (Requirement 2.1)', () => {
      const inventoryRole = careersData.roles.find(r => r.id === 'inventory');
      expect(inventoryRole).toBeDefined();
      expect(inventoryRole.title).toBe('Inventory Acquisition Sales Partner');
      expect(inventoryRole.subtitle).toBe('Supply-Side Sales');
    });

    test('Advertising Sales role exists (Requirement 2.2)', () => {
      const advertisingRole = careersData.roles.find(r => r.id === 'advertising');
      expect(advertisingRole).toBeDefined();
      expect(advertisingRole.title).toBe('Advertising Sales Partner');
      expect(advertisingRole.subtitle).toBe('Demand-Side Sales');
    });

    test('each role has all required fields', () => {
      careersData.roles.forEach(role => {
        expect(role.id).toBeDefined();
        expect(role.title).toBeDefined();
        expect(role.subtitle).toBeDefined();
        expect(role.summary).toBeDefined();
        expect(role.pitchExamples).toBeDefined();
        expect(Array.isArray(role.pitchExamples)).toBe(true);
        expect(role.compensation).toBeDefined();
        expect(Array.isArray(role.compensation)).toBe(true);
        expect(role.idealCandidate).toBeDefined();
        expect(Array.isArray(role.idealCandidate)).toBe(true);
      });
    });

    test('Inventory role has responsibilities list', () => {
      const inventoryRole = careersData.roles.find(r => r.id === 'inventory');
      expect(inventoryRole.responsibilities).toBeDefined();
      expect(Array.isArray(inventoryRole.responsibilities)).toBe(true);
      expect(inventoryRole.responsibilities.length).toBeGreaterThan(0);
    });

    test('Advertising role has targetCustomers list', () => {
      const advertisingRole = careersData.roles.find(r => r.id === 'advertising');
      expect(advertisingRole.targetCustomers).toBeDefined();
      expect(Array.isArray(advertisingRole.targetCustomers)).toBe(true);
      expect(advertisingRole.targetCustomers.length).toBeGreaterThan(0);
    });
  });

  describe('Pitch Examples - Requirements 3.1, 3.2, 3.3', () => {
    test('Inventory role has correct pitch examples (Requirement 3.1)', () => {
      const inventoryRole = careersData.roles.find(r => r.id === 'inventory');
      const expectedPitches = [
        'Earn money from your window.',
        'Turn your truck into a paid billboard.',
        'No extra work. Just extra income.',
      ];
      
      expect(inventoryRole.pitchExamples).toHaveLength(3);
      expectedPitches.forEach(pitch => {
        expect(inventoryRole.pitchExamples).toContain(pitch);
      });
    });

    test('Advertising role has correct pitch examples (Requirement 3.2)', () => {
      const advertisingRole = careersData.roles.find(r => r.id === 'advertising');
      const expectedPitches = [
        'Advertise on real storefronts.',
        'Get your business seen on local trucks.',
        'Affordable alternatives to digital advertising.',
      ];
      
      expect(advertisingRole.pitchExamples).toHaveLength(3);
      expectedPitches.forEach(pitch => {
        expect(advertisingRole.pitchExamples).toContain(pitch);
      });
    });
  });

  describe('Hiring Advertisement', () => {
    test('hiringAd object exists with all required fields', () => {
      expect(careersData.hiringAd).toBeDefined();
      expect(careersData.hiringAd.title).toBeDefined();
      expect(careersData.hiringAd.description).toBeDefined();
      expect(careersData.hiringAd.responsibilities).toBeDefined();
      expect(careersData.hiringAd.benefits).toBeDefined();
    });

    test('hiringAd has correct title', () => {
      expect(careersData.hiringAd.title).toBe('Sales Partners Wanted – Commission Based');
    });

    test('hiringAd benefits include key items', () => {
      const benefits = careersData.hiringAd.benefits;
      expect(benefits.some(b => b.includes('10–15%'))).toBe(true);
      expect(benefits.some(b => b.includes('No cap'))).toBe(true);
      expect(benefits.some(b => b.includes('Training'))).toBe(true);
    });
  });

  describe('Application Form', () => {
    test('applicationForm object exists with all required fields', () => {
      expect(careersData.applicationForm).toBeDefined();
      expect(careersData.applicationForm.screeningQuestion).toBeDefined();
      expect(careersData.applicationForm.options).toBeDefined();
    });

    test('screening question is correct', () => {
      expect(careersData.applicationForm.screeningQuestion).toBe('Which best describes you?');
    });

    test('application form has exactly two options', () => {
      expect(careersData.applicationForm.options).toHaveLength(2);
    });

    test('options have correct values and labels', () => {
      const options = careersData.applicationForm.options;
      
      const inventoryOption = options.find(o => o.value === 'inventory');
      expect(inventoryOption).toBeDefined();
      expect(inventoryOption.label).toContain('onboarding businesses or truckers');
      
      const advertisingOption = options.find(o => o.value === 'advertising');
      expect(advertisingOption).toBeDefined();
      expect(advertisingOption.label).toContain('selling advertising');
    });
  });
});
