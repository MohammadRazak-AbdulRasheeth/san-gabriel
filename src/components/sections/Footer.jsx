import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiArrowRight,
  HiSparkles,
  HiOutlineTruck,
  HiOutlineOfficeBuilding,
  HiOutlineCurrencyDollar,
} from 'react-icons/hi';
import { FaCar } from 'react-icons/fa';
import { footerDisclaimers } from '../../data/pricingConfig';

// Social Media Icons
const LinkedInIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isHovered, setIsHovered] = useState(null);

  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'Advertise', to: '/advertise' },
    { label: 'Signage & Wraps', to: '/signage-wraps' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Contact', to: '/contact' },
  ];

  const services = [
    { label: 'Vehicle Advertising', to: '/advertise', Icon: FaCar },
    { label: 'Fleet Branding', to: '/signage-wraps', Icon: HiOutlineTruck },
    { label: 'Store Signage', to: '/services/branding-banners-signs', Icon: HiOutlineOfficeBuilding },
    { label: 'Driver Program', to: '/vehicle-partner', Icon: HiOutlineCurrencyDollar },
  ];

  const legalLinks = [
    { label: 'Privacy', to: '/privacy' },
    { label: 'Terms', to: '/terms' },
    { label: 'Driver Terms', to: '/driver-terms' },
    { label: 'Advertiser Terms', to: '/advertiser-terms' },
  ];

  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/sangabrielsolutions', Icon: LinkedInIcon },
    { label: 'Facebook', href: 'https://facebook.com/sangabrielsolutions', Icon: FacebookIcon },
    { label: 'Instagram', href: 'https://instagram.com/sangabrielsolutions', Icon: InstagramIcon },
    { label: 'Twitter', href: 'https://twitter.com/sangabrielsol', Icon: TwitterIcon },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10">
        {/* CTA Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500/20 rounded-full text-accent-400 text-sm font-medium mb-6"
              >
                <HiSparkles className="w-4 h-4" />
                Ready to get started?
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Transform Your Advertising Today
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Join hundreds of businesses reaching millions of impressions with vehicle advertising starting at just $1/sq ft/month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold rounded-xl shadow-lg shadow-accent-500/25 transition-all duration-300"
                  >
                    Get a Free Quote
                    <HiArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/vehicle-partner"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-300"
                  >
                    Become a Driver Partner
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-12"
          >
            {/* Brand Column */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <Link to="/" className="inline-block mb-6 group">
                <motion.img
                  src="/SGS-LOGO.png"
                  alt="San Gabriel Solutions"
                  className="h-16 w-auto brightness-0 invert group-hover:scale-105 transition-transform duration-300"
                  whileHover={{ rotate: [0, -2, 2, 0] }}
                  transition={{ duration: 0.5 }}
                />
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Affordable advertising from <span className="text-accent-400 font-semibold">$1/sq.ft/month</span>. 
                Professional signage provider and vehicle-based advertising network.
              </p>
              
              {/* Contact Cards */}
              <div className="space-y-3">
                <motion.a
                  href="mailto:Contact@sangabrielsolutions.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <HiOutlineMail className="w-5 h-5 text-accent-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    Contact@sangabrielsolutions.com
                  </span>
                </motion.a>
                <motion.a
                  href="tel:753-726-4227"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <HiOutlinePhone className="w-5 h-5 text-accent-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    (753) SAN-GABR
                  </span>
                </motion.a>
                <motion.div
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center">
                    <HiOutlineLocationMarker className="w-5 h-5 text-accent-400" />
                  </div>
                  <span className="text-gray-300">
                    2967 Dundas Street West<br />Toronto, ON, Canada
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-accent-500 rounded-full" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    onHoverStart={() => setIsHovered(`quick-${index}`)}
                    onHoverEnd={() => setIsHovered(null)}
                  >
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 py-1"
                    >
                      <motion.span
                        animate={{ x: isHovered === `quick-${index}` ? 5 : 0 }}
                        className="text-accent-500"
                      >
                        →
                      </motion.span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-accent-500 rounded-full" />
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      to={service.to}
                      className="flex items-center gap-3 p-2 -ml-2 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-accent-500/20 flex items-center justify-center">
                        <service.Icon className="w-4 h-4 text-accent-400" />
                      </div>
                      <span className="text-gray-400 group-hover:text-white transition-colors">
                        {service.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-accent-500 rounded-full" />
                Stay Connected
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest insights and offers delivered to your inbox.
              </p>
              
              {/* Newsletter Form */}
              <div className="relative mb-8">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 pr-12 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent-500 hover:bg-accent-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <HiArrowRight className="w-4 h-4 text-white" />
                </motion.button>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/5 hover:bg-accent-500 border border-white/10 hover:border-accent-500 rounded-xl flex items-center justify-center transition-all duration-300 group"
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={social.label}
                  >
                    <social.Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Disclaimers */}
            <div className="mb-6 space-y-1 text-xs text-gray-500">
              <p>{footerDisclaimers.pricingSeparation}</p>
              <p>{footerDisclaimers.driverEarnings}</p>
              <p>{footerDisclaimers.trackingDisclaimer}</p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-500 text-sm"
              >
                © {currentYear} San Gabriel Solutions. All rights reserved.
              </motion.p>

              <div className="flex flex-wrap justify-center gap-6">
                {legalLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.to}
                      className="text-gray-500 hover:text-accent-400 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
