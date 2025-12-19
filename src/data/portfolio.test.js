import * as fc from 'fast-check';
import { 
  portfolioItems, 
  portfolioCategories,
  getPortfolioByCategory, 
  getWebsitePortfolio, 
  hasRequiredWebsites,
  WEBSITE_ATTRIBUTION 
} from './portfolio';

/**
 * Feature: san-gabriel-website, Property 4: Portfolio Website Attribution
 * For any display of website portfolio items (kavin10oc.com, luxuryautocollision.ca),
 * the display SHALL include the attribution text "Websites built and launched by San Gabriel Solutions".
 * Validates: Requirements 8.4, 12.3
 */
describe('Property 4: Portfolio Website Attribution', () => {
  // Test that all website portfolio items have the required attribution
  test('every website portfolio item has the required attribution text', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...getWebsitePortfolio()),
        (websiteItem) => {
          // Must have attribution field
          expect(websiteItem.attribution).toBeDefined();
          expect(typeof websiteItem.attribution).toBe('string');
          
          // Attribution must match the required text
          expect(websiteItem.attribution).toBe(WEBSITE_ATTRIBUTION);
          expect(websiteItem.attribution).toBe('Websites built and launched by San Gabriel Solutions');
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that required websites are present in portfolio
  test('portfolio contains both required websites (kavin10oc.com and luxuryautocollision.ca)', () => {
    fc.assert(
      fc.property(
        fc.constant(null),
        () => {
          const websites = getWebsitePortfolio();
          
          // Must have at least 2 websites
          expect(websites.length).toBeGreaterThanOrEqual(2);
          
          // Must include kavin10oc.com
          const hasKavin = websites.some(w => w.title === 'kavin10oc.com');
          expect(hasKavin).toBe(true);
          
          // Must include luxuryautocollision.ca
          const hasLuxury = websites.some(w => w.title === 'luxuryautocollision.ca');
          expect(hasLuxury).toBe(true);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that hasRequiredWebsites utility function works correctly
  test('hasRequiredWebsites returns true when both required websites are present', () => {
    expect(hasRequiredWebsites()).toBe(true);
  });

  // Test that website items have valid URLs
  test('every website portfolio item has a valid URL', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...getWebsitePortfolio()),
        (websiteItem) => {
          // Must have url field
          expect(websiteItem.url).toBeDefined();
          expect(typeof websiteItem.url).toBe('string');
          expect(websiteItem.url.length).toBeGreaterThan(0);
          
          // URL should start with https://
          expect(websiteItem.url.startsWith('https://')).toBe(true);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test specific required website details
  test('kavin10oc.com has correct attribution and URL', () => {
    const kavin = portfolioItems.find(item => item.title === 'kavin10oc.com');
    
    expect(kavin).toBeDefined();
    expect(kavin.type).toBe('websites');
    expect(kavin.url).toBe('https://kavin10oc.com');
    expect(kavin.attribution).toBe('Websites built and launched by San Gabriel Solutions');
    expect(kavin.relatedServices).toContain('website-design');
  });

  test('luxuryautocollision.ca has correct attribution and URL', () => {
    const luxury = portfolioItems.find(item => item.title === 'luxuryautocollision.ca');
    
    expect(luxury).toBeDefined();
    expect(luxury.type).toBe('websites');
    expect(luxury.url).toBe('https://luxuryautocollision.ca');
    expect(luxury.attribution).toBe('Websites built and launched by San Gabriel Solutions');
    expect(luxury.relatedServices).toContain('website-design');
  });
});

// Additional portfolio utility tests
describe('Portfolio utility functions', () => {
  test('getPortfolioByCategory returns all items for "all" category', () => {
    const allItems = getPortfolioByCategory('all');
    expect(allItems).toEqual(portfolioItems);
    expect(allItems.length).toBe(portfolioItems.length);
  });

  test('getPortfolioByCategory filters correctly by category', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...portfolioCategories.filter(c => c.id !== 'all')),
        (category) => {
          const filtered = getPortfolioByCategory(category.id);
          
          // All returned items should match the category
          filtered.forEach(item => {
            expect(item.type).toBe(category.id);
          });
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  test('all portfolio items have required fields', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...portfolioItems),
        (item) => {
          // Required fields
          expect(item.id).toBeDefined();
          expect(item.type).toBeDefined();
          expect(item.title).toBeDefined();
          expect(item.description).toBeDefined();
          expect(item.imageUrl).toBeDefined();
          expect(item.featured).toBeDefined();
          expect(item.relatedServices).toBeDefined();
          
          // Type checks
          expect(typeof item.id).toBe('string');
          expect(typeof item.type).toBe('string');
          expect(typeof item.title).toBe('string');
          expect(typeof item.description).toBe('string');
          expect(typeof item.imageUrl).toBe('string');
          expect(typeof item.featured).toBe('boolean');
          expect(Array.isArray(item.relatedServices)).toBe(true);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  test('portfolio categories include all required types', () => {
    const categoryIds = portfolioCategories.map(c => c.id);
    
    expect(categoryIds).toContain('all');
    expect(categoryIds).toContain('windows');
    expect(categoryIds).toContain('trucks');
    expect(categoryIds).toContain('banners');
    expect(categoryIds).toContain('websites');
    expect(categoryIds).toContain('events');
  });

  test('each portfolio item type has a corresponding category', () => {
    const categoryIds = portfolioCategories.map(c => c.id).filter(id => id !== 'all');
    
    portfolioItems.forEach(item => {
      expect(categoryIds).toContain(item.type);
    });
  });
});
