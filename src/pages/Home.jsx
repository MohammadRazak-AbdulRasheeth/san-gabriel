import AgencyHero from '../components/sections/home/AgencyHero';
import AgencyServicesOverview from '../components/sections/home/AgencyServicesOverview';
import AgencyDifferentiators from '../components/sections/home/AgencyDifferentiators';
import AgencyProofSection from '../components/sections/home/AgencyProofSection';
import LeadForm from '../components/sections/LeadForm';

/**
 * Home Page - San Gabriel Solutions Agency Rebrand
 * Professional marketing and advertising agency positioning
 * Requirements: 1.1, 1.2, 1.3, 1.5, 2.1, 2.2, 2.3, 3.1, 3.2, 4.1, 4.2, 4.3
 */
export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section - Value proposition and primary CTA */}
      {/* Requirements: 1.1, 1.2 */}
      <AgencyHero />

      {/* Services Overview - High-level services section */}
      {/* Requirements: 2.1, 2.2, 2.3 */}
      <AgencyServicesOverview />

      {/* Differentiators - Why choose San Gabriel Solutions */}
      {/* Requirements: 3.1, 3.2 */}
      <AgencyDifferentiators />

      {/* Proof Section - Metrics, industries, case studies */}
      {/* Requirements: 4.1, 4.2, 4.3 */}
      <AgencyProofSection />

      {/* Lead Form - Final CTA section with "Schedule a Consultation" */}
      {/* Requirements: 1.5 */}
      <LeadForm />
    </div>
  );
}
