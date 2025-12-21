import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

// Import all pages that should have CTAs
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
import Industries from '../pages/Industries';
import CaseStudies from '../pages/CaseStudies';
import Insights from '../pages/Insights';
import Contact from '../pages/Contact';

/**
 * CTA Navigation Tests
 * Verify that all CTAs navigate correctly to contact/lead form
 * Requirements: 18.1, 18.3
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
    test('has Schedule a Consultation CTA that links to contact', () => {
      renderWithRouter(<Home />);
      const ctaLinks = screen.getAllByText(/Schedule a Consultation/i);
      expect(ctaLinks.length).toBeGreaterThan(0);
      
      // Check that at least one CTA links to contact
      const contactLinks = ctaLinks.filter(link => 
        link.closest('a')?.getAttribute('href') === '/contact' ||
        link.closest('button')?.closest('a')?.getAttribute('href') === '/contact'
      );
      expect(contactLinks.length).toBeGreaterThan(0);
    });
  });

  describe('About Page CTAs', () => {
    test('has consultation CTA that links to contact', () => {
      renderWithRouter(<AboutUs />);
      const ctaLinks = screen.getAllByText(/Schedule a (Consultation|Discovery Call)/i);
      expect(ctaLinks.length).toBeGreaterThan(0);
      
      // Verify link to contact page
      const contactLinks = ctaLinks.filter(link => 
        link.closest('a')?.getAttribute('href') === '/contact'
      );
      expect(contactLinks.length).toBeGreaterThan(0);
    });
  });

  describe('Services Page CTAs', () => {
    test('has consultation CTA that links to contact', () => {
      renderWithRouter(<Services />);
      const ctaLinks = screen.getAllByText(/Schedule a Consultation/i);
      expect(ctaLinks.length).toBeGreaterThan(0);
      
      // Verify link to contact page
      const contactLinks = ctaLinks.filter(link => 
        link.closest('a')?.getAttribute('href') === '/contact' ||
        link.closest('button')?.closest('a')?.getAttribute('href') === '/contact'
      );
      expect(contactLinks.length).toBeGreaterThan(0);
    });
  });

  describe('Industries Page CTAs', () => {
    test('has consultation CTA that links to contact', () => {
      renderWithRouter(<Industries />);
      const ctaLinks = screen.getAllByText(/Schedule a Consultation/i);
      expect(ctaLinks.length).toBeGreaterThan(0);
      
      // Verify link to contact page
      const contactLinks = ctaLinks.filter(link => 
        link.closest('a')?.getAttribute('href') === '/contact'
      );
      expect(contactLinks.length).toBeGreaterThan(0);
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

  describe('Insights Page CTAs', () => {
    test('has consultation CTA that links to contact', () => {
      renderWithRouter(<Insights />);
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
    test('has discovery call CTA in form', () => {
      renderWithRouter(<Contact />);
      const ctaButtons = screen.getAllByText(/Schedule a Discovery Call/i);
      expect(ctaButtons.length).toBeGreaterThan(0);
      
      // Verify at least one is a button
      const button = ctaButtons.find(el => el.tagName === 'SPAN' && el.closest('button'));
      expect(button).toBeTruthy();
    });
  });

  describe('CTA Consistency', () => {
    test('all pages emphasize consultation scheduling', () => {
      const pages = [
        { name: 'Home', component: <Home /> },
        { name: 'About', component: <AboutUs /> },
        { name: 'Services', component: <Services /> },
        { name: 'Industries', component: <Industries /> },
        { name: 'Case Studies', component: <CaseStudies /> },
        { name: 'Insights', component: <Insights /> }
      ];

      pages.forEach(({ name, component }) => {
        const { unmount } = renderWithRouter(component);
        
        // Each page should have at least one consultation-related CTA
        const consultationCTAs = screen.queryAllByText(/Schedule a (Consultation|Discovery Call|Strategy Session)/i);
        expect(consultationCTAs.length).toBeGreaterThan(0);
        
        unmount();
      });
    });
  });
});
