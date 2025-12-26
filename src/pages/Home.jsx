import HomeHero from '../components/sections/home/HomeHero';
import HomeOfferings from '../components/sections/home/HomeOfferings';
import HomeHowItWorks from '../components/sections/home/HomeHowItWorks';
import LeadForm from '../components/sections/LeadForm';
import SEO from '../components/SEO';
import { pageSEOConfig } from '../utils/seo';

/**
 * Home Page - San Gabriel Solutions
 * Structure per master plan:
 * - Hero: Affordable Advertising & High-Impact Signage
 * - Section 1: Advertise on Our Signs (pricing highlight)
 * - Section 2: Signs at Stores
 * - Section 3: Signs on Cars, Vans & Trucks
 * - How It Works (3 steps)
 * - Contact / CTA
 */
export default function Home() {
  return (
    <div className="relative">
      <SEO {...pageSEOConfig.home} />
      
      {/* Hero Section */}
      <HomeHero />

      {/* Three Core Offerings (mandatory order) */}
      <HomeOfferings />

      {/* How It Works - 3 Steps */}
      <HomeHowItWorks />

      {/* Contact / CTA Section */}
      <LeadForm />
    </div>
  );
}
