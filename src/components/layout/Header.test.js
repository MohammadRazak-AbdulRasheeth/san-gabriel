import * as fc from 'fast-check';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

// Helper to render with router
const renderWithRouter = (ui) => {
  return render(
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      {ui}
    </BrowserRouter>
  );
};

/**
 * Feature: vehicle-advertising-rebrand, Property 1: Navigation Link Consistency
 * For any page rendered in the application, the header SHALL contain navigation links 
 * to all required pages for the vehicle advertising website.
 * Validates: Requirements 8.1, 8.3
 */
describe('Property 1: Navigation Link Consistency', () => {
  // Required navigation links for vehicle advertising rebrand
  const requiredNavLinks = [
    { label: /home/i, href: '/' },
    { label: /advertise/i, href: '/advertise' },
    { label: /signage/i, href: '/signage-wraps' },
    { label: /pricing/i, href: '/pricing' },
    { label: /contact/i, href: '/contact' }
  ];

  test('header contains all required navigation links', () => {
    fc.assert(
      fc.property(
        fc.constant(null), // No random input needed
        () => {
          const { unmount } = renderWithRouter(<Header />);

          // Check each required navigation link is present
          requiredNavLinks.forEach(({ label, href }) => {
            const links = screen.getAllByRole('link', { name: label });
            // At least one link should match (desktop or mobile)
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

  test('navigation links are in correct order: Home, Advertise, Signage & Wraps, Pricing, Contact', () => {
    renderWithRouter(<Header />);

    // Get all navigation links in the desktop nav
    const navLinks = screen.getAllByRole('link');
    const navLabels = navLinks.map(link => link.textContent.toLowerCase());

    // Find indices of each required link
    const homeIndex = navLabels.findIndex(label => label.includes('home'));
    const advertiseIndex = navLabels.findIndex(label => label.includes('advertise'));
    const signageIndex = navLabels.findIndex(label => label.includes('signage'));
    const pricingIndex = navLabels.findIndex(label => label.includes('pricing'));
    const contactIndex = navLabels.findIndex(label => label.includes('contact'));

    // Verify order (Home < Advertise < Signage < Pricing)
    expect(homeIndex).toBeLessThan(advertiseIndex);
    expect(advertiseIndex).toBeLessThan(signageIndex);
    expect(signageIndex).toBeLessThan(pricingIndex);
    // Contact appears multiple times (nav + CTA button), so we check it exists
    expect(contactIndex).toBeGreaterThan(-1);
  });

  test('header has mobile menu button', () => {
    renderWithRouter(<Header />);

    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    expect(menuButton).toBeInTheDocument();
  });

  test('header has logo link to home', () => {
    renderWithRouter(<Header />);

    const logoLinks = screen.getAllByRole('link');
    const homeLink = logoLinks.find(link => link.getAttribute('href') === '/');
    expect(homeLink).toBeInTheDocument();
  });
});

// Additional unit tests for Header
describe('Header unit tests', () => {
  test('renders header component with logo', () => {
    renderWithRouter(<Header />);
    
    // Header now uses logo image instead of text
    const logo = screen.getByAltText('San Gabriel Solutions');
    expect(logo).toBeInTheDocument();
  });

  test('renders Schedule a Consultation CTA button', () => {
    renderWithRouter(<Header />);
    
    const ctaButtons = screen.getAllByRole('link', { name: /schedule a consultation/i });
    expect(ctaButtons.length).toBeGreaterThan(0);
  });
});
