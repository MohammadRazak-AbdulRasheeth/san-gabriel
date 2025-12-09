import React from 'react';

// Import section components
import Hero from '../components/sections/Hero';
import TrustIndicators from '../components/sections/TrustIndicators';
import HowItWorks from '../components/sections/HowItWorks';
import ServicesOverview from '../components/sections/ServicesOverview';
import FeaturedServices from '../components/sections/FeaturedServices';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import LeadForm from '../components/sections/LeadForm';

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustIndicators />
      <HowItWorks />
      <ServicesOverview />
      <FeaturedServices />
      <WhyChooseUs />
      <LeadForm />
    </div>
  );
}