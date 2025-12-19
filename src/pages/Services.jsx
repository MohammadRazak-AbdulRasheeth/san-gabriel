import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getServicesByOrder } from '../data/services';
import ServiceHero from '../components/sections/services/ServiceHero';
import ServiceSection from '../components/sections/services/ServiceSection';
import PortfolioSection from '../components/sections/services/PortfolioSection';
import FinalCTA from '../components/sections/services/FinalCTA';

/**
 * Services Page
 * Displays all 10 services in alternating left/right layout
 * Matches the design from sangabrielconsulting.com/our-services/
 * Requirements: 1.1, 1.2, 1.3
 * Requirements: 14.3, 14.4 - Smooth animations and hover effects with reduced motion support
 */
const Services = () => {
  const services = getServicesByOrder();
  const location = useLocation();

  // Handle smooth scroll navigation from hash links
  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="pt-20">
      {/* ServiceHero - Traffic → Visibility → Monetization */}
      <ServiceHero />

      {/* Services List - All 10 services in alternating layout */}
      <div id="services-list" className="bg-white">
        {/* Services - Alternating left/right layout */}
        {services.map((service, index) => (
          <ServiceSection
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>

      {/* Portfolio Section - Visual showcase of executed work */}
      {/* Requirements: 12.1, 12.2, 12.3, 12.4 */}
      <PortfolioSection />

      {/* Final CTA Section - Requirements 13.1, 13.2, 13.3 */}
      <FinalCTA />
    </div>
  );
};

export default Services;
