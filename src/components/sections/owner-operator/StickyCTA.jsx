import { HiOutlineArrowRight } from 'react-icons/hi';
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
 * StickyCTA Component
 * Mobile-only fixed CTA button at bottom of screen
 * Requirements: 10.1-10.5
 */
const StickyCTA = () => {
  const { stickyCTA } = ownerOperatorContent;

  return (
    <>
      {/* 
        Fixed position at bottom - Requirement 10.2
        Only visible on mobile (< 768px) - Requirement 10.1
        Uses z-index to stay above content - Requirement 10.5
      */}
      <div 
        className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden z-50"
        role="complementary"
        aria-label="Quick access call-to-action"
      >
        <button
          onClick={scrollToCalendar}
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-500 hover:bg-accent-600 text-white text-lg font-semibold rounded-lg shadow-md transition-all duration-300"
          aria-label={`${stickyCTA.text} - scrolls to calendar booking section`}
        >
          {/* CTA Text - Requirement 10.3 */}
          {stickyCTA.text}
          <HiOutlineArrowRight className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Spacer to prevent content from being hidden behind sticky CTA on mobile */}
      <div className="h-20 md:hidden" aria-hidden="true" />
    </>
  );
};

export default StickyCTA;
