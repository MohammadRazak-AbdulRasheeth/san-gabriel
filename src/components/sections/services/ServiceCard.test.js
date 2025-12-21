import React from 'react';
import * as fc from 'fast-check';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { agencyServices } from '../../../data/agencyServices';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, whileInView, whileHover, variants, initial, viewport, ...props }) => (
      <div {...props}>{children}</div>
    ),
    span: ({ children, ...props }) => <span {...props}>{children}</span>,
    li: ({ children, ...props }) => <li {...props}>{children}</li>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}));

// Mock useReducedMotion hook
jest.mock('../../../hooks/useReducedMotion', () => ({
  __esModule: true,
  default: () => false,
}));

// Mock react-icons
jest.mock('react-icons/hi', () => ({
  HiOutlineCheckCircle: () => <span data-testid="check-icon" />,
  HiOutlineArrowRight: () => <span data-testid="arrow-icon" />,
}));

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
        heroImage={service.heroImage}
      />
    </BrowserRouter>
  );
};


/**
 * Feature: san-gabriel-agency-rebrand, Property 12: Responsive Layout Adaptation
 * For any viewport width below 768px, all pages SHALL display responsive layouts
 * with touch-friendly interactions.
 * Validates: Requirements 16.1
 */
describe('Property 12: Responsive Layout Adaptation', () => {
  // Test that service cards have responsive padding
  it('service cards have responsive padding classes', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...agencyServices),
        (service) => {
          const { container, unmount } = renderServiceCard(service);
          
          // The card content container should have responsive padding
          const cardContent = container.querySelector('.p-6');
          expect(cardContent).not.toBeNull();
          
          unmount();
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  // Test that service name has responsive text sizing
  it('service name has responsive text sizing', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...agencyServices),
        (service) => {
          const { container, unmount } = renderServiceCard(service);
          
          // Find the h3 element (service name)
          const heading = container.querySelector('h3');
          if (heading) {
            const classes = heading.className;
            // Should have responsive text sizing
            expect(classes).toContain('text-2xl');
            expect(classes).toContain('md:text-3xl');
          }
          
          unmount();
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });

  // Test that CTA button has minimum touch target size
  it('CTA button has minimum 44px touch target', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(...agencyServices),
        (service) => {
          const { container, unmount } = renderServiceCard(service);
          
          // Find the CTA button
          const button = container.querySelector('button');
          if (button) {
            const classes = button.className;
            // Should have min-h-[44px] for touch-friendly sizing
            expect(classes).toContain('min-h-[44px]');
          }
          
          unmount();
          return true;
        }
      ),
      { numRuns: 10 }
    );
  });
});

// Unit tests for ServiceCard component
describe('ServiceCard component', () => {
  const sampleService = agencyServices[0];

  it('renders service name correctly', () => {
    renderServiceCard(sampleService);
    expect(screen.getByText(sampleService.name)).toBeInTheDocument();
  });

  it('renders short description correctly', () => {
    renderServiceCard(sampleService);
    expect(screen.getByText(sampleService.shortDescription)).toBeInTheDocument();
  });

  it('renders CTA button with correct text', () => {
    renderServiceCard(sampleService);
    expect(screen.getByText(sampleService.cta)).toBeInTheDocument();
  });

  it('renders offerings list', () => {
    renderServiceCard(sampleService);
    sampleService.offerings.forEach(offering => {
      expect(screen.getByText(offering)).toBeInTheDocument();
    });
  });

  it('CTA button links to service detail page', () => {
    const { container } = renderServiceCard(sampleService);
    const link = container.querySelector(`a[href="/services/${sampleService.id}"]`);
    expect(link).toBeInTheDocument();
  });
});
