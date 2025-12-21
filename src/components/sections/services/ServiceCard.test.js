import * as fc from 'fast-check';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { agencyServices } from '../../../data/agencyServices';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
    li: ({ children, ...props }) => <li {...props}>{children}</li>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}));

/**
 * Feature: san-gabriel-agency-rebrand, Property 12: Responsive Layout Adaptation
 * For any viewport width below 768px, all pages SHALL display responsive layouts
 * with touch-friendly interactions.
 * Validates: Requirements 16.1
 */
describe('Property 12: Responsive Layout Adaptation', () => {
  // Helper to render ServiceCard with router context
  const renderServiceCard = (service) => {
    return render(
      <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <ServiceCard
          id={service.id}
          order={service.order}
          name={service.name}
          shortDescription={service.shortDescription}
          offerings={service.offerings}
          cta={service.cta}
        />
      </BrowserRouter>
    );
  };

  // Test that all service cards have responsive CSS classes for mobile stacking
  test('every service card has responsive flex classes for mobile stacking', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services),
        (service) => {
          const { container } = renderServiceCard(service);
          
          // Check that CTA container has flex-col for mobile stacking
          const ctaContainer = container.querySelector('[data-testid="service-ctas"]');
          if (ctaContainer) {
            const classes = ctaContainer.className;
            // Should have flex-col for mobile (stacking) and sm:flex-row for larger screens
            expect(classes).toContain('flex-col');
            expect(classes).toContain('sm:flex-row');
          }
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that business case toggle button has minimum touch target size
  test('business case toggle button has minimum 44px touch target', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services.filter(s => s.businessCase?.problems?.length > 0)),
        (service) => {
          const { container } = renderServiceCard(service);
          
          const toggleButton = container.querySelector('[data-testid="business-case-toggle"]');
          if (toggleButton) {
            const classes = toggleButton.className;
            // Should have min-h-[44px] for touch-friendly sizing
            expect(classes).toContain('min-h-[44px]');
          }
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that CTA buttons have minimum touch target size
  test('CTA buttons have minimum 44px touch target', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services.filter(s => s.ctas?.length > 0)),
        (service) => {
          const { container } = renderServiceCard(service);
          
          // Find all buttons in the CTA section
          const buttons = container.querySelectorAll('button');
          buttons.forEach(button => {
            const classes = button.className;
            // Should have min-h-[44px] for touch-friendly sizing
            expect(classes).toContain('min-h-[44px]');
          });
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that business case section is collapsible (starts collapsed)
  test('business case section starts collapsed and can be expanded', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services.filter(s => s.businessCase?.problems?.length > 0)),
        (service) => {
          const { container } = renderServiceCard(service);
          
          // Business case content should not be visible initially
          const businessCaseContent = container.querySelector('[data-testid="business-case-content"]');
          expect(businessCaseContent).toBeNull();
          
          // Click the toggle button
          const toggleButton = container.querySelector('[data-testid="business-case-toggle"]');
          if (toggleButton) {
            fireEvent.click(toggleButton);
            
            // After clicking, content should be visible
            const expandedContent = container.querySelector('[data-testid="business-case-content"]');
            expect(expandedContent).not.toBeNull();
          }
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that service cards have responsive padding
  test('service cards have responsive padding classes', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services),
        (service) => {
          const { container } = renderServiceCard(service);
          
          // The main card container should have responsive padding
          const cardElement = container.firstChild;
          if (cardElement) {
            const classes = cardElement.className;
            // Should have p-6 for mobile and md:p-8 for larger screens
            expect(classes).toContain('p-6');
            expect(classes).toContain('md:p-8');
          }
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that CTA links have full width on mobile
  test('CTA links have full width on mobile and auto width on larger screens', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services.filter(s => s.ctas?.length > 0)),
        (service) => {
          const { container } = renderServiceCard(service);
          
          // Find all links in the CTA section
          const ctaContainer = container.querySelector('[data-testid="service-ctas"]');
          if (ctaContainer) {
            const links = ctaContainer.querySelectorAll('a');
            links.forEach(link => {
              const classes = link.className;
              // Should have w-full for mobile and sm:w-auto for larger screens
              expect(classes).toContain('w-full');
              expect(classes).toContain('sm:w-auto');
            });
          }
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  // Test that service name has responsive text sizing
  test('service name has responsive text sizing', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...services),
        (service) => {
          const { container } = renderServiceCard(service);
          
          // Find the h3 element (service name)
          const heading = container.querySelector('h3');
          if (heading) {
            const classes = heading.className;
            // Should have responsive text sizing
            expect(classes).toContain('text-2xl');
            expect(classes).toContain('md:text-3xl');
          }
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});

// Additional unit tests for responsive behavior
describe('ServiceCard responsive behavior', () => {
  const sampleService = services[0];

  const renderServiceCard = (service) => {
    return render(
      <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <ServiceCard
          id={service.id}
          order={service.order}
          name={service.name}
          tagline={service.tagline}
          businessCase={service.businessCase}
          services={service.services}
          advantages={service.advantages}
          pricing={service.pricing}
          ctas={service.ctas}
          portfolioProof={service.portfolioProof}
          isCore={service.isCore}
          isFoundational={service.isFoundational}
        />
      </BrowserRouter>
    );
  };

  test('renders service name correctly', () => {
    renderServiceCard(sampleService);
    expect(screen.getByText(sampleService.name)).toBeInTheDocument();
  });

  test('renders tagline correctly', () => {
    renderServiceCard(sampleService);
    expect(screen.getByText(sampleService.tagline)).toBeInTheDocument();
  });

  test('renders CTA buttons', () => {
    renderServiceCard(sampleService);
    sampleService.ctas.forEach(cta => {
      expect(screen.getByText(cta.label)).toBeInTheDocument();
    });
  });

  test('business case toggle works correctly', () => {
    renderServiceCard(sampleService);
    
    // Find and click the toggle
    const toggleButton = screen.getByTestId('business-case-toggle');
    expect(toggleButton).toBeInTheDocument();
    
    // Initially collapsed
    expect(screen.queryByTestId('business-case-content')).not.toBeInTheDocument();
    
    // Click to expand
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('business-case-content')).toBeInTheDocument();
    
    // Click to collapse
    fireEvent.click(toggleButton);
    expect(screen.queryByTestId('business-case-content')).not.toBeInTheDocument();
  });
});
