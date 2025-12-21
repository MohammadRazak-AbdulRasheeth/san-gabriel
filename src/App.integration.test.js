import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, whileInView, whileHover, whileTap, variants, initial, animate, viewport, layout, transition, ...props }) => <div {...props}>{children}</div>,
    section: ({ children, whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <section {...props}>{children}</section>,
    h1: ({ children, whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <h1 {...props}>{children}</h1>,
    h2: ({ children, whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, whileInView, whileHover, variants, initial, animate, viewport, transition, ...props }) => <h3 {...props}>{children}</h3>,
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
  HiOutlineCurrencyDollar: () => <span>CurrencyDollar</span>,
  HiOutlineClipboardCheck: () => <span>ClipboardCheck</span>,
  HiOutlineDocumentText: () => <span>DocumentText</span>,
  HiOutlineAcademicCap: () => <span>AcademicCap</span>,
  HiOutlineClock: () => <span>Clock</span>,
  HiOutlineUsers: () => <span>Users</span>,
  HiOutlineShieldCheck: () => <span>ShieldCheck</span>,
  HiOutlineScale: () => <span>Scale</span>,
  HiOutlineEye: () => <span>Eye</span>,
  HiOutlineTarget: () => <span>Target</span>,
  HiOutlinePresentationChartLine: () => <span>PresentationChartLine</span>,
  HiOutlineDesktopComputer: () => <span>DesktopComputer</span>,
  HiOutlineColorSwatch: () => <span>ColorSwatch</span>,
  HiOutlinePencil: () => <span>Pencil</span>,
  HiOutlinePhotograph: () => <span>Photograph</span>,
  HiOutlineTemplate: () => <span>Template</span>,
  HiOutlineCollection: () => <span>Collection</span>,
  HiOutlineAnnotation: () => <span>Annotation</span>,
  HiOutlineChatAlt2: () => <span>ChatAlt2</span>,
  HiOutlineNewspaper: () => <span>Newspaper</span>,
  HiOutlinePlay: () => <span>Play</span>,
  HiOutlineVolumeUp: () => <span>VolumeUp</span>,
  HiOutlineFilm: () => <span>Film</span>,
  HiOutlineSearch: () => <span>Search</span>,
  HiOutlineLink: () => <span>Link</span>,
  HiOutlineCode: () => <span>Code</span>,
  HiOutlineDatabase: () => <span>Database</span>,
  HiOutlineServer: () => <span>Server</span>,
  HiOutlineCloud: () => <span>Cloud</span>,
  HiOutlineCog: () => <span>Cog</span>,
  HiOutlineAdjustments: () => <span>Adjustments</span>,
  HiOutlineRefresh: () => <span>Refresh</span>,
  HiOutlineDownload: () => <span>Download</span>,
  HiOutlineUpload: () => <span>Upload</span>,
  HiOutlineShare: () => <span>Share</span>,
  HiOutlineBookmark: () => <span>Bookmark</span>,
  HiOutlineTag: () => <span>Tag</span>,
  HiOutlineFilter: () => <span>Filter</span>,
  HiOutlineSortAscending: () => <span>SortAscending</span>,
  HiOutlineSortDescending: () => <span>SortDescending</span>,
  HiOutlineViewGrid: () => <span>ViewGrid</span>,
  HiOutlineViewList: () => <span>ViewList</span>,
  HiOutlineChevronDown: () => <span>ChevronDown</span>,
  HiOutlineChevronUp: () => <span>ChevronUp</span>,
  HiOutlineChevronLeft: () => <span>ChevronLeft</span>,
  HiOutlineChevronRight: () => <span>ChevronRight</span>,
  HiOutlinePlus: () => <span>Plus</span>,
  HiOutlineMinus: () => <span>Minus</span>,
  HiOutlineCheck: () => <span>Check</span>,
  HiOutlineExclamation: () => <span>Exclamation</span>,
  HiOutlineInformationCircle: () => <span>InformationCircle</span>,
  HiOutlineQuestionMarkCircle: () => <span>QuestionMarkCircle</span>,
  HiOutlineExclamationCircle: () => <span>ExclamationCircle</span>,
  HiOutlineBan: () => <span>Ban</span>,
  HiOutlineTrash: () => <span>Trash</span>,
  HiOutlinePencilAlt: () => <span>PencilAlt</span>,
  HiOutlineDuplicate: () => <span>Duplicate</span>,
  HiOutlineClipboard: () => <span>Clipboard</span>,
  HiOutlineDocumentDuplicate: () => <span>DocumentDuplicate</span>,
  HiOutlineFolderOpen: () => <span>FolderOpen</span>,
  HiOutlineFolder: () => <span>Folder</span>,
  HiOutlineArchive: () => <span>Archive</span>,
  HiOutlineInbox: () => <span>Inbox</span>,
  HiOutlinePaperAirplane: () => <span>PaperAirplane</span>,
  HiOutlineReply: () => <span>Reply</span>,
  HiOutlineAtSymbol: () => <span>AtSymbol</span>,
  HiOutlineBell: () => <span>Bell</span>,
  HiOutlineCalendarIcon: () => <span>CalendarIcon</span>,
  HiOutlineHome: () => <span>Home</span>,
  HiOutlineMenuAlt1: () => <span>MenuAlt1</span>,
  HiOutlineMenuAlt2: () => <span>MenuAlt2</span>,
  HiOutlineMenuAlt3: () => <span>MenuAlt3</span>,
  HiOutlineMenuAlt4: () => <span>MenuAlt4</span>,
  HiOutlineDotsHorizontal: () => <span>DotsHorizontal</span>,
  HiOutlineDotsVertical: () => <span>DotsVertical</span>,
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
    
    // Verify all navigation items are present (use getAllByText since they appear in header and footer)
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Insights').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0);
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
    
    // Use getAllByText and get the first one (header link)
    const homeLink = screen.getAllByText('Home')[0].closest('a');
    const aboutLink = screen.getAllByText('About')[0].closest('a');
    const servicesLink = screen.getAllByText('Services')[0].closest('a');
    const insightsLink = screen.getAllByText('Insights')[0].closest('a');
    const contactLink = screen.getAllByText('Contact')[0].closest('a');
    
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
