import Hero from '../components/sections/Hero';
import TrustIndicators from '../components/sections/TrustIndicators';
import HowItWorks from '../components/sections/HowItWorks';
import ServicesOverview from '../components/sections/ServicesOverview';
import FeaturedServices from '../components/sections/FeaturedServices';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import LeadForm from '../components/sections/LeadForm';

/**
 * Home Page - San Gabriel Solutions
 * Professional, clean design matching the brand
 */
export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* How It Works */}
      <HowItWorks />

      {/* Services Overview */}
      <ServicesOverview />

      {/* Featured Services */}
      <FeaturedServices />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Lead Form */}
      <LeadForm />
    </div>
  );
}
