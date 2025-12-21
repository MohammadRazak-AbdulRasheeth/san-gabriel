import * as fc from 'fast-check';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import InsightCard from './InsightCard';
import { insights, validCategoryIds } from '../../../data/insights';

// Helper to render with router
const renderWithRouter = (ui) => {
  return render(
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      {ui}
    </BrowserRouter>
  );
};

/**
 * Feature: san-gabriel-pages, Property 7: Insight Card Content Completeness
 * For any insight card rendered, the card SHALL display: title, category, excerpt, and publication date.
 * Validates: Requirements 5.3
 */
describe('Property 7: Insight Card Content Completeness', () => {
  // Test that all insight cards display required content
  test('every insight card displays title, category, excerpt, and publication date', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...insights),
        (insight) => {
          const { unmount } = renderWithRouter(
            <InsightCard
              id={insight.id}
              title={insight.title}
              category={insight.category}
              excerpt={insight.excerpt}
              publishedDate={insight.publishedDate}
              imageUrl={insight.imageUrl}
              slug={insight.slug}
            />
          );

          // Title must be displayed
          const titleElement = screen.getByTestId('insight-title');
          expect(titleElement).toBeInTheDocument();
          expect(titleElement.textContent).toBe(insight.title);

          // Category must be displayed
          const categoryElement = screen.getByTestId('insight-category');
          expect(categoryElement).toBeInTheDocument();

          // Excerpt must be displayed
          const excerptElement = screen.getByTestId('insight-excerpt');
          expect(excerptElement).toBeInTheDocument();
          expect(excerptElement.textContent).toBe(insight.excerpt);

          // Publication date must be displayed
          const dateElement = screen.getByTestId('insight-date');
          expect(dateElement).toBeInTheDocument();

          // Clean up for next iteration
          unmount();

          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that generated insight data renders correctly
  test('arbitrary insight data renders all required fields', () => {
    // Generator for valid insight data - use integer for date to avoid invalid date issues
    const insightArbitrary = fc.record({
      id: fc.stringMatching(/^[a-z][a-z0-9-]{0,49}$/),
      title: fc.string({ minLength: 1, maxLength: 200 }).filter(s => s.trim().length > 0),
      category: fc.constantFrom(...validCategoryIds),
      excerpt: fc.string({ minLength: 1, maxLength: 500 }).filter(s => s.trim().length > 0),
      publishedDate: fc.integer({ min: 2020, max: 2025 }).chain(year =>
        fc.integer({ min: 1, max: 12 }).chain(month =>
          fc.integer({ min: 1, max: 28 }).map(day =>
            `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
          )
        )
      ),
      imageUrl: fc.constant('/insights/test.jpg'),
      slug: fc.stringMatching(/^[a-z][a-z0-9-]{0,49}$/)
    });

    fc.assert(
      fc.property(
        insightArbitrary,
        (insight) => {
          const { unmount } = renderWithRouter(
            <InsightCard
              id={insight.id}
              title={insight.title}
              category={insight.category}
              excerpt={insight.excerpt}
              publishedDate={insight.publishedDate}
              imageUrl={insight.imageUrl}
              slug={insight.slug}
            />
          );

          // All required elements must be present
          expect(screen.getByTestId('insight-card')).toBeInTheDocument();
          expect(screen.getByTestId('insight-title')).toBeInTheDocument();
          expect(screen.getByTestId('insight-category')).toBeInTheDocument();
          expect(screen.getByTestId('insight-excerpt')).toBeInTheDocument();
          expect(screen.getByTestId('insight-date')).toBeInTheDocument();

          unmount();
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that card has clickable link to full article
  test('insight card has link to full article', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...insights),
        (insight) => {
          const { unmount } = renderWithRouter(
            <InsightCard
              id={insight.id}
              title={insight.title}
              category={insight.category}
              excerpt={insight.excerpt}
              publishedDate={insight.publishedDate}
              imageUrl={insight.imageUrl}
              slug={insight.slug}
            />
          );

          // Should have a link to the full article (using aria-label which includes title)
          const link = screen.getByRole('link', { name: new RegExp(`Read more about ${insight.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i') });
          expect(link).toBeInTheDocument();
          expect(link.getAttribute('href')).toBe(`/insights/${insight.slug}`);

          unmount();
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Additional unit tests for InsightCard
describe('InsightCard unit tests', () => {
  const sampleInsight = {
    id: 'test-insight',
    title: 'Test Insight Title',
    category: 'marketing-strategy',
    excerpt: 'This is a test excerpt for the insight card.',
    publishedDate: '2024-12-15',
    imageUrl: '/insights/test.jpg',
    slug: 'test-insight-slug'
  };

  test('renders insight card with all props', () => {
    renderWithRouter(<InsightCard {...sampleInsight} />);

    expect(screen.getByTestId('insight-card')).toBeInTheDocument();
    expect(screen.getByText('Test Insight Title')).toBeInTheDocument();
    expect(screen.getByText('Marketing Strategy')).toBeInTheDocument();
    expect(screen.getByText('This is a test excerpt for the insight card.')).toBeInTheDocument();
  });

  test('formats date correctly', () => {
    renderWithRouter(<InsightCard {...sampleInsight} />);

    // Date should be formatted as "December 15, 2024"
    expect(screen.getByText('December 15, 2024')).toBeInTheDocument();
  });

  test('applies correct category color for marketing-strategy', () => {
    renderWithRouter(<InsightCard {...sampleInsight} category="marketing-strategy" />);
    
    const categoryBadge = screen.getByTestId('insight-category');
    expect(categoryBadge).toHaveClass('bg-blue-100', 'text-blue-700');
  });

  test('applies correct category color for industry-trends', () => {
    renderWithRouter(<InsightCard {...sampleInsight} category="industry-trends" />);
    
    const categoryBadge = screen.getByTestId('insight-category');
    expect(categoryBadge).toHaveClass('bg-green-100', 'text-green-700');
  });

  test('applies correct category color for business-growth', () => {
    renderWithRouter(<InsightCard {...sampleInsight} category="business-growth" />);
    
    const categoryBadge = screen.getByTestId('insight-category');
    expect(categoryBadge).toHaveClass('bg-purple-100', 'text-purple-700');
  });

  test('image has lazy loading attribute', () => {
    renderWithRouter(<InsightCard {...sampleInsight} />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('loading', 'lazy');
  });
});
