import SEO from '../components/SEO';
import SoftwareHero from '../components/sections/owner-operator/SoftwareHero';
import PainSection from '../components/sections/owner-operator/PainSection';
import SolutionSection from '../components/sections/owner-operator/SolutionSection';
import TimePaybackSection from '../components/sections/owner-operator/TimePaybackSection';
import UrgencySection from '../components/sections/owner-operator/UrgencySection';
import CalendarSection from '../components/sections/owner-operator/CalendarSection';
import QualificationSection from '../components/sections/owner-operator/QualificationSection';
import FooterCTA from '../components/sections/owner-operator/FooterCTA';
import StickyCTA from '../components/sections/owner-operator/StickyCTA';

/**
 * Owner-Operator Software Landing Page
 * A conversion-focused landing page targeting owner-operators
 * Requirements: 1.2, 1.3
 */
const OwnerOperatorSoftware = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Software Built for Owner-Operators — Save Hours Every Week"
        description="Automate daily tasks, reduce manual work, and free up hours every week. Free for the first 100 owner-operators."
        keywords="owner-operator software, time saving, automation, small business, workflow management"
      />
      
      {/* SoftwareHero - Requirements 2.1-2.7 */}
      <SoftwareHero />

      {/* PainSection - Requirements 3.1-3.3 */}
      <PainSection />

      {/* SolutionSection - Requirements 4.1-4.3 */}
      <SolutionSection />

      {/* TimePaybackSection - Requirements 5.1-5.3 */}
      <TimePaybackSection />

      {/* UrgencySection - Requirements 6.1-6.3 */}
      <UrgencySection />

      {/* CalendarSection - Requirements 7.1-7.5 */}
      <CalendarSection />

      {/* QualificationSection - Requirements 8.1-8.3 */}
      <QualificationSection />

      {/* FooterCTA - Requirements 9.1-9.3 */}
      <FooterCTA />

      {/* StickyCTA - Requirements 10.1-10.5 (mobile only) */}
      <StickyCTA />
    </div>
  );
};

export default OwnerOperatorSoftware;
