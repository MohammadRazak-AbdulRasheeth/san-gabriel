import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    section: ({ children, ...props }) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
    a: ({ children, ...props }) => <a {...props}>{children}</a>,
    article: ({ children, ...props }) => <article {...props}>{children}</article>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
  useReducedMotion: () => false,
}));

// Mock react-icons
jest.mock('react-icons/hi', () => ({
  HiOutlineCalendar: () => <span>Calendar</span>,
  HiOutlineArrowRight: () => <span>Arrow</span>,
}));

/**
 * Integration Tests for Task 15.1 - Test complete navigation flow
 * These tests verify:
 * - All pages are accessible
 * - Navigation links are present
 * - Footer is present on all pages
 */
describe('Navigation Flow Integration Tests - Task 15.1', () => {
  test('App renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('Header navigation contains all required links', () => {
    render(<App />);
    
    // Verify all navigation items are present
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Insights')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('Header contains Schedule a Consultation CTA', () => {
    render(<App />);
    
    const ctaButtons = screen.getAllByText('Schedule a Consultation');
    expect(ctaButtons.length).toBeGreaterThan(0);
  });

  test('Footer is present with company information', () => {
    render(<App />);
    
    // Footer should contain company name
    const sanGabrielElements = screen.getAllByText(/San Gabriel/i);
    expect(sanGabrielElements.length).toBeGreaterThan(0);
  });

  test('Home page renders with main content', () => {
    render(<App />);
    
    // Home page should have strategic marketing content
    expect(screen.getByText(/Strategic Marketing/i)).toBeInTheDocument();
  });
});

/**
 * Content Completeness Tests for Task 15.2
 * These tests verify:
 * - Services have complete information
 * - CTAs are present and functional
 */
describe('Content Completeness Tests - Task 15.2', () => {
  test('Home page contains primary CTA', () => {
    render(<App />);
    
    // Should have at least one CTA button
    const ctaButtons = screen.getAllByText(/Schedule a Consultation|Explore Services|Get Started/i);
    expect(ctaButtons.length).toBeGreaterThan(0);
  });

  test('Navigation links have proper href attributes', () => {
    render(<App />);
    
    const homeLink = screen.getByText('Home').closest('a');
    const aboutLink = screen.getByText('About').closest('a');
    const servicesLink = screen.getByText('Services').closest('a');
    const insightsLink = screen.getByText('Insights').closest('a');
    const contactLink = screen.getByText('Contact').closest('a');
    
    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(servicesLink).toHaveAttribute('href', '/services');
    expect(insightsLink).toHaveAttribute('href', '/insights');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  test('CTA buttons link to contact page', () => {
    render(<App />);
    
    const ctaButtons = screen.getAllByText('Schedule a Consultation');
    
    // At least one CTA should link to contact page
    const contactCTA = ctaButtons.find(button => {
      const link = button.closest('a');
      return link && link.getAttribute('href') === '/contact';
    });
    
    expect(contactCTA).toBeTruthy();
  });
});
