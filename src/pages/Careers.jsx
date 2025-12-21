import CareersHero from '../components/sections/careers/CareersHero';
import CompensationSection from '../components/sections/careers/CompensationSection';
import RolesSection from '../components/sections/careers/RolesSection';
import ApplicationSection from '../components/sections/careers/ApplicationSection';
import SEO from '../components/SEO';
import { pageSEOConfig } from '../utils/seo';

/**
 * Careers Page - San Gabriel Solutions
 * Commission-based sales partner recruitment page
 * Requirements: 6.1, 6.3, 6.5
 */
export default function Careers() {
  return (
    <div className="relative pt-20">
      {/* SEO Meta Tags - Requirements: 6.5 */}
      <SEO {...pageSEOConfig.careers} />
      
      {/* Hero Section - Entrepreneurial headline and messaging */}
      {/* Requirements: 5.1, 5.2, 5.3, 6.1, 6.3 */}
      <CareersHero />

      {/* Compensation Section - Commission structure details */}
      {/* Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 5.1, 5.2, 6.1, 6.3 */}
      <CompensationSection />

      {/* Roles Section - Two sales paths side-by-side */}
      {/* Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 3.3, 3.4, 6.1, 6.3 */}
      <RolesSection />

      {/* Application Section - Unified hiring ad and application form */}
      {/* Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 5.4, 5.5, 6.1, 6.3 */}
      <ApplicationSection />
    </div>
  );
}
