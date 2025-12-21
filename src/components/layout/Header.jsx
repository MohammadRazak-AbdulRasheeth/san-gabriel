import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

/**
 * Header Component
 * Navbar matching the design from sangabrielconsulting.com
 * Logo on left, nav items centered, Contact Now button on right
 */
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Industries', to: '/industries' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Insights', to: '/insights' },
    { label: 'Careers', to: '/careers' },
    { label: 'Contact', to: '/contact' },
  ];

  const isActiveRoute = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://sangabrielconsulting.com/wp-content/uploads/2025/04/SG-logo-1-removebg-preview.png"
                alt="San Gabriel Consulting"
                className="h-12 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary-900 leading-tight">
                  SAN GABRIEL
                </span>
                <span className="text-xs text-neutral-500 tracking-wider">
                  SOLUTIONS
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Link
                  to={item.to}
                  className={`text-sm font-medium transition-colors py-2 ${
                    isActiveRoute(item.to)
                      ? 'text-primary-900 font-semibold'
                      : 'text-neutral-600 hover:text-primary-900'
                  }`}
                >
                  {item.label}
                </Link>
                {/* Active indicator underline */}
                {isActiveRoute(item.to) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:block"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-primary-900 text-white text-sm font-medium rounded-md hover:bg-primary-800 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-primary-900 hover:bg-neutral-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom border line */}
      <div className="h-[3px] bg-gradient-to-r from-primary-900 via-primary-700 to-primary-900" />

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-b border-neutral-200 shadow-lg"
          >
            <div className="py-4 space-y-1 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg transition-colors text-sm font-medium min-h-[44px] flex items-center touch-manipulation ${
                    isActiveRoute(item.to)
                      ? 'text-primary-900 bg-primary-50 border-l-4 border-accent-500 font-semibold'
                      : 'text-neutral-600 hover:text-primary-900 hover:bg-neutral-50 active:bg-neutral-100 border-l-4 border-transparent'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-neutral-200">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-primary-900 text-white text-sm font-medium rounded-md hover:bg-primary-800 active:bg-primary-950 transition-colors min-h-[44px] flex items-center justify-center touch-manipulation"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
