import VehicleHero from '../components/sections/home/VehicleHero';
import FlagshipProduct from '../components/sections/home/FlagshipProduct';
import PricingPreview from '../components/sections/home/PricingPreview';
import NewHowItWorks from '../components/sections/home/NewHowItWorks';
import PortfolioPreview from '../components/sections/home/PortfolioPreview';
import TestimonialsSection from '../components/sections/home/TestimonialsSection';
import IndustriesSection from '../components/sections/home/IndustriesSection';
import WhyChooseUsSection from '../components/sections/home/WhyChooseUsSection';
import FinalCTASection from '../components/sections/home/FinalCTASection';
import SEO from '../components/SEO';
import { pageSEOConfig } from '../utils/seo';

/**
 * Home Page - San Gabriel Solutions
 * Vehicle Advertising Rebrand Structure:
 * - Hero: "Advertise While You Drive" with vehicle advertising focus
 * - Flagship Product: Rear Window Ad as Best Seller
 * - Pricing Preview: Top 3 pricing options
 * - How It Works: 3 steps
 * - Visual Proof / Portfolio
 * - Testimonials
 * - Industries section
 * - Why Choose Us
 * - Final CTA block
 * 
 * Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 10.1
 */
export default function Home() {
  return (
    <div className="relative">
      <SEO {...pageSEOConfig.home} />
      
      {/* Hero Section - Vehicle Advertising Focus (Requirements: 1.1, 1.2, 1.3) */}
      <VehicleHero />

      {/* Flagship Product - Rear Window Ad Best Seller (Requirement: 1.4) */}
      <FlagshipProduct />

      {/* Pricing Preview - Top 3 options (Requirement: 2.1) */}
      <PricingPreview />

      {/* How It Works - 3 Steps */}
      <NewHowItWorks />

      {/* Visual Proof / Portfolio */}
      <PortfolioPreview />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Industries Section */}
      <IndustriesSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Final CTA Block */}
      <FinalCTASection />
    </div>
  );
}
