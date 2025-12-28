import NewHomeHero from '../components/sections/home/NewHomeHero';
import DualOfferSection from '../components/sections/home/DualOfferSection';
import NewHowItWorks from '../components/sections/home/NewHowItWorks';
import DriverTransparencySection from '../components/sections/home/DriverTransparencySection';
import PortfolioPreview from '../components/sections/home/PortfolioPreview';
import TestimonialsSection from '../components/sections/home/TestimonialsSection';
import IndustriesSection from '../components/sections/home/IndustriesSection';
import WhyChooseUsSection from '../components/sections/home/WhyChooseUsSection';
import FinalCTASection from '../components/sections/home/FinalCTASection';
import SEO from '../components/SEO';
import { pageSEOConfig } from '../utils/seo';

/**
 * Home Page - San Gabriel Solutions
 * Updated structure per developer handoff:
 * - Hero: Turn Vehicles Into Billboards — Or Brand Your Own Fleet
 * - Dual CTA: Advertise My Business / Brand My Vehicle/Fleet
 * - How It Works (3 steps): Choose Goal -> Design/Placement -> Get Seen Daily
 * - Driver Transparency Summary Block
 * - Two Offer Sections: (A) Advertise on Our Network; (B) Vehicle & Fleet Branding
 * - Visual Proof / Portfolio
 * - Testimonials (3-5 cards)
 * - Industries section
 * - Why Choose Us
 * - Final CTA block with Book/Quote
 */
export default function Home() {
  return (
    <div className="relative">
      <SEO {...pageSEOConfig.home} />
      
      {/* Hero Section - Dual CTA */}
      <NewHomeHero />

      {/* Two Offer Sections */}
      <DualOfferSection />

      {/* How It Works - 3 Steps */}
      <NewHowItWorks />

      {/* Driver Transparency Summary */}
      <DriverTransparencySection />

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
