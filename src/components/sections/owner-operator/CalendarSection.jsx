import { HiOutlineCalendar, HiOutlineCheckCircle, HiOutlinePlay } from 'react-icons/hi';
import ScrollReveal, { StaggeredScrollReveal } from '../../ui/ScrollReveal';
import Button from '../../ui/Button';
import { ownerOperatorContent } from '../../../data/ownerOperatorContent';

/**
 * Icon mapping for steps
 */
const stepIcons = [
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiOutlinePlay
];

/**
 * CalendarSection Component
 * Displays the booking process and calendar integration placeholder
 * Requirements: 7.1-7.5
 * 
 * @param {string} calendarScriptUrl - Optional calendar embed script URL
 */
const CalendarSection = ({ calendarScriptUrl }) => {
  const { calendar } = ownerOperatorContent;

  const handleCTAClick = () => {
    // Scroll to calendar embed area if present
    const calendarEmbed = document.getElementById('calendar-embed');
    if (calendarEmbed) {
      calendarEmbed.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="calendar-section" className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title - Requirement 7.1 */}
        <ScrollReveal direction="up" duration={0.6}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 text-center mb-12">
            {calendar.title}
          </h2>
        </ScrollReveal>

        {/* 3-Step Process - Requirement 7.2 */}
        <StaggeredScrollReveal 
          staggerDelay={0.15} 
          direction="up" 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
        >
          {calendar.steps.map((step, index) => {
            const IconComponent = stepIcons[index] || HiOutlineCalendar;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Step Number Circle */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary-700" aria-hidden="true" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </span>
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {step.text}
                </p>
              </div>
            );
          })}
        </StaggeredScrollReveal>

        {/* CTA Button - Requirement 7.3 */}
        <ScrollReveal direction="up" delay={0.3} duration={0.5}>
          <div className="text-center mb-12">
            <Button
              variant="primary"
              size="lg"
              onClick={handleCTAClick}
              className="!min-h-[56px] !text-lg !font-bold !px-10 !rounded-xl"
              aria-label={calendar.ctaText}
            >
              {calendar.ctaText}
            </Button>
          </div>
        </ScrollReveal>

        {/* Calendar Widget Placeholder - Requirements 7.4, 7.5 */}
        <ScrollReveal direction="up" delay={0.4} duration={0.6}>
          <div 
            id="calendar-embed"
            className="max-w-3xl mx-auto bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden"
          >
            {calendarScriptUrl ? (
              // Render calendar widget when script URL is provided
              <div 
                className="min-h-[400px]"
                dangerouslySetInnerHTML={{
                  __html: `<script src="${calendarScriptUrl}"></script>`
                }}
              />
            ) : (
              // Placeholder when no calendar script is provided
              <div className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <HiOutlineCalendar className="w-10 h-10 text-primary-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  Calendar Booking Coming Soon
                </h3>
                <p className="text-neutral-600 mb-6 max-w-md">
                  Our scheduling system is being set up. In the meantime, reach out to us directly.
                </p>
                <Button
                  variant="secondary"
                  href="/contact"
                  className="!rounded-lg"
                >
                  Contact Us
                </Button>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CalendarSection;
