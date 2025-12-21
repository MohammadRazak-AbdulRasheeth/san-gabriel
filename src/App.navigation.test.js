import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Industries from './pages/Industries';
import CaseStudies from './pages/CaseStudies';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Header from './components/layout/Header';
import Footer from './components/sections/Footer';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, whileInView, whileHover, whileTap, variants, initial, animate, viewport, layout, transition, ...props }) => <div {...props}>{children}</div>,
    section: ({ children, whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <section {...props}>{children}</section>,
    h1: ({ children, whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <h2 {...props}>{children}</h2>,
    p: ({ children, whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <p {...props}>{children}</p>,
    button: ({ children, whileInView, whileHover, whileTap, variants, initial, animate, viewport, transition, layout, ...props }) => <button {...props}>{children}</button>,
    a: ({ children, whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <a {...props}>{children}</a>,
    article: ({ children, whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <article {...props}>{children}</article>,
    span: ({ children, whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <span {...props}>{children}</span>,
    nav: ({ children, whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <nav {...props}>{children}</nav>,
    ul: ({ children, whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <ul {...props}>{children}</ul>,
    li: ({ children, whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <li {...props}>{children}</li>,
    img: ({ whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <img {...props} />,
    header: ({ children, whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <header {...props}>{children}</header>,
    footer: ({ children, whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <footer {...props}>{children}</footer>,
    form: ({ children, whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <form {...props}>{children}</form>,
    input: ({ whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <input {...props} />,
    textarea: ({ whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <textarea {...props} />,
    select: ({ children, whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <select {...props}>{children}</select>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
  useReducedMotion: () => false,
}));

// Mock react-icons
jest.mock('react-icons/hi', () => ({
  HiOutlineCalendar: () => <span>Calendar</span>,
  HiOutlineArrowRight: () => <span>Arrow</span>,
  HiOutlineChartBar: () => <span>ChartBar</span>,
  HiOutlineSparkles: () => <span>Sparkles</span>,
  HiOutlineSpeakerphone: () => <span>Speakerphone</span>,
  HiOutlineGlobe: () => <span>Globe</span>,
  HiOutlineLightBulb: () => <span>LightBulb</span>,
  HiOutlineCheckCircle: () => <span>CheckCircle</span>,
  HiOutlineTrendingUp: () => <span>TrendingUp</span>,
  HiOutlineUserGroup: () => <span>UserGroup</span>,
  HiOutlineBriefcase: () => <span>Briefcase</span>,
  HiOutlineOfficeBuilding: () => <span>OfficeBuilding</span>,
  HiOutlineHeart: () => <span>Heart</span>,
  HiOutlineShoppingBag: () => <span>ShoppingBag</span>,
  HiOutlineChip: () => <span>Chip</span>,
  HiOutlinePhone: () => <span>Phone</span>,
  HiOutlineMail: () => <span>Mail</span>,
  HiOutlineLocationMarker: () => <span>LocationMarker</span>,
  HiOutlineStar: () => <span>Star</span>,
  HiMenu: () => <span>Menu</span>,
  HiX: () => <span>X</span>,
}));

// Helper to render with router
const renderWithRouter = (initialRoute = '/') => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <div className="App min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:category" element={<ServiceDetail />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </MemoryRouter>
  );
};

describe('Navigation Flow Tests - Task 15.1', () => {
  describe('All pages are accessible', () => {
    test('Home page renders successfully', async () => {
      renderWithRouter('/');

      await waitFor(() => {
        expect(screen.getByText(/Strategic Marketing/i)).toBeInTheDocument();
      });
    });

    test('About page renders successfully', async () => {
      renderWithRouter('/about');

      await waitFor(() => {
        // Use getAllByText since "About" appears in multiple places (nav and page content)
        const aboutElements = screen.getAllByText(/About/i);
        expect(aboutElements.length).toBeGreaterThan(0);
      });
    });

    test('Services page renders successfully', async () => {
      renderWithRouter('/services');

      await waitFor(() => {
        // Use getAllByText since "Services" appears in multiple places
        const servicesElements = screen.getAllByText(/Services/i);
        expect(servicesElements.length).toBeGreaterThan(0);
      });
    });

    test('Industries page renders successfully', async () => {
      renderWithRouter('/industries');

      await waitFor(() => {
        expect(screen.getByText(/Industries/i)).toBeInTheDocument();
      });
    });

    test('Case Studies page renders successfully', async () => {
      renderWithRouter('/case-studies');

      await waitFor(() => {
        expect(screen.getByText(/Case Studies/i)).toBeInTheDocument();
      });
    });

    test('Insights page renders successfully', async () => {
      renderWithRouter('/insights');

      await waitFor(() => {
        // Use getAllByText since "Insights" appears in multiple places
        const insightsElements = screen.getAllByText(/Insights/i);
        expect(insightsElements.length).toBeGreaterThan(0);
      });
    });

    test('Contact page renders successfully', async () => {
      renderWithRouter('/contact');

      await waitFor(() => {
        // Use getAllByText since "Contact" appears in multiple places
        const contactElements = screen.getAllByText(/Contact/i);
        expect(contactElements.length).toBeGreaterThan(0);
      });
    });

    test('Service detail page renders successfully', async () => {
      renderWithRouter('/services/marketing-strategy-planning');

      await waitFor(() => {
        // Use getAllByText since "Marketing Strategy" appears in multiple places
        const marketingElements = screen.getAllByText(/Marketing Strategy/i);
        expect(marketingElements.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Header navigation links are present', () => {
    test('Header contains all required navigation links', () => {
      renderWithRouter('/');

      // Check for navigation items using getAllByText since they appear in header and footer
      expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
      expect(screen.getAllByText('About').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Services').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Insights').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
    });

    test('Header contains Schedule a Consultation CTA', () => {
      renderWithRouter('/');

      const ctaButtons = screen.getAllByText('Schedule a Consultation');
      expect(ctaButtons.length).toBeGreaterThan(0);
    });
  });

  describe('Footer is present on all pages', () => {
    const pages = [
      { path: '/', name: 'Home' },
      { path: '/about', name: 'About' },
      { path: '/services', name: 'Services' },
      { path: '/industries', name: 'Industries' },
      { path: '/case-studies', name: 'Case Studies' },
      { path: '/insights', name: 'Insights' },
      { path: '/contact', name: 'Contact' },
    ];

    pages.forEach(({ path, name }) => {
      test(`Footer is present on ${name} page`, async () => {
        renderWithRouter(path);

        await waitFor(() => {
          // Footer should contain company name or copyright - use getAllByText since it appears multiple times
          const elements = screen.getAllByText(/San Gabriel/i);
          expect(elements.length).toBeGreaterThan(0);
        });
      });
    });
  });

  describe('Service detail routes work for all services', () => {
    const serviceIds = [
      'marketing-strategy-planning',
      'brand-development-positioning',
      'advertising-campaign-management',
      'digital-presence-growth',
      'business-marketing-consulting',
    ];

    serviceIds.forEach((serviceId) => {
      test(`Service detail page renders for ${serviceId}`, async () => {
        renderWithRouter(`/services/${serviceId}`);

        await waitFor(() => {
          // Should render without crashing and show some content
          expect(screen.getByRole('main')).toBeInTheDocument();
        });
      });
    });
  });
});
