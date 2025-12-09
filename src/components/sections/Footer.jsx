import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Services', href: '/#services-overview' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'About Us', href: '/#why-choose-us' },
    { label: 'Contact', href: '/#lead-form' }
  ];

  const services = [
    { label: 'Marketing & Outreach', href: '/services/marketing-outreach' },
    { label: 'Strategy & Consulting', href: '/services/strategy-consulting' },
    { label: 'Technology & AI', href: '/services/technology-ai' },
    { label: 'Branding Solutions', href: '/services/branding-solutions' }
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: '#', icon: 'LinkedIn' },
    { label: 'Twitter', href: '#', icon: 'Twitter' },
    { label: 'Facebook', href: '#', icon: 'Facebook' },
    { label: 'Instagram', href: '#', icon: 'Instagram' }
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-white">SG</span>
                </div>
                <span className="text-xl font-bold">San Gabriel</span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming businesses through expert consulting in marketing, strategy, technology, and branding.
              </p>
              
              {/* Contact info */}
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-3">
                  <span>📧</span>
                  <span>hello@sangabrielconsulting.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>📞</span>
                  <span>(555) 123-4567</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-accent-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <a 
                      href={service.href}
                      className="text-gray-300 hover:text-accent-500 transition-colors"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social & Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
              
              {/* Social links */}
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary-600 hover:bg-accent-500 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <span className="text-sm font-semibold">
                      {social.icon.charAt(0)}
                    </span>
                  </a>
                ))}
              </div>
              
              <p className="text-gray-300 text-sm mb-4">
                Stay updated with our latest insights and offers
              </p>
              
              {/* Newsletter signup placeholder */}
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-primary-600 border border-primary-500 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-500"
                />
                <button className="px-4 py-2 bg-accent-500 hover:bg-accent-600 rounded-r-lg transition-colors">
                  →
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-600 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} San Gabriel Consulting. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-300 hover:text-accent-500 transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-300 hover:text-accent-500 transition-colors">
                Terms of Service
              </button>
              <button className="text-gray-300 hover:text-accent-500 transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;