import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import ServicePricing from './ServicePricing';
import useReducedMotion from '../../../hooks/useReducedMotion';

/**
 * ServiceCard Component
 * Individual service display with business case, services list, advantages, pricing, and CTAs
 * Requirements: 2.1-2.4, 3.1-3.4, 4.1-4.5, 5.1-5.4, 6.1-6.3, 7.1-7.5, 8.1-8.5, 9.1-9.3, 10.1-10.4, 11.1-11.3
 * Requirements: 14.3, 14.4 - Smooth animations and hover effects with reduced motion support
 */
const ServiceCard = ({
  id,
  order,
  name,
  tagline,
  businessCase,
  services,
  advantages,
  pricing,
  ctas,
  portfolioProof,
  isCore,
  isFoundational
}) => {
  // On mobile (< 768px), business case starts collapsed for better UX
  // On desktop, it can start expanded or collapsed based on preference
  const [isBusinessCaseExpanded, setIsBusinessCaseExpanded] = useState(false);
  
  // Respect reduced motion preferences (Requirements: 14.3, 14.4)
  const prefersReducedMotion = useReducedMotion();
  
  // Animation variants that respect reduced motion
  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.01 : 0.5, 
        delay: prefersReducedMotion ? 0 : order * 0.05 
      }
    }
  };
  
  const listItemVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -10 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.01 : 0.3, 
        delay: prefersReducedMotion ? 0 : index * 0.05 
      }
    })
  };

  // Determine card styling based on service type
  const getCardStyle = () => {
    if (isCore) {
      return 'border-accent-500 bg-gradient-to-br from-accent-50 to-white';
    }
    if (isFoundational) {
      return 'border-neutral-300 bg-neutral-50';
    }
    return 'border-neutral-200 bg-white';
  };

  return (
    <motion.div
      id={`service-${id}`}
      className={`rounded-xl border-2 p-6 md:p-8 shadow-lg service-card-hover ${getCardStyle()}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
    >
      {/* Service Order Badge (for core service) */}
      {isCore && (
        <div className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
          CORE SERVICE
        </div>
      )}

      {/* Service Name */}
      <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">
        {name}
      </h3>

      {/* Tagline */}
      <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
        {tagline}
      </p>

      {/* Business Case Section (Collapsible on mobile, expandable on all devices) */}
      {businessCase && businessCase.problems && businessCase.problems.length > 0 && (
        <div className="mb-6" data-testid="business-case-section">
          <button
            onClick={() => setIsBusinessCaseExpanded(!isBusinessCaseExpanded)}
            className="flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-900 transition-colors w-full text-left min-h-[44px] py-2"
            aria-expanded={isBusinessCaseExpanded}
            data-testid="business-case-toggle"
          >
            <span className="flex-1">{businessCase.title || 'Why This Service Exists'}</span>
            <motion.span
              animate={{ rotate: isBusinessCaseExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-accent-500"
            >
              ▼
            </motion.span>
          </button>
          
          <AnimatePresence>
            {isBusinessCaseExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
                data-testid="business-case-content"
              >
                <ul className="mt-3 space-y-2 pl-4 border-l-2 border-accent-300">
                  {businessCase.problems.map((problem, index) => (
                    <li key={index} className="text-neutral-600 flex items-start gap-2 text-sm md:text-base">
                      <span className="text-accent-500 mt-1">•</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Services List - Staggered animations (Requirements: 14.3) */}
      {services && services.length > 0 && (
        <div className="mb-6">
          <h4 className="font-semibold text-primary-800 mb-3">What We Offer</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {services.map((service, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-2 text-neutral-700"
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <span className="text-green-500 mt-1">✓</span>
                <span>{service}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}

      {/* Design Advantages (if applicable) */}
      {advantages && advantages.length > 0 && (
        <div className="mb-6 bg-primary-50 rounded-lg p-4">
          <h4 className="font-semibold text-primary-800 mb-3">Design Advantage</h4>
          <ul className="space-y-2">
            {advantages.map((advantage, index) => (
              <li key={index} className="flex items-start gap-2 text-neutral-700">
                <span className="text-primary-500 mt-1">★</span>
                <span>{advantage}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Pricing (if applicable) */}
      {pricing && (
        <ServicePricing
          amount={pricing.amount}
          unit={pricing.unit}
          note={pricing.note}
        />
      )}

      {/* Portfolio Proof (for Website Design service) */}
      {portfolioProof && portfolioProof.websites && (
        <div className="mb-6 bg-green-50 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-3">Portfolio Proof</h4>
          <div className="flex flex-wrap gap-4 mb-2">
            {portfolioProof.websites.map((website, index) => (
              <a
                key={index}
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-800 underline font-medium"
              >
                {website.name}
              </a>
            ))}
          </div>
          <p className="text-sm text-green-700 italic">
            {portfolioProof.attribution}
          </p>
        </div>
      )}

      {/* CTA Buttons - Stack vertically on mobile, wrap on larger screens */}
      {ctas && ctas.length > 0 && (
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-6" data-testid="service-ctas">
          {ctas.map((cta, index) => (
            <Link
              key={index}
              to={cta.action === 'lead-form' ? `/contact?service=${cta.servicePreselect || id}` : '#'}
              onClick={cta.action === 'scroll-services' ? (e) => {
                e.preventDefault();
                document.getElementById('services-list')?.scrollIntoView({ behavior: 'smooth' });
              } : undefined}
              className="w-full sm:w-auto"
            >
              <Button
                variant={cta.primary ? 'primary' : 'outline'}
                size="md"
                className="w-full sm:w-auto min-h-[44px]" // Touch-friendly sizing, full width on mobile
              >
                {cta.label}
              </Button>
            </Link>
          ))}
        </div>
      )}

      {/* Foundational Service Note */}
      {isFoundational && (
        <p className="mt-4 text-sm text-neutral-500 italic">
          This service supports the ecosystem — it does not lead it.
        </p>
      )}
    </motion.div>
  );
};

export default ServiceCard;
