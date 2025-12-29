import * as fc from 'fast-check';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

// Helper to render with router
const renderWithRouter = (ui) => {
  return render(
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      {ui}
    </BrowserRouter>
  );
};

/**
 * Feature: san-gabriel-pages, Property 2: Footer Presence Consistency
 * For any page rendered in the application, the footer SHALL be present 
 * with company information and navigation links.
 * Validates: Requirements 6.2
 */
describe('Property 2: Footer Presence Consistency', () => {
  // Required footer elements - updated to match current footer structure
  const requiredNavLinks = [
    { label: /home/i, href: '/' },
    { label: /advertise/i, href: '/advertise' },
    { label: /signage & wraps/i, href: '/signage-wraps' },
    { label: /pricing/i, href: '/pricing' },
    { label: /contact/i, href: '/contact' }
  ];

  test('footer contains all required navigation links', () => {
    fc.assert(
      fc.property(
        fc.constant(null), // No random input needed
        () => {
          const { unmount } = renderWithRouter(<Footer />);

          // Check each required navigation link is present
          requiredNavLinks.forEach(({ label, href }) => {
            const links = screen.getAllByRole('link', { name: label });
            expect(links.length).toBeGreaterThan(0);
            
            // At least one link should have the correct href
            const hasCorrectHref = links.some(link => link.getAttribute('href') === href);
            expect(hasCorrectHref).toBe(true);
          });

          unmount();
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  test('footer contains company information', () => {
    fc.assert(
      fc.property(
        fc.constant(null),
        () => {
          const { unmount } = renderWithRouter(<Footer />);

          // Company logo should be present
          expect(screen.getByAltText('San Gabriel Solutions')).toBeInTheDocument();

          // Contact information should be present
          expect(screen.getByText(/contact@sangabrielsolutions.com/i)).toBeInTheDocument();

          // Copyright should be present
          expect(screen.getByText(/San Gabriel Solutions. All rights reserved/i)).toBeInTheDocument();

          unmount();
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });

  test('footer contains social media links', () => {
    renderWithRouter(<Footer />);

    // Social media links should be present
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument();
  });

  test('footer contains services links', () => {
    renderWithRouter(<Footer />);

    // Services section should have links
    expect(screen.getAllByText('Our Services').length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: /advertise on our network/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /vehicle & fleet branding/i })).toBeInTheDocument();
  });

  test('footer has newsletter signup', () => {
    renderWithRouter(<Footer />);

    // Newsletter input should be present
    const emailInput = screen.getByPlaceholderText(/your email/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
  });
});

// Additional unit tests for Footer
describe('Footer unit tests', () => {
  test('renders footer component', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('renders Quick Links section', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
  });

  test('renders Connect With Us section', () => {
    renderWithRouter(<Footer />);
    
    expect(screen.getByText('Connect With Us')).toBeInTheDocument();
  });

  test('renders current year in copyright', () => {
    renderWithRouter(<Footer />);
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
  });
});
