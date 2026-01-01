import { HiOutlineArrowRight } from 'react-icons/hi';
import ScrollReveal from '../../ui/ScrollReveal';
import { ownerOperatorContent } from '../../../data/ownerOperatorContent';

/**
 * Scrolls to the calendar section smoothly
 */
const scrollToCalendar = () => {
  const calendarSection = document.getElementById('calendar-section');
  if (calendarSection) {
    calendarSection.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * FooterCTA Component
 * Final call-to-action section with gradient background
 * Requirements: 9.1-9.3
 */
const FooterCTA = () => {
  const { footerCTA } = ownerOperatorContent;

  return (
    <section className="py-20 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center">
            {/* Headline - Requirement 9.1 */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 max-w-3xl mx-auto leading-tight">
              {footerCTA.headline}
            </h2>

            {/* CTA Button - Requirements 9.2, 9.3 */}
            <button
              onClick={scrollToCalendar}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              aria-label={`${footerCTA.ctaText} - scrolls to calendar booking section`}
            >
              {footerCTA.ctaText}
              <HiOutlineArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FooterCTA;
