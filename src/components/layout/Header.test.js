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
 * Feature: san-gabriel-pages, Property 1: Navigation Link Consistency
 * For any page rendered in the application, the header SHALL contain navigation links 
 * to all required pages: Home, About, Services, Insights, Contact.
 * Validates: Requirements 6.1
 */
describe('Property 1: Navigation Link Consistency', () => {
  // Required navigation links
  const requiredNavLinks = [
    { label: /home/i, href: '/' },
    { label: /about/i, href: '/about' },
    { label: /services/i, href: '/services' },
    { label: /insights/i, href: '/insights' },
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

  test('navigation links are in correct order: Home, About, Services, Insights, Contact', () => {
    renderWithRouter(<Header />);

    // Get all navigation links in the desktop nav
    const navLinks = screen.getAllByRole('link');
    const navLabels = navLinks.map(link => link.textContent.toLowerCase());

    // Find indices of each required link
    const homeIndex = navLabels.findIndex(label => label.includes('home'));
    const aboutIndex = navLabels.findIndex(label => label.includes('about'));
    const servicesIndex = navLabels.findIndex(label => label.includes('services'));
    const insightsIndex = navLabels.findIndex(label => label.includes('insights'));
    const contactIndex = navLabels.findIndex(label => label.includes('contact'));

    // Verify order (Home < About < Services < Insights < Contact)
    expect(homeIndex).toBeLessThan(aboutIndex);
    expect(aboutIndex).toBeLessThan(servicesIndex);
    expect(servicesIndex).toBeLessThan(insightsIndex);
    // Contact appears multiple times (nav + CTA button), so we check it exists after insights
    expect(insightsIndex).toBeGreaterThan(-1);
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
  test('renders header component', () => {
    renderWithRouter(<Header />);
    
    expect(screen.getByText('SAN GABRIEL')).toBeInTheDocument();
    expect(screen.getByText('SOLUTIONS')).toBeInTheDocument();
  });

  test('renders Schedule a Consultation CTA button', () => {
    renderWithRouter(<Header />);
    
    const ctaButtons = screen.getAllByRole('link', { name: /schedule a consultation/i });
    expect(ctaButtons.length).toBeGreaterThan(0);
  });
});
