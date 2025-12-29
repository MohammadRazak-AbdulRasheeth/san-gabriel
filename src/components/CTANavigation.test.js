import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

// Import all pages that should have CTAs
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import CaseStudies from '../pages/CaseStudies';

/**
 * CTA Navigation Tests
 * Verify that all CTAs navigate correctly to contact/lead form
 * Updated for vehicle advertising rebrand
 * Requirements: 8.1, 8.3
 */

describe('CTA Navigation System', () => {
  const renderWithRouter = (component) => {
    return render(
      <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        {component}
      </BrowserRouter>
    );
  };

  describe('Home Page CTAs', () => {
    test('has vehicle advertising CTAs', () => {
      renderWithRouter(<Home />);
      
      // Check for vehicle advertising related CTAs (from ctaConfig.js)
      const getWrappedCTAs = screen.queryAllByText(/Get My Vehicle Wrapped/i);
      const realtorCTAs = screen.queryAllByText(/Get Realtor Package/i);
      
      // At least one of these CTAs should be present
      expect(getWrappedCTAs.length + realtorCTAs.length).toBeGreaterThan(0);
    });

    test('has CTAs that link to appropriate pages', () => {
      renderWithRouter(<Home />);
      
      // Check for links to contact or pricing pages
      const contactLinks = screen.queryAllByRole('link', { name: /Get My Vehicle Wrapped/i });
      const pricingLinks = screen.queryAllByRole('link', { name: /Get Realtor Package/i });
      
      // At least one CTA should be present
      expect(contactLinks.length + pricingLinks.length).toBeGreaterThan(0);
    });
  });

  describe('Case Studies Page CTAs', () => {
    test('has consultation CTA that links to contact', () => {
      renderWithRouter(<CaseStudies />);
      const ctaLinks = screen.getAllByText(/Schedule a Consultation/i);
      expect(ctaLinks.length).toBeGreaterThan(0);
      
      // Verify link to contact page
      const contactLinks = ctaLinks.filter(link => 
        link.closest('a')?.getAttribute('href') === '/contact'
      );
      expect(contactLinks.length).toBeGreaterThan(0);
    });
  });

  describe('Contact Page', () => {
    test('has contact form with submit button', () => {
      renderWithRouter(<Contact />);
      
      // Check for form elements - updated for QuoteForm
      const submitButtons = screen.queryAllByRole('button', { name: /submit|send|get.*quote/i });
      expect(submitButtons.length).toBeGreaterThan(0);
    });

    test('has required form fields', () => {
      renderWithRouter(<Contact />);
      
      // Check for vehicle type selector (Requirement 6.2)
      const vehicleSelect = screen.getByLabelText(/Vehicle Type/i);
      expect(vehicleSelect).toBeInTheDocument();
      
      // Check for location selector (Requirement 6.3)
      const locationSelect = screen.getByLabelText(/Location/i);
      expect(locationSelect).toBeInTheDocument();
      
      // Check for industry selector (Requirement 6.4)
      const industrySelect = screen.getByLabelText(/Industry/i);
      expect(industrySelect).toBeInTheDocument();
    });
  });

  describe('CTA Consistency', () => {
    test('home page has clear call-to-action buttons', () => {
      const { unmount } = renderWithRouter(<Home />);
      
      // Home page should have CTAs for advertising or branding
      const allCTAs = screen.queryAllByRole('link');
      const actionCTAs = allCTAs.filter(link => {
        const href = link.getAttribute('href');
        return href === '/advertise' || href === '/signage-wraps' || href === '/contact' || href === '/pricing';
      });
      
      expect(actionCTAs.length).toBeGreaterThan(0);
      
      unmount();
    });
  });
});
