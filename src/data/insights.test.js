import * as fc from 'fast-check';
import { 
  insights, 
  validCategoryIds, 
  insightCategories,
  isValidInsightCategory,
  getInsightsByCategory,
  getInsightBySlug,
  getInsightsByDate,
  getRelatedInsights,
  getCategoryLabel
} from './insights';

/**
 * Feature: san-gabriel-pages, Property 8: Insight Category Classification
 * For any insight article in the system, it SHALL be categorized as one of: 
 * marketing-strategy, industry-trends, or business-growth.
 * Validates: Requirements 5.2
 */
describe('Property 8: Insight Category Classification', () => {
  // Test that all insights have a valid category
  test('every insight has a valid category (marketing-strategy, industry-trends, or business-growth)', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...insights),
        (insight) => {
          // Category must be defined
          expect(insight.category).toBeDefined();
          expect(typeof insight.category).toBe('string');
          
          // Category must be one of the valid categories
          expect(validCategoryIds).toContain(insight.category);
          
          // Verify using the validation function
          expect(isValidInsightCategory(insight)).toBe(true);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that validCategoryIds contains exactly the required categories
  test('validCategoryIds contains exactly the three required categories', () => {
    expect(validCategoryIds).toHaveLength(3);
    expect(validCategoryIds).toContain('marketing-strategy');
    expect(validCategoryIds).toContain('industry-trends');
    expect(validCategoryIds).toContain('business-growth');
  });

  // Test that insightCategories includes all valid categories plus 'all'
  test('insightCategories includes all valid categories plus "all" filter option', () => {
    const categoryIds = insightCategories.map(cat => cat.id);
    
    expect(categoryIds).toContain('all');
    expect(categoryIds).toContain('marketing-strategy');
    expect(categoryIds).toContain('industry-trends');
    expect(categoryIds).toContain('business-growth');
    expect(insightCategories).toHaveLength(4);
  });

  // Test that filtering by category returns only insights with that category
  test('getInsightsByCategory returns only insights matching the specified category', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...validCategoryIds),
        (category) => {
          const filteredInsights = getInsightsByCategory(category);
          
          // All returned insights must have the specified category
          filteredInsights.forEach(insight => {
            expect(insight.category).toBe(category);
          });
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that 'all' category returns all insights
  test('getInsightsByCategory with "all" returns all insights', () => {
    const allInsights = getInsightsByCategory('all');
    expect(allInsights).toHaveLength(insights.length);
  });

  // Test that each category has at least one insight
  test('each valid category has at least one insight', () => {
    validCategoryIds.forEach(category => {
      const categoryInsights = getInsightsByCategory(category);
      expect(categoryInsights.length).toBeGreaterThan(0);
    });
  });

  // Test that isValidInsightCategory correctly validates categories
  test('isValidInsightCategory returns false for invalid categories', () => {
    const invalidInsight = { category: 'invalid-category' };
    expect(isValidInsightCategory(invalidInsight)).toBe(false);
    
    const emptyInsight = { category: '' };
    expect(isValidInsightCategory(emptyInsight)).toBe(false);
    
    const undefinedInsight = {};
    expect(isValidInsightCategory(undefinedInsight)).toBe(false);
  });

  // Test getCategoryLabel returns correct labels
  test('getCategoryLabel returns correct label for each category', () => {
    expect(getCategoryLabel('marketing-strategy')).toBe('Marketing Strategy');
    expect(getCategoryLabel('industry-trends')).toBe('Industry Trends');
    expect(getCategoryLabel('business-growth')).toBe('Business Growth');
    expect(getCategoryLabel('all')).toBe('All Insights');
    expect(getCategoryLabel('invalid')).toBe('');
  });
});

// Additional utility function tests for insights
describe('Insight utility functions', () => {
  test('getInsightsByDate returns insights sorted by date (newest first)', () => {
    const sortedInsights = getInsightsByDate();
    
    for (let i = 0; i < sortedInsights.length - 1; i++) {
      const currentDate = new Date(sortedInsights[i].publishedDate);
      const nextDate = new Date(sortedInsights[i + 1].publishedDate);
      expect(currentDate.getTime()).toBeGreaterThanOrEqual(nextDate.getTime());
    }
  });

  test('getInsightBySlug returns correct insight', () => {
    const insight = getInsightBySlug('strategic-marketing-planning-framework');
    expect(insight).toBeDefined();
    expect(insight.title).toBe('Building a Strategic Marketing Planning Framework That Drives Results');
    expect(insight.category).toBe('marketing-strategy');
  });

  test('getInsightBySlug returns undefined for non-existent slug', () => {
    const insight = getInsightBySlug('non-existent-slug');
    expect(insight).toBeUndefined();
  });

  test('getRelatedInsights returns insights from same category excluding current', () => {
    const relatedInsights = getRelatedInsights('strategic-marketing-planning-framework');
    
    // Should not include the current insight
    expect(relatedInsights.every(i => i.slug !== 'strategic-marketing-planning-framework')).toBe(true);
    
    // All related insights should be from the same category (marketing-strategy)
    relatedInsights.forEach(insight => {
      expect(insight.category).toBe('marketing-strategy');
    });
  });

  test('getRelatedInsights returns empty array for non-existent slug', () => {
    const relatedInsights = getRelatedInsights('non-existent-slug');
    expect(relatedInsights).toHaveLength(0);
  });

  test('every insight has all required fields', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...insights),
        (insight) => {
          expect(insight.id).toBeDefined();
          expect(insight.title).toBeDefined();
          expect(insight.category).toBeDefined();
          expect(insight.excerpt).toBeDefined();
          expect(insight.content).toBeDefined();
          expect(insight.publishedDate).toBeDefined();
          expect(insight.imageUrl).toBeDefined();
          expect(insight.slug).toBeDefined();
          expect(insight.author).toBeDefined();
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  test('every insight has a unique id and slug', () => {
    const ids = insights.map(i => i.id);
    const slugs = insights.map(i => i.slug);
    
    expect(new Set(ids).size).toBe(insights.length);
    expect(new Set(slugs).size).toBe(insights.length);
  });
});
