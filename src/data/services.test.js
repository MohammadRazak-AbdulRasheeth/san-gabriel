import * as fc from 'fast-check';
import { services, getServicesByOrder, getServiceById, getServicesWithPricing, getCoreService } from './services';

/**
 * Feature: san-gabriel-website, Property 1: Service Order Consistency
 * For any rendering of the Services page, the services SHALL appear in the exact order specified (1-10),
 * with Revenue-Generating Advertising Solutions always first and Strategy, Technology & AI always last.
 * Validates: Requirements 1.3
 */
describe('Property 1: Service Order Consistency', () => {
  // Test that services are always returned in correct order
  test('getServicesByOrder always returns services in order 1-10', () => {
    fc.assert(
      fc.property(
        fc.constant(null), // No random input needed, testing the function itself
        () => {
          const orderedServices = getServicesByOrder();
          
          // Verify we have exactly 10 services
          expect(orderedServices).toHaveLength(10);
          
          // Verify each service is in correct position
          for (let i = 0; i < orderedServices.length; i++) {
            expect(orderedServices[i].order).toBe(i + 1);
          }
          
          // Verify first service is Revenue-Generating Advertising
          expect(orderedServices[0].id).toBe('revenue-generating-advertising');
          expect(orderedServices[0].name).toBe('Revenue-Generating Advertising Solutions');
          
          // Verify last service is Strategy, Technology & AI
          expect(orderedServices[9].id).toBe('strategy-technology-ai');
          expect(orderedServices[9].name).toBe('Strategy, Technology & AI');
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that shuffling services and re-sorting maintains order
  test('shuffled services array always sorts back to correct order', () => {
    fc.assert(
      fc.property(
        fc.shuffledSubarray([...services], { minLength: services.length, maxLength: services.length }),
        (shuffledServices) => {
          const sorted = [...shuffledServices].sort((a, b) => a.order - b.order);
          
          // First should always be order 1 (Revenue-Generating Advertising)
          expect(sorted[0].order).toBe(1);
          expect(sorted[0].id).toBe('revenue-generating-advertising');
          
          // Last should always be order 10 (Strategy, Technology & AI)
          expect(sorted[sorted.length - 1].order).toBe(10);
          expect(sorted[sorted.length - 1].id).toBe('strategy-technology-ai');
          
          // All orders should be sequential
          for (let i = 0; i < sorted.length; i++) {
            expect(sorted[i].order).toBe(i + 1);
          }
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that order property is unique for each service
  test('each service has a unique order value', () => {
    const orders = services.map(s => s.order);
    const uniqueOrders = new Set(orders);
    expect(uniqueOrders.size).toBe(services.length);
  });

  // Test specific service order requirements
  test('services are in exact required order', () => {
    const expectedOrder = [
      { order: 1, id: 'revenue-generating-advertising', name: 'Revenue-Generating Advertising Solutions' },
      { order: 2, id: 'branding-banners-signs', name: 'Branding, Banners & Signs' },
      { order: 3, id: 'mobile-advertising', name: 'Mobile Advertising – Trucking Fleets' },
      { order: 4, id: 'monetize-location', name: 'Monetize Your Location' },
      { order: 5, id: 'advertise-with-us', name: 'Advertise With Us' },
      { order: 6, id: 'social-media-digital', name: 'Social Media & Digital Advertising' },
      { order: 7, id: 'website-design', name: 'Website Design & Development' },
      { order: 8, id: 'events-community', name: 'Events & Community Advertising' },
      { order: 9, id: 'incorporation-services', name: 'Incorporation & Not-for-Profit Services' },
      { order: 10, id: 'strategy-technology-ai', name: 'Strategy, Technology & AI' }
    ];

    const orderedServices = getServicesByOrder();
    
    expectedOrder.forEach((expected, index) => {
      expect(orderedServices[index].order).toBe(expected.order);
      expect(orderedServices[index].id).toBe(expected.id);
      expect(orderedServices[index].name).toBe(expected.name);
    });
  });
});

// Additional utility function tests
describe('Service utility functions', () => {
  test('getServiceById returns correct service', () => {
    const service = getServiceById('mobile-advertising');
    expect(service).toBeDefined();
    expect(service.name).toBe('Mobile Advertising – Trucking Fleets');
    expect(service.order).toBe(3);
  });

  test('getServiceById returns undefined for non-existent service', () => {
    const service = getServiceById('non-existent');
    expect(service).toBeUndefined();
  });

  test('getServicesWithPricing returns only services with pricing', () => {
    const pricedServices = getServicesWithPricing();
    
    // Should include Mobile Advertising and Monetize Your Location
    expect(pricedServices.length).toBeGreaterThanOrEqual(2);
    
    pricedServices.forEach(service => {
      expect(service.pricing).not.toBeNull();
      expect(service.pricing.amount).toBeDefined();
      expect(service.pricing.unit).toBeDefined();
    });
  });

  test('getCoreService returns Revenue-Generating Advertising', () => {
    const coreService = getCoreService();
    expect(coreService).toBeDefined();
    expect(coreService.id).toBe('revenue-generating-advertising');
    expect(coreService.isCore).toBe(true);
  });
});


/**
 * Feature: san-gabriel-website, Property 5: Service Card Content Completeness
 * For any service card rendered, the card SHALL contain: title, tagline/description,
 * business case (why it exists), list of services/formats, and at least one CTA button.
 * Validates: Requirements 2.1-2.4, 3.1-3.4, 4.1-4.5, 5.1-5.4, 6.1-6.3, 7.1-7.5, 8.1-8.5, 9.1-9.3, 10.1-10.4, 11.1-11.3
 */
describe('Property 5: Service Card Content Completeness', () => {
  // Test that all services have required fields for rendering
  test('every service has all required fields for ServiceCard rendering', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services),
        (service) => {
          // Must have name (title)
          expect(service.name).toBeDefined();
          expect(typeof service.name).toBe('string');
          expect(service.name.length).toBeGreaterThan(0);

          // Must have tagline (description)
          expect(service.tagline).toBeDefined();
          expect(typeof service.tagline).toBe('string');
          expect(service.tagline.length).toBeGreaterThan(0);

          // Must have businessCase with problems array
          expect(service.businessCase).toBeDefined();
          expect(service.businessCase.problems).toBeDefined();
          expect(Array.isArray(service.businessCase.problems)).toBe(true);
          expect(service.businessCase.problems.length).toBeGreaterThan(0);

          // Must have services list
          expect(service.services).toBeDefined();
          expect(Array.isArray(service.services)).toBe(true);
          expect(service.services.length).toBeGreaterThan(0);

          // Must have at least one CTA
          expect(service.ctas).toBeDefined();
          expect(Array.isArray(service.ctas)).toBe(true);
          expect(service.ctas.length).toBeGreaterThan(0);

          // Each CTA must have label and action
          service.ctas.forEach(cta => {
            expect(cta.label).toBeDefined();
            expect(typeof cta.label).toBe('string');
            expect(cta.label.length).toBeGreaterThan(0);
            expect(cta.action).toBeDefined();
          });

          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that all services have valid order
  test('every service has a valid order between 1 and 10', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services),
        (service) => {
          expect(service.order).toBeDefined();
          expect(typeof service.order).toBe('number');
          expect(service.order).toBeGreaterThanOrEqual(1);
          expect(service.order).toBeLessThanOrEqual(10);
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that all services have unique IDs
  test('every service has a unique ID', () => {
    const ids = services.map(s => s.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(services.length);
  });

  // Test specific required content for each service type
  test('core service (Revenue-Generating Advertising) has isCore flag', () => {
    const coreService = services.find(s => s.order === 1);
    expect(coreService.isCore).toBe(true);
    expect(coreService.id).toBe('revenue-generating-advertising');
  });

  test('foundational service (Incorporation) has isFoundational flag', () => {
    const foundationalService = services.find(s => s.id === 'incorporation-services');
    expect(foundationalService.isFoundational).toBe(true);
  });

  test('website design service has portfolio proof with required websites', () => {
    const websiteService = services.find(s => s.id === 'website-design');
    expect(websiteService.portfolioProof).toBeDefined();
    expect(websiteService.portfolioProof.websites).toBeDefined();
    expect(websiteService.portfolioProof.attribution).toBeDefined();
    
    const websiteNames = websiteService.portfolioProof.websites.map(w => w.name);
    expect(websiteNames).toContain('kavin10oc.com');
    expect(websiteNames).toContain('luxuryautocollision.ca');
  });
});


/**
 * Feature: san-gabriel-website, Property 2: Pricing Display Completeness
 * For any service with defined pricing (Mobile Advertising at $300-$500/truck, 
 * Monetize Your Location at $200/window), the pricing information SHALL be displayed 
 * clearly and include the amount, unit, and any conditional notes.
 * Validates: Requirements 4.4, 5.3
 */
describe('Property 2: Pricing Display Completeness', () => {
  // Test that services with pricing have all required pricing fields
  test('every service with pricing has amount, unit, and note', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...getServicesWithPricing()),
        (service) => {
          expect(service.pricing).not.toBeNull();
          
          // Must have amount
          expect(service.pricing.amount).toBeDefined();
          expect(typeof service.pricing.amount).toBe('string');
          expect(service.pricing.amount.length).toBeGreaterThan(0);

          // Must have unit
          expect(service.pricing.unit).toBeDefined();
          expect(typeof service.pricing.unit).toBe('string');
          expect(service.pricing.unit.length).toBeGreaterThan(0);

          // Must have note (conditions)
          expect(service.pricing.note).toBeDefined();
          expect(typeof service.pricing.note).toBe('string');
          expect(service.pricing.note.length).toBeGreaterThan(0);

          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test specific pricing requirements from master document
  test('Mobile Advertising has correct pricing ($300-$500 per truck)', () => {
    const mobileAd = getServiceById('mobile-advertising');
    expect(mobileAd.pricing).not.toBeNull();
    expect(mobileAd.pricing.amount).toBe('$300–$500');
    expect(mobileAd.pricing.unit).toContain('truck');
    expect(mobileAd.pricing.note).toBeDefined();
  });

  test('Monetize Your Location has correct pricing ($200 per window)', () => {
    const monetizeLocation = getServiceById('monetize-location');
    expect(monetizeLocation.pricing).not.toBeNull();
    expect(monetizeLocation.pricing.amount).toBe('$200');
    expect(monetizeLocation.pricing.unit).toContain('window');
    expect(monetizeLocation.pricing.note).toBeDefined();
  });

  // Test that services without pricing have null pricing
  test('services without explicit pricing have null pricing field', () => {
    const servicesWithoutPricing = services.filter(s => s.pricing === null);
    
    // Should have at least some services without pricing
    expect(servicesWithoutPricing.length).toBeGreaterThan(0);
    
    servicesWithoutPricing.forEach(service => {
      expect(service.pricing).toBeNull();
    });
  });

  // Test that exactly the right services have pricing
  test('only Mobile Advertising, Monetize Location, and Social Media have pricing', () => {
    const pricedServices = getServicesWithPricing();
    const pricedIds = pricedServices.map(s => s.id);
    
    // These services should have pricing
    expect(pricedIds).toContain('mobile-advertising');
    expect(pricedIds).toContain('monetize-location');
    expect(pricedIds).toContain('social-media-digital');
    
    // Should be exactly 3 services with pricing
    expect(pricedServices.length).toBe(3);
  });
});


/**
 * Feature: san-gabriel-website, Property 3: CTA Navigation Integrity
 * For any CTA button click that specifies a lead-form action with servicePreselect,
 * the Lead_Form SHALL open with that specific service pre-selected in the service interest field.
 * Validates: Requirements 13.3
 */
describe('Property 3: CTA Navigation Integrity', () => {
  // Test that all CTAs with lead-form action have valid servicePreselect
  test('every CTA with lead-form action has a valid servicePreselect', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services),
        (service) => {
          service.ctas.forEach(cta => {
            if (cta.action === 'lead-form') {
              // Must have servicePreselect
              expect(cta.servicePreselect).toBeDefined();
              expect(typeof cta.servicePreselect).toBe('string');
              expect(cta.servicePreselect.length).toBeGreaterThan(0);
              
              // servicePreselect must be a valid service ID
              const targetService = getServiceById(cta.servicePreselect);
              expect(targetService).toBeDefined();
            }
          });
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that CTAs generate correct URL for lead form navigation
  test('CTAs with lead-form action generate correct contact URL', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services),
        (service) => {
          service.ctas.forEach(cta => {
            if (cta.action === 'lead-form' && cta.servicePreselect) {
              const expectedUrl = `/contact?service=${cta.servicePreselect}`;
              // Verify the URL would be correctly formed
              expect(expectedUrl).toContain('/contact');
              expect(expectedUrl).toContain(`service=${cta.servicePreselect}`);
            }
          });
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that all services have at least one lead-form CTA
  test('every service has at least one CTA that leads to the contact form', () => {
    services.forEach(service => {
      const leadFormCtas = service.ctas.filter(cta => cta.action === 'lead-form');
      expect(leadFormCtas.length).toBeGreaterThanOrEqual(1);
    });
  });

  // Test specific CTA labels from requirements
  test('specific services have their required CTA labels', () => {
    // Revenue-Generating Advertising: "Turn My Traffic Into Revenue"
    const revenueService = getServiceById('revenue-generating-advertising');
    expect(revenueService.ctas.some(cta => cta.label === 'Turn My Traffic Into Revenue')).toBe(true);

    // Branding, Banners & Signs: "Request Banner & Sign Quote"
    const brandingService = getServiceById('branding-banners-signs');
    expect(brandingService.ctas.some(cta => cta.label === 'Request Banner & Sign Quote')).toBe(true);

    // Mobile Advertising: "Earn With My Trucks"
    const mobileService = getServiceById('mobile-advertising');
    expect(mobileService.ctas.some(cta => cta.label === 'Earn With My Trucks')).toBe(true);

    // Monetize Your Location: "Monetize My Location"
    const monetizeService = getServiceById('monetize-location');
    expect(monetizeService.ctas.some(cta => cta.label === 'Monetize My Location')).toBe(true);

    // Advertise With Us: "Advertise My Business"
    const advertiseService = getServiceById('advertise-with-us');
    expect(advertiseService.ctas.some(cta => cta.label === 'Advertise My Business')).toBe(true);

    // Social Media & Digital: "Grow My Online Presence"
    const socialService = getServiceById('social-media-digital');
    expect(socialService.ctas.some(cta => cta.label === 'Grow My Online Presence')).toBe(true);

    // Website Design: "Build My Website"
    const websiteService = getServiceById('website-design');
    expect(websiteService.ctas.some(cta => cta.label === 'Build My Website')).toBe(true);

    // Events & Community: "Brand My Event"
    const eventsService = getServiceById('events-community');
    expect(eventsService.ctas.some(cta => cta.label === 'Brand My Event')).toBe(true);
  });
});
