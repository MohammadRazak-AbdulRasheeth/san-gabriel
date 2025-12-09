import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

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

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' }
  ];

  const isActiveRoute = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Determine if we should use light theme (for visibility on white backgrounds)
  const shouldUseLightTheme = isScrolled || location.pathname !== '/';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      shouldUseLightTheme 
        ? 'bg-white shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <Link to="/" className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg transition-all duration-300 border ${
                shouldUseLightTheme 
                  ? 'bg-white border-gray-200 shadow-sm' 
                  : 'bg-white/95 backdrop-blur-sm border-white/40 shadow-xl'
              }`}>
                <img 
                  src="https://sangabrielconsulting.com/wp-content/uploads/2025/04/SG-logo-1-removebg-preview.png"
                  alt="San Gabriel Consulting"
                  className="h-6 w-auto"
                />
              </div>
              <span className={`text-xl font-bold transition-colors ${
                shouldUseLightTheme ? 'text-primary-900' : 'text-white'
              }`}>
                San Gabriel
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  className={`font-medium transition-colors hover:text-accent-500 ${
                    isActiveRoute(item.to)
                      ? 'text-accent-500'
                      : shouldUseLightTheme 
                        ? 'text-neutral-600' 
                        : 'text-white text-opacity-90'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:block"
          >
            <Link to="/contact">
              <Button variant="primary" size="sm">
                Get Free Quote
              </Button>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              shouldUseLightTheme ? 'text-primary-900 hover:bg-neutral-100' : 'text-white hover:bg-white hover:bg-opacity-20'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-neutral-200"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      isActiveRoute(item.to)
                        ? 'text-accent-500 bg-accent-50'
                        : 'text-neutral-600 hover:text-accent-500 hover:bg-neutral-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-4 pt-4 border-t border-neutral-200">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="primary" size="sm" className="w-full">
                      Get Free Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;